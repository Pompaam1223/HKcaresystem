import { Student, StudentScreening, HomeVisitRecord, SDQEvaluation, StudentReferral, InterventionLog } from '../types';

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

export const INITIAL_STUDENTS: Student[] = [
  {
    "id": "std-001",
    "studentCode": "2935",
    "citizenId": "1-1199-03116-95-8",
    "prefix": "เด็กหญิง",
    "firstName": "ณัฐณิชา",
    "lastName": "พรหมอินทร์",
    "nickname": "ณิชา",
    "gender": "female",
    "grade": "อ.2",
    "classroom": "อ.2/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2020-05-18",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.4,
    "advisorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "phoneNumber": "062-200-2000",
    "parentName": "นางสาวสาธิต สนมฉ่ำ",
    "parentPhone": "089-411-2935",
    "address": "บ้านเลขที่ 411 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-002",
    "studentCode": "2960",
    "citizenId": "1-1299-02692-30-1",
    "prefix": "เด็กหญิง",
    "firstName": "ธีระภา",
    "lastName": "อินทร์คง",
    "nickname": "ภา",
    "gender": "female",
    "grade": "อ.2",
    "classroom": "อ.2/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2020-08-07",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.77,
    "advisorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "phoneNumber": "063-201-2017",
    "parentName": "นางรัตน์ บุญชื่น",
    "parentPhone": "084-288-2960",
    "address": "บ้านเลขที่ 288 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-003",
    "studentCode": "2961",
    "citizenId": "1-6490-00057-74-7",
    "prefix": "เด็กชาย",
    "firstName": "วรายุส",
    "lastName": "เตือนสติ",
    "nickname": "ยุส",
    "gender": "male",
    "grade": "อ.3",
    "classroom": "อ.3/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2020-02-20",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.14,
    "advisorName": "ครูสุวรรณา มงคลจิต (ครูประจำชั้นอนุบาล 3)",
    "phoneNumber": "064-202-2034",
    "parentName": "นางตองใจ สุดสาย",
    "parentPhone": "085-298-2961",
    "address": "บ้านเลขที่ 298 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-004",
    "studentCode": "2962",
    "citizenId": "1-5399-01325-30-1",
    "prefix": "เด็กชาย",
    "firstName": "ปัญญวัต",
    "lastName": "ปันดิ",
    "nickname": "วัต",
    "gender": "male",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2018-06-06",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.51,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "065-203-2051",
    "parentName": "นางไฝ แจ่มแจ้ง",
    "parentPhone": "086-223-2962",
    "address": "บ้านเลขที่ 223 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-005",
    "studentCode": "2963",
    "citizenId": "1-5399-01345-57-3",
    "prefix": "เด็กชาย",
    "firstName": "ศิริวัฒน์",
    "lastName": "ตานาพิน",
    "nickname": "วัฒน์",
    "gender": "male",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2019-04-05",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.88,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "066-204-2068",
    "parentName": "นางปราณี เรืองเกิด",
    "parentPhone": "087-394-2963",
    "address": "บ้านเลขที่ 394 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-006",
    "studentCode": "2964",
    "citizenId": "1-6490-00056-60-1",
    "prefix": "เด็กชาย",
    "firstName": "สุรศักดิ์",
    "lastName": "หินชุย",
    "nickname": "ศักดิ์",
    "gender": "male",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2019-02-24",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.65,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "067-205-2085",
    "parentName": "นางพุชดี อินต๊ะเสถียร",
    "parentPhone": "088-243-2964",
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-007",
    "studentCode": "2901",
    "citizenId": "1-6489-00249-81-1",
    "prefix": "เด็กหญิง",
    "firstName": "เบญญาภา",
    "lastName": "เรืองฤทธิ์",
    "nickname": "เบญ",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2019-04-11",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.02,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "068-206-2102",
    "parentName": "นางสาวพุฒิพร กิริยานนท์",
    "parentPhone": "085-185-2901",
    "address": "บ้านเลขที่ 185 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-008",
    "studentCode": "2902",
    "citizenId": "1-2199-01740-88-2",
    "prefix": "เด็กหญิง",
    "firstName": "ณิภัชชา",
    "lastName": "โทนผุย",
    "nickname": "ภัชชา",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2018-08-30",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.39,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "069-207-2119",
    "parentName": "นางสายบัว เทพจัน",
    "parentPhone": "086-046-2902",
    "address": "บ้านเลขที่ 46 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-009",
    "studentCode": "2924",
    "citizenId": "1-6490-00056-55-4",
    "prefix": "เด็กหญิง",
    "firstName": "กมลกานต์",
    "lastName": "สิงห์สาย",
    "nickname": "กานต์",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2019-02-17",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.76,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "062-208-2136",
    "parentName": "นางน้อม แก้วชมภู",
    "parentPhone": "088-281-2924",
    "address": "บ้านเลขที่ 28/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-010",
    "studentCode": "2936",
    "citizenId": "1-5399-01340-47-4",
    "prefix": "เด็กหญิง",
    "firstName": "รินรดา",
    "lastName": "คำลำ",
    "nickname": "รดา",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2019-01-13",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.53,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "063-209-2153",
    "parentName": "นางจงรัก คำลำ",
    "parentPhone": "081-020-2936",
    "address": "บ้านเลขที่ 20 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-011",
    "studentCode": "2955",
    "citizenId": "1-1299-02622-24-8",
    "prefix": "เด็กหญิง",
    "firstName": "พิมลรัตน์",
    "lastName": "คงรอด",
    "nickname": "รัตน์",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2018-10-31",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.9,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "064-210-2170",
    "parentName": "นางพิรุณ ฟองการ",
    "parentPhone": "089-491-2955",
    "address": "บ้านเลขที่ 49/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-012",
    "studentCode": "2965",
    "citizenId": "1-1297-01752-87-0",
    "prefix": "เด็กหญิง",
    "firstName": "จีรนันท์",
    "lastName": "จันทร์งาม",
    "nickname": "นันท์",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2018-11-09",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.27,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "065-211-2187",
    "parentName": "นางธารินี จันทร์งาม",
    "parentPhone": "089-208-2965",
    "address": "บ้านเลขที่ 208 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-013",
    "studentCode": "2966",
    "citizenId": "1-5399-01344-41-1",
    "prefix": "เด็กหญิง",
    "firstName": "นภาพร",
    "lastName": "ดอนไพรเทียน",
    "nickname": "พร",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 13,
    "birthDate": "2019-03-19",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.64,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "066-212-2204",
    "parentName": "นางนันทกานต์ ประทาน",
    "parentPhone": "081-911-2966",
    "address": "บ้านเลขที่ 291/1 หมู่ 9 ต.บ้านตึก อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-014",
    "studentCode": "2967",
    "citizenId": "1-5399-01344-42-9",
    "prefix": "เด็กหญิง",
    "firstName": "นภาพรรณ",
    "lastName": "ดอนไพรเทียน",
    "nickname": "พรรณ",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 14,
    "birthDate": "2019-03-19",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.41,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "067-213-2221",
    "parentName": "นางนันทกานต์ ประทาน",
    "parentPhone": "082-911-2967",
    "address": "บ้านเลขที่ 291/1 หมู่ 9 ต.บ้านตึก อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-015",
    "studentCode": "2968",
    "citizenId": "1-6490-00056-52-0",
    "prefix": "เด็กหญิง",
    "firstName": "ปาริฉัตร",
    "lastName": "สังงิ้ว",
    "nickname": "ฉัตร",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 15,
    "birthDate": "2019-02-15",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.78,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "068-214-2238",
    "parentName": "นางเรื่อ สังงิ้ว",
    "parentPhone": "083-165-2968",
    "address": "บ้านเลขที่ 165 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-016",
    "studentCode": "2971",
    "citizenId": "1-5308-00125-03-1",
    "prefix": "เด็กหญิง",
    "firstName": "ขวัญจิรา",
    "lastName": "เรือนแพง",
    "nickname": "ขวัญ",
    "gender": "female",
    "grade": "ป.1",
    "classroom": "ป.1/1",
    "roomNumber": 1,
    "seatNumber": 16,
    "birthDate": "2018-08-09",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.15,
    "advisorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "phoneNumber": "069-215-2255",
    "parentName": "นางเหลี่ยม เรือนแพง",
    "parentPhone": "085-456-2971",
    "address": "บ้านเลขที่ 456 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-017",
    "studentCode": "2888",
    "citizenId": "1-6489-00233-75-3",
    "prefix": "เด็กชาย",
    "firstName": "ภูมิเมศ",
    "lastName": "ชัยวงค์",
    "nickname": "ภูมิ",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 17,
    "birthDate": "2017-11-16",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.52,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "062-216-2272",
    "parentName": "นายวิชิต ชัยวงค์",
    "parentPhone": "083-024-2888",
    "address": "บ้านเลขที่ 24 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-018",
    "studentCode": "2937",
    "citizenId": "1-8008-01645-31-1",
    "prefix": "เด็กชาย",
    "firstName": "กิตติพงศ์",
    "lastName": "ทิพย์รัตน์",
    "nickname": "กิต",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 18,
    "birthDate": "2017-07-23",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.89,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "063-217-2289",
    "parentName": "นางธิดารัตน์ นมารัง",
    "parentPhone": "082-162-2937",
    "address": "บ้านเลขที่ 162 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-019",
    "studentCode": "2938",
    "citizenId": "1-6489-00233-80-0",
    "prefix": "เด็กชาย",
    "firstName": "ชุติเดช",
    "lastName": "ผิวละออ",
    "nickname": "เดช",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 19,
    "birthDate": "2017-11-17",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.66,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "064-218-2306",
    "parentName": "นางศรัญญา โคแสงรักษา",
    "parentPhone": "083-430-2938",
    "address": "บ้านเลขที่ 430 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-020",
    "studentCode": "2939",
    "citizenId": "1-1007-04712-02-1",
    "prefix": "เด็กชาย",
    "firstName": "ฐิติพันธ์",
    "lastName": "เผื่อนปฐม",
    "nickname": "ติ",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 20,
    "birthDate": "2017-09-22",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.03,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "065-219-2323",
    "parentName": "นางวีรกานต์ ล้นเหลือ",
    "parentPhone": "084-020-2939",
    "address": "บ้านเลขที่ 20 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-021",
    "studentCode": "2940",
    "citizenId": "1-6489-00232-67-6",
    "prefix": "เด็กชาย",
    "firstName": "ณรงวิทย์",
    "lastName": "เคียงข้าง",
    "nickname": "วิทย์",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 21,
    "birthDate": "2017-10-08",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.4,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "066-220-2340",
    "parentName": "นางวราภรณ์ อิงขนร",
    "parentPhone": "084-994-2940",
    "address": "บ้านเลขที่ 299/4 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-022",
    "studentCode": "2941",
    "citizenId": "1-5399-01311-54-7",
    "prefix": "เด็กชาย",
    "firstName": "ศรัณภัทร",
    "lastName": "บุญกรม",
    "nickname": "ภัทร",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 22,
    "birthDate": "2017-11-14",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.77,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "067-221-2357",
    "parentName": "นางกฤษณา บุญกรม",
    "parentPhone": "085-276-2941",
    "address": "บ้านเลขที่ 276 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-023",
    "studentCode": "2954",
    "citizenId": "1-2090-00963-94-6",
    "prefix": "เด็กชาย",
    "firstName": "ศุภณัฐ",
    "lastName": "ชิ้นสงวน",
    "nickname": "ณัฐ",
    "gender": "male",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 23,
    "birthDate": "2016-10-14",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.54,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "068-222-2374",
    "parentName": "นางวลินดา ซาบุ",
    "parentPhone": "088-201-2954",
    "address": "บ้านเลขที่ 201 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": true,
    "disabilityType": "ออทิสติก",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-024",
    "studentCode": "2889",
    "citizenId": "1-6490-00054-14-4",
    "prefix": "เด็กหญิง",
    "firstName": "กมลรัตน์",
    "lastName": "ดำรงค์",
    "nickname": "มน",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 24,
    "birthDate": "2017-08-28",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.91,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "069-223-2391",
    "parentName": "นางรจนา บุญเรือง",
    "parentPhone": "084-149-2889",
    "address": "บ้านเลขที่ 149 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-025",
    "studentCode": "2890",
    "citizenId": "1-6490-00054-38-1",
    "prefix": "เด็กหญิง",
    "firstName": "เพ็ญพิชชา",
    "lastName": "บุญเรือง",
    "nickname": "เพ็ญ",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 25,
    "birthDate": "2017-10-14",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.28,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "062-224-2408",
    "parentName": "นางจิรวรรณ คงรอด",
    "parentPhone": "084-491-2890",
    "address": "บ้านเลขที่ 149/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-026",
    "studentCode": "2903",
    "citizenId": "1-6490-00054-92-6",
    "prefix": "เด็กหญิง",
    "firstName": "ฉัตรชนก",
    "lastName": "มากมี",
    "nickname": "นก",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2018-03-09",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.65,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "063-225-2425",
    "parentName": "นางเข็มทอง สีใจ",
    "parentPhone": "087-992-2903",
    "address": "บ้านเลขที่ 299/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-027",
    "studentCode": "2933",
    "citizenId": "1-5399-01315-01-1",
    "prefix": "เด็กหญิง",
    "firstName": "ฐิตาภรณ์",
    "lastName": "กาฝาก",
    "nickname": "ต่าย",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2017-12-27",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.42,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "064-226-2442",
    "parentName": "นางรัตติยากรณ์ เทพจัน",
    "parentPhone": "087-070-2933",
    "address": "บ้านเลขที่ 70 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-028",
    "studentCode": "2942",
    "citizenId": "1-6490-00053-95-4",
    "prefix": "เด็กหญิง",
    "firstName": "จีราพัชร",
    "lastName": "หลักฐาน",
    "nickname": "พัชร",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2017-07-28",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.79,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "065-227-2459",
    "parentName": "นางชนกานต์ ศรีสังงาม",
    "parentPhone": "086-232-2942",
    "address": "บ้านเลขที่ 232 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-029",
    "studentCode": "2943",
    "citizenId": "1-2090-01071-11-9",
    "prefix": "เด็กหญิง",
    "firstName": "นันตภรณ์",
    "lastName": "สอนโต",
    "nickname": "นัน",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2018-05-11",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.16,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "066-228-2476",
    "parentName": "นางประดับ สอนโต",
    "parentPhone": "087-308-2943",
    "address": "บ้านเลขที่ 308 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-030",
    "studentCode": "2944",
    "citizenId": "1-6489-00228-35-1",
    "prefix": "เด็กหญิง",
    "firstName": "พิมพ์ชนก",
    "lastName": "สาแดง",
    "nickname": "พิมพ์",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2017-06-04",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.53,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "067-229-2493",
    "parentName": "นางพิมพ์นิภา แตงทอง",
    "parentPhone": "088-431-2944",
    "address": "บ้านเลขที่ 431 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-031",
    "studentCode": "2945",
    "citizenId": "1-6489-00229-18-7",
    "prefix": "เด็กหญิง",
    "firstName": "พีชญา",
    "lastName": "รอดอยู่",
    "nickname": "พีช",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2017-06-30",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.9,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "068-230-2510",
    "parentName": "นางพิชนาฎ พรมอิน",
    "parentPhone": "089-076-2945",
    "address": "บ้านเลขที่ 76 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-032",
    "studentCode": "2946",
    "citizenId": "1-6489-00235-56-0",
    "prefix": "เด็กหญิง",
    "firstName": "อรุณวรรณ",
    "lastName": "ป้อมอ่อน",
    "nickname": "วรรณ",
    "gender": "female",
    "grade": "ป.2",
    "classroom": "ป.2/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2018-01-11",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.67,
    "advisorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "phoneNumber": "069-231-2527",
    "parentName": "นายบุญเชิด ป้อมอ่อน",
    "parentPhone": "081-173-2946",
    "address": "บ้านเลขที่ 173 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-033",
    "studentCode": "2891",
    "citizenId": "1-6490-00052-52-4",
    "prefix": "เด็กชาย",
    "firstName": "อรรถพล",
    "lastName": "ศรีวิไล",
    "nickname": "อาร์ท",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2016-10-10",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.04,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "062-232-2544",
    "parentName": "นางรจนา บุญเรือง",
    "parentPhone": "085-209-2891",
    "address": "บ้านเลขที่ 209 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางการเรียนรู้",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-034",
    "studentCode": "2892",
    "citizenId": "1-6490-00053-56-3",
    "prefix": "เด็กชาย",
    "firstName": "ปัญญากร",
    "lastName": "แก้วมรศรี",
    "nickname": "กร",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2017-05-07",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.41,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "063-233-2561",
    "parentName": "นางบุญเรียน วิไลลักษณ์",
    "parentPhone": "086-021-2892",
    "address": "บ้านเลขที่ 21 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางการเรียนรู้",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-035",
    "studentCode": "2899",
    "citizenId": "1-6698-00469-76-4",
    "prefix": "เด็กชาย",
    "firstName": "เจษฎา",
    "lastName": "ชัยดี",
    "nickname": "เจษ",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2016-10-27",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.78,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "064-234-2578",
    "parentName": "นางฟอง ปัญญามูล",
    "parentPhone": "084-061-2899",
    "address": "บ้านเลขที่ 406/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-036",
    "studentCode": "2904",
    "citizenId": "1-5399-01294-34-1",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐวัจน์",
    "lastName": "วงศ์ลี",
    "nickname": "นัท",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2017-04-10",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.55,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "065-235-2595",
    "parentName": "นายณัฐพนธ์ วงศ์ลี",
    "parentPhone": "088-129-2904",
    "address": "บ้านเลขที่ 129 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-037",
    "studentCode": "2905",
    "citizenId": "1-5399-01270-29-8",
    "prefix": "เด็กชาย",
    "firstName": "ธนาธิป",
    "lastName": "เชื้ออินทร์",
    "nickname": "ธิป",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2016-05-25",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.92,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "066-236-2612",
    "parentName": "นางอำพร เทพวัน",
    "parentPhone": "089-025-2905",
    "address": "บ้านเลขที่ 25 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-038",
    "studentCode": "2907",
    "citizenId": "1-5399-01284-05-1",
    "prefix": "เด็กชาย",
    "firstName": "อดิศร",
    "lastName": "กำนนท์",
    "nickname": "ศร",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 13,
    "birthDate": "2016-11-16",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.29,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "067-237-2629",
    "parentName": "นางอดิศา ดีประดับ",
    "parentPhone": "082-432-2907",
    "address": "บ้านเลขที่ 432 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-039",
    "studentCode": "2908",
    "citizenId": "1-2090-00976-22-3",
    "prefix": "เด็กชาย",
    "firstName": "อิทธิพัทธ์",
    "lastName": "ช่างกลึงคุณ",
    "nickname": "พัทธ์",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 14,
    "birthDate": "2016-12-17",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.66,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "068-238-2646",
    "parentName": "นางหอม เจริญใจ",
    "parentPhone": "083-353-2908",
    "address": "บ้านเลขที่ 353 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางการเรียนรู้",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-040",
    "studentCode": "2930",
    "citizenId": "1-5399-01274-02-1",
    "prefix": "เด็กชาย",
    "firstName": "ปราโมทย์",
    "lastName": "ระบอบ",
    "nickname": "โมทย์",
    "gender": "male",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 15,
    "birthDate": "2016-07-14",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.43,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "069-239-2663",
    "parentName": "นายเจริญ หลักฐาน",
    "parentPhone": "084-058-2930",
    "address": "บ้านเลขที่ 58 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-041",
    "studentCode": "2859",
    "citizenId": "1-5399-01289-31-2",
    "prefix": "เด็กหญิง",
    "firstName": "ขณิตฐา",
    "lastName": "สีทำ",
    "nickname": "ฐา",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 16,
    "birthDate": "2017-01-25",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.8,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "062-240-2680",
    "parentName": "นางเพ็ญนภา ทองศรี",
    "parentPhone": "084-491-2859",
    "address": "บ้านเลขที่ 149/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-042",
    "studentCode": "2909",
    "citizenId": "1-5399-01288-85-5",
    "prefix": "เด็กหญิง",
    "firstName": "ขวัญเนตร",
    "lastName": "สุวรรณรัตน์",
    "nickname": "เนตร",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 17,
    "birthDate": "2017-01-18",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.17,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "063-241-2697",
    "parentName": "นางขวัญแก้ว แหลมหลัก",
    "parentPhone": "084-791-2909",
    "address": "บ้านเลขที่ 179/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-043",
    "studentCode": "2910",
    "citizenId": "1-1206-01196-05-5",
    "prefix": "เด็กหญิง",
    "firstName": "ปริศนา",
    "lastName": "สังงิ้ว",
    "nickname": "นา",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 18,
    "birthDate": "2017-02-22",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.54,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "064-242-2714",
    "parentName": "นายอุดร สังงิ้ว",
    "parentPhone": "084-165-2910",
    "address": "บ้านเลขที่ 165 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-044",
    "studentCode": "2911",
    "citizenId": "1-6490-00052-22-2",
    "prefix": "เด็กหญิง",
    "firstName": "ประนัดดา",
    "lastName": "บุญมาแลบ",
    "nickname": "ดา",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 19,
    "birthDate": "2016-08-24",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.91,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "065-243-2731",
    "parentName": "นางมะลิวรรณ เกิดมี",
    "parentPhone": "085-045-2911",
    "address": "บ้านเลขที่ 45 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-045",
    "studentCode": "2912",
    "citizenId": "1-3082-00174-60-9",
    "prefix": "เด็กหญิง",
    "firstName": "เนตรนภา",
    "lastName": "คำมี",
    "nickname": "เนตร",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 20,
    "birthDate": "2017-04-30",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.68,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "066-244-2748",
    "parentName": "นางลูกชิ้น สวัสดี",
    "parentPhone": "086-257-2912",
    "address": "บ้านเลขที่ 257 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-046",
    "studentCode": "2913",
    "citizenId": "1-5399-01280-69-2",
    "prefix": "เด็กหญิง",
    "firstName": "มัลลิกา",
    "lastName": "มิ่งด่าง",
    "nickname": "ลิกา",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 21,
    "birthDate": "2016-10-03",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.05,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "067-245-2765",
    "parentName": "นางอรวรรณ คำเพ็ง",
    "parentPhone": "087-054-2913",
    "address": "บ้านเลขที่ 54 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-047",
    "studentCode": "2914",
    "citizenId": "1-5399-01276-23-7",
    "prefix": "เด็กหญิง",
    "firstName": "อธิชา",
    "lastName": "กระเรียงดี",
    "nickname": "ธิชา",
    "gender": "female",
    "grade": "ป.3",
    "classroom": "ป.3/1",
    "roomNumber": 1,
    "seatNumber": 22,
    "birthDate": "2016-08-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.42,
    "advisorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "phoneNumber": "068-246-2782",
    "parentName": "นางสุภลักษณ์ เปี่ยมสุข",
    "parentPhone": "088-681-2914",
    "address": "บ้านเลขที่ 268/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-048",
    "studentCode": "2841",
    "citizenId": "1-1102-01459-81-4",
    "prefix": "เด็กชาย",
    "firstName": "สิรวิชญ์",
    "lastName": "แหลมหลัก",
    "nickname": "วิชญ์",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 23,
    "birthDate": "2015-10-01",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.79,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "069-247-2799",
    "parentName": "นางลำดวน แหลมหลัก",
    "parentPhone": "085-061-2841",
    "address": "บ้านเลขที่ 61 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-049",
    "studentCode": "2869",
    "citizenId": "1-1007-04584-68-6",
    "prefix": "เด็กชาย",
    "firstName": "อนันตชัย",
    "lastName": "แหลมหลัก",
    "nickname": "ชัย",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 24,
    "birthDate": "2015-10-03",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.56,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "062-248-2816",
    "parentName": "นางทองพวน แหลมหลัก",
    "parentPhone": "084-042-2869",
    "address": "บ้านเลขที่ 4/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-050",
    "studentCode": "2872",
    "citizenId": "1-5698-00028-98-0",
    "prefix": "เด็กชาย",
    "firstName": "ศุรกิตติ์",
    "lastName": "กล่ำดี",
    "nickname": "กิต",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 25,
    "birthDate": "2015-06-08",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.93,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "063-249-2833",
    "parentName": "นางจีรนุช สุขแสน",
    "parentPhone": "086-291-2872",
    "address": "บ้านเลขที่ 291 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-051",
    "studentCode": "2873",
    "citizenId": "1-5399-01269-01-0",
    "prefix": "เด็กชาย",
    "firstName": "รัชชานนท์",
    "lastName": "สีดี",
    "nickname": "นนท์",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2016-05-08",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.3,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "064-250-2850",
    "parentName": "นางจุฑารัตน์ เอี่ยมสอาด",
    "parentPhone": "087-425-2873",
    "address": "บ้านเลขที่ 425 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-052",
    "studentCode": "2874",
    "citizenId": "1-5399-01264-36-1",
    "prefix": "เด็กชาย",
    "firstName": "ภีรภัทร",
    "lastName": "นงลักษณ์",
    "nickname": "ภัทร",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2016-03-01",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.67,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "065-251-2867",
    "parentName": "นางติ๋ม บุญกรม",
    "parentPhone": "088-151-2874",
    "address": "บ้านเลขที่ 15/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-053",
    "studentCode": "2875",
    "citizenId": "1-1043-01592-20-0",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐพงศ์",
    "lastName": "ทิพย์รัตน์",
    "nickname": "พงศ์",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2015-10-15",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.44,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "066-252-2884",
    "parentName": "นางธิดารัตน์ นมารัง",
    "parentPhone": "089-162-2875",
    "address": "บ้านเลขที่ 162 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-054",
    "studentCode": "2876",
    "citizenId": "1-5399-01246-98-2",
    "prefix": "เด็กชาย",
    "firstName": "สิทธิโชค",
    "lastName": "ทิมเที่ยง",
    "nickname": "โชค",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2015-07-21",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.81,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "067-253-2901",
    "parentName": "นางวัฒนา อินต๊ะเสถียร",
    "parentPhone": "081-432-2876",
    "address": "บ้านเลขที่ 243/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-055",
    "studentCode": "2929",
    "citizenId": "1-6597-00083-32-5",
    "prefix": "เด็กชาย",
    "firstName": "อธิวัฒน์",
    "lastName": "แก่นโงน",
    "nickname": "วัฒน์",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2015-05-20",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.18,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "068-254-2918",
    "parentName": "นางอรนิสา บาลีใหญ่",
    "parentPhone": "084-030-2929",
    "address": "บ้านเลขที่ 30 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-056",
    "studentCode": "2871",
    "citizenId": "1-7798-00511-13-1",
    "prefix": "เด็กชาย",
    "firstName": "จุลจักร",
    "lastName": "จีนบุญมี",
    "nickname": "จักร",
    "gender": "male",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2015-10-12",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.55,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "069-255-2935",
    "parentName": "นางสมจิตร จีนบุญมี",
    "parentPhone": "085-039-2871",
    "address": "บ้านเลขที่ 39 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-057",
    "studentCode": "2860",
    "citizenId": "1-6490-00050-38-6",
    "prefix": "เด็กหญิง",
    "firstName": "จิราพร",
    "lastName": "นามวิชา",
    "nickname": "พร",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2015-06-28",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.92,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "062-256-2952",
    "parentName": "นางน้ำฝน จันทร์มูล",
    "parentPhone": "084-001-2860",
    "address": "บ้านเลขที่ 1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-058",
    "studentCode": "2882",
    "citizenId": "1-5399-01267-01-7",
    "prefix": "เด็กหญิง",
    "firstName": "วิภาวดี",
    "lastName": "ปันดิ",
    "nickname": "วดี",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2016-04-10",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.69,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "063-257-2969",
    "parentName": "นางไฝ แจ่มแจ้ง",
    "parentPhone": "086-212-2882",
    "address": "บ้านเลขที่ 212 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-059",
    "studentCode": "2877",
    "citizenId": "1-5399-01267-28-9",
    "prefix": "เด็กหญิง",
    "firstName": "เมษา",
    "lastName": "ก่อนสาย",
    "nickname": "เมย์",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2016-04-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.06,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "064-258-2986",
    "parentName": "นางรำแพน เมืองมูล",
    "parentPhone": "082-401-2877",
    "address": "บ้านเลขที่ 40/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางการเรียนรู้",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-060",
    "studentCode": "2878",
    "citizenId": "1-2097-03006-02-3",
    "prefix": "เด็กหญิง",
    "firstName": "กัญญณัช",
    "lastName": "เปรมศรี",
    "nickname": "ณัช",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2015-09-21",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.43,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "065-259-3003",
    "parentName": "นางชุติมา ประดับผล",
    "parentPhone": "083-448-2878",
    "address": "บ้านเลขที่ 448 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-061",
    "studentCode": "2879",
    "citizenId": "1-5399-01253-68-7",
    "prefix": "เด็กหญิง",
    "firstName": "สุพัตรา",
    "lastName": "จันทร์แป้น",
    "nickname": "แพรว",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2015-10-13",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.8,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "066-260-3020",
    "parentName": "นางอรวรรณ คำเพ็ง",
    "parentPhone": "084-661-2879",
    "address": "บ้านเลขที่ 66/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-062",
    "studentCode": "2880",
    "citizenId": "1-5399-01259-09-0",
    "prefix": "เด็กหญิง",
    "firstName": "อาฑิตยา",
    "lastName": "พัฒนสาตร์",
    "nickname": "ออย",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2015-12-20",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.57,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "067-261-3037",
    "parentName": "นางพินธ์ กระเรียงดี",
    "parentPhone": "084-268-2880",
    "address": "บ้านเลขที่ 268 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-063",
    "studentCode": "2863",
    "citizenId": "1-5399-01244-36-0",
    "prefix": "เด็กหญิง",
    "firstName": "ณัฐวรา",
    "lastName": "แก้วนาคแนว",
    "nickname": "วรา",
    "gender": "female",
    "grade": "ป.4",
    "classroom": "ป.4/1",
    "roomNumber": 1,
    "seatNumber": 13,
    "birthDate": "2015-06-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.94,
    "advisorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "phoneNumber": "068-262-3054",
    "parentName": "นางสนิด หลักฐาน",
    "parentPhone": "087-051-2863",
    "address": "บ้านเลขที่ 51 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-064",
    "studentCode": "2804",
    "citizenId": "1-5399-01218-40-7",
    "prefix": "เด็กชาย",
    "firstName": "ปาฏิหาริย์",
    "lastName": "นามวิชา",
    "nickname": "มาร์ค",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 14,
    "birthDate": "2014-08-15",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.31,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "069-263-3071",
    "parentName": "นางเจนจิรา จันทร์แฝง",
    "parentPhone": "088-172-2804",
    "address": "บ้านเลขที่ 172 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-065",
    "studentCode": "2805",
    "citizenId": "1-5399-01203-54-0",
    "prefix": "เด็กชาย",
    "firstName": "วรพจน์",
    "lastName": "ฝ่ายลุย",
    "nickname": "พจน์",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 15,
    "birthDate": "2014-02-11",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.68,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "062-264-3088",
    "parentName": "นางสุกัญญา ซาทรง",
    "parentPhone": "089-461-2805",
    "address": "บ้านเลขที่ 346/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-066",
    "studentCode": "2839",
    "citizenId": "1-5399-01230-60-1",
    "prefix": "เด็กชาย",
    "firstName": "กีรติ",
    "lastName": "มากดี",
    "nickname": "กอล์ฟ",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 16,
    "birthDate": "2014-12-20",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.45,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "063-265-3105",
    "parentName": "นางกานต์ธิดา ปาจี๋",
    "parentPhone": "084-183-2839",
    "address": "บ้านเลขที่ 183 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-067",
    "studentCode": "2840",
    "citizenId": "1-1034-00311-88-7",
    "prefix": "เด็กชาย",
    "firstName": "ธนชาติ",
    "lastName": "ปัญญาจันทร์",
    "nickname": "ชาติ",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 17,
    "birthDate": "2014-06-12",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.82,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "064-266-3122",
    "parentName": "นายณธัช ปัญญาจันทร์",
    "parentPhone": "084-461-2840",
    "address": "บ้านเลขที่ 146/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-068",
    "studentCode": "2847",
    "citizenId": "1-5399-01220-01-1",
    "prefix": "เด็กชาย",
    "firstName": "ลักษณวัศ",
    "lastName": "จันทร์มา",
    "nickname": "วัศ",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 18,
    "birthDate": "2014-09-01",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.19,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "065-267-3139",
    "parentName": "นางปราณี เชิดชู",
    "parentPhone": "082-571-2847",
    "address": "บ้านเลขที่ 57/1 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-069",
    "studentCode": "2848",
    "citizenId": "1-6490-00049-99-0",
    "prefix": "เด็กชาย",
    "firstName": "วรวรรธน์",
    "lastName": "เกตุสิทธิ์",
    "nickname": "วรรธน์",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 19,
    "birthDate": "2015-03-24",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.56,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "066-268-3156",
    "parentName": "นางตุ๊ สีใจ",
    "parentPhone": "083-283-2848",
    "address": "บ้านเลขที่ 283 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางการเรียนรู้",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-070",
    "studentCode": "2849",
    "citizenId": "1-1007-04540-91-3",
    "prefix": "เด็กชาย",
    "firstName": "พงศ์พล",
    "lastName": "พาชาวนา",
    "nickname": "พล",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 20,
    "birthDate": "2015-01-29",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.93,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "067-269-3173",
    "parentName": "นางลัดดา พาชาวนา",
    "parentPhone": "084-295-2849",
    "address": "บ้านเลขที่ 295 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-071",
    "studentCode": "2806",
    "citizenId": "1-6489-00189-28-2",
    "prefix": "เด็กชาย",
    "firstName": "ภูตะวัน",
    "lastName": "ชัยวงค์",
    "nickname": "ตะวัน",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 21,
    "birthDate": "2014-06-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.7,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "068-270-3190",
    "parentName": "นายวิชิต ชัยวงค์",
    "parentPhone": "081-024-2806",
    "address": "บ้านเลขที่ 24 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-072",
    "studentCode": "2883",
    "citizenId": "1-5399-01202-22-5",
    "prefix": "เด็กชาย",
    "firstName": "ธนวัฒน์",
    "lastName": "สีดี",
    "nickname": "วัฒน์",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 22,
    "birthDate": "2014-01-23",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.07,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "069-271-3207",
    "parentName": "นางนิธิตา สีดี",
    "parentPhone": "087-402-2883",
    "address": "บ้านเลขที่ 402 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-073",
    "studentCode": "2917",
    "citizenId": "1-5399-01239-08-1",
    "prefix": "เด็กชาย",
    "firstName": "กัมปนาท",
    "lastName": "จีนดา",
    "nickname": "กัม",
    "gender": "male",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 23,
    "birthDate": "2015-04-10",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.44,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "062-272-3224",
    "parentName": "นางขวัญใจ กลิ่นอ้น",
    "parentPhone": "082-191-2917",
    "address": "บ้านเลขที่ 119/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-074",
    "studentCode": "2829",
    "citizenId": "1-5399-01202-13-6",
    "prefix": "เด็กหญิง",
    "firstName": "อรุโณทัย",
    "lastName": "เม้าราษี",
    "nickname": "ทัย",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 24,
    "birthDate": "2014-01-21",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.81,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "063-273-3241",
    "parentName": "นางสุรัดดา เอี่ยมโอน",
    "parentPhone": "084-219-2829",
    "address": "บ้านเลขที่ 219 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-075",
    "studentCode": "2828",
    "citizenId": "1-5399-01211-48-8",
    "prefix": "เด็กหญิง",
    "firstName": "รัชกร",
    "lastName": "มุ่ยพันธ์",
    "nickname": "กร",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 25,
    "birthDate": "2014-05-22",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.58,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "064-274-3258",
    "parentName": "นางยุภาพร คำอยู่",
    "parentPhone": "083-374-2828",
    "address": "บ้านเลขที่ 374 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-076",
    "studentCode": "2850",
    "citizenId": "1-6490-00048-98-5",
    "prefix": "เด็กหญิง",
    "firstName": "กรรจนา",
    "lastName": "อินทร์ต๊ะวิชัย",
    "nickname": "จนา",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2014-08-02",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.95,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "065-275-3275",
    "parentName": "นางวันนา อินทร์ต๊ะวิชัย",
    "parentPhone": "084-311-2850",
    "address": "บ้านเลขที่ 311 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-077",
    "studentCode": "2851",
    "citizenId": "1-5399-01232-70-1",
    "prefix": "เด็กหญิง",
    "firstName": "ชุติกาญจน์",
    "lastName": "อุดมลาภ",
    "nickname": "การ์ตูน",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2015-01-17",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.32,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "066-276-3292",
    "parentName": "นางสุภา อุดมลาภ",
    "parentPhone": "085-029-2851",
    "address": "บ้านเลขที่ 29 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-078",
    "studentCode": "2852",
    "citizenId": "1-5399-01231-16-1",
    "prefix": "เด็กหญิง",
    "firstName": "ธัญญรัตน์",
    "lastName": "มั่งคั่ง",
    "nickname": "หญิง",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2014-12-28",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.69,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "067-277-3309",
    "parentName": "นางสุนันท์ พิสะโสระ",
    "parentPhone": "086-169-2852",
    "address": "บ้านเลขที่ 169 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-079",
    "studentCode": "2853",
    "citizenId": "1-6489-00199-35-1",
    "prefix": "เด็กหญิง",
    "firstName": "ณัฐชยา",
    "lastName": "เอมกริช",
    "nickname": "นัท",
    "gender": "female",
    "grade": "ป.5",
    "classroom": "ป.5/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2015-03-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.46,
    "advisorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "phoneNumber": "068-278-3326",
    "parentName": "นางโสม ดีประดับ",
    "parentPhone": "087-432-2853",
    "address": "บ้านเลขที่ 432 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-080",
    "studentCode": "2772",
    "citizenId": "1-1034-00290-73-1",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐพงค์",
    "lastName": "อุตส่าห์",
    "nickname": "พงค์",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2013-10-09",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.83,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "069-279-3343",
    "parentName": "นายชุมพล อุตส่าห์",
    "parentPhone": "086-061-2772",
    "address": "บ้านเลขที่ 106/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-081",
    "studentCode": "2791",
    "citizenId": "1-6489-00177-64-1",
    "prefix": "เด็กชาย",
    "firstName": "เตชิต",
    "lastName": "สุดสาย",
    "nickname": "เต",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2013-08-06",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.2,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "062-280-3360",
    "parentName": "นายต้อม สุดสาย",
    "parentPhone": "085-298-2791",
    "address": "บ้านเลขที่ 298 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-082",
    "studentCode": "2825",
    "citizenId": "1-2199-01516-44-3",
    "prefix": "เด็กชาย",
    "firstName": "ธนภัทร",
    "lastName": "ชัยยา",
    "nickname": "ภัทร",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2013-11-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.57,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "063-281-3377",
    "parentName": "นางสุนัทธิดา ชัยยา",
    "parentPhone": "089-015-2825",
    "address": "บ้านเลขที่ 15 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-083",
    "studentCode": "2827",
    "citizenId": "1-6490-00047-18-1",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐวัฒน์",
    "lastName": "คงจีน",
    "nickname": "วัฒน์",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2013-07-29",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.94,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "064-282-3394",
    "parentName": "นางทิพย์วรรณ เอี่ยมโอน",
    "parentPhone": "082-208-2827",
    "address": "บ้านเลขที่ 208 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-084",
    "studentCode": "2837",
    "citizenId": "1-5399-01205-44-5",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐวัส",
    "lastName": "สุกใส",
    "nickname": "วัส",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2014-03-07",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.71,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "065-283-3411",
    "parentName": "นางประนอม สุกใส",
    "parentPhone": "082-741-2837",
    "address": "บ้านเลขที่ 74/1 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-085",
    "studentCode": "2773",
    "citizenId": "1-6490-00047-07-5",
    "prefix": "เด็กชาย",
    "firstName": "ภูมิพัฒน์",
    "lastName": "ปันดิ",
    "nickname": "ภูมิ",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2013-07-05",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.08,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "066-284-3428",
    "parentName": "นางวัน ปันดิ",
    "parentPhone": "087-102-2773",
    "address": "บ้านเลขที่ 102 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-086",
    "studentCode": "2969",
    "citizenId": "1-8499-02544-88-7",
    "prefix": "เด็กชาย",
    "firstName": "ภูรินทร์",
    "lastName": "ส่งประเสริฐ",
    "nickname": "รินทร์",
    "gender": "male",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2014-04-16",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.45,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "067-285-3445",
    "parentName": "นางสุภาพร ส่งประเสริฐ",
    "parentPhone": "084-940-2969",
    "address": "บ้านเลขที่ 29/40 หมู่ 5 ชุมชน/ถ.วังหิน ต.ดอนสัก อ.ดอนสัก จ.สุราษฎร์ธานี",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-087",
    "studentCode": "2802",
    "citizenId": "1-5101-01667-89-6",
    "prefix": "เด็กหญิง",
    "firstName": "อาทิติยา",
    "lastName": "นามวิชา",
    "nickname": "ติยา",
    "gender": "female",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2013-07-07",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.82,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "068-286-3462",
    "parentName": "นายนฤมิตร นามวิชา",
    "parentPhone": "086-000-2802",
    "address": "บ้านเลขที่ 0 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-088",
    "studentCode": "2838",
    "citizenId": "1-5399-01192-87-4",
    "prefix": "เด็กหญิง",
    "firstName": "ทิพสุดา",
    "lastName": "บุญกรม",
    "nickname": "ทิพย์",
    "gender": "female",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 13,
    "birthDate": "2013-10-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.59,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "069-287-3479",
    "parentName": "นางกฤษณา บุญกรม",
    "parentPhone": "083-276-2838",
    "address": "บ้านเลขที่ 276 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-089",
    "studentCode": "2864",
    "citizenId": "1-1399-00740-98-7",
    "prefix": "เด็กหญิง",
    "firstName": "พัณณิตา",
    "lastName": "ตลับโพธิ์",
    "nickname": "ณิชา",
    "gender": "female",
    "grade": "ป.6",
    "classroom": "ป.6/1",
    "roomNumber": 1,
    "seatNumber": 14,
    "birthDate": "2013-06-18",
    "bloodType": "A",
    "religion": "พุทธ",
    "gpax": 2.96,
    "advisorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "phoneNumber": "062-288-3496",
    "parentName": "นางหนึ่งฤทัย อู่ไทย",
    "parentPhone": "088-237-2864",
    "address": "บ้านเลขที่ 237 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-090",
    "studentCode": "2764",
    "citizenId": "1-7698-00155-74-2",
    "prefix": "เด็กชาย",
    "firstName": "วสันต์",
    "lastName": "ราชชาย",
    "nickname": "สันต์",
    "gender": "male",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 15,
    "birthDate": "2012-01-17",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.33,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "063-289-3513",
    "parentName": "นายพิสิต วรรณศิลป์",
    "parentPhone": "088-241-2764",
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-091",
    "studentCode": "2793",
    "citizenId": "1-5399-01156-11-8",
    "prefix": "เด็กชาย",
    "firstName": "พงศกร",
    "lastName": "ถานคร",
    "nickname": "กร",
    "gender": "male",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 16,
    "birthDate": "2012-09-06",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.7,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "064-290-3530",
    "parentName": "นายสมบัติ ถานคร",
    "parentPhone": "087-274-2793",
    "address": "บ้านเลขที่ 274 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-092",
    "studentCode": "2919",
    "citizenId": "1-5399-01179-05-3",
    "prefix": "เด็กชาย",
    "firstName": "ธนวัฒน์",
    "lastName": "โถปิก",
    "nickname": "วัฒน์",
    "gender": "male",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 17,
    "birthDate": "2013-05-06",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.47,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "065-291-3547",
    "parentName": "นางปราณี เรืองเกิด",
    "parentPhone": "084-394-2919",
    "address": "บ้านเลขที่ 394 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-093",
    "studentCode": "2956",
    "citizenId": "1-6489-00161-69-8",
    "prefix": "เด็กชาย",
    "firstName": "ณัฐพร",
    "lastName": "ปานยิ้ม",
    "nickname": "พร",
    "gender": "male",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 18,
    "birthDate": "2012-06-10",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.84,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "066-292-3564",
    "parentName": "นางณัฐธิดา คล้ายบุญโต",
    "parentPhone": "081-000-2956",
    "address": "หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-094",
    "studentCode": "2771",
    "citizenId": "1-6490-00044-70-0",
    "prefix": "เด็กหญิง",
    "firstName": "วรรณิดา",
    "lastName": "บุญมาแลบ",
    "nickname": "ดา",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 19,
    "birthDate": "2012-06-06",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.21,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "067-293-3581",
    "parentName": "นายนิพล บุญมาแลบ",
    "parentPhone": "085-045-2771",
    "address": "บ้านเลขที่ 45 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-095",
    "studentCode": "2769",
    "citizenId": "1-6490-00043-71-1",
    "prefix": "เด็กหญิง",
    "firstName": "อดิศา",
    "lastName": "ตุ่นทอง",
    "nickname": "สา",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 20,
    "birthDate": "2012-01-06",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.58,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "068-294-3598",
    "parentName": "นายณรงค์ ตุ่นทอง",
    "parentPhone": "084-343-2769",
    "address": "บ้านเลขที่ 343 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-096",
    "studentCode": "2798",
    "citizenId": "1-6490-00045-02-1",
    "prefix": "เด็กหญิง",
    "firstName": "พิทยาภรณ์",
    "lastName": "บุญเรือง",
    "nickname": "ภรณ์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 21,
    "birthDate": "2012-07-18",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.95,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "069-295-3615",
    "parentName": "นายดำรงค์ บุญเรือง",
    "parentPhone": "083-491-2798",
    "address": "บ้านเลขที่ 149/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-097",
    "studentCode": "2799",
    "citizenId": "1-6490-00044-26-2",
    "prefix": "เด็กหญิง",
    "firstName": "วิชาดา",
    "lastName": "ศรีสังงาม",
    "nickname": "ดา",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 22,
    "birthDate": "2012-04-10",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.72,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "062-296-3632",
    "parentName": "นายวิเชียร ศรีสังงาม",
    "parentPhone": "084-209-2799",
    "address": "บ้านเลขที่ 209 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-098",
    "studentCode": "2797",
    "citizenId": "1-6490-00045-95-1",
    "prefix": "เด็กหญิง",
    "firstName": "อุกฤษรินทร์",
    "lastName": "อินต๊ะเสถียร",
    "nickname": "รินทร์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 23,
    "birthDate": "2012-04-19",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.09,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "063-297-3649",
    "parentName": "นายอนุพงศ์ อินต๊ะเสถียร",
    "parentPhone": "082-243-2797",
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-099",
    "studentCode": "2800",
    "citizenId": "1-5399-01155-65-1",
    "prefix": "เด็กหญิง",
    "firstName": "อารยา",
    "lastName": "สีใจ",
    "nickname": "ยา",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 24,
    "birthDate": "2012-09-02",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.46,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "064-298-3666",
    "parentName": "นายสีแพร สีใจ",
    "parentPhone": "084-213-2800",
    "address": "บ้านเลขที่ 213 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-100",
    "studentCode": "2801",
    "citizenId": "1-5399-01166-90-3",
    "prefix": "เด็กหญิง",
    "firstName": "ธันญาภรณ์",
    "lastName": "พลรอด",
    "nickname": "ธัญญ่า",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 25,
    "birthDate": "2012-12-21",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.83,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "065-299-3683",
    "parentName": "นางเรวดี พลรอด",
    "parentPhone": "085-158-2801",
    "address": "บ้านเลขที่ 158 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-101",
    "studentCode": "2822",
    "citizenId": "1-6490-00044-91-2",
    "prefix": "เด็กหญิง",
    "firstName": "ปภาวดี",
    "lastName": "หลักฐาน",
    "nickname": "วดี",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2012-07-07",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.6,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "066-300-3700",
    "parentName": "นางชนกานต์ ศรีสังงาม",
    "parentPhone": "086-232-2822",
    "address": "บ้านเลขที่ 232 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-102",
    "studentCode": "2812",
    "citizenId": "1-5399-01170-82-0",
    "prefix": "เด็กหญิง",
    "firstName": "วิรพร",
    "lastName": "สงวนอักษร",
    "nickname": "พร",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2013-01-29",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.97,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "067-301-3717",
    "parentName": "นางวรรณา ไชยา",
    "parentPhone": "086-157-2812",
    "address": "บ้านเลขที่ 157 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-103",
    "studentCode": "2884",
    "citizenId": "1-6490-00046-47-8",
    "prefix": "เด็กหญิง",
    "firstName": "พิชชานันท์",
    "lastName": "หินชุย",
    "nickname": "นันท์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2013-03-01",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.34,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "068-302-3734",
    "parentName": "นางพุชดี อินต๊ะเสถียร",
    "parentPhone": "088-243-2884",
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-104",
    "studentCode": "2920",
    "citizenId": "1-5399-01168-50-7",
    "prefix": "เด็กหญิง",
    "firstName": "ทิพย์รัตน์",
    "lastName": "เขียวคง",
    "nickname": "รัตน์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2013-01-05",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.71,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "069-303-3751",
    "parentName": "นางวรรณวษา กันพงษ์",
    "parentPhone": "084-365-2920",
    "address": "บ้านเลขที่ 365 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-105",
    "studentCode": "2921",
    "citizenId": "1-7399-02648-37-3",
    "prefix": "เด็กหญิง",
    "firstName": "ชนสิพัชญ์",
    "lastName": "วิรุณพันธ์",
    "nickname": "พัชญ์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2013-05-11",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.48,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "062-304-3768",
    "parentName": "นางยุพา วิรุณพันธ์",
    "parentPhone": "085-019-2921",
    "address": "บ้านเลขที่ 19 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-106",
    "studentCode": "2959",
    "citizenId": "1-1499-01282-73-7",
    "prefix": "เด็กหญิง",
    "firstName": "ชุดารัตน์",
    "lastName": "แสงศรี",
    "nickname": "ดารัตน์",
    "gender": "female",
    "grade": "ม.1",
    "classroom": "ม.1/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2012-10-02",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.85,
    "advisorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "phoneNumber": "063-305-3785",
    "parentName": "นางลักษกา มูลแก้ว",
    "parentPhone": "084-191-2959",
    "address": "บ้านเลขที่ 191 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-107",
    "studentCode": "2765",
    "citizenId": "1-6589-00025-41-7",
    "prefix": "เด็กชาย",
    "firstName": "เชาวฤทธิ์",
    "lastName": "มยุเรศ",
    "nickname": "เชาว์",
    "gender": "male",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2011-08-23",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.22,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "064-306-3802",
    "parentName": "นายอำนาจ มยุเรศ",
    "parentPhone": "089-180-2765",
    "address": "บ้านเลขที่ 180 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-108",
    "studentCode": "2775",
    "citizenId": "1-2194-00057-12-8",
    "prefix": "เด็กชาย",
    "firstName": "ไกรภพ",
    "lastName": "เหล็กมั่น",
    "nickname": "ภพ",
    "gender": "male",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2011-09-14",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.59,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "065-307-3819",
    "parentName": "นายถาวร เหล็กมั่น",
    "parentPhone": "089-375-2775",
    "address": "บ้านเลขที่ 375 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "risk",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-109",
    "studentCode": "2788",
    "citizenId": "1-6501-01154-72-3",
    "prefix": "เด็กชาย",
    "firstName": "ยุทธนันท์",
    "lastName": "เอี่ยมโอน",
    "nickname": "นันท์",
    "gender": "male",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2011-10-12",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.96,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "066-308-3836",
    "parentName": "นายระทัย เอี่ยมโอน",
    "parentPhone": "083-232-2788",
    "address": "บ้านเลขที่ 232 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-110",
    "studentCode": "2922",
    "citizenId": "1-7498-00540-49-2",
    "prefix": "เด็กชาย",
    "firstName": "ธนดล",
    "lastName": "บุญเป็ง",
    "nickname": "ดล",
    "gender": "male",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2011-05-28",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.73,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "067-309-3853",
    "parentName": "นางพัชรีวรรณ บุญเป็ง",
    "parentPhone": "086-346-2922",
    "address": "บ้านเลขที่ 346 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-111",
    "studentCode": "2752",
    "citizenId": "1-5399-01112-66-8",
    "prefix": "เด็กหญิง",
    "firstName": "จรรยมณฑน์",
    "lastName": "กองแก้ว",
    "nickname": "มณฑ์",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2011-06-13",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.1,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "068-310-3870",
    "parentName": "นายทศพร กองแก้ว",
    "parentPhone": "086-407-2752",
    "address": "บ้านเลขที่ 407 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-112",
    "studentCode": "2777",
    "citizenId": "1-5399-01116-47-7",
    "prefix": "เด็กหญิง",
    "firstName": "ปภาพร",
    "lastName": "โปธาตุ",
    "nickname": "พร",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2011-07-23",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.47,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "069-311-3887",
    "parentName": "นายเกรียงไกร โปธาตุ",
    "parentPhone": "082-141-2777",
    "address": "บ้านเลขที่ 141 หมู่ 5 ต.แม่สิน อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-113",
    "studentCode": "2814",
    "citizenId": "1-7499-01391-44-1",
    "prefix": "เด็กหญิง",
    "firstName": "กันย์ยารัตน์",
    "lastName": "แก้วชมภู",
    "nickname": "กันย์",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 13,
    "birthDate": "2011-10-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.84,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "062-312-3904",
    "parentName": "นายสันติราษฎร์ แก้วชมภู",
    "parentPhone": "088-281-2814",
    "address": "บ้านเลขที่ 28/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-114",
    "studentCode": "2836",
    "citizenId": "1-1043-01344-39-7",
    "prefix": "เด็กหญิง",
    "firstName": "มนรัตนา",
    "lastName": "ปัญญาจันทร์",
    "nickname": "รัตน์",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 14,
    "birthDate": "2011-08-05",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.61,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "063-313-3921",
    "parentName": "นายณธัช ปัญญาจันทร์",
    "parentPhone": "081-461-2836",
    "address": "บ้านเลขที่ 146/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-115",
    "studentCode": "2862",
    "citizenId": "1-1199-02659-00-1",
    "prefix": "เด็กหญิง",
    "firstName": "ดวงกมล",
    "lastName": "แก้วชัย",
    "nickname": "กมล",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 15,
    "birthDate": "2012-01-03",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.98,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "064-314-3938",
    "parentName": "นางน้ำฝน บุญแสวง",
    "parentPhone": "086-205-2862",
    "address": "บ้านเลขที่ 220/5 หมู่ 3 ต.สมอแข อ.เมืองพิษณุโลก จ.พิษณุโลก",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-116",
    "studentCode": "2768",
    "citizenId": "1-5399-01134-07-6",
    "prefix": "เด็กหญิง",
    "firstName": "อัญฑิมา",
    "lastName": "มิ่งด่าง",
    "nickname": "ติมา",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 16,
    "birthDate": "2012-01-12",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.35,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "065-315-3955",
    "parentName": "นางอรวรรณ คำเพ็ง",
    "parentPhone": "083-054-2768",
    "address": "บ้านเลขที่ 54 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-117",
    "studentCode": "2755",
    "citizenId": "1-2084-00009-86-6",
    "prefix": "เด็กหญิง",
    "firstName": "พุทธทิชา",
    "lastName": "ชัยวงค์",
    "nickname": "ทิชา",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 17,
    "birthDate": "2011-12-08",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.72,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "066-316-3972",
    "parentName": "นายวิชิต ชัยวงค์",
    "parentPhone": "089-006-2755",
    "address": "บ้านเลขที่ 6 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-118",
    "studentCode": "2958",
    "citizenId": "1-8499-02325-34-4",
    "prefix": "เด็กหญิง",
    "firstName": "ทิพรดา",
    "lastName": "ส่งประเสริฐ",
    "nickname": "รดา",
    "gender": "female",
    "grade": "ม.2",
    "classroom": "ม.2/1",
    "roomNumber": 1,
    "seatNumber": 18,
    "birthDate": "2011-12-27",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.49,
    "advisorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "phoneNumber": "067-317-3989",
    "parentName": "นางสุภาพร ส่งประเสริฐ",
    "parentPhone": "083-971-2958",
    "address": "บ้านเลขที่ 297/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-119",
    "studentCode": "2717",
    "citizenId": "1-1032-00215-60-4",
    "prefix": "เด็กชาย",
    "firstName": "รพิชัย",
    "lastName": "ศรีนอก",
    "nickname": "ชัย",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 19,
    "birthDate": "2010-06-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.86,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "068-318-4006",
    "parentName": "นางพิมพ์สิริ แก้วบังวัน",
    "parentPhone": "082-411-2717",
    "address": "บ้านเลขที่ 411 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-120",
    "studentCode": "2721",
    "citizenId": "1-1296-00047-27-5",
    "prefix": "เด็กชาย",
    "firstName": "เอกณัฐ",
    "lastName": "ปันดิ",
    "nickname": "ณัฐ",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 20,
    "birthDate": "2010-10-17",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.23,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "069-319-4023",
    "parentName": "นายเจนภพ ปันดิ",
    "parentPhone": "085-171-2721",
    "address": "บ้านเลขที่ 171 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-121",
    "studentCode": "2745",
    "citizenId": "1-1002-02056-47-1",
    "prefix": "เด็กชาย",
    "firstName": "จิรพงศ์",
    "lastName": "ปิ่นประเสริฐ",
    "nickname": "พงศ์",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 21,
    "birthDate": "2010-11-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.6,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "062-320-4040",
    "parentName": "นางจรินทร์ ฟูใจ",
    "parentPhone": "089-008-2745",
    "address": "บ้านเลขที่ 8 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-122",
    "studentCode": "2751",
    "citizenId": "1-5399-01099-82-3",
    "prefix": "เด็กชาย",
    "firstName": "ธนากร",
    "lastName": "มุ่ยพันธ์",
    "nickname": "กร",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 22,
    "birthDate": "2011-01-12",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.97,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "063-321-4057",
    "parentName": "นายมังกร มุ่ยพันธ์",
    "parentPhone": "085-241-2751",
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-123",
    "studentCode": "2757",
    "citizenId": "1-6490-00040-10-1",
    "prefix": "เด็กชาย",
    "firstName": "กัลย์ณภัทร",
    "lastName": "ปัญญามูล",
    "nickname": "ภัทร",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 23,
    "birthDate": "2010-09-17",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.74,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "064-322-4074",
    "parentName": "นายสมชาย ปัญญามูล",
    "parentPhone": "082-379-2757",
    "address": "บ้านเลขที่ 379 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-124",
    "studentCode": "2758",
    "citizenId": "1-5399-01102-44-1",
    "prefix": "เด็กชาย",
    "firstName": "ชัชวาล",
    "lastName": "สำราญสุข",
    "nickname": "ชัช",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 24,
    "birthDate": "2011-02-15",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.11,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "065-323-4091",
    "parentName": "นายประสาน สำราญสุข",
    "parentPhone": "083-131-2758",
    "address": "บ้านเลขที่ 131 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-125",
    "studentCode": "2759",
    "citizenId": "1-6490-00041-62-0",
    "prefix": "เด็กชาย",
    "firstName": "กฤติพงษ์",
    "lastName": "ใจเร็ว",
    "nickname": "พงษ์",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 25,
    "birthDate": "2011-04-08",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.48,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "066-324-4108",
    "parentName": "นายทวี ใจเร็ว",
    "parentPhone": "084-001-2759",
    "address": "บ้านเลขที่ 1 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-126",
    "studentCode": "2787",
    "citizenId": "1-6407-01244-92-8",
    "prefix": "นาย",
    "firstName": "ศักรินทร์",
    "lastName": "ผิวสุข",
    "nickname": "ศักดิ์",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 1,
    "birthDate": "2009-09-04",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.85,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "067-325-4125",
    "parentName": "นางรัตนา ลักษณาภิรมย์",
    "parentPhone": "082-067-2787",
    "address": "บ้านเลขที่ 67 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การอ่านทำนองเสนาะ",
      "เขียนเรียงความ"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "problem",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-127",
    "studentCode": "2611",
    "citizenId": "1-6490-00029-70-1",
    "prefix": "นาย",
    "firstName": "อนุภัทร",
    "lastName": "สงวนอักษร",
    "nickname": "ภัทร",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 2,
    "birthDate": "2007-06-09",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.62,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "068-326-4142",
    "parentName": "นางวรรณา ไชยา",
    "parentPhone": "085-822-2611",
    "address": "บ้านเลขที่ 382/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "เกษตรกรรม",
      "ปลูกผักไฮโดรโปนิกส์"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-128",
    "studentCode": "2678",
    "citizenId": "1-7192-00048-25-2",
    "prefix": "เด็กชาย",
    "firstName": "ปรีติ",
    "lastName": "วรรณศิลป์",
    "nickname": "ติ",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 3,
    "birthDate": "2009-08-05",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 2.99,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "069-327-4159",
    "parentName": "นายพิสิต วรรณศิลป์",
    "parentPhone": "083-241-2678",
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วอลเลย์บอล",
      "กีฬาพื้นบ้าน"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-129",
    "studentCode": "2951",
    "citizenId": "1-3082-00128-37-2",
    "prefix": "เด็กชาย",
    "firstName": "อมรฤทธิ์",
    "lastName": "คำชัย",
    "nickname": "อาร์ม",
    "gender": "male",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 4,
    "birthDate": "2011-04-18",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.36,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "062-328-4176",
    "parentName": "นายสมภพ เวชโคกรักษ์",
    "parentPhone": "085-056-2951",
    "address": "บ้านเลขที่ 56 หมู่ 7 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "งานประดิษฐ์",
      "งานฝีมือภูมิปัญญาท้องถิ่น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-130",
    "studentCode": "2719",
    "citizenId": "1-5399-01075-33-9",
    "prefix": "เด็กหญิง",
    "firstName": "นฤมล",
    "lastName": "ยิ่งต่าง",
    "nickname": "มล",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 5,
    "birthDate": "2010-04-26",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.73,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "063-329-4193",
    "parentName": "นางรุญ มิ่งด่าง",
    "parentPhone": "084-418-2719",
    "address": "บ้านเลขที่ 418 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ภาษาอังกฤษ",
      "การสื่อสาร"
    ],
    "hasDisability": true,
    "disabilityType": "บกพร่องทางสติปัญญา",
    "isMultipleDisabilities": false,
    "specialEducationAgency": "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพป.สุโขทัย เขต 2)",
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-131",
    "studentCode": "2761",
    "citizenId": "1-6489-00138-35-1",
    "prefix": "เด็กหญิง",
    "firstName": "แพรวนภา",
    "lastName": "สีใจ",
    "nickname": "แพรว",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 6,
    "birthDate": "2010-09-28",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.5,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "064-330-4210",
    "parentName": "นายไพร สีใจ",
    "parentPhone": "085-881-2761",
    "address": "บ้านเลขที่ 388/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ขับร้องเพลงลูกทุ่ง",
      "การแสดง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-132",
    "studentCode": "2762",
    "citizenId": "1-5399-01106-82-0",
    "prefix": "เด็กหญิง",
    "firstName": "กัญญาพัชร",
    "lastName": "ถือแก้ว",
    "nickname": "พัช",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 7,
    "birthDate": "2011-04-11",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.87,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "065-331-4227",
    "parentName": "นายวน ถือแก้ว",
    "parentPhone": "086-293-2762",
    "address": "บ้านเลขที่ 29/3 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "การช่วยเหลือเพื่อน",
      "ผู้นำกิจกรรมห้องเรียน"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-133",
    "studentCode": "2763",
    "citizenId": "1-1034-00203-32-4",
    "prefix": "เด็กหญิง",
    "firstName": "ศิรินทิพย์",
    "lastName": "หลักฐาน",
    "nickname": "ทิพย์",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 8,
    "birthDate": "2011-03-08",
    "bloodType": "O",
    "religion": "พุทธ",
    "gpax": 3.24,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "066-332-4244",
    "parentName": "นายแหวว หลักฐาน",
    "parentPhone": "087-237-2763",
    "address": "บ้านเลขที่ 237 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คณิตศาสตร์",
      "คิดเลขเร็ว"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-134",
    "studentCode": "2754",
    "citizenId": "1-1042-00746-24-4",
    "prefix": "เด็กหญิง",
    "firstName": "วิชิตา",
    "lastName": "ชัยวงค์",
    "nickname": "ตา",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 9,
    "birthDate": "2010-06-19",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.61,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "067-333-4261",
    "parentName": "นายวิชิต ชัยวงค์",
    "parentPhone": "088-006-2754",
    "address": "บ้านเลขที่ 6 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "วาดภาพ",
      "ศิลปะระบายสี"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-135",
    "studentCode": "2925",
    "citizenId": "2-2090-00017-25-9",
    "prefix": "เด็กหญิง",
    "firstName": "เกศแก้ว",
    "lastName": "อาทิตย์จันทร์ดาว",
    "nickname": "แก้ว",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 10,
    "birthDate": "2010-09-16",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.98,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "068-334-4278",
    "parentName": "นางพราก กลิ่นอ้น",
    "parentPhone": "089-001-2925",
    "address": "บ้านเลขที่ 1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ฟุตบอล",
      "กรีฑา"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-136",
    "studentCode": "2949",
    "citizenId": "1-6489-00080-06-0",
    "prefix": "นางสาว",
    "firstName": "บุษกร",
    "lastName": "แก้วอ่อน",
    "nickname": "บุษ",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 11,
    "birthDate": "2006-07-07",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 2.75,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "069-335-4295",
    "parentName": "นางหวาน แก้วโต",
    "parentPhone": "084-471-2949",
    "address": "บ้านเลขที่ 347/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "ดนตรีไทย",
      "อังกะลุง"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    "id": "std-137",
    "studentCode": "2970",
    "citizenId": "1-5399-01057-77-2",
    "prefix": "นางสาว",
    "firstName": "อมรรัตน์",
    "lastName": "สุขอำมาตย์",
    "nickname": "รัตน์",
    "gender": "female",
    "grade": "ม.3",
    "classroom": "ม.3/1",
    "roomNumber": 1,
    "seatNumber": 12,
    "birthDate": "2009-10-15",
    "bloodType": "B",
    "religion": "พุทธ",
    "gpax": 3.12,
    "advisorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "phoneNumber": "062-336-4312",
    "parentName": "นางคะแนนสิน สุขอำมาตย์",
    "parentPhone": "084-198-2970",
    "address": "บ้านเลขที่ 198 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "specialTalents": [
      "คอมพิวเตอร์",
      "การเขียนโปรแกรมเบื้องต้น"
    ],
    "hasDisability": false,
    "isMultipleDisabilities": false,
    "currentRiskLevel": "normal",
    "homeVisitCompleted": true,
    "sdqCompleted": true,
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  }
];

