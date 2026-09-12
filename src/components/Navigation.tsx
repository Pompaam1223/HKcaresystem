import React from 'react';
import { 
  BarChart3, 
  Users, 
  Filter, 
  Home, 
  UserCheck, 
  Smile, 
  ArrowRightLeft, 
  ClipboardList 
} from 'lucide-react';
import { useStudentCare } from '../context/StudentCareContext';
import { ActiveTab } from '../types';

export const Navigation: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    students, 
    homeVisits, 
    referrals 
  } = useStudentCare();

  const problemCount = students.filter(s => s.currentRiskLevel === 'problem').length;
  const pendingVisitsCount = students.filter(s => !s.homeVisitCompleted).length;
  const activeReferralsCount = referrals.filter(r => r.currentStatus === 'pending' || r.currentStatus === 'in_progress').length;

  const navItems: {
    id: ActiveTab;
    label: string;
    subLabel: string;
    icon: React.ElementType;
    badge?: number;
    badgeColor?: string;
  }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard ผู้บริหาร',
      subLabel: 'ภาพรวม & สถิติ',
      icon: BarChart3,
    },
    {
      id: 'directory',
      label: 'ฐานข้อมูลนักเรียน',
      subLabel: 'ทะเบียนประวัติ',
      icon: Users,
    },
    {
      id: 'screening',
      label: 'คัดกรองนักเรียน',
      subLabel: 'ปกติ / เสี่ยง / มีปัญหา',
      icon: Filter,
      badge: problemCount > 0 ? problemCount : undefined,
      badgeColor: 'bg-rose-500 text-white',
    },
    {
      id: 'homevisit',
      label: 'เยี่ยมบ้านนักเรียน',
      subLabel: 'GPS / ภาพถ่าย / แบบ บร.',
      icon: Home,
      badge: pendingVisitsCount > 0 ? pendingVisitsCount : undefined,
      badgeColor: 'bg-amber-500 text-white',
    },
    {
      id: 'analysis',
      label: 'วิเคราะห์รายบุคคล',
      subLabel: '5 ด้าน / สุขภาพ / พรสวรรค์',
      icon: UserCheck,
    },
    {
      id: 'sdq',
      label: 'ประเมิน SDQ / EQ',
      subLabel: '25 ข้อ 5 ด้านมาตรฐาน',
      icon: Smile,
    },
    {
      id: 'referral',
      label: 'ส่งต่อผู้เรียน',
      subLabel: 'ส่งต่อภายใน / ภายนอก',
      icon: ArrowRightLeft,
      badge: activeReferralsCount > 0 ? activeReferralsCount : undefined,
      badgeColor: 'bg-indigo-600 text-white',
    },
    {
      id: 'tracking',
      label: 'ติดตามช่วยเหลือ',
      subLabel: 'บันทึกปรึกษา & ซ่อมเสริม',
      icon: ClipboardList,
    },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-sky-100 sticky top-[73px] sm:top-[65px] z-20 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Horizontal scrollable tabs container */}
        <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm rounded-2xl whitespace-nowrap transition-all duration-200 flex-shrink-0 relative cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold shadow-[0_4px_12px_rgba(37,99,235,0.3)] ring-2 ring-blue-300/50 scale-[1.02]'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-sky-50/80 font-semibold border border-transparent hover:border-sky-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <div className="flex flex-col text-left">
                  <span className="leading-tight">{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-black leading-tight border border-white/50 shadow-2xs ${item.badgeColor || 'bg-slate-200 text-slate-700'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
