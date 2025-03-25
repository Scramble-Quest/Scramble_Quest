let words = {
    'begin': [
        {
            word: "accent-color",//ตัวใหญ่เท่านั้น
            hint: "กำหนดสีขององค์ประกอบที่โฟกัส เช่น input",
        },
        {
            word: ":active",
            hint: "pseudo-class ใช้เมื่อองค์ประกอบถูกคลิก",
        },
        {
            word: "::after",
            hint: "ใช้เพิ่มเนื้อหาหรือสไตล์ก่อนประกอบ",
        },
        {
            word: "::before",
            hint: "ใช้เพิ่มเนื้อหาหรือสไตล์หลังองค์ประกอบ",
        },
        {
            word: "align-content",
            hint: "ใช้กับ flexbox หรือ grid เพื่อจัดเรียงองค์ประกอบ",
        },
        {
            word: "align-items",
            hint: "ใช้กับ flexbox หรือ grid เพื่อจัดเรียงองค์ประกอบ",
        },
        {
            word: "align-self",
            hint: "ใช้กับ flexbox หรือ grid เพื่อจัดเรียงองค์ประกอบ",
        },
        {
            word: "all",
            hint: "รีเซ็ตคุณสมบัติ css ทั้งหมดในองค์ประกอบเดียว",
        },
        {
            word: "appearance",
            hint: "ปรับสไตล์ของ ui ดั้งเดิม (เช่น ปุ่ม input)",
        },
        {
            word: ":any-link",
            hint: "จับทุก <a> ที่เป็นลิงก์ ไม่ว่าจะเป็น :visited หรือ :link",
        },
        {
            word: "aspect-ratio",
            hint: "กำหนดอัตราส่วนกว้าง-สูงขององค์ประกอบ",
        },
        {
            word: "border",
            hint: "จัดการเส้นขอบ",
        },
        {
            word: "border-color",
            hint: "กำหนดสีเส้นขอบ",
        },
        {
            word: "border-width",
            hint: "จัดการขนาดของเส้นขอบ",
        },
        {
            word: "border-style",
            hint: "กําหนดรูปแบบของเส้นขอบ",
        },
        {
            word: "box-shadow",
            hint: "เพิ่มเงาให้กล่อง",
        },
        {
            word: "box-sizing",
            hint: "กำหนดว่าความกว้างขององค์ประกอบรวม padding/border หรือไม่",
        },
        {
            word: "bottom",
            hint: "กำหนดตำแหน่งขององค์ประกอบ",
        },
        {
            word: "top",
            hint: "กำหนดตำแหน่งขององค์ประกอบ",
        },
        {
            word: "left",
            hint: "กำหนดตำแหน่งขององค์ประกอบ",
        },
        {
            word: "right",
            hint: "กำหนดตำแหน่งขององค์ประกอบ",
        },
        {
            word: "background",
            hint: "จัดการพื้นหลัง",
        },
        {
            word: "background-color",
            hint: "จัดการสีพื้นหลัง",
        },
        {
            word: "background-image",
            hint: "จัดการภาพพื้นหลัง",
        },
        {
            word: "background-size",
            hint: "จัดการขนาดภาพพื้นหลัง",
        },
        {
            word: "background-position",
            hint: "จัดการตำแหน่งภาพพื้นหลัง",
        },
        {
            word: "background-repeat",
            hint: "จัดการซ้ําภาพพื้นหลัง",
        },
        {
            word: "background-attachment",
            hint: "จัดการการเชื่อมต่อภาพพื้นหลัง",
        },
        {
            word: "background-clip",
            hint: "จัดการภาพพื้นหลัง",
        },
        {
            word: "background-blend-mode",
            hint: "จัดการภาพพื้นหลัง",
        },
        {
            word: "color",
            hint: "กำหนดสี",
        },
        {
            word: "< color >",
            hint: "กำหนดสี",
        },
        {
            word: "cursor",
            hint: "กำหนดรูปร่างเมาส์",
        },
        {
            word: "clip-path",
            hint: "ใช้ตัดรูปร่างขององค์ประกอบ",
        },
        {
            word: "columns",
            hint: "แบ่งเนื้อหาเป็นคอลัมน์",
        },
        {
            word: "column-width",
            hint: "กำหนดความกว้างของคอลัมน์",
        },
        {
            word: "column-count",
            hint: "กำหนดจํานวนคอลัมน์",
        },
        {
            word: "clear",
            hint: "ป้องกันการชนของ float",
        },
        {
            word: "contrast()",
            hint: "ปรับค่าความต่างของสี",
        },
        {
            word: "calc()",
            hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
        },
        {
            word: "clamp()",
            hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
        },
        {
            word: "cos()",
            hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
        },
        {
            word: "circle()",
            hint: "ฟังก์ชันคำนวณที่ใช้บ่อย",
        },
        {
            word: "::cue",
            hint: "ใช้กำหนดสไตล์คำบรรยายในวิดีโอ",
        },
        {
            word: "caption-side",
            hint: "ตำแหน่งของ caption ใน <table>",
        },
        {
            word: "direction",
            hint: "กำหนดทิศทางของข้อความ (ltr หรือ rtl)",
        },
        {
            word: "display",
            hint: "ใช้กำหนดการแสดงผล (block, inline, flex, grid ฯลฯ)",
        },
        {
            word: ":disabled",
            hint: "ใช้กับ input ที่ถูกปิดใช้งาน",
        },
        {
            word: "empty-cells",
            hint: "ควบคุมการแสดงเซลล์ว่างใน <table>",
        },
        {
            word: ":empty",
            hint: "ใช้เลือกองค์ประกอบที่ไม่มีลูกภายใน",
        },
        {
            word: "font-family",
            hint: "กำหนดฟอนต์ของตัวอักษร",
        },
        {
            word: "font-size",
            hint: "กำหนดขนาดตัวอักษร",
        },
        {
            word: "font-weight",
            hint: "กำหนดความหนาของตัวอักษร (normal, bold, lighter, bolder)",
        },
        {
            word: "font-style",
            hint: "กำหนดสไตล์ตัวอักษร (normal, italic, oblique)",
        },
        {
            word: "float",
            hint: "กำหนดการลอยขององค์ประกอบ (left, right, none)",
        },
        {
            word: "flex",
            hint: "ใช้สำหรับ flexbox layout",
        },
        {
            word: "flex-wrap",
            hint: "กำหนดให้ flexbox มีการขึ้นบรรทัดใหม่หรือไม่",
        },
        {
            word: "filter",
            hint: "ใช้ใส่เอฟเฟกต์ให้กับองค์ประกอบ เช่น blur(), brightness()",
        },
        {
            word: ":focus",
            hint: "เลือกองค์ประกอบที่ได้รับการโฟกัส",
        },
        {
            word: "gap",
            hint: "ใช้กำหนดระยะห่างระหว่าง grid หรือ flex items",
        },
        {
            word: "grid-area",
            hint: "ใช้กำหนดตำแหน่งของ element ภายใน css grid",
        },
        {
            word: "grid-template",
            hint: "ใช้กำหนดรูปแบบโครงสร้างของ grid ภายใน css grid",
        },
        {
            word: "height",
            hint: "ใช้กำหนดความสูงของ element",
        },
        {
            word: "inherit",
            hint: "ใช้สืบทอดค่าของ property จาก parent element ",
        },
        {
            word: "initial",
            hint: "ใช้รีเซ็ตค่าของ property ให้เป็นค่าดั้งเดิม ",
        },
        {
            word: "isolation",
            hint: "ใช้แยก layer ของ element ออกจาก background อื่น ๆ ",
        },
        {
            word: "justify-content",
            hint: "กำหนดการจัดวางองค์ประกอบภายใน flexbox หรือ grid ",
        },
        {
            word: "justify-items",
            hint: "กำหนดการจัดวาง items ภายใน grid container ",
        },
        {
            word: "justify-self",
            hint: "กำหนดการจัดวาง item หนึ่ง ๆ ภายใน grid container ",
        },
        {
            word: "letter-spacing",
            hint: "กำหนดระยะห่างระหว่างตัวอักษร ",
        },
        {
            word: "line-break",
            hint: "ควบคุมการขึ้นบรรทัดของข้อความ ",
        },
        {
            word: "line-height",
            hint: "กำหนดความสูงของบรรทัด ",
        },
        {
            word: "list-style",
            hint: "กำหนดรูปแบบของรายการ (เช่น bullet points) ",
        },
        {
            word: "list-style-image",
            hint: "ใช้กำหนดรูปภาพแทน bullet point ของรายการ ",
        },
        {
            word: "list-style-position",
            hint: "กำหนดตำแหน่งของ bullet point ",
        },
        {
            word: "list-style-type",
            hint: "กำหนดประเภทของ bullet point เช่น disc, circle, square ",
        },
        {
            word: ":link",
            hint: "ใช้กำหนดสไตล์ของลิงก์ที่ยังไม่ถูกคลิก ",
        },
        {
            word: "margin",
            hint: "กำหนดระยะห่างรอบ ๆ element ในแนวแกนและแนวตั้ง ",
        },
        {
            word: "margin-top",
            hint: "กำหนดระยะห่างรอบ ๆ element ข้างบน",
        },
        {
            word: "margin-bottom",
            hint: "กำหนดระยะห่างรอบ ๆ element ข้างล่าง",
        },
        {
            word: "margin-left",
            hint: "กำหนดระยะห่างรอบ ๆ element ซ้าย",
        },
        {
            word: "margin-right",
            hint: "กำหนดระยะห่างรอบ ๆ element ขวา ",
        },
        {
            word: "max-width",
            hint: "กำหนดค่าความกว้างสูงสุดของ element ",
        },
        {
            word: "max-height",
            hint: "กำหนดค่าความสูงสูงสุดของ element ",
        },
        {
            word: "min-width",
            hint: "กำหนดค่าความกว้างขั้นต่ำของ element ",
        },
        {
            word: "min-height",
            hint: "กำหนดค่าความสูงขั้นต่ำของ element ",
        },
        {
            word: "mix-blend-mode",
            hint: "กำหนดวิธีการผสมสีระหว่าง element และ background ",
        },
        {
            word: ":nth-child()",
            hint: "ใช้เลือก element ตามลำดับที่กำหนด ",
        },
        {
            word: ":nth-last-child()",
            hint: "ใช้เลือก element จากลำดับสุดท้าย ",
        },
        {
            word: ":nth-of-type()",
            hint: "ใช้เลือก element ที่เป็นชนิดเดียวกันตามลำดับที่กำหนด ",
        },
        {
            word: "object-fit",
            hint: "ควบคุมการปรับขนาดของรูปภาพหรือวิดีโอให้พอดีกับ container ",
        },
        {
            word: "object-position",
            hint: "จัดตำแหน่งของรูปภาพภายใน container ",
        },
        {
            word: "opacity",
            hint: "กำหนดความโปร่งใสขององค์ประกอบ ",
        },
        {
            word: "order",
            hint: "ใช้กับ flexbox หรือ grid เพื่อกำหนดลำดับขององค์ประกอบ ",
        },
        {
            word: "outline",
            hint: "กำหนดเส้นขอบภายนอกขององค์ประกอบ ",
        },
        {
            word: "outline-color",
            hint: "ระบุสีของเส้นขอบภายนอก ",
        },
        {
            word: "outline-offset",
            hint: "กำหนดระยะห่างของเส้นขอบออกจากขอบขององค์ประกอบ ",
        },
        {
            word: "outline-style",
            hint: "ระบุสไตล์ของเส้นขอบ เช่น solid, dotted ",
        },
        {
            word: "outline-width",
            hint: "กำหนดความหนาของเส้นขอบ ",
        },
        {
            word: "overflow",
            hint: "ควบคุมว่าคอนเทนต์ที่เกินขนาดขององค์ประกอบจะถูกแสดงอย่างไร ",
        },
        {
            word: "overflow-x",
            hint: "ควบคุมการ overflow ในแนวแกน x  ",
        },
        {
            word: "overflow-y",
            hint: "ควบคุมการ overflow ในแนวแกน y ",
        },
        {
            word: "padding",
            hint: "กำหนดระยะห่างระหว่างเนื้อหากับขอบขององค์ประกอบ ",
        },
        {
            word: "padding-top",
            hint: "กำหนดค่า padding สำหรับด้านบนขององค์ประกอบ ",
        },
        {
            word: "padding-bottom",
            hint: "กำหนดค่า padding สำหรับด้านล่างขององค์ประกอบ ",
        },
        {
            word: "padding-left",
            hint: "กำหนดค่า padding สำหรับด้านซ้ายขององค์ประกอบ ",
        },
        {
            word: "padding-right",
            hint: "กำหนดค่า padding สำหรับด้านขวาขององค์ประกอบ ",
        },
        {
            word: "position",
            hint: "ใช้กำหนดตำแหน่งขององค์ประกอบ เช่น relative, absolute, fixed ",
        },
        {
            word: "pointer-events",
            hint: "ควบคุมว่าองค์ประกอบสามารถรับอีเวนต์ของเมาส์หรือสัมผัสได้หรือไม่ ",
        },
        {
            word: "quotes",
            hint: "ใช้กำหนดเครื่องหมายคำพูดสำหรับภาษาและสไตล์ต่างๆ ",
        },
        {
            word: "::placeholder",
            hint: "ใช้กำหนดสไตล์ให้กับข้อความ placeholder ใน input หรือ textarea ",
        },
        {
            word: ":placeholder-shown",
            hint: "ใช้เลือก input field ที่มี placeholder แสดงอยู่ ",
        },
        {
            word: ":playing",
            hint: "ใช้กับ video หรือ audio เพื่อกำหนดสไตล์ขณะเล่น ",
        },
        {
            word: ":paused",
            hint: "ใช้กับ video หรือ audio เพื่อกำหนดสไตล์ขณะหยุด ",
        },
        {
            word: "rem",
            hint: "ใช้กำหนดขนาดแบบ relative เทียบกับ font-size ของ <html> ",
        },
        {
            word: "length#rem",
            hint: "ใช้กำหนดขนาดแบบ relative เทียบกับ font-size ของ <html> ",
        },
        {
            word: "rgb()",
            hint: "ใช้กำหนดค่าสีแบบ rgb ",
        },
        {
            word: ":required",
            hint: "ใช้กำหนดสไตล์ให้กับ input ที่มี required ",
        },
        {
            word: ":right",
            hint: "ใช้กำหนดตำแหน่งขององค์ประกอบใน layout ",
        },
        {
            word: "right",
            hint: "ใช้กำหนดตำแหน่งขององค์ประกอบใน layout ",
        },
        {
            word: ":root",
            hint: "ใช้กำหนดค่าตัวแปร css ที่ระดับสูงสุดของเอกสาร html ",
        },
        {
            word: "row-gap",
            hint: "ใช้กำหนดระยะห่างระหว่างแถวใน flexbox และ grid ",
        },
        {
            word: "resize",
            hint: "ควบคุมความสามารถในการปรับขนาดขององค์ประกอบ เช่น textarea ",
        },
        {
            word: "rotate()",
            hint: "ใช้หมุนองค์ประกอบใน 2d space หรือ 3d space ",
        },
        {
            word: "scale()",
            hint: "ใช้ปรับขนาดขององค์ประกอบ ",
        },
        {
            word: "scalex()",
            hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน x ",
        },
        {
            word: "scaley()",
            hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน y ",
        },
        {
            word: "scalez()",
            hint: "ใช้ปรับขนาดขององค์ประกอบในแนวแกน z ",
        },
        {
            word: "scroll()",
            hint: "ใช้ควบคุมพฤติกรรมการเลื่อน (smooth scroll) ",
        },
        {
            word: "scroll-behavior",
            hint: "ใช้ควบคุมพฤติกรรมการเลื่อน (smooth scroll) ",
        },
        {
            word: "scroll-padding",
            hint: "ใช้จัดระยะห่างของการเลื่อน (scroll snapping) ",
        },
        {
            word: "scroll-margin",
            hint: "ใช้จัดระยะห่างของการเลื่อน (scroll snapping) ",
        },
        {
            word: "::selection",
            hint: "ใช้กำหนดสไตล์ของข้อความที่ถูกเลือก ",
        },
        {
            word: "sepia()",
            hint: "ฟิลเตอร์ css สำหรับทำให้ภาพเป็นสีซีเปีย (sepia tone) ",
        },
        {
            word: "sin()",
            hint: "ใช้ฟังก์ชันตรีโกณมิติใน css ",
        },
        {
            word: "cos()",
            hint: "ใช้ฟังก์ชันตรีโกณมิติใน css ",
        },
        {
            word: "tan()",
            hint: "ใช้ฟังก์ชันตรีโกณมิติใน css ",
        },
        {
            word: "tab-size",
            hint: "กำหนดขนาดของแท็บในข้อความ ",
        },
        {
            word: "table-layout",
            hint: "กำหนดรูปแบบของตาราง (auto, fixed) ",
        },
        {
            word: "text-align",
            hint: "ใช้กำหนดการจัดตำแหน่งข้อความ ",
        },
        {
            word: "text-align-last",
            hint: "ใช้กำหนดการจัดตำแหน่งข้อความ",
        },
        {
            word: "text-decoration",
            hint: "ใช้กำหนดการตกแต่งข้อความ เช่น เส้นใต้ ",
        },
        {
            word: "text-decoration-color",
            hint: "ใช้กำหนดสีของข้อความ เช่น เส้นใต้ ",
        },
        {
            word: "text-decoration-line",
            hint: "ใช้กำหนดเส้นขอบของข้อความ เช่น เส้นใต้ ",
        },
        {
            word: "text-shadow",
            hint: "เพิ่มเงาให้ตัวอักษร ",
        },
        {
            word: "text-transform",
            hint: "เปลี่ยนรูปแบบข้อความเป็นตัวพิมพ์ใหญ่ (uppercase) หรือเล็ก (lowercase) ",
        },
        {
            word: "top",
            hint: "ใช้กำหนดตำแหน่งขององค์ประกอบที่ใช้ position ",
        },
        {
            word: "unicode-bidi",
            hint: "ใช้ควบคุมทิศทางของข้อความ (เช่น ซ้ายไปขวาหรือขวาไปซ้าย) ",
        },
        {
            word: "unset",
            hint: "รีเซ็ตค่าคุณสมบัติเป็น inherit หรือ initial ขึ้นอยู่กับบริบท ",
        },
        {
            word: "url()",
            hint: "ใช้สำหรับอ้างอิงไฟล์ใน css (เช่น รูปภาพ background-image: url('image.jpg');) ",
        },
        {
            word: "user-select",
            hint: "กำหนดให้ผู้ใช้สามารถเลือกข้อความได้หรือไม่ (none, auto) ",
        },
        {
            word: "vertical-align",
            hint: "ใช้กำหนดการจัดเรียงแนวตั้งของข้อความหรือองค์ประกอบ ",
        },
        {
            word: "visibility",
            hint: "ควบคุมการแสดงผล (visible, hidden, collapse) ",
        },
        {
            word: ":visited",
            hint: "ใช้กำหนดสไตล์ของลิงก์ที่ถูกคลิกแล้ว ",
        },
        {
            word: "white-space",
            hint: "กำหนดการจัดการช่องว่าง (normal, nowrap, pre) ",
        },
        {
            word: "word-break",
            hint: "ควบคุมการตัดคำ (break-word, keep-all) ",
        },
        {
            word: "word-spacing",
            hint: "ปรับระยะห่างระหว่างคำ ",
        },
        {
            word: "word-wrap",
            hint: "กำหนดให้ข้อความสามารถตัดบรรทัดเมื่อเกินขนาดกล่อง ",
        },
        {
            word: "resolution#x",
            hint: "กำหนดค่าความละเอียดในหน่วย x (เช่น dpi, dpcm) ",
        },
        {
            word: "x",
            hint: "ค่าตัวแปรของแกน x สำหรับการแปลงพิกัด ",
        },
        {
            word: "y",
            hint: "ค่าตัวแปรของแกน y สำหรับการแปลงพิกัด ",
        },
        {
            word: "z-index",
            hint: "ควบคุมลำดับการวางซ้อนขององค์ประกอบ (ค่ามากกว่าจะอยู่ข้างบน) ",
        },
        {
            word: "zoom",
            hint: "ควบคุมการขยาย/ย่อขององค์ประกอบ (ใช้ในบางเบราว์เซอร์เท่านั้น) ",
        },
        
    ],
};