export const INITIAL_SCREENINGS: StudentScreening[] = [
  {
    "id": "scr-001",
    "studentId": "std-001",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)"
  },
  {
    "id": "scr-002",
    "studentId": "std-002",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)"
  },
  {
    "id": "scr-003",
    "studentId": "std-003",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุวรรณา มงคลจิต (ครูประจำชั้นอนุบาล 3)"
  },
  {
    "id": "scr-004",
    "studentId": "std-004",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-005",
    "studentId": "std-005",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-006",
    "studentId": "std-006",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-007",
    "studentId": "std-007",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-008",
    "studentId": "std-008",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-009",
    "studentId": "std-009",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-010",
    "studentId": "std-010",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-011",
    "studentId": "std-011",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-012",
    "studentId": "std-012",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-013",
    "studentId": "std-013",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-014",
    "studentId": "std-014",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-015",
    "studentId": "std-015",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-016",
    "studentId": "std-016",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)"
  },
  {
    "id": "scr-017",
    "studentId": "std-017",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-018",
    "studentId": "std-018",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-019",
    "studentId": "std-019",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-020",
    "studentId": "std-020",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-021",
    "studentId": "std-021",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-022",
    "studentId": "std-022",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-023",
    "studentId": "std-023",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-024",
    "studentId": "std-024",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-025",
    "studentId": "std-025",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-026",
    "studentId": "std-026",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-027",
    "studentId": "std-027",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-028",
    "studentId": "std-028",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-029",
    "studentId": "std-029",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-030",
    "studentId": "std-030",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-031",
    "studentId": "std-031",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-032",
    "studentId": "std-032",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)"
  },
  {
    "id": "scr-033",
    "studentId": "std-033",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-034",
    "studentId": "std-034",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-035",
    "studentId": "std-035",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-036",
    "studentId": "std-036",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-037",
    "studentId": "std-037",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-038",
    "studentId": "std-038",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-039",
    "studentId": "std-039",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-040",
    "studentId": "std-040",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-041",
    "studentId": "std-041",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-042",
    "studentId": "std-042",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-043",
    "studentId": "std-043",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-044",
    "studentId": "std-044",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-045",
    "studentId": "std-045",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-046",
    "studentId": "std-046",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-047",
    "studentId": "std-047",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)"
  },
  {
    "id": "scr-048",
    "studentId": "std-048",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-049",
    "studentId": "std-049",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-050",
    "studentId": "std-050",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-051",
    "studentId": "std-051",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-052",
    "studentId": "std-052",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-053",
    "studentId": "std-053",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-054",
    "studentId": "std-054",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-055",
    "studentId": "std-055",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-056",
    "studentId": "std-056",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-057",
    "studentId": "std-057",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-058",
    "studentId": "std-058",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-059",
    "studentId": "std-059",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-060",
    "studentId": "std-060",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-061",
    "studentId": "std-061",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-062",
    "studentId": "std-062",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-063",
    "studentId": "std-063",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)"
  },
  {
    "id": "scr-064",
    "studentId": "std-064",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-065",
    "studentId": "std-065",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-066",
    "studentId": "std-066",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-067",
    "studentId": "std-067",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-068",
    "studentId": "std-068",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-069",
    "studentId": "std-069",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-070",
    "studentId": "std-070",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-071",
    "studentId": "std-071",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-072",
    "studentId": "std-072",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-073",
    "studentId": "std-073",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-074",
    "studentId": "std-074",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-075",
    "studentId": "std-075",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-076",
    "studentId": "std-076",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-077",
    "studentId": "std-077",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-078",
    "studentId": "std-078",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-079",
    "studentId": "std-079",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)"
  },
  {
    "id": "scr-080",
    "studentId": "std-080",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-081",
    "studentId": "std-081",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-082",
    "studentId": "std-082",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-083",
    "studentId": "std-083",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-084",
    "studentId": "std-084",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-085",
    "studentId": "std-085",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-086",
    "studentId": "std-086",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-087",
    "studentId": "std-087",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-088",
    "studentId": "std-088",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-089",
    "studentId": "std-089",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)"
  },
  {
    "id": "scr-090",
    "studentId": "std-090",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-091",
    "studentId": "std-091",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-092",
    "studentId": "std-092",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-093",
    "studentId": "std-093",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-094",
    "studentId": "std-094",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-095",
    "studentId": "std-095",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-096",
    "studentId": "std-096",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-097",
    "studentId": "std-097",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-098",
    "studentId": "std-098",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-099",
    "studentId": "std-099",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-100",
    "studentId": "std-100",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-101",
    "studentId": "std-101",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-102",
    "studentId": "std-102",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-103",
    "studentId": "std-103",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-104",
    "studentId": "std-104",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-105",
    "studentId": "std-105",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-106",
    "studentId": "std-106",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)"
  },
  {
    "id": "scr-107",
    "studentId": "std-107",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-108",
    "studentId": "std-108",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "risk",
    "dimensions": {
      "learning": {
        "status": "risk",
        "details": "ผลการเรียนเริ่มลดลง ขาดสมาธิในการเรียนช่วงบ่ายและส่งงานล่าช้า"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัว"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนค่าใช้จ่ายในการเรียนได้"
      },
      "behavior": {
        "status": "risk",
        "details": "เริ่มมีพฤติกรรมเล่นเกมหรือใช้โทรศัพท์มือถือมากเกินไปในเวลาเรียน"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มเสี่ยงด้านการเรียนและพฤติกรรม (ม.2) ควรจัดกิจกรรมสอนเสริมและให้คำปรึกษาติดตามสม่ำเสมอ",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-109",
    "studentId": "std-109",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-110",
    "studentId": "std-110",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-111",
    "studentId": "std-111",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-112",
    "studentId": "std-112",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-113",
    "studentId": "std-113",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-114",
    "studentId": "std-114",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-115",
    "studentId": "std-115",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-116",
    "studentId": "std-116",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-117",
    "studentId": "std-117",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-118",
    "studentId": "std-118",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)"
  },
  {
    "id": "scr-119",
    "studentId": "std-119",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-120",
    "studentId": "std-120",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-121",
    "studentId": "std-121",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-122",
    "studentId": "std-122",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-123",
    "studentId": "std-123",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-12",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-124",
    "studentId": "std-124",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-13",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-125",
    "studentId": "std-125",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-14",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-126",
    "studentId": "std-126",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-15",
    "overallStatus": "problem",
    "dimensions": {
      "learning": {
        "status": "problem",
        "details": "ขาดเรียนบ่อยครั้ง ไม่ส่งงาน มีปัญหาด้านการอ่านเขียนและการคิดคำนวณ"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพทั่วไปปกติ แต่มีอาการอ่อนเพลียบ่อยจากการนอนดึก"
      },
      "economic": {
        "status": "problem",
        "details": "ครอบครัวยากจนมาก รายได้ไม่แน่นอน ขาดแคลนค่าใช้จ่ายในการเรียน สมควรได้รับทุนสงเคราะห์ (กสศ.)"
      },
      "behavior": {
        "status": "risk",
        "details": "มีอาการซึมเศร้า แยกตัว ไม่ค่อยสุงสิงกับเพื่อน และวิตกกังวลเรื่องครอบครัว"
      },
      "safety": {
        "status": "normal",
        "details": "บ้านอยู่ห่างไกลโรงเรียน การเดินทางต้องระมัดระวัง"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มมีปัญหาด้านการเรียนและเศรษฐกิจ (ม.3) ต้องได้รับการช่วยเหลือเร่งด่วนและส่งต่อรับทุนสงเคราะห์",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-127",
    "studentId": "std-127",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-16",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-128",
    "studentId": "std-128",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-17",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-129",
    "studentId": "std-129",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-18",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-130",
    "studentId": "std-130",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-19",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-131",
    "studentId": "std-131",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-20",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-132",
    "studentId": "std-132",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-21",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-133",
    "studentId": "std-133",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-22",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-134",
    "studentId": "std-134",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-23",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-135",
    "studentId": "std-135",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-24",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-136",
    "studentId": "std-136",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-10",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ครอบครัวได้รับทุนปัจจัยพื้นฐานนักเรียนยากจน (กสศ.) ความเป็นอยู่และการเรียนอยู่ในเกณฑ์ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  },
  {
    "id": "scr-137",
    "studentId": "std-137",
    "academicYear": "2568",
    "term": 1,
    "evaluatedDate": "2026-06-11",
    "overallStatus": "normal",
    "dimensions": {
      "learning": {
        "status": "normal",
        "details": "ผลการเรียนอยู่ในเกณฑ์มาตรฐาน มีความตั้งใจเรียนและพัฒนาการสมวัย"
      },
      "health": {
        "status": "normal",
        "details": "สุขภาพร่างกายสมบูรณ์แข็งแรง เจริญเติบโตสมวัย ไม่มีโรคประจำตัวร้ายแรง"
      },
      "economic": {
        "status": "normal",
        "details": "ฐานะทางบ้านปานกลาง ผู้ปกครองสามารถสนับสนุนการเรียนได้ปกติ"
      },
      "behavior": {
        "status": "normal",
        "details": "ปฏิบัติตามกฎระเบียบของโรงเรียน มีสัมมาคารวะ อารมณ์แจ่มใสและเข้ากับเพื่อนได้ดี"
      },
      "safety": {
        "status": "normal",
        "details": "การเดินทางมาเรียนปลอดภัย ผู้ปกครองดูแลเอาใจใส่และรับส่งเป็นประจำ"
      }
    },
    "summaryNotes": "อยู่ในกลุ่มปกติ พัฒนาการสมวัย มีความพร้อมในการเรียนรู้และร่วมกิจกรรมของโรงเรียน",
    "evaluatedBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)"
  }
];

export const INITIAL_HOME_VISITS: HomeVisitRecord[] = [
  {
    "id": "hv-001",
    "studentId": "std-001",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5123,
      "lng": 99.7891
    },
    "address": "บ้านเลขที่ 411 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-002",
    "studentId": "std-002",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5493,
      "lng": 99.83210000000001
    },
    "address": "บ้านเลขที่ 288 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-003",
    "studentId": "std-003",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุวรรณา มงคลจิต (ครูประจำชั้นอนุบาล 3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5863,
      "lng": 99.80510000000001
    },
    "address": "บ้านเลขที่ 298 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-004",
    "studentId": "std-004",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5433,
      "lng": 99.8481
    },
    "address": "บ้านเลขที่ 223 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-005",
    "studentId": "std-005",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5803,
      "lng": 99.8211
    },
    "address": "บ้านเลขที่ 394 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-006",
    "studentId": "std-006",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5373,
      "lng": 99.7941
    },
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-007",
    "studentId": "std-007",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5743,
      "lng": 99.8371
    },
    "address": "บ้านเลขที่ 185 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-008",
    "studentId": "std-008",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.531299999999998,
      "lng": 99.8101
    },
    "address": "บ้านเลขที่ 46 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-009",
    "studentId": "std-009",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5683,
      "lng": 99.8531
    },
    "address": "บ้านเลขที่ 28/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-010",
    "studentId": "std-010",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5253,
      "lng": 99.82610000000001
    },
    "address": "บ้านเลขที่ 20 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-011",
    "studentId": "std-011",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5623,
      "lng": 99.79910000000001
    },
    "address": "บ้านเลขที่ 49/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-012",
    "studentId": "std-012",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5193,
      "lng": 99.8421
    },
    "address": "บ้านเลขที่ 208 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-013",
    "studentId": "std-013",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5563,
      "lng": 99.8151
    },
    "address": "บ้านเลขที่ 291/1 หมู่ 9 ต.บ้านตึก อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-014",
    "studentId": "std-014",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5133,
      "lng": 99.85810000000001
    },
    "address": "บ้านเลขที่ 291/1 หมู่ 9 ต.บ้านตึก อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-015",
    "studentId": "std-015",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5503,
      "lng": 99.8311
    },
    "address": "บ้านเลขที่ 165 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-016",
    "studentId": "std-016",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5873,
      "lng": 99.8041
    },
    "address": "บ้านเลขที่ 456 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-017",
    "studentId": "std-017",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5443,
      "lng": 99.84710000000001
    },
    "address": "บ้านเลขที่ 24 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-018",
    "studentId": "std-018",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5813,
      "lng": 99.82010000000001
    },
    "address": "บ้านเลขที่ 162 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-019",
    "studentId": "std-019",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "มารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5383,
      "lng": 99.79310000000001
    },
    "address": "บ้านเลขที่ 430 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-020",
    "studentId": "std-020",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5753,
      "lng": 99.8361
    },
    "address": "บ้านเลขที่ 20 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-021",
    "studentId": "std-021",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5323,
      "lng": 99.8091
    },
    "address": "บ้านเลขที่ 299/4 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-022",
    "studentId": "std-022",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5693,
      "lng": 99.85210000000001
    },
    "address": "บ้านเลขที่ 276 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-023",
    "studentId": "std-023",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5263,
      "lng": 99.8251
    },
    "address": "บ้านเลขที่ 201 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-024",
    "studentId": "std-024",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.563299999999998,
      "lng": 99.7981
    },
    "address": "บ้านเลขที่ 149 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-025",
    "studentId": "std-025",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5203,
      "lng": 99.84110000000001
    },
    "address": "บ้านเลขที่ 149/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-026",
    "studentId": "std-026",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5573,
      "lng": 99.81410000000001
    },
    "address": "บ้านเลขที่ 299/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-027",
    "studentId": "std-027",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5143,
      "lng": 99.8571
    },
    "address": "บ้านเลขที่ 70 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-028",
    "studentId": "std-028",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5513,
      "lng": 99.8301
    },
    "address": "บ้านเลขที่ 232 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-029",
    "studentId": "std-029",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5883,
      "lng": 99.8031
    },
    "address": "บ้านเลขที่ 308 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-030",
    "studentId": "std-030",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5453,
      "lng": 99.8461
    },
    "address": "บ้านเลขที่ 431 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-031",
    "studentId": "std-031",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5823,
      "lng": 99.8191
    },
    "address": "บ้านเลขที่ 76 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-032",
    "studentId": "std-032",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5393,
      "lng": 99.7921
    },
    "address": "บ้านเลขที่ 173 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-033",
    "studentId": "std-033",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5763,
      "lng": 99.83510000000001
    },
    "address": "บ้านเลขที่ 209 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-034",
    "studentId": "std-034",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5333,
      "lng": 99.80810000000001
    },
    "address": "บ้านเลขที่ 21 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-035",
    "studentId": "std-035",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5703,
      "lng": 99.8511
    },
    "address": "บ้านเลขที่ 406/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-036",
    "studentId": "std-036",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5273,
      "lng": 99.8241
    },
    "address": "บ้านเลขที่ 129 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-037",
    "studentId": "std-037",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5643,
      "lng": 99.7971
    },
    "address": "บ้านเลขที่ 25 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-038",
    "studentId": "std-038",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5213,
      "lng": 99.8401
    },
    "address": "บ้านเลขที่ 432 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-039",
    "studentId": "std-039",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5583,
      "lng": 99.8131
    },
    "address": "บ้านเลขที่ 353 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-040",
    "studentId": "std-040",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5153,
      "lng": 99.8561
    },
    "address": "บ้านเลขที่ 58 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-041",
    "studentId": "std-041",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5523,
      "lng": 99.82910000000001
    },
    "address": "บ้านเลขที่ 149/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-042",
    "studentId": "std-042",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5893,
      "lng": 99.80210000000001
    },
    "address": "บ้านเลขที่ 179/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-043",
    "studentId": "std-043",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5463,
      "lng": 99.8451
    },
    "address": "บ้านเลขที่ 165 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-044",
    "studentId": "std-044",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5833,
      "lng": 99.8181
    },
    "address": "บ้านเลขที่ 45 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-045",
    "studentId": "std-045",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5403,
      "lng": 99.7911
    },
    "address": "บ้านเลขที่ 257 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-046",
    "studentId": "std-046",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5773,
      "lng": 99.8341
    },
    "address": "บ้านเลขที่ 54 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-047",
    "studentId": "std-047",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.534299999999998,
      "lng": 99.8071
    },
    "address": "บ้านเลขที่ 268/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-048",
    "studentId": "std-048",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5713,
      "lng": 99.85010000000001
    },
    "address": "บ้านเลขที่ 61 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-049",
    "studentId": "std-049",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.528299999999998,
      "lng": 99.82310000000001
    },
    "address": "บ้านเลขที่ 4/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-050",
    "studentId": "std-050",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5653,
      "lng": 99.79610000000001
    },
    "address": "บ้านเลขที่ 291 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-051",
    "studentId": "std-051",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5223,
      "lng": 99.8391
    },
    "address": "บ้านเลขที่ 425 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-052",
    "studentId": "std-052",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5593,
      "lng": 99.8121
    },
    "address": "บ้านเลขที่ 15/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-053",
    "studentId": "std-053",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5163,
      "lng": 99.85510000000001
    },
    "address": "บ้านเลขที่ 162 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-054",
    "studentId": "std-054",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5533,
      "lng": 99.8281
    },
    "address": "บ้านเลขที่ 243/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-055",
    "studentId": "std-055",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5903,
      "lng": 99.8011
    },
    "address": "บ้านเลขที่ 30 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-056",
    "studentId": "std-056",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5473,
      "lng": 99.84410000000001
    },
    "address": "บ้านเลขที่ 39 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-057",
    "studentId": "std-057",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5843,
      "lng": 99.81710000000001
    },
    "address": "บ้านเลขที่ 1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-058",
    "studentId": "std-058",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5413,
      "lng": 99.79010000000001
    },
    "address": "บ้านเลขที่ 212 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-059",
    "studentId": "std-059",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5783,
      "lng": 99.8331
    },
    "address": "บ้านเลขที่ 40/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-060",
    "studentId": "std-060",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5353,
      "lng": 99.8061
    },
    "address": "บ้านเลขที่ 448 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-061",
    "studentId": "std-061",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5723,
      "lng": 99.8491
    },
    "address": "บ้านเลขที่ 66/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-062",
    "studentId": "std-062",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5293,
      "lng": 99.8221
    },
    "address": "บ้านเลขที่ 268 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-063",
    "studentId": "std-063",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5663,
      "lng": 99.7951
    },
    "address": "บ้านเลขที่ 51 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-064",
    "studentId": "std-064",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5233,
      "lng": 99.83810000000001
    },
    "address": "บ้านเลขที่ 172 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-065",
    "studentId": "std-065",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.560299999999998,
      "lng": 99.81110000000001
    },
    "address": "บ้านเลขที่ 346/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-066",
    "studentId": "std-066",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5173,
      "lng": 99.8541
    },
    "address": "บ้านเลขที่ 183 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-067",
    "studentId": "std-067",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5543,
      "lng": 99.8271
    },
    "address": "บ้านเลขที่ 146/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-068",
    "studentId": "std-068",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5913,
      "lng": 99.8001
    },
    "address": "บ้านเลขที่ 57/1 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-069",
    "studentId": "std-069",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5483,
      "lng": 99.8431
    },
    "address": "บ้านเลขที่ 283 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-070",
    "studentId": "std-070",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5853,
      "lng": 99.8161
    },
    "address": "บ้านเลขที่ 295 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-071",
    "studentId": "std-071",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5423,
      "lng": 99.7891
    },
    "address": "บ้านเลขที่ 24 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-072",
    "studentId": "std-072",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5793,
      "lng": 99.83210000000001
    },
    "address": "บ้านเลขที่ 402 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-073",
    "studentId": "std-073",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5363,
      "lng": 99.80510000000001
    },
    "address": "บ้านเลขที่ 119/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-074",
    "studentId": "std-074",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5733,
      "lng": 99.8481
    },
    "address": "บ้านเลขที่ 219 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-075",
    "studentId": "std-075",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5303,
      "lng": 99.8211
    },
    "address": "บ้านเลขที่ 374 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-076",
    "studentId": "std-076",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5673,
      "lng": 99.7941
    },
    "address": "บ้านเลขที่ 311 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-077",
    "studentId": "std-077",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5243,
      "lng": 99.8371
    },
    "address": "บ้านเลขที่ 29 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-078",
    "studentId": "std-078",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5613,
      "lng": 99.8101
    },
    "address": "บ้านเลขที่ 169 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-079",
    "studentId": "std-079",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5183,
      "lng": 99.8531
    },
    "address": "บ้านเลขที่ 432 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-080",
    "studentId": "std-080",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5553,
      "lng": 99.82610000000001
    },
    "address": "บ้านเลขที่ 106/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-081",
    "studentId": "std-081",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5123,
      "lng": 99.79910000000001
    },
    "address": "บ้านเลขที่ 298 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-082",
    "studentId": "std-082",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5493,
      "lng": 99.8421
    },
    "address": "บ้านเลขที่ 15 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-083",
    "studentId": "std-083",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5863,
      "lng": 99.8151
    },
    "address": "บ้านเลขที่ 208 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-084",
    "studentId": "std-084",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5433,
      "lng": 99.85810000000001
    },
    "address": "บ้านเลขที่ 74/1 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-085",
    "studentId": "std-085",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5803,
      "lng": 99.8311
    },
    "address": "บ้านเลขที่ 102 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-086",
    "studentId": "std-086",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5373,
      "lng": 99.8041
    },
    "address": "บ้านเลขที่ 29/40 หมู่ 5 ชุมชน/ถ.วังหิน ต.ดอนสัก อ.ดอนสัก จ.สุราษฎร์ธานี",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-087",
    "studentId": "std-087",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5743,
      "lng": 99.84710000000001
    },
    "address": "บ้านเลขที่ 0 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-088",
    "studentId": "std-088",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.531299999999998,
      "lng": 99.82010000000001
    },
    "address": "บ้านเลขที่ 276 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-089",
    "studentId": "std-089",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5683,
      "lng": 99.79310000000001
    },
    "address": "บ้านเลขที่ 237 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-090",
    "studentId": "std-090",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5253,
      "lng": 99.8361
    },
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-091",
    "studentId": "std-091",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5623,
      "lng": 99.8091
    },
    "address": "บ้านเลขที่ 274 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-092",
    "studentId": "std-092",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5193,
      "lng": 99.85210000000001
    },
    "address": "บ้านเลขที่ 394 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-093",
    "studentId": "std-093",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5563,
      "lng": 99.8251
    },
    "address": "หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-094",
    "studentId": "std-094",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5133,
      "lng": 99.7981
    },
    "address": "บ้านเลขที่ 45 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-095",
    "studentId": "std-095",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5503,
      "lng": 99.84110000000001
    },
    "address": "บ้านเลขที่ 343 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-096",
    "studentId": "std-096",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5873,
      "lng": 99.81410000000001
    },
    "address": "บ้านเลขที่ 149/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-097",
    "studentId": "std-097",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5443,
      "lng": 99.8571
    },
    "address": "บ้านเลขที่ 209 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-098",
    "studentId": "std-098",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5813,
      "lng": 99.8301
    },
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-099",
    "studentId": "std-099",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5383,
      "lng": 99.8031
    },
    "address": "บ้านเลขที่ 213 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-100",
    "studentId": "std-100",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5753,
      "lng": 99.8461
    },
    "address": "บ้านเลขที่ 158 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-101",
    "studentId": "std-101",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5323,
      "lng": 99.8191
    },
    "address": "บ้านเลขที่ 232 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-102",
    "studentId": "std-102",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5693,
      "lng": 99.7921
    },
    "address": "บ้านเลขที่ 157 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-103",
    "studentId": "std-103",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5263,
      "lng": 99.83510000000001
    },
    "address": "บ้านเลขที่ 243 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-104",
    "studentId": "std-104",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.563299999999998,
      "lng": 99.80810000000001
    },
    "address": "บ้านเลขที่ 365 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-105",
    "studentId": "std-105",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5203,
      "lng": 99.8511
    },
    "address": "บ้านเลขที่ 19 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-106",
    "studentId": "std-106",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5573,
      "lng": 99.8241
    },
    "address": "บ้านเลขที่ 191 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-107",
    "studentId": "std-107",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5143,
      "lng": 99.7971
    },
    "address": "บ้านเลขที่ 180 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-108",
    "studentId": "std-108",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5513,
      "lng": 99.8401
    },
    "address": "บ้านเลขที่ 375 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-109",
    "studentId": "std-109",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "มารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5883,
      "lng": 99.8131
    },
    "address": "บ้านเลขที่ 232 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-110",
    "studentId": "std-110",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 10500,
    "hasDebt": false,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5453,
      "lng": 99.8561
    },
    "address": "บ้านเลขที่ 346 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-111",
    "studentId": "std-111",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 12000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5823,
      "lng": 99.82910000000001
    },
    "address": "บ้านเลขที่ 407 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-112",
    "studentId": "std-112",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5393,
      "lng": 99.80210000000001
    },
    "address": "บ้านเลขที่ 141 หมู่ 5 ต.แม่สิน อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-113",
    "studentId": "std-113",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5763,
      "lng": 99.8451
    },
    "address": "บ้านเลขที่ 28/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-114",
    "studentId": "std-114",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5333,
      "lng": 99.8181
    },
    "address": "บ้านเลขที่ 146/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-115",
    "studentId": "std-115",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5703,
      "lng": 99.7911
    },
    "address": "บ้านเลขที่ 220/5 หมู่ 3 ต.สมอแข อ.เมืองพิษณุโลก จ.พิษณุโลก",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-116",
    "studentId": "std-116",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5273,
      "lng": 99.8341
    },
    "address": "บ้านเลขที่ 54 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-117",
    "studentId": "std-117",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5643,
      "lng": 99.8071
    },
    "address": "บ้านเลขที่ 6 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-118",
    "studentId": "std-118",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5213,
      "lng": 99.85010000000001
    },
    "address": "บ้านเลขที่ 297/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-119",
    "studentId": "std-119",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5583,
      "lng": 99.82310000000001
    },
    "address": "บ้านเลขที่ 411 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-120",
    "studentId": "std-120",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5153,
      "lng": 99.79610000000001
    },
    "address": "บ้านเลขที่ 171 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-121",
    "studentId": "std-121",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5523,
      "lng": 99.8391
    },
    "address": "บ้านเลขที่ 8 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-122",
    "studentId": "std-122",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5893,
      "lng": 99.8121
    },
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-123",
    "studentId": "std-123",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5463,
      "lng": 99.85510000000001
    },
    "address": "บ้านเลขที่ 379 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-124",
    "studentId": "std-124",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 13500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5833,
      "lng": 99.8281
    },
    "address": "บ้านเลขที่ 131 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-125",
    "studentId": "std-125",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5403,
      "lng": 99.8011
    },
    "address": "บ้านเลขที่ 1 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-126",
    "studentId": "std-126",
    "visitDate": "2026-06-20",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5773,
      "lng": 99.84410000000001
    },
    "address": "บ้านเลขที่ 67 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-127",
    "studentId": "std-127",
    "visitDate": "2026-06-21",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.534299999999998,
      "lng": 99.81710000000001
    },
    "address": "บ้านเลขที่ 382/2 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-128",
    "studentId": "std-128",
    "visitDate": "2026-06-22",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5713,
      "lng": 99.79010000000001
    },
    "address": "บ้านเลขที่ 24/1 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-129",
    "studentId": "std-129",
    "visitDate": "2026-06-23",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 3500,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.528299999999998,
      "lng": 99.8331
    },
    "address": "บ้านเลขที่ 56 หมู่ 7 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-130",
    "studentId": "std-130",
    "visitDate": "2026-06-24",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 2.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5653,
      "lng": 99.8061
    },
    "address": "บ้านเลขที่ 418 หมู่ 8 ต.ป่างิ้ว อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-131",
    "studentId": "std-131",
    "visitDate": "2026-06-25",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 4.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5223,
      "lng": 99.8491
    },
    "address": "บ้านเลขที่ 388/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-132",
    "studentId": "std-132",
    "visitDate": "2026-06-26",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 16500,
    "hasDebt": false,
    "distanceFromSchoolKm": 5.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5593,
      "lng": 99.8221
    },
    "address": "บ้านเลขที่ 29/3 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-133",
    "studentId": "std-133",
    "visitDate": "2026-06-15",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "เพิงพักชั่วคราว",
    "livingWith": "ปู่ย่าตายาย",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 9000,
    "hasDebt": true,
    "distanceFromSchoolKm": 7.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5163,
      "lng": 99.7951
    },
    "address": "บ้านเลขที่ 237 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  },
  {
    "id": "hv-134",
    "studentId": "std-134",
    "visitDate": "2026-06-16",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "มารดา",
    "familyMembersCount": 4,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 4000,
    "hasDebt": true,
    "distanceFromSchoolKm": 8.7,
    "commuteMethod": "จักรยาน",
    "gpsCoordinates": {
      "lat": 17.5533,
      "lng": 99.83810000000001
    },
    "address": "บ้านเลขที่ 6 หมู่ 8 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-135",
    "studentId": "std-135",
    "visitDate": "2026-06-17",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดา",
    "familyMembersCount": 5,
    "familyRelationship": "มีความขัดแย้งบ้าง",
    "monthlyIncome": 4500,
    "hasDebt": true,
    "distanceFromSchoolKm": 10.2,
    "commuteMethod": "รถจักรยานยนต์",
    "gpsCoordinates": {
      "lat": 17.5903,
      "lng": 99.81110000000001
    },
    "address": "บ้านเลขที่ 1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "สภาพปานกลาง",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-136",
    "studentId": "std-136",
    "visitDate": "2026-06-18",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 6,
    "familyRelationship": "ปกติทั่วไป",
    "monthlyIncome": 5000,
    "hasDebt": true,
    "distanceFromSchoolKm": 11.7,
    "commuteMethod": "ผู้ปกครองมาส่ง",
    "gpsCoordinates": {
      "lat": 17.5473,
      "lng": 99.8541
    },
    "address": "บ้านเลขที่ 347/1 หมู่ 1 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "ทรุดโทรม ชำรุด",
    "requestedSupport": [
      "ทุนการศึกษา",
      "อุปกรณ์การเรียน",
      "อาหารกลางวัน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "นักเรียนมีความขยันและกตัญญู แต่ที่บ้านขาดแคลนโต๊ะเขียนหนังสือและแสงสว่าง แนะนำขอทุนการศึกษาและสนับสนุนอุปกรณ์การเรียน",
    "status": "completed"
  },
  {
    "id": "hv-137",
    "studentId": "std-137",
    "visitDate": "2026-06-19",
    "academicYear": "2568",
    "term": 1,
    "visitorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "visitorPosition": "ครูประจำชั้น / ครูที่ปรึกษา",
    "houseType": "บ้านเดี่ยว",
    "livingWith": "บิดามารดา",
    "familyMembersCount": 3,
    "familyRelationship": "อบอุ่นดีมาก",
    "monthlyIncome": 15000,
    "hasDebt": true,
    "distanceFromSchoolKm": 1.2,
    "commuteMethod": "เดินเท้า",
    "gpsCoordinates": {
      "lat": 17.5843,
      "lng": 99.8271
    },
    "address": "บ้านเลขที่ 198 หมู่ 6 ต.ดงคู่ อ.ศรีสัชนาลัย จ.สุโขทัย 64130",
    "photoUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80",
    "homeCondition": "มั่นคงถาวร สะอาด",
    "requestedSupport": [
      "อุปกรณ์การเรียน"
    ],
    "parentFeedback": "อยากให้บุตรหลานเรียนต่อในระดับที่สูงขึ้น มีงานทำที่มั่นคงและเป็นคนดีของสังคม",
    "teacherImpression": "สภาพแวดล้อมทางบ้านส่งเสริมการเรียนรู้ดี ผู้ปกครองให้ความร่วมมือกับโรงเรียนอย่างดียิ่ง",
    "status": "completed"
  }
];

