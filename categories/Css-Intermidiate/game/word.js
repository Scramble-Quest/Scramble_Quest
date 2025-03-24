// Word list with their corresponding hints
const wordList = [
    {
        word: "ANIMATION",//ตัวใหญ่เท่านั้น
        hint: "ใช้กำหนดแอนิเมชันสำหรับองค์ประกอบ",
    },
    {
        word: "ANCHOR()",
        hint: "กำหนดตำแหน่งสมอขององค์ประกอบ (experimental)",
    },
    {
        word: "ANCHOR-SIZE()",
        hint: "กำหนดขนาดของ anchor (experimental)",
    },
    {
        word: "ANGLE",
        hint: "ใช้สำหรับคำนวณมุมหรือสัดส่วนของมุม",
    },
    {
        word: "ANGLE-PERCENTAGE",
        hint: "ใช้สำหรับคำนวณมุมหรือสัดส่วนของมุม",
    },
    {
        word: "ATTR()",
        hint: "ดึงค่าจากแอตทริบิวต์ขององค์ประกอบมาใช้ใน CSS",
    },
    {
        word: "ASIN()",
        hint: "ฟังก์ชันทางคณิตศาสตร์",
    },
    {
        word: "ACOS()",
        hint: "ฟังก์ชันทางคณิตศาสตร์",
    },
    {
        word: "ATAN()",
        hint: "ฟังก์ชันทางคณิตศาสตร์",
    },
    {
        word: "ATAN2()",
        hint: "ฟังก์ชันทางคณิตศาสตร์",
    },
    {
        word: "ANIMATION-DELAY",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-DIRECTION",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-DURATION",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-FILL-MODE",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-ITERATION-COUNT",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-NAME",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-PLAY-STATE",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "ANIMATION-TIMING-FUNCTION",
        hint: "เป็นคุณสมบัติที่เกี่ยวข้องกับแอนิเมชัน",
    },
    {
        word: "BACKDROP-FILTER",
        hint: "ใช้ฟิลเตอร์กับพื้นหลังขององค์ประกอบ",
    },
    {
        word: "BLEND-MODE",
        hint: "กำหนดโหมดการผสมสี",
    },
    {
        word: "BLUR()",
        hint: "เอฟเฟกต์เบลอ",
    },
    {
        word: "BORDER-RADIUS",
        hint: "กำหนดมุมมน",
    },
    {
        word: "BORDER-TOP-LEFT-RADIUS",
        hint: "กำหนดมุมมน",
    },
    {
        word: "BORDER-BOTTOM-RIGHT-RADIUS",
        hint: "กำหนดมุมมน",
    },
    {
        word: "BORDER-COLLAPSE",
        hint: "ใช้กับ <table> เพื่อรวม/แยกเส้นขอบ",
    },
    {
        word: "BORDER-IMAGE",
        hint: "ใช้รูปภาพแทนเส้นขอบ",
    },
    {
        word: "BORDER-IMAGE-SOURCE",
        hint: "ใช้รูปภาพแทนเส้นขอบ",
    },
    {
        word: "BORDER-IMAGE-SLICE",
        hint: "ใช้รูปภาพแทนเส้นขอบ",
    },
    {
        word: "BREAK-AFTER",
        hint: "จัดการการแบ่งหน้า (print) หรือ layout",
    },
    {
        word: "BREAK-BEFORE",
        hint: "จัดการการแบ่งหน้า (print) หรือ layout",
    },
    {
        word: "BREAK-INSIDE",
        hint: "จัดการการแบ่งหน้า (print) หรือ layout",
    },
    {
        word: "BRIGHTNESS()",
        hint: "ปรับความสว่างขององค์ประกอบ",
    },
    {
        word: "CONTENT-VISIBILITY",
        hint: "ปรับการเรนเดอร์เนื้อหา",
    },
    {
        word: "COLOR-SCHEME",
        hint: "รองรับ dark mode/light mode",
    },
    {
        word: "COLUMN-RULE",
        hint: "เส้นแบ่งคอลัมน์",
    },
    {
        word: "COLUMN-RULE-COLOR",
        hint: "สีเส้นแบ่งคอลัมน์",
    },
    {
        word: "COLUMN-RULE-WIDTH",
        hint: "ขนาดเส้นแบ่งคอลัมน์",
    },
    {
        word: "CONTAIN",
        hint: "ควบคุมขอบเขตขององค์ประกอบ",
    },
    {
        word: "CONTAINER",
        hint: "ควบคุมขอบเขตขององค์ประกอบ",
    },
    {
        word: "COUNTER-INCREMENT",
        hint: "จัดการตัวนับใน CSS",
    },
    {
        word: "COUNTER-RESET",
        hint: "จัดการตัวนับใน CSS",
    },
    {
        word: "COUNTERS()",
        hint: "จัดการตัวนับใน CSS",
    },
    {
        word: "CLIP-RULE",
        hint: "ควบคุมการตัดเส้น path",
    },
    {
        word: "CROSS-FADE()",
        hint: "ทำภาพซ้อนใน CSS",
    },
    {
        word: "CUBIC-BEZIER()",
        hint: "ปรับการเคลื่อนไหวของ animation",
    },
    {
        word: "CONIC-GRADIENT()",
        hint: "ใช้สร้าง gradient รูปกรวย",
    },
    {
        word: "DROP-SHADOW()",
        hint: "ใช้สร้างเงาให้กับองค์ประกอบ",
    },
    {
        word: "DESCENT-OVERRIDE (@FONT-FACE)",
        hint: "ใช้กำหนด descent value ในฟอนต์",
    },
    {
        word: "::DETAILS-CONTENT",
        hint: "ใช้กับ <details> เพื่อจัดสไตล์ส่วนที่ขยายออก",
    },
    {
        word: "DOMINANT-BASELINE",
        hint: "ควบคุมการจัดตำแหน่งของข้อความใน SVG",
    },
    {
        word: "DISPLAY-BOX",
        hint: "ใช้ในการจัดรูปแบบการแสดงผลขององค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: "DISPLAY-INSIDE",
        hint: "ใช้ในการจัดรูปแบบการแสดงผลขององค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: "DISPLAY-INTERNAL",
        hint: "ใช้ในการจัดรูปแบบการแสดงผลขององค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: "DISPLAY-LEGACY",
        hint: "ใช้ในการจัดรูปแบบการแสดงผลขององค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: ":DIR()",
        hint: "ใช้เลือกองค์ประกอบตามทิศทาง (ltr, rtl)",
    },
    {
        word: "<EASING-FUNCTION>",
        hint: "ใช้กำหนด transition timing function",
    },
    {
        word: "FLEX-GROW",
        hint: "ควบคุมการขยายและหดตัวของ flex items",
    },
    {
        word: "FLEX-SHRINK",
        hint: "ควบคุมการขยายและหดตัวของ flex items",
    },
    {
        word: "FLEX-BASIS",
        hint: "ควบคุมการขยายและหดตัวของ flex items",
    },
    {
        word: "FONT-FEATURE-SETTINGS",
        hint: "ใช้เปิดหรือปิดคุณสมบัติของฟอนต์",
    },
    {
        word: "FONT-KERNING",
        hint: "ควบคุมระยะห่างระหว่างตัวอักษร",
    },
    {
        word: "FONT-STRETCH",
        hint: "ปรับความกว้างของตัวอักษร",
    },
    {
        word: "FILL",
        hint: "ใช้ใน SVG เพื่อกำหนดสีและการแสดงผล",
    },
    {
        word: "FILL-OPACITY",
        hint: "ใช้ใน SVG เพื่อกำหนดสีและการแสดงผล",
    },
    {
        word: "FILL-RULE",
        hint: "ใช้ใน SVG เพื่อกำหนดสีและการแสดงผล",
    },
    {
        word: "FLOOD-COLOR",
        hint: "ใช้ใน SVG filter effects",
    },
    {
        word: "FLOOD-OPACITY",
        hint: "ใช้ใน SVG filter effects",
    },
    {
        word: "::FIRST-LETTER",
        hint: "ใช้กำหนดสไตล์เฉพาะตัวแรกหรือลายแรกของข้อความ",
    },
    {
        word: "::FIRST-LINE",
        hint: "ใช้กำหนดสไตล์เฉพาะตัวแรกหรือลายแรกของข้อความ",
    },
    {
        word: "::FILE-SELECTOR-BUTTON",
        hint: "ใช้กำหนดสไตล์ของปุ่มเลือกไฟล์ใน <input type='file'>",
    },
    {
        word: ":FOCUS-VISIBLE",
        hint: "เลือกองค์ประกอบที่ได้รับโฟกัสเฉพาะบางกรณี",
    },
    {
        word: ":FOCUS-WITHIN",
        hint: "เลือกองค์ประกอบที่ได้รับโฟกัสเฉพาะบางกรณี",
    },
    {
        word: "GRAYSCALE()",
        hint: "ฟังก์ชันที่ใช้เปลี่ยนภาพหรือ element ให้เป็นขาวดำ",
    },
    {
        word: "HSL()",
        hint: "ใช้กำหนดสีโดยใช้รูปแบบ Hue, Saturation, Lightness",
    },
    {
        word: "IMAGE-ORIENTATION",
        hint: "ใช้กำหนดทิศทางของภาพใน CSS",
    },
    {
        word: "IMAGE-RENDERING",
        hint: "ควบคุมวิธีการเรนเดอร์ภาพ เช่น pixelated หรือ smooth",
    },
    {
        word: "GRID-TEMPLATE-AREAS",
        hint: "ใช้กำหนดพื้นที่ของ grid layout ในรูปแบบ text",
    },
    {
        word: ":HOVER",
        hint: "pseudo-class ใช้กำหนดสไตล์เมื่อผู้ใช้ชี้เมาส์ไปที่ element",
    },
    {
        word: ":HOST()",
        hint: "ใช้กับ Web Components เพื่อกำหนด style ของ root component",
    },
    {
        word: "HYPHENS",
        hint: "ควบคุมการตัดคำในข้อความอัตโนมัติ",
    },
    {
        word: "INVERT()",
        hint: "ฟังก์ชันใช้กลับค่าสีของ element",
    },
    {
        word: "@KEYFRAMES",
        hint: "ใช้กำหนด animation ใน CSS",
    },
    {
        word: ":LAST-CHILD",
        hint: "ใช้เลือก element ตัวสุดท้ายของ parent",
    },
    {
        word: ":LAST-OF-TYPE",
        hint: "ใช้เลือก element ที่เป็นชนิดสุดท้ายของ parent",
    },
    {
        word: "LEFT",
        hint: "ใช้กำหนดตำแหน่งของ element ด้านซ้าย",
    },
    {
        word: "LIGHTING-COLOR",
        hint: "ใช้กำหนดสีของแสงสำหรับ SVG filter",
    },
    {
        word: "LINEAR-GRADIENT()",
        hint: "ใช้สร้างพื้นหลังไล่สีแบบเส้นตรง",
    },
    {
        word: "LOCAL()",
        hint: "ใช้ใน @font-face เพื่อตรวจสอบว่ามีฟอนต์ในเครื่องผู้ใช้หรือไม่",
    },
    {
        word: ":LOCAL-LINK",
        hint: "ใช้กำหนดสไตล์ของลิงก์ที่อยู่ภายในเว็บไซต์เดียวกัน",
    },
    {
        word: "LENGTH",
        hint: "ใช้กำหนดค่าความยาว เช่น px, em, %",
    },
    {
        word: "LENGTH-PERCENTAGE",
        hint: "ใช้กำหนดค่าความยาว เช่น px, em, %",
    },
    {
        word: "MARGIN-BLOCK",
        hint: "ใช้กำหนดระยะห่างใน block และ inline direction (เหมาะกับการใช้ใน CSS Logical Properties)",
    },
    {
        word: "MARGIN-INLINE",
        hint: "ใช้กำหนดระยะห่างใน block และ inline direction (เหมาะกับการใช้ใน CSS Logical Properties)",
    },
    {
        word: "MASK",
        hint: "ใช้กำหนด masking effect กับ element",
    },
    {
        word: "MASK-IMAGE",
        hint: "ใช้กำหนดรูปภาพที่ใช้เป็น mask",
    },
    {
        word: "MASK-SIZE",
        hint: "กำหนดขนาดของ mask",
    },
    {
        word: "MATRIX()",
        hint: "ใช้กำหนดการแปลง (transformation) ของ element ในรูปแบบ 2D",
    },
    {
        word: "MATRIX3D()",
        hint: "ใช้กำหนดการแปลง (transformation) ของ element ในรูปแบบ 3D",
    },
    {
        word: "MINMAX()",
        hint: "ใช้กำหนดค่าต่ำสุดและสูงสุดของขนาด grid track ใน CSS Grid",
    },
    {
        word: "MOD()",
        hint: "ใช้คำนวณค่าเศษของตัวเลข (ใช้กับ CSS math functions)",
    },
    {
        word: "@MEDIA",
        hint: "ใช้สร้าง media queries เพื่อกำหนดสไตล์ตามขนาดหน้าจอหรืออุปกรณ์",
    },
    {
        word: "@NAMESPACE",
        hint: "ใช้กำหนด namespace สำหรับ XML-based CSS",
    },
    {
        word: ":NOT()",
        hint: "ใช้เลือก element ที่ไม่ตรงกับเงื่อนไขที่กำหนด",
    },
    {
        word: "OFFSET",
        hint: "ใช้กับ motion path เพื่อกำหนดตำแหน่งขององค์ประกอบ",
    },
    {
        word: "OFFSET-ANCHOR",
        hint: "ระบุตำแหน่งจุดหมุนสำหรับ motion path",
    },
    {
        word: "OFFSET-DISTANCE",
        hint: "ควบคุมระยะทางขององค์ประกอบที่เคลื่อนที่ตาม path",
    },
    {
        word: "OFFSET-PATH",
        hint: "กำหนดเส้นทางที่องค์ประกอบจะเคลื่อนที่ไปตาม",
    },
    {
        word: "OFFSET-POSITION",
        hint: "ระบุตำแหน่งเริ่มต้นขององค์ประกอบบน motion path",
    },
    {
        word: "OFFSET-ROTATE",
        hint: "กำหนดการหมุนขององค์ประกอบขณะที่เคลื่อนที่ตาม path",
    },
    {
        word: "OVERFLOW-ANCHOR",
        hint: "ป้องกันการเปลี่ยนตำแหน่งของคอนเทนต์โดยอัตโนมัติเมื่อมีการโหลดข้อมูลเพิ่มเติม",
    },
    {
        word: "OVERFLOW-BLOCK",
        hint: "ควบคุม overflow ในแนว block (แนวตั้ง)",
    },
    {
        word: "OVERFLOW-INLINE",
        hint: "ควบคุม overflow ในแนว inline (แนวนอน)",
    },
    {
        word: "OVERFLOW-WRAP",
        hint: "ควบคุมการตัดคำเมื่อข้อความยาวเกินขอบของ container",
    },
    {
        word: "OVERLAY",
        hint: "ใช้เพื่อสร้างเลเยอร์ทับบนองค์ประกอบอื่น",
    },
    {
        word: "PADDING-INLINE",
        hint: "ใช้กำหนด padding ในแนวนอน ตามทิศทางของข้อความ (LTR / RTL)",
    },
    {
        word: "PADDING-INLINE-START",
        hint: "ใช้กำหนด padding ในแนวนอน ตามทิศทางของข้อความ (LTR / RTL)",
    },
    {
        word: "PADDING-INLINE-END",
        hint: "ใช้กำหนด padding ในแนวนอน ตามทิศทางของข้อความ (LTR / RTL)",
    },
    {
        word: "PADDING-BLOCK",
        hint: "ใช้กำหนด padding ในแนวตั้ง",
    },
    {
        word: "PADDING-BLOCK-START",
        hint: "ใช้กำหนด padding ในแนวตั้ง",
    },
    {
        word: "PADDING-BLOCK-END",
        hint: "ใช้กำหนด padding ในแนวตั้ง",
    },
    {
        word: "PAINT()",
        hint: "ฟังก์ชันที่ใช้กับ CSS Houdini Paint API เพื่อสร้างกราฟิกแบบกำหนดเอง",
    },
    {
        word: "PAINT-ORDER",
        hint: "ใช้ควบคุมลำดับของการระบายสี stroke, fill และ markers",
    },
    {
        word: "PERSPECTIVE",
        hint: "กำหนดมุมมองเชิงลึกสำหรับ 3D transform",
    },
    {
        word: "PERSPECTIVE-ORIGIN",
        hint: "กำหนดจุดเริ่มต้นของ perspective",
    },
    {
        word: "PLACE-CONTENT",
        hint: "ควบคุมการจัดวางคอนเทนต์ใน CSS Grid หรือ Flexbox",
    },
    {
        word: "PLACE-ITEMS",
        hint: "ควบคุมการจัดวางคอนเทนต์ใน CSS Grid หรือ Flexbox",
    },
    {
        word: "PLACE-SELF",
        hint: "ควบคุมการจัดวางคอนเทนต์ใน CSS Grid หรือ Flexbox",
    },
    {
        word: "POLYGON()",
        hint: "ใช้กำหนดคลิปขององค์ประกอบในรูปหลายเหลี่ยม",
    },
    {
        word: "POSITION-ANCHOR",
        hint: "ใช้กำหนดการอ้างอิงตำแหน่งสำหรับองค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: "POSITION-AREA",
        hint: "ใช้กำหนดการอ้างอิงตำแหน่งสำหรับองค์ประกอบที่ซับซ้อนขึ้น",
    },
    {
        word: "@PAGE",
        hint: "ใช้กำหนดรูปแบบสำหรับการพิมพ์หน้าเว็บ",
    },
    {
        word: "PAGE-ORIENTATION (@PAGE)",
        hint: "กำหนดทิศทางของหน้าเอกสารที่พิมพ์ เช่น แนวตั้ง/แนวนอน",
    },
    {
        word: "RADIAL-GRADIENT()",
        hint: "ใช้กำหนดพื้นหลังแบบไล่สีวงกลม",
    },
    {
        word: "REPEATING-LINEAR-GRADIENT()",
        hint: "ใช้สร้างไล่สีที่ซ้ำๆ กัน",
    },
    {
        word: "REPEATING-RADIAL-GRADIENT()",
        hint: "ใช้สร้างไล่สีที่ซ้ำๆ กัน",
    },
    {
        word: "REPEATING-CONIC-GRADIENT()",
        hint: "ใช้สร้างไล่สีที่ซ้ำๆ กัน",
    },
    {
        word: "ROTATE3D()",
        hint: "ใช้หมุนองค์ประกอบใน 3D space",
    },
    {
        word: "ROTATEX()",
        hint: "ใช้หมุนในแกน X ของ 3D space",
    },
    {
        word: "ROTATEY()",
        hint: "ใช้หมุนในแกน Y ของ 3D space",
    },
    {
        word: "ROTATEZ()",
        hint: "ใช้หมุนในแกน Z ของ 3D space",
    },
    {
        word: "RECT()",
        hint: "ใช้กำหนดพื้นที่สำหรับ clip-path",
    },
    {
        word: "RAY()",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบโดยอ้างอิงจากรังสี (Ray CSS)",
    },
    {
        word: ":READ-ONLY",
        hint: "ใช้กำหนดสไตล์ให้ input ที่เป็นแบบอ่านอย่างเดียวหรือแก้ไขได้",
    },
    {
        word: ":READ-WRITE",
        hint: "ใช้กำหนดสไตล์ให้ input ที่เป็นแบบอ่านอย่างเดียวหรือแก้ไขได้",
    },
    {
        word: "REVERT",
        hint: "ใช้คืนค่าคุณสมบัติเป็นค่าดั้งเดิมของ browser",
    },
    {
        word: "ROUND()",
        hint: "ใช้ปัดเศษค่าตัวเลข",
    },
    {
        word: "RX",
        hint: "ใช้กำหนดรัศมีของวงรีสำหรับ SVG",
    },
    {
        word: "RY",
        hint: "ใช้กำหนดรัศมีของวงรีสำหรับ SVG",
    },
    {
        word: "@RIGHT-TOP",
        hint: "ใช้กับ paged media เพื่อตั้งค่ามุมบนขวา",
    },
    {
        word: "SCROLL-SNAP-ALIGN",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบเมื่อเลื่อน",
    },
    {
        word: "SCROLL-SNAP-TYPE",
        hint: "ใช้กำหนดตำแหน่งขององค์ประกอบเมื่อเลื่อน",
    },
    {
        word: "SCROLLBAR-COLOR",
        hint: "ใช้กำหนดสีและขนาดของ scrollbar",
    },
    {
        word: "SCROLLBAR-WIDTH",
        hint: "ใช้กำหนดสีและขนาดของ scrollbar",
    },
    {
        word: "SKEW()",
        hint: "ใช้บิดองค์ประกอบในแนวแกน",
    },
    {
        word: "SKEWX()",
        hint: "ใช้บิดองค์ประกอบในแนวแกน",
    },
    {
        word: "SKEWY()",
        hint: "ใช้บิดองค์ประกอบในแนวแกน",
    },
    {
        word: "STROKE",
        hint: "ใช้กำหนดเส้นขอบของ SVG",
    },
    {
        word: "STROKE-WIDTH",
        hint: "ใช้กำหนดเส้นขอบของ SVG",
    },
    {
        word: "STROKE-LINECAP",
        hint: "ใช้กำหนดเส้นขอบของ SVG",
    },
    {
        word: "SUPPORTS(@SUPPORTS)",
        hint: "ใช้กำหนดเงื่อนไขว่าถ้าคุณสมบัติ CSS รองรับ ให้ใช้สไตล์ที่กำหนด",
    },
    {
        word: "SYNTAX(@PROPERTY)",
        hint: "ใช้กับ CSS custom properties เพื่อกำหนดชนิดข้อมูล",
    },
    {
        word: "TEXT-EMPHASIS",
        hint: "ใช้ตกแต่งตัวอักษร เช่น จุด หรือขีดเส้นเน้น",
    },
    {
        word: "TEXT-EMPHASIS-COLOR",
        hint: "ใช้ตกแต่งตัวอักษร เช่น จุด หรือขีดเส้นเน้น",
    },
    {
        word: "TEXT-EMPHASIS-STYLE",
        hint: "ใช้ตกแต่งตัวอักษร เช่น จุด หรือขีดเส้นเน้น",
    },
    {
        word: "TEXT-DECORATION-SKIP",
        hint: "ควบคุมการข้ามเส้นตกแต่ง (เช่น เส้นใต้ที่ไม่ทับตัวอักษร)",
    },
    {
        word: "TEXT-DECORATION-SKIP-INK",
        hint: "ควบคุมการข้ามเส้นตกแต่ง (เช่น เส้นใต้ที่ไม่ทับตัวอักษร)",
    },
    {
        word: "TEXT-ORIENTATION",
        hint: "ใช้ควบคุมทิศทางของข้อความ (แนวตั้งหรือแนวนอน)",
    },
    {
        word: "TEXT-OVERFLOW",
        hint: "ใช้กำหนดพฤติกรรมของข้อความเมื่อเกินขอบ (ellipsis ตัดข้อความด้วย ...)",
    },
    {
        word: "TEXT-SPACING-TRIM",
        hint: "ปรับการเว้นวรรคของตัวอักษรให้กระชับขึ้น",
    },
    {
        word: "TRANSITION",
        hint: "ใช้กำหนดเอฟเฟกต์การเปลี่ยนแปลงขององค์ประกอบ",
    },
    {
        word: "TRANSITION-DELAY",
        hint: "ใช้กำหนดเอฟเฟกต์การเปลี่ยนแปลงขององค์ประกอบ",
    },
    {
        word: "TRANSITION-DURATION",
        hint: "ใช้กำหนดเอฟเฟกต์การเปลี่ยนแปลงขององค์ประกอบ",
    },
    {
        word: "TRANSITION-PROPERTY",
        hint: "ใช้กำหนดเอฟเฟกต์การเปลี่ยนแปลงขององค์ประกอบ",
    },
    {
        word: "TRANSLATE",
        hint: "ใช้เคลื่อนที่องค์ประกอบในแนวแกน",
    },
    {
        word: "TRANSLATEX()",
        hint: "ใช้เคลื่อนที่องค์ประกอบในแนวแกน X",
    },
    {
        word: "TRANSLATEY()",
        hint: "ใช้เคลื่อนที่องค์ประกอบในแนวแกน Y",
    },
    {
        word: "TRANSLATEZ()",
        hint: "ใช้เคลื่อนที่องค์ประกอบในแนวแกน Z",
    },
    {
        word: "VAR()",
        hint: "ใช้กำหนดตัวแปรใน CSS (--color: red; color: var(--color);)",
    },
    {
        word: "VECTOR-EFFECT",
        hint: "ใช้กับ SVG เพื่อกำหนดวิธีการวาดเส้นเวกเตอร์",
    },
    {
        word: "VIEW()",
        hint: "ใช้สำหรับ View Transitions API",
    },
    {
        word: "VIEW-TIMELINE",
        hint: "ใช้ควบคุมเอฟเฟกต์ที่เปลี่ยนแปลงตามการเลื่อน (Scroll-based Animation)",
    },
    {
        word: "VIEW-TIMELINE-NAME",
        hint: "ใช้ควบคุมเอฟเฟกต์ที่เปลี่ยนแปลงตามการเลื่อน (Scroll-based Animation)",
    },
    {
        word: "VIEW-TIMELINE-AXIS",
        hint: "ใช้ควบคุมเอฟเฟกต์ที่เปลี่ยนแปลงตามการเลื่อน (Scroll-based Animation)",
    },
    {
        word: "WIDTH",
        hint: "กำหนดความกว้างขององค์ประกอบ",
    },
    {
        word: "WILL-CHANGE",
        hint: "ใช้บอกเบราว์เซอร์ว่าคุณสมบัติใดจะเปลี่ยนแปลง เพื่อเพิ่มประสิทธิภาพ",
    },
];

// Export the word list
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wordList;
}
