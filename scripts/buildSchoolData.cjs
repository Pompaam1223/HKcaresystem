const fs = require('fs');
const path = require('path');

const tsvPath = path.join(__dirname, '../src/data/rawDMCData.tsv');
const cleanTsvPath = path.join(__dirname, '../src/data/cleanStudentRows.tsv');

const rawLines = fs.readFileSync(tsvPath, 'utf8').trim().split('\n');
const cleanLines = fs.existsSync(cleanTsvPath) ? fs.readFileSync(cleanTsvPath, 'utf8').trim().split('\n') : [];

const KNOWN_NICKNAMES = {
  'ณัฐณิชา': 'ณิชา',
  'ธีระภา': 'ภา',
  'วรายุส': 'ยุส',
  'ปัญญวัต': 'วัต',
  'ศิริวัฒน์': 'วัฒน์',
  'สุรศักดิ์': 'ศักดิ์',
  'เบญญาภา': 'เบญ',
  'ณิภัชชา': 'ภัชชา',
  'กมลกานต์': 'กานต์',
  'รินรดา': 'รดา',
  'พิมลรัตน์': 'รัตน์',
  'จีรนันท์': 'นันท์',
  'นภาพร': 'พร',
  'นภาพรรณ': 'พรรณ',
  'ปาริฉัตร': 'ฉัตร',
  'ขวัญจิรา': 'ขวัญ',
  'ภูมิเมศ': 'ภูมิ',
  'กิตติพงศ์': 'กิต',
  'ชุติเดช': 'เดช',
  'ฐิติพันธ์': 'ติ',
  'ณรงวิทย์': 'วิทย์',
  'ศรัณภัทร': 'ภัทร',
  'ศุภณัฐ': 'ณัฐ',
  'กมลรัตน์': 'มน',
  'เพ็ญพิชชา': 'เพ็ญ',
  'ฉัตรชนก': 'นก',
  'ฐิตาภรณ์': 'ต่าย',
  'จีราพัชร': 'พัชร',
  'นันตภรณ์': 'นัน',
  'พิมพ์ชนก': 'พิมพ์',
  'พีชญา': 'พีช',
  'อรุณวรรณ': 'วรรณ',
  'อรรถพล': 'อาร์ท',
  'ปัญญากร': 'กร',
  'เจษฎา': 'เจษ',
  'ณัฐวัจน์': 'นัท',
  'ธนาธิป': 'ธิป',
  'อดิศร': 'ศร',
  'อิทธิพัทธ์': 'พัทธ์',
  'ปราโมทย์': 'โมทย์',
  'ขณิตฐา': 'ฐา',
  'ขวัญเนตร': 'เนตร',
  'ปริศนา': 'นา',
  'ประนัดดา': 'ดา',
  'เนตรนภา': 'เนตร',
  'มัลลิกา': 'ลิกา',
  'อธิชา': 'ธิชา',
  'สิรวิชญ์': 'วิชญ์',
  'อนันตชัย': 'ชัย',
  'ศุรกิตติ์': 'กิต',
  'รัชชานนท์': 'นนท์',
  'ภีรภัทร': 'ภัทร',
  'ณัฐพงศ์': 'พงศ์',
  'สิทธิโชค': 'โชค',
  'อธิวัฒน์': 'วัฒน์',
  'จุลจักร': 'จักร',
  'จิราพร': 'พร',
  'วิภาวดี': 'วดี',
  'เมษา': 'เมย์',
  'กัญญณัช': 'ณัช',
  'สุพัตรา': 'แพรว',
  'อาฑิตยา': 'ออย',
  'ณัฐวรา': 'วรา',
  'ปาฏิหาริย์': 'มาร์ค',
  'วรพจน์': 'พจน์',
  'กีรติ': 'กอล์ฟ',
  'ธนชาติ': 'ชาติ',
  'ลักษณวัศ': 'วัศ',
  'วรวรรธน์': 'วรรธน์',
  'พงศ์พล': 'พล',
  'ภูตะวัน': 'ตะวัน',
  'ธนวัฒน์': 'วัฒน์',
  'กัมปนาท': 'กัม',
  'อรุโณทัย': 'ทัย',
  'รัชกร': 'กร',
  'กรรจนา': 'จนา',
  'ชุติกาญจน์': 'การ์ตูน',
  'ธัญญรัตน์': 'หญิง',
  'ณัฐชยา': 'นัท',
  'ณัฐพงค์': 'พงค์',
  'เตชิต': 'เต',
  'ธนภัทร': 'ภัทร',
  'ณัฐวัฒน์': 'วัฒน์',
  'ณัฐวัส': 'วัส',
  'ภูมิพัฒน์': 'ภูมิ',
  'ภูรินทร์': 'รินทร์',
  'อาทิติยา': 'ติยา',
  'ทิพสุดา': 'ทิพย์',
  'พัณณิตา': 'ณิชา',
  'วสันต์': 'สันต์',
  'พงศกร': 'กร',
  'ณัฐพร': 'พร',
  'วรรณิดา': 'ดา',
  'อดิศา': 'สา',
  'พิทยาภรณ์': 'ภรณ์',
  'วิชาดา': 'ดา',
  'อุกฤษรินทร์': 'รินทร์',
  'อารยา': 'ยา',
  'ธันญาภรณ์': 'ธัญญ่า',
  'ปภาวดี': 'วดี',
  'วิรพร': 'พร',
  'พิชชานันท์': 'นันท์',
  'ทิพย์รัตน์': 'รัตน์',
  'ชนสิพัชญ์': 'พัชญ์',
  'ชุดารัตน์': 'ดารัตน์',
  'เชาวฤทธิ์': 'เชาว์',
  'ไกรภพ': 'ภพ',
  'ยุทธนันท์': 'นันท์',
  'ธนดล': 'ดล',
  'จรรยมณฑ์': 'มณฑ์',
  'ปภาพร': 'พร',
  'กันย์ยารัตน์': 'กันย์',
  'มนรัตนา': 'รัตน์',
  'ดวงกมล': 'กมล',
  'อัญฑิมา': 'ติมา',
  'พุทธทิชา': 'ทิชา',
  'ทิพรดา': 'รดา',
  'รพิชัย': 'ชัย',
  'เอกณัฐ': 'ณัฐ',
  'จิรพงศ์': 'พงศ์',
  'ธนากร': 'กร',
  'กัลย์ณภัทร': 'ภัทร',
  'ชัชวาล': 'ชัช',
  'กฤติพงษ์': 'พงษ์',
  'ศักรินทร์': 'ศักดิ์',
  'อนุภัทร': 'ภัทร',
  'ปรีติ': 'ติ',
  'อมรฤทธิ์': 'อาร์ม',
  'นฤมล': 'มล',
  'แพรวนภา': 'แพรว',
  'กัญญาพัชร': 'พัช',
  'ศิรินทิพย์': 'ทิพย์',
  'วิชิตา': 'ตา',
  'เกศแก้ว': 'แก้ว',
  'บุษกร': 'บุษ',
  'อมรรัตน์': 'รัตน์'
};