export const INITIAL_SDQ_EVALUATIONS: SDQEvaluation[] = [
  {
    "id": "sdq-001",
    "studentId": "std-001",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-002",
    "studentId": "std-002",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-003",
    "studentId": "std-003",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุวรรณา มงคลจิต (ครูประจำชั้นอนุบาล 3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-004",
    "studentId": "std-004",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-005",
    "studentId": "std-005",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-006",
    "studentId": "std-006",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-007",
    "studentId": "std-007",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-008",
    "studentId": "std-008",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-009",
    "studentId": "std-009",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-010",
    "studentId": "std-010",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-011",
    "studentId": "std-011",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-012",
    "studentId": "std-012",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-013",
    "studentId": "std-013",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-014",
    "studentId": "std-014",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-015",
    "studentId": "std-015",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-016",
    "studentId": "std-016",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-017",
    "studentId": "std-017",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-018",
    "studentId": "std-018",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-019",
    "studentId": "std-019",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-020",
    "studentId": "std-020",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-021",
    "studentId": "std-021",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-022",
    "studentId": "std-022",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-023",
    "studentId": "std-023",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-024",
    "studentId": "std-024",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-025",
    "studentId": "std-025",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-026",
    "studentId": "std-026",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-027",
    "studentId": "std-027",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-028",
    "studentId": "std-028",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-029",
    "studentId": "std-029",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-030",
    "studentId": "std-030",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-031",
    "studentId": "std-031",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-032",
    "studentId": "std-032",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-033",
    "studentId": "std-033",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-034",
    "studentId": "std-034",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-035",
    "studentId": "std-035",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-036",
    "studentId": "std-036",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-037",
    "studentId": "std-037",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-038",
    "studentId": "std-038",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-039",
    "studentId": "std-039",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-040",
    "studentId": "std-040",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-041",
    "studentId": "std-041",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-042",
    "studentId": "std-042",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-043",
    "studentId": "std-043",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-044",
    "studentId": "std-044",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-045",
    "studentId": "std-045",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-046",
    "studentId": "std-046",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-047",
    "studentId": "std-047",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-048",
    "studentId": "std-048",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-049",
    "studentId": "std-049",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-050",
    "studentId": "std-050",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-051",
    "studentId": "std-051",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-052",
    "studentId": "std-052",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-053",
    "studentId": "std-053",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-054",
    "studentId": "std-054",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-055",
    "studentId": "std-055",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-056",
    "studentId": "std-056",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-057",
    "studentId": "std-057",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-058",
    "studentId": "std-058",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-059",
    "studentId": "std-059",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-060",
    "studentId": "std-060",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-061",
    "studentId": "std-061",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-062",
    "studentId": "std-062",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-063",
    "studentId": "std-063",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-064",
    "studentId": "std-064",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-065",
    "studentId": "std-065",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-066",
    "studentId": "std-066",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-067",
    "studentId": "std-067",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-068",
    "studentId": "std-068",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-069",
    "studentId": "std-069",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-070",
    "studentId": "std-070",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-071",
    "studentId": "std-071",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-072",
    "studentId": "std-072",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-073",
    "studentId": "std-073",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-074",
    "studentId": "std-074",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-075",
    "studentId": "std-075",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-076",
    "studentId": "std-076",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-077",
    "studentId": "std-077",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-078",
    "studentId": "std-078",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-079",
    "studentId": "std-079",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-080",
    "studentId": "std-080",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-081",
    "studentId": "std-081",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-082",
    "studentId": "std-082",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-083",
    "studentId": "std-083",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-084",
    "studentId": "std-084",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-085",
    "studentId": "std-085",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-086",
    "studentId": "std-086",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-087",
    "studentId": "std-087",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-088",
    "studentId": "std-088",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-089",
    "studentId": "std-089",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-090",
    "studentId": "std-090",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-091",
    "studentId": "std-091",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-092",
    "studentId": "std-092",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-093",
    "studentId": "std-093",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-094",
    "studentId": "std-094",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-095",
    "studentId": "std-095",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-096",
    "studentId": "std-096",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-097",
    "studentId": "std-097",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-098",
    "studentId": "std-098",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-099",
    "studentId": "std-099",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-100",
    "studentId": "std-100",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-101",
    "studentId": "std-101",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-102",
    "studentId": "std-102",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-103",
    "studentId": "std-103",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-104",
    "studentId": "std-104",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-105",
    "studentId": "std-105",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-106",
    "studentId": "std-106",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-107",
    "studentId": "std-107",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-108",
    "studentId": "std-108",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 4,
      "conductScore": 4,
      "hyperactivityScore": 4,
      "peerScore": 4,
      "prosocialScore": 6,
      "totalDifficulties": 16,
      "status": "risk"
    },
    "notes": "ผลคะแนน SDQ รวม 16 คะแนน อยู่ในเกณฑ์กลุ่มเสี่ยง ควรเฝ้าระวังพฤติกรรมและสังเกตในชั้นเรียน"
  },
  {
    "id": "sdq-109",
    "studentId": "std-109",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-110",
    "studentId": "std-110",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-111",
    "studentId": "std-111",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-112",
    "studentId": "std-112",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-113",
    "studentId": "std-113",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-114",
    "studentId": "std-114",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-115",
    "studentId": "std-115",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-116",
    "studentId": "std-116",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-117",
    "studentId": "std-117",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-118",
    "studentId": "std-118",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-119",
    "studentId": "std-119",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-120",
    "studentId": "std-120",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-121",
    "studentId": "std-121",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-122",
    "studentId": "std-122",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-123",
    "studentId": "std-123",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-124",
    "studentId": "std-124",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-125",
    "studentId": "std-125",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-126",
    "studentId": "std-126",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 6,
      "conductScore": 4,
      "hyperactivityScore": 5,
      "peerScore": 5,
      "prosocialScore": 4,
      "totalDifficulties": 20,
      "status": "problem"
    },
    "notes": "ผลคะแนน SDQ รวม 20 คะแนน อยู่ในเกณฑ์กลุ่มมีปัญหา ควรได้รับการดูแลใกล้ชิดและส่งต่อครูแนะแนว"
  },
  {
    "id": "sdq-127",
    "studentId": "std-127",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-128",
    "studentId": "std-128",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-25",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-129",
    "studentId": "std-129",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-26",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-130",
    "studentId": "std-130",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-27",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-131",
    "studentId": "std-131",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-18",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-132",
    "studentId": "std-132",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-19",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 10,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-133",
    "studentId": "std-133",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-20",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 8,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-134",
    "studentId": "std-134",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-21",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 9,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-135",
    "studentId": "std-135",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-22",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 10,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-136",
    "studentId": "std-136",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-23",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 2,
      "conductScore": 1,
      "hyperactivityScore": 3,
      "peerScore": 2,
      "prosocialScore": 8,
      "totalDifficulties": 8,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  },
  {
    "id": "sdq-137",
    "studentId": "std-137",
    "academicYear": "2568",
    "evaluatedDate": "2026-06-24",
    "evaluatorType": "teacher",
    "evaluatorName": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "scores": {
      "emotionalScore": 1,
      "conductScore": 2,
      "hyperactivityScore": 2,
      "peerScore": 1,
      "prosocialScore": 9,
      "totalDifficulties": 6,
      "status": "normal"
    },
    "notes": "พฤติกรรมและอารมณ์อยู่ในเกณฑ์ปกติ มีสัมพันธภาพที่ดีกับเพื่อนและครู"
  }
];

