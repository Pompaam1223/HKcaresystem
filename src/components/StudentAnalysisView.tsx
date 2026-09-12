import React, { useState } from 'react';
import { 
  UserCheck, 
  Award, 
  HeartPulse, 
  BookOpen, 
  Home, 
  Smile, 
  ArrowRightLeft, 
  ClipboardList, 
  Printer, 
  Edit3, 
  MapPin, 
  Phone, 
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { Student } from '../types';
import { StudentAvatar } from './StudentAvatar';

export const StudentAnalysisView: React.FC = () => {
  const { 
    students, 
    screenings, 
    homeVisits, 
    sdqEvaluations, 
    referrals, 
    interventions,
    selectedGrade,
    selectedClassroom,
    openReportModal,
    setActiveTab
  } = useStudentCare();

  const filteredStudents = students.filter(s => {
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    return true;
  });

  const [selectedStudentId, setSelectedStudentId] = useState<string>(filteredStudents[0]?.id || students[0]?.id || '');
  const currentStudent = students.find(s => s.id === selectedStudentId) || students[0];

  const screening = screenings.find(s => s.studentId === currentStudent?.id);
  const homeVisit = homeVisits.find(h => h.studentId === currentStudent?.id);
  const sdq = sdqEvaluations.find(s => s.studentId === currentStudent?.id);
  const stdReferrals = referrals.filter(r => r.studentId === currentStudent?.id);
  const stdInterventions = interventions.filter(i => i.studentId === currentStudent?.id);

  if (!currentStudent) {
    return <div className="p-8 text-center text-slate-500">ไม่พบข้อมูลนักเรียน</div>;
  }

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
              <UserCheck className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบวิเคราะห์ผู้เรียนรายบุคคล (Individual Student Analysis)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                การรวบรวมและวิเคราะห์ข้อมูลรอบด้าน 5 มิติ เพื่อส่งเสริมศักยภาพและแก้ปัญหาตรงจุด
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Student Picker */}
          <select
            id="select-analysis-student"
            value={currentStudent.id}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:ring-2 focus:ring-emerald-500"
          >
            {filteredStudents.map(s => (
              <option key={s.id} value={s.id}>
                {s.classroom} #{s.seatNumber}: {s.prefix}{s.firstName} {s.lastName}
              </option>
            ))}
          </select>

          <button
            id="btn-print-student-profile"
            onClick={() => openReportModal('student_profile', currentStudent.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์ระเบียนรายบุคคล</span>
          </button>
        </div>
      </div>

      {/* Main Student Profile Card & Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 1 Col: Student Digital ID & Quick Status */}
        <div className="space-y-4">
          
          {/* Digital Student Card */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 shadow-sm border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-blue-300 uppercase">
                STUDENT PROFILE CARD
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {currentStudent.classroom}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <StudentAvatar 
                gender={currentStudent.gender} 
                prefix={currentStudent.prefix} 
                seed={currentStudent.seatNumber || currentStudent.id} 
                size="xl" 
                rounded="2xl" 
                border={false}
                className="border-2 border-white/20 shadow-xs"
              />
              <div>
                <h3 className="text-base font-bold tracking-tight">
                  {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName}
                </h3>
                <p className="text-xs text-blue-200">
                  ชื่อเล่น: &quot;{currentStudent.nickname}&quot; • เลขที่ {currentStudent.seatNumber}
                </p>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  รหัส: {currentStudent.studentCode}
                </div>
              </div>
            </div>

            {/* Quick Stats inside card */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">GPAX</div>
                <div className="text-sm font-bold text-emerald-400">{currentStudent.gpax.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase">หมู่โลหิต</div>
                <div className="text-sm font-bold text-white">{currentStudent.bloodType}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase">สถานะกลุ่ม</div>
                <div className="text-sm font-bold capitalize">
                  {currentStudent.currentRiskLevel === 'normal' && <span className="text-emerald-400">ปกติ</span>}
                  {currentStudent.currentRiskLevel === 'risk' && <span className="text-amber-400">เสี่ยง</span>}
                  {currentStudent.currentRiskLevel === 'problem' && <span className="text-rose-400">มีปัญหา</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Personal Details */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 text-sm pb-2 border-b border-slate-100 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-blue-600" />
              ข้อมูลการติดต่อและครอบครัว
            </h4>

            <div className="space-y-2 text-slate-600">
              <div>
                <span className="text-slate-400 block text-[11px]">เลขประจำตัวประชาชน:</span>
                <span className="font-mono text-slate-800">{currentStudent.citizenId}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">วันเกิด:</span>
                <span>{currentStudent.birthDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">เบอร์โทรศัพท์นักเรียน:</span>
                <span className="font-medium text-slate-800">{currentStudent.phoneNumber || '-'}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">ผู้ปกครองหลัก:</span>
                <span className="font-semibold text-slate-800">{currentStudent.parentName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">เบอร์โทรผู้ปกครอง:</span>
                <a href={`tel:${currentStudent.parentPhone}`} className="text-blue-600 font-semibold hover:underline">
                  {currentStudent.parentPhone}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">ที่อยู่ปัจจุบัน:</span>
                <span className="text-slate-700">{currentStudent.address}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">ครูที่ปรึกษา:</span>
                <span className="text-slate-800 font-medium">{currentStudent.advisorName}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right 2 Cols: Deep 5 Dimensions Analysis & History */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Strengths & Development Needs (จุดเด่น vs จุดควรพัฒนา) */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              การวิเคราะห์จุดเด่น (Strengths) และจุดที่ควรพัฒนา (Development Needs)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Strengths */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-2">
                <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  จุดเด่นและความสามารถพิเศษ
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentStudent.specialTalents.map((tal) => (
                    <span key={tal} className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      ⭐ {tal}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-600 mt-2">
                  {currentStudent.gpax >= 3.0 ? 'ผลการเรียนอยู่ในเกณฑ์ดี มีความสนใจใฝ่รู้' : 'มีความสามารถทางทักษะปฏิบัติและกิจกรรมนอกห้องเรียน'}
                </p>
              </div>

              {/* Development Needs */}
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 space-y-2">
                <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  จุดที่ควรได้รับการส่งเสริมและพัฒนา
                </div>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  {screening?.dimensions.learning.status !== 'normal' && (
                    <li>ทบทวนเนื้อหาวิชาการและเสริมทักษะการเรียนรู้</li>
                  )}
                  {screening?.dimensions.economic.status !== 'normal' && (
                    <li>การสนับสนุนทุนการศึกษาและอุปกรณ์การเรียน</li>
                  )}
                  {screening?.dimensions.behavior.status !== 'normal' && (
                    <li>การปรับพฤติกรรมและความสม่ำเสมอในการเข้าชั้นเรียน</li>
                  )}
                  {screening?.dimensions.health.status !== 'normal' && (
                    <li>การดูแลสุขภาพกาย/สุขภาพจิตเป็นพิเศษ</li>
                  )}
                  {screening?.overallStatus === 'normal' && (
                    <li>ส่งเสริมการเข้าร่วมประกวดแข่งขันและพัฒนาความเป็นผู้นำ</li>
                  )}
                </ul>
              </div>

            </div>
          </div>

          {/* Health & Special Needs Box */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-rose-500" />
              ข้อมูลสุขภาพและข้อจำกัดทางกายภาพ
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[11px]">โรคประจำตัว:</span>
                <span className="font-semibold text-slate-800">
                  {currentStudent.chronicIllness || 'ไม่มีโรคประจำตัว แข็งแรงสมบูรณ์'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[11px]">ประวัติการแพ้ยา / แพ้อาหาร:</span>
                <span className="font-semibold text-slate-800">
                  {currentStudent.allergy || 'ไม่มีประวัติแพ้ยาหรืออาหาร'}
                </span>
              </div>
            </div>
          </div>

          {/* 360-degree Status Overview across 4 pillars */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-3">
              สถานะการดำเนินงาน 4 เสาหลักของนักเรียนคนนี้:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {/* Screening */}
              <div 
                onClick={() => setActiveTab('screening')}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 cursor-pointer transition-all"
              >
                <div className="text-[11px] text-slate-500 font-medium">1. การคัดกรอง 5 ด้าน</div>
                <div className="mt-1 font-bold">
                  {screening ? (
                    <span className={`capitalize ${screening.overallStatus === 'problem' ? 'text-rose-600' : screening.overallStatus === 'risk' ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {screening.overallStatus === 'problem' ? 'กลุ่มมีปัญหา' : screening.overallStatus === 'risk' ? 'กลุ่มเสี่ยง' : 'กลุ่มปกติ'}
                    </span>
                  ) : <span className="text-slate-400">ยังไม่ประเมิน</span>}
                </div>
                <div className="text-[10px] text-blue-600 mt-1">ดูแบบคัดกรอง →</div>
              </div>

              {/* Home Visit */}
              <div 
                onClick={() => setActiveTab('homevisit')}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-indigo-300 cursor-pointer transition-all"
              >
                <div className="text-[11px] text-slate-500 font-medium">2. การเยี่ยมบ้าน</div>
                <div className="mt-1 font-bold">
                  {homeVisit ? (
                    <span className="text-indigo-600">เยี่ยมแล้ว ({homeVisit.visitDate})</span>
                  ) : <span className="text-amber-600">ยังไม่เยี่ยมบ้าน</span>}
                </div>
                <div className="text-[10px] text-indigo-600 mt-1">ดูแบบ บร.01 →</div>
              </div>

              {/* SDQ */}
              <div 
                onClick={() => setActiveTab('sdq')}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-purple-300 cursor-pointer transition-all"
              >
                <div className="text-[11px] text-slate-500 font-medium">3. ประเมิน SDQ</div>
                <div className="mt-1 font-bold">
                  {sdq ? (
                    <span className="text-purple-700">{sdq.scores.totalDifficulties} คะแนน ({sdq.scores.status === 'normal' ? 'ปกติ' : sdq.scores.status === 'risk' ? 'เสี่ยง' : 'มีปัญหา'})</span>
                  ) : <span className="text-slate-400">ยังไม่ประเมิน</span>}
                </div>
                <div className="text-[10px] text-purple-600 mt-1">ดูคะแนน SDQ →</div>
              </div>

              {/* Referrals & Follow-ups */}
              <div 
                onClick={() => setActiveTab('referral')}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-300 cursor-pointer transition-all"
              >
                <div className="text-[11px] text-slate-500 font-medium">4. การส่งต่อ / ช่วยเหลือ</div>
                <div className="mt-1 font-bold">
                  {stdReferrals.length > 0 ? (
                    <span className="text-amber-600">{stdReferrals.length} รายการส่งต่อ</span>
                  ) : (
                    <span className="text-slate-500">ไม่มีเคสส่งต่อ</span>
                  )}
                </div>
                <div className="text-[10px] text-amber-600 mt-1">บันทึกช่วยเหลือ ({stdInterventions.length}) →</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
