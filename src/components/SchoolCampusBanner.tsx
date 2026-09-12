import React, { useState } from 'react';
import { 
  School, 
  Sparkles, 
  Sun, 
  Heart, 
  Compass, 
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';
import chibiCampusBanner from '../assets/images/chibi_school_campus_1788747785010.jpg';
import chibiMascotImage from '../assets/images/chibi_school_mascot_1788747839639.jpg';
import chibiBoyImage from '../assets/images/chibi_boy_student_1788747800469.jpg';
import chibiGirlImage from '../assets/images/chibi_girl_student_1788747812581.jpg';
import chibiTeacherImage from '../assets/images/chibi_teacher_guide_1788747825131.jpg';
import { useStudentCare } from '../context/StudentCareContext';

interface SchoolCampusBannerProps {
  onOpenNewStudent?: () => void;
}

export const SchoolCampusBanner: React.FC<SchoolCampusBannerProps> = ({ onOpenNewStudent }) => {
  const { 
    students, 
    setActiveTab, 
    openReportModal, 
    currentUser,
    homeVisits,
    referrals
  } = useStudentCare();

  const [isTipsExpanded, setIsTipsExpanded] = useState(false);
  const [mascotQuoteIndex, setMascotQuoteIndex] = useState(0);

  const mascotQuotes = [
    'สวัสดีครับคุณครู! บรรยากาศโรงเรียนบ้านห้วยไคร้วันนี้สดใส อากาศดีมากครับ เด็กๆ พร้อมรับการดูแลและคำแนะนำจากคุณครูครับ!',
    'ระบบคัดกรอง 5 ด้าน ช่วยให้เรามองเห็นแววเด่นและความต้องการพิเศษของเด็กๆ ได้ตรงจุด รอยยิ้มของเด็กคือความสุขของเราครับ',
    'การเยี่ยมบ้านช่วยสร้างสายใยผูกพันระหว่างโรงเรียนกับผู้ปกครอง ให้เด็กๆ รู้สึกอบอุ่นและปลอดภัยเสมอครับ',
    'ประเมิน SDQ และ EQ ครบถ้วน เพื่อสุขภาวะที่ดีทั้งกายและใจของนักเรียนโรงเรียนบ้านห้วยไคร้ครับ!'
  ];

  const totalStudents = students.length;
  const problemCount = students.filter(s => s.currentRiskLevel === 'problem').length;
  const riskCount = students.filter(s => s.currentRiskLevel === 'risk').length;
  const normalCount = students.filter(s => s.currentRiskLevel === 'normal').length;
  const visitedCount = students.filter(s => s.homeVisitCompleted).length;

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-[0_10px_35px_rgba(37,99,235,0.22)] border-2 border-white/60 mb-5">
      
      {/* Background Campus Illustration with Soft Ambient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-35 mix-blend-overlay pointer-events-none">
        <img 
          src={chibiCampusBanner} 
          alt="บรรยากาศโรงเรียนบ้านห้วยไคร้"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter saturate-125"
        />
      </div>

      {/* Decorative Sun & Sky Elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-300/30 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-12 w-56 h-56 rounded-full bg-cyan-300/25 blur-3xl pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Side: School Atmosphere & Mascot Welcome */}
        <div className="flex-1 space-y-3">
          
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-xs">
              <School className="w-3.5 h-3.5 text-amber-300" />
              <span>โรงเรียนบ้านห้วยไคร้ สพป.สุโขทัย เขต 2</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/25 backdrop-blur-md text-emerald-100 border border-emerald-300/40">
              <Sun className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
              <span>บรรยากาศยามเช้าแจ่มใส • 28°C</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-bold text-[11px] shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>Huaykrai Care Campus</span>
            </span>
          </div>

          {/* Heading & Title */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-sm flex items-center gap-2">
              <span>HUAYKRAI CARE SYSTEM</span>
              <span className="text-amber-300 text-lg sm:text-2xl font-bold">✨</span>
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 font-medium mt-1 drop-shadow-xs max-w-2xl">
              ระบบดูแลช่วยเหลือนักเรียนครบวงจรตามมาตรฐาน สพฐ. สร้างพื้นที่ปลอดภัยและสุขภาวะที่ดีแก่นักเรียนทุกคน
            </p>
          </div>

          {/* Character Speech Bubble */}
          <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30 shadow-inner max-w-2xl">
            {/* Mascot Avatar Thumbnail */}
            <div 
              className="relative shrink-0 w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md bg-amber-100 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setMascotQuoteIndex((prev) => (prev + 1) % mascotQuotes.length)}
              title="คลิกเพื่อฟังเสียงทักทายจากน้องแคร์ใจดี"
            >
              <img 
                src={chibiMascotImage} 
                alt="น้องแคร์ใจดี"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
            </div>

            {/* Speech text */}
            <div className="flex-1 text-xs text-white">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="font-bold text-amber-200 flex items-center gap-1">
                  <span>น้องแคร์ใจดี (Mascot)</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/30 text-amber-100 border border-amber-300/40">เพื่อนคู่คิดครู</span>
                </span>
                <button 
                  onClick={() => setMascotQuoteIndex((prev) => (prev + 1) % mascotQuotes.length)}
                  className="text-[10px] text-sky-200 hover:text-white underline cursor-pointer"
                >
                  ข้อความถัดไป
                </button>
              </div>
              <p className="leading-relaxed font-normal text-sky-50">
                "{mascotQuotes[mascotQuoteIndex]}"
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Quick Characters & Campus Care Stats */}
        <div className="w-full lg:w-auto flex flex-col items-stretch lg:items-end gap-3 shrink-0">
          
          {/* Character Family Row */}
          <div className="flex items-center justify-center lg:justify-end gap-2 bg-white/20 backdrop-blur-md p-2 rounded-2xl border border-white/30 shadow-xs">
            <div className="text-right hidden sm:block pr-2">
              <div className="text-xs font-bold text-white">ครอบครัวห้วยไคร้</div>
              <div className="text-[10px] text-sky-200">Huaykrai Characters</div>
            </div>
            {/* Boy */}
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-sky-300 shadow-sm bg-sky-100" title="ตัวแทนนักเรียนชาย">
              <img src={chibiBoyImage} alt="นักเรียนชาย" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            {/* Girl */}
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-pink-300 shadow-sm bg-pink-100" title="ตัวแทนนักเรียนหญิง">
              <img src={chibiGirlImage} alt="นักเรียนหญิง" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            {/* Teacher */}
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-sm bg-emerald-100" title="ครูผู้ดูแลนักเรียน">
              <img src={chibiTeacherImage} alt="ครูที่ปรึกษา" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Quick Stat Pill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 text-xs">
            
            <div className="bg-white/90 backdrop-blur-md text-slate-800 p-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium leading-none">นักเรียนทั้งหมด</div>
                <div className="text-base font-extrabold text-blue-900 leading-tight mt-0.5">{totalStudents} คน</div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md text-slate-800 p-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium leading-none">กลุ่มปกติ (สดใส)</div>
                <div className="text-base font-extrabold text-emerald-700 leading-tight mt-0.5">{normalCount} คน</div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md text-slate-800 p-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium leading-none">เยี่ยมบ้านแล้ว</div>
                <div className="text-base font-extrabold text-amber-800 leading-tight mt-0.5">{visitedCount} คน</div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md text-slate-800 p-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium leading-none">กลุ่มเสี่ยง/มีปัญหา</div>
                <div className="text-base font-extrabold text-rose-700 leading-tight mt-0.5">{riskCount + problemCount} คน</div>
              </div>
            </div>

          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={() => setActiveTab('screening')}
              className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:translate-y-0.5 text-amber-950 font-bold text-xs shadow-[0_3px_0_#b45309] hover:shadow-[0_2px_0_#b45309] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-900" />
              <span>คัดกรอง 5 ด้าน</span>
            </button>

            <button
              onClick={() => setActiveTab('homevisit')}
              className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 active:translate-y-0.5 text-blue-900 font-bold text-xs shadow-[0_3px_0_#cbd5e1] hover:shadow-[0_2px_0_#cbd5e1] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>บันทึกเยี่ยมบ้าน</span>
            </button>

            <button
              onClick={() => openReportModal('executive')}
              className="px-3 py-1.5 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 active:translate-y-0.5 text-white font-medium text-xs border border-white/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="พิมพ์รายงานสรุป"
            >
              <FileText className="w-3.5 h-3.5 text-sky-200" />
              <span className="hidden sm:inline">พิมพ์รายงาน</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
