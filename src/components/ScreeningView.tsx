import React, { useState } from 'react';
import { 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Save, 
  Edit3, 
  Printer, 
  Search,
  Check,
  ChevronDown
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { RiskLevel, StudentScreening, Student } from '../types';

export const ScreeningView: React.FC = () => {
  const { 
    students, 
    screenings, 
    saveScreening, 
    selectedGrade, 
    selectedClassroom, 
    openReportModal,
    setActiveStudentForModal,
    setAllStudentsToNormal
  } = useStudentCare();

  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');
  const [activeFormTab, setActiveFormTab] = useState<'form' | 'table'>('table');

  // Filter students based on classroom & grade
  const filteredStudents = students.filter(s => {
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    return true;
  });

  const currentStudent = students.find(s => s.id === selectedStudentId);
  const existingScreening = screenings.find(s => s.studentId === selectedStudentId);

  // Form State
  const [formData, setFormData] = useState<{
    academicYear: string;
    term: 1 | 2;
    evaluatedDate: string;
    evaluatedBy: string;
    summaryNotes: string;
    dimensions: {
      learning: { status: RiskLevel; details: string };
      health: { status: RiskLevel; details: string };
      economic: { status: RiskLevel; details: string };
      behavior: { status: RiskLevel; details: string };
      safety: { status: RiskLevel; details: string };
    };
  }>({
    academicYear: '2568',
    term: 1,
    evaluatedDate: new Date().toISOString().split('T')[0],
    evaluatedBy: 'ครูสมพร เจริญจิต',
    summaryNotes: '',
    dimensions: {
      learning: { status: 'normal', details: 'ผลการเรียนและทักษะการเรียนรู้ปกติ' },
      health: { status: 'normal', details: 'สุขภาพร่างกายและจิตใจแข็งแรงปกติ' },
      economic: { status: 'normal', details: 'ครอบครัวมีรายได้และสภาพความเป็นอยู่ปกติ' },
      behavior: { status: 'normal', details: 'ความประพฤติและระเบียบวินัยปกติ' },
      safety: { status: 'normal', details: 'การเดินทางและสิ่งแวดล้อมปลอดภัย ไม่มีสารเสพติด' },
    }
  });

  // When changing student, sync with existing record if available
  const handleSelectStudent = (stdId: string) => {
    setSelectedStudentId(stdId);
    const found = screenings.find(s => s.studentId === stdId);
    if (found) {
      setFormData({
        academicYear: found.academicYear,
        term: found.term,
        evaluatedDate: found.evaluatedDate,
        evaluatedBy: found.evaluatedBy,
        summaryNotes: found.summaryNotes,
        dimensions: { ...found.dimensions }
      });
    } else {
      setFormData({
        academicYear: '2568',
        term: 1,
        evaluatedDate: new Date().toISOString().split('T')[0],
        evaluatedBy: 'ครูประจำชั้น',
        summaryNotes: '',
        dimensions: {
          learning: { status: 'normal', details: 'ผลการเรียนปกติ' },
          health: { status: 'normal', details: 'สุขภาพแข็งแรง' },
          economic: { status: 'normal', details: 'สภาพความเป็นอยู่ปกติ' },
          behavior: { status: 'normal', details: 'ความประพฤติดี' },
          safety: { status: 'normal', details: 'ปลอดภัย ไม่มีความเสี่ยง' },
        }
      });
    }
  };

  // Compute calculated overall status
  const calculateOverallStatus = (): RiskLevel => {
    const statuses = [
      formData.dimensions.learning.status,
      formData.dimensions.health.status,
      formData.dimensions.economic.status,
      formData.dimensions.behavior.status,
      formData.dimensions.safety.status,
    ];
    if (statuses.includes('problem')) return 'problem';
    if (statuses.includes('risk')) return 'risk';
    return 'normal';
  };

  const calculatedStatus = calculateOverallStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;

    saveScreening({
      studentId: selectedStudentId,
      academicYear: formData.academicYear,
      term: formData.term,
      evaluatedDate: formData.evaluatedDate,
      evaluatedBy: formData.evaluatedBy,
      summaryNotes: formData.summaryNotes || (calculatedStatus === 'normal' ? 'อยู่ในเกณฑ์ปกติ สมควรส่งเสริมพัฒนาการตามศักยภาพ' : 'ควรได้รับการติดตามช่วยเหลือในด้านที่ปรากฏความเสี่ยง'),
      overallStatus: calculatedStatus,
      dimensions: formData.dimensions,
    });
    setActiveFormTab('table');
  };

  const getStatusBadge = (status: RiskLevel) => {
    switch (status) {
      case 'normal':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800"><CheckCircle2 className="w-3.5 h-3.5" /> ปกติ</span>;
      case 'risk':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"><AlertTriangle className="w-3.5 h-3.5" /> กลุ่มเสี่ยง</span>;
      case 'problem':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800"><AlertOctagon className="w-3.5 h-3.5" /> กลุ่มมีปัญหา</span>;
    }
  };

  const dimensionConfigs = [
    {
      key: 'learning' as const,
      label: '1. ด้านการเรียน (Learning)',
      hint: 'พิจารณา: ผลการเรียนเฉลี่ย, การส่งงาน, การขาดเรียน, ปัญหาอ่านไม่ออกเขียนไม่ได้',
      normalExample: 'ส่งงานครบ ผลการเรียนตามเกณฑ์',
      riskExample: 'ผลการเรียนเริ่มตก ส่งงานช้า ขาดเรียนบางวิชา',
      problemExample: 'ติด 0, ร, มส. หลายวิชา ไม่เข้าเรียนต่อเนื่อง',
    },
    {
      key: 'health' as const,
      label: '2. ด้านสุขภาพกายและจิต (Physical & Mental Health)',
      hint: 'พิจารณา: โรคประจำตัวรุนแรง, ทุพโภชนาการ, ภาวะซึมเศร้า, เครียด, ทำร้ายตนเอง',
      normalExample: 'ร่างกายแข็งแรง สุขภาพจิตแจ่มใส',
      riskExample: 'ป่วยบ่อย เป็นภูมิแพ้/หอบหืด มีความเครียดสูง',
      problemExample: 'มีอาการซึมเศร้า ทำร้ายตนเอง โรคเรื้อรังรุนแรง',
    },
    {
      key: 'economic' as const,
      label: '3. ด้านเศรษฐกิจและครอบครัว (Economic & Family)',
      hint: 'พิจารณา: ความยากจน, หนี้สิน, พ่อแม่หย่าร้าง, อยู่กับผู้สูงอายุ, ขาดแคลนอาหาร/ค่าเดินทาง',
      normalExample: 'ครอบครัวมีรายได้มั่นคง อบอุ่น',
      riskExample: 'รายได้น้อย รายได้ไม่แน่นอน ผู้ปกครองแยกทาง',
      problemExample: 'ยากจนวิกฤต กำพร้า ไม่มีผู้ดูแล ขาดเงินค่าอาหาร',
    },
    {
      key: 'behavior' as const,
      label: '4. ด้านพฤติกรรมและความประพฤติ (Behavior & Discipline)',
      hint: 'พิจารณา: การทะเลาะวิวาท, พฤติกรรมก้าวร้าว, การหนีเรียน, เล่นการพนัน, ติดเกม',
      normalExample: 'มีระเบียบวินัย สุภาพเรียบร้อย',
      riskExample: 'ชอบเก็บตัว หรือหงุดหงิดง่าย ติดเกมเป็นเวลามาก',
      problemExample: 'มีพฤติกรรมก้าวร้าว ชกต่อย ขโมยของ หนีเรียนประจำ',
    },
    {
      key: 'safety' as const,
      label: '5. ด้านความปลอดภัย/สารเสพติด/เพศ (Safety & Risk)',
      hint: 'พิจารณา: บุหรี่ บุหรี่ไฟฟ้า สุรา สารเสพติด, ความรุนแรงในครอบครัว, ความเสี่ยงทางเพศ',
      normalExample: 'เดินทางปลอดภัย ไม่ยุ่งเกี่ยวกับสิ่งเสพติด',
      riskExample: 'อยู่ในพื้นที่เสี่ยง หรือมีเพื่อนชวนสูบบุหรี่ไฟฟ้า',
      problemExample: 'พบสารเสพติด ถูกล่วงละเมิด หรือมีความรุนแรงในบ้าน',
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <Filter className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบคัดกรองนักเรียน (Student Screening System)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                การจำแนกกลุ่มนักเรียนเป็น กลุ่มปกติ, กลุ่มเสี่ยง และกลุ่มมีปัญหา ครอบคลุม 5 ด้านมาตรฐาน สพฐ.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Tab */}
          <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
            <button
              id="btn-screening-tab-table"
              onClick={() => setActiveFormTab('table')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeFormTab === 'table' ? 'bg-white shadow-xs text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              ตารางสรุปคัดกรอง ({filteredStudents.length})
            </button>
            <button
              id="btn-screening-tab-form"
              onClick={() => setActiveFormTab('form')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeFormTab === 'form' ? 'bg-white shadow-xs text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              แบบบันทึกการคัดกรอง 5 ด้าน
            </button>
          </div>

          <button
            id="btn-set-all-normal"
            onClick={() => {
              if (window.confirm('ต้องการปรับสถานะผลการคัดกรองนักเรียนทุกคนให้เป็น "กลุ่มปกติ" ทั้งหมดใช่หรือไม่?')) {
                setAllStudentsToNormal();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
            title="ปรับนักเรียนทุกคนเข้าสู่กลุ่มปกติ"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>ปรับเป็นกลุ่มปกติทั้งหมด</span>
          </button>

          <button
            id="btn-print-screening-report"
            onClick={() => openReportModal('screening')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>พิมพ์รายงานคัดกรอง</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: TABLE VIEW */}
      {activeFormTab === 'table' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                รายชื่อนักเรียนและผลการคัดกรอง (ห้อง {selectedClassroom === 'all' ? 'ทุกห้องเรียน' : selectedClassroom})
              </h3>
              <span className="text-xs text-slate-500">
                คลิกที่ปุ่ม &quot;บันทึกคัดกรอง&quot; เพื่อแก้ไขหรือทำการประเมิน 5 ด้าน
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                ปกติ: {filteredStudents.filter(s => s.currentRiskLevel === 'normal').length}
              </span>
              <span className="flex items-center gap-1 text-amber-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                เสี่ยง: {filteredStudents.filter(s => s.currentRiskLevel === 'risk').length}
              </span>
              <span className="flex items-center gap-1 text-rose-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                มีปัญหา: {filteredStudents.filter(s => s.currentRiskLevel === 'problem').length}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-3 px-4">เลขที่</th>
                  <th className="py-3 px-4">รหัส / ชื่อ-สกุล</th>
                  <th className="py-3 px-4">ชั้น/ห้อง</th>
                  <th className="py-3 px-4 text-center">ผลการคัดกรองรวม</th>
                  <th className="py-3 px-4">1. การเรียน</th>
                  <th className="py-3 px-4">2. สุขภาพ</th>
                  <th className="py-3 px-4">3. เศรษฐกิจ</th>
                  <th className="py-3 px-4">4. พฤติกรรม</th>
                  <th className="py-3 px-4">5. ความปลอดภัย</th>
                  <th className="py-3 px-4 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((std) => {
                  const scr = screenings.find(s => s.studentId === std.id);
                  
                  return (
                    <tr key={std.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-600">{std.seatNumber}</td>
                      <td className="py-3 px-4">
                        <div 
                          onClick={() => setActiveStudentForModal(std)}
                          className="font-bold text-slate-800 hover:text-blue-600 cursor-pointer flex items-center gap-2"
                        >
                          <span>{std.prefix}{std.firstName} {std.lastName}</span>
                        </div>
                        <div className="text-[10px] text-slate-400">รหัส: {std.studentCode} • GPAX: {std.gpax}</div>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-700">{std.classroom}</td>
                      <td className="py-3 px-4 text-center">
                        {getStatusBadge(std.currentRiskLevel)}
                      </td>
                      
                      {/* Dimensions pills */}
                      <td className="py-3 px-4">
                        {scr ? (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${scr.dimensions.learning.status === 'problem' ? 'bg-rose-100 text-rose-800' : scr.dimensions.learning.status === 'risk' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                            {scr.dimensions.learning.status === 'problem' ? 'มีปัญหา' : scr.dimensions.learning.status === 'risk' ? 'เสี่ยง' : 'ปกติ'}
                          </span>
                        ) : <span className="text-slate-400">-</span>}
                      </td>
                      <td className="py-3 px-4">
                        {scr ? (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${scr.dimensions.health.status === 'problem' ? 'bg-rose-100 text-rose-800' : scr.dimensions.health.status === 'risk' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                            {scr.dimensions.health.status === 'problem' ? 'มีปัญหา' : scr.dimensions.health.status === 'risk' ? 'เสี่ยง' : 'ปกติ'}
                          </span>
                        ) : <span className="text-slate-400">-</span>}
                      </td>
                      <td className="py-3 px-4">
                        {scr ? (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${scr.dimensions.economic.status === 'problem' ? 'bg-rose-100 text-rose-800' : scr.dimensions.economic.status === 'risk' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                            {scr.dimensions.economic.status === 'problem' ? 'มีปัญหา' : scr.dimensions.economic.status === 'risk' ? 'เสี่ยง' : 'ปกติ'}
                          </span>
                        ) : <span className="text-slate-400">-</span>}
                      </td>
                      <td className="py-3 px-4">
                        {scr ? (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${scr.dimensions.behavior.status === 'problem' ? 'bg-rose-100 text-rose-800' : scr.dimensions.behavior.status === 'risk' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                            {scr.dimensions.behavior.status === 'problem' ? 'มีปัญหา' : scr.dimensions.behavior.status === 'risk' ? 'เสี่ยง' : 'ปกติ'}
                          </span>
                        ) : <span className="text-slate-400">-</span>}
                      </td>
                      <td className="py-3 px-4">
                        {scr ? (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${scr.dimensions.safety.status === 'problem' ? 'bg-rose-100 text-rose-800' : scr.dimensions.safety.status === 'risk' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                            {scr.dimensions.safety.status === 'problem' ? 'มีปัญหา' : scr.dimensions.safety.status === 'risk' ? 'เสี่ยง' : 'ปกติ'}
                          </span>
                        ) : <span className="text-slate-400">-</span>}
                      </td>

                      <td className="py-3 px-4 text-center">
                        <button
                          id={`btn-edit-screening-${std.id}`}
                          onClick={() => {
                            handleSelectStudent(std.id);
                            setActiveFormTab('form');
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>ประเมิน</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 2: FORM VIEW */}
      {activeFormTab === 'form' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Select Student Banner */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                เลือกนักเรียนที่ต้องการบันทึกการคัดกรอง:
              </label>
              <select
                id="select-screening-student"
                value={selectedStudentId}
                onChange={(e) => handleSelectStudent(e.target.value)}
                className="w-full sm:w-80 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filteredStudents.map(std => (
                  <option key={std.id} value={std.id}>
                    {std.classroom} - เลขที่ {std.seatNumber}: {std.prefix}{std.firstName} {std.lastName} ({std.studentCode})
                  </option>
                ))}
              </select>
            </div>

            {/* Calculated Risk Level Live Preview */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-4">
              <div className="text-right">
                <div className="text-[11px] text-slate-500 font-medium">ผลการคัดกรองรวมโดยระบบ:</div>
                <div className="text-xs text-slate-400">(คำนวณจาก 5 ด้านอัตโนมัติ)</div>
              </div>
              <div>
                {getStatusBadge(calculatedStatus)}
              </div>
            </div>
          </div>

          {/* Student Info Bar */}
          {currentStudent && (
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 text-xs flex flex-wrap items-center justify-between gap-2 text-blue-900">
              <div className="flex items-center gap-2">
                <span className="font-bold">ข้อมูลนักเรียน:</span>
                <span>{currentStudent.prefix}{currentStudent.firstName} {currentStudent.lastName}</span>
                <span>• ห้อง {currentStudent.classroom}</span>
                <span>• เลขที่ {currentStudent.seatNumber}</span>
                <span>• เกรดเฉลี่ย (GPAX): {currentStudent.gpax}</span>
              </div>
              <div className="text-blue-700">
                ผู้ปกครอง: {currentStudent.parentName} ({currentStudent.parentPhone})
              </div>
            </div>
          )}

          {/* 5 Dimension Form Cards */}
          <div className="space-y-4">
            {dimensionConfigs.map((cfg) => {
              const currentDim = formData.dimensions[cfg.key];

              return (
                <div 
                  key={cfg.key} 
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    currentDim.status === 'problem' 
                      ? 'border-rose-300 bg-rose-50/20' 
                      : currentDim.status === 'risk' 
                      ? 'border-amber-300 bg-amber-50/20' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {cfg.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{cfg.hint}</p>
                    </div>

                    {/* Radio Options */}
                    <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-white shadow-2xs">
                      <label className={`cursor-pointer px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        currentDim.status === 'normal' 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}>
                        <input
                          type="radio"
                          name={`status-${cfg.key}`}
                          value="normal"
                          checked={currentDim.status === 'normal'}
                          onChange={() => setFormData({
                            ...formData,
                            dimensions: {
                              ...formData.dimensions,
                              [cfg.key]: { ...currentDim, status: 'normal' }
                            }
                          })}
                          className="hidden"
                        />
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ปกติ</span>
                      </label>

                      <label className={`cursor-pointer px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        currentDim.status === 'risk' 
                          ? 'bg-amber-500 text-white shadow-xs' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}>
                        <input
                          type="radio"
                          name={`status-${cfg.key}`}
                          value="risk"
                          checked={currentDim.status === 'risk'}
                          onChange={() => setFormData({
                            ...formData,
                            dimensions: {
                              ...formData.dimensions,
                              [cfg.key]: { ...currentDim, status: 'risk' }
                            }
                          })}
                          className="hidden"
                        />
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>กลุ่มเสี่ยง</span>
                      </label>

                      <label className={`cursor-pointer px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        currentDim.status === 'problem' 
                          ? 'bg-rose-600 text-white shadow-xs' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}>
                        <input
                          type="radio"
                          name={`status-${cfg.key}`}
                          value="problem"
                          checked={currentDim.status === 'problem'}
                          onChange={() => setFormData({
                            ...formData,
                            dimensions: {
                              ...formData.dimensions,
                              [cfg.key]: { ...currentDim, status: 'problem' }
                            }
                          })}
                          className="hidden"
                        />
                        <AlertOctagon className="w-3.5 h-3.5" />
                        <span>กลุ่มมีปัญหา</span>
                      </label>
                    </div>
                  </div>

                  {/* Details Input */}
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      รายละเอียดและพฤติกรรมบ่งชี้:
                    </label>
                    <input
                      type="text"
                      value={currentDim.details}
                      onChange={(e) => setFormData({
                        ...formData,
                        dimensions: {
                          ...formData.dimensions,
                          [cfg.key]: { ...currentDim, details: e.target.value }
                        }
                      })}
                      placeholder="ระบุข้อเท็จจริงหรือพฤติกรรมที่สังเกตพบ..."
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Evaluation Details Footer */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                สรุปผลการคัดกรองและความเห็นของครูที่ปรึกษา:
              </label>
              <textarea
                rows={3}
                value={formData.summaryNotes}
                onChange={(e) => setFormData({ ...formData, summaryNotes: e.target.value })}
                placeholder="ระบุข้อสรุป แผนการดูแล หรือข้อเสนอแนะในการส่งต่อช่วยเหลือ..."
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  ชื่อครูผู้ประเมิน:
                </label>
                <input
                  type="text"
                  value={formData.evaluatedBy}
                  onChange={(e) => setFormData({ ...formData, evaluatedBy: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  วันที่ทำการคัดกรอง:
                </label>
                <input
                  type="date"
                  value={formData.evaluatedDate}
                  onChange={(e) => setFormData({ ...formData, evaluatedDate: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveFormTab('table')}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                ยกเลิก / กลับไปตาราง
              </button>

              <button
                type="submit"
                id="btn-save-screening"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>บันทึกผลการคัดกรอง</span>
              </button>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
