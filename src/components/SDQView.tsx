import React, { useState } from 'react';
import { 
  Smile, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  HelpCircle, 
  Printer, 
  Save, 
  User, 
  Activity,
  Award,
  Sparkles
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { OFFICIAL_SDQ_QUESTIONS } from '../data/mockData';
import { SDQEvaluation, SDQScoreSummary, RiskLevel } from '../types';

export const SDQView: React.FC = () => {
  const { 
    students, 
    sdqEvaluations, 
    saveSDQ, 
    selectedGrade, 
    selectedClassroom, 
    openReportModal,
    setActiveStudentForModal 
  } = useStudentCare();

  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');
  const [evaluatorType, setEvaluatorType] = useState<'teacher' | 'parent' | 'student'>('teacher');
  const [activeTab, setActiveTab] = useState<'sdq' | 'eq'>('sdq');

  // Filter students
  const filteredStudents = students.filter(s => {
    if (selectedGrade !== 'all' && s.grade !== selectedGrade) return false;
    if (selectedClassroom !== 'all' && s.classroom !== selectedClassroom) return false;
    return true;
  });

  const currentStudent = students.find(s => s.id === selectedStudentId);
  const existingSDQ = sdqEvaluations.find(s => s.studentId === selectedStudentId && s.evaluatorType === evaluatorType);

  // Initialize answers state (1-25)
  const [answers, setAnswers] = useState<{ [qId: number]: 0 | 1 | 2 }>(() => {
    const init: { [qId: number]: 0 | 1 | 2 } = {};
    OFFICIAL_SDQ_QUESTIONS.forEach(q => {
      init[q.id] = 0;
    });
    return init;
  });

  const [evaluatorName, setEvaluatorName] = useState<string>('ครูสมพร เจริญจิต');
  const [sdqNotes, setSdqNotes] = useState<string>('');

  // Handle student selection
  const handleSelectStudent = (stdId: string) => {
    setSelectedStudentId(stdId);
    const existing = sdqEvaluations.find(s => s.studentId === stdId && s.evaluatorType === evaluatorType);
    if (existing) {
      setSdqNotes(existing.notes || '');
      setEvaluatorName(existing.evaluatorName);
    }
  };

  const handleAnswerChange = (qId: number, val: 0 | 1 | 2) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: val
    }));
  };

  // Compute subscale and total difficulties score
  const calculateScores = (): SDQScoreSummary => {
    let emotional = 0;
    let conduct = 0;
    let hyperactivity = 0;
    let peer = 0;
    let prosocial = 0;

    OFFICIAL_SDQ_QUESTIONS.forEach(q => {
      const rawAns = answers[q.id] ?? 0;
      let score = rawAns;
      if (q.reverse) {
        // Reverse scoring: 0 -> 2, 1 -> 1, 2 -> 0
        score = (rawAns === 0 ? 2 : rawAns === 2 ? 0 : 1) as 0 | 1 | 2;
      }

      if (q.scale === 'emotional') emotional += score;
      else if (q.scale === 'conduct') conduct += score;
      else if (q.scale === 'hyperactivity') hyperactivity += score;
      else if (q.scale === 'peer') peer += score;
      else if (q.scale === 'prosocial') prosocial += score;
    });

    const totalDifficulties = emotional + conduct + hyperactivity + peer;

    let status: RiskLevel = 'normal';
    if (totalDifficulties >= 18) {
      status = 'problem';
    } else if (totalDifficulties >= 16) {
      status = 'risk';
    } else {
      status = 'normal';
    }

    return {
      emotionalScore: emotional,
      conductScore: conduct,
      hyperactivityScore: hyperactivity,
      peerScore: peer,
      prosocialScore: prosocial,
      totalDifficulties,
      status
    };
  };

  const currentScores = existingSDQ ? existingSDQ.scores : calculateScores();

  const handleSaveEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;

    const scores = calculateScores();
    saveSDQ({
      studentId: selectedStudentId,
      academicYear: '2568',
      evaluatedDate: new Date().toISOString().split('T')[0],
      evaluatorType,
      evaluatorName,
      scores,
      notes: sdqNotes || (scores.status === 'normal' ? 'ผลประเมินพฤติกรรมอยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดี' : 'ควรติดตามดูแลด้านที่ได้คะแนนความยากลำบากสูง')
    });
  };

  const fillQuickPreset = (preset: 'good' | 'risk' | 'problem') => {
    const newAns: { [qId: number]: 0 | 1 | 2 } = {};
    OFFICIAL_SDQ_QUESTIONS.forEach(q => {
      if (preset === 'good') {
        newAns[q.id] = q.scale === 'prosocial' ? 2 : (q.reverse ? 2 : 0);
      } else if (preset === 'risk') {
        newAns[q.id] = (q.scale === 'emotional' || q.scale === 'hyperactivity') ? 1 : 0;
      } else {
        newAns[q.id] = q.scale === 'prosocial' ? 0 : 2;
      }
    });
    setAnswers(newAns);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-100 text-purple-700">
              <Smile className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                ระบบประเมินพฤติกรรมและอารมณ์ (SDQ / EQ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                แบบประเมินจุดแข็งและจุดเปราะบาง (Strengths and Difficulties Questionnaire) มาตรฐานกรมสุขภาพจิต
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Main Switcher: SDQ vs EQ */}
          <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveTab('sdq')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'sdq' ? 'bg-white shadow-xs text-purple-700' : 'text-slate-600'}`}
            >
              แบบประเมิน SDQ 25 ข้อ
            </button>
            <button
              onClick={() => setActiveTab('eq')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'eq' ? 'bg-white shadow-xs text-purple-700' : 'text-slate-600'}`}
            >
              ความฉลาดทางอารมณ์ (EQ)
            </button>
          </div>

          <button
            id="btn-print-sdq-report"
            onClick={() => openReportModal('sdq', selectedStudentId)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>พิมพ์ผล SDQ รายบุคคล</span>
          </button>
        </div>
      </div>

      {activeTab === 'sdq' && (
        <div className="space-y-6">
          
          {/* Controls Bar: Student Picker & Evaluator Type */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Student Selector */}
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                เลือกนักเรียนที่ต้องการประเมิน:
              </label>
              <select
                id="select-sdq-student"
                value={selectedStudentId}
                onChange={(e) => handleSelectStudent(e.target.value)}
                className="w-full sm:w-80 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-purple-500"
              >
                {filteredStudents.map(std => (
                  <option key={std.id} value={std.id}>
                    {std.classroom} #{std.seatNumber}: {std.prefix}{std.firstName} {std.lastName} ({std.studentCode})
                  </option>
                ))}
              </select>
            </div>

            {/* Evaluator Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">ชุดแบบประเมินสำหรับ:</span>
              <div className="inline-flex rounded-xl border border-slate-200 p-1 bg-slate-50 text-xs">
                <button
                  type="button"
                  onClick={() => setEvaluatorType('teacher')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${evaluatorType === 'teacher' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  ครูประเมินนักเรียน
                </button>
                <button
                  type="button"
                  onClick={() => setEvaluatorType('student')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${evaluatorType === 'student' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  นักเรียนประเมินตนเอง
                </button>
                <button
                  type="button"
                  onClick={() => setEvaluatorType('parent')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${evaluatorType === 'parent' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  ผู้ปกครองประเมิน
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Scores Summary Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold text-lg text-purple-300">
                  {currentScores.totalDifficulties}
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">คะแนนรวมความยากลำบาก (Total Difficulties) เต็ม 40:</div>
                  <div className="text-base sm:text-lg font-bold flex items-center gap-2">
                    <span>{currentScores.totalDifficulties} คะแนน</span>
                    {currentScores.status === 'normal' && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        อยู่ในเกณฑ์ปกติ (0-15)
                      </span>
                    )}
                    {currentScores.status === 'risk' && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        อยู่ในกลุ่มเสี่ยง (16-17)
                      </span>
                    )}
                    {currentScores.status === 'problem' && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                        มีปัญหาพฤติกรรม/อารมณ์ (18-40)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Preset Buttons to ease teacher workload */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 hidden sm:inline">เทมเพลตด่วน:</span>
                <button
                  type="button"
                  onClick={() => fillQuickPreset('good')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-emerald-300 text-xs font-medium"
                >
                  ✓ ปกติทุกข้อ
                </button>
                <button
                  type="button"
                  onClick={() => fillQuickPreset('risk')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-amber-300 text-xs font-medium"
                >
                  ⚠ จำลองกลุ่มเสี่ยง
                </button>
                <button
                  type="button"
                  onClick={() => fillQuickPreset('problem')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-rose-300 text-xs font-medium"
                >
                  ✕ จำลองกลุ่มมีปัญหา
                </button>
              </div>
            </div>

            {/* 5 Subscale Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4 text-xs">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-slate-400">1. อารมณ์ (0-10)</div>
                <div className="text-lg font-bold mt-1">{currentScores.emotionalScore}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {currentScores.emotionalScore >= 5 ? '⚠️ เสี่ยง/มีปัญหา' : 'ปกติ'}
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-slate-400">2. ความประพฤติ (0-10)</div>
                <div className="text-lg font-bold mt-1">{currentScores.conductScore}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {currentScores.conductScore >= 4 ? '⚠️ เสี่ยง/มีปัญหา' : 'ปกติ'}
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-slate-400">3. อยู่ไม่นิ่ง (0-10)</div>
                <div className="text-lg font-bold mt-1">{currentScores.hyperactivityScore}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {currentScores.hyperactivityScore >= 6 ? '⚠️ เสี่ยง/มีปัญหา' : 'ปกติ'}
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-slate-400">4. ปัญหาเพื่อน (0-10)</div>
                <div className="text-lg font-bold mt-1">{currentScores.peerScore}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {currentScores.peerScore >= 4 ? '⚠️ เสี่ยง/มีปัญหา' : 'ปกติ'}
                </div>
              </div>

              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                <div className="text-emerald-300">5. สัมพันธภาพสังคม (0-10)</div>
                <div className="text-lg font-bold mt-1 text-emerald-200">{currentScores.prosocialScore}</div>
                <div className="text-[10px] text-emerald-300 mt-0.5">
                  {currentScores.prosocialScore >= 6 ? '🌟 จุดแข็งเด่นชัด' : 'ควรส่งเสริม'}
                </div>
              </div>
            </div>
          </div>

          {/* SDQ 25 Question Items Interactive Form */}
          <form onSubmit={handleSaveEvaluation} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">
                ข้อคำถามประเมินพฤติกรรม SDQ (25 ข้อ)
              </h3>
              <span className="text-xs text-slate-500">
                ประเมินจากพฤติกรรมในช่วง 6 เดือนที่ผ่านมา
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {OFFICIAL_SDQ_QUESTIONS.map((q) => {
                const currentVal = answers[q.id] ?? 0;

                return (
                  <div key={q.id} className="p-3 sm:p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="font-bold text-purple-700 min-w-[24px]">
                        ข้อ {q.id}.
                      </span>
                      <div>
                        <span className="text-slate-900 font-medium text-xs sm:text-sm">
                          {q.text}
                        </span>
                        {q.reverse && (
                          <span className="ml-2 text-[10px] text-slate-400">(ด้านบวก)</span>
                        )}
                      </div>
                    </div>

                    {/* 3 Choices */}
                    <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => handleAnswerChange(q.id, 0)}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          currentVal === 0 
                            ? 'bg-slate-800 text-white font-bold shadow-xs' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        ไม่จริง
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswerChange(q.id, 1)}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          currentVal === 1 
                            ? 'bg-purple-600 text-white font-bold shadow-xs' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        จริงบางครั้ง
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswerChange(q.id, 2)}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                          currentVal === 2 
                            ? 'bg-purple-800 text-white font-bold shadow-xs' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        จริงแน่นอน
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Notes & Submission */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    ชื่อผู้ประเมิน:
                  </label>
                  <input
                    type="text"
                    value={evaluatorName}
                    onChange={(e) => setEvaluatorName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    ข้อสังเกตเพิ่มเติม / ข้อแนะนำ:
                  </label>
                  <input
                    type="text"
                    value={sdqNotes}
                    onChange={(e) => setSdqNotes(e.target.value)}
                    placeholder="ระบุข้อสังเกตเพิ่มเติม..."
                    className="w-full bg-white border border-slate-200 rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  id="btn-save-sdq"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>บันทึกผลการประเมิน SDQ</span>
                </button>
              </div>
            </div>
          </form>

        </div>
      )}

      {/* VIEW: EQ ASSESSMENT (ความฉลาดทางอารมณ์ 3 ด้าน) */}
      {activeTab === 'eq' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              แบบประเมินความฉลาดทางอารมณ์ (Emotional Intelligence: EQ)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              ประเมินองค์ประกอบ 3 ด้านสำคัญ: &quot;ดี - เก่ง - สุข&quot; ตามเกณฑ์มาตรฐานกรมสุขภาพจิต กระทรวงสาธารณสุข
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* ด้านที่ 1: ดี */}
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-900 text-sm">1. ด้าน &quot;ดี&quot; (Good)</span>
                <span className="text-xs px-2 py-0.5 bg-blue-200 text-blue-800 rounded font-bold">คะแนน: 24/30</span>
              </div>
              <p className="text-xs text-slate-600">
                ความสามารถในการควบคุมอารมณ์และความต้องการของตนเอง มีความเห็นอกเห็นใจผู้อื่น และมีความรับผิดชอบ
              </p>
              <ul className="text-[11px] text-slate-500 list-disc list-inside space-y-1">
                <li>การควบคุมอารมณ์: อยู่ในเกณฑ์ปกติ</li>
                <li>การใส่ใจผู้อื่น: สูงกว่าเกณฑ์</li>
                <li>ความรับผิดชอบ: อยู่ในเกณฑ์ปกติ</li>
              </ul>
            </div>

            {/* ด้านที่ 2: เก่ง */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900 text-sm">2. ด้าน &quot;เก่ง&quot; (Smart)</span>
                <span className="text-xs px-2 py-0.5 bg-emerald-200 text-emerald-800 rounded font-bold">คะแนน: 22/30</span>
              </div>
              <p className="text-xs text-slate-600">
                การรู้จักตนเอง การสร้างแรงจูงใจ และความสามารถในการตัดสินใจแก้ไขปัญหาอย่างสร้างสรรค์
              </p>
              <ul className="text-[11px] text-slate-500 list-disc list-inside space-y-1">
                <li>การรู้จักตนเอง: อยู่ในเกณฑ์ปกติ</li>
                <li>การแก้ปัญหา: สูงกว่าเกณฑ์</li>
                <li>สัมพันธภาพ: ดีมาก</li>
              </ul>
            </div>

            {/* ด้านที่ 3: สุข */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 text-sm">3. ด้าน &quot;สุข&quot; (Happy)</span>
                <span className="text-xs px-2 py-0.5 bg-amber-200 text-amber-800 rounded font-bold">คะแนน: 25/30</span>
              </div>
              <p className="text-xs text-slate-600">
                ความภูมิใจในตนเอง ความพึงพอใจในชีวิต ความร่าเริงแจ่มใส และการมองโลกในแง่ดี
              </p>
              <ul className="text-[11px] text-slate-500 list-disc list-inside space-y-1">
                <li>ความภูมิใจในตน: ดี</li>
                <li>ความพึงพอใจในชีวิต: ดีมาก</li>
                <li>ความสงบทางใจ: อยู่ในเกณฑ์ปกติ</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-600">
              สรุปผล EQ รวม: <b>71 คะแนน (อยู่ในเกณฑ์ปกติ มีสุขภาวะทางอารมณ์ดี)</b>
            </span>
            <button
              onClick={() => openReportModal('sdq', selectedStudentId)}
              className="px-3 py-1.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              พิมพ์ใบสรุป EQ & SDQ
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
