import React, { useState } from 'react';
import { X, Plus, Save, User } from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { Student } from '../types';
import { getAdvisorTextForClassroom } from '../data/teachersData';
import { StudentAvatar } from './StudentAvatar';

interface NewStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewStudentModal: React.FC<NewStudentModalProps> = ({ isOpen, onClose }) => {
  const { addStudent, selectedGrade, selectedClassroom } = useStudentCare();

  const initialClassroom = selectedClassroom !== 'all' ? selectedClassroom : 'ม.1/1';

  const [formData, setFormData] = useState<Omit<Student, 'id' | 'homeVisitCompleted' | 'sdqCompleted'>>({
    studentCode: (50000 + Math.floor(Math.random() * 900)).toString(),
    citizenId: '1-1002-00999-11-2',
    prefix: 'เด็กชาย',
    firstName: '',
    lastName: '',
    nickname: '',
    gender: 'male',
    grade: selectedGrade !== 'all' ? selectedGrade : 'ม.1',
    classroom: initialClassroom,
    roomNumber: 1,
    seatNumber: 15,
    birthDate: '2013-06-10',
    bloodType: 'O',
    religion: 'พุทธ',
    gpax: 3.00,
    advisorName: getAdvisorTextForClassroom(initialClassroom),
    phoneNumber: '',
    parentName: '',
    parentPhone: '',
    address: 'ต.ในเมือง อ.เมือง จ.ขอนแก่น',
    specialTalents: ['กีฬา'],
    currentRiskLevel: 'normal',
    avatarUrl: undefined,
    chronicIllness: '',
    allergy: '',
  });

  const [talentInput, setTalentInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      alert('กรุณากรอกชื่อและนามสกุลนักเรียน');
      return;
    }

    addStudent(formData);
    onClose();
  };

  const handleAddTalent = () => {
    if (talentInput.trim() && !formData.specialTalents.includes(talentInput.trim())) {
      setFormData(prev => ({
        ...prev,
        specialTalents: [...prev.specialTalents, talentInput.trim()]
      }));
      setTalentInput('');
    }
  };

  const removeTalent = (t: string) => {
    setFormData(prev => ({
      ...prev,
      specialTalents: prev.specialTalents.filter(item => item !== t)
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">เพิ่มข้อมูลนักเรียนใหม่</h3>
              <p className="text-xs text-slate-500">บันทึกเข้าสู่ฐานข้อมูลกลางระบบดูแลช่วยเหลือนักเรียน</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
          
          {/* Avatar cartoon preview banner */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
            <StudentAvatar 
              gender={formData.gender} 
              prefix={formData.prefix} 
              size="lg" 
              rounded="xl" 
            />
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-800">
                รูปโปรไฟล์: รูปการ์ตูน{formData.gender === 'female' ? 'นักเรียนหญิง' : 'นักเรียนชาย'}
              </div>
              <p className="text-[11px] text-slate-500">
                ระบบแสดงรูปการ์ตูนตามเพศให้อัตโนมัติ ไม่จำเป็นต้องอัปโหลดรูปถ่ายส่วนตัว
              </p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
              การ์ตูนอัตโนมัติ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">รหัสประจำตัวนักเรียน:</label>
              <input
                type="text"
                value={formData.studentCode}
                onChange={(e) => setFormData({ ...formData, studentCode: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ระดับชั้น:</label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              >
                <option value="ม.1">มัธยมศึกษาปีที่ 1</option>
                <option value="ม.2">มัธยมศึกษาปีที่ 2</option>
                <option value="ม.3">มัธยมศึกษาปีที่ 3</option>
                <option value="ม.4">มัธยมศึกษาปีที่ 4</option>
                <option value="ม.5">มัธยมศึกษาปีที่ 5</option>
                <option value="ม.6">มัธยมศึกษาปีที่ 6</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ห้องเรียน / เลขที่:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.classroom}
                  onChange={(e) => {
                    const cls = e.target.value;
                    const autoAdvisor = getAdvisorTextForClassroom(cls);
                    setFormData({ 
                      ...formData, 
                      classroom: cls, 
                      advisorName: autoAdvisor || formData.advisorName 
                    });
                  }}
                  placeholder="เช่น ม.1/1 หรือ ป.1"
                  className="w-2/3 bg-slate-50 border border-slate-200 rounded-lg p-2"
                  required
                />
                <input
                  type="number"
                  value={formData.seatNumber}
                  onChange={(e) => setFormData({ ...formData, seatNumber: Number(e.target.value) })}
                  className="w-1/3 bg-slate-50 border border-slate-200 rounded-lg p-2 text-center"
                  placeholder="เลขที่"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">คำนำหน้า:</label>
              <select
                value={formData.prefix}
                onChange={(e) => setFormData({ ...formData, prefix: e.target.value as any, gender: e.target.value.includes('หญิง') || e.target.value.includes('นางสาว') ? 'female' : 'male' })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              >
                <option value="เด็กชาย">เด็กชาย</option>
                <option value="เด็กหญิง">เด็กหญิง</option>
                <option value="นาย">นาย</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="block font-medium text-slate-700 mb-1">ชื่อ:</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block font-medium text-slate-700 mb-1">นามสกุล:</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ชื่อเล่น:</label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">เกรดเฉลี่ย (GPAX):</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={formData.gpax}
                onChange={(e) => setFormData({ ...formData, gpax: Number(e.target.value) })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">หมู่โลหิต:</label>
              <select
                value={formData.bloodType}
                onChange={(e) => setFormData({ ...formData, bloodType: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">สถานะกลุ่มเบื้องต้น:</label>
              <select
                value={formData.currentRiskLevel}
                onChange={(e) => setFormData({ ...formData, currentRiskLevel: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              >
                <option value="normal">กลุ่มปกติ</option>
                <option value="risk">กลุ่มเสี่ยง</option>
                <option value="problem">กลุ่มมีปัญหา</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">ชื่อผู้ปกครอง:</label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="เช่น นายมานพ สมบูรณ์"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ผู้ปกครอง:</label>
              <input
                type="tel"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                placeholder="08X-XXX-XXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">ครูประจำชั้น / ที่ปรึกษา:</label>
              <input
                type="text"
                value={formData.advisorName}
                onChange={(e) => setFormData({ ...formData, advisorName: e.target.value })}
                placeholder="ระบบระบุอัตโนมัติตามห้องเรียน"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">เบอร์โทรศัพท์นักเรียน:</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="08X-XXX-XXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Talents */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">ความสามารถพิเศษ / พรสวรรค์:</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={talentInput}
                onChange={(e) => setTalentInput(e.target.value)}
                placeholder="เช่น ฟุตบอล, ศิลปะ, วาดภาพ, ภาษาอังกฤษ..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddTalent(); } }}
              />
              <button
                type="button"
                onClick={handleAddTalent}
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium"
              >
                เพิ่ม
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {formData.specialTalents.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1 text-[11px]">
                  {t}
                  <button type="button" onClick={() => removeTalent(t)} className="text-emerald-600 hover:text-emerald-900 font-bold">×</button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">ที่อยู่ปัจจุบัน:</label>
            <textarea
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกนักเรียน</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
