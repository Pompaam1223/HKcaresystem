import React, { useState } from 'react';
import chibiBoyImage from '../assets/images/chibi_boy_student_1788747800469.jpg';
import chibiGirlImage from '../assets/images/chibi_girl_student_1788747812581.jpg';
import chibiTeacherImage from '../assets/images/chibi_teacher_guide_1788747825131.jpg';
import chibiMascotImage from '../assets/images/chibi_school_mascot_1788747839639.jpg';

export { chibiBoyImage, chibiGirlImage, chibiTeacherImage, chibiMascotImage };

export interface StudentAvatarProps {
  gender?: 'male' | 'female' | string;
  prefix?: string;
  seed?: string | number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  className?: string;
  rounded?: 'full' | 'xl' | '2xl' | 'lg' | 'none';
  border?: boolean;
  alt?: string;
  use3D?: boolean;
}

// Helper to determine gender from gender field or Thai prefix
export function resolveStudentGender(gender?: string, prefix?: string): 'male' | 'female' {
  if (gender === 'female') return 'female';
  if (gender === 'male') return 'male';

  const pref = (prefix || '').trim();
  if (pref.includes('หญิง') || pref.includes('นางสาว') || pref.includes('ด.ญ.') || pref.includes('น.ส.')) {
    return 'female';
  }
  return 'male';
}

// Helper to get a stable numerical variant index (0-3) based on a string or number seed
export function getAvatarVariantIndex(seed?: string | number): number {
  if (typeof seed === 'number') {
    return Math.abs(seed) % 4;
  }
  if (typeof seed === 'string' && seed.length > 0) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % 4;
  }
  return 0;
}

// SVG Vector Boy Cartoon Component
export const CartoonBoySvg: React.FC<{ variant?: number; className?: string }> = ({ 
  variant = 0,
  className = 'w-full h-full'
}) => {
  const v = variant % 4;
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={`boyBg-${v}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id={`boyShirt-${v}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <rect width="100" height="100" rx="50" fill={`url(#boyBg-${v})`} />

      {/* Clothes / Thai School Boy Uniform */}
      <path 
        d="M22 100 C22 84 32 76 50 76 C68 76 78 84 78 100 Z" 
        fill={`url(#boyShirt-${v})`} 
        stroke="#CBD5E1" 
        strokeWidth="1.5"
      />
      {/* Student Collar */}
      <path d="M42 76 L50 86 L36 83 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <path d="M58 76 L50 86 L64 83 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      {/* Small blue/khaki school badge / pocket line */}
      <rect x="30" y="87" width="8" height="6" rx="1.5" fill="#3B82F6" opacity="0.85" />
      <line x1="50" y1="87" x2="50" y2="100" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Neck */}
      <rect x="43" y="68" width="14" height="12" rx="3" fill="#FBCFB0" />

      {/* Ears */}
      <circle cx="28" cy="52" r="5.5" fill="#FBCFB0" />
      <circle cx="28" cy="52" r="3" fill="#F6B894" />
      <circle cx="72" cy="52" r="5.5" fill="#FBCFB0" />
      <circle cx="72" cy="52" r="3" fill="#F6B894" />

      {/* Face */}
      <ellipse cx="50" cy="51" rx="22" ry="23" fill="#FDDEC2" />

      {/* Rosy Cheeks */}
      <circle cx="36" cy="57" r="3.5" fill="#FCA5A5" opacity="0.45" />
      <circle cx="64" cy="57" r="3.5" fill="#FCA5A5" opacity="0.45" />

      {/* Eyes */}
      <ellipse cx="39" cy="50" rx="3" ry="3.5" fill="#1E293B" />
      <circle cx="40" cy="48.5" r="1.2" fill="#FFFFFF" />

      <ellipse cx="61" cy="50" rx="3" ry="3.5" fill="#1E293B" />
      <circle cx="62" cy="48.5" r="1.2" fill="#FFFFFF" />

      {/* Eyebrows */}
      <path d="M35 44 Q39 42 43 43.5" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M65 44 Q61 42 57 43.5" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />

      {/* Nose */}
      <path d="M50 51 Q51 53.5 49 54" stroke="#E29D7A" strokeWidth="1.2" strokeLinecap="round" />

      {/* Smile */}
      {v === 2 ? (
        // joyful open smile
        <path d="M44 59 Q50 67 56 59 Z" fill="#E11D48" stroke="#BE123C" strokeWidth="0.8" />
      ) : (
        // friendly closed smile
        <path d="M44 60 Q50 65 56 60" stroke="#E11D48" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      )}

      {/* Glasses (Variant 1) */}
      {v === 1 && (
        <g stroke="#0284C7" strokeWidth="1.6" fill="none">
          <circle cx="39" cy="50" r="7.5" fill="#FFFFFF" fillOpacity="0.2" />
          <circle cx="61" cy="50" r="7.5" fill="#FFFFFF" fillOpacity="0.2" />
          <path d="M46.5 50 L53.5 50" />
          <path d="M31.5 49 L28 48" />
          <path d="M68.5 49 L72 48" />
        </g>
      )}

      {/* Hair */}
      {v === 2 ? (
        // Sporty slight spiky bangs
        <path 
          d="M27 48 C25 32 35 24 50 24 C65 24 75 32 73 48 C72 45 68 40 64 42 C60 38 56 36 50 37 C44 36 40 38 36 42 C32 40 28 45 27 48 Z" 
          fill="#1E293B" 
        />
      ) : v === 3 ? (
        // Side parted neat hair
        <path 
          d="M26 49 C25 33 34 23 50 23 C66 23 74 33 74 49 C72 42 66 38 60 37 C54 36 42 37 32 42 C28 44 27 47 26 49 Z" 
          fill="#1E293B" 
        />
      ) : (
        // Classic neat school haircut
        <path 
          d="M26 48 C25 32 35 24 50 24 C65 24 75 32 74 48 C72 43 67 39 60 39 C55 39 52 41 50 41 C48 41 45 39 40 39 C33 39 28 43 26 48 Z" 
          fill="#1E293B" 
        />
      )}
    </svg>
  );
};

