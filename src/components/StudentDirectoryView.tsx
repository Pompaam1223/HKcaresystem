import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Printer, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Home, 
  Smile, 
  Eye,
  Grid,
  List,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { Student, RiskLevel } from '../types';
import { HomeroomTeachersView } from './HomeroomTeachersView';
import { StudentAvatar } from './StudentAvatar';

interface StudentDirectoryViewProps {
  onOpenNewStudent: () => void;
}

export const StudentDirectoryView: React.FC<StudentDirectoryViewProps> = ({ onOpenNewStudent }) => {
  const { 
    students, 
    teachers,
    deleteStudent, 
    selectedGrade, 
    selectedClassroom, 
    setSelectedClassroom,
    searchQuery, 
    setSearchQuery,
    selectedRiskFilter,
    setActiveStudentForModal,
    openReportModal,
    setActiveTab
  } = useStudentCare();

  const [directoryTab, setDirectoryTab] = useState<'students' | 'teachers'>('students');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [filterSpecialEduOnly, setFilterSpecialEduOnly] = useState<boolean>(false);

  // Filter students based on current criteria
  const filteredStudents = students.filter(s => {
    if (filterSpecialEduOnly && !s.hasDisability) return false;
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    if (selectedRiskFilter !== 'all' && s.currentRiskLevel !== selectedRiskFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = `${s.prefix}${s.firstName} ${s.lastName} ${s.nickname}`.toLowerCase().includes(q);
      const matchCode = s.studentCode.includes(q);
      const matchCitizen = s.citizenId.includes(q);
      const matchSeat = s.seatNumber.toString() === q;
      const matchDisability = s.disabilityType && s.disabilityType.toLowerCase().includes(q);
      if (!matchName && !matchCode && !matchCitizen && !matchSeat && !matchDisability) return false;
    }
    return true;
  });

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'normal':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800"><CheckCircle2 className="w-3 h-3" /> ปกติ</span>;
      case 'risk':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"><AlertTriangle className="w-3 h-3" /> กลุ่มเสี่ยง</span>;
      case 'problem':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800"><AlertOctagon className="w-3 h-3" /> มีปัญหา</span>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <Users className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ฐานข้อมูลกลางระบบดูแลช่วยเหลือนักเรียน
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                โรงเรียนบ้านห้วยไคร้ • ทะเบียนประวัตินักเรียน และข้อมูลครูประจำชั้น 11 ห้องเรียน
              </p>
            </div>
          </div>

          {/* Sub-tab Navigation: นักเรียน vs ครูประจำชั้น */}
          <div className="flex items-center gap-1.5 mt-3 p-1 bg-slate-100 rounded-xl w-fit">
            <button
              onClick={() => setDirectoryTab('students')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                directoryTab === 'students' 
                  ? 'bg-white text-blue-700 shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>รายชื่อนักเรียน ({students.length} คน)</span>
            </button>
            <button
              onClick={() => setDirectoryTab('teachers')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                directoryTab === 'teachers' 
                  ? 'bg-white text-blue-700 shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>รายชื่อครูประจำชั้น ({teachers.length} ท่าน)</span>
            </button>
          </div>
        </div>

        {directoryTab === 'students' && (
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* View mode toggle */}
            <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'}`}
                title="มุมมองตาราง"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'}`}
                title="มุมมองการ์ด"
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Special Education Only Toggle */}
            <button
              onClick={() => setFilterSpecialEduOnly(!filterSpecialEduOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                filterSpecialEduOnly
                  ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>นักเรียนพิเศษ ({students.filter(s => s.hasDisability).length})</span>
            </button>

            {/* Open Special Education Report Modal */}
            <button
              onClick={() => openReportModal('special_education')}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold rounded-xl border border-purple-300 shadow-xs transition-colors"
              title="เปิดรายงานข้อมูลนักเรียนการศึกษาพิเศษ สพฐ."
            >
              <Printer className="w-3.5 h-3.5 text-purple-700" />
              <span>พิมพ์รายงาน สพฐ.</span>
            </button>

            <button
              onClick={onOpenNewStudent}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>เพิ่มนักเรียนใหม่</span>
            </button>
          </div>
        )}
      </div>

      {/* RENDER HOMEROOM TEACHERS VIEW */}
      {directoryTab === 'teachers' ? (
        <HomeroomTeachersView 
          onSelectClassroom={(cls) => {
            setSelectedClassroom(cls);
            setDirectoryTab('students');
          }}
        />
      ) : (
        <>
          {/* Info Stats Row */}
          <div className="flex items-center justify-between text-xs text-slate-600 px-1">
            <span>
              แสดงผล <b>{filteredStudents.length}</b> จากทั้งหมด <b>{students.length}</b> คน
            </span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-700">ปกติ: {filteredStudents.filter(s => s.currentRiskLevel === 'normal').length}</span>
              <span className="text-amber-700">เสี่ยง: {filteredStudents.filter(s => s.currentRiskLevel === 'risk').length}</span>
              <span className="text-rose-700">มีปัญหา: {filteredStudents.filter(s => s.currentRiskLevel === 'problem').length}</span>
            </div>
          </div>

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-3 px-4">เลขที่</th>
                  <th className="py-3 px-4">นักเรียน</th>
                  <th className="py-3 px-4">ห้องเรียน / ครูประจำชั้น</th>
                  <th className="py-3 px-4">GPAX</th>
                  <th className="py-3 px-4 text-center">กลุ่มคัดกรอง</th>
                  <th className="py-3 px-4 text-center">เยี่ยมบ้าน</th>
                  <th className="py-3 px-4 text-center">SDQ</th>
                  <th className="py-3 px-4">ผู้ปกครอง / เบอร์ติดต่อ</th>
                  <th className="py-3 px-4 text-center">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-400">
                      ไม่พบข้อมูลนักเรียนที่ตรงกับเงื่อนไขค้นหา
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((std) => (
                    <tr key={std.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-500">{std.seatNumber}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <StudentAvatar 
                            gender={std.gender} 
                            prefix={std.prefix} 
                            seed={std.seatNumber || std.id} 
                            size="sm"
                          />
                          <div>
                            <div 
                              onClick={() => setActiveStudentForModal(std)}
                              className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer flex flex-wrap items-center gap-1.5"
                            >
                              <span>{std.prefix}{std.firstName} {std.lastName}</span>
                              {std.hasDisability && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                                  <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                                  {std.disabilityType}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              รหัส: {std.studentCode} • ปชช: {std.citizenId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-800">{std.classroom}</div>
                        <div className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]" title={std.advisorName}>
                          {std.advisorName}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-slate-800">{std.gpax.toFixed(2)}</td>
                      
                      <td className="py-3 px-4 text-center">
                        {getRiskBadge(std.currentRiskLevel)}
                      </td>

                      <td className="py-3 px-4 text-center">
                        {std.homeVisitCompleted ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                            เยี่ยมแล้ว
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">ยังไม่เยี่ยม</span>
                        )}
                      </td>

                      <td className="py-3 px-4 text-center">
                        {std.sdqCompleted ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                            ประเมินแล้ว
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">ยังไม่ประเมิน</span>
                        )}
                      </td>

                      <td className="py-3 px-4">
                        <div className="text-slate-800 font-medium">{std.parentName}</div>
                        <a href={`tel:${std.parentPhone}`} className="text-blue-600 text-[11px] hover:underline flex items-center gap-1">
                          <Phone className="w-3 h-3" /> {std.parentPhone}
                        </a>
                      </td>

                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex items-center gap-1">
                          <button
                            onClick={() => setActiveStudentForModal(std)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="ดูประวัติ 360 องศา"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openReportModal('student_profile', std.id)}
                            className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="พิมพ์ระเบียนรายบุคคล"
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`ต้องการลบข้อมูลของ ${std.prefix}${std.firstName} ${std.lastName} หรือไม่?`)) {
                                deleteStudent(std.id);
                              }
                            }}
                            className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                            title="ลบนักเรียน"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStudents.map((std) => (
            <div 
              key={std.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <StudentAvatar 
                      gender={std.gender} 
                      prefix={std.prefix} 
                      seed={std.seatNumber || std.id} 
                      size="md"
                    />
                    <div>
                      <h4 
                        onClick={() => setActiveStudentForModal(std)}
                        className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-xs sm:text-sm leading-tight"
                      >
                        {std.prefix}{std.firstName} {std.lastName}
                      </h4>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        เลขที่ #{std.seatNumber} • รหัส: {std.studentCode}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-bold">
                    {std.classroom}
                  </span>
                </div>

                {std.hasDisability && (
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                      <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                      {std.disabilityType} {std.isMultipleDisabilities ? '(พิการซ้อน)' : ''}
                    </span>
                  </div>
                )}

                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">เกรดเฉลี่ย:</span>
                    <span className="font-bold text-slate-800">{std.gpax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">กลุ่มคัดกรอง:</span>
                    {getRiskBadge(std.currentRiskLevel)}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">การเยี่ยมบ้าน:</span>
                    <span className={std.homeVisitCompleted ? 'text-indigo-600 font-semibold' : 'text-slate-400'}>
                      {std.homeVisitCompleted ? '✓ เยี่ยมแล้ว' : 'ยังไม่เยี่ยม'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">การประเมิน SDQ:</span>
                    <span className={std.sdqCompleted ? 'text-purple-600 font-semibold' : 'text-slate-400'}>
                      {std.sdqCompleted ? '✓ ประเมินแล้ว' : 'ยังไม่ประเมิน'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-600 truncate" title={std.advisorName}>
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate font-medium">{std.advisorName}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-1">
                <button
                  onClick={() => setActiveStudentForModal(std)}
                  className="flex-1 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200 text-center"
                >
                  ดูประวัติ 360°
                </button>
                <button
                  onClick={() => openReportModal('student_profile', std.id)}
                  className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  title="พิมพ์ระเบียน"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
        </>
      )}

    </div>
  );
};
