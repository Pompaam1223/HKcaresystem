import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Camera, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Printer, 
  Navigation as NavIcon, 
  Save, 
  Phone, 
  User, 
  DollarSign, 
  Heart,
  ExternalLink,
  Upload
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { HomeVisitRecord, Student } from '../types';
import { StudentAvatar } from './StudentAvatar';

export const HomeVisitView: React.FC = () => {
  const { 
    students, 
    homeVisits, 
    saveHomeVisit, 
    selectedGrade, 
    selectedClassroom, 
    openReportModal,
    setActiveStudentForModal,
    showToast
  } = useStudentCare();

  const [activeSubTab, setActiveSubTab] = useState<'list' | 'form'>('list');
  const [filterVisited, setFilterVisited] = useState<'all' | 'done' | 'pending'>('all');
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');
  const [locatingGps, setLocatingGps] = useState(false);

  // Filter students
  const filteredStudents = students.filter(s => {
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    if (filterVisited === 'done' && !s.homeVisitCompleted) return false;
    if (filterVisited === 'pending' && s.homeVisitCompleted) return false;
    return true;
  });

  const currentStudent = students.find(s => s.id === selectedStudentId);

  // Form State
  const [formData, setFormData] = useState<Omit<HomeVisitRecord, 'id'>>({
    studentId: selectedStudentId,
    visitDate: new Date().toISOString().split('T')[0],
    academicYear: '2568',
    term: 1,
    visitorName: 'ครูสมพร เจริญจิต',
    visitorPosition: 'ครูที่ปรึกษา',
    houseType: 'บ้านเดี่ยว',
    livingWith: 'บิดามารดา',
    familyMembersCount: 4,
    familyRelationship: 'อบอุ่นดีมาก',
    monthlyIncome: 25000,
    hasDebt: false,
    distanceFromSchoolKm: 4.5,
    commuteMethod: 'ผู้ปกครองมาส่ง',
    gpsCoordinates: { lat: 16.4322, lng: 102.8236 },
    address: '',
    photoUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80',
    homeCondition: 'มั่นคงถาวร สะอาด',
    requestedSupport: ['ทุนการศึกษา'],
    parentFeedback: 'ผู้ปกครองให้การสนับสนุนการเรียนอย่างดี พร้อมร่วมมือกิจกรรมโรงเรียน',
    teacherImpression: 'นักเรียนมีความเป็นอยู่สุขสบาย ครอบครัวเอาใจใส่ดีมาก',
    status: 'completed'
  });

  const handleSelectStudentForVisit = (stdId: string) => {
    setSelectedStudentId(stdId);
    const targetStudent = students.find(s => s.id === stdId);
    const existing = homeVisits.find(h => h.studentId === stdId);

    if (existing) {
      setFormData({ ...existing });
    } else {
      setFormData({
        studentId: stdId,
        visitDate: new Date().toISOString().split('T')[0],
        academicYear: '2568',
        term: 1,
        visitorName: targetStudent?.advisorName || 'ครูที่ปรึกษา',
        visitorPosition: 'ครูที่ปรึกษา',
        houseType: 'บ้านเดี่ยว',
        livingWith: 'บิดามารดา',
        familyMembersCount: 4,
        familyRelationship: 'อบอุ่นดีมาก',
        monthlyIncome: 20000,
        hasDebt: false,
        distanceFromSchoolKm: 5.0,
        commuteMethod: 'รถจักรยานยนต์',
        gpsCoordinates: { lat: 16.4419, lng: 102.8360 },
        address: targetStudent?.address || '',
        photoUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=80',
        homeCondition: 'มั่นคงถาวร สะอาด',
        requestedSupport: [],
        parentFeedback: '',
        teacherImpression: '',
        status: 'completed'
      });
    }
  };

  const getCurrentGpsLocation = () => {
    if (!navigator.geolocation) {
      showToast('เบราว์เซอร์ไม่รองรับการดึงพิกัด Geolocation');
      return;
    }
    setLocatingGps(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFormData(prev => ({
          ...prev,
          gpsCoordinates: {
            lat: parseFloat(pos.coords.latitude.toFixed(6)),
            lng: parseFloat(pos.coords.longitude.toFixed(6)),
          }
        }));
        setLocatingGps(false);
        showToast('ดึงพิกัด GPS ปัจจุบันสำเร็จ');
      },
      (err) => {
        console.warn(err);
        setLocatingGps(false);
        // Fallback to sample coordinates
        setFormData(prev => ({
          ...prev,
          gpsCoordinates: { lat: 16.4385, lng: 102.8341 }
        }));
        showToast('ใช้พิกัดจำลอง (ไม่ได้รับอนุญาตหรืออุปกรณ์ไม่เปิด GPS)');
      },
      { timeout: 8000 }
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setFormData(prev => ({ ...prev, photoUrl: uploadEvent.target?.result as string }));
          showToast('อัปโหลดภาพถ่ายการเยี่ยมบ้านเรียบร้อย');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSupportItem = (item: string) => {
    setFormData(prev => {
      const exists = prev.requestedSupport.includes(item);
      return {
        ...prev,
        requestedSupport: exists 
          ? prev.requestedSupport.filter(i => i !== item)
          : [...prev.requestedSupport, item]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;
    saveHomeVisit({
      ...formData,
      studentId: selectedStudentId
    });
    setActiveSubTab('list');
  };

  const supportOptions = [
    'ทุนการศึกษาเพื่อการศึกษา',
    'ชุดนักเรียนและรองเท้า',
    'อุปกรณ์การเรียน / เครื่องเขียน',
    'ทุนอาหารกลางวัน',
    'รถรับส่งนักเรียน',
    'คำปรึกษาปัญหาครอบครัว',
    'เงินสงเคราะห์เด็กเปราะบาง (พมจ.)'
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
              <Home className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบเยี่ยมบ้านนักเรียนออนไลน์ (Home Visit System)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                บันทึกข้อมูลสภาพแวดล้อม พิกัด GPS ภาพถ่าย และความต้องการช่วยเหลือตามแบบ บร.01
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Sub Tab Switcher */}
          <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
            <button
              id="btn-homevisit-tab-list"
              onClick={() => setActiveSubTab('list')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeSubTab === 'list' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              รายการเยี่ยมบ้าน ({students.filter(s => s.homeVisitCompleted).length}/{students.length})
            </button>
            <button
              id="btn-homevisit-tab-form"
              onClick={() => {
                handleSelectStudentForVisit(selectedStudentId || students[0]?.id);
                setActiveSubTab('form');
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeSubTab === 'form' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              บันทึกการเยี่ยมบ้าน (แบบ บร.01)
            </button>
          </div>

          <button
            id="btn-print-homevisit-report"
            onClick={() => openReportModal('homevisit', selectedStudentId)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>พิมพ์แบบ บร.01</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: LIST / CARDS */}
      {activeSubTab === 'list' && (
        <div className="space-y-4">
          
          {/* Filter sub bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">สถานะการเยี่ยม:</span>
              <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                <button
                  onClick={() => setFilterVisited('all')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${filterVisited === 'all' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'}`}
                >
                  ทั้งหมด ({filteredStudents.length})
                </button>
                <button
                  onClick={() => setFilterVisited('done')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${filterVisited === 'done' ? 'bg-emerald-600 font-bold text-white shadow-2xs' : 'text-emerald-700'}`}
                >
                  เยี่ยมแล้ว ({filteredStudents.filter(s => s.homeVisitCompleted).length})
                </button>
                <button
                  onClick={() => setFilterVisited('pending')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${filterVisited === 'pending' ? 'bg-amber-500 font-bold text-white shadow-2xs' : 'text-amber-700'}`}
                >
                  ยังไม่เยี่ยม ({filteredStudents.filter(s => !s.homeVisitCompleted).length})
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                const unvisited = filteredStudents.find(s => !s.homeVisitCompleted);
                if (unvisited) {
                  handleSelectStudentForVisit(unvisited.id);
                  setActiveSubTab('form');
                } else {
                  showToast('นักเรียนในห้องนี้ได้รับการเยี่ยมบ้านครบถ้วนแล้ว!');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>บันทึกเยี่ยมบ้านคนถัดไป</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((std) => {
              const visit = homeVisits.find(h => h.studentId === std.id);

              return (
                <div 
                  key={std.id}
                  className={`bg-white rounded-2xl border transition-all shadow-xs overflow-hidden flex flex-col justify-between ${
                    visit ? 'border-slate-200 hover:border-indigo-400' : 'border-dashed border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div>
                    {/* Card Header with image */}
                    {visit?.photoUrl ? (
                      <div className="h-36 w-full relative overflow-hidden bg-slate-100">
                        <img 
                          src={visit.photoUrl} 
                          alt="ภาพถ่ายการเยี่ยมบ้าน"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                            เยี่ยมแล้วเมื่อ {visit.visitDate}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3.5 bg-slate-100/70 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">
                          {std.classroom} • เลขที่ {std.seatNumber}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          std.homeVisitCompleted 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {std.homeVisitCompleted ? 'เยี่ยมแล้ว' : 'ยังไม่เยี่ยมบ้าน'}
                        </span>
                      </div>
                    )}

                    <div className="p-4 space-y-3">
                      {/* Student Info */}
                      <div className="flex items-center gap-3">
                        <StudentAvatar 
                          gender={std.gender} 
                          prefix={std.prefix} 
                          seed={std.seatNumber || std.id} 
                          size="md" 
                        />
                        <div>
                          <div 
                            onClick={() => setActiveStudentForModal(std)}
                            className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                          >
                            {std.prefix}{std.firstName} {std.lastName}
                          </div>
                          <div className="text-xs text-slate-500">
                            รหัส: {std.studentCode} • เลขที่ {std.seatNumber}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      {visit ? (
                        <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">พักอาศัยกับ:</span>
                            <span className="font-semibold text-slate-800">{visit.livingWith}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">ลักษณะที่อยู่อาศัย:</span>
                            <span className="font-medium">{visit.houseType}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">รายได้เฉลี่ย:</span>
                            <span className="font-semibold text-emerald-700">{visit.monthlyIncome.toLocaleString()} บาท/เดือน</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">ระยะทางมาโรงเรียน:</span>
                            <span>{visit.distanceFromSchoolKm} กม. ({visit.commuteMethod})</span>
                          </div>
                          {visit.gpsCoordinates && (
                            <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[11px]">
                              <span className="text-slate-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-red-500" /> พิกัด GPS:
                              </span>
                              <a 
                                href={`https://www.google.com/maps?q=${visit.gpsCoordinates.lat},${visit.gpsCoordinates.lng}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline flex items-center gap-0.5"
                              >
                                {visit.gpsCoordinates.lat.toFixed(4)}, {visit.gpsCoordinates.lng.toFixed(4)}
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500 space-y-1 py-1">
                          <p>ที่อยู่ตามทะเบียน: {std.address || 'ไม่ระบุ'}</p>
                          <p>ผู้ปกครอง: {std.parentName} ({std.parentPhone})</p>
                        </div>
                      )}

                      {/* Requested support tags */}
                      {visit?.requestedSupport && visit.requestedSupport.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {visit.requestedSupport.map(req => (
                            <span key={req} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                              {req}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        handleSelectStudentForVisit(std.id);
                        setActiveSubTab('form');
                      }}
                      className="flex-1 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200 text-center"
                    >
                      {visit ? 'แก้ไขข้อมูลเยี่ยมบ้าน' : 'บันทึกการเยี่ยมบ้าน'}
                    </button>

                    {visit && (
                      <button
                        onClick={() => openReportModal('homevisit', std.id)}
                        className="p-1.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                        title="พิมพ์ใบเยี่ยมบ้าน แบบ บร.01"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* VIEW 2: HOME VISIT RECORDING FORM (แบบ บร.01) */}
      {activeSubTab === 'form' && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6">
          
          {/* Header of Form */}
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded">
                แบบบันทึกการเยี่ยมบ้านนักเรียน (แบบ บร.01)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                การลงพื้นที่และสำรวจสภาพความเป็นอยู่ของนักเรียน
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-600">เลือกนักเรียน:</label>
              <select
                id="select-homevisit-student"
                value={selectedStudentId}
                onChange={(e) => handleSelectStudentForVisit(e.target.value)}
                className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.classroom} #{s.seatNumber}: {s.prefix}{s.firstName} {s.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 1: Basic Info & Visitor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block font-medium text-slate-700 mb-1">วันที่ออกเยี่ยมบ้าน:</label>
              <input
                type="date"
                value={formData.visitDate}
                onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ชื่อครูผู้เยี่ยมบ้าน:</label>
              <input
                type="text"
                value={formData.visitorName}
                onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ตำแหน่ง:</label>
              <input
                type="text"
                value={formData.visitorPosition}
                onChange={(e) => setFormData({ ...formData, visitorPosition: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">ปีการศึกษา / ภาคเรียน:</label>
              <div className="flex gap-1">
                <input
                  type="text"
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                  className="w-2/3 bg-slate-50 border border-slate-200 rounded-lg p-2 text-center"
                />
                <select
                  value={formData.term}
                  onChange={(e) => setFormData({ ...formData, term: Number(e.target.value) as 1 | 2 })}
                  className="w-1/3 bg-slate-50 border border-slate-200 rounded-lg p-2"
                >
                  <option value={1}>เทอม 1</option>
                  <option value={2}>เทอม 2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Family & Living Condition */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
              <User className="w-4 h-4 text-blue-600" />
              ข้อมูลครอบครัวและการอยู่อาศัย
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">นักเรียนพักอาศัยอยู่กับ:</label>
                <select
                  value={formData.livingWith}
                  onChange={(e) => setFormData({ ...formData, livingWith: e.target.value as any })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                >
                  <option value="บิดามารดา">บิดามารดา</option>
                  <option value="บิดา">บิดา (มารดาแยกทาง/เสียชีวิต)</option>
                  <option value="มารดา">มารดา (บิดาแยกทาง/เสียชีวิต)</option>
                  <option value="ปู่ย่าตายาย">ปู่ย่าตายาย</option>
                  <option value="ญาติ">ญาติพี่น้อง</option>
                  <option value="ผู้อื่น/ผู้ปกครอง">ผู้อื่น / ผู้มีอุปการคุณ</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">ลักษณะบ้านพักอาศัย:</label>
                <select
                  value={formData.houseType}
                  onChange={(e) => setFormData({ ...formData, houseType: e.target.value as any })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                >
                  <option value="บ้านเดี่ยว">บ้านเดี่ยว (ของตนเอง)</option>
                  <option value="บ้านเช่า/ห้องแถว">บ้านเช่า / ห้องแถว / หอพัก</option>
                  <option value="แฟลต/คอนโด">แฟลต / คอนโดมิเนียม</option>
                  <option value="เพิงพักชั่วคราว">เพิงพักชั่วคราว / กระต๊อบ</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">สภาพตัวบ้าน:</label>
                <select
                  value={formData.homeCondition}
                  onChange={(e) => setFormData({ ...formData, homeCondition: e.target.value as any })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                >
                  <option value="มั่นคงถาวร สะอาด">มั่นคงถาวร สะอาด ปลอดภัย</option>
                  <option value="สภาพปานกลาง">สภาพปานกลาง พออยู่อาศัยได้</option>
                  <option value="ทรุดโทรม ชำรุด">ทรุดโทรม ชำรุด หลังคารั่ว</option>
                  <option value="ไม่ปลอดภัย/แออัด">ไม่ปลอดภัย / แออัด / เสี่ยงอันตราย</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">จำนวนสมาชิกในบ้าน (คน):</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={formData.familyMembersCount}
                  onChange={(e) => setFormData({ ...formData, familyMembersCount: Number(e.target.value) })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1">ความสัมพันธ์ในครอบครัว:</label>
                <select
                  value={formData.familyRelationship}
                  onChange={(e) => setFormData({ ...formData, familyRelationship: e.target.value as any })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                >
                  <option value="อบอุ่นดีมาก">อบอุ่นดีมาก รับฟังกัน</option>
                  <option value="ปกติทั่วไป">ปกติทั่วไป</option>
                  <option value="มีความขัดแย้งบ้าง">มีความขัดแย้ง ทะเลาะกันบ้าง</option>
                  <option value="เหินห่าง/ตึงเครียด">เหินห่าง / ตึงเครียด ไม่คุยกัน</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">รายได้ครอบครัวรวมต่อเดือน (บาท):</label>
                <input
                  type="number"
                  step={500}
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs pt-1">
              <label className="inline-flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.hasDebt}
                  onChange={(e) => setFormData({ ...formData, hasDebt: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>ครอบครัวมีภาระหนี้สินนอกระบบ หรือหนี้สินที่ส่งผลกระทบต่อการครองชีพ</span>
              </label>
            </div>
          </div>

          {/* Section 3: Commute & Location with GPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
                <NavIcon className="w-4 h-4 text-emerald-600" />
                การเดินทางมาโรงเรียน
              </h4>
              <div>
                <label className="block text-slate-600 mb-1">ระยะทางจากบ้านถึงโรงเรียน (กิโลเมตร):</label>
                <input
                  type="number"
                  step={0.1}
                  value={formData.distanceFromSchoolKm}
                  onChange={(e) => setFormData({ ...formData, distanceFromSchoolKm: Number(e.target.value) })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">วิธีเดินทางหลัก:</label>
                <select
                  value={formData.commuteMethod}
                  onChange={(e) => setFormData({ ...formData, commuteMethod: e.target.value as any })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                >
                  <option value="เดินเท้า">เดินเท้า</option>
                  <option value="จักรยาน">จักรยาน</option>
                  <option value="รถจักรยานยนต์">รถจักรยานยนต์ (ขับเอง/ซ้อน)</option>
                  <option value="รถรับส่งนักเรียน">รถรับส่งนักเรียน</option>
                  <option value="รถประจำทาง">รถประจำทาง / สองแถว</option>
                  <option value="ผู้ปกครองมาส่ง">ผู้ปกครองมาส่งด้วยรถยนต์</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-600 mb-1">ที่อยู่บ้านที่ไปเยี่ยม:</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="บ้านเลขที่ หมู่ ซอย ถนน ตำบล อำเภอ จังหวัด..."
                  className="w-full bg-white border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>

            {/* GPS & Photo upload */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  พิกัดแผนที่ GPS & ภาพถ่าย
                </h4>
                <button
                  type="button"
                  id="btn-get-current-gps"
                  onClick={getCurrentGpsLocation}
                  disabled={locatingGps}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg font-semibold flex items-center gap-1 transition-colors"
                >
                  <NavIcon className={`w-3 h-3 ${locatingGps ? 'animate-spin' : ''}`} />
                  <span>{locatingGps ? 'กำลังดึงพิกัด...' : 'ปักหมุด GPS ตอนนี้'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-slate-500">ละติจูด (Lat):</span>
                  <input
                    type="number"
                    step="any"
                    value={formData.gpsCoordinates?.lat || 0}
                    onChange={(e) => setFormData({
                      ...formData,
                      gpsCoordinates: {
                        lat: Number(e.target.value),
                        lng: formData.gpsCoordinates?.lng || 0
                      }
                    })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs font-mono"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500">ลองจิจูด (Lng):</span>
                  <input
                    type="number"
                    step="any"
                    value={formData.gpsCoordinates?.lng || 0}
                    onChange={(e) => setFormData({
                      ...formData,
                      gpsCoordinates: {
                        lat: formData.gpsCoordinates?.lat || 0,
                        lng: Number(e.target.value)
                      }
                    })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-600 font-medium">รูปถ่ายการเยี่ยมบ้าน:</span>
                  <label className="text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                    <Upload className="w-3 h-3" />
                    <span>แนบรูปถ่าย</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.photoUrl ? (
                  <div className="h-28 w-full rounded-lg overflow-hidden relative border border-slate-200">
                    <img 
                      src={formData.photoUrl} 
                      alt="รูปถ่ายการเยี่ยมบ้าน" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-24 w-full rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                    <Camera className="w-6 h-6 mb-1 text-slate-300" />
                    <span>ยังไม่มีรูปภาพ (กดแนบรูปถ่าย)</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 4: Support Needs Checkboxes */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500" />
              สิ่งที่นักเรียนและครอบครัวต้องการให้โรงเรียนช่วยเหลือ:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
              {supportOptions.map(opt => {
                const checked = formData.requestedSupport.includes(opt);
                return (
                  <label 
                    key={opt}
                    onClick={() => toggleSupportItem(opt)}
                    className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                      checked ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Section 5: Observations & Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                ความคิดเห็นและความคาดหวังของผู้ปกครอง:
              </label>
              <textarea
                rows={3}
                value={formData.parentFeedback}
                onChange={(e) => setFormData({ ...formData, parentFeedback: e.target.value })}
                placeholder="ระบุคำบอกเล่า ความต้องการ หรือข้อกังวลของผู้ปกครอง..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                บันทึกความเห็นและข้อสังเกตของครูผู้เยี่ยมบ้าน:
              </label>
              <textarea
                rows={3}
                value={formData.teacherImpression}
                onChange={(e) => setFormData({ ...formData, teacherImpression: e.target.value })}
                placeholder="สภาพแวดล้อม ความพร้อมในการเรียน และแนวทางการช่วยเหลือนักเรียนรายบุคคล..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:bg-white"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setActiveSubTab('list')}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              ยกเลิก
            </button>

            <button
              type="submit"
              id="btn-save-homevisit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกแบบ บร.01</span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
