import React from 'react';
import { 
  X, 
  Printer, 
  MapPin, 
  Phone, 
  Calendar, 
  BookOpen, 
  Award, 
  HeartHandshake, 
  ArrowRightLeft,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  FileText,
  Sparkles
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { Student } from '../types';
import { StudentAvatar } from './StudentAvatar';

export const StudentDetailModal: React.FC = () => {
  const { 
    activeStudentForModal, 
    setActiveStudentForModal,
    screenings,
    homeVisits,
    sdqEvaluations,
    referrals,
    interventions,
    openReportModal
  } = useStudentCare();

  if (!activeStudentForModal) return null;

  const std = activeStudentForModal;
  const screening = screenings.find(s => s.studentId === std.id);
  const homeVisit = homeVisits.find(h => h.studentId === std.id);
  const sdq = sdqEvaluations.find(s => s.studentId === std.id);
  const stdReferrals = referrals.filter(r => r.studentId === std.id);
  const stdInterventions = interventions.filter(i => i.studentId === std.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Top Bar */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <StudentAvatar 
              gender={std.gender} 
              prefix={std.prefix} 
              seed={std.seatNumber || std.id} 
              size="lg" 
              rounded="xl" 
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {std.prefix}{std.firstName} {std.lastName}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 font-mono font-bold">
                  {std.classroom} #{std.seatNumber}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                รหัสประจำตัว: {std.studentCode} • บัตรประชาชน: {std.citizenId}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openReportModal('student_profile', std.id)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="พิมพ์ระเบียนรายบุคคล"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveStudentForModal(null)}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-xs">
          
          {/* Status Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[11px]">ผลการเรียน GPAX:</span>
              <span className="text-sm font-bold text-slate-900">{std.gpax.toFixed(2)}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[11px]">สถานะกลุ่มคัดกรอง:</span>
              <span className="text-sm font-bold capitalize">
                {std.currentRiskLevel === 'normal' && <span className="text-emerald-600">ปกติ</span>}
                {std.currentRiskLevel === 'risk' && <span className="text-amber-600">กลุ่มเสี่ยง</span>}
                {std.currentRiskLevel === 'problem' && <span className="text-rose-600">มีปัญหา</span>}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[11px]">การเยี่ยมบ้าน:</span>
              <span className={`text-sm font-bold ${homeVisit ? 'text-indigo-600' : 'text-slate-400'}`}>
                {homeVisit ? 'เยี่ยมบ้านแล้ว' : 'ยังไม่เยี่ยม'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[11px]">คะแนน SDQ:</span>
              <span className={`text-sm font-bold ${sdq ? 'text-purple-700' : 'text-slate-400'}`}>
                {sdq ? `${sdq.scores.totalDifficulties} คะแนน (${sdq.scores.status === 'normal' ? 'ปกติ' : sdq.scores.status === 'risk' ? 'เสี่ยง' : 'มีปัญหา'})` : 'ยังไม่ประเมิน'}
              </span>
            </div>
          </div>

          {/* Special Education Highlight Badge & Details */}
          {std.hasDisability && (
            <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-purple-100 text-purple-700 rounded-lg">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-bold text-purple-950 text-xs">
                      ข้อมูลนักเรียนการศึกษาพิเศษ (สำนักบริหารงานการศึกษาพิเศษ สพฐ.)
                    </h4>
                    <span className="text-[11px] text-purple-700">
                      โรงเรียนบ้านห้วยไคร้ สพป.สุโขทัย เขต 2 • ข้อมูล 10 พ.ย. 2568
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => openReportModal('special_education')}
                  className="px-2.5 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold transition-colors"
                >
                  เปิดรายงาน สพฐ.
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-purple-200/60 text-xs">
                <div>
                  <span className="text-purple-600">ประเภทความพิการ:</span>{' '}
                  <span className="font-bold text-purple-950">{std.disabilityType}</span>
                </div>
                <div>
                  <span className="text-purple-600">พิการซ้อน:</span>{' '}
                  <span className="font-bold text-purple-950">{std.isMultipleDisabilities ? 'มีพิการซ้อน' : 'ไม่มี'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact & Family */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-xs">ข้อมูลการติดต่อและครอบครัว</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
              <div>
                <span className="text-slate-400">ผู้ปกครอง: </span>
                <span className="font-semibold text-slate-800">{std.parentName}</span>
              </div>
              <div>
                <span className="text-slate-400">โทรศัพท์ผู้ปกครอง: </span>
                <a href={`tel:${std.parentPhone}`} className="text-blue-600 font-semibold hover:underline">
                  {std.parentPhone}
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400">ที่อยู่: </span>
                <span>{std.address}</span>
              </div>
              <div>
                <span className="text-slate-400">ครูที่ปรึกษา: </span>
                <span className="text-slate-800">{std.advisorName}</span>
              </div>
              <div>
                <span className="text-slate-400">โรคประจำตัว/แพ้ยา: </span>
                <span className="text-slate-800">{std.chronicIllness || 'ไม่มี'} / {std.allergy || 'ไม่มี'}</span>
              </div>
            </div>
          </div>

          {/* Screening 5 Dimensions Result */}
          {screening && (
            <div className="border border-slate-200 rounded-xl p-4 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs">ผลการคัดกรอง 5 มิติ</h4>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">1. การเรียน</div>
                  <div className="font-bold text-xs mt-1 capitalize">{screening.dimensions.learning.status}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">2. สุขภาพ</div>
                  <div className="font-bold text-xs mt-1 capitalize">{screening.dimensions.health.status}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">3. เศรษฐกิจ</div>
                  <div className="font-bold text-xs mt-1 capitalize">{screening.dimensions.economic.status}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">4. พฤติกรรม</div>
                  <div className="font-bold text-xs mt-1 capitalize">{screening.dimensions.behavior.status}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">5. คุ้มครอง</div>
                  <div className="font-bold text-xs mt-1 capitalize">{screening.dimensions.safety.status}</div>
                </div>
              </div>
            </div>
          )}

          {/* Intervention History */}
          <div className="border border-slate-200 rounded-xl p-4 space-y-3">
            <h4 className="font-bold text-slate-900 text-xs flex items-center justify-between">
              <span>ประวัติการติดตามช่วยเหลือ ({stdInterventions.length})</span>
            </h4>
            {stdInterventions.length === 0 ? (
              <p className="text-slate-400 text-[11px]">ไม่มีประวัติการบันทึกช่วยเหลือ</p>
            ) : (
              <div className="space-y-2">
                {stdInterventions.map(i => (
                  <div key={i.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-slate-800">{i.activityType}: {i.topic}</div>
                      <p className="text-slate-600 mt-0.5">{i.description}</p>
                      <div className="text-[10px] text-slate-400 mt-1">ผู้บันทึก: {i.counselor} • {i.logDate}</div>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-medium whitespace-nowrap">
                      {i.outcome}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Referrals */}
          {stdReferrals.length > 0 && (
            <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-amber-900 text-xs">ข้อมูลการส่งต่อ ({stdReferrals.length} รายการ)</h4>
              {stdReferrals.map(r => (
                <div key={r.id} className="text-xs text-amber-950 p-2 rounded-lg bg-white/70 border border-amber-200/60">
                  <div className="font-bold">ส่งไปยัง: {r.toDepartment} ({r.referralDate})</div>
                  <div>สาเหตุ: {r.reason}</div>
                  <div className="text-[10px] text-amber-700 mt-1">สถานะ: {r.currentStatus} • ความเร่งด่วน: {r.urgency}</div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50">
          <button
            onClick={() => setActiveStudentForModal(null)}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-semibold text-xs"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
};
