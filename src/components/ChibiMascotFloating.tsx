import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Heart, 
  MessageCircle, 
  BookOpen, 
  Compass, 
  Smile, 
  AlertTriangle, 
  Award,
  ChevronRight,
  School
} from 'lucide-react';
import chibiMascotImage from '../assets/images/chibi_school_mascot_1788747839639.jpg';
import chibiTeacherImage from '../assets/images/chibi_teacher_guide_1788747825131.jpg';
import { useStudentCare } from '../context/StudentCareContext';
import { StudentAvatar } from './StudentAvatar';

export const ChibiMascotFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTabHelper] = useState<'tips' | 'risk' | 'stats'>('tips');
  
  const { 
    students, 
    setActiveTab, 
    setSelectedStudentForDetail, 
    openReportModal 
  } = useStudentCare();

  const problemStudents = students.filter(s => s.currentRiskLevel === 'problem');
  const riskStudents = students.filter(s => s.currentRiskLevel === 'risk');
  const urgentCount = problemStudents.length + riskStudents.length;

  const schoolTips = [
    {
      title: 'การคัดกรอง 5 ด้านเชิงบวก',
      detail: 'อย่าลืมบันทึกทั้งจุดเด่น (ด้านความสามารถพิเศษ) และสิ่งที่ต้องการความช่วยเหลือ เพื่อสร้างกำลังใจให้ผู้เรียนครับ'
    },
    {
      title: 'เยี่ยมบ้านสร้างสายสัมพันธ์',
      detail: 'การถ่ายภาพสภาพความเป็นจริงรอบบ้านและคุยกับผู้ปกครอง ช่วยให้เข้าใจพฤติกรรมเด็กในห้องเรียนได้ลึกซึ้งยิ่งขึ้นครับ'
    },
    {
      title: 'SDQ 5 ด้านสำคัญ',
      detail: 'คะแนนด้านสัมพันธภาพและอารมณ์ที่เริ่มสูงขึ้น เป็นสัญญาณเตือนให้ครูประจำชั้นเข้ามาโอบอุ้มตั้งแต่เนิ่นๆ ครับ'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 no-print flex flex-col items-end">
      
      {/* Expanded Chibi Mascot Dialog */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(30,58,138,0.25)] border-2 border-sky-300 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Dialog Header */}
          <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              title="ปิดหน้าต่าง"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md bg-amber-100 shrink-0">
                <img 
                  src={chibiMascotImage} 
                  alt="น้องแคร์ใจดี" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-white drop-shadow-xs">
                    น้องแคร์ใจดี (Mascot)
                  </h3>
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 text-[10px] font-bold">
                    ผู้ช่วยครู
                  </span>
                </div>
                <p className="text-[11px] text-sky-100 flex items-center gap-1 mt-0.5">
                  <School className="w-3 h-3 text-amber-300" />
                  <span>ผู้ช่วยดูแลช่วยเหลือนักเรียนบ้านห้วยไคร้</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
            <button
              onClick={() => setActiveTabHelper('tips')}
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === 'tips' 
                  ? 'bg-white text-blue-700 border-b-2 border-blue-600 font-bold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              💡 เกร็ดความรู้ครู
            </button>
            <button
              onClick={() => setActiveTabHelper('risk')}
              className={`flex-1 py-2 text-center transition-colors flex items-center justify-center gap-1 ${
                activeTab === 'risk' 
                  ? 'bg-white text-rose-700 border-b-2 border-rose-600 font-bold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🚨 เด็กที่ต้องดูแล</span>
              <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center">
                {urgentCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTabHelper('stats')}
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === 'stats' 
                  ? 'bg-white text-amber-700 border-b-2 border-amber-500 font-bold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📊 ทางลัดระบบ
            </button>
          </div>

          {/* Content Area */}
          <div className="p-4 max-h-80 overflow-y-auto space-y-3 text-xs">
            
            {activeTab === 'tips' && (
              <div className="space-y-2.5">
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/80 text-amber-950">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>คำทักทายวันนี้:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-900">
                    "เด็กทุกคนมีศักยภาพในตัวเอง แค่มีคุณครูคอยรับฟังและเข้าใจ ก็ช่วยเปิดประตูสู่ความสำเร็จของเขาได้แล้วครับ"
                  </p>
                </div>

                {schoolTips.map((tip, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{tip.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                      {tip.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'risk' && (
              <div className="space-y-2">
                <div className="text-[11px] text-slate-500 font-medium">
                  รายชื่อนักเรียนกลุ่มเสี่ยง/มีปัญหา ที่ต้องการการช่วยเหลือเร่งด่วน:
                </div>

                {problemStudents.length === 0 && riskStudents.length === 0 ? (
                  <div className="p-4 text-center text-slate-400 bg-slate-50 rounded-xl">
                    ไม่มีนักเรียนกลุ่มเสี่ยงหรือมีปัญหาในขณะนี้
                  </div>
                ) : (
                  [...problemStudents, ...riskStudents].slice(0, 5).map((student) => (
                    <div 
                      key={student.id}
                      onClick={() => {
                        setSelectedStudentForDetail(student);
                        setIsOpen(false);
                      }}
                      className="p-2 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 cursor-pointer flex items-center justify-between gap-2 transition-all hover:border-blue-300"
                    >
                      <div className="flex items-center gap-2">
                        <StudentAvatar 
                          gender={student.gender} 
                          prefix={student.prefix} 
                          size="sm" 
                        />
                        <div>
                          <div className="font-bold text-slate-800">
                            {student.prefix}{student.firstName} {student.lastName}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            ชั้น {student.classroom} • เลขที่ {student.seatNumber}
                          </div>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        student.currentRiskLevel === 'problem' 
                          ? 'bg-rose-100 text-rose-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {student.currentRiskLevel === 'problem' ? 'มีปัญหา' : 'กลุ่มเสี่ยง'}
                      </span>
                    </div>
                  ))
                )}

                <button
                  onClick={() => {
                    setActiveTab('screening');
                    setIsOpen(false);
                  }}
                  className="w-full mt-2 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <span>ดูหน้าคัดกรองทั้งหมด</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-2">
                <div className="text-[11px] text-slate-500 font-medium">
                  คลิกเพื่อเข้าถึงโมดูลสำคัญของระบบดูแลช่วยเหลือนักเรียน:
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setActiveTab('dashboard');
                      setIsOpen(false);
                    }}
                    className="p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-xl font-bold text-left border border-blue-200/60"
                  >
                    📊 Dashboard สรุป
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('homevisit');
                      setIsOpen(false);
                    }}
                    className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-800 rounded-xl font-bold text-left border border-rose-200/60"
                  >
                    🏡 บันทึกเยี่ยมบ้าน
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('sdq');
                      setIsOpen(false);
                    }}
                    className="p-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl font-bold text-left border border-amber-200/60"
                  >
                    😊 ประเมิน SDQ/EQ
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('analysis');
                      setIsOpen(false);
                    }}
                    className="p-2.5 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-xl font-bold text-left border border-purple-200/60"
                  >
                    🔍 วิเคราะห์รายบุคคล
                  </button>
                </div>

                <button
                  onClick={() => {
                    openReportModal('executive');
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>พิมพ์รายงาน สพฐ. มาตรฐาน</span>
                </button>
              </div>
            )}

          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-slate-100 text-center text-[10px] text-slate-500 border-t border-slate-200 flex items-center justify-center gap-1">
            <span>โรงเรียนบ้านห้วยไคร้</span>
            <span>•</span>
            <span>ระบบดูแลช่วยเหลือนักเรียน</span>
          </div>

        </div>
      )}

      {/* Floating Mascot Trigger Button */}
      <button
        id="btn-chibi-mascot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 p-2 pr-4 bg-white hover:bg-amber-50 active:scale-95 text-slate-800 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] border-3 border-amber-400 hover:border-amber-500 transition-all duration-200 cursor-pointer"
        title="คุยกับน้องแคร์ใจดี (ผู้ช่วยดูแลนักเรียน)"
      >
        {/* Mascot Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300 shadow-md bg-amber-100 shrink-0 group-hover:rotate-6 transition-transform">
          <img 
            src={chibiMascotImage} 
            alt="น้องแคร์ใจดี" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-xs font-black text-slate-900 leading-none">
              น้องแคร์ใจดี
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 font-bold">
              ผู้ช่วยครู
            </span>
          </div>
          <div className="text-[10px] text-blue-700 font-semibold mt-0.5 leading-none flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-500" />
            <span>เพื่อนคู่คิดคุณครู</span>
          </div>
        </div>

        {urgentCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
            {urgentCount}
          </span>
        )}
      </button>

    </div>
  );
};
