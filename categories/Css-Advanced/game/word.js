// Word list with their corresponding hints
const wordList = [
    {
        word: "@ANNOTATION",//ตัวใหญ่เท่านั้น
        hint: "ใช้กับ CSS Custom Highlight API",
    },
    {
        word: "ANCHOR-SCOPE",
        hint: "ใช้กำหนดขอบเขตของ anchor (experimental)",
    },
    {
        word: "ANIMATION-COMPOSITION",
        hint: "ระบุว่าหลายแอนิเมชันควรผสานกันอย่างไร",
    },
    {
        word: "ANIMATION-TIMELINE",
        hint: "กำหนดไทม์ไลน์ของแอนิเมชัน (experimental)",
    },
    {
        word: "ADDITIVE-SYMBOLS (@COUNTER-STYLE)",
        hint: "ใช้กำหนดสัญลักษณ์แบบนับเลขที่กำหนดเอง",
    },
    {
        word: "ASCENT-OVERRIDE (@FONT-FACE)",
        hint: "ใช้ปรับแต่งตำแหน่งการขึ้นของตัวอักษร",
    },
    {
        word: "ANIMATION-RANGE",
        hint: "ควบคุมช่วงของแอนิเมชัน",
    },
    {
        word: "ANIMATION-RANGE-START",
        hint: "ควบคุมช่วงของแอนิเมชัน",
    },
    {
        word: "ANIMATION-RANGE-END",
        hint: "ควบคุมช่วงของแอนิเมชัน",
    },
    {
        word: "ACTIVE-VIEW-TRANSITION",
        hint: "ใช้ใน View Transitions API",
    },
    {
        word: "ACTIVE-VIEW-TRANSITION-TYPE()",
        hint: "ใช้ใน View Transitions API",
    },
    {
        word: "@BOTTOM-LEFT-CORNER",
        hint: "ใช้กำหนดมุมของหน้า (สำหรับ Print CSS)",
    },
    {
        word: "BLEED (@PAGE)",
        hint: "ใช้กำหนดขอบตกของเอกสารที่พิมพ์",
    },
    {
        word: "BORDER-BLOCK",
        hint: "ใช้กำหนดเส้นขอบแบบ Logical Properties",
    },
    {
        word: "BORDER-INLINE",
        hint: "ใช้กำหนดเส้นขอบแบบ Logical Properties",
    },
    {
        word: "BUFFERING",
        hint: "ใช้กำหนดการโหลดข้อมูลขององค์ประกอบ (experimental)",
    },
    {
        word: "BASIC-SHAPE",
        hint: "ใช้สร้างรูปทรงเรขาคณิตใน CSS",
    },
    {
        word: "@CHARSET",
        hint: "กำหนด encoding ของไฟล์ CSS",
    },
    {
        word: "@CHARACTER-VARIANT",
        hint: "ใช้ใน typographic features",
    },
    {
        word: "CONTAINER-NAME",
        hint: "ใช้กับ CSS Container Queries",
    },
    {
        word: "CONTAINER-TYPE",
        hint: "ใช้กับ CSS Container Queries",
    },
    {
        word: "CONTAIN-INTRINSIC-SIZE",
        hint: "กำหนดขนาดองค์ประกอบโดยไม่ต้องโหลดจริง",
    },
    {
        word: "CONTAIN-INTRINSIC-WIDTH",
        hint: "กำหนดขนาดองค์ประกอบโดยไม่ต้องโหลดจริง",
    },
    {
        word: "COLOR-MIX()",
        hint: "ผสมสี (experimental)",
    },
    {
        word: "COLOR-INTERPOLATION-FILTERS",
        hint: "ควบคุมการแสดงผลของสีในฟิลเตอร์",
    },
    {
        word: "::CUE-REGION",
        hint: "ควบคุมกลุ่มของ subtitle cue",
    },
    {
        word: "LENGTH#CAP",
        hint: "หน่วยความยาวที่เฉพาะทาง",
    },
    {
        word: "LENGTH#CH",
        hint: "หน่วยความยาวที่เฉพาะทาง",
    },
    {
        word: "LENGTH#CM",
        hint: "หน่วยความยาวที่เฉพาะทาง",
    },
    {
        word: "<DIMENSION>",
        hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
    },
    {
        word: "<RESOLUTION#DPI>",
        hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
    },
    {
        word: "<RESOLUTION#DPCM>",
        hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
    },
    {
        word: "<RESOLUTION#DPPX>",
        hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
    },
    {
        word: "ELEMENT()",
        hint: "ใช้สร้างภาพจากองค์ประกอบ HTML (experimental)",
    },
    {
        word: "ENV()",
        hint: "ใช้ดึงค่าจาก environment variables ใน CSS",
    },
    {
        word: "EXP()",
        hint: "ฟังก์ชันคำนวณเลขชี้กำลัง (experimental)",
    },
    {
        word: "<DISPLAY-LISTITEM>",
        hint: "ฟีเจอร์ใหม่สำหรับการควบคุมโครงสร้างของ display",
    },
    {
        word: "<DISPLAY-OUTSIDE>",
        hint: "ฟีเจอร์ใหม่สำหรับการควบคุมโครงสร้างของ display",
    },
    {
        word: "<LENGTH#EM>",
        hint: "หน่วยวัดแบบสัมพันธ์กับขนาดตัวอักษร",
    },
    {
        word: "<LENGTH#EX>",
        hint: "หน่วยวัดแบบสัมพันธ์กับขนาดตัวอักษร",
    },
    {
        word: "<DASHED-IDENT>",
        hint: "ใช้สำหรับกำหนดชื่อที่มีเครื่องหมายขีด (--custom-property)",
    },
    {
        word: "@FONT-FACE",
        hint: "ใช้ฝังฟอนต์แบบกำหนดเอง",
    },
    {
        word: "FONT-VARIATION-SETTINGS",
        hint: "ใช้กำหนดค่าเฉพาะของฟอนต์ตัวแปร (Variable Fonts)",
    },
    {
        word: "FONT-SYNTHESIS",
        hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
    },
    {
        word: "FONT-SYNTHESIS-WEIGHT",
        hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
    },
    {
        word: "FONT-SYNTHESIS-STYLE",
        hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
    },
    {
        word: "FORCED-COLOR-ADJUST",
        hint: "ควบคุมการปรับสีอัตโนมัติใน high-contrast mode",
    },
    {
        word: "FREQUENCY",
        hint: "หน่วยสำหรับการกำหนดค่าความถี่ (ใช้กับเสียงใน CSS Speech)",
    },
    {
        word: "FREQUENCY-PERCENTAGE",
        hint: "หน่วยสำหรับการกำหนดค่าความถี่ (ใช้กับเสียงใน CSS Speech)",
    },
    {
        word: "FULLSCREEN",
        hint: "ใช้สำหรับการจัดการโหมดเต็มหน้าจอ (:fullscreen)",
    },
    {
        word: "FUTURE",
        hint: "Experimental feature ที่ใช้กำหนดค่าข้อมูลอนาคต",
    },
    {
        word: "FORMAT()",
        hint: "ใช้ร่วมกับ @font-face เพื่อระบุประเภทของฟอนต์",
    },
    {
        word: "::GRAMMAR-ERROR",
        hint: "ใช้กำหนดสไตล์สำหรับคำผิดทางไวยากรณ์ (Grammar errors)",
    },
    {
        word: "::HIGHLIGHT()",
        hint: "ใช้สไตล์ข้อความที่ถูกเลือก (highlighted text)",
    },
    {
        word: ":HAS()",
        hint: "Pseudo-class ขั้นสูงที่ใช้เลือก parent element ตามเงื่อนไขของ child element",
    },
    {
        word: ":HAS(:SLOTTED())",
        hint: "ใช้ร่วมกับ Web Components เพื่อกำหนดสไตล์ของ slot elements",
    },
    {
        word: "@IMPORT",
        hint: "ใช้โหลดไฟล์ CSS อื่นเข้ามา",
    },
    {
        word: "@HISTORICAL-FORMS",
        hint: "ใช้กับ OpenType font ที่มีตัวอักษรพิเศษแบบโบราณ",
    },
    {
        word: "INITIAL-LETTER-ALIGN",
        hint: "ควบคุมการจัดวางตัวอักษรตัวแรกของย่อหน้า",
    },
    {
        word: "INSET-INLINE",
        hint: "ใช้กำหนดตำแหน่งของ element ใน inline หรือ block direction",
    },
    {
        word: "INSET-BLOCK",
        hint: "ใช้กำหนดตำแหน่งของ element ใน inline หรือ block direction",
    },
    {
        word: "INTERPOLATE-SIZE",
        hint: "ควบคุมการเปลี่ยนแปลงขนาดของ element แบบ interpolated",
    },
    {
        word: "::JS()",
        hint: "(อาจจะเป็นคุณสมบัติที่ยังไม่รองรับทั่วไป) ใช้สำหรับ JavaScript-based CSS styles",
    },
    {
        word: "FREQUENCY#KHZ",
        hint: "ใช้กำหนดค่าความถี่สำหรับเสียง (ใช้ใน Speech CSS)",
    },
    {
        word: "LAB()",
        hint: "ใช้กำหนดสีโดยใช้ค่าระบบสี Lab",
    },
    {
        word: "LCH()",
        hint: "ใช้กำหนดสีโดยใช้ค่าระบบสี LCH",
    },
    {
        word: "LIGHT-DARK()",
        hint: "ใช้กำหนดสีที่เปลี่ยนไปตามโหมด light/dark",
    },
    {
        word: "@LAYER",
        hint: "ใช้กำหนดลำดับของ CSS rule เพื่อควบคุมความสำคัญของ styles",
    },
    {
        word: "LAYER()",
        hint: "ใช้ควบคุมลำดับการทำงานของ styles ภายใน @layer",
    },
    {
        word: "LEADER()",
        hint: "ใช้กำหนดเส้นนำ (leader dots) ในการจัดรูปแบบข้อความ (พบใน CSS Paged Media)",
    },
    {
        word: "LINE-CLAMP",
        hint: "ใช้กำหนดจำนวนบรรทัดสูงสุดของข้อความก่อนตัดเป็น ... (ellipsis)",
    },
    {
        word: "LINE-GAP-OVERRIDE (@FONT-FACE)",
        hint: "ใช้กำหนดระยะห่างระหว่างบรรทัดภายในฟอนต์",
    },
    {
        word: "LOG()",
        hint: "ใช้สำหรับ debugging ค่าต่าง ๆ ใน CSS",
    },
    {
        word: "MASK-BORDER",
        hint: "ใช้กำหนด mask ให้กับ border ของ element",
    },
    {
        word: "MASK-COMPOSITE",
        hint: "กำหนดว่าควรผสม mask อย่างไรเมื่อมีหลาย mask ซ้อนกัน",
    },
    {
        word: "MASK-BORDER-MODE",
        hint: "ใช้ควบคุมโหมดของ mask border",
    },
    {
        word: "MATH-STYLE",
        hint: "ควบคุมการแสดงผลของตัวเลขทางคณิตศาสตร์ (ใช้กับ MathML)",
    },
    {
        word: "MATH-SHIFT",
        hint: "ควบคุมการแสดงผลของ exponent และ subscript",
    },
    {
        word: "MARKS (@PAGE)",
        hint: "ใช้กำหนดเครื่องหมายพิเศษในเอกสารที่พิมพ์ (CSS Paged Media)",
    },
    {
        word: "NEGATIVE (@COUNTER-STYLE)",
        hint: "ใช้กำหนดรูปแบบตัวเลขลบสำหรับ CSS counter",
    },
    {
        word: "NAVIGATION (@VIEW-TRANSITION)",
        hint: "ใช้กำหนดสไตล์สำหรับ CSS View Transitions",
    },
    {
        word: "TIME#MS",
        hint: "ใช้กำหนดค่าของเวลาในหน่วย milliseconds",
    },
    {
        word: "OKLAB()",
        hint: "ระบบกำหนดค่าสีที่ให้การแสดงผลที่แม่นยำขึ้นกว่าระบบ RGB",
    },
    {
        word: "OKLCH()",
        hint: "ระบบกำหนดค่าสีที่ให้การแสดงผลที่แม่นยำขึ้นกว่าระบบ RGB",
    },
    {
        word: ":ONLY-CHILD",
        hint: "ใช้เลือกองค์ประกอบที่เป็นลูกตัวเดียวของพาเรนต์",
    },
    {
        word: ":ONLY-OF-TYPE",
        hint: "ใช้เลือกองค์ประกอบที่เป็นลูกตัวเดียวของพาเรนต์",
    },
    {
        word: ":OPTIONAL",
        hint: "เลือก input field ที่ไม่มี required",
    },
    {
        word: ":OUT-OF-RANGE",
        hint: "เลือก input field ที่ค่าข้อมูลอยู่นอกขอบเขตที่กำหนด",
    },
    {
        word: "@ORNAMENTS",
        hint: "ใช้สำหรับสร้างลูกเล่นกราฟิกเพิ่มเติม (ปัจจุบันยังไม่มีการรองรับในเบราว์เซอร์หลัก)",
    },
    {
        word: "ORPHANS",
        hint: "กำหนดจำนวนบรรทัดที่ต้องคงอยู่ที่ด้านล่างของหน้าในเอกสารที่มีหลายหน้า",
    },
    {
        word: "OVERRIDE-COLORS (@FONT-PALETTE-VALUES)",
        hint: "ปรับแต่งชุดสีของฟอนต์ที่รองรับการกำหนดสีของตัวอักษร",
    },
    {
        word: "OVERSCROLL-BEHAVIOR",
        hint: "ควบคุมพฤติกรรมของหน้าจอเมื่อเลื่อนเกินขอบขององค์ประกอบ",
    },
    {
        word: "OVERSCROLL-BEHAVIOR-BLOCK",
        hint: "ควบคุม overscroll ในแนว block ",
    },
    {
        word: "OVERSCROLL-BEHAVIOR-INLINE",
        hint: "ควบคุม overscroll ในแนว inline",
    },
    {
        word: "OVERSCROLL-BEHAVIOR-X",
        hint: "ควบคุม overscroll ในแนวแกน X ",
    },
    {
        word: "OVERSCROLL-BEHAVIOR-Y",
        hint: "ควบคุม overscroll ในแนวแกน Y",
    },
    {
        word: "PALETTE-MIX()",
        hint: "ใช้ผสมสีแบบใหม่ (ยังไม่รองรับในเบราว์เซอร์หลัก)",
    },
    {
        word: "::PART()",
        hint: "ใช้กับ Web Components เพื่อนิยามสไตล์สำหรับส่วนต่างๆ ภายใน",
    },
    {
        word: "PATH()",
        hint: "ใช้สร้าง motion path หรือ clip-path ที่ซับซ้อน",
    },
    {
        word: "POSITION-TRY",
        hint: "ใช้ใน Layout API ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
    },
    {
        word: "POSITION-TRY-ORDER",
        hint: "ใช้ใน Layout API ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
    },
    {
        word: "POSITION-TRY-FALLBACKS",
        hint: "ใช้ใน Layout API ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
    },
    {
        word: "POSITION-VISIBILITY",
        hint: "ใช้ควบคุมการแสดงผลของตำแหน่งใน UI ที่ซับซ้อน",
    },
    {
        word: "POW()",
        hint: "ฟังก์ชันคำนวณเลขยกกำลังใน CSS",
    },
    {
        word: "PREFIX (@COUNTER-STYLE)",
        hint: "ใช้กำหนดค่าข้อความนำหน้าของ counter-style",
    },
    {
        word: "PRINT-COLOR-ADJUST",
        hint: "ควบคุมการพิมพ์สีในสื่อสิ่งพิมพ์",
    },
    {
        word: "@PROPERTY",
        hint: "ใช้ประกาศ custom properties แบบกำหนดเองที่รองรับ animation",
    },
    {
        word: "RANGE (@COUNTER-STYLE)",
        hint: "ใช้กำหนดช่วงค่าของ counter-style",
    },
    {
        word: "<RATIO>",
        hint: "ใช้กำหนดอัตราส่วน เช่น aspect-ratio ขององค์ประกอบ",
    },
    {
        word: "REVERSED()",
        hint: "ใช้กลับลำดับของรายการที่เป็น ordered list (<ol>)",
    },
    {
        word: "RUBY-ALIGN",
        hint: "ใช้จัดการรูปแบบของ Ruby Text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
    },
    {
        word: "RUBY-MERGE",
        hint: "ใช้จัดการรูปแบบของ Ruby Text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
    },
    {
        word: "RUBY-POSITION",
        hint: "ใช้จัดการรูปแบบของ Ruby Text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
    },
    {
        word: "<RESOLUTION>",
        hint: "ใช้กำหนดค่าความละเอียด เช่น dpi สำหรับการพิมพ์",
    },
    {
        word: "SCROLL-TIMELINE",
        hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
    },
    {
        word: "SCROLL-TIMELINE-AXIS",
        hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
    },
    {
        word: "SCROLL-TIMELINE-NAME",
        hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
    },
    {
        word: "SIZE-ADJUST(@FONT-FACE)",
        hint: "ใช้ปรับขนาดของฟอนต์",
    },
    {
        word: "SUPPORTS(@IMPORT)",
        hint: "ใช้กำหนดเงื่อนไขการโหลดสไตล์ชีตจากภายนอก",
    },
    {
        word: "SYMBOLS(@COUNTER-STYLE)",
        hint: "ใช้กำหนดสัญลักษณ์ในรายการสั่งนับ (list-style)",
    },
    {
        word: "SYSTEM(@COUNTER-STYLE)",
        hint: "ใช้กำหนดประเภทของตัวนับ (เช่น numeric, alphabetic)",
    },
    {
        word: "SLOTTED()",
        hint: "ใช้ใน Web Components เพื่อตรวจสอบเนื้อหาใน <slot>",
    },
    {
        word: "TARGET-COUNTER()",
        hint: "ใช้กำหนดค่าตัวนับใน CSS (ใช้กับ @counter-style)",
    },
    {
        word: "TARGET-COUNTERS()",
        hint: "ใช้กำหนดค่าตัวนับใน CSS (ใช้กับ @counter-style)",
    },
    {
        word: "TARGET-TEXT()",
        hint: "ใช้ดึงข้อความที่เป็นเป้าหมายจาก <a href=...>",
    },
    {
        word: "TIMELINE-SCOPE",
        hint: "ใช้ควบคุมการทำงานของ Animation Timeline",
    },
    {
        word: "TRANSITION-BEHAVIOR",
        hint: "ใช้ควบคุมพฤติกรรมของ transition เมื่อเปลี่ยนแปลงค่า",
    },
    {
        word: "TRANSFORM-BOX",
        hint: "กำหนดพื้นที่ของการแปลง (transform) ขององค์ประกอบ",
    },
    {
        word: "TYPE()",
        hint: "ใช้กำหนดประเภทข้อมูลและการเปลี่ยนแปลงใน View Transition API",
    },
    {
        word: "TYPES(@VIEW-TRANSITION)",
        hint: "ใช้กำหนดประเภทข้อมูลและการเปลี่ยนแปลงใน View Transition API",
    },
    {
        word: ":USER-INVALID",
        hint: "ใช้กำหนดสไตล์สำหรับอินพุตที่ไม่ถูกต้อง",
    },
    {
        word: ":USER-VALID",
        hint: "ใช้กำหนดสไตล์สำหรับอินพุตที่ถูกต้อง",
    },
    {
        word: "::VIEW-TRANSITION-GROUP()",
        hint: "เป็นส่วนหนึ่งของ View Transitions API สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ Smooth Scroll",
    },
    {
        word: "::VIEW-TRANSITION-IMAGE-PAIR()",
        hint: "เป็นส่วนหนึ่งของ View Transitions API สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ Smooth Scroll",
    },
    {
        word: "::VIEW-TRANSITION-NEW()",
        hint: "เป็นส่วนหนึ่งของ View Transitions API สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ Smooth Scroll",
    },
    {
        word: "::VIEW-TRANSITION-OLD()",
        hint: "เป็นส่วนหนึ่งของ View Transitions API สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ Smooth Scroll",
    },
    {
        word: "VIEW-TRANSITION-CLASS",
        hint: "เป็นส่วนหนึ่งของ View Transitions API สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ Smooth Scroll",
    },
    {
        word: ":WHERE()",
        hint: "ใช้กำหนดสไตล์โดยมีค่าความสำคัญ (specificity) ต่ำกว่าเซเล็กเตอร์ทั่วไป",
    },
    {
        word: "WHITE-SPACE-COLLAPSE",
        hint: "ควบคุมการจัดการช่องว่างใน CSS",
    },
    {
        word: "WIDOWS",
        hint: "ควบคุมจำนวนบรรทัดที่ต้องเหลืออยู่ตอนขึ้นหน้าใหม่",
    },
    {
        word: "WRITING-MODE",
        hint: "กำหนดโหมดการเขียน (horizontal-tb, vertical-rl)",
    },
    {
        word: ":XR-OVERLAY",
        hint: "(Experimental) ใช้สำหรับจัดการการแสดงผลในโหมด XR (Extended Reality)",
    },
    {
        word: "XYWH()",
        hint: "ใช้สำหรับกำหนดขอบเขตขององค์ประกอบ (X, Y, Width, Height)",
    },
];

// Export the word list
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wordList;
}
