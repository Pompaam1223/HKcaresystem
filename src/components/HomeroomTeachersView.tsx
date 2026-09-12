import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  GraduationCap, 
  Phone, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Home, 
  FileText, 
  School,
  ExternalLink,
  ChevronRight,
  KeyRound,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { Teacher } from '../types';

interface HomeroomTeachersViewProps {
  onSelectClassroom?: (classroom: string) => void;
}

export const HomeroomTeachersView: React.FC<HomeroomTeachersViewProps> = ({ onSelectClassroom }) => {
  const { teachers, students, openReportModal } = useStudentCare();
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'all' | 'kindergarten' | 'primary' | 'secondary'>('all');
  const [selectedTeacherForDetail, setSelectedTeacherForDetail] = useState<Teacher | null>(null);

  // Filter teachers
  const filteredTeachers = teachers.filter((t) => {
    // Level filter
    if (levelFilter === 'kindergarten') {
      if (!t.classroomLabel.includes('อ.')) return false;
    } else if (levelFilter === 'primary') {
      if (!t.classroomLabel.includes('ป.')) return false;
    } else if (levelFilter === 'secondary') {
      if (!t.classroomLabel.includes('ม.')) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = t.fullName.toLowerCase().includes(q);
      const matchClass = t.classroomLabel.toLowerCase().includes(q);
      const matchPhone = (t.phone || '').includes(q);
      const matchRooms = t.assignedClassrooms.some((r) => r.toLowerCase().includes(q));
      if (!matchName && !matchClass && !matchPhone && !matchRooms) return false;
    }

    return true;
  });

  // Calculate stats for each teacher's assigned students
  const getTeacherStats = (teacher: Teacher) => {
    const teacherStudents = students.filter((s) =>
      teacher.assignedClassrooms.includes(s.classroom) ||
      teacher.assignedGrades.includes(s.grade)
    );

    const normal = teacherStudents.filter((s) => s.currentRiskLevel === 'normal').length;
    const risk = teacherStudents.filter((s) => s.currentRiskLevel === 'risk').length;
    const problem = teacherStudents.filter((s) => s.currentRiskLevel === 'problem').length;
    const specialEdu = teacherStudents.filter((s) => s.hasDisability).length;
    const homeVisitDone = teacherStudents.filter((s) => s.homeVisitCompleted).length;
    const sdqDone = teacherStudents.filter((s) => s.sdqCompleted).length;

    return {
      students: teacherStudents,
      total: teacherStudents.length,
      normal,
      risk,
      problem,
      specialEdu,
      homeVisitDone,
      sdqDone,
      homeVisitPct: teacherStudents.length > 0 ? Math.round((homeVisitDone / teacherStudents.length) * 100) : 0,
      sdqPct: teacherStudents.length > 0 ? Math.round((sdqDone / teacherStudents.length) * 100) : 0,
    };
  };

  const totalPrimaryTeachers = teachers.filter((t) => t.classroomLabel.includes('ป.')).length;
  const totalSecondaryTeachers = teachers.filter((t) => t.classroomLabel.includes('ม.')).length;
  const totalKindergartenTeachers = teachers.filter((t) => t.classroomLabel.includes('อ.')).length;

  return (
    <div className="space-y-6">
      {/* Overview Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">ครูประจำชั้นทั้งหมด</span>
            <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <School className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{teachers.length} ท่าน</div>
          <div className="text-[11px] text-slate-400 mt-0.5">ครอบคลุม 11 ห้องเรียน อ.2 - ม.3</div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">ระดับปฐมวัย</span>
            <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <GraduationCap className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{totalKindergartenTeachers} ท่าน</div>
          <div className="text-[11px] text-slate-400 mt-0.5">ชั้น อ.2 - อ.3</div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">ระดับประถมศึกษา</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Users className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{totalPrimaryTeachers} ท่าน</div>
          <div className="text-[11px] text-slate-400 mt-0.5">ชั้น ป.1 - ป.6</div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">ระดับมัธยมศึกษา</span>
            <span className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{totalSecondaryTeachers} ท่าน</div>
          <div className="text-[11px] text-slate-400 mt-0.5">ชั้น ม.1 - ม.3</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาชื่อครู, ชั้นเรียน, หรือเบอร์โทร..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setLevelFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              levelFilter === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            ทั้งหมด ({teachers.length})
          </button>
          <button
            onClick={() => setLevelFilter('kindergarten')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              levelFilter === 'kindergarten'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            ปฐมวัย (อ.2-3) ({totalKindergartenTeachers})
          </button>
          <button
            onClick={() => setLevelFilter('primary')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              levelFilter === 'primary'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            ประถมศึกษา (ป.1-6) ({totalPrimaryTeachers})
          </button>
          <button
            onClick={() => setLevelFilter('secondary')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              levelFilter === 'secondary'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            มัธยมศึกษา (ม.1-3) ({totalSecondaryTeachers})
          </button>
        </div>
      </div>

      {/* Teachers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeachers.map((teacher) => {
          const stats = getTeacherStats(teacher);
          const isKindergarten = teacher.classroomLabel.includes('อ.');
          const isPrimary = teacher.classroomLabel.includes('ป.');
          const badgeColor = isKindergarten 
            ? 'bg-amber-100 text-amber-800 border-amber-200'
            : isPrimary
            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
            : 'bg-purple-100 text-purple-800 border-purple-200';

          return (
            <div 
              key={teacher.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5">
                {/* Header with Avatar, Name & Class Badge */}
                <div className="flex items-start gap-3.5">
                  {teacher.avatarUrl ? (
                    <img 
                      src={teacher.avatarUrl} 
                      alt={teacher.fullName}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-2xl object-cover border border-slate-200 shadow-2xs shrink-0"
                    />
                  ) : (
                    <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-2xs shrink-0">
                      {teacher.firstName[0]}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${badgeColor}`}>
                        {teacher.classroomLabel}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {teacher.role}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base mt-1 truncate">
                      {teacher.fullName}
                    </h3>

                    <div className="text-xs text-slate-500 mt-0.5">
                      ห้องเรียน: {teacher.assignedClassrooms.join(', ')}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 gap-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{teacher.phone || '08x-xxx-xxxx'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate text-slate-500">{teacher.email || 'teacher@huaykrai.ac.th'}</span>
                  </div>
                </div>

                {/* Account Credentials */}
                {teacher.username && (
                  <div className="mt-2.5 p-2 rounded-xl bg-blue-50/80 border border-blue-100/90 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-600 flex items-center gap-1 font-medium">
                        <KeyRound className="w-3 h-3 text-blue-600" />
                        <span>Username:</span>
                      </span>
                      <span className="font-mono font-bold text-blue-800 bg-white px-2 py-0.5 rounded-md border border-blue-200">
                        {teacher.username}
                      </span>
                    </div>
                  </div>
                )}

                {/* Class Student Statistics */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700">นักเรียนในความดูแล</span>
                    <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {stats.total} คน
                    </span>
                  </div>

                  {/* Risk breakdown pills */}
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
                    <div className="bg-emerald-50 text-emerald-800 rounded-lg py-1 border border-emerald-100">
                      <div className="font-bold">{stats.normal}</div>
                      <div className="text-[9px] text-emerald-600">ปกติ</div>
                    </div>
                    <div className="bg-amber-50 text-amber-800 rounded-lg py-1 border border-amber-100">
                      <div className="font-bold">{stats.risk}</div>
                      <div className="text-[9px] text-amber-600">เสี่ยง</div>
                    </div>
                    <div className="bg-rose-50 text-rose-800 rounded-lg py-1 border border-rose-100">
                      <div className="font-bold">{stats.problem}</div>
                      <div className="text-[9px] text-rose-600">มีปัญหา</div>
                    </div>
                  </div>

                  {/* Special education indicator if any */}
                  {stats.specialEdu > 0 && (
                    <div className="mt-2 flex items-center justify-between text-[11px] text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                      <span className="flex items-center gap-1 font-medium">
                        <Sparkles className="w-3 h-3 text-purple-600" />
                        เด็กการศึกษาพิเศษ (IEP)
                      </span>
                      <span className="font-bold">{stats.specialEdu} คน</span>
                    </div>
                  )}

                  {/* Home Visit & SDQ completion */}
                  <div className="mt-2.5 pt-2 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                    <div>
                      <div className="flex justify-between mb-0.5">
                        <span>เยี่ยมบ้าน</span>
                        <span className="font-semibold text-indigo-600">{stats.homeVisitPct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-indigo-500 h-full rounded-full transition-all" 
                          style={{ width: `${stats.homeVisitPct}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-0.5">
                        <span>ประเมิน SDQ</span>
                        <span className="font-semibold text-purple-600">{stats.sdqPct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-purple-500 h-full rounded-full transition-all" 
                          style={{ width: `${stats.sdqPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    if (onSelectClassroom && teacher.assignedClassrooms.length > 0) {
                      onSelectClassroom(teacher.assignedClassrooms[0]);
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-blue-50 text-blue-700 text-xs font-semibold rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-2xs"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>ดูนักเรียน ({stats.total})</span>
                </button>

                <button
                  onClick={() => setSelectedTeacherForDetail(teacher)}
                  className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition-colors shadow-2xs"
                  title="ดูรายละเอียดครูประจำชั้น"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">ไม่พบข้อมูลครูประจำชั้น</h3>
          <p className="text-xs text-slate-500 mt-1">ลองเปลี่ยนคำค้นหาหรือระดับชั้นการศึกษา</p>
        </div>
      )}

      {/* Teacher Detail Modal */}
      {selectedTeacherForDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-start justify-between">
              <div className="flex items-center gap-4">
                {selectedTeacherForDetail.avatarUrl ? (
                  <img 
                    src={selectedTeacherForDetail.avatarUrl} 
                    alt={selectedTeacherForDetail.fullName}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-2xl shadow-sm">
                    {selectedTeacherForDetail.firstName[0]}
                  </div>
                )}
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 mb-1">
                    {selectedTeacherForDetail.classroomLabel}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {selectedTeacherForDetail.fullName}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {selectedTeacherForDetail.role} • โรงเรียนบ้านห้วยไคร้
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedTeacherForDetail(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Contact Card & Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-xs">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-slate-400 text-[11px]">เบอร์โทรศัพท์ติดต่อ</div>
                    <div className="font-semibold text-slate-800">{selectedTeacherForDetail.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-slate-400 text-[11px]">อีเมลสถานศึกษา</div>
                    <div className="font-semibold text-slate-800 truncate">{selectedTeacherForDetail.email}</div>
                  </div>
                </div>

                {selectedTeacherForDetail.username && (
                  <div className="sm:col-span-2 pt-2 mt-1 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-blue-900 font-medium">
                      <KeyRound className="w-4 h-4 text-blue-600" />
                      <span>ชื่อผู้ใช้งาน (Username): <strong className="font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">{selectedTeacherForDetail.username}</strong></span>
                    </div>
                    <div className="text-slate-500 text-xs flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>รหัสผ่าน: ปกป้องความปลอดภัย</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Roster for this teacher */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>รายชื่อนักเรียนในชั้นเรียน ({getTeacherStats(selectedTeacherForDetail).total} คน)</span>
                  </h4>
                  {onSelectClassroom && selectedTeacherForDetail.assignedClassrooms.length > 0 && (
                    <button
                      onClick={() => {
                        const room = selectedTeacherForDetail.assignedClassrooms[0];
                        setSelectedTeacherForDetail(null);
                        onSelectClassroom(room);
                      }}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                    >
                      <span>เปิดในหน้ารายชื่อ</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="max-h-64 overflow-y-auto rounded-xl border border-slate-200 divide-y divide-slate-100">
                  {getTeacherStats(selectedTeacherForDetail).students.map((student) => (
                    <div key={student.id} className="p-2.5 flex items-center justify-between text-xs hover:bg-slate-50">
                      <div className="flex items-center gap-2">
                        <span className="w-5 text-center font-mono text-slate-400 font-bold">{student.seatNumber}</span>
                        <span className="font-semibold text-slate-800">{student.prefix}{student.firstName} {student.lastName}</span>
                        {student.hasDisability && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 text-purple-800 font-bold">
                            {student.disabilityType}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400">{student.classroom}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          student.currentRiskLevel === 'normal'
                            ? 'bg-emerald-100 text-emerald-800'
                            : student.currentRiskLevel === 'risk'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {student.currentRiskLevel === 'normal' ? 'ปกติ' : student.currentRiskLevel === 'risk' ? 'เสี่ยง' : 'มีปัญหา'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-2">
              <button
                onClick={() => setSelectedTeacherForDetail(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
