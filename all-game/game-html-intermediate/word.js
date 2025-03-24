// Word list with their corresponding hints
const wordList = [
    {
        word: "<THEAD>",//ตัวใหญ่เท่านั้น
        hint: "กลุ่มส่วนหัวของตาราง",
    },
    {
        word: "<TBODY>",
        hint: "กลุ่มเนื้อหาหลักของตาราง",
    },
    {
        word: "<TFOOT>",
        hint: "กลุ่มส่วนท้ายของตาราง",
    },
    {
        word: "<COL>",
        hint: "กำหนดคุณสมบัติของคอลัมน์",
    },
    {
        word: "<COLGROUP>",
        hint: "จัดกลุ่มคอลัมน์ในตาราง",
    },
    {
        word: "<TEXTAREA>",
        hint: "ช่องกรอกข้อความหลายบรรทัด",
    },
    {
        word: "<SELECT>",
        hint: "เมนูเลือกค่า",
    },
    {
        word: "<OPTION>",
        hint: "ตัวเลือกใน <select>",
    },
    {
        word: "<OPTGROUP>",
        hint: "กลุ่มตัวเลือกใน <select>",
    },
    {
        word: "<LABEL>",
        hint: "ป้ายกำกับ <input>",
    },
    {
        word: "<FIELDSET>",
        hint: "กลุ่มของฟอร์ม",
    },
    {
        word: "<LEGEND>",
        hint: "หัวข้อของ <fieldset>",
    },
    {
        word: "<DATALIST>",
        hint: "รายการค่าที่แนะนำ",
    },
    {
        word: "<OUTPUT>",
        hint: "แสดงค่าผลลัพธ์",
    },
    {
        word: "<PROGRESS>",
        hint: "แสดงความคืบหน้า",
    },
    {
        word: "<METER>",
        hint: "วัดระดับค่า",
    },
    {
        word: "<DIALOG>",
        hint: "กล่องโต้ตอบ",
    },
    {
        word: "<MENU>",
        hint: "เมนูคำสั่ง",
    },
    {
        word: "<TEMPLATE>",
        hint: "เทมเพลต HTML ซ่อนอยู่",
    },
    {
        word: "<SLOT>",
        hint: "ช่องสำหรับ Web Components",
    },
    {
        word: "<IMG>",//ตัวใหญ่เท่านั้น
        hint: "แสดงรูปภาพ",
    },
    {
        word: "<AUDIO>",
        hint: "ใส่ไฟล์เสียง",
    },
    {
        word: "<VIDEO>",
        hint: "ใส่ไฟล์วิดีโอ",
    },
    {
        word: "<IFRAME>",
        hint: "ฝังหน้าเว็บ",
    },
    {
        word: "<EMBED>",
        hint: "ฝังเนื้อหาเก่า",
    },
    {
        word: "<OBJECT>",
        hint: "ฝังเนื้อหาภายนอก",
    },
    {
        word: "<PARAM>",
        hint: "พารามิเตอร์ <object>",
    },
    {
        word: "<PICTURE>",
        hint: "ใช้แสดงรูปภาพแบบ responsive",
    },
    {
        word: "<SOURCE>",
        hint: "แหล่งข้อมูล <audio> / <video>",
    },
    {
        word: "<TRACK>",
        hint: "คำบรรยายวิดีโอ",
    },
    {
        word: "<BASE>",
        hint: "URL พื้นฐาน",
    },
    {
        word: "<NOSCRIPT>",
        hint: "แสดงเนื้อหาเมื่อ JS ปิด",
    },
    {
        word: "<HEADER>",
        hint: "ส่วนหัว",
    },
    {
        word: "<FOOTER>",
        hint: "ส่วนท้าย",
    },
    {
        word: "<SECTION>",
        hint: "กลุ่มเนื้อหา",
    },
    {
        word: "<ARTICLE>",
        hint: "บทความ",
    },
    {
        word: "<ASIDE>",
        hint: "เนื้อหาข้างเคียง",
    },
    {
        word: "<MAIN>",
        hint: "เนื้อหาหลัก",
    },
    {
        word: "<FIGURE>",
        hint: "กลุ่มของรูปภา",
    },
    {
        word: "<FIGCAPTION>",
        hint: "คำบรรยายใต้รูป",
    },
];

// Export the word list
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wordList;
}
