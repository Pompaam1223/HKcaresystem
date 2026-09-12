import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Student, 
  StudentScreening, 
  HomeVisitRecord, 
  SDQEvaluation, 
  StudentReferral, 
  InterventionLog, 
  ActiveTab, 
  RiskLevel,
  Teacher
} from '../types';
import { 
  INITIAL_STUDENTS, 
  INITIAL_SCREENINGS, 
  INITIAL_HOME_VISITS, 
  INITIAL_SDQ_EVALUATIONS, 
  INITIAL_REFERRALS, 
  INITIAL_INTERVENTIONS 
} from '../data/mockData';
import { 
  HOMEROOM_TEACHERS, 
  getAdvisorTextForClassroom, 
  getTeachersForClassroom 
} from '../data/teachersData';
import { getStudentCartoonAvatarDataUrl } from '../components/StudentAvatar';

interface ReportModalState {
  isOpen: boolean;
  type: 'general' | 'student_profile' | 'screening' | 'homevisit' | 'sdq' | 'referral' | 'executive' | 'special_education';
  studentId?: string;
}

export interface AuthUser {
  username: string;
  name: string;
  role: string;
  school: string;
  serviceArea: string;
  loginTime: string;
  classroomLabel?: string;
  assignedGrades?: string[];
  assignedClassrooms?: string[];
  teacherId?: string;
}

export interface SummaryStats {
  totalStudents: number;
  normalCount: number;
  riskCount: number;
  problemCount: number;
  normalPercent: number;
  riskPercent: number;
  problemPercent: number;
  screenedCount: number;
  screenedPercent: number;
  homeVisitedCount: number;
  homeVisitedPercent: number;
  sdqCount: number;
  sdqPercent: number;
  referralCount: number;
  referralResolved: number;
  specialEduCount: number;
}

