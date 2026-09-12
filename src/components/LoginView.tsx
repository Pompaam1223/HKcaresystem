import React, { useState } from 'react';
import { 
  GraduationCap, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  LogIn, 
  ShieldCheck, 
  AlertCircle, 
  School,
  CheckCircle2,
  KeyRound,
  Sparkles,
  Sun,
  Heart,
  ExternalLink,
  Users,
  Copy,
  Check,
  X
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { HOMEROOM_TEACHERS } from '../data/teachersData';
import chibiCampusBanner from '../assets/images/chibi_school_campus_1788747785010.jpg';

export const LoginView: React.FC = () => {
  const { login } = useStudentCare();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSelectTeacher = (teacherUsername: string) => {
    setUsername(teacherUsername);
    setPassword(''); // ห้ามกรอก password อัตโนมัติเพื่อความปลอดภัย
    setErrorMessage(null);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!username.trim()) {
      setErrorMessage('กรุณาระบุชื่อผู้ใช้งาน');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('กรุณาระบุรหัสผ่าน');
      return;
    }

    setIsLoading(true);
    
    // Slight smooth delay for natural feedback
    setTimeout(() => {
      const result = login(username, password);
      setIsLoading(false);

      if (!result.success && result.error) {
        setErrorMessage(result.error);
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden font-sans">
      
      {/* Background School Campus Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={chibiCampusBanner} 
          alt="โรงเรียนบ้านห้วยไคร้" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter blur-xs brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-blue-950/40" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10 space-y-5">
        
        {/* Brand & Header */}
        <div className="text-center space-y-2">
          
          {/* Official Emblem Badge */}
          <div className="inline-flex items-center justify-center mb-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.4)] border border-white/30 ring-4 ring-white/10">
              <GraduationCap className="w-8 h-8 text-amber-300" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
            HUAYKRAI CARE SYSTEM
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-sky-200 drop-shadow-xs">
            ระบบดูแลช่วยเหลือนักเรียน โรงเรียนบ้านห้วยไคร้
          </p>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-xs">
            <School className="w-3.5 h-3.5 text-amber-300" />
            <span>สพป.สุโขทัย เขต 2 • ปีการศึกษา 2568</span>
          </div>
        </div>

        {/* Login Card with 3D tactile styling */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-2 border-white space-y-5">
          
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-blue-600" />
                <span>เข้าสู่ระบบ (Sign In)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                กรอกข้อมูลบัญชีเพื่อเข้าสู่ระบบงานสารสนเทศ
              </p>
            </div>

            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
          </div>

          {/* Error Message Alert */}
          {errorMessage && (
            <div 
              id="login-error-alert"
              className="bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-3 text-xs flex items-start gap-2 animate-in fade-in duration-200"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">เข้าสู่ระบบไม่สำเร็จ:</span>
                <div className="mt-0.5">{errorMessage}</div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Quick Teacher Account Selector */}
            <div className="space-y-1.5 p-3 bg-blue-50/70 border border-blue-100 rounded-2xl">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="select-teacher-quick"
                  className="block text-xs font-bold text-blue-900 flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>เลือกคุณครูประจำชั้น (ระบุ Username)</span>
                </label>
                <button
                  type="button"
                  id="btn-open-credentials-modal"
                  onClick={() => setShowAccountsModal(true)}
                  className="text-[11px] text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer bg-white px-2 py-0.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <span>ดูตาราง 15 บัญชี</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <select
                id="select-teacher-quick"
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val) return;
                  if (val === 'admin') {
                    handleSelectTeacher('640242');
                  } else {
                    const teacher = HOMEROOM_TEACHERS.find(t => t.id === val);
                    if (teacher && teacher.username) {
                      handleSelectTeacher(teacher.username);
                    }
                  }
                }}
                className="w-full px-3 py-2 bg-white border border-blue-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium cursor-pointer"
              >
                <option value="">-- คลิกเลือกชื่อคุณครูเพื่อระบุ Username --</option>
                <optgroup label="ผู้ดูแลระบบ (Admin)">
                  <option value="admin">นางสาวอวยพร วิจักษณ์ภาณุสิน (ผู้ดูแลระบบ) • Username: 640242</option>
                </optgroup>
                <optgroup label="ระดับปฐมวัย (อนุบาล)">
                  <option value="tch-01">นางสาวปรียาภรณ์ พุฒเนียม (ชั้น อ.2-3) • Username: 640242@0</option>
                </optgroup>
                <optgroup label="ระดับประถมศึกษา (ป.1 - ป.6)">
                  <option value="tch-02">นางสาวลีลาวดี รอดแล้ว (ชั้น ป.1) • Username: 640242@2</option>
                  <option value="tch-03">นางสาวณัฐพัชร์ บุญเกตุ (ชั้น ป.2) • Username: 640242@3</option>
                  <option value="tch-04">นางสาวนราวดี ต๊ะแก้ว (ชั้น ป.3) • Username: 640242@4</option>
                  <option value="tch-05">นายรัชเวทย์ เกื้อกูล (ชั้น ป.3) • Username: 640242@5</option>
                  <option value="tch-06">นางกนกวรรณ คงคาลัย (ชั้น ป.4) • Username: 640242@6</option>
                  <option value="tch-07">นายฐานิต นาสา (ชั้น ป.4) • Username: 640242@7</option>
                  <option value="tch-08">นางมาลัย สกุลงาม (ชั้น ป.5) • Username: 640242@8</option>
                  <option value="tch-09">นางสาวนารินทร์ เกิดผล (ชั้น ป.6) • Username: 640242@9</option>
                </optgroup>
                <optgroup label="ระดับมัธยมศึกษาตอนต้น (ม.1 - ม.3)">
                  <option value="tch-11">นางสาวอวยพร วิจักษณ์ภาณุสิน (ชั้น ม.1 / ผู้ดูแลระบบ) • Username: 640242</option>
                  <option value="tch-10">นางสาวฐิติการัตน์ ยงญาติ (ชั้น ม.1) • Username: 640242@10</option>
                  <option value="tch-12">นางพรทิพย์ อรัญสรรค์ (ชั้น ม.2) • Username: 640242@11</option>
                  <option value="tch-13">นางวิมล อุปถัมภ์ (ชั้น ม.2) • Username: 640242@14</option>
                  <option value="tch-14">นางสาวพรนิภา ชูสุวรรณ (ชั้น ม.3) • Username: 640242@12</option>
                  <option value="tch-15">นายกิตติวิสุทธิ์ ศรีชัยตัน (ชั้น ม.3) • Username: 640242@13</option>
                </optgroup>
              </select>
            </div>
            
            {/* Username */}
            <div className="space-y-1.5">
              <label 
                htmlFor="input-login-username"
                className="block text-xs font-bold text-slate-700"
              >
                ชื่อผู้ใช้งาน (Username)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="input-login-username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="เช่น 640242@1"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium font-mono"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="input-login-password"
                  className="block text-xs font-bold text-slate-700"
                >
                  รหัสผ่าน (Password)
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="input-login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="กรอกรหัสผ่าน"
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                />
                <button
                  type="button"
                  id="btn-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button with 3D tactile press */}
            <button
              type="submit"
              id="btn-submit-login"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:translate-y-0.5 text-white font-extrabold text-sm rounded-2xl shadow-[0_4px_0_#1e3a8a] hover:shadow-[0_2px_0_#1e3a8a] flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>กำลังตรวจสอบ...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>เข้าสู่ระบบ (Sign In)</span>
                </>
              )}
            </button>
          </form>

          {/* System info / Feature highlights */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>คัดกรอง 5 ด้าน สพฐ.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>ประเมิน SDQ และเยี่ยมบ้าน</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>การศึกษาพิเศษ (IEP)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>รายงานทางการ (สพฐ.)</span>
            </div>
          </div>

        </div>

        {/* Security & PDPA footer */}
        <div className="text-center text-xs text-slate-300 space-y-1">
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>ระบบรักษาความปลอดภัยข้อมูลนักเรียนรายบุคคล (PDPA Compliant)</span>
          </div>
          <p className="text-[11px] text-slate-300 font-medium">
            กลุ่มบริหารงานกิจการนักเรียน • โรงเรียนบ้านห้วยไคร้ สพป.สุโขทัย เขต 2
          </p>
        </div>

      </div>

      {/* Teacher Accounts Modal */}
      {showAccountsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span>รายชื่อ Username ครูประจำชั้น</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800">
                      15 ท่าน
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    คลิก "เลือก Username" เพื่อนำชื่อผู้ใช้งานไปกรอกในหน้าเข้าสู่ระบบ
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAccountsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300/70 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                aria-label="ปิดหน้าต่าง"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Security Notice Banner */}
            <div className="px-6 py-2.5 bg-blue-50 border-b border-blue-100 flex items-center justify-between text-xs text-blue-900">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>เพื่อความปลอดภัยของระบบ กรุณากรอกรหัสผ่าน (Password) ด้วยตนเอง</span>
              </div>
              <span className="text-[11px] text-blue-700">สพป.สุโขทัย เขต 2</span>
            </div>

            {/* Modal List */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-2 flex-1 divide-y divide-slate-100">
              {HOMEROOM_TEACHERS.map((t, idx) => {
                const isSelected = username === t.username;
                const isKindergarten = t.classroomLabel.includes('อ.');
                const isPrimary = t.classroomLabel.includes('ป.');
                const badgeColor = isKindergarten
                  ? 'bg-amber-100 text-amber-800 border-amber-200'
                  : isPrimary
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                  : 'bg-purple-100 text-purple-800 border-purple-200';

                return (
                  <div 
                    key={t.id}
                    className={`pt-2.5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl transition-all ${
                      isSelected ? 'bg-blue-50/80 border border-blue-200' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${badgeColor}`}>
                            {t.classroomLabel}
                          </span>
                          <span className="font-bold text-sm text-slate-900">
                            {t.fullName}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                          <span>ห้อง: {t.assignedClassrooms.join(', ')}</span>
                          <span className="font-mono text-blue-700 font-semibold">
                            Username: {t.username}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => handleCopy(t.username || '', `copy-${t.id}`)}
                        className="px-2.5 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        title="คัดลอก Username"
                      >
                        {copiedId === `copy-${t.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">คัดลอกแล้ว</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>คัดลอก</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (t.username) {
                            handleSelectTeacher(t.username);
                            setShowAccountsModal(false);
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
                      >
                        <User className="w-3.5 h-3.5" />
                        <span>เลือก Username</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Admin option */}
              <div className="pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-amber-50/50 border border-amber-200/60 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">
                    ★
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold border bg-amber-100 text-amber-800 border-amber-300">
                        ผู้ดูแลระบบ
                      </span>
                      <span className="font-bold text-sm text-slate-900">
                        นางสาวอวยพร วิจักษณ์ภาณุสิน
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">
                      Username: 640242
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    handleSelectTeacher('640242');
                    setShowAccountsModal(false);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer self-end sm:self-center flex items-center gap-1"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>เลือกแอดมิน</span>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                ระบบดูแลช่วยเหลือนักเรียน โรงเรียนบ้านห้วยไคร้
              </span>
              <button
                type="button"
                onClick={() => setShowAccountsModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                ปิด
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
