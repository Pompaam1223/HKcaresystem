import React, { useState } from 'react';
import { 
  ClipboardList, 
  PlusCircle, 
  Calendar, 
  CheckCircle, 
  Clock, 
  User, 
  MessageSquare, 
  BookOpen, 
  HeartHandshake,
  Save,
  Filter
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { InterventionLog } from '../types';

export const TrackingView: React.FC = () => {
  const { 
    students, 
    interventions, 
    addIntervention, 
    setActiveStudentForModal 
  } = useStudentCare();

  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');

  // Form State
  const [formData, setFormData] = useState<Omit<InterventionLog, 'id'>>({
    studentId: selectedStudentId,
    logDate: new Date().toISOString().split('T')[0],
    activityType: 'การให้คำปรึกษา',
    topic: '',
    description: '',
    counselor: 'ครูสมพร เจริญจิต (ครูที่ปรึกษา)',
    outcome: 'พัฒนาการเป็นที่น่าพอใจ',
    nextAppointment: ''
  });

  const filteredLogs = interventions.filter(item => {
    if (filterType !== 'all' && item.activityType !== filterType) return false;
    return true;
  });

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId || !formData.topic) return;

    addIntervention({
      ...formData,
      studentId: selectedStudentId
    });
    setFormData({
      studentId: selectedStudentId,
      logDate: new Date().toISOString().split('T')[0],
      activityType: 'การให้คำปรึกษา',
      topic: '',
      description: '',
      counselor: 'ครูสมพร เจริญจิต',
      outcome: 'พัฒนาการเป็นที่น่าพอใจ',
      nextAppointment: ''
    });
    setActiveTab('list');
  };

  const activityOptions = [
    'การให้คำปรึกษา',
    'การสอนซ่อมเสริม',
    'การมอบทุนการศึกษา',
    'การปรับพฤติกรรม',
    'การประสานผู้ปกครอง',
    'ส่งเสริมความสามารถพิเศษ'
  ] as const;

  const getActivityBadgeColor = (type: InterventionLog['activityType']) => {
    switch (type) {
      case 'การให้คำปรึกษา': return 'bg-blue-100 text-blue-800';
      case 'การสอนซ่อมเสริม': return 'bg-indigo-100 text-indigo-800';
      case 'การมอบทุนการศึกษา': return 'bg-emerald-100 text-emerald-800';
      case 'การปรับพฤติกรรม': return 'bg-amber-100 text-amber-800';
      case 'การประสานผู้ปกครอง': return 'bg-purple-100 text-purple-800';
      case 'ส่งเสริมความสามารถพิเศษ': return 'bg-rose-100 text-rose-800';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-teal-100 text-teal-700">
              <ClipboardList className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบติดตามช่วยเหลือและบันทึกการให้คำปรึกษา
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                บันทึกกิจกรรมการช่วยเหลือนักเรียนรายบุคคล การสอนซ่อมเสริม และการประเมินผลการดูแล
              </p>
            </div>
          </div>
        </div>

        <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'list' ? 'bg-white shadow-xs text-teal-700' : 'text-slate-600'}`}
          >
            บันทึกการดูแลทั้งหมด ({interventions.length})
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'add' ? 'bg-white shadow-xs text-teal-700' : 'text-slate-600'}`}
          >
            + เพิ่มบันทึกการช่วยเหลือ
          </button>
        </div>
      </div>

      {/* VIEW 1: TIMELINE LIST */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          
          {/* Filter Bar */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-500">ประเภทกิจกรรม:</span>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-slate-700"
              >
                <option value="all">ทุกกิจกรรม ({interventions.length})</option>
                {activityOptions.map(act => (
                  <option key={act} value={act}>{act}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setActiveTab('add')}
              className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>บันทึกการให้คำปรึกษาใหม่</span>
            </button>
          </div>

          {/* Timeline Feed */}
          <div className="space-y-3">
            {filteredLogs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center text-slate-400 text-xs border border-slate-200">
                ไม่มีประวัติการบันทึกกิจกรรมในหมวดนี้
              </div>
            ) : (
              filteredLogs.map((log) => {
                const std = students.find(s => s.id === log.studentId);

                return (
                  <div 
                    key={log.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-teal-300 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${getActivityBadgeColor(log.activityType)}`}>
                          {log.activityType}
                        </span>
                        <h4 
                          onClick={() => std && setActiveStudentForModal(std)}
                          className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-sm"
                        >
                          {std ? `${std.prefix}${std.firstName} ${std.lastName} (${std.classroom})` : 'ไม่ทราบนาม'}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>วันที่: {log.logDate}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-700 space-y-2">
                      <div className="font-semibold text-slate-900">
                        หัวข้อ: {log.topic}
                      </div>
                      <p className="text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {log.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">ผลการช่วยเหลือ:</span>
                        <span className="font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {log.outcome}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-slate-500">
                        <span>ผู้บันทึก: {log.counselor}</span>
                        {log.nextAppointment && (
                          <span className="text-indigo-600 font-semibold flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            นัดติดตามผล: {log.nextAppointment}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      )}

      {/* VIEW 2: ADD INTERVENTION FORM */}
      {activeTab === 'add' && (
        <form onSubmit={handleAddLog} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base">
              บันทึกกิจกรรมการช่วยเหลือและให้คำปรึกษา
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              บันทึกการส่งเสริม หรือแก้ไขปัญหานักเรียน เพื่อใช้เป็นหลักฐานและติดตามผลต่อเนื่อง
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">เลือกนักเรียน:</label>
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 font-semibold"
                required
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.classroom} #{s.seatNumber}: {s.prefix}{s.firstName} {s.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">ประเภทกิจกรรมการช่วยเหลือ:</label>
              <select
                value={formData.activityType}
                onChange={(e) => setFormData({ ...formData, activityType: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 font-semibold"
              >
                {activityOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">วันที่ดำเนินการ:</label>
              <input
                type="date"
                value={formData.logDate}
                onChange={(e) => setFormData({ ...formData, logDate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
                required
              />
            </div>
          </div>

          <div className="text-xs space-y-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">หัวข้อกิจกรรม / ประเด็นที่พูดคุย:</label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="เช่น ปรึกษาปัญหาผลการเรียนตกต่ำ, มอบทุน กสศ., ซ่อมเสริมวิชาภาษาอังกฤษ..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">รายละเอียดกิจกรรม / ข้อตกลงร่วมกัน:</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="ระบุข้อเท็จจริง สิ่งที่พูดคุย แผนปฏิบัติการ หรือข้อตกลงในการปรับเปลี่ยนพฤติกรรม..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">ผลลัพธ์หลังการช่วยเหลือ:</label>
                <select
                  value={formData.outcome}
                  onChange={(e) => setFormData({ ...formData, outcome: e.target.value as any })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
                >
                  <option value="พฤติกรรม/ผลการเรียนดีขึ้นชัดเจน">พฤติกรรม/ผลการเรียนดีขึ้นชัดเจน</option>
                  <option value="พัฒนาการเป็นที่น่าพอใจ">พัฒนาการเป็นที่น่าพอใจ</option>
                  <option value="คงเดิม ต้องติดตามต่อเนื่อง">คงเดิม ต้องติดตามต่อเนื่อง</option>
                  <option value="จำเป็นต้องส่งต่อ">จำเป็นต้องส่งต่อ</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ผู้ให้คำปรึกษา / ครูผู้รับผิดชอบ:</label>
                <input
                  type="text"
                  value={formData.counselor}
                  onChange={(e) => setFormData({ ...formData, counselor: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">วันนัดหมายติดตามผลครั้งถัดไป (ถ้ามี):</label>
                <input
                  type="date"
                  value={formData.nextAppointment}
                  onChange={(e) => setFormData({ ...formData, nextAppointment: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"
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
              className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกกิจกรรมการช่วยเหลือ</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
