import React from 'react';
import { X, Printer, Download, CheckCircle, School, Award, Sparkles, HeartHandshake } from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { SPECIAL_EDUCATION_REPORT_META } from '../data/mockData';
import { StudentAvatar } from './StudentAvatar';

export const ReportModal: React.FC = () => {
  const { 
    isReportModalOpen, 
    reportType, 
    openReportModal,
    activeStudentForModal,
    students,
    screenings,
    homeVisits,
    sdqEvaluations,
    referrals,
    closeReportModal,
    summaryStats,
    selectedGrade,
    selectedClassroom
  } = useStudentCare();

  if (!isReportModalOpen) return null;

  const currentStudent = activeStudentForModal || students[0];
  const screening = screenings.find(s => s.studentId === currentStudent?.id);
  const homeVisit = homeVisits.find(h => h.studentId === currentStudent?.id);
  const sdq = sdqEvaluations.find(s => s.studentId === currentStudent?.id);
  const studentReferral = referrals.find(r => r.studentId === currentStudent?.id);

  // Filter special education students
  const specialEducationStudents = students.filter(s => s.hasDisability);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Top bar (Hidden when printing) */}
        <div className="p-4 border-b border-slate-200 sticky top-0 bg-white z-10 print:hidden space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700">
                <Printer className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  เอกสารทางการระบบดูแลช่วยเหลือนักเรียน (พร้อมสั่งพิมพ์)
                </h3>
                <p className="text-xs text-slate-500">
                  แบบฟอร์มมาตรฐาน สพฐ. และสำนักบริหารงานการศึกษาพิเศษ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="btn-trigger-print"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>พิมพ์เอกสาร (Print / PDF)</span>
              </button>
              <button
                onClick={closeReportModal}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Report Type Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => openReportModal('executive')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                reportType === 'executive' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              สรุปภาพรวมผู้บริหาร
            </button>
            <button
              onClick={() => openReportModal('special_education')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                reportType === 'special_education' 
                  ? 'bg-purple-700 text-white shadow-xs' 
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              รายงานการศึกษาพิเศษ ({specialEducationStudents.length} คน)
            </button>
            <button
              onClick={() => openReportModal('homevisit', currentStudent?.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                reportType === 'homevisit' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              แบบเยี่ยมบ้าน (บร.01)
            </button>
            <button
              onClick={() => openReportModal('sdq', currentStudent?.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                reportType === 'sdq' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              แบบประเมิน SDQ
            </button>
            <button
              onClick={() => openReportModal('screening', currentStudent?.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                reportType === 'screening' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              คัดกรอง 5 ด้าน
            </button>
            <button
              onClick={() => openReportModal('student_profile', currentStudent?.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                reportType === 'student_profile' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ระเบียนสะสมรายบุคคล
            </button>
          </div>
        </div>

        {/* Printable Document Body (A4 Simulation) */}
        <div className="p-6 sm:p-10 bg-white text-slate-900 space-y-6 print:p-0 print:m-0 font-sarabun text-xs sm:text-sm leading-relaxed">
          
          {/* Header with Garuda/School Logo style */}
          <div className="text-center space-y-1 border-b-2 border-slate-900 pb-4">
            <div className="flex justify-center items-center gap-2 text-slate-800 mb-1">
              <School className="w-8 h-8 text-blue-700" />
            </div>
            {reportType === 'special_education' ? (
              <>
                <div className="text-xs font-semibold text-slate-700">
                  {SPECIAL_EDUCATION_REPORT_META.department}
                </div>
                <h1 className="text-base sm:text-lg font-bold text-slate-950">
                  {SPECIAL_EDUCATION_REPORT_META.schoolName} เขตพื้นที่ : {SPECIAL_EDUCATION_REPORT_META.serviceArea}
                </h1>
                <h2 className="text-sm font-bold text-purple-900 underline decoration-purple-300">
                  {SPECIAL_EDUCATION_REPORT_META.title}
                </h2>
                <div className="text-[11px] text-slate-600">
                  ข้อมูล ณ วันที่ {SPECIAL_EDUCATION_REPORT_META.reportDate} ปีการศึกษา {SPECIAL_EDUCATION_REPORT_META.academicYear} • จำนวนนักเรียนที่ได้รับการรับรองความพิการ: {specialEducationStudents.length} คน
                </div>
              </>
            ) : (
              <>
                <h1 className="text-base sm:text-lg font-bold text-slate-950">
                  โรงเรียนบ้านห้วยไคร้ สำนักงานเขตพื้นที่การศึกษาประถมศึกษาสุโขทัย เขต 2
                </h1>
                <h2 className="text-xs sm:text-sm font-semibold text-slate-800">
                  กลุ่มบริหารงานกิจการนักเรียน • HUAYKRAI CARE SYSTEM (ระบบดูแลช่วยเหลือนักเรียน)
                </h2>
                <div className="text-[11px] text-slate-500">
                  ปีการศึกษา 2568 • วันที่พิมพ์รายงาน: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </>
            )}
          </div>

          {/* 1. EXECUTIVE DASHBOARD REPORT */}
          {reportType === 'executive' && (
            <div className="space-y-6">
              <div className="text-center font-bold text-base underline decoration-slate-400">
                รายงานสรุปภาพรวมผลการดำเนินงานระบบดูแลช่วยเหลือนักเรียน (สำหรับผู้บริหาร)
              </div>

              <div className="border border-slate-300 rounded-lg p-4 bg-slate-50/50">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-slate-500 text-xs">นักเรียนทั้งหมด</div>
                    <div className="text-lg font-bold text-slate-900">{summaryStats.totalStudents} คน</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">กลุ่มปกติ</div>
                    <div className="text-lg font-bold text-emerald-700">{summaryStats.normalCount} คน ({summaryStats.normalPercent}%)</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">กลุ่มเสี่ยง</div>
                    <div className="text-lg font-bold text-amber-700">{summaryStats.riskCount} คน ({summaryStats.riskPercent}%)</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">กลุ่มมีปัญหา</div>
                    <div className="text-lg font-bold text-rose-700">{summaryStats.problemCount} คน ({summaryStats.problemPercent}%)</div>
                  </div>
                </div>
              </div>

              {/* Progress Summary Table */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">ความก้าวหน้าการดำเนินงาน 5 ขั้นตอนหลัก:</h4>
                <table className="w-full border-collapse border border-slate-300 text-xs text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-2">กระบวนการดูแลช่วยเหลือ</th>
                      <th className="border border-slate-300 p-2 text-center">เป้าหมาย (คน)</th>
                      <th className="border border-slate-300 p-2 text-center">ดำเนินการแล้ว (คน)</th>
                      <th className="border border-slate-300 p-2 text-center">ร้อยละความสำเร็จ</th>
                      <th className="border border-slate-300 p-2 text-center">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">1. การรู้จักนักเรียนรายบุคคล (บันทึกฐานข้อมูล)</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.totalStudents}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.totalStudents}</td>
                      <td className="border border-slate-300 p-2 text-center">100%</td>
                      <td className="border border-slate-300 p-2 text-center text-emerald-700 font-bold">เรียบร้อย</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">2. การคัดกรองนักเรียน 5 ด้าน</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.totalStudents}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.screenedCount}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.screenedPercent}%</td>
                      <td className="border border-slate-300 p-2 text-center text-emerald-700 font-bold">ตามเกณฑ์</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">3. การเยี่ยมบ้านนักเรียน (แบบ บร.01)</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.totalStudents}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.homeVisitedCount}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.homeVisitedPercent}%</td>
                      <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">กำลังดำเนินการ</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">4. การประเมินพฤติกรรมและอารมณ์ (SDQ / EQ)</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.totalStudents}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.sdqCount}</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.sdqPercent}%</td>
                      <td className="border border-slate-300 p-2 text-center text-purple-700 font-bold">ตามเกณฑ์</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">5. การส่งต่อผู้เรียน (ภายใน/ภายนอก)</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.referralCount} เคส</td>
                      <td className="border border-slate-300 p-2 text-center">{summaryStats.referralResolved} เคสเสร็จสิ้น</td>
                      <td className="border border-slate-300 p-2 text-center">{Math.round((summaryStats.referralResolved / (summaryStats.referralCount || 1)) * 100)}%</td>
                      <td className="border border-slate-300 p-2 text-center text-teal-700 font-bold">ดูแลใกล้ชิด</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. HOME VISIT FORM (แบบ บร.01) */}
          {reportType === 'homevisit' && currentStudent && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base">
                แบบบันทึกการเยี่ยมบ้านนักเรียน (แบบ บร.01)
              </div>

              <div className="border border-slate-300 rounded p-3 bg-slate-50 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div><b>ชื่อ-สกุล นักเรียน:</b> {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName}</div>
                  <div><b>ชั้น/ห้อง:</b> {currentStudent.classroom} เลขที่ {currentStudent.seatNumber}</div>
                  <div><b>รหัสประจำตัว:</b> {currentStudent.studentCode}</div>
                  <div><b>วันที่เยี่ยมบ้าน:</b> {homeVisit?.visitDate || 'ยังไม่ได้บันทึก'}</div>
                  <div><b>ผู้ปกครองที่ให้ข้อมูล:</b> {homeVisit?.intervieweeName || currentStudent.parentName} ({homeVisit?.intervieweeRelation || 'บิดา/มารดา'})</div>
                  <div><b>ครูผู้เยี่ยมบ้าน:</b> {homeVisit?.visitorName || currentStudent.advisorName}</div>
                </div>
              </div>

              {homeVisit ? (
                <div className="space-y-3 text-xs">
                  <div className="border border-slate-200 p-3 rounded">
                    <b>1. สภาพที่อยู่อาศัยและสิ่งแวดล้อม:</b>
                    <p className="mt-1">ลักษณะบ้าน: {homeVisit.livingCondition} • สิ่งแวดล้อมชุมชน: {homeVisit.neighborhoodEnvironment}</p>
                    <p className="mt-1">ระยะทางมาโรงเรียน: {homeVisit.distanceToSchoolKm} กม. • การเดินทาง: {homeVisit.travelMethod}</p>
                  </div>

                  <div className="border border-slate-200 p-3 rounded">
                    <b>2. ความสัมพันธ์และเศรษฐกิจในครอบครัว:</b>
                    <p className="mt-1">สัมพันธภาพในบ้าน: {homeVisit.familyRelationship}</p>
                    <p className="mt-1">รายได้ครอบครัวเฉลี่ย: {homeVisit.familyIncomePerMonth.toLocaleString()} บาท/เดือน</p>
                    <p className="mt-1">ภาระหนี้สิน: {homeVisit.familyDebtStatus}</p>
                  </div>

                  <div className="border border-slate-200 p-3 rounded">
                    <b>3. พฤติกรรมที่บ้านและเวลาว่าง:</b>
                    <p className="mt-1">หน้าที่ที่บ้าน: {homeVisit.choresAtHome}</p>
                    <p className="mt-1">กิจกรรมยามว่าง: {homeVisit.freeTimeActivity}</p>
                    <p className="mt-1">การใช้อุปกรณ์สื่อสาร/เกม: {homeVisit.gadgetUseHoursPerDay} ชั่วโมง/วัน</p>
                  </div>

                  <div className="border border-slate-200 p-3 rounded">
                    <b>4. สิ่งที่ผู้ปกครองต้องการให้โรงเรียนช่วยเหลือ:</b>
                    <p className="mt-1">{homeVisit.parentExpectation || 'ไม่มี'}</p>
                    <b className="block mt-2">ข้อสังเกตและข้อเสนอแนะของครู:</b>
                    <p className="mt-1">{homeVisit.teacherObservations || 'นักเรียนมีพฤติกรรมเรียบร้อยดี ควรสนับสนุนเรื่องทุนการศึกษา'}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400">ยังไม่มีบันทึกข้อมูลการเยี่ยมบ้านของนักเรียนคนนี้</div>
              )}
            </div>
          )}

          {/* 3. SCREENING 5 DIMENSIONS REPORT */}
          {reportType === 'screening' && currentStudent && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base">
                แบบรายงานผลการคัดกรองนักเรียนรายบุคคล 5 มิติ (สพฐ.)
              </div>

              <div className="border border-slate-300 rounded p-3 bg-slate-50 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div><b>ชื่อ-สกุล:</b> {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName}</div>
                  <div><b>ชั้น/ห้อง:</b> {currentStudent.classroom} เลขที่ {currentStudent.seatNumber}</div>
                  <div><b>รหัสประจำตัว:</b> {currentStudent.studentCode}</div>
                  <div><b>ผลการคัดกรองภาพรวม:</b> 
                    <span className="font-bold ml-1">
                      {screening?.overallStatus === 'normal' && 'กลุ่มปกติ'}
                      {screening?.overallStatus === 'risk' && 'กลุ่มเสี่ยง'}
                      {screening?.overallStatus === 'problem' && 'กลุ่มมีปัญหา'}
                    </span>
                  </div>
                </div>
              </div>

              {screening && (
                <table className="w-full border-collapse border border-slate-300 text-xs text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-2">มิติการคัดกรอง</th>
                      <th className="border border-slate-300 p-2 text-center">ระดับผลการคัดกรอง</th>
                      <th className="border border-slate-300 p-2">รายละเอียดข้อสังเกต / ข้อเท็จจริง</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">1. ด้านการเรียน (Learning)</td>
                      <td className="border border-slate-300 p-2 text-center font-bold capitalize">{screening.dimensions.learning.status}</td>
                      <td className="border border-slate-300 p-2">{screening.dimensions.learning.notes || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">2. ด้านสุขภาพกาย/จิต (Health)</td>
                      <td className="border border-slate-300 p-2 text-center font-bold capitalize">{screening.dimensions.health.status}</td>
                      <td className="border border-slate-300 p-2">{screening.dimensions.health.notes || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">3. ด้านเศรษฐกิจครอบครัว (Economic)</td>
                      <td className="border border-slate-300 p-2 text-center font-bold capitalize">{screening.dimensions.economic.status}</td>
                      <td className="border border-slate-300 p-2">{screening.dimensions.economic.notes || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">4. ด้านพฤติกรรม/สารเสพติด (Behavior)</td>
                      <td className="border border-slate-300 p-2 text-center font-bold capitalize">{screening.dimensions.behavior.status}</td>
                      <td className="border border-slate-300 p-2">{screening.dimensions.behavior.notes || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">5. ด้านความปลอดภัยและการคุ้มครอง (Safety)</td>
                      <td className="border border-slate-300 p-2 text-center font-bold capitalize">{screening.dimensions.safety.status}</td>
                      <td className="border border-slate-300 p-2">{screening.dimensions.safety.notes || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* 4. SDQ / EQ REPORT */}
          {reportType === 'sdq' && currentStudent && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base">
                แบบสรุปผลการประเมินพฤติกรรมนักเรียน (SDQ: Strengths and Difficulties Questionnaire)
              </div>

              <div className="border border-slate-300 rounded p-3 bg-slate-50 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div><b>ชื่อ-สกุล:</b> {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName}</div>
                  <div><b>ชั้น/ห้อง:</b> {currentStudent.classroom} เลขที่ {currentStudent.seatNumber}</div>
                  <div><b>รหัสประจำตัว:</b> {currentStudent.studentCode}</div>
                  <div><b>ผู้ประเมิน:</b> {sdq?.evaluatorName || 'ครูที่ปรึกษา'} ({sdq?.evaluatorType || 'teacher'})</div>
                </div>
              </div>

              {sdq && (
                <div className="space-y-3">
                  <table className="w-full border-collapse border border-slate-300 text-xs text-left">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-2">ด้านพฤติกรรม (5 ด้าน)</th>
                        <th className="border border-slate-300 p-2 text-center">คะแนนเต็ม</th>
                        <th className="border border-slate-300 p-2 text-center">คะแนนที่ได้</th>
                        <th className="border border-slate-300 p-2 text-center">การแปลผล</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-2 font-medium">1. ด้านอารมณ์ (Emotional problems)</td>
                        <td className="border border-slate-300 p-2 text-center">10</td>
                        <td className="border border-slate-300 p-2 text-center font-bold">{sdq.scores.emotionalScore}</td>
                        <td className="border border-slate-300 p-2 text-center">{sdq.scores.emotionalScore >= 5 ? 'เสี่ยง/มีปัญหา' : 'ปกติ'}</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-medium">2. ด้านความประพฤติ/เกเร (Conduct problems)</td>
                        <td className="border border-slate-300 p-2 text-center">10</td>
                        <td className="border border-slate-300 p-2 text-center font-bold">{sdq.scores.conductScore}</td>
                        <td className="border border-slate-300 p-2 text-center">{sdq.scores.conductScore >= 4 ? 'เสี่ยง/มีปัญหา' : 'ปกติ'}</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-medium">3. ด้านพฤติกรรมอยู่ไม่นิ่ง (Hyperactivity)</td>
                        <td className="border border-slate-300 p-2 text-center">10</td>
                        <td className="border border-slate-300 p-2 text-center font-bold">{sdq.scores.hyperactivityScore}</td>
                        <td className="border border-slate-300 p-2 text-center">{sdq.scores.hyperactivityScore >= 6 ? 'เสี่ยง/มีปัญหา' : 'ปกติ'}</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-medium">4. ด้านความสัมพันธ์กับเพื่อน (Peer problems)</td>
                        <td className="border border-slate-300 p-2 text-center">10</td>
                        <td className="border border-slate-300 p-2 text-center font-bold">{sdq.scores.peerScore}</td>
                        <td className="border border-slate-300 p-2 text-center">{sdq.scores.peerScore >= 4 ? 'เสี่ยง/มีปัญหา' : 'ปกติ'}</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="border border-slate-300 p-2">รวมคะแนนความยากลำบาก (1-4)</td>
                        <td className="border border-slate-300 p-2 text-center">40</td>
                        <td className="border border-slate-300 p-2 text-center text-sm">{sdq.scores.totalDifficulties}</td>
                        <td className="border border-slate-300 p-2 text-center text-sm">
                          {sdq.scores.status === 'normal' && 'ปกติ (0-15)'}
                          {sdq.scores.status === 'risk' && 'กลุ่มเสี่ยง (16-17)'}
                          {sdq.scores.status === 'problem' && 'กลุ่มมีปัญหา (18-40)'}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-medium text-emerald-800">5. ด้านสัมพันธภาพทางสังคม (จุดแข็ง)</td>
                        <td className="border border-slate-300 p-2 text-center">10</td>
                        <td className="border border-slate-300 p-2 text-center font-bold text-emerald-800">{sdq.scores.prosocialScore}</td>
                        <td className="border border-slate-300 p-2 text-center text-emerald-800">{sdq.scores.prosocialScore >= 6 ? 'เป็นจุดแข็ง' : 'ควรส่งเสริม'}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-600">ข้อคิดเห็นเพิ่มเติม: {sdq.notes || 'ผลประเมินพฤติกรรมเหมาะสมตามวัย'}</p>
                </div>
              )}
            </div>
          )}

          {/* 5. REFERRAL SLIP (ใบส่งตัว) */}
          {reportType === 'referral' && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base">
                หนังสือส่งต่อนักเรียน (Student Referral Form)
              </div>

              <div className="text-right text-xs">
                วันที่ {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>

              <div className="text-xs space-y-3">
                <div>
                  <b>เรียน:</b> {studentReferral?.toDepartment || 'หัวหน้ากลุ่มงานแนะแนว / หน่วยงานสหวิชาชีพ'}
                </div>
                <p className="indent-8">
                  ด้วยโรงเรียนบ้านห้วยไคร้ มีความประสงค์ขอส่งต่อนักเรียนในความดูแล เพื่อเข้ารับการตรวจวินิจฉัย การให้คำปรึกษาเชิงลึก หรือการสงเคราะห์ช่วยเหลือตามกระบวนการระบบดูแลช่วยเหลือนักเรียน โดยมีรายละเอียดดังต่อไปนี้:
                </p>

                <div className="border border-slate-300 p-3 rounded bg-slate-50 space-y-1">
                  <div><b>ชื่อนักเรียน:</b> {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName} ชั้น {currentStudent.classroom} เลขที่ {currentStudent.seatNumber}</div>
                  <div><b>วัน/เดือน/ปีเกิด:</b> {currentStudent.birthDate} <b>เลขประจำตัวประชาชน:</b> {currentStudent.citizenId}</div>
                  <div><b>ชื่อผู้ปกครอง:</b> {currentStudent.parentName} <b>เบอร์โทรศัพท์:</b> {currentStudent.parentPhone}</div>
                  <div><b>ที่อยู่:</b> {currentStudent.address}</div>
                </div>

                <div>
                  <b>สาเหตุการส่งต่อ:</b>
                  <p className="mt-1 p-2 border border-slate-200 rounded">{studentReferral?.reason || 'เพื่อขอรับคำปรึกษาและประสานการดูแลร่วมกัน'}</p>
                </div>

                <div>
                  <b>พฤติกรรมและข้อเท็จจริงที่สังเกตพบ:</b>
                  <p className="mt-1 p-2 border border-slate-200 rounded">{studentReferral?.symptomsAndDetails || 'มีปัญหาด้านสมาธิและการเข้าชั้นเรียนอย่างสม่ำเสมอ'}</p>
                </div>
              </div>
            </div>
          )}

          {/* 6. INDIVIDUAL STUDENT PROFILE (ระเบียนสะสม) */}
          {reportType === 'student_profile' && currentStudent && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base">
                ระเบียนประวัติและข้อมูลวิเคราะห์ผู้เรียนรายบุคคล
              </div>

              <div className="grid grid-cols-3 gap-4 border border-slate-300 p-4 rounded-lg bg-slate-50">
                <div className="col-span-2 space-y-1 text-xs">
                  <div><b>ชื่อ-สกุล:</b> {currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName} ({currentStudent.nickname})</div>
                  <div><b>รหัสประจำตัว:</b> {currentStudent.studentCode} • <b>เลขประจำตัวประชาชน:</b> {currentStudent.citizenId}</div>
                  <div><b>ชั้น/ห้อง:</b> {currentStudent.classroom} เลขที่ {currentStudent.seatNumber} • <b>เกรดเฉลี่ย (GPAX):</b> {currentStudent.gpax.toFixed(2)}</div>
                  <div><b>ผู้ปกครอง:</b> {currentStudent.parentName} ({currentStudent.parentPhone})</div>
                  <div><b>ที่อยู่:</b> {currentStudent.address}</div>
                  <div><b>ครูที่ปรึกษา:</b> {currentStudent.advisorName}</div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-slate-300 pl-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <StudentAvatar 
                      gender={currentStudent.gender} 
                      prefix={currentStudent.prefix} 
                      seed={currentStudent.seatNumber || currentStudent.id} 
                      size="xl" 
                      rounded="xl" 
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">รูปโปรไฟล์นักเรียน</span>
                </div>
              </div>

              <div className="text-xs space-y-3">
                <div className="border border-slate-200 p-3 rounded">
                  <b>ความสามารถพิเศษ / ทักษะเด่น:</b>
                  <div className="mt-1">{currentStudent.specialTalents.join(', ')}</div>
                </div>
                <div className="border border-slate-200 p-3 rounded">
                  <b>ข้อมูลสุขภาพ:</b>
                  <div className="mt-1">โรคประจำตัว: {currentStudent.chronicIllness || 'ไม่มี'} • ประวัติแพ้ยา: {currentStudent.allergy || 'ไม่มี'} • หมู่โลหิต: {currentStudent.bloodType}</div>
                </div>
              </div>
            </div>
          )}

          {/* 7. SPECIAL EDUCATION OFFICIAL REPORT (สำนักบริหารงานการศึกษาพิเศษ สพฐ.) */}
          {reportType === 'special_education' && (
            <div className="space-y-5">
              <div className="text-center font-bold text-base underline decoration-slate-400">
                รายงานข้อมูลนักเรียน ทุกระดับชั้น (การศึกษาพิเศษ)
              </div>

              {/* Official Information Banner */}
              <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 shadow-xs">
                    <span className="text-slate-500 text-[11px] block">จำนวนนักเรียนพิเศษ</span>
                    <span className="text-lg font-bold text-purple-900">{specialEducationStudents.length} คน</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 shadow-xs">
                    <span className="text-slate-500 text-[11px] block">บกพร่องทางสติปัญญา</span>
                    <span className="text-lg font-bold text-indigo-700">
                      {specialEducationStudents.filter(s => s.disabilityType === 'บกพร่องทางสติปัญญา').length} คน
                    </span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 shadow-xs">
                    <span className="text-slate-500 text-[11px] block">บกพร่องทางการเรียนรู้</span>
                    <span className="text-lg font-bold text-blue-700">
                      {specialEducationStudents.filter(s => s.disabilityType === 'บกพร่องทางการเรียนรู้').length} คน
                    </span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 shadow-xs">
                    <span className="text-slate-500 text-[11px] block">ออทิสติก</span>
                    <span className="text-lg font-bold text-pink-700">
                      {specialEducationStudents.filter(s => s.disabilityType === 'ออทิสติก').length} คน
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-purple-200 flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-2">
                  <div><b>หน่วยงาน:</b> สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน</div>
                  <div><b>โรงเรียน:</b> บ้านห้วยไคร้ • <b>เขตพื้นที่:</b> สพป.สุโขทัย เขต 2</div>
                  <div><b>ข้อมูล ณ วันที่:</b> 10 พฤศจิกายน 2568</div>
                </div>
              </div>

              {/* Special Education Student Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300 text-xs text-left">
                  <thead>
                    <tr className="bg-purple-100/70 text-slate-900 font-bold">
                      <th className="border border-slate-300 p-2 text-center w-12">ลำดับ</th>
                      <th className="border border-slate-300 p-2">ชื่อ-สกุล</th>
                      <th className="border border-slate-300 p-2 text-center">เลขบัตรประชาชน</th>
                      <th className="border border-slate-300 p-2 text-center">ระดับชั้น</th>
                      <th className="border border-slate-300 p-2">ประเภทความพิการ</th>
                      <th className="border border-slate-300 p-2 text-center">พิการซ้อน</th>
                      <th className="border border-slate-300 p-2 text-center">การเยี่ยมบ้าน / SDQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialEducationStudents.map((std, idx) => (
                      <tr key={std.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="border border-slate-300 p-2 text-center font-medium">{idx + 1}</td>
                        <td className="border border-slate-300 p-2 font-bold text-slate-900">
                          {std.prefix}{std.firstName} {std.lastName}
                        </td>
                        <td className="border border-slate-300 p-2 text-center font-mono text-[11px] text-slate-700">
                          {std.citizenId}
                        </td>
                        <td className="border border-slate-300 p-2 text-center font-bold text-blue-800">
                          {std.grade}
                        </td>
                        <td className="border border-slate-300 p-2 font-medium">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] ${
                            std.disabilityType === 'ออทิสติก' 
                              ? 'bg-pink-100 text-pink-800 font-bold'
                              : std.disabilityType === 'บกพร่องทางสติปัญญา'
                              ? 'bg-indigo-100 text-indigo-800 font-semibold'
                              : 'bg-blue-100 text-blue-800 font-semibold'
                          }`}>
                            {std.disabilityType}
                          </span>
                        </td>
                        <td className="border border-slate-300 p-2 text-center text-slate-500">
                          {std.isMultipleDisabilities ? 'มี' : '-'}
                        </td>
                        <td className="border border-slate-300 p-2 text-center text-[11px]">
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                            <CheckCircle className="w-3 h-3" /> ครบ 100%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600">
                <b>หมายเหตุ:</b> นักเรียนทั้ง 18 คน ได้รับการจัดทำแผนการจัดการศึกษาเฉพาะบุคคล (IEP) พร้อมทั้งได้รับการเยี่ยมบ้านและการประเมินพฤติกรรมอารมณ์ (SDQ) ครบถ้วนตามมาตรฐานระบบดูแลช่วยเหลือนักเรียน
              </div>
            </div>
          )}

          {/* Official Signatures Footer (Standard Thai School Format) */}
          <div className="grid grid-cols-2 gap-8 pt-8 mt-6 border-t border-slate-300 text-center text-xs">
            <div className="space-y-8">
              <div>ลงชื่อ..........................................................{reportType === 'special_education' ? 'ครูผู้รับผิดชอบงานการศึกษาพิเศษ' : 'ครูที่ปรึกษา'}</div>
              <div>({reportType === 'special_education' ? 'นางสาวจารุวรรณ มงคลสุข' : (currentStudent?.advisorName || 'ครูสมพร เจริญจิต')})</div>
              <div>ตำแหน่ง {reportType === 'special_education' ? 'ครูผู้รับผิดชอบงานการศึกษาพิเศษ' : 'ครูประจำชั้น / ครูที่ปรึกษา'}</div>
            </div>

            <div className="space-y-8">
              <div>ลงชื่อ..........................................................ผู้บริหารสถานศึกษา</div>
              <div>(นายชาญชัย ศักดิ์เจริญ)</div>
              <div>ผู้อำนวยการโรงเรียนบ้านห้วยไคร้</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
