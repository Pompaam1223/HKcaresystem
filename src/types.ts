export type RiskLevel = 'normal' | 'risk' | 'problem';

export type ScreeningDimension = 
  | 'learning'       // ด้านการเรียน
  | 'health'         // ด้านสุขภาพกายและจิต
  | 'economic'       // ด้านเศรษฐกิจและครอบครัว
  | 'behavior'       // ด้านพฤติกรรมและความประพฤติ
  | 'safety';        // ด้านความปลอดภัยและสารเสพติด/ความเสี่ยง

export interface StudentScreening {
  id: string;
  studentId: string;
  academicYear: string;
  term: 1 | 2;
  evaluatedDate: string;
  overallStatus: RiskLevel;
  dimensions: {
    learning: { status: RiskLevel; details: string };
    health: { status: RiskLevel; details: string };
    economic: { status: RiskLevel; details: string };
    behavior: { status: RiskLevel; details: string };
    safety: { status: RiskLevel; details: string };
  };
  summaryNotes: string;
  evaluatedBy: string;
}

export interface HomeVisitRecord {
  id: string;
  studentId: string;
  visitDate: string;
  academicYear: string;
  term: 1 | 2;
  visitorName: string;
  visitorPosition: string;
  // Housing & Living condition
  houseType: 'บ้านเดี่ยว' | 'บ้านเช่า/ห้องแถว' | 'แฟลต/คอนโด' | 'เพิงพักชั่วคราว' | 'อื่นๆ';
  livingWith: 'บิดามารดา' | 'บิดา' | 'มารดา' | 'ปู่ย่าตายาย' | 'ญาติ' | 'ผู้อื่น/ผู้ปกครอง';
  familyMembersCount: number;
  familyRelationship: 'อบอุ่นดีมาก' | 'ปกติทั่วไป' | 'มีความขัดแย้งบ้าง' | 'เหินห่าง/ตึงเครียด';
  monthlyIncome: number; // บาท
  hasDebt: boolean;
  distanceFromSchoolKm: number;
  commuteMethod: 'เดินเท้า' | 'จักรยาน' | 'รถจักรยานยนต์' | 'รถรับส่งนักเรียน' | 'รถประจำทาง' | 'ผู้ปกครองมาส่ง';
  // GPS & Media
  gpsCoordinates?: {
    lat: number;
    lng: number;
  };
  address: string;
  photoUrl?: string;
  homeCondition: 'มั่นคงถาวร สะอาด' | 'สภาพปานกลาง' | 'ทรุดโทรม ชำรุด' | 'ไม่ปลอดภัย/แออัด';
  // Needs
  requestedSupport: string[]; // e.g. 'ทุนการศึกษา', 'อุปกรณ์การเรียน', 'ชุดนักเรียน', 'อาหารกลางวัน', 'คำปรึกษาปัญหาครอบครัว'
  parentFeedback: string;
  teacherImpression: string;
  status: 'completed' | 'pending' | 'needs_revisit';
}

export interface SDQAnswers {
  [questionId: number]: 0 | 1 | 2; // 0=ไม่จริง, 1=จริงบางครั้ง, 2=จริงแน่นอน (หรือตามทิศทางข้อความ)
}

export interface SDQScoreSummary {
  emotionalScore: number;     // ด้านอารมณ์ (ข้อ 3, 8, 13, 16, 24)
  conductScore: number;       // ด้านความประพฤติ (ข้อ 5, 7, 12, 18, 22)
  hyperactivityScore: number; // ด้านอยู่ไม่นิ่ง/สมาธิสั้น (ข้อ 2, 10, 15, 21, 25)
  peerScore: number;          // ด้านเพื่อน (ข้อ 6, 11, 14, 19, 23)
  prosocialScore: number;     // ด้านสัมพันธภาพทางสังคม (ข้อ 1, 4, 9, 17, 20)
  totalDifficulties: number;  // คะแนนรวมปัญหา (4 ด้านแรก: เต็ม 40)
  status: RiskLevel;          // ปกติ (0-15), เสี่ยง (16-17), มีปัญหา (18-40)
}

export interface SDQEvaluation {
  id: string;
  studentId: string;
  academicYear: string;
  evaluatedDate: string;
  evaluatorType: 'teacher' | 'parent' | 'student';
  evaluatorName: string;
  scores: SDQScoreSummary;
  notes?: string;
}

export interface EQEvaluation {
  id: string;
  studentId: string;
  evaluatedDate: string;
  goodScore: number; // ดี (ควบคุมอารมณ์, มีคุณธรรม, ใส่ใจผู้อื่น)
  smartScore: number; // เก่ง (รู้จักตนเอง, คิดแก้ปัญหา, กล้าแสดงออก)
  happyScore: number; // สุข (พอใจในตนเอง, มองโลกในแง่ดี, ร่าเริงเบิกบาน)
  level: 'ต่ำกว่าเกณฑ์' | 'เกณฑ์ปกติ' | 'สูงกว่าเกณฑ์';
}