interface StudentCareContextType {
  students: Student[];
  screenings: StudentScreening[];
  homeVisits: HomeVisitRecord[];
  sdqEvaluations: SDQEvaluation[];
  referrals: StudentReferral[];
  interventions: InterventionLog[];
  
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
  selectedClassroom: string;
  setSelectedClassroom: (classroom: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRiskFilter: 'all' | RiskLevel;
  setSelectedRiskFilter: (risk: 'all' | RiskLevel) => void;

  // Selected student for quick 360-view
  activeStudentForModal: Student | null;
  setActiveStudentForModal: (student: Student | null) => void;

  // Report Modal
  reportModal: ReportModalState;
  isReportModalOpen: boolean;
  reportType: ReportModalState['type'];
  openReportModal: (type: ReportModalState['type'], studentId?: string) => void;
  closeReportModal: () => void;
  summaryStats: SummaryStats;

  // Notification Toast
  toastMessage: string | null;
  showToast: (message: string) => void;

  // Mutations
  addStudent: (student: Omit<Student, 'id' | 'homeVisitCompleted' | 'sdqCompleted'>) => Student;
  updateStudent: (id: string, updates: Partial<Student>) => void;
  deleteStudent: (id: string) => void;
  
  saveScreening: (data: Omit<StudentScreening, 'id'>) => void;
  saveHomeVisit: (data: Omit<HomeVisitRecord, 'id'>) => void;
  saveSDQ: (data: Omit<SDQEvaluation, 'id'>) => void;
  
  addReferral: (data: Omit<StudentReferral, 'id'>) => void;
  updateReferral: (id: string, updates: Partial<StudentReferral>) => void;
  
  addIntervention: (data: Omit<InterventionLog, 'id'>) => void;
  
  resetToDefaultData: () => void;
  exportDataJSON: () => void;
  importDataJSON: (jsonStr: string) => boolean;

  // Helpers
  getStudentById: (id: string) => Student | undefined;
  getScreeningForStudent: (studentId: string) => StudentScreening | undefined;
  getHomeVisitForStudent: (studentId: string) => HomeVisitRecord | undefined;
  getSDQForStudent: (studentId: string) => SDQEvaluation | undefined;
  getReferralsForStudent: (studentId: string) => StudentReferral[];
  getInterventionsForStudent: (studentId: string) => InterventionLog[];
  setAllStudentsToNormal: () => void;

  // Authentication
  isAuthenticated: boolean;
  currentUser: AuthUser | null;
  login: (username: string, password: string) => { success: boolean; error?: string };
  logout: () => void;

  // Teachers (ครูประจำชั้น)
  teachers: Teacher[];
  getTeachersForClassroom: (classroomOrGrade: string) => Teacher[];
}

const StudentCareContext = createContext<StudentCareContextType | undefined>(undefined);

const STORAGE_KEYS = {
  STUDENTS: 'care_students_dmc_v15',
  SCREENINGS: 'care_screenings_dmc_v13',
  HOME_VISITS: 'care_home_visits_dmc_v13',
  SDQ: 'care_sdq_dmc_v13',
  REFERRALS: 'care_referrals_dmc_v13',
  INTERVENTIONS: 'care_interventions_dmc_v13',
  AUTH: 'care_auth_session_v1',
};

export const StudentCareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    const rawList: Student[] = saved ? JSON.parse(saved) : INITIAL_STUDENTS;
    return rawList.map((s) => ({
      ...s,
      advisorName: getAdvisorTextForClassroom(s.classroom),
      avatarUrl: getStudentCartoonAvatarDataUrl(s.gender, s.prefix, s.seatNumber || s.id),
    }));
  });

  const [screenings, setScreenings] = useState<StudentScreening[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SCREENINGS);
    return saved ? JSON.parse(saved) : INITIAL_SCREENINGS;
  });

  const [homeVisits, setHomeVisits] = useState<HomeVisitRecord[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HOME_VISITS);
    return saved ? JSON.parse(saved) : INITIAL_HOME_VISITS;
  });

  const [sdqEvaluations, setSdqEvaluations] = useState<SDQEvaluation[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SDQ);
    return saved ? JSON.parse(saved) : INITIAL_SDQ_EVALUATIONS;
  });

  const [referrals, setReferrals] = useState<StudentReferral[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REFERRALS);
    return saved ? JSON.parse(saved) : INITIAL_REFERRALS;
  });

  const [interventions, setInterventions] = useState<InterventionLog[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INTERVENTIONS);
    return saved ? JSON.parse(saved) : INITIAL_INTERVENTIONS;
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedClassroom, setSelectedClassroom] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRiskFilter, setSelectedRiskFilter] = useState<'all' | RiskLevel>('all');

  const [activeStudentForModal, setActiveStudentForModal] = useState<Student | null>(null);
  const [reportModal, setReportModal] = useState<ReportModalState>({ isOpen: false, type: 'executive' });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = !!currentUser;

  const login = (username: string, password: string): { success: boolean; error?: string } => {
    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    // Check teacher credentials (including นางสาวอวยพร วิจักษณ์ภาณุสิน with username 640242)
    const matchedTeacher = HOMEROOM_TEACHERS.find(
      (t) => t.username && t.username.toLowerCase() === trimmedUser.toLowerCase()
    );

    if (matchedTeacher) {
      if (trimmedPass === matchedTeacher.defaultPassword || trimmedPass === '640242') {
        const isAdmin = matchedTeacher.username === '640242' || matchedTeacher.id === 'tch-11';
        const user: AuthUser = {
          username: matchedTeacher.username || trimmedUser,
          name: matchedTeacher.fullName,
          role: isAdmin ? 'ครูประจำชั้น ม.1 / ผู้ดูแลระบบสารสนเทศ' : `ครูประจำชั้น (${matchedTeacher.classroomLabel})`,
          school: 'โรงเรียนบ้านห้วยไคร้',
          serviceArea: 'สพป.สุโขทัย เขต 2',
          loginTime: new Date().toISOString(),
          classroomLabel: matchedTeacher.classroomLabel,
          assignedGrades: matchedTeacher.assignedGrades,
          assignedClassrooms: matchedTeacher.assignedClassrooms,
          teacherId: matchedTeacher.id,
        };

        setCurrentUser(user);
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(user));

        // Auto-select the teacher's grade/classroom for quick focus
        if (matchedTeacher.assignedGrades && matchedTeacher.assignedGrades.length === 1) {
          setSelectedGrade(matchedTeacher.assignedGrades[0]);
          if (matchedTeacher.assignedClassrooms && matchedTeacher.assignedClassrooms.length === 1) {
            setSelectedClassroom(matchedTeacher.assignedClassrooms[0]);
          }
        } else if (matchedTeacher.assignedGrades && matchedTeacher.assignedGrades.length > 1) {
          setSelectedGrade(matchedTeacher.assignedGrades[0]);
        }

        showToast(
          isAdmin
            ? `เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ คุณครู${matchedTeacher.fullName} (ผู้ดูแลระบบ)`
            : `เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ คุณครู${matchedTeacher.fullName} (${matchedTeacher.classroomLabel})`
        );
        return { success: true };
      } else {
        return {
          success: false,
          error: 'รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบรหัสผ่าน',
        };
      }
    }

    // Admin alias fallback (username: 640242)
    if (trimmedUser === '640242' || trimmedUser === 'admin' || trimmedUser === '12345') {
      if (trimmedPass === '640242' || (trimmedUser === '12345' && trimmedPass === '12345') || (trimmedUser === 'admin' && trimmedPass === 'admin')) {
        const user: AuthUser = {
          username: '640242',
          name: 'นางสาวอวยพร วิจักษณ์ภาณุสิน',
          role: 'ครูประจำชั้น ม.1 / ผู้ดูแลระบบสารสนเทศ',
          school: 'โรงเรียนบ้านห้วยไคร้',
          serviceArea: 'สพป.สุโขทัย เขต 2',
          loginTime: new Date().toISOString(),
          classroomLabel: 'ชั้น ม.1',
          assignedGrades: ['ม.1'],
          assignedClassrooms: ['ม.1/1'],
          teacherId: 'tch-11',
        };
        setCurrentUser(user);
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(user));
        setSelectedGrade('ม.1');
        setSelectedClassroom('ม.1/1');
        showToast('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ คุณครูอวยพร วิจักษณ์ภาณุสิน (ผู้ดูแลระบบ)');
        return { success: true };
      } else {
        return {
          success: false,
          error: 'รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบรหัสผ่าน',
        };
      }
    }

    return {
      success: false,
      error: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
    };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    showToast('ออกจากระบบเรียบร้อยแล้ว');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SCREENINGS, JSON.stringify(screenings));
  }, [screenings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HOME_VISITS, JSON.stringify(homeVisits));
  }, [homeVisits]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SDQ, JSON.stringify(sdqEvaluations));
  }, [sdqEvaluations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REFERRALS, JSON.stringify(referrals));
  }, [referrals]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INTERVENTIONS, JSON.stringify(interventions));
  }, [interventions]);

  const openReportModal = (type: ReportModalState['type'], studentId?: string) => {
    setReportModal({ isOpen: true, type, studentId });
  };

  const closeReportModal = () => {
    setReportModal((prev) => ({ ...prev, isOpen: false }));
  };

  const addStudent = (data: Omit<Student, 'id' | 'homeVisitCompleted' | 'sdqCompleted'>) => {
    const newId = `std-${Date.now().toString().slice(-4)}`;
    const newStudent: Student = {
      ...data,
      id: newId,
      advisorName: data.advisorName || getAdvisorTextForClassroom(data.classroom),
      avatarUrl: getStudentCartoonAvatarDataUrl(data.gender, data.prefix, data.seatNumber || newId),
      homeVisitCompleted: false,
      sdqCompleted: false,
    };
    setStudents((prev) => [newStudent, ...prev]);
    showToast(`เพิ่มนักเรียน "${newStudent.firstName} ${newStudent.lastName}" สำเร็จ`);
    return newStudent;
  };

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
    showToast('อัปเดตข้อมูลนักเรียนเรียบร้อย');
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    showToast('ลบข้อมูลนักเรียนแล้ว');
  };

  const saveScreening = (data: Omit<StudentScreening, 'id'>) => {
    const existingIndex = screenings.findIndex((s) => s.studentId === data.studentId);
    const newId = `scr-${Date.now().toString().slice(-4)}`;
    const newRecord: StudentScreening = { ...data, id: existingIndex >= 0 ? screenings[existingIndex].id : newId };

    if (existingIndex >= 0) {
      setScreenings((prev) => prev.map((item, idx) => (idx === existingIndex ? newRecord : item)));
    } else {
      setScreenings((prev) => [newRecord, ...prev]);
    }

    // Also update student currentRiskLevel
    updateStudent(data.studentId, { currentRiskLevel: data.overallStatus });
    showToast('บันทึกผลการคัดกรองนักเรียนเรียบร้อย');
  };

  const saveHomeVisit = (data: Omit<HomeVisitRecord, 'id'>) => {
    const existingIndex = homeVisits.findIndex((hv) => hv.studentId === data.studentId);
    const newId = `hv-${Date.now().toString().slice(-4)}`;
    const newRecord: HomeVisitRecord = { ...data, id: existingIndex >= 0 ? homeVisits[existingIndex].id : newId };

    if (existingIndex >= 0) {
      setHomeVisits((prev) => prev.map((item, idx) => (idx === existingIndex ? newRecord : item)));
    } else {
      setHomeVisits((prev) => [newRecord, ...prev]);
    }

    // Update student homeVisitCompleted flag
    updateStudent(data.studentId, { homeVisitCompleted: true });
    showToast('บันทึกข้อมูลการเยี่ยมบ้านเรียบร้อย');
  };

  const saveSDQ = (data: Omit<SDQEvaluation, 'id'>) => {
    const existingIndex = sdqEvaluations.findIndex((sdq) => sdq.studentId === data.studentId);
    const newId = `sdq-${Date.now().toString().slice(-4)}`;
    const newRecord: SDQEvaluation = { ...data, id: existingIndex >= 0 ? sdqEvaluations[existingIndex].id : newId };

    if (existingIndex >= 0) {
      setSdqEvaluations((prev) => prev.map((item, idx) => (idx === existingIndex ? newRecord : item)));
    } else {
      setSdqEvaluations((prev) => [newRecord, ...prev]);
    }

    updateStudent(data.studentId, { sdqCompleted: true });
    showToast('บันทึกผลการประเมิน SDQ เรียบร้อย');
  };

  const addReferral = (data: Omit<StudentReferral, 'id'>) => {
    const newId = `ref-${Date.now().toString().slice(-4)}`;
    const newReferral: StudentReferral = { ...data, id: newId };
    setReferrals((prev) => [newReferral, ...prev]);
    showToast('บันทึกใบส่งต่อนักเรียนเรียบร้อย');
  };

  const updateReferral = (id: string, updates: Partial<StudentReferral>) => {
    setReferrals((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates, updatedDate: new Date().toISOString().split('T')[0] } : r)));
    showToast('อัปเดตสถานะการส่งต่อเรียบร้อย');
  };

  const addIntervention = (data: Omit<InterventionLog, 'id'>) => {
    const newId = `int-${Date.now().toString().slice(-4)}`;
    const newLog: InterventionLog = { ...data, id: newId };
    setInterventions((prev) => [newLog, ...prev]);
    showToast('บันทึกกิจกรรมการช่วยเหลือเรียบร้อย');
  };

  const resetToDefaultData = () => {
    setStudents(INITIAL_STUDENTS);
    setScreenings(INITIAL_SCREENINGS);
    setHomeVisits(INITIAL_HOME_VISITS);
    setSdqEvaluations(INITIAL_SDQ_EVALUATIONS);
    setReferrals(INITIAL_REFERRALS);
    setInterventions(INITIAL_INTERVENTIONS);
    showToast('รีเซ็ตข้อมูลตั้งต้น (กลุ่มเสี่ยง 1 คน, มีปัญหา 1 คน ชั้นมัธยม, เยี่ยมบ้าน 100%)');
  };

  const setAllStudentsToNormal = () => {
    setStudents((prev) =>
      prev.map((s) => ({
        ...s,
        currentRiskLevel: 'normal',
      }))
    );

    setScreenings((prev) =>
      prev.map((scr) => ({
        ...scr,
        overallStatus: 'normal',
        dimensions: {
          learning: { status: 'normal', details: 'ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย' },
          health: { status: 'normal', details: 'สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง' },
          economic: { status: 'normal', details: 'สภาพความเป็นอยู่และเศรษฐกิจครอบครัวปกติ ได้รับการสนับสนุนการเรียนรู้เหมาะสม' },
          behavior: { status: 'normal', details: 'ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี' },
          safety: { status: 'normal', details: 'การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ' },
        },
        summaryNotes: 'อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน',
      }))
    );

    setSdqEvaluations((prev) =>
      prev.map((sdq) => ({
        ...sdq,
        scores: {
          ...sdq.scores,
          status: 'normal',
          totalDifficulties: Math.min(sdq.scores.totalDifficulties, 9),
        },
        notes: 'พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู',
      }))
    );

    setReferrals([]);
    showToast('ปรับนักเรียนทุกคนเข้าสู่ "กลุ่มปกติ" เรียบร้อยแล้ว (100%)');
  };

  const exportDataJSON = () => {
    const backup = {
      exportDate: new Date().toISOString(),
      schoolName: 'โรงเรียนบ้านห้วยไคร้ (สพป.สุโขทัย เขต 2)',
      students,
      screenings,
      homeVisits,
      sdqEvaluations,
      referrals,
      interventions,
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `student_care_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('ส่งออกไฟล์ข้อมูลสำรอง (JSON) เรียบร้อย');
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.students && Array.isArray(parsed.students)) {
        setStudents(parsed.students);
        if (parsed.screenings) setScreenings(parsed.screenings);
        if (parsed.homeVisits) setHomeVisits(parsed.homeVisits);
        if (parsed.sdqEvaluations) setSdqEvaluations(parsed.sdqEvaluations);
        if (parsed.referrals) setReferrals(parsed.referrals);
        if (parsed.interventions) setInterventions(parsed.interventions);
        showToast('นำเข้าข้อมูลระบบสำเร็จ');
        return true;
      }
      return false;
    } catch (e) {
      console.error(e);
      showToast('ไฟล์ JSON ไม่ถูกต้อง');
      return false;
    }
  };

  const getStudentById = (id: string) => students.find((s) => s.id === id);
  const getScreeningForStudent = (studentId: string) => screenings.find((s) => s.studentId === studentId);
  const getHomeVisitForStudent = (studentId: string) => homeVisits.find((hv) => hv.studentId === studentId);
  const getSDQForStudent = (studentId: string) => sdqEvaluations.find((sdq) => sdq.studentId === studentId);
  const getReferralsForStudent = (studentId: string) => referrals.filter((r) => r.studentId === studentId);
  const getInterventionsForStudent = (studentId: string) => interventions.filter((i) => i.studentId === studentId);

  const summaryStats: SummaryStats = {
    totalStudents: students.length,
    normalCount: students.filter((s) => s.currentRiskLevel === 'normal').length,
    riskCount: students.filter((s) => s.currentRiskLevel === 'risk').length,
    problemCount: students.filter((s) => s.currentRiskLevel === 'problem').length,
    normalPercent: students.length ? Math.round((students.filter((s) => s.currentRiskLevel === 'normal').length / students.length) * 100) : 0,
    riskPercent: students.length ? Math.round((students.filter((s) => s.currentRiskLevel === 'risk').length / students.length) * 100) : 0,
    problemPercent: students.length ? Math.round((students.filter((s) => s.currentRiskLevel === 'problem').length / students.length) * 100) : 0,
    screenedCount: screenings.length,
    screenedPercent: students.length ? Math.round((screenings.length / students.length) * 100) : 0,
    homeVisitedCount: students.filter((s) => s.homeVisitCompleted).length,
    homeVisitedPercent: students.length ? Math.round((students.filter((s) => s.homeVisitCompleted).length / students.length) * 100) : 0,
    sdqCount: sdqEvaluations.length,
    sdqPercent: students.length ? Math.round((sdqEvaluations.length / students.length) * 100) : 0,
    referralCount: referrals.length,
    referralResolved: referrals.filter((r) => r.status === 'completed').length,
    specialEduCount: students.filter((s) => s.hasDisability).length,
  };

  return (
    <StudentCareContext.Provider
      value={{
        students,
        screenings,
        homeVisits,
        sdqEvaluations,
        referrals,
        interventions,
        activeTab,
        setActiveTab,
        selectedGrade,
        setSelectedGrade,
        selectedClassroom,
        setSelectedClassroom,
        searchQuery,
        setSearchQuery,
        selectedRiskFilter,
        setSelectedRiskFilter,
        activeStudentForModal,
        setActiveStudentForModal,
        reportModal,
        isReportModalOpen: reportModal.isOpen,
        reportType: reportModal.type,
        openReportModal,
        closeReportModal,
        summaryStats,
        toastMessage,
        showToast,
        addStudent,
        updateStudent,
        deleteStudent,
        saveScreening,
        saveHomeVisit,
        saveSDQ,
        addReferral,
        updateReferral,
        addIntervention,
        setAllStudentsToNormal,
        resetToDefaultData,
        exportDataJSON,
        importDataJSON,
        getStudentById,
        getScreeningForStudent,
        getHomeVisitForStudent,
        getSDQForStudent,
        getReferralsForStudent,
        getInterventionsForStudent,
        isAuthenticated,
        currentUser,
        login,
        logout,
        teachers: HOMEROOM_TEACHERS,
        getTeachersForClassroom,
      }}
    >
      {children}
    </StudentCareContext.Provider>
  );
};

export const useStudentCare = () => {
  const context = useContext(StudentCareContext);
  if (!context) {
    throw new Error('useStudentCare must be used within a StudentCareProvider');
  }
  return context;
};