// SVG Vector Girl Cartoon Component
export const CartoonGirlSvg: React.FC<{ variant?: number; className?: string }> = ({ 
  variant = 0,
  className = 'w-full h-full'
}) => {
  const v = variant % 4;
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={`girlBg-${v}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCE7F3" />
          <stop offset="100%" stopColor="#FBCFE8" />
        </linearGradient>
        <linearGradient id={`girlBlouse-${v}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <rect width="100" height="100" rx="50" fill={`url(#girlBg-${v})`} />

      {/* Back Hair for Long/Bob hair styles */}
      <path 
        d="M22 55 C20 74 30 78 33 78 L67 78 C70 78 80 74 78 55 C77 34 66 23 50 23 C34 23 23 34 22 55 Z" 
        fill="#1E293B" 
      />

      {/* Clothes / Thai School Girl Blouse & Sailor Collar */}
      <path 
        d="M24 100 C24 85 33 77 50 77 C67 77 76 85 76 100 Z" 
        fill={`url(#girlBlouse-${v})`} 
        stroke="#E2E8F0" 
        strokeWidth="1.5"
      />
      {/* Sailor Collar / Neck Tie */}
      <path d="M40 77 L50 90 L34 85 Z" fill="#2563EB" />
      <path d="M60 77 L50 90 L66 85 Z" fill="#2563EB" />
      <circle cx="50" cy="85" r="3" fill="#DBEAFE" />

      {/* Neck */}
      <rect x="43" y="69" width="14" height="11" rx="3" fill="#FEDBC2" />

      {/* Ears */}
      <circle cx="28" cy="54" r="5" fill="#FEDBC2" />
      <circle cx="72" cy="54" r="5" fill="#FEDBC2" />

      {/* Face */}
      <ellipse cx="50" cy="52" rx="21" ry="22" fill="#FEE5D4" />

      {/* Soft Rosy Cheeks */}
      <circle cx="36" cy="58" r="4" fill="#FB7185" opacity="0.45" />
      <circle cx="64" cy="58" r="4" fill="#FB7185" opacity="0.45" />

      {/* Expressive Cartoon Eyes with eyelashes */}
      <g>
        <ellipse cx="39" cy="51" rx="3.2" ry="3.8" fill="#1E293B" />
        <circle cx="40" cy="49.5" r="1.3" fill="#FFFFFF" />
        <circle cx="38" cy="53" r="0.6" fill="#FFFFFF" />
        {/* upper eyelash */}
        <path d="M35.5 48.5 Q39 46.5 42.5 48" stroke="#0F172A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>

      <g>
        <ellipse cx="61" cy="51" rx="3.2" ry="3.8" fill="#1E293B" />
        <circle cx="62" cy="49.5" r="1.3" fill="#FFFFFF" />
        <circle cx="60" cy="53" r="0.6" fill="#FFFFFF" />
        {/* upper eyelash */}
        <path d="M57.5 48 Q61 46.5 64.5 48.5" stroke="#0F172A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>

      {/* Gentle Eyebrows */}
      <path d="M35 44.5 Q39 43 43 44.5" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M65 44.5 Q61 43 57 44.5" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />

      {/* Sweet Smile */}
      <path d="M45 61 Q50 66 55 61" stroke="#E11D48" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Glasses (Variant 2) */}
      {v === 2 && (
        <g stroke="#EC4899" strokeWidth="1.5" fill="none">
          <circle cx="39" cy="51" r="7.5" fill="#FFFFFF" fillOpacity="0.2" />
          <circle cx="61" cy="51" r="7.5" fill="#FFFFFF" fillOpacity="0.2" />
          <path d="M46.5 51 L53.5 51" />
          <path d="M31.5 50 L28 49" />
          <path d="M68.5 50 L72 49" />
        </g>
      )}

      {/* Front Hair Bangs */}
      <path 
        d="M26 46 C25 31 34 23 50 23 C66 23 75 31 74 46 C71 39 65 37 57 38 C52 39 48 39 43 38 C35 37 29 39 26 46 Z" 
        fill="#1E293B" 
      />

      {/* Hair Ribbon / Clip (Variant 1 & 3) */}
      {v === 1 ? (
        // Cute hair bow on top left
        <g transform="translate(24, 25)">
          <polygon points="0,0 8,4 0,8" fill="#EC4899" />
          <polygon points="16,0 8,4 16,8" fill="#EC4899" />
          <circle cx="8" cy="4" r="2.5" fill="#F472B6" />
        </g>
      ) : v === 3 ? (
        // Cute hair clip on side
        <rect x="29" y="36" width="9" height="3" rx="1.5" fill="#3B82F6" transform="rotate(-15 29 36)" />
      ) : null}
    </svg>
  );
};

