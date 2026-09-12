import { Teacher } from '../types';

export const HOMEROOM_TEACHERS: Teacher[] = [
  // ระดับปฐมวัย (อนุบาล 2-3)
  {
    id: 'tch-01',
    prefix: 'นางสาว',
    firstName: 'ปรียาภรณ์',
    lastName: 'พุฒเนียม',
    fullName: 'นางสาวปรียาภรณ์ พุฒเนียม',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น อ.2-3',
    assignedGrades: ['อ.2', 'อ.3'],
    assignedClassrooms: ['อ.2/1', 'อ.3/1'],
    phone: '081-923-4561',
    email: 'preeyaporn.p@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    username: '640242@0',
    defaultPassword: '640242',
  },

  // ระดับประถมศึกษา
  {
    id: 'tch-02',
    prefix: 'นางสาว',
    firstName: 'ลีลาวดี',
    lastName: 'รอดแล้ว',
    fullName: 'นางสาวลีลาวดี รอดแล้ว',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.1',
    assignedGrades: ['ป.1'],
    assignedClassrooms: ['ป.1/1'],
    phone: '084-512-3452',
    email: 'leelawadee.r@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80',
    username: '640242@2',
    defaultPassword: '640242',
  },
  {
    id: 'tch-03',
    prefix: 'นางสาว',
    firstName: 'ณัฐพัชร์',
    lastName: 'บุญเกตุ',
    fullName: 'นางสาวณัฐพัชร์ บุญเกตุ',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.2',
    assignedGrades: ['ป.2'],
    assignedClassrooms: ['ป.2/1'],
    phone: '089-876-5431',
    email: 'nattapat.b@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    username: '640242@3',
    defaultPassword: '640242',
  },
  {
    id: 'tch-04',
    prefix: 'นางสาว',
    firstName: 'นราวดี',
    lastName: 'ต๊ะแก้ว',
    fullName: 'นางสาวนราวดี ต๊ะแก้ว',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.3',
    assignedGrades: ['ป.3'],
    assignedClassrooms: ['ป.3/1'],
    phone: '086-321-4567',
    email: 'narawadee.t@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    username: '640242@4',
    defaultPassword: '640242',
  },
  {
    id: 'tch-05',
    prefix: 'นาย',
    firstName: 'รัชเวทย์',
    lastName: 'เกื้อกูล',
    fullName: 'นายรัชเวทย์ เกื้อกูล',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.3',
    assignedGrades: ['ป.3'],
    assignedClassrooms: ['ป.3/1'],
    phone: '082-145-6789',
    email: 'ratchawet.k@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    username: '640242@5',
    defaultPassword: '640242',
  },
  {
    id: 'tch-06',
    prefix: 'นาง',
    firstName: 'กนกวรรณ',
    lastName: 'คงคาลัย',
    fullName: 'นางกนกวรรณ คงคาลัย',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.4',
    assignedGrades: ['ป.4'],
    assignedClassrooms: ['ป.4/1'],
    phone: '081-456-7890',
    email: 'kanokwan.k@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&auto=format&fit=crop&q=80',
    username: '640242@6',
    defaultPassword: '640242',
  },
  {
    id: 'tch-07',
    prefix: 'นาย',
    firstName: 'ฐานิต',
    lastName: 'นาสา',
    fullName: 'นายฐานิต นาสา',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.4',
    assignedGrades: ['ป.4'],
    assignedClassrooms: ['ป.4/1'],
    phone: '087-654-3210',
    email: 'thanit.n@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    username: '640242@7',
    defaultPassword: '640242',
  },
  {
    id: 'tch-08',
    prefix: 'นาง',
    firstName: 'มาลัย',
    lastName: 'สกุลงาม',
    fullName: 'นางมาลัย สกุลงาม',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.5',
    assignedGrades: ['ป.5'],
    assignedClassrooms: ['ป.5/1'],
    phone: '085-234-5678',
    email: 'malai.s@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
    username: '640242@8',
    defaultPassword: '640242',
  },
  {
    id: 'tch-09',
    prefix: 'นางสาว',
    firstName: 'นารินทร์',
    lastName: 'เกิดผล',
    fullName: 'นางสาวนารินทร์ เกิดผล',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ป.6',
    assignedGrades: ['ป.6'],
    assignedClassrooms: ['ป.6/1'],
    phone: '083-987-6543',
    email: 'narin.k@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    username: '640242@9',
    defaultPassword: '640242',
  },

  // ระดับมัธยมศึกษาตอนต้น
  {
    id: 'tch-10',
    prefix: 'นางสาว',
    firstName: 'ฐิติการัตน์',
    lastName: 'ยงญาติ',
    fullName: 'นางสาวฐิติการัตน์ ยงญาติ',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ม.1',
    assignedGrades: ['ม.1'],
    assignedClassrooms: ['ม.1/1'],
    phone: '089-123-9876',
    email: 'thitikarat.y@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    username: '640242@10',
    defaultPassword: '640242',
  },
  {
    id: 'tch-11',
    prefix: 'นางสาว',
    firstName: 'อวยพร',
    lastName: 'วิจักษณ์ภาณุสิน',
    fullName: 'นางสาวอวยพร วิจักษณ์ภาณุสิน',
    role: 'ครูประจำชั้น ม.1 / ผู้ดูแลระบบ',
    classroomLabel: 'ชั้น ม.1',
    assignedGrades: ['ม.1'],
    assignedClassrooms: ['ม.1/1'],
    phone: '086-789-1234',
    email: 'uayporn.w@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
    username: '640242',
    defaultPassword: '640242',
  },
  {
    id: 'tch-12',
    prefix: 'นาง',
    firstName: 'พรทิพย์',
    lastName: 'อรัญสรรค์',
    fullName: 'นางพรทิพย์ อรัญสรรค์',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ม.2',
    assignedGrades: ['ม.2'],
    assignedClassrooms: ['ม.2/1'],
    phone: '081-345-6781',
    email: 'porntip.a@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
    username: '640242@11',
    defaultPassword: '640242',
  },
  {
    id: 'tch-13',
    prefix: 'นาง',
    firstName: 'วิมล',
    lastName: 'อุปถัมภ์',
    fullName: 'นางวิมล อุปถัมภ์',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ม.2',
    assignedGrades: ['ม.2'],
    assignedClassrooms: ['ม.2/1'],
    phone: '082-987-1234',
    email: 'wimon.u@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=150&auto=format&fit=crop&q=80',
    username: '640242@14',
    defaultPassword: '640242',
  },
  {
    id: 'tch-14',
    prefix: 'นางสาว',
    firstName: 'พรนิภา',
    lastName: 'ชูสุวรรณ',
    fullName: 'นางสาวพรนิภา ชูสุวรรณ',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ม.3',
    assignedGrades: ['ม.3'],
    assignedClassrooms: ['ม.3/1'],
    phone: '089-456-1230',
    email: 'pornnipa.c@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=150&auto=format&fit=crop&q=80',
    username: '640242@12',
    defaultPassword: '640242',
  },
  {
    id: 'tch-15',
    prefix: 'นาย',
    firstName: 'กิตติวิสุทธิ์',
    lastName: 'ศรีชัยตัน',
    fullName: 'นายกิตติวิสุทธิ์ ศรีชัยตัน',
    role: 'ครูประจำชั้น',
    classroomLabel: 'ชั้น ม.3',
    assignedGrades: ['ม.3'],
    assignedClassrooms: ['ม.3/1'],
    phone: '085-678-9012',
    email: 'kittiwisut.s@huaykrai.ac.th',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    username: '640242@13',
    defaultPassword: '640242',
  },
];