export const INITIAL_REFERRALS: StudentReferral[] = [
  {
    "id": "ref-001",
    "studentId": "std-126",
    "referralDate": "2026-07-08",
    "type": "internal",
    "toDepartment": "กลุ่มงานแนะแนวการศึกษา และงานทุนการศึกษา (กสศ.)",
    "reason": "ขอรับความช่วยเหลือทุนการศึกษาปัจจัยพื้นฐานนักเรียนยากจนพิเศษ และการฟื้นฟูผลการเรียน",
    "symptomsAndDetails": "ครอบครัวฐานะยากจนมาก ขาดแคลนทุนทรัพย์ นักเรียนขาดเรียนบ่อยและผลการเรียนถดถอย มีภาวะวิตกกังวล",
    "urgency": "urgent",
    "referredBy": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "currentStatus": "in_progress",
    "actionTaken": "ประสานงานขอรับทุนการศึกษา กสศ. และจัดตารางครูแนะแนวให้คำปรึกษาสัปดาห์ละ 1 ครั้ง",
    "resultNotes": "ประสานงานเรียบร้อยแล้ว อยู่ระหว่างการพิจารณาจัดสรรทุนและติดตามผลการเรียนอย่างใกล้ชิด",
    "updatedDate": "2026-07-18"
  }
];