// Generates an encoded SVG Data URL for situations requiring an <img> tag (e.g. print/report)
export function getStudentCartoonAvatarDataUrl(
  gender?: string, 
  prefix?: string, 
  seed?: string | number
): string {
  const resolved = resolveStudentGender(gender, prefix);
  const v = getAvatarVariantIndex(seed);
  
  // Base SVG markup string
  const svgString = resolved === 'female' 
    ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FCE7F3"/><stop offset="100%" stop-color="#FBCFE8"/></linearGradient></defs><rect width="100" height="100" rx="50" fill="url(#g)"/><path d="M22 55 C20 74 30 78 33 78 L67 78 C70 78 80 74 78 55 C77 34 66 23 50 23 C34 23 23 34 22 55 Z" fill="#1E293B"/><path d="M24 100 C24 85 33 77 50 77 C67 77 76 85 76 100 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/><path d="M40 77 L50 90 L34 85 Z" fill="#2563EB"/><path d="M60 77 L50 90 L66 85 Z" fill="#2563EB"/><circle cx="50" cy="85" r="3" fill="#DBEAFE"/><rect x="43" y="69" width="14" height="11" rx="3" fill="#FEDBC2"/><circle cx="28" cy="54" r="5" fill="#FEDBC2"/><circle cx="72" cy="54" r="5" fill="#FEDBC2"/><ellipse cx="50" cy="52" rx="21" ry="22" fill="#FEE5D4"/><circle cx="36" cy="58" r="4" fill="#FB7185" opacity="0.45"/><circle cx="64" cy="58" r="4" fill="#FB7185" opacity="0.45"/><ellipse cx="39" cy="51" rx="3.2" ry="3.8" fill="#1E293B"/><circle cx="40" cy="49.5" r="1.3" fill="#FFFFFF"/><ellipse cx="61" cy="51" rx="3.2" ry="3.8" fill="#1E293B"/><circle cx="62" cy="49.5" r="1.3" fill="#FFFFFF"/><path d="M35 44.5 Q39 43 43 44.5" stroke="#334155" stroke-width="1.4" stroke-linecap="round"/><path d="M65 44.5 Q61 43 57 44.5" stroke="#334155" stroke-width="1.4" stroke-linecap="round"/><path d="M45 61 Q50 66 55 61" stroke="#E11D48" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M26 46 C25 31 34 23 50 23 C66 23 75 31 74 46 C71 39 65 37 57 38 C52 39 48 39 43 38 C35 37 29 39 26 46 Z" fill="#1E293B"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient></defs><rect width="100" height="100" rx="50" fill="url(#b)"/><path d="M22 100 C22 84 32 76 50 76 C68 76 78 84 78 100 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/><path d="M42 76 L50 86 L36 83 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/><path d="M58 76 L50 86 L64 83 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/><rect x="30" y="87" width="8" height="6" rx="1.5" fill="#3B82F6" opacity="0.85"/><rect x="43" y="68" width="14" height="12" rx="3" fill="#FBCFB0"/><circle cx="28" cy="52" r="5.5" fill="#FBCFB0"/><circle cx="72" cy="52" r="5.5" fill="#FBCFB0"/><ellipse cx="50" cy="51" rx="22" ry="23" fill="#FDDEC2"/><circle cx="36" cy="57" r="3.5" fill="#FCA5A5" opacity="0.45"/><circle cx="64" cy="57" r="3.5" fill="#FCA5A5" opacity="0.45"/><ellipse cx="39" cy="50" rx="3" ry="3.5" fill="#1E293B"/><circle cx="40" cy="48.5" r="1.2" fill="#FFFFFF"/><ellipse cx="61" cy="50" rx="3" ry="3.5" fill="#1E293B"/><circle cx="62" cy="48.5" r="1.2" fill="#FFFFFF"/><path d="M35 44 Q39 42 43 43.5" stroke="#334155" stroke-width="1.6" stroke-linecap="round"/><path d="M65 44 Q61 42 57 43.5" stroke="#334155" stroke-width="1.6" stroke-linecap="round"/><path d="M44 60 Q50 65 56 60" stroke="#E11D48" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M26 48 C25 32 35 24 50 24 C65 24 75 32 74 48 C72 43 67 39 60 39 C55 39 52 41 50 41 C48 41 45 39 40 39 C33 39 28 43 26 48 Z" fill="#1E293B"/></svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}

// Size dictionary for tailwind sizing
const SIZE_MAP: Record<string, string> = {
  xs: 'w-7 h-7 min-w-[28px]',
  sm: 'w-8 h-8 min-w-[32px]',
  md: 'w-10 h-10 min-w-[40px]',
  lg: 'w-12 h-12 min-w-[48px]',
  xl: 'w-16 h-16 min-w-[64px]',
  '2xl': 'w-20 h-20 min-w-[80px]',
};

// Main StudentAvatar Component
export const StudentAvatar: React.FC<StudentAvatarProps> = ({
  gender,
  prefix,
  seed,
  size = 'md',
  className = '',
  rounded = 'full',
  border = true,
  alt = 'รูปโปรไฟล์นักเรียน',
  use3D = true,
}) => {
  const [imgError, setImgError] = useState(false);
  const resolvedGender = resolveStudentGender(gender, prefix);
  const variantIndex = getAvatarVariantIndex(seed);

  const sizeClass = typeof size === 'number' ? '' : (SIZE_MAP[size] || SIZE_MAP.md);
  const roundedClass = rounded === 'full' 
    ? 'rounded-full' 
    : rounded === 'xl' 
      ? 'rounded-xl' 
      : rounded === '2xl' 
        ? 'rounded-2xl' 
        : rounded === 'lg' 
          ? 'rounded-lg' 
          : 'rounded-none';

  const borderClass = border 
    ? resolvedGender === 'female' 
      ? 'border-2 border-pink-200/90 shadow-[0_4px_12px_rgba(244,114,182,0.25)] ring-1 ring-pink-100' 
      : 'border-2 border-sky-200/90 shadow-[0_4px_12px_rgba(56,189,248,0.25)] ring-1 ring-sky-100' 
    : '';

  const customStyle = typeof size === 'number' ? { width: size, height: size } : undefined;
  const imageSource = resolvedGender === 'female' ? chibiGirlImage : chibiBoyImage;

  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden select-none bg-slate-100 relative group transition-transform duration-200 hover:scale-105 ${sizeClass} ${roundedClass} ${borderClass} ${className}`}
      style={customStyle}
      title={alt}
      aria-label={alt}
    >
      {use3D && !imgError ? (
        <img 
          src={imageSource} 
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center"
        />
      ) : resolvedGender === 'female' ? (
        <CartoonGirlSvg variant={variantIndex} />
      ) : (
        <CartoonBoySvg variant={variantIndex} />
      )}
    </div>
  );
};

// Teacher Avatar
export const TeacherAvatar3D: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  className?: string;
  rounded?: 'full' | 'xl' | '2xl' | 'lg';
  alt?: string;
}> = ({
  size = 'md',
  className = '',
  rounded = 'xl',
  alt = 'ครูที่ปรึกษา'
}) => {
  const sizeClass = typeof size === 'number' ? '' : (SIZE_MAP[size] || SIZE_MAP.md);
  const roundedClass = rounded === 'full' 
    ? 'rounded-full' 
    : rounded === 'xl' 
      ? 'rounded-xl' 
      : rounded === '2xl' 
        ? 'rounded-2xl' 
        : 'rounded-lg';

  const customStyle = typeof size === 'number' ? { width: size, height: size } : undefined;

  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden select-none bg-emerald-50 border-2 border-emerald-300 shadow-[0_4px_12px_rgba(16,185,129,0.2)] ring-1 ring-emerald-100 ${sizeClass} ${roundedClass} ${className}`}
      style={customStyle}
      title={alt}
    >
      <img 
        src={chibiTeacherImage} 
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

// School Mascot Avatar
export const SchoolMascotAvatar3D: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  className?: string;
  rounded?: 'full' | 'xl' | '2xl' | 'lg';
  alt?: string;
}> = ({
  size = 'md',
  className = '',
  rounded = 'xl',
  alt = 'มาสคอตน้องแคร์ใจดี'
}) => {
  const sizeClass = typeof size === 'number' ? '' : (SIZE_MAP[size] || SIZE_MAP.md);
  const roundedClass = rounded === 'full' 
    ? 'rounded-full' 
    : rounded === 'xl' 
      ? 'rounded-xl' 
      : rounded === '2xl' 
        ? 'rounded-2xl' 
        : 'rounded-lg';

  const customStyle = typeof size === 'number' ? { width: size, height: size } : undefined;

  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden select-none bg-amber-50 border-2 border-amber-300 shadow-[0_4px_12px_rgba(245,158,11,0.2)] ring-1 ring-amber-100 ${sizeClass} ${roundedClass} ${className}`}
      style={customStyle}
      title={alt}
    >
      <img 
        src={chibiMascotImage} 
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