function parseThaiDate(dateStr) {
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parseInt(parts[2], 10) - 543;
    return `${year}-${month}-${day}`;
  }
  return '2015-01-01';
}

const EXACT_RECORDS = {};

cleanLines.forEach((line) => {
  if (!line.trim()) return;
  const p = line.split('\t');
  const code = p[5];
  const grade = p[3];
  const room = p[4] || '1';
  const classroom = `${grade}/${room}`;
  const isFemale = (p[6] === 'ญ' || p[7].includes('หญิง') || p[7].includes('นาง'));
  const prefix = p[7];
  const firstName = p[8];
  const lastName = p[9];
  const birthDate = parseThaiDate(p[10]);
  const age = parseInt(p[11], 10) || 8;
  const weight = parseFloat(p[12]) || 20;
  const height = parseFloat(p[13]) || 110;
  const rawBlood = p[14] ? p[14].trim() : '-';
  const bloodType = ['A', 'B', 'AB', 'O'].includes(rawBlood) ? rawBlood : (isFemale ? 'B' : 'O');
  const postalCode = p[23] === 'สุโขทัย' ? ' 64130' : '';
  const housePart = (p[18] && p[18] !== '-') ? `บ้านเลขที่ ${p[18]} ` : '';
  const address = `${housePart}หมู่ ${p[19]}${p[20] && p[20] !== '-' ? ' ชุมชน/ถ.' + p[20] : ''} ต.${p[21]} อ.${p[22]} จ.${p[23]}${postalCode}`;
  const parentRel = p[27];
  let parentPrefix = 'นาง';
  if (parentRel === 'บิดา' || parentRel === 'ตา' || parentRel === 'ลุง' || parentRel === 'ปู่') {
    parentPrefix = 'นาย';
  } else if (parentRel === 'มารดา' && (p[24] === 'สาธิต' || p[24] === 'พุฒิพร')) {
    parentPrefix = 'นางสาว';
  }
  const parentCleanName = p[24] ? p[24].replace(/^[\u0E30-\u0E3A\u0E47-\u0E4E]+/, '').replace(/^(นาย|นางสาว|นาง)/, '') : '';
  const parentName = `${parentPrefix}${parentCleanName} ${p[25]}`;
  const parentPhone = `08${(code.charCodeAt(code.length - 1) % 9) + 1}-${String(p[18]).replace(/[^0-9]/g, '').padStart(3, '0').slice(-3)}-${code}`;
  const cleanFather = p[28] ? p[28].replace(/^[\u0E30-\u0E3A\u0E47-\u0E4E]+/, '').replace(/^(นาย)/, '') : '';
  const cleanMother = p[31] ? p[31].replace(/^[\u0E30-\u0E3A\u0E47-\u0E4E]+/, '').replace(/^(นางสาว|นาง)/, '') : '';
  const fatherName = cleanFather && cleanFather !== '-' ? `นาย${cleanFather} ${p[29]}` : '-';
  const motherName = cleanMother && cleanMother !== '-' ? `นาง${cleanMother} ${p[32]}` : '-';
  const isPoor = p[34] && p[34].includes('ยากจน');
  const nickname = KNOWN_NICKNAMES[firstName] || (isFemale ? 'ฟ้า' : 'บอส');

  EXACT_RECORDS[code] = {
    prefix,
    firstName,
    lastName,
    nickname,
    gender: isFemale ? 'female' : 'male',
    grade,
    classroom,
    birthDate,
    age,
    weight,
    height,
    bloodType,
    address,
    parentName,
    parentPhone,
    parentRelation: parentRel,
    parentOccupation: p[26],
    fatherName,
    motherName,
    isPoor
  };
});

console.log(`Loaded ${Object.keys(EXACT_RECORDS).length} exact student records.`);

const MALE_FIRST_NAMES = [
  "ปัญญาวัฒน์", "พัฒนเดช", "ศักดิ์ดา", "กิตติพงษ์", "วุฒิภัทร", "กิตติพันธ์", "ณรงค์ฤทธิ์", "กัณภัทร",
  "ณัฐพงศ์", "ถกลเกียรติ", "สัญญา", "กฤษฎา", "ณัฐภัทร", "ราชาธิป", "อดิศร", "อิทธิพัทธ์", "วัชรพงศ์",
  "รวิชญ์", "อนันตโชค", "กรกิตติ์", "พัชรดนัย", "ภัทรกร", "อิทธิโชค", "อภิวัฒน์", "เดชจักร", "ธีรภัทร",
  "ภูตะวัน", "ภานุวัฒน์", "ภูริทัต", "สัมฤทธิ์", "อุทัยวัน", "พีรพัฒน์", "เอกณัฐ", "พีรพล", "วรภัทร",
  "ทักษิณ", "อนุภัทร", "กิตติ", "ปฏิพงษ์", "สิทธิศักดิ์", "ธนกฤต", "ชนาธิป", "พงศธร", "ธนภัทร"
];

const FEMALE_FIRST_NAMES = [
  "ณัฐิชา", "กานดา", "รัชดาภรณ์", "จินดารัตน์", "ปรียานุช", "กรนันท์", "ภาพิมล", "ภาพรณ์", "ศศิฉัตร",
  "กัญญารัตน์", "ณัชชา", "กิตติภรณ์", "ภาพัชร", "วรรณิศา", "คุณากร", "ลลิตา", "กัญญาเนตร", "เนตรนภา",
  "อภิชญา", "พรชิตา", "สุดารัตน์", "จุติกาญจน์", "ณัฐธิดา", "อาทิตยา", "ทิพสุดา", "บัณฑิตา", "พรนิดา",
  "อิทธิภรณ์", "วิชาดา", "สุกัลยา", "วิชานันท์", "กัญญาพัชร", "วิจิตรา", "สุพรรษา", "ดวงใจ", "ชลธิชา",
  "พิมลวรรณ", "กมลชนก", "ธิดารัตน์", "ศุภิสรา", "วริศรา", "ปาริฉัตร", "มณีรัตน์", "อารียา"
];

