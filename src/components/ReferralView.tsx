import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  AlertOctagon, 
  Printer, 
  Search, 
  Filter, 
  Building2, 
  UserCheck, 
  FileText,
  Save
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { StudentReferral } from '../types';

export const ReferralView: React.FC = () => {
  const { 
    students, 
    referrals, 
    addReferral, 
    updateReferral, 
    openReportModal,
    setActiveStudentForModal 
  } = useStudentCare();

  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');
  const [filterType, setFilterType] = useState<'all' | 'internal' | 'external'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'in_progress' | 'resolved'>('all');
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');

  // Referral form state
  const [formData, setFormData] = useState<Omit<StudentReferral, 'id'>>({
    studentId: selectedStudentId,
    referralDate: new Date().toISOString().split('T')[0],
    type: 'internal',
    toDepartment: 'กลุ่มงานแนะแนวการศึกษาและอาชีพ',
    reason: '',
    symptomsAndDetails: '',
    urgency: 'urgent',
    referredBy: 'ครูสมพร เจริญจิต (ครูที่ปรึกษา)',
    currentStatus: 'in_progress',
    actionTaken: '',
    resultNotes: '',
  });

  const filteredReferrals = referrals.filter(r => {
    if (filterType !== 'all' && r.type !== filterType) return false;
    if (filterStatus !== 'all' && r.currentStatus !== filterStatus) return false;
    return true;
  });

  const handleCreateReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;

    addReferral({
      ...formData,
      studentId: selectedStudentId
    });
    setActiveTab('list');
  };

  const handleUpdateStatus = (id: string, newStatus: StudentReferral['currentStatus'], note?: string) => {
    updateReferral(id, {
      currentStatus: newStatus,
      resultNotes: note || undefined
    });
  };

  const internalDepartments = [
    'กลุ่มงานแนะแนวการศึกษาและอาชีพ',
    'งานพยาบาลและสุขอนามัยโรงเรียน',
    'กลุ่มงานกิจการนักเรียนและฝ่ายปกครอง',
    'คณะกรรมการงานทุนการศึกษา',
    'งานวิชาการ (คลินิกสอนซ่อมเสริม)'
  ];

  const externalDepartments = [
    'โรงพยาบาลศูนย์/โรงพยาบาลประจำจังหวัด (แผนกจิตเวช/วัยรุ่น)',
    'โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.)',
    'สำนักงานพัฒนาสังคมและความมั่นคงของมนุษย์จังหวัด (พมจ.)',
    'บ้านพักเด็กและครอบครัวจังหวัด',
    'ศูนย์ประสานงานช่วยเหลือเด็กและเยาวชนในภาวะวิกฤต',
    'สถานีตำรวจภูธรในพื้นที่'
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <ArrowRightLeft className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบส่งต่อผู้เรียน (Student Referral System)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                การส่งต่อภายใน (แนะแนว/พยาบาล/ฝ่ายปกครอง) และส่งต่อภายนอก (โรงพยาบาล/พมจ./สหวิชาชีพ)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sub Tab Switcher */}
          <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'list' ? 'bg-white shadow-xs text-amber-800' : 'text-slate-600'}`}
            >
              รายการส่งต่อ ({referrals.length})
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'create' ? 'bg-white shadow-xs text-amber-800' : 'text-slate-600'}`}
            >
              + ออกใบส่งตัวนักเรียน
            </button>
          </div>

          <button
            onClick={() => openReportModal('referral')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์ใบส่งตัว</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: REFERRAL CASES LIST */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          
          {/* Filters Bar */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              {/* Type filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-500">ประเภทส่งต่อ:</span>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded px-2 py-1"
                >
                  <option value="all">ทั้งหมด</option>
                  <option value="internal">ส่งต่อภายในโรงเรียน</option>
                  <option value="external">ส่งต่อภายนอกโรงเรียน</option>
                </select>
              </div>

              {/* Status filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-500">สถานะ:</span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded px-2 py-1"
                >
                  <option value="all">ทุกสถานะ</option>
                  <option value="pending">รอดำเนินการ</option>
                  <option value="in_progress">กำลังดำเนินการดูแล</option>
                  <option value="resolved">เสร็จสิ้น / ปัญหาคลี่คลาย</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('create')}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>สร้างใบส่งต่อใหม่</span>
            </button>
          </div>

          {/* Cards List */}
          <div className="space-y-3">
            {filteredReferrals.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center text-slate-400 text-xs border border-slate-200">
                ไม่พบรายการส่งต่อตามตัวกรองที่เลือก
              </div>
            ) : (
              filteredReferrals.map((ref) => {
                const std = students.find(s => s.id === ref.studentId);

                return (
                  <div 
                    key={ref.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-amber-300 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                          ref.type === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {ref.type === 'internal' ? 'ภายใน' : 'ภายนอก'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 
                              onClick={() => std && setActiveStudentForModal(std)}
                              className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-sm"
                            >
                              {std ? `${std.prefix}${std.firstName} ${std.lastName} (${std.classroom})` : 'ไม่ทราบนาม'}
                            </h4>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              ref.urgency === 'critical' ? 'bg-rose-100 text-rose-800' : ref.urgency === 'urgent' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {ref.urgency === 'critical' ? 'ด่วนวิกฤต' : ref.urgency === 'urgent' ? 'เร่งด่วน' : 'ปกติ'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            ส่งต่อไปยัง: <span className="font-semibold text-slate-800">{ref.toDepartment}</span> • วันที่ส่ง: {ref.referralDate}
                          </p>
                        </div>
                      </div>

                      {/* Status Badges & Quick Action */}
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <select
                          value={ref.currentStatus}
                          onChange={(e) => handleUpdateStatus(ref.id, e.target.value as any)}
                          className={`text-xs font-bold rounded-lg px-2.5 py-1 border ${
                            ref.currentStatus === 'resolved' 
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                              : ref.currentStatus === 'in_progress' 
                              ? 'bg-blue-50 text-blue-800 border-blue-300' 
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}
                        >
                          <option value="pending">รอดำเนินการ</option>
                          <option value="in_progress">กำลังดำเนินการดูแล</option>
                          <option value="resolved">ปัญหาคลี่คลาย / เสร็จสิ้น</option>
                        </select>

                        <button
                          onClick={() => openReportModal('referral', ref.studentId)}
                          className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                          title="พิมพ์ใบส่งตัว"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Details Body */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                      <div>
                        <span className="font-semibold text-slate-700 block mb-0.5">สาเหตุการส่งต่อ:</span>
                        <p className="text-slate-800">{ref.reason}</p>
                        <span className="font-semibold text-slate-700 block mt-2 mb-0.5">พฤติกรรม/ข้อเท็จจริงที่พบ:</span>
                        <p className="text-slate-600">{ref.symptomsAndDetails}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-700 block mb-0.5">การดำเนินการและผลการดูแล:</span>
                        <p className="text-slate-800">{ref.actionTaken || 'อยู่ระหว่างรอการประสานงานเข้าพบ'}</p>
                        {ref.resultNotes && (
                          <div className="mt-2 text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                            <b>ความคืบหน้า:</b> {ref.resultNotes}
                          </div>
                        )}
                        <div className="mt-2 text-[11px] text-slate-400">
                          ผู้ส่งต่อ: {ref.referredBy} {ref.updatedDate && `• อัปเดตล่าสุด: ${ref.updatedDate}`}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      )}

      {/* VIEW 2: CREATE REFERRAL SLIP */}
      {activeTab === 'create' && (
        <form onSubmit={handleCreateReferral} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base">
              สร้างใบส่งต่อนักเรียน (Student Referral Slip)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              จัดทำหนังสือส่งตัวนักเรียนไปยังหน่วยงานภายในหรือหน่วยงานภายนอกที่มีความเชี่ยวชาญเฉพาะทาง
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">เลือกนักเรียนที่จะส่งต่อ:</label>
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 font-semibold"
                required
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.classroom} #{s.seatNumber}: {s.prefix}{s.firstName} {s.lastName} ({s.currentRiskLevel})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">วันที่ส่งต่อ:</label>
              <input
                type="date"
                value={formData.referralDate}
                onChange={(e) => setFormData({ ...formData, referralDate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">ประเภทการส่งต่อ:</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'internal', toDepartment: internalDepartments[0] })}
                  className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${
                    formData.type === 'internal' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  ส่งต่อภายในโรงเรียน
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'external', toDepartment: externalDepartments[0] })}
                  className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${
                    formData.type === 'external' ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  ส่งต่อภายนอกโรงเรียน
                </button>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">หน่วยงาน / บุคลากรปลายทางที่รับส่งต่อ:</label>
              <select
                value={formData.toDepartment}
                onChange={(e) => setFormData({ ...formData, toDepartment: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 font-medium"
              >
                {(formData.type === 'internal' ? internalDepartments : externalDepartments).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs space-y-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                สาเหตุและวัตถุประสงค์ในการส่งต่อ:
              </label>
              <input
                type="text"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="เช่น ขาดเรียนบ่อยครั้ง พฤติกรรมก้าวร้าว ภาวะซึมเศร้า หรือขอรับเงินสงเคราะห์ครอบครัวยากจน..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                พฤติกรรม อาการ และข้อเท็จจริงที่พบโดยละเอียด:
              </label>
              <textarea
                rows={3}
                value={formData.symptomsAndDetails}
                onChange={(e) => setFormData({ ...formData, symptomsAndDetails: e.target.value })}
                placeholder="ระบุข้อเท็จจริง ระยะเวลาที่สังเกตพบ การพูดคุยเบื้องต้นกับนักเรียนและผู้ปกครอง..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">ระดับความเร่งด่วน:</label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-medium"
                >
                  <option value="normal">ปกติ (ตามรอบการนัดหมาย)</option>
                  <option value="urgent">เร่งด่วน (ภายใน 3-5 วัน)</option>
                  <option value="critical">ด่วนวิกฤต (ทันทีภายในวันนี้)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ชื่อผู้ส่งต่อ / ตำแหน่ง:</label>
                <input
                  type="text"
                  value={formData.referredBy}
                  onChange={(e) => setFormData({ ...formData, referredBy: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('list')}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
            >
              ยกเลิก
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกและออกใบส่งตัว</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
