import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Home, 
  Smile, 
  ArrowRightLeft, 
  Printer, 
  Download, 
  ChevronRight, 
  HeartHandshake,
  TrendingUp,
  Activity,
  Sparkles
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { RiskLevel } from '../types';
import { StudentAvatar } from './StudentAvatar';
import { SchoolCampusBanner } from './SchoolCampusBanner';

export const DashboardView: React.FC = () => {
  const { 
    students, 
    screenings, 
    homeVisits, 
    sdqEvaluations, 
    referrals, 
    interventions,
    selectedGrade,
    selectedClassroom,
    setActiveTab,
    setActiveStudentForModal,
    openReportModal,
    setSelectedRiskFilter
  } = useStudentCare();

  // Filter students based on current header filter
  const filteredStudents = students.filter(s => {
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    return true;
  });

  const totalStudents = filteredStudents.length;
  const normalCount = filteredStudents.filter(s => s.currentRiskLevel === 'normal').length;
  const riskCount = filteredStudents.filter(s => s.currentRiskLevel === 'risk').length;
  const problemCount = filteredStudents.filter(s => s.currentRiskLevel === 'problem').length;

  const normalPct = totalStudents ? Math.round((normalCount / totalStudents) * 100) : 0;
  const riskPct = totalStudents ? Math.round((riskCount / totalStudents) * 100) : 0;
  const problemPct = totalStudents ? Math.round((problemCount / totalStudents) * 100) : 0;

  const homeVisitDone = filteredStudents.filter(s => s.homeVisitCompleted).length;
  const homeVisitPct = totalStudents ? Math.round((homeVisitDone / totalStudents) * 100) : 0;

  const sdqDone = filteredStudents.filter(s => s.sdqCompleted).length;
  const sdqPct = totalStudents ? Math.round((sdqDone / totalStudents) * 100) : 0;

  const filteredStudentIds = new Set(filteredStudents.map(s => s.id));
  const activeReferrals = referrals.filter(r => filteredStudentIds.has(r.studentId));
  const internalRef = activeReferrals.filter(r => r.type === 'internal').length;
  const externalRef = activeReferrals.filter(r => r.type === 'external').length;

  // Urgent list: problem or urgent referral
  const urgentStudents = filteredStudents.filter(s => s.currentRiskLevel === 'problem' || s.currentRiskLevel === 'risk');

  // Dimension issue counts from screenings
  const dimensionStats = {
    learning: 0,
    health: 0,
    economic: 0,
    behavior: 0,
    safety: 0
  };

  screenings.forEach(scr => {
    if (!filteredStudentIds.has(scr.studentId)) return;
    if (scr.dimensions.learning.status !== 'normal') dimensionStats.learning++;
    if (scr.dimensions.health.status !== 'normal') dimensionStats.health++;
    if (scr.dimensions.economic.status !== 'normal') dimensionStats.economic++;
    if (scr.dimensions.behavior.status !== 'normal') dimensionStats.behavior++;
    if (scr.dimensions.safety.status !== 'normal') dimensionStats.safety++;
  });

  // Group by classroom
  const classroomsList = Array.from(new Set(filteredStudents.map(s => s.classroom))).sort();
  const classroomBreakdown = classroomsList.map(cr => {
    const classStds = filteredStudents.filter(s => s.classroom === cr);
    const n = classStds.filter(s => s.currentRiskLevel === 'normal').length;
    const r = classStds.filter(s => s.currentRiskLevel === 'risk').length;
    const p = classStds.filter(s => s.currentRiskLevel === 'problem').length;
    const hv = classStds.filter(s => s.homeVisitCompleted).length;
    const sd = classStds.filter(s => s.sdqCompleted).length;
    return {
      classroom: cr,
      total: classStds.length,
      normal: n,
      risk: r,
      problem: p,
      homeVisitPct: classStds.length ? Math.round((hv / classStds.length) * 100) : 0,
      sdqPct: classStds.length ? Math.round((sd / classStds.length) * 100) : 0,
    };
  });

  const specialEduStudents = filteredStudents.filter(s => s.hasDisability);
  const intelDisabilityCount = specialEduStudents.filter(s => s.disabilityType === 'บกพร่องทางสติปัญญา').length;
  const ldDisabilityCount = specialEduStudents.filter(s => s.disabilityType === 'บกพร่องทางการเรียนรู้').length;
  const autismDisabilityCount = specialEduStudents.filter(s => s.disabilityType === 'ออทิสติก').length;

  const exportCSV = () => {
    const headers = ["รหัสประจำตัว", "คำนำหน้า", "ชื่อ", "นามสกุล", "ชั้น/ห้อง", "เลขที่", "GPAX", "กลุ่มคัดกรอง", "เยี่ยมบ้านแล้ว", "ประเมินSDQแล้ว", "เบอร์โทรผู้ปกครอง"];
    const rows = filteredStudents.map(s => [
      s.studentCode,
      s.prefix,
      s.firstName,
      s.lastName,
      s.classroom,
      s.seatNumber,
      s.gpax,
      s.currentRiskLevel === 'normal' ? 'ปกติ' : s.currentRiskLevel === 'risk' ? 'เสี่ยง' : 'มีปัญหา',
      s.homeVisitCompleted ? 'ใช่' : 'ยังไม่เยี่ยม',
      s.sdqCompleted ? 'ใช่' : 'ยังไม่ประเมิน',
      s.parentPhone
    ]);
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `รายงานภาพรวม_HUAYKRAI_CARE_SYSTEM_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* School Campus Banner with school atmosphere & characters */}
      <SchoolCampusBanner />

      {/* Action Bar for Reports and Export */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-sky-100 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold pl-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
          <span>ระบบงานสารสนเทศเพื่อการคัดกรองและส่งต่อ (สพฐ. มาตรฐาน)</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            id="btn-dash-export-csv"
            onClick={exportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>ส่งออก Excel/CSV</span>
          </button>
          
          <button
            id="btn-dash-print-special-edu"
            onClick={() => openReportModal('special_education')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold rounded-xl border border-purple-200 transition-all shadow-2xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>รายงานการศึกษาพิเศษ ({specialEduStudents.length} คน)</span>
          </button>

          <button
            id="btn-dash-print-summary"
            onClick={() => openReportModal('executive')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-white" />
            <span>พิมพ์รายงานสรุป สพฐ.</span>
          </button>
        </div>
      </div>

      {/* 4 Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Students */}
        <div 
          onClick={() => setActiveTab('directory')}
          className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-blue-400 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">นักเรียนทั้งหมด</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">{totalStudents}</span>
            <span className="text-xs text-slate-500">คน</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-2">
            <span>ชาย: {filteredStudents.filter(s => s.gender === 'male').length} คน</span>
            <span>หญิง: {filteredStudents.filter(s => s.gender === 'female').length} คน</span>
          </div>
        </div>

        {/* Screening Result Card */}
        <div 
          onClick={() => setActiveTab('screening')}
          className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-emerald-400 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">ผลการคัดกรองนักเรียน</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">{normalCount}</span>
            <span className="text-xs text-slate-500">ปกติ ({normalPct}%)</span>
          </div>
          {/* Progress bar */}
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden flex">
            <div style={{ width: `${normalPct}%` }} className="bg-emerald-500 h-full" title="ปกติ"></div>
            <div style={{ width: `${riskPct}%` }} className="bg-amber-400 h-full" title="กลุ่มเสี่ยง"></div>
            <div style={{ width: `${problemPct}%` }} className="bg-rose-500 h-full" title="กลุ่มมีปัญหา"></div>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] font-medium pt-1">
            <span className="text-amber-600">เสี่ยง: {riskCount} คน</span>
            <span className="text-rose-600">มีปัญหา: {problemCount} คน</span>
          </div>
        </div>

        {/* Home Visit Card */}
        <div 
          onClick={() => setActiveTab('homevisit')}
          className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-indigo-400 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">ความก้าวหน้าเยี่ยมบ้าน</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Home className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-indigo-600">{homeVisitDone}/{totalStudents}</span>
            <span className="text-xs font-semibold text-indigo-600">({homeVisitPct}%)</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div style={{ width: `${homeVisitPct}%` }} className="bg-indigo-600 h-full rounded-full transition-all duration-500"></div>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span>คงค้าง: {totalStudents - homeVisitDone} คน</span>
            <span className="text-indigo-600 font-medium">ดูบันทึกเยี่ยมบ้าน →</span>
          </div>
        </div>

        {/* Referrals & Active Cases */}
        <div 
          onClick={() => setActiveTab('referral')}
          className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-amber-400 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">เคสส่งต่อ / รอช่วยเหลือ</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowRightLeft className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-600">{activeReferrals.length}</span>
            <span className="text-xs text-slate-500">เคสทั้งหมด</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] pt-1">
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">
              ส่งต่อภายใน: {internalRef}
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-medium">
              ส่งต่อภายนอก: {externalRef}
            </span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500 text-right pt-1">
            <span>กิจกรรมช่วยเหลือ: {interventions.length} ครั้ง</span>
          </div>
        </div>

      </div>

      {/* Special Education (สศศ. สพฐ.) Overview Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 rounded-2xl p-4 sm:p-5 text-white shadow-xs border border-purple-700/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-200 shrink-0">
            <Sparkles className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-white">
                ข้อมูลนักเรียนการศึกษาพิเศษ (สศศ. สพฐ.)
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-400/20 text-purple-200 border border-purple-300/30">
                ข้อมูล 10 พ.ย. 2568
              </span>
            </div>
            <p className="text-xs text-purple-200 mt-0.5">
              สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน • โรงเรียนบ้านห้วยไคร้ สพป.สุโขทัย เขต 2
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-center">
            <span className="text-purple-200 text-[10px] block">ทั้งหมด</span>
            <span className="font-bold text-sm text-white">{specialEduStudents.length} คน</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-center">
            <span className="text-purple-200 text-[10px] block">บกพร่องทางสติปัญญา</span>
            <span className="font-bold text-sm text-indigo-200">{intelDisabilityCount} คน</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-center">
            <span className="text-purple-200 text-[10px] block">บกพร่องทางการเรียนรู้</span>
            <span className="font-bold text-sm text-sky-200">{ldDisabilityCount} คน</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-center">
            <span className="text-purple-200 text-[10px] block">ออทิสติก</span>
            <span className="font-bold text-sm text-pink-200">{autismDisabilityCount} คน</span>
          </div>
          <button
            onClick={() => openReportModal('special_education')}
            className="px-3.5 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap ml-1 flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์รายงาน สพฐ.</span>
          </button>
        </div>
      </div>

      {/* Mid Section: 5 Dimensions of Need & Urgent Attention List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Screening 5 Dimensions & Class Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 5 Dimensions Analysis */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  สถิตินักเรียนที่มีปัญหา/กลุ่มเสี่ยง แยกตาม 5 ด้าน (สพฐ.)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  ช่วยชี้เป้าประเด็นเร่งด่วนที่โรงเรียนต้องจัดโครงการส่งเสริมและแก้ไข
                </p>
              </div>
              <button
                id="btn-view-all-screening"
                onClick={() => setActiveTab('screening')}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-0.5"
              >
                ดูระบบคัดกรอง <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs font-medium text-slate-600">1. ด้านการเรียน</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-900">{dimensionStats.learning}</span>
                  <span className="text-[11px] text-amber-600 font-medium">เสี่ยง/มีปัญหา</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">ผลการเรียนต่ำ / ขาดเรียนบ่อย</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs font-medium text-slate-600">2. ด้านสุขภาพกาย/จิต</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-900">{dimensionStats.health}</span>
                  <span className="text-[11px] text-amber-600 font-medium">เสี่ยง/มีปัญหา</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">โรคประจำตัว / วิตกกังวล ซึมเศร้า</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs font-medium text-slate-600">3. ด้านเศรษฐกิจและครอบครัว</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-900">{dimensionStats.economic}</span>
                  <span className="text-[11px] text-amber-600 font-medium">เสี่ยง/มีปัญหา</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">ขาดแคลนทุนทรัพย์ / ครอบครัวเปราะบาง</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs font-medium text-slate-600">4. ด้านพฤติกรรม/วินัย</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-900">{dimensionStats.behavior}</span>
                  <span className="text-[11px] text-rose-600 font-medium">เสี่ยง/มีปัญหา</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">ก้าวร้าว / ทะเลาะวิวาท / ไม่เข้าเรียน</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs font-medium text-slate-600">5. ด้านความปลอดภัย/สิ่งเสพติด</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-900">{dimensionStats.safety}</span>
                  <span className="text-[11px] text-rose-600 font-medium">เสี่ยง/มีปัญหา</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">สารเสพติด / อุบัติเหตุ / การล่วงละเมิด</div>
              </div>

              <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 flex flex-col justify-between">
                <div className="text-xs font-medium text-blue-900">ประเมิน SDQ ครบถ้วน</div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-blue-700">{sdqDone}/{totalStudents}</span>
                  <span className="text-[11px] text-blue-700 font-medium">{sdqPct}%</span>
                </div>
                <button
                  id="btn-goto-sdq"
                  onClick={() => setActiveTab('sdq')}
                  className="mt-2 text-[11px] text-blue-700 hover:text-blue-900 font-semibold text-left underline"
                >
                  เข้าสู่แบบประเมิน SDQ →
                </button>
              </div>

            </div>
          </div>

          {/* Table Breakdown by Classroom */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-3">
              ตารางสรุปข้อมูลแยกตามห้องเรียน (Classroom Statistics)
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                    <th className="py-2.5 px-3 font-semibold">ห้องเรียน</th>
                    <th className="py-2.5 px-3 font-semibold text-center">นักเรียน (คน)</th>
                    <th className="py-2.5 px-3 font-semibold text-center">กลุ่มปกติ</th>
                    <th className="py-2.5 px-3 font-semibold text-center">กลุ่มเสี่ยง</th>
                    <th className="py-2.5 px-3 font-semibold text-center">กลุ่มมีปัญหา</th>
                    <th className="py-2.5 px-3 font-semibold text-center">เยี่ยมบ้าน (%)</th>
                    <th className="py-2.5 px-3 font-semibold text-center">SDQ (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {classroomBreakdown.map((row) => (
                    <tr key={row.classroom} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        {row.classroom}
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-700">{row.total}</td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800">
                          {row.normal}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${row.risk > 0 ? 'bg-amber-100 text-amber-800' : 'text-slate-400'}`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${row.problem > 0 ? 'bg-rose-100 text-rose-800 font-bold' : 'text-slate-400'}`}>
                          {row.problem}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center font-medium text-indigo-700">
                        {row.homeVisitPct}%
                      </td>
                      <td className="py-2.5 px-3 text-center font-medium text-blue-700">
                        {row.sdqPct}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right 1 Col: Urgent Attention Alert List & Quick Tools */}
        <div className="space-y-6">
          
          {/* Urgent Attention Box */}
          <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-rose-100 mb-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>นักเรียนที่ต้องดูแลเร่งด่วน ({urgentStudents.length})</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                Priority
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              รายชื่อนักเรียนกลุ่มมีปัญหาและกลุ่มเสี่ยงที่ต้องการการประสานงานช่วยเหลือ
            </p>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {urgentStudents.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  ไม่มีนักเรียนกลุ่มเสี่ยงหรือมีปัญหาในตัวกรองนี้
                </div>
              ) : (
                urgentStudents.map((std) => (
                  <div
                    key={std.id}
                    onClick={() => setActiveStudentForModal(std)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-white cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <StudentAvatar 
                        gender={std.gender} 
                        prefix={std.prefix} 
                        seed={std.seatNumber || std.id} 
                        size="sm" 
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {std.prefix}{std.firstName} {std.lastName}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {std.classroom} • เลขที่ {std.seatNumber} • GPAX: {std.gpax}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-end gap-1">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        std.currentRiskLevel === 'problem'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {std.currentRiskLevel === 'problem' ? 'มีปัญหา' : 'เสี่ยง'}
                      </span>
                      <span className="text-[10px] text-blue-600 font-medium group-hover:underline">
                        ดูประวัติ →
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              id="btn-filter-urgent-only"
              onClick={() => setSelectedRiskFilter('problem')}
              className="w-full mt-3 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors text-center"
            >
              คัดกรองเฉพาะกลุ่มมีปัญหา
            </button>
          </div>

          {/* Guidelines & Quick Links */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-2.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              แนวทางการดำเนินงานระบบดูแลช่วยเหลือ (สพฐ.)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
              <li><b>รู้จักนักเรียนรายบุคคล:</b> บันทึกระเบียนสะสม และวิเคราะห์ศักยภาพ</li>
              <li><b>คัดกรอง:</b> จำแนกเป็น 3 กลุ่ม (ปกติ, เสี่ยง, มีปัญหา) อย่างน้อยปีละ 1 ครั้ง</li>
              <li><b>ส่งเสริมและพัฒนา:</b> ประเมิน SDQ และจัดกิจกรรมเสริมสร้างทักษะชีวิต</li>
              <li><b>ป้องกันและแก้ไข:</b> ให้คำปรึกษา และประสานผู้ปกครองดูแลใกล้ชิด</li>
              <li><b>ส่งต่อ:</b> ส่งต่อไปยังฝ่ายแนะแนว หรือผู้เชี่ยวชาญภายนอกเมื่อเกินกำลัง</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