const LAST_NAMES = [
  "เพลินศิลป์", "อินทร์คง", "เตือนสติ", "จันทา", "นานาพิน", "สินธุสถิตย์", "เรืองฤทธิ์", "โทนผุย",
  "สิงห์สาย", "คำลำ", "คงรอด", "จันทร์งาม", "ดอนไพรเทียน", "สังงิ้ว", "เรือนแพง", "พิพัฒน์สวัสดิ์",
  "เวียงบาง", "บุญเรือง", "สงวนศักดิ์", "ใจตรง", "ตากล้อง", "ป่าฝาก", "หลักบ้าน", "ดอนแก้ว", "แตงทอง",
  "ปลอดโปร่ง", "เดือนหงาย", "นาดอน", "ม่วงทอง", "ชำนาญการ", "พึ่งกุศล", "สะกอบ", "สีทอง", "วรรณรัตน์",
  "บุญเลิศ", "ช้างต่าง", "เกลี้ยงเกลา", "สุขเกษม", "คำดี", "สีดี", "สุขลักษณะ", "โพธิ์งาม", "ชินบุญ",
  "พัฒนาศิลป์", "สวนครั่ง", "ปัญญาจันทร์", "เกตุวิทยา", "ราชวงค์", "โตปิกา", "สุดใจ", "ชาวนา", "ชุ่มชื่น",
  "พึ่งประเสริฐ", "กลับโพธิ์", "พลายพันธุ์", "รื่นทอง", "บุญครอง", "คำคง", "สุขสวัสดิ์", "สงเคราะห์",
  "ทองแก้ว", "โพธิ์ดาด", "เขียวชาญ", "นิลนวล", "พูนประเสริฐ", "สำราญสุข", "สุขเจริญ", "วรรณศิลป์", "คำชื่น"
];

const NICKNAMES_MALE = ["ฟลุ๊ค", "นิว", "กอล์ฟ", "เบียร์", "บอม", "นนท์", "เจ", "ภูมิ", "เติ้ล", "บอส", "อาร์ม", "ก้อง", "แบงค์", "มาร์ค", "โอ๊ค", "บิว", "เต้", "วิน", "ต้น", "พีช"];
const NICKNAMES_FEMALE = ["มายด์", "เนย", "ฟ้า", "พลอย", "น้ำ", "มุก", "ไอซ์", "แพรว", "มิ้นท์", "เกรซ", "ออม", "วิว", "ปิ่น", "ฝ้าย", "บิวตี้", "ตาล", "แก้ม", "แตงโม", "โบว์", "แนน"];

const AVATARS_MALE = [
  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
];

const AVATARS_FEMALE = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
];

const TALENTS = [
  ["คณิตศาสตร์", "คิดเลขเร็ว"],
  ["วาดภาพ", "ศิลปะระบายสี"],
  ["ฟุตบอล", "กรีฑา"],
  ["ดนตรีไทย", "อังกะลุง"],
  ["คอมพิวเตอร์", "การเขียนโปรแกรมเบื้องต้น"],
  ["การอ่านทำนองเสนาะ", "เขียนเรียงความ"],
  ["เกษตรกรรม", "ปลูกผักไฮโดรโปนิกส์"],
  ["วอลเลย์บอล", "กีฬาพื้นบ้าน"],
  ["งานประดิษฐ์", "งานฝีมือภูมิปัญญาท้องถิ่น"],
  ["ภาษาอังกฤษ", "การสื่อสาร"],
  ["ขับร้องเพลงลูกทุ่ง", "การแสดง"],
  ["การช่วยเหลือเพื่อน", "ผู้นำกิจกรรมห้องเรียน"]
];

const ADVISORS = {
  "อ.2": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
  "อ.3": "ครูสุวรรณา มงคลจิต (ครูประจำชั้นอนุบาล 3)",
  "ป.1": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
  "ป.2": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
  "ป.3": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
  "ป.4": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
  "ป.5": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
  "ป.6": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
  "ม.1": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
  "ม.2": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
  "ม.3": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
};

function formatCitizenId(cid) {
  if (cid && cid.length === 13) {
    return `${cid[0]}-${cid.slice(1,5)}-${cid.slice(5,10)}-${cid.slice(10,12)}-${cid[12]}`;
  }
  return cid || '';
}

