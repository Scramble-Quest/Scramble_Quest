// Word list with their corresponding hints
const wordList = [
    {
        word: "<!DOCTYPE>",//ตัวใหญ่เท่านั้น
        hint: "กำหนดประเภทของเอกสาร HTML",
    },
    {
        word: "<HTMl>",
        hint: "แท็กหลักที่ครอบเนื้อหาทั้งหมดของเว็บ",
    },
    {
        word: "<HEAD>",
        hint: "ส่วนหัวของเอกสาร ใช้เก็บ metadata",
    },
    {
        word: "<TITLE>",
        hint: "ชื่อของหน้าเว็บที่แสดงในแท็บของเบราว์เซอร์",
    },
    {
        word: "<META>",
        hint: "กำหนดข้อมูลเมตา",
    },
    {
        word: "<LINK>",
        hint: "ใช้เชื่อมโยงไฟล์ภายนอก",
    },
    {
        word: "<STYLE>",
        hint: "ใช้เขียน CSS ภายใน HTML",
    },
    {
        word: "<SCRIPT>",
        hint: "ใช้เพิ่ม JavaScript ลงใน HTML",
    },
    {
        word: "<BODY>",
        hint: "ส่วนที่ใช้แสดงเนื้อหาบนเว็บ",
    },
    {
        word: "<H1>-<H6>",
        hint: "แท็กสำหรับหัวข้อ (ใหญ่สุด-เล็กสุด)",
    },
    {
        word: "<P>",
        hint: "ย่อหน้าข้อความ",
    },
    {
        word: "<BR>",
        hint: "ขึ้นบรรทัดใหม่ (ไม่ต้องปิดแท็ก)",
    },
    {
        word: "<HR>",
        hint: "เส้นคั่นแนวนอน",
    },
    {
        word: "<B>",
        hint: "ทำตัวหนา (ไม่เน้นความสำคัญ)",
    },
    {
        word: "<STRONG>",
        hint: "ทำตัวหนา (มีความสำคัญ)",
    },
    {
        word: "<I>",
        hint: "ทำตัวเอียง (ไม่เน้นความสำคัญ)",
    },
    {
        word: "<EM>",
        hint: "ทำตัวเอียง (เน้นความสำคัญ)",
    },
    {
        word: "<MARK>",
        hint: "ไฮไลต์ข้อความ",
    },
    {
        word: "<SMALL>",
        hint: "ข้อความขนาดเล็ก",
    },
    {
        word: "<DEL>",
        hint: "ขีดฆ่าข้อความ",
    },
    {
        word: "<INS>",//ตัวใหญ่เท่านั้น
        hint: "ขีดเส้นใต้ข้อความ",
    },
    {
        word: "<SUB>",
        hint: "ตัวห้อย (เช่น H₂O)",
    },
    {
        word: "<SUP>",
        hint: "ตัวยก (เช่น X²)",
    },
    {
        word: "<BLOCKQUOTE>",
        hint: "ใช้อ้างอิงข้อความจากแหล่งอื่น",
    },
    {
        word: "<CITE>",
        hint: "ใช้อ้างอิงชื่อเรื่องของงาน",
    },
    {
        word: "<A>",
        hint: "ใช้สร้างลิงก์ไปยังหน้าอื่น",
    },
    {
        word: "<NAV>",
        hint: "ใช้สำหรับเมนูนำทาง",
    },
    {
        word: "<UL>",
        hint: "รายการแบบไม่มีลำดับ (แสดงเป็น bullet points)",
    },
    {
        word: "<OL>",
        hint: "รายการแบบมีลำดับ (แสดงเป็นตัวเลข)",
    },
    {
        word: "<LI>",
        hint: "รายการใน <ul> หรือ <ol>",
    },
    {
        word: "<DL>",
        hint: "รายการคำอธิบาย",
    },
    {
        word: "<DT>",
        hint: "หัวข้อใน <dl>",
    },
    {
        word: "<DD>",
        hint: "คำอธิบายของ <dt>",
    },
    {
        word: "<TABLE>",
        hint: "ใช้สร้างตาราง",
    },
    {
        word: "<TR>",
        hint: "แถวของตาราง",
    },
    {
        word: "<TH>",
        hint: "หัวข้อของคอลัมน์ (ตัวหนาและอยู่ตรงกลาง)",
    },
    {
        word: "<TD>",
        hint: "เซลล์ของข้อมูล",
    },
    {
        word: "<FORM>",
        hint: "ฟอร์มสำหรับรับข้อมูลจากผู้ใช้",
    },
    {
        word: "<INPUT>",
        hint: "ช่องกรอกข้อมูล (text, password, email ฯลฯ)",
    },
    {
        word: "<BUTTON>",
        hint: "ปุ่มกด",
    },
    
        
];

// Export the word list
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wordList;
}
