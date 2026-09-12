import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  PlusCircle, 
  Printer, 
  Download, 
  Upload, 
  RotateCcw, 
  SlidersHorizontal,
  ShieldCheck,
  UserCheck,
  LogOut,
  Sparkles,
  School
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { RiskLevel } from '../types';
import { TeacherAvatar3D, chibiMascotImage } from './StudentAvatar';

interface HeaderProps {
  onOpenNewStudent?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewStudent }) => {
  const { 
    selectedGrade, 
    setSelectedGrade, 
    selectedClassroom, 
    setSelectedClassroom,
    searchQuery, 
    setSearchQuery,
    selectedRiskFilter,
    setSelectedRiskFilter,
    openReportModal,
    exportDataJSON,
    importDataJSON,
    resetToDefaultData,
    students,
    currentUser,
    logout
  } = useStudentCare();

  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          importDataJSON(content);
        }
      };
      reader.readAsText(file);
    }
  };

  const classrooms: string[] = Array.from(new Set<string>(students.map(s => s.classroom))).sort();
  const grades: string[] = Array.from(new Set<string>(students.map(s => s.grade))).sort();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs no-print">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand & School info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-amber-300 bg-amber-100 shadow-[0_4px_12px_rgba(245,158,11,0.25)] shrink-0 flex items-center justify-center">
                <img 
                  src={chibiMascotImage} 
                  alt="HUAYKRAI CARE" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                    <span>HUAYKRAI CARE</span>
                    <span className="text-blue-600 font-extrabold text-xs sm:text-sm bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-200">
                      ระบบดูแลช่วยเหลือนักเรียน
                    </span>
                  </h1>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    สพฐ. มาตรฐาน
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <School className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-semibold text-slate-700">โรงเรียนบ้านห้วยไคร้ (สพป.สุโขทัย เขต 2)</span>
                  <span className="text-slate-300">•</span>
                  <span>ภาคเรียนที่ 1/2568</span>
                </p>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="flex items-center gap-1 md:hidden">
              <button
                id="btn-mobile-filter-toggle"
                onClick={() => setShowFilterDrawer(!showFilterDrawer)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 border border-slate-200"
                aria-label="ตัวกรอง"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Quick Search */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-global-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อ, รหัสนักเรียน, เลขที่..."
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  id="btn-clear-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Action: New Student */}
            <button
              id="btn-header-add-student"
              onClick={onOpenNewStudent}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg shadow-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">เพิ่มนักเรียน</span>
            </button>

            {/* Quick Action: Executive/General Report */}
            <button
              id="btn-header-open-report"
              onClick={() => openReportModal('executive')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-lg transition-colors border border-slate-200"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">พิมพ์รายงาน</span>
            </button>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                id="btn-header-settings-toggle"
                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs sm:text-sm"
                title="จัดการฐานข้อมูล"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>

              {showSettingsDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg p-2 text-xs z-50">
                  <div className="px-2 py-1.5 font-semibold text-slate-500 border-b border-slate-100 mb-1">
                    จัดการฐานข้อมูลกลาง
                  </div>
                  <button
                    id="btn-backup-export"
                    onClick={() => {
                      exportDataJSON();
                      setShowSettingsDropdown(false);
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-slate-50 rounded flex items-center gap-2 text-slate-700"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>สำรองข้อมูล (Export JSON)</span>
                  </button>

                  <label className="w-full text-left px-2 py-1.5 hover:bg-slate-50 rounded flex items-center gap-2 text-slate-700 cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-emerald-600" />
                    <span>นำเข้าข้อมูล (Import JSON)</span>
                    <input
                      id="input-import-json"
                      type="file"
                      accept=".json"
                      onChange={(e) => {
                        handleFileUpload(e);
                        setShowSettingsDropdown(false);
                      }}
                      className="hidden"
                    />
                  </label>

                  <button
                    id="btn-backup-reset"
                    onClick={() => {
                      if (confirm('ต้องการรีเซ็ตข้อมูลทั้งหมดกลับเป็นค่าตัวอย่างตั้งต้นหรือไม่?')) {
                        resetToDefaultData();
                        setShowSettingsDropdown(false);
                      }
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-amber-50 rounded flex items-center gap-2 text-amber-700 mt-1 border-t border-slate-100"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>คืนค่าข้อมูลตัวอย่าง (Reset)</span>
                  </button>

                  <button
                    id="btn-dropdown-logout"
                    onClick={() => {
                      setShowSettingsDropdown(false);
                      logout();
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-rose-50 rounded flex items-center gap-2 text-rose-600 mt-1 border-t border-slate-100"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>ออกจากระบบ (Logout)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Teacher Role Profile Pill & Logout */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <TeacherAvatar3D size="sm" rounded="xl" />
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-slate-800 leading-none flex items-center gap-1">
                  <span>{currentUser?.name || 'ครูสมพร เจริญจิต'}</span>
                  {currentUser?.username && (
                    <span className="text-[10px] text-blue-700 font-mono font-normal">({currentUser.username})</span>
                  )}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span>{currentUser?.role || 'ครูประจำชั้น / แอดมิน'}</span>
                </div>
              </div>
              <button
                id="btn-header-logout"
                onClick={logout}
                className="p-1.5 rounded-lg border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition-colors ml-1"
                title="ออกจากระบบ"
                aria-label="ออกจากระบบ"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Desktop Filter Bar (Level, Classroom, Risk Status) */}
        <div className={`pt-2.5 mt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs ${showFilterDrawer ? 'block' : 'hidden md:flex'}`}>
          <span className="font-medium text-slate-500">กรองข้อมูล:</span>

          {/* Grade filter */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400">ระดับชั้น:</span>
            <select
              id="select-filter-grade"
              value={selectedGrade}
              onChange={(e) => {
                setSelectedGrade(e.target.value);
                setSelectedClassroom('all');
              }}
              className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">ทุกระดับชั้น</option>
              {grades.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Classroom filter */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400">ห้องเรียน:</span>
            <select
              id="select-filter-classroom"
              value={selectedClassroom}
              onChange={(e) => setSelectedClassroom(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">ทุกห้องเรียน</option>
              {classrooms
                .filter(c => selectedGrade === 'all' || c.startsWith(selectedGrade))
                .map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
            </select>
          </div>

          {/* Risk Level filter */}
          <div className="flex items-center gap-1 ml-auto">
            <span className="text-slate-400">สถานะกลุ่ม:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                id="btn-filter-risk-all"
                onClick={() => setSelectedRiskFilter('all')}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${selectedRiskFilter === 'all' ? 'bg-white font-medium text-slate-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                ทั้งหมด
              </button>
              <button
                id="btn-filter-risk-normal"
                onClick={() => setSelectedRiskFilter('normal')}
                className={`px-2 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${selectedRiskFilter === 'normal' ? 'bg-emerald-600 font-medium text-white shadow-xs' : 'text-emerald-700 hover:bg-emerald-50'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ปกติ
              </button>
              <button
                id="btn-filter-risk-risk"
                onClick={() => setSelectedRiskFilter('risk')}
                className={`px-2 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${selectedRiskFilter === 'risk' ? 'bg-amber-500 font-medium text-white shadow-xs' : 'text-amber-700 hover:bg-amber-50'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                กลุ่มเสี่ยง
              </button>
              <button
                id="btn-filter-risk-problem"
                onClick={() => setSelectedRiskFilter('problem')}
                className={`px-2 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${selectedRiskFilter === 'problem' ? 'bg-rose-600 font-medium text-white shadow-xs' : 'text-rose-700 hover:bg-rose-50'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                กลุ่มมีปัญหา
              </button>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