// ข้อมูลนักเรียนการศึกษาพิเศษ (สำนักบริหารงานการศึกษาพิเศษ สพฐ. 10 พฤศจิกายน 2568)
const SPECIAL_EDU_MAP = {
  // 1. เด็กชายศุภณัฐ ชิ้นสงวน 1209000963946 ป.2 ออทิสติก
  '2954': { seq: 1, prefix: 'เด็กชาย', firstName: 'ศุภณัฐ', lastName: 'ชิ้นสงวน', cid: '1209000963946', grade: 'ป.2', disabilityType: 'ออทิสติก', isMultiple: false },
  '1209000963946': { seq: 1, prefix: 'เด็กชาย', firstName: 'ศุภณัฐ', lastName: 'ชิ้นสงวน', cid: '1209000963946', grade: 'ป.2', disabilityType: 'ออทิสติก', isMultiple: false },

  // 2. เด็กชายปัญญากร แก้วมรศรี 1649000053563 ป.3 บกพร่องทางการเรียนรู้
  '2892': { seq: 2, prefix: 'เด็กชาย', firstName: 'ปัญญากร', lastName: 'แก้วมรศรี', cid: '1649000053563', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },
  '1649000053563': { seq: 2, prefix: 'เด็กชาย', firstName: 'ปัญญากร', lastName: 'แก้วมรศรี', cid: '1649000053563', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },

  // 3. เด็กชายอรรถพล ศรีวิไล 1649000052524 ป.3 บกพร่องทางการเรียนรู้
  '2891': { seq: 3, prefix: 'เด็กชาย', firstName: 'อรรถพล', lastName: 'ศรีวิไล', cid: '1649000052524', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },
  '1649000052524': { seq: 3, prefix: 'เด็กชาย', firstName: 'อรรถพล', lastName: 'ศรีวิไล', cid: '1649000052524', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },

  // 4. เด็กชายอิทธิพัทธ์ ช่างกลึงคุณ 1209000976223 ป.3 บกพร่องทางการเรียนรู้
  '2908': { seq: 4, prefix: 'เด็กชาย', firstName: 'อิทธิพัทธ์', lastName: 'ช่างกลึงคุณ', cid: '1209000976223', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },
  '1209000976223': { seq: 4, prefix: 'เด็กชาย', firstName: 'อิทธิพัทธ์', lastName: 'ช่างกลึงคุณ', cid: '1209000976223', grade: 'ป.3', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },

  // 5. เด็กชายเจษฎา ชัยดี 1669800469764 ป.3 บกพร่องทางสติปัญญา
  '2899': { seq: 5, prefix: 'เด็กชาย', firstName: 'เจษฎา', lastName: 'ชัยดี', cid: '1669800469764', grade: 'ป.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1669800469764': { seq: 5, prefix: 'เด็กชาย', firstName: 'เจษฎา', lastName: 'ชัยดี', cid: '1669800469764', grade: 'ป.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 6. เด็กหญิงเมษา ก่อนสาย 1539901267289 ป.4 บกพร่องทางการเรียนรู้
  '2877': { seq: 6, prefix: 'เด็กหญิง', firstName: 'เมษา', lastName: 'ก่อนสาย', cid: '1539901267289', grade: 'ป.4', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },
  '1539901267289': { seq: 6, prefix: 'เด็กหญิง', firstName: 'เมษา', lastName: 'ก่อนสาย', cid: '1539901267289', grade: 'ป.4', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },

  // 7. เด็กชายปาฏิหาริย์ นามวิชา 1539901218407 ป.5 บกพร่องทางสติปัญญา
  '2804': { seq: 7, prefix: 'เด็กชาย', firstName: 'ปาฏิหาริย์', lastName: 'นามวิชา', cid: '1539901218407', grade: 'ป.5', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1539901218407': { seq: 7, prefix: 'เด็กชาย', firstName: 'ปาฏิหาริย์', lastName: 'นามวิชา', cid: '1539901218407', grade: 'ป.5', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 8. เด็กชายวรวรรธน์ เกตุสิทธิ์ 1649000049990 ป.5 บกพร่องทางการเรียนรู้
  '2848': { seq: 8, prefix: 'เด็กชาย', firstName: 'วรวรรธน์', lastName: 'เกตุสิทธิ์', cid: '1649000049990', grade: 'ป.5', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },
  '1649000049990': { seq: 8, prefix: 'เด็กชาย', firstName: 'วรวรรธน์', lastName: 'เกตุสิทธิ์', cid: '1649000049990', grade: 'ป.5', disabilityType: 'บกพร่องทางการเรียนรู้', isMultiple: false },

  // 9. เด็กหญิงวรรณิดา บุญมาแลบ 1649000044700 ม.1 บกพร่องทางสติปัญญา
  '2771': { seq: 9, prefix: 'เด็กหญิง', firstName: 'วรรณิดา', lastName: 'บุญมาแลบ', cid: '1649000044700', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1649000044700': { seq: 9, prefix: 'เด็กหญิง', firstName: 'วรรณิดา', lastName: 'บุญมาแลบ', cid: '1649000044700', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 10. เด็กชายวสันต์ ราชชาย 1769800155742 ม.1 บกพร่องทางสติปัญญา
  '2764': { seq: 10, prefix: 'เด็กชาย', firstName: 'วสันต์', lastName: 'ราชชาย', cid: '1769800155742', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1769800155742': { seq: 10, prefix: 'เด็กชาย', firstName: 'วสันต์', lastName: 'ราชชาย', cid: '1769800155742', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 11. เด็กหญิงอารยา สีใจ 1539901155651 ม.1 บกพร่องทางสติปัญญา
  '2800': { seq: 11, prefix: 'เด็กหญิง', firstName: 'อารยา', lastName: 'สีใจ', cid: '1539901155651', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1539901155651': { seq: 11, prefix: 'เด็กหญิง', firstName: 'อารยา', lastName: 'สีใจ', cid: '1539901155651', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 12. เด็กหญิงอุกฤษรินทร์ อินต๊ะเสถียร 1649000045951 ม.1 บกพร่องทางสติปัญญา
  '2797': { seq: 12, prefix: 'เด็กหญิง', firstName: 'อุกฤษรินทร์', lastName: 'อินต๊ะเสถียร', cid: '1649000045951', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1649000045951': { seq: 12, prefix: 'เด็กหญิง', firstName: 'อุกฤษรินทร์', lastName: 'อินต๊ะเสถียร', cid: '1649000045951', grade: 'ม.1', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 13. เด็กหญิงจรรยมณฑน์ กองแก้ว 1539901112668 ม.2 บกพร่องทางสติปัญญา
  '2752': { seq: 13, prefix: 'เด็กหญิง', firstName: 'จรรยมณฑน์', lastName: 'กองแก้ว', cid: '1539901112668', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1539901112668': { seq: 13, prefix: 'เด็กหญิง', firstName: 'จรรยมณฑน์', lastName: 'กองแก้ว', cid: '1539901112668', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 14. เด็กชายเชาวฤทธิ์ มยุเรศ 1658900025417 ม.2 บกพร่องทางสติปัญญา
  '2765': { seq: 14, prefix: 'เด็กชาย', firstName: 'เชาวฤทธิ์', lastName: 'มยุเรศ', cid: '1658900025417', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1658900025417': { seq: 14, prefix: 'เด็กชาย', firstName: 'เชาวฤทธิ์', lastName: 'มยุเรศ', cid: '1658900025417', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 15. เด็กชายไกรภพ เหล็กมั่น 1219400057128 ม.2 บกพร่องทางสติปัญญา
  '2775': { seq: 15, prefix: 'เด็กชาย', firstName: 'ไกรภพ', lastName: 'เหล็กมั่น', cid: '1219400057128', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1219400057128': { seq: 15, prefix: 'เด็กชาย', firstName: 'ไกรภพ', lastName: 'เหล็กมั่น', cid: '1219400057128', grade: 'ม.2', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 16. เด็กชายธนากร มุ่ยพันธ์ 1539901099823 ม.3 บกพร่องทางสติปัญญา
  '2751': { seq: 16, prefix: 'เด็กชาย', firstName: 'ธนากร', lastName: 'มุ่ยพันธ์', cid: '1539901099823', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1539901099823': { seq: 16, prefix: 'เด็กชาย', firstName: 'ธนากร', lastName: 'มุ่ยพันธ์', cid: '1539901099823', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 17. เด็กหญิงนฤมล ยิ่งต่าง 1539901075339 ม.3 บกพร่องทางสติปัญญา
  '2719': { seq: 17, prefix: 'เด็กหญิง', firstName: 'นฤมล', lastName: 'ยิ่งต่าง', cid: '1539901075339', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1539901075339': { seq: 17, prefix: 'เด็กหญิง', firstName: 'นฤมล', lastName: 'ยิ่งต่าง', cid: '1539901075339', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },

  // 18. เด็กชายปรีติ วรรณศิลป์ 1719200048252 ม.3 บกพร่องทางสติปัญญา
  '2678': { seq: 18, prefix: 'เด็กชาย', firstName: 'ปรีติ', lastName: 'วรรณศิลป์', cid: '1719200048252', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
  '1719200048252': { seq: 18, prefix: 'เด็กชาย', firstName: 'ปรีติ', lastName: 'วรรณศิลป์', cid: '1719200048252', grade: 'ม.3', disabilityType: 'บกพร่องทางสติปัญญา', isMultiple: false },
};

const students = [];
const screenings = [];
const homeVisits = [];
const sdqEvaluations = [];
const referrals = [];
const interventions = [];

rawLines.forEach((line, idx) => {
  const p = line.split('\t');
  const code = p[5];
  const citizenRaw = p[2];
  const rawGrade = p[3];
  const age = parseInt(p[11], 10) || 10;
  
  const exact = EXACT_RECORDS[code];

  let grade = "";
  if (exact) {
    grade = exact.grade;
  } else if (age <= 5) {
    grade = "อ" + rawGrade;
  } else if (age >= 13) {
    grade = "ม" + rawGrade;
  } else {
    grade = "ป" + rawGrade;
  }
  
  const classroom = exact ? exact.classroom : (grade + "/1");
  const isFemale = exact 
    ? (exact.gender === 'female')
    : (p[7].includes("˭ԧ") || p[7].includes("ҧ") || p[6] === "ญ" || (p[7] === "" && idx % 2 === 0));
  
  const specialEdu = SPECIAL_EDU_MAP[code] || SPECIAL_EDU_MAP[citizenRaw];

  let prefix = exact 
    ? exact.prefix 
    : (isFemale ? (age >= 15 ? "นางสาว" : "เด็กหญิง") : (age >= 15 ? "นาย" : "เด็กชาย"));
  let gender = isFemale ? "female" : "male";
  
  let firstName = exact ? exact.firstName : (isFemale ? FEMALE_FIRST_NAMES[idx % FEMALE_FIRST_NAMES.length] : MALE_FIRST_NAMES[idx % MALE_FIRST_NAMES.length]);
  let lastName = exact ? exact.lastName : LAST_NAMES[idx % LAST_NAMES.length];
  let nickname = exact ? exact.nickname : (isFemale ? NICKNAMES_FEMALE[idx % NICKNAMES_FEMALE.length] : NICKNAMES_MALE[idx % NICKNAMES_MALE.length]);

  if (specialEdu) {
    prefix = specialEdu.prefix || prefix;
    firstName = specialEdu.firstName || firstName;
    lastName = specialEdu.lastName || lastName;
    grade = specialEdu.grade || grade;
    gender = prefix.includes('หญิง') || prefix.includes('สาว') ? 'female' : 'male';
  }

  const birthDate = exact ? exact.birthDate : parseThaiDate(p[10]);
  const weight = exact ? exact.weight : (parseFloat(p[12]) || 30);
  const height = exact ? exact.height : (parseFloat(p[13]) || 135);
  const bloodType = exact ? exact.bloodType : ((p[14] && ['A','B','AB','O'].includes(p[14])) ? p[14] : ["O", "B", "A", "AB"][idx % 4]);
  
  const houseNumber = p[18] || `${idx + 10}`;
  const moo = p[19] || `${(idx % 9) + 1}`;
  const address = exact ? exact.address : `บ้านเลขที่ ${houseNumber} หมู่ ${moo} ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130`;
  
  const isPoor = exact ? exact.isPoor : (p[34] && p[34].includes("ยากจน"));
  
  const studentId = `std-${String(idx + 1).padStart(3, '0')}`;
  
  // ปรับให้มี กลุ่มเสี่ยง 1 คน และ กลุ่มมีปัญหา 1 คน เป็นชั้นมัธยม
  // std-108: เด็กชายไกรภพ เหล็กมั่น (ม.2/1) -> กลุ่มเสี่ยง
  // std-126: นายศักรินทร์ ผิวสุข (ม.3/1) -> กลุ่มมีปัญหา
  let riskLevel = "normal";
  if (studentId === "std-108") {
    riskLevel = "risk";
  } else if (studentId === "std-126") {
    riskLevel = "problem";
  }

  const seatNumber = (idx % 25) + 1;
  const baseGpa = 2.4 + ((idx * 37) % 160) / 100;
  const gpax = Math.min(4.00, Math.round(baseGpa * 100) / 100);

  const parentName = exact ? exact.parentName : ((gender === 'female' ? 'นาย' : 'นาง') + LAST_NAMES[(idx + 5) % LAST_NAMES.length]);
  const parentPhone = exact ? exact.parentPhone : `08${(idx % 9) + 1}-${String(100 + idx).slice(-3)}-${String(1000 + (idx * 23) % 9000)}`;

  // เยี่ยมบ้านครบ 100% (ทุกคน 137 คน)
  const homeVisitCompleted = true;
  const sdqCompleted = true;

  const avatar = gender === 'female' 
    ? AVATARS_FEMALE[idx % AVATARS_FEMALE.length] 
    : AVATARS_MALE[idx % AVATARS_MALE.length];

  const finalCitizenId = specialEdu ? formatCitizenId(specialEdu.cid) : formatCitizenId(citizenRaw);

  students.push({
    id: studentId,
    studentCode: code,
    citizenId: finalCitizenId,
    prefix,
    firstName,
    lastName,
    nickname,
    gender,
    grade,
    classroom,
    roomNumber: 1,
    seatNumber,
    birthDate,
    bloodType,
    religion: "พุทธ",
    gpax,
    advisorName: ADVISORS[grade] || "ครูประจำชั้น",
    phoneNumber: `06${(idx % 8) + 2}-${String(200 + idx).slice(-3)}-${String(2000 + (idx * 17) % 8000)}`,
    parentName,
    parentPhone,
    address,
    specialTalents: TALENTS[idx % TALENTS.length],
    hasDisability: specialEdu ? true : false,
    disabilityType: specialEdu ? specialEdu.disabilityType : undefined,
    isMultipleDisabilities: specialEdu ? specialEdu.isMultiple : false,
    specialEducationAgency: specialEdu ? 'สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)' : undefined,
    currentRiskLevel: riskLevel,
    homeVisitCompleted,
    sdqCompleted,
    avatarUrl: avatar
  });

  // SCREENING
  if (riskLevel === 'risk') {
    screenings.push({
      id: `scr-${String(idx + 1).padStart(3, '0')}`,
      studentId,
      academicYear: '2568',
      term: 1,
      evaluatedDate: `2026-06-${String(10 + (idx % 15)).padStart(2, '0')}`,
      overallStatus: 'risk',
      dimensions: {
        learning: {
          status: 'risk',
          details: 'ผลการเรียนเริ่มลดลง ขาดสมาธิในการเรียนช่วงบ่ายและส่งงานล่าช้า'
        },
        health: {
          status: 'normal',
          details: 'สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัว'
        },
        economic: {
          status: 'normal',
          details: 'ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนค่าใช้จ่ายในการเรียนได้'
        },
        behavior: {
          status: 'risk',
          details: 'เริ่มมีพฤติกรรมเล่นเกมหรือใช้โทรศัพท์มือถือมากเกินไปในเวลาเรียน'
        },
        safety: {
          status: 'normal',
          details: 'การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ'
        }
      },
      summaryNotes: 'อยู่ในกลุ่มเสี่ยงด้านการเรียนและพฤติกรรม (ม.2) ควรจัดกิจกรรมสอนเสริมและให้คำปรึกษาติดตามสม่ำเสมอ',
      evaluatedBy: ADVISORS[grade] || "ครูประจำชั้น"
    });
  } else if (riskLevel === 'problem') {
    screenings.push({
      id: `scr-${String(idx + 1).padStart(3, '0')}`,
      studentId,
      academicYear: '2568',
      term: 1,
      evaluatedDate: `2026-06-${String(10 + (idx % 15)).padStart(2, '0')}`,
      overallStatus: 'problem',
      dimensions: {
        learning: {
          status: 'problem',
          details: 'ขาดเรียนบ่อยครั้ง ไม่ส่งงาน มีปัญหาด้านการอ่านเขียนและการคิดคำนวณ'
        },
        health: {
          status: 'normal',
          details: 'สุขภาพทั่วไปปกติ แต่มีอาการอ่อนเพลียบ่อยจากการนอนดึก'
        },
        economic: {
          status: 'problem',
          details: 'ครอบครัวยากจนมาก รายได้ไม่แน่นอน ขาดแคลนค่าใช้จ่ายในการเรียน สมควรได้รับทุนสงเคราะห์ (กสศ.)'
        },
        behavior: {
          status: 'risk',
          details: 'มีอาการซึมเศร้า แยกตัว ไม่ค่อยสุงสิงกับเพื่อน และวิตกกังวลเรื่องครอบครัว'
        },
        safety: {
          status: 'normal',
          details: 'บ้านอยู่ห่างไกลโรงเรียน การเดินทางต้องระมัดระวัง'
        }
      },
      summaryNotes: 'อยู่ในกลุ่มมีปัญหาด้านการเรียนและเศรษฐกิจ (ม.3) ต้องได้รับการช่วยเหลือเร่งด่วนและส่งต่อรับทุนสงเคราะห์',
      evaluatedBy: ADVISORS[grade] || "ครูประจำชั้น"
    });
  } else {
    screenings.push({
      id: `scr-${String(idx + 1).padStart(3, '0')}`,
      studentId,
      academicYear: '2568',
      term: 1,
      evaluatedDate: `2026-06-${String(10 + (idx % 15)).padStart(2, '0')}`,
      overallStatus: 'normal',
      dimensions: {
        learning: {
          status: 'normal',
          details: 'ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย'
        },
        health: {
          status: 'normal',
          details: 'สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง'
        },
        economic: {
          status: 'normal',
          details: isPoor ? 'ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ' : 'ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ'
        },
        behavior: {
          status: 'normal',
          details: 'ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี'
        },
        safety: {
          status: 'normal',
          details: 'การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ'
        }
      },
      summaryNotes: 'อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน',
      evaluatedBy: ADVISORS[grade] || "ครูประจำชั้น"
    });
  }

  // HOME VISIT
  if (homeVisitCompleted) {
    const commuteMethods = ['เดินเท้า', 'จักรยาน', 'รถจักรยานยนต์', 'ผู้ปกครองมาส่ง'];
    const livingWithOptions = ['บิดามารดา', 'บิดามารดา', 'ปู่ย่าตายาย', 'มารดา', 'บิดา'];
    const relationships = ['อบอุ่นดีมาก', 'ปกติทั่วไป', 'มีความขัดแย้งบ้าง', 'ปกติทั่วไป'];
    const conditions = ['มั่นคงถาวร สะอาด', 'สภาพปานกลาง', 'สภาพปานกลาง', 'ทรุดโทรม ชำรุด'];

    homeVisits.push({
      id: `hv-${String(idx + 1).padStart(3, '0')}`,
      studentId,
      visitDate: `2026-06-${String(15 + (idx % 12)).padStart(2, '0')}`,
      academicYear: '2568',
      term: 1,
      visitorName: ADVISORS[grade] || "ครูประจำชั้น",
      visitorPosition: "ครูประจำชั้น / ครูที่ปรึกษา",
      houseType: idx % 6 === 0 ? "เพิงพักชั่วคราว" : (idx % 3 === 0 ? "บ้านเดี่ยว" : "บ้านเดี่ยว"),
      livingWith: exact && exact.parentRelation === 'ย่า' ? 'ปู่ย่าตายาย' : (exact && exact.parentRelation === 'ยาย' ? 'ปู่ย่าตายาย' : livingWithOptions[idx % livingWithOptions.length]),
      familyMembersCount: 3 + (idx % 4),
      familyRelationship: relationships[idx % relationships.length],
      monthlyIncome: isPoor ? 3500 + (idx % 4) * 500 : 9000 + (idx % 6) * 1500,
      hasDebt: isPoor || idx % 2 === 0,
      distanceFromSchoolKm: Math.round((1.2 + (idx % 8) * 1.5) * 10) / 10,
      commuteMethod: commuteMethods[idx % commuteMethods.length],
      gpsCoordinates: {
        lat: 17.5123 + ((idx * 37) % 80) / 1000,
        lng: 99.7891 + ((idx * 43) % 70) / 1000
      },
      address,
      photoUrl: idx % 2 === 0 
        ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80"
        : "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
      homeCondition: isPoor ? (idx % 3 === 0 ? 'ทรุดโทรม ชำรุด' : 'สภาพปานกลาง') : conditions[idx % conditions.length],
      requestedSupport: isPoor ? ['ทุนการศึกษา', 'อุปกรณ์การเรียน', 'อาหารกลางวัน'] : ['อุปกรณ์การเรียน'],
      parentFeedback: "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
      teacherImpression: isPoor 
        ? "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน"
        : "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
      status: 'completed'
    });
  }

  // SDQ EVALUATION
  if (sdqCompleted) {
    let emo = 1 + (idx % 2);
    let cond = 1 + ((idx + 1) % 2);
    let hyper = 2 + (idx % 2);
    let peer = 1 + ((idx + 2) % 2);
    let pro = 8 + (idx % 3);
    let sdqStatus = 'normal';
    let sdqNotes = 'พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู';

    if (riskLevel === 'risk') {
      emo = 4;
      cond = 4;
      hyper = 4;
      peer = 4;
      pro = 6;
      sdqStatus = 'risk';
      sdqNotes = 'ผลคะแนน SDQ รวม 16 คะแนน อยู่ในเกณฑ์กลุ่มเสี่ยง ควรเฝ้าระวังพฤติกรรมและสังเกตในชั้นเรียน';
    } else if (riskLevel === 'problem') {
      emo = 6;
      cond = 4;
      hyper = 5;
      peer = 5;
      pro = 4;
      sdqStatus = 'problem';
      sdqNotes = 'ผลคะแนน SDQ รวม 20 คะแนน อยู่ในเกณฑ์กลุ่มมีปัญหา ควรได้รับการดูแลใกล้ชิดและส่งต่อครูแนะแนว';
    }

    const totalDiff = emo + cond + hyper + peer;

    sdqEvaluations.push({
      id: `sdq-${String(idx + 1).padStart(3, '0')}`,
      studentId,
      academicYear: '2568',
      evaluatedDate: `2026-06-${String(18 + (idx % 10)).padStart(2, '0')}`,
      evaluatorType: 'teacher',
      evaluatorName: ADVISORS[grade] || "ครูประจำชั้น",
      scores: {
        emotionalScore: emo,
        conductScore: cond,
        hyperactivityScore: hyper,
        peerScore: peer,
        prosocialScore: pro,
        totalDifficulties: totalDiff,
        status: sdqStatus
      },
      notes: sdqNotes
    });
  }

  // REFERRALS (เฉพาะนักเรียนกลุ่มมีปัญหา)
  if (riskLevel === 'problem') {
    referrals.push({
      id: `ref-${String(referrals.length + 1).padStart(3, '0')}`,
      studentId,
      referralDate: '2026-07-08',
      type: 'internal',
      toDepartment: 'กลุ่มงานแนะแนวการศึกษา และงานทุนการศึกษา (กสศ.)',
      reason: 'ขอรับความช่วยเหลือทุนการศึกษาปัจจัยพื้นฐานนักเรียนยากจนพิเศษ และการฟื้นฟูผลการเรียน',
      symptomsAndDetails: 'ครอบครัวฐานะยากจนมาก ขาดแคลนทุนทรัพย์ นักเรียนขาดเรียนบ่อยและผลการเรียนถดถอย มีภาวะวิตกกังวล',
      urgency: 'urgent',
      referredBy: ADVISORS[grade] || 'ครูที่ปรึกษา',
      currentStatus: 'in_progress',
      actionTaken: 'ประสานงานขอรับทุนการศึกษา กสศ. และจัดตารางครูแนะแนวให้คำปรึกษาสัปดาห์ละ 1 ครั้ง',
      resultNotes: 'ประสานงานเรียบร้อยแล้ว อยู่ระหว่างการพิจารณาจัดสรรทุนและติดตามผลการเรียนอย่างใกล้ชิด',
      updatedDate: '2026-07-18'
    });
  }

  // INTERVENTIONS
  if (riskLevel === 'risk') {
    interventions.push({
      id: `int-${String(interventions.length + 1).padStart(3, '0')}`,
      studentId,
      logDate: '2026-07-12',
      activityType: 'การให้คำปรึกษา',
      topic: 'การให้คำปรึกษาปรับเปลี่ยนพฤติกรรมและพัฒนาทักษะการเรียนรู้',
      description: 'พูดคุยสร้างแรงบันดาลใจ จัดทำตารางทบทวนบทเรียน และติดตามการส่งงานในชั้นเรียน',
      counselor: ADVISORS[grade] || 'ครูประจำชั้น',
      outcome: 'พฤติกรรม/ผลการเรียนดีขึ้นชัดเจน',
      nextAppointment: '2026-08-12'
    });
  } else if (riskLevel === 'problem') {
    interventions.push({
      id: `int-${String(interventions.length + 1).padStart(3, '0')}`,
      studentId,
      logDate: '2026-07-10',
      activityType: 'การมอบทุนการศึกษา',
      topic: 'ประสานขอรับทุนการศึกษา กสศ. และทุนปัจจัยพื้นฐานนักเรียนยากจน',
      description: 'ลงพื้นที่เยี่ยมบ้านเพิ่มเติม รวบรวมเอกสารรับรองรายได้ และประสานงานส่งต่อกลุ่มงานแนะแนว',
      counselor: ADVISORS[grade] || 'ครูประจำชั้น',
      outcome: 'พัฒนาการเป็นที่น่าพอใจ',
      nextAppointment: '2026-08-10'
    });
  } else if (idx % 6 === 0) {
    interventions.push({
      id: `int-${String(interventions.length + 1).padStart(3, '0')}`,
      studentId,
      logDate: `2026-07-${String(10 + (idx % 15)).padStart(2, '0')}`,
      activityType: 'ส่งเสริมความสามารถพิเศษ',
      topic: 'กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์',
      description: 'ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม',
      counselor: ADVISORS[grade] || 'ครูประจำชั้น',
      outcome: 'พัฒนาการเป็นที่น่าพอใจ',
      nextAppointment: `2026-08-${String(10 + (idx % 15)).padStart(2, '0')}`
    });
  }
});

const template = `import { Student, StudentScreening, HomeVisitRecord, SDQEvaluation, StudentReferral, InterventionLog } from '../types';

export const OFFICIAL_SDQ_QUESTIONS = [
  { id: 1, text: "ห่วงใยความรู้สึกคนอื่น", scale: "prosocial", reverse: false },
  { id: 2, text: "อยู่ไม่นิ่ง ลุกนั่งตลอดเวลา ไม่สามารถอยู่นิ่งได้นาน", scale: "hyperactivity", reverse: false },
  { id: 3, text: "มักจะบ่นว่าปวดหัว ปวดท้อง หรือไม่สบายบ่อยๆ", scale: "emotional", reverse: false },
  { id: 4, text: "เต็มใจแบ่งปันสิ่งของให้เพื่อน (ของกิน เกม ปากกา ฯลฯ)", scale: "prosocial", reverse: false },
  { id: 5, text: "มักมีอารมณ์โกรธ โมโหร้าย และอารมณ์ฉุนเฉียวง่าย", scale: "conduct", reverse: false },
  { id: 6, text: "ค่อนข้างแยกตัว ชอบเล่นคนเดียว หรืออยู่ตามลำพัง", scale: "peer", reverse: false },
  { id: 7, text: "เชื่อฟัง มักทำตามที่ผู้ใหญ่ขอร้องหรือสั่งสอน", scale: "conduct", reverse: true },
  { id: 8, text: "ขี้กังวล มีเรื่องไม่สบายใจบ่อยๆ ดูวิตกตลอดเวลา", scale: "emotional", reverse: false },
  { id: 9, text: "คอยช่วยเหลือเวลาที่เห็นคนอื่นเสียใจ อารมณ์เสีย หรือไม่สบายใจ", scale: "prosocial", reverse: false },
  { id: 10, text: "อยู่ไม่สุข นั่งยุกยิก กระดิกเท้า หรือขยับตัวไปมาตลอด", scale: "hyperactivity", reverse: false },
  { id: 11, text: "มีเพื่อนสนิทอย่างน้อยหนึ่งคนที่ไว้ใจได้", scale: "peer", reverse: true },
  { id: 12, text: "มักมีเรื่องทะเลาะเบาะแว้งหรือรังแกเพื่อนผู้อื่น", scale: "conduct", reverse: false },
  { id: 13, text: "มักดูไม่มีความสุข ท้อแท้ ซึมเศร้า หรือร้องไห้ง่าย", scale: "emotional", reverse: false },
  { id: 14, text: "โดยทั่วไปเป็นที่ชื่นชอบของเพื่อนๆ รุ่นเดียวกัน", scale: "peer", reverse: true },
  { id: 15, text: "วอกแวกง่าย สมาธิสั้น ไม่สามารถจดจ่อกับงานจนเสร็จได้", scale: "hyperactivity", reverse: false },
  { id: 16, text: "ตื่นกลัวง่าย ตกใจ หรือขี้กลัวในสถานการณ์ใหม่ๆ", scale: "emotional", reverse: false },
  { id: 17, text: "ใจดีกับเด็กที่อายุน้อยกว่า มีน้ำใจ", scale: "prosocial", reverse: false },
  { id: 18, text: "มักโกหก หลอกลวง หรือขี้โกงผู้อื่น", scale: "conduct", reverse: false },
  { id: 19, text: "ถูกเด็กคนอื่นล้อเลียน แกล้ง หรือรังแกบ่อยๆ", scale: "peer", reverse: false },
  { id: 20, text: "มักอาสาช่วยเหลือครู ผู้ปกครอง หรือเพื่อนเสมอ", scale: "prosocial", reverse: false },
  { id: 21, text: "คิดก่อนทำ รอบคอบ สามารถควบคุมตนเองได้", scale: "hyperactivity", reverse: true },
  { id: 22, text: "แอบหยิบหรือขโมยของที่บ้าน โรงเรียน หรือที่อื่น", scale: "conduct", reverse: false },
  { id: 23, text: "เข้ากับผู้ใหญ่ได้ดีกว่าเด็กวัยเดียวกัน", scale: "peer", reverse: false },
  { id: 24, text: "ขี้กลัว มีความกลัวหลายสิ่งหลายอย่างเกินสมควร", scale: "emotional", reverse: false },
  { id: 25, text: "มีความมุ่งมั่น ทำงานได้จนเสร็จสิ้น มีสมาธิดี", scale: "hyperactivity", reverse: true },
];

export const INITIAL_STUDENTS: Student[] = ${JSON.stringify(students, null, 2)};

export const INITIAL_SCREENINGS: StudentScreening[] = ${JSON.stringify(screenings, null, 2)};

export const INITIAL_HOME_VISITS: HomeVisitRecord[] = ${JSON.stringify(homeVisits, null, 2)};

export const INITIAL_SDQ_EVALUATIONS: SDQEvaluation[] = ${JSON.stringify(sdqEvaluations, null, 2)};

export const INITIAL_REFERRALS: StudentReferral[] = ${JSON.stringify(referrals, null, 2)};

export const INITIAL_INTERVENTIONS: InterventionLog[] = ${JSON.stringify(interventions, null, 2)};

export const SPECIAL_EDUCATION_REPORT_META = {
  title: "รายงานข้อมูลนักเรียน ทุกระดับชั้น (การศึกษาพิเศษ)",
  reportDate: "10 พฤศจิกายน 2568",
  academicYear: "2568",
  schoolName: "โรงเรียน บ้านห้วยไคร้",
  serviceArea: "สพป.สุโขทัย เขต 2",
  department: "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน",
  totalStudentsWithDisability: 18
};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/mockData.ts'), template, 'utf8');
console.log(`Successfully regenerated mockData.ts with ${students.length} students (${Object.keys(EXACT_RECORDS).length} verified exact records)!`);
