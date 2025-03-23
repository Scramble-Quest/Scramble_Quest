// Word list with their corresponding hints
const wordList = [
    {
        word: "ACCENT-COLOR",//ตัวใหญ่เท่านั้น
        hint: "กำหนดสีขององค์ประกอบที่โฟกัส เช่น <input>",
    },
    {
        word: ":ACTIVE",
        hint: "Pseudo-class ใช้เมื่อองค์ประกอบถูกคลิก",
    },
    {
        word: "::AFTER",
        hint: "ใช้เพิ่มเนื้อหาหรือสไตล์ก่อนประกอบ",
    },
    {
        word: "::BEFORE",
        hint: "ใช้เพิ่มเนื้อหาหรือสไตล์หลังองค์ประกอบ",
    },
    {
        word: "ALIGN-CONTENT",
        hint: "ใช้กับ Flexbox หรือ Grid เพื่อจัดเรียงองค์ประกอบ",
    },
    {
        word: "ALIGN-ITEMS",
        hint: "ใช้กับ Flexbox หรือ Grid เพื่อจัดเรียงองค์ประกอบ",
    },
    {
        word: "ALIGN-SELF",
        hint: "ใช้กับ Flexbox หรือ Grid เพื่อจัดเรียงองค์ประกอบ",
    },
    {
        word: "ALL",
        hint: "รีเซ็ตคุณสมบัติ CSS ทั้งหมดในองค์ประกอบเดียว",
    },
    {
        word: "APPEARANCE",
        hint: "ปรับสไตล์ของ UI ดั้งเดิม (เช่น ปุ่ม <input>)",
    },
    {
        word: ":ANY-LINK",
        hint: "จับทุก <a> ที่เป็นลิงก์ ไม่ว่าจะเป็น :visited หรือ :link",
    },
    {
        word: "ASPECT-RATIO",
        hint: "กำหนดอัตราส่วนกว้าง-สูงขององค์ประกอบ",
    },
    {
        word: "BORDER",
        hint: "จัดการเส้นขอบ",
    },
    {
        word: "BORDER-COLOR",
        hint: "กำหนดสีเส้นขอบ",
    },
    {
        word: "BORDER-WIDTH",
        hint: "จัดการขนาดของเส้นขอบ",
    },
    {
        word: "BORDER-STYLE",
        hint: "กําหนดรูปแบบของเส้นขอบ",
    },
    {
        word: "BOX-SHADOW",
        hint: "เพิ่มเงาให้กล่อง",
    },
    {
        word: "BOX-SIZING",
        hint: "กำหนดว่าความกว้างขององค์ประกอบรวม padding/border หรือไม่",
    },
    {
        word: "BOTTOM",
        hint: "กำหนดตำแหน่งขององค์ประกอบ",
    },
    {
        word: "TOP",
        hint: "กำหนดตำแหน่งขององค์ประกอบ",
    },
    {
        word: "LEFT",
        hint: "กำหนดตำแหน่งขององค์ประกอบ",
    },
    {
        word: "RIGHT",
        hint: "กำหนดตำแหน่งขององค์ประกอบ",
    },
    {
        word: "BACKGROUND",
        hint: "จัดการพื้นหลัง",
    },
    {
        word: "BACKGROUND-COLOR",
        hint: "จัดการสีพื้นหลัง",
    },
    {
        word: "BACKGROUND-IMAGE",
        hint: "จัดการภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-SIZE",
        hint: "จัดการขนาดภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-POSITION",
        hint: "จัดการตำแหน่งภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-REPEAT",
        hint: "จัดการซ้ําภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-ATTACHMENT",
        hint: "จัดการการเชื่อมต่อภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-CLIP",
        hint: "จัดการภาพพื้นหลัง",
    },
    {
        word: "BACKGROUND-BLEND-MODE",
        hint: "จัดการภาพพื้นหลัง",
    },
    {
        word: "COLOR",
        hint: "กำหนดสี",
    },
    {
        word: "<COLOR>",
        hint: "กำหนดสี",
    },
    {
        word: "CURSOR",
        hint: "กำหนดรูปร่างเมาส์",
    },
    {
        word: "CLIP-PATH",
        hint: "ใช้ตัดรูปร่างขององค์ประกอบ",
    },
    {
        word: "COLUMNS",
        hint: "แบ่งเนื้อหาเป็นคอลัมน์",
    },
    {
        word: "COLUMN-WIDTH",
        hint: "กำหนดความกว้างของคอลัมน์",
    },
    {
        word: "COLUMN-COUNT",
        hint: "กำหนดจํานวนคอลัมน์",
    },
    {
        word: "CLEAR",
        hint: "ป้องกันการชนของ float",
    },
    {
        word: "CONTRAST()",
        hint: "ปรับค่าความต่างของสี",
    },
    {
        word: "CALC()",
        hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
    },
    {
        word: "CLAMP()",
        hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
    },
    {
        word: "COS()",
        hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
    },
    {
        word: "CIRCLE()",
        hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
    },
    {
        word: "::CUE",
        hint: "ใช้กำหนดสไตล์คำบรรยายในวิดีโอ",
    },
    {
        word: "CAPTION-SIDE",
        hint: "ตำแหน่งของ caption ใน <table>",
    },
    {
        word: "DIRECTION",
        hint: "กำหนดทิศทางของข้อความ (ltr หรือ rtl)",
    },
    {
        word: "DISPLAY",
        hint: "ใช้กำหนดการแสดงผล (block, inline, flex, grid ฯลฯ)",
    },
    {
        word: ":DISABLED",
        hint: "ใช้กับ input ที่ถูกปิดใช้งาน",
    },
    {
        word: "EMPTY-CELLS",
        hint: "ควบคุมการแสดงเซลล์ว่างใน <table>",
    },
    {
        word: ":EMPTY",
        hint: "ใช้เลือกองค์ประกอบที่ไม่มีลูกภายใน",
    },
    {
        word: "FONT-FAMILY",
        hint: "กำหนดฟอนต์ของตัวอักษร",
    },
    {
        word: "FONT-SIZE",
        hint: "กำหนดขนาดตัวอักษร",
    },
    {
        word: "FONT-WEIGHT",
        hint: "กำหนดความหนาของตัวอักษร (normal, bold, lighter, bolder)",
    },
    {
        word: "FONT-STYLE",
        hint: "กำหนดสไตล์ตัวอักษร (normal, italic, oblique)",
    },
    {
        word: "FLOAT",
        hint: "กำหนดการลอยขององค์ประกอบ (left, right, none)",
    },
    {
        word: "FLEX",
        hint: "ใช้สำหรับ Flexbox layout",
    },
    {
        word: "FLEX-WRAP",
        hint: "กำหนดให้ Flexbox มีการขึ้นบรรทัดใหม่หรือไม่",
    },
    {
        word: "FILTER",
        hint: "ใช้ใส่เอฟเฟกต์ให้กับองค์ประกอบ เช่น blur(), brightness()",
    },
    {
        word: ":FOCUS",
        hint: "เลือกองค์ประกอบที่ได้รับการโฟกัส",
    },
    {
        word: "GAP",
        hint: "ใช้กำหนดระยะห่างระหว่าง grid หรือ flex items",
    },
    {
        word: "GRID-AREA",
        hint: "ใช้กำหนดตำแหน่งของ element ภายใน CSS Grid",
    },
    {
        word: "GRID-TEMPLATE",
        hint: "ใช้กำหนดรูปแบบโครงสร้างของ grid ภายใน CSS Grid",
    },
    {
        word: "HEIGHT",
        hint: "ใช้กำหนดความสูงของ element",
    },
    {
        word: "INHERIT",
        hint: "ใช้สืบทอดค่าของ property จาก parent element ",
    },
    {
        word: "INITIAL",
        hint: "ใช้รีเซ็ตค่าของ property ให้เป็นค่าดั้งเดิม ",
    },
    {
        word: "ISOLATION",
        hint: "ใช้แยก layer ของ element ออกจาก background อื่น ๆ ",
    },
    {
        word: "JUSTIFY-CONTENT",
        hint: "กำหนดการจัดวางองค์ประกอบภายใน flexbox หรือ grid ",
    },
    {
        word: "JUSTIFY-ITEMS",
        hint: "กำหนดการจัดวาง items ภายใน grid container ",
    },
    {
        word: "JUSTIFY-SELF",
        hint: "กำหนดการจัดวาง item หนึ่ง ๆ ภายใน grid container ",
    },
    {
        word: "LETTER-SPACING",
        hint: "กำหนดระยะห่างระหว่างตัวอักษร ",
    },
    {
        word: "LINE-BREAK",
        hint: "ควบคุมการขึ้นบรรทัดของข้อความ ",
    },
    {
        word: "LINE-HEIGHT",
        hint: "กำหนดความสูงของบรรทัด ",
    },
    {
        word: "LIST-STYLE",
        hint: "กำหนดรูปแบบของรายการ (เช่น bullet points) ",
    },
    {
        word: "LIST-STYLE-IMAGE",
        hint: "ใช้กำหนดรูปภาพแทน bullet point ของรายการ ",
    },
    {
        word: "LIST-STYLE-POSITION",
        hint: "กำหนดตำแหน่งของ bullet point ",
    },
    {
        word: "LIST-STYLE-TYPE",
        hint: "กำหนดประเภทของ bullet point เช่น disc, circle, square ",
    },
    {
        word: ":LINK",
        hint: "ใช้กำหนดสไตล์ของลิงก์ที่ยังไม่ถูกคลิก ",
    },
    {
        word: "MARGIN",
        hint: "กำหนดระยะห่างรอบ ๆ element ในแนวแกนและแนวตั้ง ",
    },
    {
        word: "MARGIN-TOP",
        hint: "กำหนดระยะห่างรอบ ๆ element ข้างบน",
    },
    {
        word: "MARGIN-BOTTOM",
        hint: "กำหนดระยะห่างรอบ ๆ element ข้างล่าง",
    },
    {
        word: "MARGIN-LEFT",
        hint: "กำหนดระยะห่างรอบ ๆ element ซ้าย",
    },
    {
        word: "MARGIN-RIGHT",
        hint: "กำหนดระยะห่างรอบ ๆ element ขวา ",
    },
    {
        word: "MAX-WIDTH",
        hint: "กำหนดค่าความกว้างสูงสุดของ element ",
    },
    {
        word: "MAX-HEIGHT",
        hint: "กำหนดค่าความสูงสูงสุดของ element ",
    },
    {
        word: "MIN-WIDTH",
        hint: "กำหนดค่าความกว้างขั้นต่ำของ element ",
    },
    {
        word: "MIN-HEIGHT",
        hint: "กำหนดค่าความสูงขั้นต่ำของ element ",
    },
    {
        word: "MIX-BLEND-MODE",
        hint: "กำหนดวิธีการผสมสีระหว่าง element และ background ",
    },
    {
        word: ":NTH-CHILD()",
        hint: "ใช้เลือก element ตามลำดับที่กำหนด ",
    },
    {
        word: ":NTH-LAST-CHILD()",
        hint: "ใช้เลือก element จากลำดับสุดท้าย ",
    },
    {
        word: ":NTH-OF-TYPE()",
        hint: "ใช้เลือก element ที่เป็นชนิดเดียวกันตามลำดับที่กำหนด ",
    },
    {
        word: "OBJECT-FIT",
        hint: "ควบคุมการปรับขนาดของรูปภาพหรือวิดีโอให้พอดีกับ container ",
    },
    {
        word: "OBJECT-POSITION",
        hint: "จัดตำแหน่งของรูปภาพภายใน container ",
    },
    {
        word: "OPACITY",
        hint: "กำหนดความโปร่งใสขององค์ประกอบ ",
    },
    {
        word: "ORDER",
        hint: "ใช้กับ Flexbox หรือ Grid เพื่อกำหนดลำดับขององค์ประกอบ ",
    },
    {
        word: "OUTLINE",
        hint: "กำหนดเส้นขอบภายนอกขององค์ประกอบ ",
    },
    {
        word: "OUTLINE-COLOR",
        hint: "ระบุสีของเส้นขอบภายนอก ",
    },
    {
        word: "OUTLINE-OFFSET",
        hint: "กำหนดระยะห่างของเส้นขอบออกจากขอบขององค์ประกอบ ",
    },
    {
        word: "OUTLINE-STYLE",
        hint: "ระบุสไตล์ของเส้นขอบ เช่น solid, dotted ",
    },
    {
        word: "OUTLINE-WIDTH",
        hint: "กำหนดความหนาของเส้นขอบ ",
    },
    {
        word: "OVERFLOW",
        hint: "ควบคุมว่าคอนเทนต์ที่เกินขนาดขององค์ประกอบจะถูกแสดงอย่างไร ",
    },
    {
        word: "OVERFLOW-X",
        hint: "ควบคุมการ overflow ในแนวแกน X  ",
    },
    {
        word: "OVERFLOW-Y",
        hint: "ควบคุมการ overflow ในแนวแกน Y ",
    },
    {
        word: "PADDING",
        hint: "กำหนดระยะห่างระหว่างเนื้อหากับขอบขององค์ประกอบ ",
    },
    {
        word: "PADDING-TOP",
        hint: "กำหนดค่า padding สำหรับด้านบนขององค์ประกอบ ",
    },
    {
        word: "PADDING-BOTTOM",
        hint: "กำหนดค่า padding สำหรับด้านล่างขององค์ประกอบ ",
    },
    {
        word: "PADDING-LEFT",
        hint: "กำหนดค่า padding สำหรับด้านซ้ายขององค์ประกอบ ",
    },
    {
        word: "PADDING-RIGHT",
        hint: "กำหนดค่า padding สำหรับด้านขวาขององค์ประกอบ ",
    },
    {
        word: "POSITION",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบ เช่น relative, absolute, fixed ",
    },
    {
        word: "POINTER-EVENTS",
        hint: "ควบคุมว่าองค์ประกอบสามารถรับอีเวนต์ของเมาส์หรือสัมผัสได้หรือไม่ ",
    },
    {
        word: "QUOTES",
        hint: "ใช้กำหนดเครื่องหมายคำพูดสำหรับภาษาและสไตล์ต่างๆ ",
    },
    {
        word: "::PLACEHOLDER",
        hint: "ใช้กำหนดสไตล์ให้กับข้อความ placeholder ใน <input> หรือ <textarea> ",
    },
    {
        word: ":PLACEHOLDER-SHOWN",
        hint: "ใช้เลือก input field ที่มี placeholder แสดงอยู่ ",
    },
    {
        word: ":PLAYING",
        hint: "ใช้กับ <video> หรือ <audio> เพื่อกำหนดสไตล์ขณะเล่น ",
    },
    {
        word: ":PAUSED",
        hint: "ใช้กับ <video> หรือ <audio> เพื่อกำหนดสไตล์ขณะหยุด ",
    },
    {
        word: "REM",
        hint: "ใช้กำหนดขนาดแบบ relative เทียบกับ font-size ของ <html> ",
    },
    {
        word: "LENGTH#REM",
        hint: "ใช้กำหนดขนาดแบบ relative เทียบกับ font-size ของ <html> ",
    },
    {
        word: "RGB()",
        hint: "ใช้กำหนดค่าสีแบบ RGB ",
    },
    {
        word: ":REQUIRED",
        hint: "ใช้กำหนดสไตล์ให้กับ <input> ที่มี required ",
    },
    {
        word: ":RIGHT",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบใน layout ",
    },
    {
        word: "RIGHT",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบใน layout ",
    },
    {
        word: ":ROOT",
        hint: "ใช้กำหนดค่าตัวแปร CSS ที่ระดับสูงสุดของเอกสาร HTML ",
    },
    {
        word: "ROW-GAP",
        hint: "ใช้กำหนดระยะห่างระหว่างแถวใน Flexbox และ Grid ",
    },
    {
        word: "RESIZE",
        hint: "ควบคุมความสามารถในการปรับขนาดขององค์ประกอบ เช่น textarea ",
    },
    {
        word: "ROTATE()",
        hint: "ใช้หมุนองค์ประกอบใน 2D space หรือ 3D space ",
    },
    {
        word: "SCALE()",
        hint: "ใช้ปรับขนาดขององค์ประกอบ ",
    },
    {
        word: "SCALEX()",
        hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน X ",
    },
    {
        word: "SCALEY()",
        hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน Y ",
    },
    {
        word: "SCALEZ()",
        hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน Z ",
    },
    {
        word: "SCROLL()",
        hint: "ใช้ควบคุมพฤติกรรมการเลื่อน (smooth scroll) ",
    },
    {
        word: "SCROLL-BEHAVIOR",
        hint: "ใช้ควบคุมพฤติกรรมการเลื่อน (smooth scroll) ",
    },
    {
        word: "SCROLL-PADDING",
        hint: "ใช้จัดระยะห่างของการเลื่อน (scroll snapping) ",
    },
    {
        word: "SCROLL-MARGIN",
        hint: "ใช้จัดระยะห่างของการเลื่อน (scroll snapping) ",
    },
    {
        word: "::SELECTION",
        hint: "ใช้กำหนดสไตล์ของข้อความที่ถูกเลือก ",
    },
    {
        word: "SEPIA()",
        hint: "ฟิลเตอร์ CSS สำหรับทำให้ภาพเป็นสีซีเปีย (sepia tone) ",
    },
    {
        word: "SIN()",
        hint: "ใช้ฟังก์ชันตรีโกณมิติใน CSS ",
    },
    {
        word: "COS()",
        hint: "ใช้ฟังก์ชันตรีโกณมิติใน CSS ",
    },
    {
        word: "TAN()",
        hint: "ใช้ฟังก์ชันตรีโกณมิติใน CSS ",
    },
    {
        word: "TAB-SIZE",
        hint: "กำหนดขนาดของแท็บในข้อความ ",
    },
    {
        word: "TABLE-LAYOUT",
        hint: "กำหนดรูปแบบของตาราง (auto, fixed) ",
    },
    {
        word: "TEXT-ALIGN",
        hint: "ใช้กำหนดการจัดตำแหน่งข้อความ ",
    },
    {
        word: "TEXT-ALIGN-LAST",
        hint: "ใช้กำหนดการจัดตำแหน่งข้อความ",
    },
    {
        word: "TEXT-DECORATION",
        hint: "ใช้กำหนดการตกแต่งข้อความ เช่น เส้นใต้ ",
    },
    {
        word: "TEXT-DECORATION-COLOR",
        hint: "ใช้กำหนดสีของข้อความ เช่น เส้นใต้ ",
    },
    {
        word: "TEXT-DECORATION-LINE",
        hint: "ใช้กำหนดเส้นขอบของข้อความ เช่น เส้นใต้ ",
    },
    {
        word: "TEXT-SHADOW",
        hint: "เพิ่มเงาให้ตัวอักษร ",
    },
    {
        word: "TEXT-TRANSFORM",
        hint: "เปลี่ยนรูปแบบข้อความเป็นตัวพิมพ์ใหญ่ (uppercase) หรือเล็ก (lowercase) ",
    },
    {
        word: "TOP",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบที่ใช้ position ",
    },
    {
        word: "UNICODE-BIDI",
        hint: "ใช้ควบคุมทิศทางของข้อความ (เช่น ซ้ายไปขวาหรือขวาไปซ้าย) ",
    },
    {
        word: "UNSET",
        hint: "รีเซ็ตค่าคุณสมบัติเป็น inherit หรือ initial ขึ้นอยู่กับบริบท ",
    },
    {
        word: "URL()",
        hint: "ใช้สำหรับอ้างอิงไฟล์ใน CSS (เช่น รูปภาพ background-image: url('image.jpg');) ",
    },
    {
        word: "USER-SELECT",
        hint: "กำหนดให้ผู้ใช้สามารถเลือกข้อความได้หรือไม่ (none, auto) ",
    },
    {
        word: "VERTICAL-ALIGN",
        hint: "ใช้กำหนดการจัดเรียงแนวตั้งของข้อความหรือองค์ประกอบ ",
    },
    {
        word: "VISIBILITY",
        hint: "ควบคุมการแสดงผล (visible, hidden, collapse) ",
    },
    {
        word: ":VISITED",
        hint: "ใช้กำหนดสไตล์ของลิงก์ที่ถูกคลิกแล้ว ",
    },
    {
        word: "WHITE-SPACE",
        hint: "กำหนดการจัดการช่องว่าง (normal, nowrap, pre) ",
    },
    {
        word: "WORD-BREAK",
        hint: "ควบคุมการตัดคำ (break-word, keep-all) ",
    },
    {
        word: "WORD-SPACING",
        hint: "ปรับระยะห่างระหว่างคำ ",
    },
    {
        word: "WORD-WRAP",
        hint: "กำหนดให้ข้อความสามารถตัดบรรทัดเมื่อเกินขนาดกล่อง ",
    },
    {
        word: "RESOLUTION#X",
        hint: "กำหนดค่าความละเอียดในหน่วย X (เช่น dpi, dpcm) ",
    },
    {
        word: "X",
        hint: "ค่าตัวแปรของแกน X สำหรับการแปลงพิกัด ",
    },
    {
        word: "Y",
        hint: "ค่าตัวแปรของแกน Y สำหรับการแปลงพิกัด ",
    },
    {
        word: "Z-INDEX",
        hint: "ควบคุมลำดับการวางซ้อนขององค์ประกอบ (ค่ามากกว่าจะอยู่ข้างบน) ",
    },
    {
        word: "ZOOM",
        hint: "ควบคุมการขยาย/ย่อขององค์ประกอบ (ใช้ในบางเบราว์เซอร์เท่านั้น) ",
    },
];

// Export the word list
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wordList;
}