export interface StudentReferral {
  id: string;
  studentId: string;
  referralDate: string;
  type: 'internal' | 'external';
  toDepartment: string; // เช่น งานแนะแนว, ห้องพยาบาล, งานกิจการนักเรียน, รพ.ส่งเสริมสุขภาพตำบล, สหวิชาชีพ/พมจ.
  reason: string;
  symptomsAndDetails: string;
  urgency: 'normal' | 'urgent' | 'critical';
  referredBy: string;
  currentStatus: 'pending' | 'in_progress' | 'resolved' | 'referred_out';
  actionTaken?: string;
  resultNotes?: string;
  updatedDate?: string;
}

export interface InterventionLog {
  id: string;
  studentId: string;
  logDate: string;
  activityType: 'การให้คำปรึกษา' | 'การสอนซ่อมเสริม' | 'การมอบทุนการศึกษา' | 'การปรับพฤติกรรม' | 'การประสานผู้ปกครอง' | 'ส่งเสริมความสามารถพิเศษ';
  topic: string;
  description: string;
  counselor: string;
  outcome: 'พฤติกรรม/ผลการเรียนดีขึ้นชัดเจน' | 'พัฒนาการเป็นที่น่าพอใจ' | 'คงเดิม ต้องติดตามต่อเนื่อง' | 'จำเป็นต้องส่งต่อ';
  nextAppointment?: string;
}

export interface Student {
  id: string;
  studentCode: string; // เลขประจำตัว เช่น 45101
  citizenId: string;   // เลขบัตรประชาชน
  prefix: 'เด็กชาย' | 'เด็กหญิง' | 'นาย' | 'นางสาว';
  firstName: string;
  lastName: string;
  nickname: string;
  gender: 'male' | 'female';
  grade: string; // เช่น "ม.1", "ม.2", "ม.3"
  classroom: string; // เช่น "ม.1/1", "ม.1/2", "ม.2/1"
  roomNumber: number; // 1, 2, ...
  seatNumber: number; // เลขที่
  birthDate: string;
  bloodType: 'A' | 'B' | 'AB' | 'O';
  religion: 'พุทธ' | 'คริสต์' | 'อิสลาม' | 'อื่นๆ';
  gpax: number;
  advisorName: string; // ครูที่ปรึกษา
  phoneNumber: string;
  parentName: string;
  parentPhone: string;
  address: string;
  specialTalents: string[]; // e.g. ["ฟุตบอล", "วาดภาพ"]
  chronicIllness?: string;  // โรคประจำตัว
  allergy?: string;         // การแพ้ยา/อาหาร
  avatarUrl?: string;
  // ข้อมูลการศึกษาพิเศษ / ความพิการ (สศศ. สพฐ.)
  hasDisability?: boolean;
  disabilityType?: 'ออทิสติก' | 'บกพร่องทางการเรียนรู้' | 'บกพร่องทางสติปัญญา' | 'บกพร่องทางการได้ยิน' | 'บกพร่องทางการมองเห็น' | 'บกพร่องทางร่างกายหรือสุขภาพ' | 'บกพร่องทางการพูดและภาษา' | 'บกพร่องทางพฤติกรรมหรืออารมณ์' | 'พิการซ้อน' | string;
  isMultipleDisabilities?: boolean;
  specialEducationAgency?: string;
  // Summary tags for fast querying
  currentRiskLevel: RiskLevel;
  homeVisitCompleted: boolean;
  sdqCompleted: boolean;
}

export interface Teacher {
  id: string;
  prefix: 'นาย' | 'นาง' | 'นางสาว';
  firstName: string;
  lastName: string;
  fullName: string;
  role: string; // เช่น 'ครูประจำชั้น'
  classroomLabel: string; // เช่น 'ชั้น อ.2-3', 'ชั้น ป.1', 'ชั้น ม.1'
  assignedGrades: string[]; // เช่น ['อ.2', 'อ.3'] หรือ ['ป.1']
  assignedClassrooms: string[]; // เช่น ['อ.2/1', 'อ.3/1']
  phone?: string;
  email?: string;
  avatarUrl?: string;
  username?: string;
  defaultPassword?: string;
}

export type ActiveTab = 
  | 'dashboard'      // Dashboard รายงานผู้บริหาร
  | 'directory'      // ฐานข้อมูลนักเรียนกลาง
  | 'screening'      // ระบบคัดกรองนักเรียน
  | 'homevisit'      // ระบบเยี่ยมบ้านนักเรียน
  | 'analysis'       // ระบบวิเคราะห์ผู้เรียนรายบุคคล
  | 'sdq'            // ระบบประเมิน SDQ / EQ
  | 'referral'       // ระบบส่งต่อผู้เรียน
  | 'tracking';      // ระบบติดตามช่วยเหลือ

export type CloudConnectionState = 'connected' | 'connecting' | 'offline' | 'syncing' | 'error';

export interface CloudSyncStatus {
  state: CloudConnectionState;
  lastSyncedAt: string | null;
  totalStudentsInCloud: number;
  isRealtimeActive: boolean;
  errorMessage?: string;
}

export interface CloudActivityLog {
  id: string;
  teacherName: string;
  action: string;
  details: string;
  timestamp: string;
  classroom?: string;
}