/**
 * ดึงรายชื่อครูประจำชั้นตามห้องเรียน (เช่น "ป.3/1" หรือ "ป.3")
 */
export function getTeachersForClassroom(classroomOrGrade: string): Teacher[] {
  if (!classroomOrGrade || classroomOrGrade === 'all') return HOMEROOM_TEACHERS;

  return HOMEROOM_TEACHERS.filter(t => 
    t.assignedClassrooms.some(c => c === classroomOrGrade) ||
    t.assignedGrades.some(g => g === classroomOrGrade) ||
    classroomOrGrade.includes(t.classroomLabel.replace('ชั้น ', ''))
  );
}

/**
 * ดึงข้อความชื่อครูที่ปรึกษา/ประจำชั้นสำหรับใช้เป็นค่าเริ่มต้นในข้อมูลนักเรียน
 */
export function getAdvisorTextForClassroom(classroom: string): string {
  if (classroom.startsWith('อ.2') || classroom.startsWith('อ.3')) {
    return 'นางสาวปรียาภรณ์ พุฒเนียม (ครูประจำชั้น อ.2-3)';
  }
  if (classroom.startsWith('ป.1')) {
    return 'นางสาวลีลาวดี รอดแล้ว (ครูประจำชั้น ป.1)';
  }
  if (classroom.startsWith('ป.2')) {
    return 'นางสาวณัฐพัชร์ บุญเกตุ (ครูประจำชั้น ป.2)';
  }
  if (classroom.startsWith('ป.3')) {
    return 'นางสาวนราวดี ต๊ะแก้ว, นายรัชเวทย์ เกื้อกูล (ครูประจำชั้น ป.3)';
  }
  if (classroom.startsWith('ป.4')) {
    return 'นางกนกวรรณ คงคาลัย, นายฐานิต นาสา (ครูประจำชั้น ป.4)';
  }
  if (classroom.startsWith('ป.5')) {
    return 'นางมาลัย สกุลงาม (ครูประจำชั้น ป.5)';
  }
  if (classroom.startsWith('ป.6')) {
    return 'นางสาวนารินทร์ เกิดผล (ครูประจำชั้น ป.6)';
  }
  if (classroom.startsWith('ม.1')) {
    return 'นางสาวฐิติการัตน์ ยงญาติ, นางสาวอวยพร วิจักษณ์ภาณุสิน (ครูประจำชั้น ม.1)';
  }
  if (classroom.startsWith('ม.2')) {
    return 'นางพรทิพย์ อรัญสรรค์, นางวิมล อุปถัมภ์ (ครูประจำชั้น ม.2)';
  }
  if (classroom.startsWith('ม.3')) {
    return 'นางสาวพรนิภา ชูสุวรรณ, นายกิตติวิสุทธิ์ ศรีชัยตัน (ครูประจำชั้น ม.3)';
  }
  return 'ครูประจำชั้น โรงเรียนบ้านห้วยไคร้';
}