export const INITIAL_INTERVENTIONS: InterventionLog[] = [
  {
    "id": "int-001",
    "studentId": "std-001",
    "logDate": "2026-07-10",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูวรรณา วรศิลป์ (ครูประจำชั้นอนุบาล 2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-002",
    "studentId": "std-007",
    "logDate": "2026-07-16",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-16"
  },
  {
    "id": "int-003",
    "studentId": "std-013",
    "logDate": "2026-07-22",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสมใจ รักเรียน (ครูประจำชั้น ป.1)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-22"
  },
  {
    "id": "int-004",
    "studentId": "std-019",
    "logDate": "2026-07-13",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-13"
  },
  {
    "id": "int-005",
    "studentId": "std-025",
    "logDate": "2026-07-19",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-19"
  },
  {
    "id": "int-006",
    "studentId": "std-031",
    "logDate": "2026-07-10",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูนิตยา สุขเกษม (ครูประจำชั้น ป.2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-007",
    "studentId": "std-037",
    "logDate": "2026-07-16",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-16"
  },
  {
    "id": "int-008",
    "studentId": "std-043",
    "logDate": "2026-07-22",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูประเสริฐ ดีเลิศ (ครูประจำชั้น ป.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-22"
  },
  {
    "id": "int-009",
    "studentId": "std-049",
    "logDate": "2026-07-13",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-13"
  },
  {
    "id": "int-010",
    "studentId": "std-055",
    "logDate": "2026-07-19",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-19"
  },
  {
    "id": "int-011",
    "studentId": "std-061",
    "logDate": "2026-07-10",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูกาญจนา ทิพย์เนตร (ครูประจำชั้น ป.4)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-012",
    "studentId": "std-067",
    "logDate": "2026-07-16",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-16"
  },
  {
    "id": "int-013",
    "studentId": "std-073",
    "logDate": "2026-07-22",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-22"
  },
  {
    "id": "int-014",
    "studentId": "std-079",
    "logDate": "2026-07-13",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูวีรวัฒน์ ปัญญาวงศ์ (ครูประจำชั้น ป.5)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-13"
  },
  {
    "id": "int-015",
    "studentId": "std-085",
    "logDate": "2026-07-19",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสุทธิพงษ์ ทองสุข (ครูประจำชั้น ป.6)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-19"
  },
  {
    "id": "int-016",
    "studentId": "std-091",
    "logDate": "2026-07-10",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-017",
    "studentId": "std-097",
    "logDate": "2026-07-16",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-16"
  },
  {
    "id": "int-018",
    "studentId": "std-103",
    "logDate": "2026-07-22",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูสมพร เจริญจิต (ครูประจำชั้น ม.1)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-22"
  },
  {
    "id": "int-019",
    "studentId": "std-108",
    "logDate": "2026-07-12",
    "activityType": "การให้คำปรึกษา",
    "topic": "การให้คำปรึกษาปรับเปลี่ยนพฤติกรรมและพัฒนาทักษะการเรียนรู้",
    "description": "พูดคุยสร้างแรงบันดาลใจ จัดทำตารางทบทวนบทเรียน และติดตามการส่งงานในชั้นเรียน",
    "counselor": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "outcome": "พฤติกรรม/ผลการเรียนดีขึ้นชัดเจน",
    "nextAppointment": "2026-08-12"
  },
  {
    "id": "int-020",
    "studentId": "std-109",
    "logDate": "2026-07-13",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-13"
  },
  {
    "id": "int-021",
    "studentId": "std-115",
    "logDate": "2026-07-19",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูอารีรัตน์ มงคลศิลป์ (ครูประจำชั้น ม.2)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-19"
  },
  {
    "id": "int-022",
    "studentId": "std-121",
    "logDate": "2026-07-10",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-023",
    "studentId": "std-126",
    "logDate": "2026-07-10",
    "activityType": "การมอบทุนการศึกษา",
    "topic": "ประสานขอรับทุนการศึกษา กสศ. และทุนปัจจัยพื้นฐานนักเรียนยากจน",
    "description": "ลงพื้นที่เยี่ยมบ้านเพิ่มเติม รวบรวมเอกสารรับรองรายได้ และประสานงานส่งต่อกลุ่มงานแนะแนว",
    "counselor": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-10"
  },
  {
    "id": "int-024",
    "studentId": "std-127",
    "logDate": "2026-07-16",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-16"
  },
  {
    "id": "int-025",
    "studentId": "std-133",
    "logDate": "2026-07-22",
    "activityType": "ส่งเสริมความสามารถพิเศษ",
    "topic": "กิจกรรมส่งเสริมทักษะวิชาการและการพัฒนาคุณลักษณะอันพึงประสงค์",
    "description": "ส่งเสริมการเข้าร่วมกิจกรรมพัฒนาผู้เรียน เสริมทักษะการคิดวิเคราะห์และการทำงานร่วมกันเป็นทีม",
    "counselor": "ครูชำนาญ กิจพิบูลย์ (ครูประจำชั้น ม.3)",
    "outcome": "พัฒนาการเป็นที่น่าพอใจ",
    "nextAppointment": "2026-08-22"
  }
];

export const SPECIAL_EDUCATION_REPORT_META = {
  title: "รายงานข้อมูลนักเรียน ทุกระดับชั้น (การศึกษาพิเศษ)",
  reportDate: "10 พฤศจิกายน 2568",
  academicYear: "2568",
  schoolName: "โรงเรียน บ้านห้วยไคร้",
  serviceArea: "สพป.สุโขทัย เขต 2",
  department: "สำนักบริหารงานการศึกษาพิเศษ สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน",
  totalStudentsWithDisability: 18
};
