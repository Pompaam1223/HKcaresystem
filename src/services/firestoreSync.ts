import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  getDocs, 
  onSnapshot, 
  writeBatch, 
  query, 
  orderBy, 
  limit, 
  addDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { 
  Student, 
  StudentScreening, 
  HomeVisitRecord, 
  SDQEvaluation, 
  StudentReferral, 
  InterventionLog, 
  CloudActivityLog 
} from '../types';

export const COLLECTIONS = {
  STUDENTS: 'students',
  SCREENINGS: 'screenings',
  HOME_VISITS: 'home_visits',
  SDQ: 'sdq_evaluations',
  REFERRALS: 'referrals',
  INTERVENTIONS: 'interventions',
  ACTIVITY_LOGS: 'activity_logs',
  METADATA: 'school_metadata'
} as const;

// --- Subscriptions (Realtime Listeners across devices) ---

export function subscribeToStudents(
  onData: (students: Student[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.STUDENTS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: Student[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as Student);
      });
      // Sort by grade/classroom or id if needed
      onData(list);
    },
    (err) => {
      console.warn('Firestore students listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToScreenings(
  onData: (screenings: StudentScreening[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.SCREENINGS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: StudentScreening[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as StudentScreening);
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore screenings listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToHomeVisits(
  onData: (visits: HomeVisitRecord[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.HOME_VISITS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: HomeVisitRecord[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as HomeVisitRecord);
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore home visits listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToSDQ(
  onData: (sdqs: SDQEvaluation[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.SDQ);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: SDQEvaluation[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as SDQEvaluation);
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore SDQ listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToReferrals(
  onData: (referrals: StudentReferral[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.REFERRALS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: StudentReferral[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as StudentReferral);
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore referrals listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToInterventions(
  onData: (interventions: InterventionLog[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.INTERVENTIONS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: InterventionLog[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as InterventionLog);
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore interventions listener error:', err);
      if (onError) onError(err);
    }
  );
}

export function subscribeToActivityLogs(
  onData: (logs: CloudActivityLog[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, COLLECTIONS.ACTIVITY_LOGS);
  const q = query(colRef, orderBy('timestamp', 'desc'), limit(25));
  return onSnapshot(
    q,
    (snapshot) => {
      const list: CloudActivityLog[] = [];
      snapshot.forEach((docSnap) => {
        list.push({ id: docSnap.id, ...(docSnap.data() as Omit<CloudActivityLog, 'id'>) });
      });
      onData(list);
    },
    (err) => {
      console.warn('Firestore activity logs listener error:', err);
      if (onError) onError(err);
    }
  );
}

// --- Cloud Mutations (Writes to Firestore for all devices) ---

export async function saveStudentToCloud(student: Student) {
  try {
    const docRef = doc(db, COLLECTIONS.STUDENTS, student.id);
    await setDoc(docRef, student, { merge: true });
  } catch (err) {
    console.error('Error saving student to cloud:', err);
    throw err;
  }
}

export async function deleteStudentFromCloud(studentId: string) {
  try {
    const docRef = doc(db, COLLECTIONS.STUDENTS, studentId);
    await deleteDoc(docRef);
  } catch (err) {
    console.error('Error deleting student from cloud:', err);
    throw err;
  }
}

export async function saveScreeningToCloud(screening: StudentScreening) {
  try {
    const docRef = doc(db, COLLECTIONS.SCREENINGS, screening.studentId);
    await setDoc(docRef, screening, { merge: true });
  } catch (err) {
    console.error('Error saving screening to cloud:', err);
    throw err;
  }
}

export async function saveHomeVisitToCloud(homeVisit: HomeVisitRecord) {
  try {
    const docRef = doc(db, COLLECTIONS.HOME_VISITS, homeVisit.studentId);
    await setDoc(docRef, homeVisit, { merge: true });
  } catch (err) {
    console.error('Error saving home visit to cloud:', err);
    throw err;
  }
}

export async function saveSDQToCloud(sdq: SDQEvaluation) {
  try {
    const docRef = doc(db, COLLECTIONS.SDQ, sdq.studentId);
    await setDoc(docRef, sdq, { merge: true });
  } catch (err) {
    console.error('Error saving SDQ to cloud:', err);
    throw err;
  }
}

export async function saveReferralToCloud(referral: StudentReferral) {
  try {
    const docRef = doc(db, COLLECTIONS.REFERRALS, referral.id);
    await setDoc(docRef, referral, { merge: true });
  } catch (err) {
    console.error('Error saving referral to cloud:', err);
    throw err;
  }
}

export async function saveInterventionToCloud(intervention: InterventionLog) {
  try {
    const docRef = doc(db, COLLECTIONS.INTERVENTIONS, intervention.id);
    await setDoc(docRef, intervention, { merge: true });
  } catch (err) {
    console.error('Error saving intervention to cloud:', err);
    throw err;
  }
}

export async function logActivityToCloud(log: Omit<CloudActivityLog, 'id'>) {
  try {
    const colRef = collection(db, COLLECTIONS.ACTIVITY_LOGS);
    await addDoc(colRef, {
      ...log,
      timestamp: log.timestamp || new Date().toISOString()
    });
  } catch (err) {
    console.warn('Error logging activity to cloud:', err);
  }
}

// --- Batch Seeding / Initial Population Helper ---

export async function checkAndSeedCloudDatabase(
  initialStudents: Student[],
  initialScreenings: StudentScreening[],
  initialHomeVisits: HomeVisitRecord[],
  initialSDQ: SDQEvaluation[],
  initialReferrals: StudentReferral[],
  initialInterventions: InterventionLog[],
  forceOverwrite: boolean = false
): Promise<{ seeded: boolean; count: number }> {
  try {
    const studentsCol = collection(db, COLLECTIONS.STUDENTS);
    const existingSnapshot = await getDocs(studentsCol);

    if (!forceOverwrite && !existingSnapshot.empty) {
      return { seeded: false, count: existingSnapshot.size };
    }

    // Firestore batch writes are capped at 500 ops per batch
    const chunkArray = <T>(arr: T[], size: number): T[][] => {
      const result: T[][] = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    };

    // 1. Seed Students
    const studentChunks = chunkArray(initialStudents, 400);
    for (const chunk of studentChunks) {
      const batch = writeBatch(db);
      for (const s of chunk) {
        const ref = doc(db, COLLECTIONS.STUDENTS, s.id);
        batch.set(ref, s);
      }
      await batch.commit();
    }

    // 2. Seed Screenings
    const screeningChunks = chunkArray(initialScreenings, 400);
    for (const chunk of screeningChunks) {
      const batch = writeBatch(db);
      for (const sc of chunk) {
        const ref = doc(db, COLLECTIONS.SCREENINGS, sc.studentId);
        batch.set(ref, sc);
      }
      await batch.commit();
    }

    // 3. Seed Home visits
    const visitChunks = chunkArray(initialHomeVisits, 400);
    for (const chunk of visitChunks) {
      const batch = writeBatch(db);
      for (const v of chunk) {
        const ref = doc(db, COLLECTIONS.HOME_VISITS, v.studentId);
        batch.set(ref, v);
      }
      await batch.commit();
    }

    // 4. Seed SDQ
    const sdqChunks = chunkArray(initialSDQ, 400);
    for (const chunk of sdqChunks) {
      const batch = writeBatch(db);
      for (const sq of chunk) {
        const ref = doc(db, COLLECTIONS.SDQ, sq.studentId);
        batch.set(ref, sq);
      }
      await batch.commit();
    }

    // 5. Seed Referrals & Interventions
    const refBatch = writeBatch(db);
    for (const r of initialReferrals) {
      const ref = doc(db, COLLECTIONS.REFERRALS, r.id);
      refBatch.set(ref, r);
    }
    for (const it of initialInterventions) {
      const ref = doc(db, COLLECTIONS.INTERVENTIONS, it.id);
      refBatch.set(ref, it);
    }
    await refBatch.commit();

    // Log initial seed activity
    await logActivityToCloud({
      teacherName: 'ระบบส่วนกลาง (โรงเรียนบ้านห้วยไคร้)',
      action: 'เริ่มต้นฐานข้อมูล Cloud Database',
      details: `นำเข้าข้อมูลนักเรียน ${initialStudents.length} คน พร้อมผลคัดกรอง และประเมิน SDQ เข้าสู่ระบบคลาวด์`,
      timestamp: new Date().toISOString()
    });

    return { seeded: true, count: initialStudents.length };
  } catch (err) {
    console.error('Failed to seed initial data to cloud:', err);
    throw err;
  }
}
