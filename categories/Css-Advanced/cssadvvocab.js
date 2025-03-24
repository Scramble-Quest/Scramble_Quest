let words = {
    'advanced': [
        {
            word: "@annotation",//ตัวใหญ่เท่านั้น
            hint: "ใช้กับ css custom highlight api",
        },
        {
            word: "anchor-scope",
            hint: "ใช้กำหนดขอบเขตของ anchor (experimental)",
        },
        {
            word: "animation-composition",
            hint: "ระบุว่าหลายแอนิเมชันควรผสานกันอย่างไร",
        },
        {
            word: "animation-timeline",
            hint: "กำหนดไทม์ไลน์ของแอนิเมชัน (experimental)",
        },
        {
            word: "additive-symbols (@counter-style)",
            hint: "ใช้กำหนดสัญลักษณ์แบบนับเลขที่กำหนดเอง",
        },
        {
            word: "ascent-override (@font-face)",
            hint: "ใช้ปรับแต่งตำแหน่งการขึ้นของตัวอักษร",
        },
        {
            word: "animation-range",
            hint: "ควบคุมช่วงของแอนิเมชัน",
        },
        {
            word: "animation-range-start",
            hint: "ควบคุมช่วงของแอนิเมชัน",
        },
        {
            word: "animation-range-end",
            hint: "ควบคุมช่วงของแอนิเมชัน",
        },
        {
            word: "active-view-transition",
            hint: "ใช้ใน view transitions api",
        },
        {
            word: "active-view-transition-type()",
            hint: "ใช้ใน view transitions api",
        },
        {
            word: "@bottom-left-corner",
            hint: "ใช้กำหนดมุมของหน้า (สำหรับ print css)",
        },
        {
            word: "bleed (@page)",
            hint: "ใช้กำหนดขอบตกของเอกสารที่พิมพ์",
        },
        {
            word: "border-block",
            hint: "ใช้กำหนดเส้นขอบแบบ logical properties",
        },
        {
            word: "border-inline",
            hint: "ใช้กำหนดเส้นขอบแบบ logical properties",
        },
        {
            word: "buffering",
            hint: "ใช้กำหนดการโหลดข้อมูลขององค์ประกอบ (experimental)",
        },
        {
            word: "basic-shape",
            hint: "ใช้สร้างรูปทรงเรขาคณิตใน css",
        },
        {
            word: "@charset",
            hint: "กำหนด encoding ของไฟล์ css",
        },
        {
            word: "@character-variant",
            hint: "ใช้ใน typographic features",
        },
        {
            word: "container-name",
            hint: "ใช้กับ css container queries",
        },
        {
            word: "container-type",
            hint: "ใช้กับ css container queries",
        },
        {
            word: "contain-intrinsic-size",
            hint: "กำหนดขนาดองค์ประกอบโดยไม่ต้องโหลดจริง",
        },
        {
            word: "contain-intrinsic-width",
            hint: "กำหนดขนาดองค์ประกอบโดยไม่ต้องโหลดจริง",
        },
        {
            word: "color-mix()",
            hint: "ผสมสี (experimental)",
        },
        {
            word: "color-interpolation-filters",
            hint: "ควบคุมการแสดงผลของสีในฟิลเตอร์",
        },
        {
            word: "::cue-region",
            hint: "ควบคุมกลุ่มของ subtitle cue",
        },
        {
            word: "length#cap",
            hint: "หน่วยความยาวที่เฉพาะทาง",
        },
        {
            word: "length#ch",
            hint: "หน่วยความยาวที่เฉพาะทาง",
        },
        {
            word: "length#cm",
            hint: "หน่วยความยาวที่เฉพาะทาง",
        },
        {
            word: "< dimension >",
            hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
        },
        {
            word: "< resolution#dpi >",
            hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
        },
        {
            word: "< resolution#dpcm >",
            hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
        },
        {
            word: "< resolution#dppx >",
            hint: "ใช้ใน media queries สำหรับกำหนดขนาดและความละเอียด",
        },
        {
            word: "element()",
            hint: "ใช้สร้างภาพจากองค์ประกอบ html (experimental)",
        },
        {
            word: "env()",
            hint: "ใช้ดึงค่าจาก environment variables ใน css",
        },
        {
            word: "exp()",
            hint: "ฟังก์ชันคำนวณเลขชี้กำลัง (experimental)",
        },
        {
            word: "< display-listitem >",
            hint: "ฟีเจอร์ใหม่สำหรับการควบคุมโครงสร้างของ display",
        },
        {
            word: "< display-outside >",
            hint: "ฟีเจอร์ใหม่สำหรับการควบคุมโครงสร้างของ display",
        },
        {
            word: "< length#em >",
            hint: "หน่วยวัดแบบสัมพันธ์กับขนาดตัวอักษร",
        },
        {
            word: "< length#ex >",
            hint: "หน่วยวัดแบบสัมพันธ์กับขนาดตัวอักษร",
        },
        {
            word: "< dashed-ident >",
            hint: "ใช้สำหรับกำหนดชื่อที่มีเครื่องหมายขีด (--custom-property)",
        },
        {
            word: "@font-face",
            hint: "ใช้ฝังฟอนต์แบบกำหนดเอง",
        },
        {
            word: "font-variation-settings",
            hint: "ใช้กำหนดค่าเฉพาะของฟอนต์ตัวแปร (variable fonts)",
        },
        {
            word: "font-synthesis",
            hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
        },
        {
            word: "font-synthesis-weight",
            hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
        },
        {
            word: "font-synthesis-style",
            hint: "ควบคุมการสังเคราะห์ฟอนต์โดยเบราว์เซอร์",
        },
        {
            word: "forced-color-adjust",
            hint: "ควบคุมการปรับสีอัตโนมัติใน high-contrast mode",
        },
        {
            word: "frequency",
            hint: "หน่วยสำหรับการกำหนดค่าความถี่ (ใช้กับเสียงใน css speech)",
        },
        {
            word: "frequency-percentage",
            hint: "หน่วยสำหรับการกำหนดค่าความถี่ (ใช้กับเสียงใน css speech)",
        },
        {
            word: "fullscreen",
            hint: "ใช้สำหรับการจัดการโหมดเต็มหน้าจอ (:fullscreen)",
        },
        {
            word: "future",
            hint: "experimental feature ที่ใช้กำหนดค่าข้อมูลอนาคต",
        },
        {
            word: "format()",
            hint: "ใช้ร่วมกับ @font-face เพื่อระบุประเภทของฟอนต์",
        },
        {
            word: "::grammar-error",
            hint: "ใช้กำหนดสไตล์สำหรับคำผิดทางไวยากรณ์ (grammar errors)",
        },
        {
            word: "::highlight()",
            hint: "ใช้สไตล์ข้อความที่ถูกเลือก (highlighted text)",
        },
        {
            word: ":has()",
            hint: "pseudo-class ขั้นสูงที่ใช้เลือก parent element ตามเงื่อนไขของ child element",
        },
        {
            word: ":has(:slotted())",
            hint: "ใช้ร่วมกับ web components เพื่อกำหนดสไตล์ของ slot elements",
        },
        {
            word: "@import",
            hint: "ใช้โหลดไฟล์ css อื่นเข้ามา",
        },
        {
            word: "@historical-forms",
            hint: "ใช้กับ opentype font ที่มีตัวอักษรพิเศษแบบโบราณ",
        },
        {
            word: "initial-letter-align",
            hint: "ควบคุมการจัดวางตัวอักษรตัวแรกของย่อหน้า",
        },
        {
            word: "inset-inline",
            hint: "ใช้กำหนดตำแหน่งของ element ใน inline หรือ block direction",
        },
        {
            word: "inset-block",
            hint: "ใช้กำหนดตำแหน่งของ element ใน inline หรือ block direction",
        },
        {
            word: "interpolate-size",
            hint: "ควบคุมการเปลี่ยนแปลงขนาดของ element แบบ interpolated",
        },
        {
            word: "::js()",
            hint: "(อาจจะเป็นคุณสมบัติที่ยังไม่รองรับทั่วไป) ใช้สำหรับ javascript-based css styles",
        },
        {
            word: "frequency#khz",
            hint: "ใช้กำหนดค่าความถี่สำหรับเสียง (ใช้ใน speech css)",
        },
        {
            word: "lab()",
            hint: "ใช้กำหนดสีโดยใช้ค่าระบบสี lab",
        },
        {
            word: "lch()",
            hint: "ใช้กำหนดสีโดยใช้ค่าระบบสี lch",
        },
        {
            word: "light-dark()",
            hint: "ใช้กำหนดสีที่เปลี่ยนไปตามโหมด light/dark",
        },
        {
            word: "@layer",
            hint: "ใช้กำหนดลำดับของ css rule เพื่อควบคุมความสำคัญของ styles",
        },
        {
            word: "layer()",
            hint: "ใช้ควบคุมลำดับการทำงานของ styles ภายใน @layer",
        },
        {
            word: "leader()",
            hint: "ใช้กำหนดเส้นนำ (leader dots) ในการจัดรูปแบบข้อความ (พบใน css paged media)",
        },
        {
            word: "line-clamp",
            hint: "ใช้กำหนดจำนวนบรรทัดสูงสุดของข้อความก่อนตัดเป็น ... (ellipsis)",
        },
        {
            word: "line-gap-override (@font-face)",
            hint: "ใช้กำหนดระยะห่างระหว่างบรรทัดภายในฟอนต์",
        },
        {
            word: "log()",
            hint: "ใช้สำหรับ debugging ค่าต่าง ๆ ใน css",
        },
        {
            word: "mask-border",
            hint: "ใช้กำหนด mask ให้กับ border ของ element",
        },
        {
            word: "mask-composite",
            hint: "กำหนดว่าควรผสม mask อย่างไรเมื่อมีหลาย mask ซ้อนกัน",
        },
        {
            word: "mask-border-mode",
            hint: "ใช้ควบคุมโหมดของ mask border",
        },
        {
            word: "math-style",
            hint: "ควบคุมการแสดงผลของตัวเลขทางคณิตศาสตร์ (ใช้กับ mathml)",
        },
        {
            word: "math-shift",
            hint: "ควบคุมการแสดงผลของ exponent และ subscript",
        },
        {
            word: "marks (@page)",
            hint: "ใช้กำหนดเครื่องหมายพิเศษในเอกสารที่พิมพ์ (css paged media)",
        },
        {
            word: "negative (@counter-style)",
            hint: "ใช้กำหนดรูปแบบตัวเลขลบสำหรับ css counter",
        },
        {
            word: "navigation (@view-transition)",
            hint: "ใช้กำหนดสไตล์สำหรับ css view transitions",
        },
        {
            word: "time#ms",
            hint: "ใช้กำหนดค่าของเวลาในหน่วย milliseconds",
        },
        {
            word: "oklab()",
            hint: "ระบบกำหนดค่าสีที่ให้การแสดงผลที่แม่นยำขึ้นกว่าระบบ rgb",
        },
        {
            word: "oklch()",
            hint: "ระบบกำหนดค่าสีที่ให้การแสดงผลที่แม่นยำขึ้นกว่าระบบ rgb",
        },
        {
            word: ":only-child",
            hint: "ใช้เลือกองค์ประกอบที่เป็นลูกตัวเดียวของพาเรนต์",
        },
        {
            word: ":only-of-type",
            hint: "ใช้เลือกองค์ประกอบที่เป็นลูกตัวเดียวของพาเรนต์",
        },
        {
            word: ":optional",
            hint: "เลือก input field ที่ไม่มี required",
        },
        {
            word: ":out-of-range",
            hint: "เลือก input field ที่ค่าข้อมูลอยู่นอกขอบเขตที่กำหนด",
        },
        {
            word: "@ornaments",
            hint: "ใช้สำหรับสร้างลูกเล่นกราฟิกเพิ่มเติม (ปัจจุบันยังไม่มีการรองรับในเบราว์เซอร์หลัก)",
        },
        {
            word: "orphans",
            hint: "กำหนดจำนวนบรรทัดที่ต้องคงอยู่ที่ด้านล่างของหน้าในเอกสารที่มีหลายหน้า",
        },
        {
            word: "override-colors (@font-palette-values)",
            hint: "ปรับแต่งชุดสีของฟอนต์ที่รองรับการกำหนดสีของตัวอักษร",
        },
        {
            word: "overscroll-behavior",
            hint: "ควบคุมพฤติกรรมของหน้าจอเมื่อเลื่อนเกินขอบขององค์ประกอบ",
        },
        {
            word: "overscroll-behavior-block",
            hint: "ควบคุม overscroll ในแนว block ",
        },
        {
            word: "overscroll-behavior-inline",
            hint: "ควบคุม overscroll ในแนว inline",
        },
        {
            word: "overscroll-behavior-x",
            hint: "ควบคุม overscroll ในแนวแกน x ",
        },
        {
            word: "overscroll-behavior-y",
            hint: "ควบคุม overscroll ในแนวแกน y",
        },
        {
            word: "palette-mix()",
            hint: "ใช้ผสมสีแบบใหม่ (ยังไม่รองรับในเบราว์เซอร์หลัก)",
        },
        {
            word: "::part()",
            hint: "ใช้กับ web components เพื่อนิยามสไตล์สำหรับส่วนต่างๆ ภายใน",
        },
        {
            word: "path()",
            hint: "ใช้สร้าง motion path หรือ clip-path ที่ซับซ้อน",
        },
        {
            word: "position-try",
            hint: "ใช้ใน layout api ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
        },
        {
            word: "position-try-order",
            hint: "ใช้ใน layout api ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
        },
        {
            word: "position-try-fallbacks",
            hint: "ใช้ใน layout api ใหม่เพื่อกำหนด fallback ของตำแหน่ง",
        },
        {
            word: "position-visibility",
            hint: "ใช้ควบคุมการแสดงผลของตำแหน่งใน ui ที่ซับซ้อน",
        },
        {
            word: "pow()",
            hint: "ฟังก์ชันคำนวณเลขยกกำลังใน css",
        },
        {
            word: "prefix (@counter-style)",
            hint: "ใช้กำหนดค่าข้อความนำหน้าของ counter-style",
        },
        {
            word: "print-color-adjust",
            hint: "ควบคุมการพิมพ์สีในสื่อสิ่งพิมพ์",
        },
        {
            word: "@property",
            hint: "ใช้ประกาศ custom properties แบบกำหนดเองที่รองรับ animation",
        },
        {
            word: "range (@counter-style)",
            hint: "ใช้กำหนดช่วงค่าของ counter-style",
        },
        {
            word: "< ratio >",
            hint: "ใช้กำหนดอัตราส่วน เช่น aspect-ratio ขององค์ประกอบ",
        },
        {
            word: "reversed()",
            hint: "ใช้กลับลำดับของรายการที่เป็น ordered list (< ol >)",
        },
        {
            word: "ruby-align",
            hint: "ใช้จัดการรูปแบบของ ruby text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
        },
        {
            word: "ruby-merge",
            hint: "ใช้จัดการรูปแบบของ ruby text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
        },
        {
            word: "ruby-position",
            hint: "ใช้จัดการรูปแบบของ ruby text (ระบบ annotation ของภาษาเอเชีย เช่น ญี่ปุ่น)",
        },
        {
            word: "< resolution >",
            hint: "ใช้กำหนดค่าความละเอียด เช่น dpi สำหรับการพิมพ์",
        },
        {
            word: "scroll-timeline",
            hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
        },
        {
            word: "scroll-timeline-axis",
            hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
        },
        {
            word: "scroll-timeline-name",
            hint: "ใช้ควบคุมการทำงานของ animation ตามการเลื่อนของหน้าเว็บ",
        },
        {
            word: "size-adjust(@font-face)",
            hint: "ใช้ปรับขนาดของฟอนต์",
        },
        {
            word: "supports(@import)",
            hint: "ใช้กำหนดเงื่อนไขการโหลดสไตล์ชีตจากภายนอก",
        },
        {
            word: "symbols(@counter-style)",
            hint: "ใช้กำหนดสัญลักษณ์ในรายการสั่งนับ (list-style)",
        },
        {
            word: "system(@counter-style)",
            hint: "ใช้กำหนดประเภทของตัวนับ (เช่น numeric, alphabetic)",
        },
        {
            word: "slotted()",
            hint: "ใช้ใน web components เพื่อตรวจสอบเนื้อหาใน <slot>",
        },
        {
            word: "target-counter()",
            hint: "ใช้กำหนดค่าตัวนับใน css (ใช้กับ @counter-style)",
        },
        {
            word: "target-counters()",
            hint: "ใช้กำหนดค่าตัวนับใน css (ใช้กับ @counter-style)",
        },
        {
            word: "target-text()",
            hint: "ใช้ดึงข้อความที่เป็นเป้าหมายจาก <a href=...>",
        },
        {
            word: "timeline-scope",
            hint: "ใช้ควบคุมการทำงานของ animation timeline",
        },
        {
            word: "transition-behavior",
            hint: "ใช้ควบคุมพฤติกรรมของ transition เมื่อเปลี่ยนแปลงค่า",
        },
        {
            word: "transform-box",
            hint: "กำหนดพื้นที่ของการแปลง (transform) ขององค์ประกอบ",
        },
        {
            word: "type()",
            hint: "ใช้กำหนดประเภทข้อมูลและการเปลี่ยนแปลงใน view transition api",
        },
        {
            word: "types(@view-transition)",
            hint: "ใช้กำหนดประเภทข้อมูลและการเปลี่ยนแปลงใน view transition api",
        },
        {
            word: ":user-invalid",
            hint: "ใช้กำหนดสไตล์สำหรับอินพุตที่ไม่ถูกต้อง",
        },
        {
            word: ":user-valid",
            hint: "ใช้กำหนดสไตล์สำหรับอินพุตที่ถูกต้อง",
        },
        {
            word: "::view-transition-group()",
            hint: "เป็นส่วนหนึ่งของ view transitions api สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ smooth scroll",
        },
        {
            word: "::view-transition-image-pair()",
            hint: "เป็นส่วนหนึ่งของ view transitions api สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ smooth scroll",
        },
        {
            word: "::view-transition-new()",
            hint: "เป็นส่วนหนึ่งของ view transitions api สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ smooth scroll",
        },
        {
            word: "::view-transition-old()",
            hint: "เป็นส่วนหนึ่งของ view transitions api สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ smooth scroll",
        },
        {
            word: "view-transition-class",
            hint: "เป็นส่วนหนึ่งของ view transitions api สำหรับสร้างเอฟเฟกต์เปลี่ยนหน้าแบบ smooth scroll",
        },
        {
            word: ":where()",
            hint: "ใช้กำหนดสไตล์โดยมีค่าความสำคัญ (specificity) ต่ำกว่าเซเล็กเตอร์ทั่วไป",
        },
        {
            word: "white-space-collapse",
            hint: "ควบคุมการจัดการช่องว่างใน css",
        },
        {
            word: "widows",
            hint: "ควบคุมจำนวนบรรทัดที่ต้องเหลืออยู่ตอนขึ้นหน้าใหม่",
        },
        {
            word: "writing-mode",
            hint: "กำหนดโหมดการเขียน (horizontal-tb, vertical-rl)",
        },
        {
            word: ":xr-overlay",
            hint: "(experimental) ใช้สำหรับจัดการการแสดงผลในโหมด xr (extended reality)",
        },
        {
            word: "xywh()",
            hint: "ใช้สำหรับกำหนดขอบเขตขององค์ประกอบ (x, y, width, height)",
        },
        
    ],
};