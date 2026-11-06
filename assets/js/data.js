/* بيانات التحليل — مولدة بتاريخ 2026-11-07
   المصدر: تحليل 5 قوائم يوتيوب (260 فيديو) لمنهج CompTIA Security+ SY0-601
   يمكنك تعديل هذا الملف لتحديث المحتوى دون لمس بقية الكود */
const DATA = {
 "generated": "2026-11-07",
 "domains": [
  {
   "id": "D1",
   "name": "الهجمات والتهديدات والثغرات",
   "weight": 24,
   "chapters": [
    2,
    3,
    4
   ],
   "color": "rose",
   "desc": "تصنيف المهاجمين والهندسة الاجتماعية والبرمجيات الخبيثة والثغرات وفحصها"
  },
  {
   "id": "D2",
   "name": "المعمارية والتصميم",
   "weight": 21,
   "chapters": [
    1,
    5,
    9,
    13,
    14,
    15,
    16,
    21
   ],
   "color": "violet",
   "desc": "عناصر التحكم، التشفير، تصميم الشبكات، السحابة، الخصوصية، الأمن الفيزيائي"
  },
  {
   "id": "D3",
   "name": "التنفيذ والتطبيق",
   "weight": 25,
   "chapters": [
    6,
    7,
    8,
    10,
    11,
    12,
    13,
    15
   ],
   "color": "cyan",
   "desc": "أكبر المجالات وزناً: PKI، المصادقة، الهويات، الأجهزة، البروتوكولات، المضيف"
  },
  {
   "id": "D4",
   "name": "العمليات والاستجابة للحوادث",
   "weight": 16,
   "chapters": [
    3,
    10,
    17,
    18,
    20
   ],
   "color": "amber",
   "desc": "الاستجابة للحوادث، الطب الشرعي، المرونة والنسخ الاحتياطي، أنظمة الكشف"
  },
  {
   "id": "D5",
   "name": "الحوكمة وإدارة المخاطر والامتثال",
   "weight": 14,
   "chapters": [
    1,
    16,
    19,
    21
   ],
   "color": "emerald",
   "desc": "الأدوار والحوكمة، الخصوصية، إدارة المخاطر، الامتثال والأطر"
  }
 ],
 "examFacts": [
  [
   "90 سؤالاً كحد أقصى",
   "مزيج من اختيار من متعدد وأسئلة أداء PBQs"
  ],
  [
   "90 دقيقة",
   "مدة الامتحان — بمعدل دقيقة لكل سؤال"
  ],
  [
   "750 / 900",
   "درجة النجاح على المقياس الممتد 100-900"
  ],
  [
   "لا عقوبة على الخطأ",
   "الإجابة الخاطئة لا تخصم — أجب عن كل الأسئلة"
  ],
  [
   "SY0-601",
   "النسخة التي تتبعها القوائم الخمس (ورثتها 701 منذ نوفمبر 2023)"
  ]
 ],
 "schedule": [
  {
   "week": 1,
   "title": "أساسيات الهجمات — المجال الأول",
   "chapters": [
    1,
    2,
    3,
    4
   ],
   "extra": "سلسلة Malware Families من قائمة م. محمد علوي",
   "hours": "نحو 6.5 ساعة",
   "note": "ابدأ بفيديو المقدمة (00) من Netriders لفهم بنية الامتحان، ثم الفصول بالترتيب — المجال الأول هو الأعلى وزناً (24%)"
  },
  {
   "week": 2,
   "title": "التشفير والهوية — المجالان الثاني والثالث",
   "chapters": [
    5,
    6,
    7,
    8
   ],
   "extra": "اختياري: معامل الفصول 6 و7 و8",
   "hours": "نحو 5.5 ساعة",
   "note": "لا تتعجل فصل التشفير (100 دقيقة) — هو مفتاح فهم PKI والبروتوكولات لاحقاً"
  },
  {
   "week": 3,
   "title": "تأمين البنية — قلب المجال الثالث",
   "chapters": [
    9,
    10,
    11,
    12,
    15
   ],
   "extra": "اختياري: معامل جدار الحماية و IDS و VPN و SSH",
   "hours": "نحو 6 ساعات",
   "note": "أسبوع الشبكات — أكبر كتلة تقنية في المنهج، وزن المجال الثالث 25% وهو الأعلى"
  },
  {
   "week": 4,
   "title": "العمليات والحوكمة — المجالان الرابع والخامس",
   "chapters": [
    13,
    14,
    16,
    17,
    18,
    19,
    20,
    21
   ],
   "extra": "معامل الاستجابة للحوادث والأدلة والنسخ الاحتياطي",
   "hours": "نحو 4.5 ساعة",
   "note": "فصول أقصر وأخف — مع ملاحظة أن إدارة المخاطر (الفصل 19) كثيفة المفاهيم رغم قصرها"
  },
  {
   "week": 5,
   "title": "التطبيق والمراجعة — ما قبل الامتحان",
   "chapters": [],
   "extra": "المعامل الأساسية المتبقية + مسار p1 السريع كاملاً (19.4 ساعة) + مقتطفات p2",
   "hours": "نحو 10 إلى 20 ساعة",
   "note": "الأسبوع الذهبي: طبّق في المعامل، راجع بمسار Ahmad Al-Mashaikh السريع، واختبر نفسك بامتحانات تجريبية"
  }
 ],
 "methodology": {
  "steps": [
   [
    "حصر القوائم والفيديوهات",
    "استخرجنا بيانات القوائم الخمس كاملة من يوتيوب: 260 فيديو، القناة، الترتيب، والمدة الدقيقة لكل فيديو."
   ],
   [
    "مطابقة بنية المنهج الرسمي",
    "طابقنا عناوين الدروس مع بنية الكتاب الرسمي CompTIA Security+ SY0-601 (21 فصلاً) وأوزان النطاقات الخمسة المعتمدة."
   ],
   [
    "تحليل مستوى المحتوى",
    "لكل فصل: قارننا عمق التغطية (المدة مقياساً)، التطبيق العملي (وجود المعامل)، التكامل مع مسار موحد، ومؤشرات المجتمع (المشاهدات)."
   ],
   [
    "اختيار الأفضل مع التوثيق",
    "اخترنا أفضل درس لكل موضوع، وأضفنا درساً ثانياً فقط عند إضافته معرفة مكملة واضحة (مثل سلسلة عائلات البرمجيات الخبيثة)، مع توثيق سبب كل اختيار واستبعاد."
   ],
   [
    "تصنيف الأولويات",
    "صنفنا كل فيديو من 260: مهم (أساسي الآن)، متوسط (يدعم الأساس)، فيما بعد (مرجع وتعمق)، غير مهم (مكرر أو ضعيف القيمة)."
   ]
  ],
  "transparency": [
   "التحليل مبني على بيانات حقيقية مستخرجة من يوتيوب بتاريخ 7 نوفمبر 2026: الترتيب، المدد الدقيقة، أعداد المشاهدات، وبنية القوائم.",
   "لم تُشاهد الفيديوهات بالكامل؛ المدة وبنية الفصول ووجود المعامل ومؤشرات المجتمع هي أدلة التقييم — لهذا وثقنا السبب بجانب كل حكم ليحاكمه القارئ.",
   "قائمة م. حسن صالح (155 محاضرة) عناوينها رقمية فقط، فلم نخصص منها دروساً أساسية — حفظناها كاملة كمرجع احتياطي بدل التخمين.",
   "الفيديوهان 013 و014 من قائمة Mohamed hosseny بعناوين عامة — وُصلا بحالة «فيما بعد» مع توصية بمراجعتهما يدوياً."
  ]
 },
 "playlists": [
  {
   "key": "p5",
   "name": "Security+ (SY0-601) شرح عربي",
   "channel": "Netriders — نت رايدرز",
   "url": "https://www.youtube.com/playlist?list=PLky4bd7_03m8o1NB0j96OsxZs0KcKlgMO",
   "role": "العمود الفقري للخطة",
   "icon": "trophy",
   "color": "emerald",
   "verdict": "أفضل نقطة انطلاق: تغطية كاملة للمنهج الرسمي SY0-601 بترتيب الكتاب الرسمي، مع معامل تطبيقية مدمجة لمعظم الفصول، وأعلى ثقة مجتمعية بين القوائم (760 ألف مشاهدة).",
   "bestFor": "الشرح الأساسي الأول لكل فصل + التطبيق العملي",
   "strengths": [
    "تغطية كاملة للفصول الـ21 وفق بنية الكتاب الرسمي",
    "معامل تطبيقية مدمجة (جدار حماية، VPN، SSH، IDS، نسخ احتياطي...)",
    "أعلى تفاعل مجتمعي: 760 ألف مشاهدة (نحو 38 ضعف القائمة التالية ترتيباً)",
    "توازن ممتاز: 35-60 دقيقة نظرية لكل جزء + معامل 20-35 دقيقة"
   ],
   "weaknesses": [
    "بعض الفصول النظرية الطويلة تحتاج جلسات متعددة (التشفير 100 دقيقة)"
   ],
   "videos": [
    {
     "i": 1,
     "id": "dyKg_bQOXfU",
     "t": "00- Security+ (SY0-601) Course Introduction -  عربي",
     "d": 2449,
     "st": "med",
     "rs": "نظرة شاملة على بنية الامتحان وخطة القناة — مفيدة قبل البدء وليست إلزامية"
    },
    {
     "i": 2,
     "id": "H_u72hlzyoE",
     "t": "01- Comparing Security Roles and Security Controls",
     "d": 2269,
     "st": "imp",
     "rs": "أساسي الفصل 1 — تغطية متوازنة لعناصر التحكم والأدوار"
    },
    {
     "i": 3,
     "id": "PQSF_1cWMCk",
     "t": "02- Explaining Threat Actors and Threat Intelligence",
     "d": 3466,
     "st": "imp",
     "rs": "أساسي الفصل 2 — أعمق شرح للجهات الفاعلة التهديدية (58 دقيقة)"
    },
    {
     "i": 4,
     "id": "Z6sxhcyJ8Kc",
     "t": "03.1- Performing Security Assessments - Part 1",
     "d": 3332,
     "st": "imp",
     "rs": "أساسي الفصل 3 — نظرية تقييمات الأمن (الجزء الأول)"
    },
    {
     "i": 5,
     "id": "NFTVFOubAUg",
     "t": "03.2- Performing Security Assessments - Part 2 (Exploring the Lab Environment Lab)",
     "d": 1756,
     "st": "med",
     "rs": "معمل الفصل 3 — استكشاف بيئة المعامل"
    },
    {
     "i": 6,
     "id": "vyaBoVd_Zj8",
     "t": "03.3- Performing Security Assessments - Part 3 (Scanning and Identifying Network Nodes Lab)",
     "d": 1936,
     "st": "med",
     "rs": "معمل الفصل 3 — فحص وتحديد عقد الشبكة"
    },
    {
     "i": 7,
     "id": "IfUGpBZbBkQ",
     "t": "03.4- Performing Security Assessments - Part 4",
     "d": 2031,
     "st": "imp",
     "rs": "أساسي الفصل 3 — نظرية (الجزء الرابع)"
    },
    {
     "i": 8,
     "id": "0eWWS5g0KHU",
     "t": "03.5- Performing Security Assessments - Part 5 (Intercepting and Interpreting Network Traffic Lab)",
     "d": 1855,
     "st": "med",
     "rs": "معمل الفصل 3 — اعتراض وتحليل حركة الشبكة"
    },
    {
     "i": 9,
     "id": "q8kzykuxWpk",
     "t": "03.6- Performing Security Assessments - Part 6",
     "d": 3595,
     "st": "imp",
     "rs": "أساسي الفصل 3 — نظرية (الجزء السادس، 60 دقيقة)"
    },
    {
     "i": 10,
     "id": "nAZjbj0nq8A",
     "t": "03.7- Performing Security Assessments - Part 7 ( Credentialed Vulnerability Scan Lab)",
     "d": 1551,
     "st": "med",
     "rs": "معمل الفصل 3 — الفحص المصدق للثغرات"
    },
    {
     "i": 11,
     "id": "5bwzteyoUsU",
     "t": "04.1- Identifying Social Engineering and Malware - Part 1",
     "d": 2799,
     "st": "imp",
     "rs": "أساسي الفصل 4 — الهندسة الاجتماعية (الجزء الأول)"
    },
    {
     "i": 12,
     "id": "f-pgjZzid-o",
     "t": "04.2- Identifying Social Engineering and Malware - Part 2",
     "d": 3302,
     "st": "imp",
     "rs": "أساسي الفصل 4 — البرمجيات الخبيثة (الجزء الثاني)"
    },
    {
     "i": 13,
     "id": "r69MX51XzEQ",
     "t": "04.3- Identifying Social Engineering and Malware - Part 3 (Malware-based Backdoor Lab)",
     "d": 1647,
     "st": "med",
     "rs": "معمل الفصل 4 — الباب الخلفي عبر برمجية خبيثة"
    },
    {
     "i": 14,
     "id": "3eZjVNCpyDU",
     "t": "05- Summarizing Basic Cryptographic Concepts",
     "d": 6022,
     "st": "imp",
     "rs": "أساسي الفصل 5 — أطول وأعمق شرح منفرد للتشفير (100 دقيقة)"
    },
    {
     "i": 15,
     "id": "q1rLVrMFbcY",
     "t": "06.1- Implementing Public Key Infrastructure - Part 1",
     "d": 3769,
     "st": "imp",
     "rs": "أساسي الفصل 6 — PKI (النظرية)"
    },
    {
     "i": 16,
     "id": "9RUzcNv37Wk",
     "t": "06.2- Implementing Public Key Infrastructure - Part 2 (Managing the Lifecycle of a Certificate Lab)",
     "d": 1971,
     "st": "med",
     "rs": "معمل الفصل 6 — إدارة دورة حياة الشهادة"
    },
    {
     "i": 17,
     "id": "ftIpzBeBIqw",
     "t": "07.1- Implementing Authentication Controls - Part 1",
     "d": 4893,
     "st": "imp",
     "rs": "أساسي الفصل 7 — عناصر التحكم بالمصادقة (82 دقيقة)"
    },
    {
     "i": 18,
     "id": "GJAN7oU0kKA",
     "t": "07.2- Implementing Authentication Controls - Part 2 (Password Cracking Lab)",
     "d": 2148,
     "st": "med",
     "rs": "معمل الفصل 7 — كسر كلمات المرور"
    },
    {
     "i": 19,
     "id": "sls2j_jTrHc",
     "t": "07.3- Implementing Authentication Controls - Part 3 (Managing Centralized Authentication Lab)",
     "d": 1812,
     "st": "med",
     "rs": "معمل الفصل 7 — إدارة المصادقة المركزية"
    },
    {
     "i": 20,
     "id": "0v51j2EmzFY",
     "t": "08.1- Implementing Identity and Account Management Controls - Part 1",
     "d": 4696,
     "st": "imp",
     "rs": "أساسي الفصل 8 — إدارة الهويات والحسابات (78 دقيقة)"
    },
    {
     "i": 21,
     "id": "xy0GPXg-yss",
     "t": "08.2- Implementing Identity and Account Management Controls - Part 2 (Access Controls Lab)",
     "d": 2038,
     "st": "med",
     "rs": "معمل الفصل 8 — ضوابط الوصول"
    },
    {
     "i": 22,
     "id": "6A0cUYVbdK0",
     "t": "08.3- Implementing Identity and Account Management Controls - Part 3 (Auditing Policies Lab)",
     "d": 2009,
     "st": "med",
     "rs": "معمل الفصل 8 — سياسات التدقيق"
    },
    {
     "i": 23,
     "id": "AEAEmsywsbE",
     "t": "08.4- Implementing Identity and Account Management Controls - Part 4 (Access Controls in Linux Lab)",
     "d": 2140,
     "st": "med",
     "rs": "معمل الفصل 8 — ضوابط الوصول في Linux"
    },
    {
     "i": 24,
     "id": "0uZ_lxxYrxk",
     "t": "09.1- Implementing Secure Network Designs - Part 1",
     "d": 3461,
     "st": "imp",
     "rs": "أساسي الفصل 9 — تصميمات الشبكات الآمنة (الجزء الأول)"
    },
    {
     "i": 25,
     "id": "Gmjuy6m5_9s",
     "t": "09.2- Implementing Secure Network Designs - Part 2",
     "d": 4812,
     "st": "imp",
     "rs": "أساسي الفصل 9 — تكملة النظرية (80 دقيقة)"
    },
    {
     "i": 26,
     "id": "X24w8M7SLCE",
     "t": "09.3- Implementing Secure Network Designs - Part 3 (Implementing a Secure Network Design Lab)",
     "d": 1922,
     "st": "med",
     "rs": "معمل الفصل 9 — تنفيذ تصميم شبكة آمن"
    },
    {
     "i": 27,
     "id": "LwUHbTfjOZU",
     "t": "10.1- Implementing Network Security Appliances - Part 1",
     "d": 3976,
     "st": "imp",
     "rs": "أساسي الفصل 10 — أجهزة أمن الشبكة (66 دقيقة)"
    },
    {
     "i": 28,
     "id": "LyxLUdrsLuU",
     "t": "10.2- Implementing Network Security Appliances - Part 2 (Configuring a Firewall Lab)",
     "d": 1352,
     "st": "med",
     "rs": "معمل الفصل 10 — إعداد جدار حماية"
    },
    {
     "i": 29,
     "id": "yh3AfEmD4MQ",
     "t": "10.3- Implementing Network Security Appliances - Part 3 (Intrusion Detection System Lab)",
     "d": 2110,
     "st": "med",
     "rs": "معمل الفصل 10 — نظام كشف التسلل IDS"
    },
    {
     "i": 30,
     "id": "6oCNbljA7Zo",
     "t": "11.1- Implementing Secure Network Protocols  - Part 1",
     "d": 3870,
     "st": "imp",
     "rs": "أساسي الفصل 11 — البروتوكولات الآمنة (النظرية)"
    },
    {
     "i": 31,
     "id": "xzz2cxzTtMw",
     "t": "11.2 - Implementing Secure Network Protocols - Part 2 (Secure Network Addressing Services Lab)",
     "d": 1547,
     "st": "med",
     "rs": "معمل الفصل 11 — خدمات عنونة الشبكة الآمنة"
    },
    {
     "i": 32,
     "id": "fx6OsgNl7Bk",
     "t": "11.3- Implementing Secure Network Protocols - Part 3 (Implementing a Virtual Private Network Lab)",
     "d": 1280,
     "st": "med",
     "rs": "معمل الفصل 11 — تنفيذ شبكة VPN"
    },
    {
     "i": 33,
     "id": "kVUK3SSHl88",
     "t": "11.4- Implementing Secure Network Protocols - Part 4 (Implementing a Secure SSH Server Lab)",
     "d": 2469,
     "st": "med",
     "rs": "معمل الفصل 11 — إعداد خادم SSH آمن"
    },
    {
     "i": 34,
     "id": "EToNpewImjs",
     "t": "12.1- Implementing Host Security Solutions - Part 1",
     "d": 1045,
     "st": "imp",
     "rs": "أساسي الفصل 12 — حلول أمن المضيف"
    },
    {
     "i": 35,
     "id": "DG5kfBgT7r4",
     "t": "12.2- Implementing Host Security Solutions - Part 2 (Implementing Endpoint Protection Lab)",
     "d": 1334,
     "st": "med",
     "rs": "معمل الفصل 12 — حماية النقاط الطرفية"
    },
    {
     "i": 36,
     "id": "T1JXEG85r40",
     "t": "13- Implementing Secure Mobile Solutions",
     "d": 1514,
     "st": "med",
     "rs": "أساسي الفصل 13 — الأجهزة المحمولة (وزن الفصل متوسط)"
    },
    {
     "i": 37,
     "id": "cs4lKSsgvkY",
     "t": "14.1- Summarizing Secure Application Concepts - Part 1",
     "d": 3310,
     "st": "med",
     "rs": "أساسي الفصل 14 — مفاهيم التطبيقات الآمنة (وزن الفصل متوسط)"
    },
    {
     "i": 38,
     "id": "BxvjYO3G4Ew",
     "t": "14.2- Summarizing Secure Application Concepts - Part 2 (Application Attack Indicators Lab)",
     "d": 1770,
     "st": "later",
     "rs": "معمل تطبيقات مطول — بعد إتمام الأساسيات"
    },
    {
     "i": 39,
     "id": "xPLSITWpx3w",
     "t": "14.3- Summarizing Secure Application Concepts - Part 3 (Identifying a Browser Attack Lab)",
     "d": 2093,
     "st": "later",
     "rs": "معمل تطبيقات مطول — بعد إتمام الأساسيات"
    },
    {
     "i": 40,
     "id": "hevbOcH0S8s",
     "t": "14.4- Summarizing Secure Application Concepts - Part 4 (Implementing PowerShell Security Lab)",
     "d": 2040,
     "st": "later",
     "rs": "معمل PowerShell — تخصصي، فيما بعد"
    },
    {
     "i": 41,
     "id": "8Ad2-DIJRpc",
     "t": "14.5- Summarizing Secure Application Concepts - Part 5 (Identifying Malicious Code Lab)",
     "d": 1475,
     "st": "later",
     "rs": "معمل الشيفرة الخبيثة — تخصصي، فيما بعد"
    },
    {
     "i": 42,
     "id": "GrEINwEZSm0",
     "t": "15- Implementing Secure Cloud Solutions",
     "d": 2967,
     "st": "imp",
     "rs": "أساسي الفصل 15 — السحابة حاضرة بقوة في أسئلة الامتحان"
    },
    {
     "i": 43,
     "id": "QLbr-I6DP4Y",
     "t": "16- Explaining Data Privacy and Protection Concepts",
     "d": 1455,
     "st": "med",
     "rs": "أساسي الفصل 16 — خصوصية البيانات"
    },
    {
     "i": 44,
     "id": "hn4XGgsc6nI",
     "t": "17.1- Performing Incident Response - Part 1",
     "d": 3600,
     "st": "imp",
     "rs": "أساسي الفصل 17 — الاستجابة للحوادث (المجال الرابع)"
    },
    {
     "i": 45,
     "id": "xd6HXJfSKJc",
     "t": "17.2- Performing Incident Response - Part 2 (Managing Data Sources for Incident Response Lab)",
     "d": 2517,
     "st": "med",
     "rs": "معمل الفصل 17 — إدارة مصادر البيانات"
    },
    {
     "i": 46,
     "id": "jr6RNQZaihg",
     "t": "17.3- Performing Incident Response - Part 3 (Configuring Mitigation Controls Lab)",
     "d": 1114,
     "st": "med",
     "rs": "معمل الفصل 17 — إعداد ضوابط التخفيف"
    },
    {
     "i": 47,
     "id": "VRlldq5snmM",
     "t": "18.1- Explaining Digital Forensics - Part 1",
     "d": 702,
     "st": "med",
     "rs": "أساسي الفصل 18 — الطب الشرعي (نظري مركز)"
    },
    {
     "i": 48,
     "id": "8QCMP-nYW-A",
     "t": "18.2- Explaining Digital Forensics - Part 2 (Acquiring Digital Forensics Evidence Lab)",
     "d": 2060,
     "st": "med",
     "rs": "معمل الفصل 18 — تحصيل الأدلة الجنائية الرقمية"
    },
    {
     "i": 49,
     "id": "piw75hexagQ",
     "t": "19- Summarizing Risk Management Concepts",
     "d": 2640,
     "st": "imp",
     "rs": "أساسي الفصل 19 — إدارة المخاطر (44 دقيقة مقابل 11 فقط في p1!)"
    },
    {
     "i": 50,
     "id": "QT4xFnC1Mh4",
     "t": "20.1- Implementing Cybersecurity Resilience - Part 1",
     "d": 667,
     "st": "med",
     "rs": "أساسي الفصل 20 — المرونة والنسخ الاحتياطي"
    },
    {
     "i": 51,
     "id": "JvcnnC__008",
     "t": "20.2- Implementing Cybersecurity Resilience - Part 2 (Backing Up Data in Windows and Linux Lab)",
     "d": 1422,
     "st": "med",
     "rs": "معمل الفصل 20 — النسخ الاحتياطي في Windows وLinux"
    },
    {
     "i": 52,
     "id": "rcYIAlazvjI",
     "t": "21- Explaining Physical Security",
     "d": 996,
     "st": "med",
     "rs": "أساسي الفصل 21 — الأمن الفيزيائي (17 دقيقة مقابل 7 فقط في p1)"
    }
   ],
   "count": 52,
   "hours": 34.7,
   "counts": {
    "imp": 19,
    "med": 29,
    "later": 4,
    "skip": 0
   },
   "views": "760,124"
  },
  {
   "key": "p1",
   "name": "CompTIA Security+ Full Arabic",
   "channel": "Ahmad Al-Mashaikh",
   "url": "https://www.youtube.com/playlist?list=PL80II4AeondKEpksAHqIQi2AfTOxYgJgy",
   "role": "مسار المراجعة السريعة",
   "icon": "zap",
   "color": "cyan",
   "verdict": "محاضرة واحدة مكثفة لكل فصل (19.4 ساعة إجمالاً) — الخيار الأذكى للمراجعة الشاملة قبل الامتحان، لكن الفصول المتأخرة مقتضبة جداً (إدارة المخاطر 11 دقيقة فقط مقابل 44 في قائمة Netriders).",
   "bestFor": "المراجعة السريعة بعد إتمام الخطة الأساسية",
   "strengths": [
    "أسرع تغطية شاملة للمنهج: 19.4 ساعة فقط",
    "بنية فصلية واضحة مطابقة للكتاب الرسمي",
    "معمل معماري موسع للشبكات (3 أجزاء نحو 3.4 ساعة) — الأطول بين القوائم"
   ],
   "weaknesses": [
    "الفصول 13 و19 و21 مختصرة بشكل مقلق مقارنة بالفحص الفعلي",
    "لا معامل لمعظم الفصول"
   ],
   "videos": [
    {
     "i": 1,
     "id": "U3Z_HEPzu6g",
     "t": "Chapter 01 Comparing Security Roles and Security Controls المحاضرة الأولى",
     "d": 3741,
     "st": "later",
     "rs": "مسار المراجعة: بديل 62 دقيقة للفصل 1"
    },
    {
     "i": 2,
     "id": "AzB73FuxZKI",
     "t": "Chapter  02  Explaining Threat Actors and Threat Intelligence  المحاضرة الثانية",
     "d": 1811,
     "st": "later",
     "rs": "مسار المراجعة: أسرع لكن أقل عمقاً من أساسي الفصل 2"
    },
    {
     "i": 3,
     "id": "FTf8ia31i6Y",
     "t": "Chapter 03  Performing Security Assessments Part 1 المحاضرة الثالثة الجزء الاول",
     "d": 3816,
     "st": "later",
     "rs": "مسار المراجعة: الفصل 3 في جزأين (79 دقيقة مقابل 150 نظرية + معامل في p5)"
    },
    {
     "i": 4,
     "id": "Ex8te6EbpyU",
     "t": "Chapter 03  Performing Security Assessments Part 2 المحاضرة الثالثة الجزء الثاني",
     "d": 958,
     "st": "later",
     "rs": "مسار المراجعة: تكملة الفصل 3"
    },
    {
     "i": 5,
     "id": "3iP2SOaJS7E",
     "t": "Chapter  04  Identifying Social Engineering and Malware Part 1 المحاضرة الرابعة الجزء الاول",
     "d": 2414,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 4 (106 دقيقة للجزأين)"
    },
    {
     "i": 6,
     "id": "8pRGGiRvyAM",
     "t": "Chapter   04  Identifying Social Engineering and Malware Part 2 المحاضرة الرابعة الجزء الثاني",
     "d": 3965,
     "st": "later",
     "rs": "مسار المراجعة: تكملة الفصل 4"
    },
    {
     "i": 7,
     "id": "_1lojUbM0Vo",
     "t": "Chapter  05  Summarizing Basic Cryptographic Concepts المحاضرة الخامسة",
     "d": 3919,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 5 (65 مقابل 100 دقيقة)"
    },
    {
     "i": 8,
     "id": "vYpOmrcX5EI",
     "t": "Chapter  06  Implementing Public Key Infrastructure المحاضرة السادسة",
     "d": 2726,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 6"
    },
    {
     "i": 9,
     "id": "q3PbIno1NqQ",
     "t": "Chapter  07 Implementing Authentication Controls المحاضرة السابعة",
     "d": 2428,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 7"
    },
    {
     "i": 10,
     "id": "EiNy7AR6yzY",
     "t": "Chapter  08  Implementing Identity and Account Management Controls المحاضرة الثامنة",
     "d": 2442,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 8"
    },
    {
     "i": 11,
     "id": "u2w-quX4SIk",
     "t": "Chapter  09   Implementing Secure Network Designs المحاضرة التاسعة",
     "d": 5409,
     "st": "later",
     "rs": "مسار المراجعة: بديل قوي للفصل 9 (90 دقيقة)"
    },
    {
     "i": 12,
     "id": "wb-PtOaU7KM",
     "t": "Chapter  10  Implementing Network Security Appliances المحاضرة العاشرة",
     "d": 1827,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 10 (30 دقيقة فقط)"
    },
    {
     "i": 13,
     "id": "y-xeMQs7EhI",
     "t": "Chapter 11  Implementing Secure Network Protocols المحاضرة الحادية عشر",
     "d": 3010,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 11"
    },
    {
     "i": 14,
     "id": "L2bOgcxYc7s",
     "t": "Chapter 11 -  LAB Security + Networking Architectures Part 1 المحاضرة العملية الجزء الاول",
     "d": 6386,
     "st": "later",
     "rs": "معمل معماري موسع (1:46) — لعشاق التطبيق العملي الشامل"
    },
    {
     "i": 15,
     "id": "ujA_TxeedfE",
     "t": "Chapter 11 - LAB Security + Networking Architectures Part 2 المحاضرة العملية الجزء الثاني",
     "d": 5420,
     "st": "later",
     "rs": "تكملة المعمل المعماري (1:30)"
    },
    {
     "i": 16,
     "id": "LMTxt-d241Q",
     "t": "Chapter 11 -  LAB Security + Networking Architectures Part 3 المحاضرة العملية الجزء الثالث",
     "d": 1566,
     "st": "later",
     "rs": "ختام المعمل المعماري (26 دقيقة)"
    },
    {
     "i": 17,
     "id": "RP90Yq6QQGg",
     "t": "Chapter  12  Implementing Host Security Solutions المحاضرة الثانية عشر",
     "d": 1647,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 12"
    },
    {
     "i": 18,
     "id": "9FgiCRyxhXQ",
     "t": "Chapter 13 Implementing Secure Mobile Solutions المحاضرة الثالثة عشر",
     "d": 939,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 13"
    },
    {
     "i": 19,
     "id": "OLzHOXcygYk",
     "t": "Chapter  14  Summarizing Secure Application Concepts المحاضرة الرابعة عشر",
     "d": 3325,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 14"
    },
    {
     "i": 20,
     "id": "LlhMqZOtFLg",
     "t": "Chapter  14  Summarizing Secure Application Concepts LABs المحاضرة الرابعة عشر التطبيق العملي",
     "d": 2648,
     "st": "later",
     "rs": "معمل الفصل 14 التطبيقي"
    },
    {
     "i": 21,
     "id": "1YkLTlg5prc",
     "t": "Chapter  15  Implementing Secure Cloud Solutions المحاضرة الخامسة عشر",
     "d": 1816,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 15"
    },
    {
     "i": 22,
     "id": "xiBfOMVcWH0",
     "t": "Chapter  16  Explaining Data Privacy and Protection Concepts المحاضرة السادسة عشر",
     "d": 1295,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 16"
    },
    {
     "i": 23,
     "id": "ocLNoj6Pex0",
     "t": "Chapter  17  Performing Incident Response المحاضرة السابعة عشر",
     "d": 1442,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 17 (24 دقيقة فقط)"
    },
    {
     "i": 24,
     "id": "bppNMzqkPi8",
     "t": "Chapter  18  Explaining Digital Forensics المحاضرة الثامنة عشر",
     "d": 2547,
     "st": "med",
     "rs": "شرح نظري أطول من الأساسي (42 مقابل 12 دقيقة) — أفضل خيار للتعمق في الطب الشرعي"
    },
    {
     "i": 25,
     "id": "tFNgjkgCcXQ",
     "t": "Chapter  19  Summarizing Risk Management Concepts المحاضرة التاسعة عشر",
     "d": 640,
     "st": "later",
     "rs": "مختصر جداً (11 دقيقة) — غير كافٍ لحجم مفاهيم إدارة المخاطر"
    },
    {
     "i": 26,
     "id": "CzMcy0fksEA",
     "t": "Chapter  20  Implementing Cybersecurity Resilience المحاضرة العشرون",
     "d": 1253,
     "st": "later",
     "rs": "مسار المراجعة: بديل الفصل 20"
    },
    {
     "i": 27,
     "id": "fwp1qANofC4",
     "t": "Chapter  21  Explaining Physical Security المحاضرة الواحد والعشرون والاخيرة",
     "d": 395,
     "st": "later",
     "rs": "مختصر جداً (7 دقائق) — الأساسي أفضل"
    }
   ],
   "count": 27,
   "hours": 19.4,
   "counts": {
    "imp": 0,
    "med": 1,
    "later": 26,
    "skip": 0
   },
   "views": "20,007"
  },
  {
   "key": "p3",
   "name": "CompTIA Security+ شرح بالعربي — م. حسن صالح",
   "channel": "Information Technology — Eng. Hassan Saleh",
   "url": "https://www.youtube.com/playlist?list=PLLlr6jKKdyK3C22AuU70h5xWe0ePmsbT7",
   "role": "المرجع الاحتياطي الشامل",
   "icon": "library",
   "color": "violet",
   "verdict": "أضخم قائمة (155 محاضرة نحو 76.6 ساعة) بأسلوب محاضرات قصيرة مركزة (بمعدل 30 دقيقة). عناوين رقمية فقط دون موضوعات، لذا لا يمكن مطابقتها بالفصول بدقة — قيمتها الحقيقية: مصدر «الشرح الثاني» لأي مفهوم لم يستوعب من المصدر الأساسي.",
   "bestFor": "شرح ثانٍ موسع لأي مفهوم صعب",
   "strengths": [
    "أعمق تغطية متاحة: 76.6 ساعة من المحتوى المجزأ",
    "محاضرات قصيرة مركزة تناسب جلسات الدراسة القصيرة",
    "تفاعل مجتمعي جيد: 138 ألف مشاهدة"
   ],
   "weaknesses": [
    "عناوين رقمية فقط — لا يمكن تحديد موضوع المحاضرة دون فتحها",
    "مشاهدة القائمة كاملة تعني تكراراً هائلاً للخطة الأساسية"
   ],
   "videos": [
    {
     "i": 1,
     "id": "dWH6BqyxRmc",
     "t": "01-CompTIA Security+ (Lecture 1) By Eng-Hassan Saleh | Arabic",
     "d": 1579,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 2,
     "id": "vGj1JEyOAAE",
     "t": "02-CompTIA Security+ (Lecture 2) By Eng-Hassan Saleh | Arabic",
     "d": 1901,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 3,
     "id": "hf7oL0Jkehw",
     "t": "03-CompTIA Security+ (Lecture 3) By Eng-Hassan Saleh | Arabic",
     "d": 1216,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 4,
     "id": "3cjgT_W5v5Y",
     "t": "04-CompTIA Security+ (Lecture 4) By Eng-Hassan Saleh | Arabic",
     "d": 1795,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 5,
     "id": "pjV2c1lIIk4",
     "t": "05-CompTIA Security+ (Lecture 5) By Eng-Hassan Saleh | Arabic",
     "d": 1911,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 6,
     "id": "H41hfSYt8R4",
     "t": "06-CompTIA Security+ (Lecture 6) By Eng-Hassan Saleh | Arabic",
     "d": 1584,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 7,
     "id": "nhqYKHwGdqw",
     "t": "07-CompTIA Security+ (Lecture 7) By Eng-Hassan Saleh | Arabic",
     "d": 2008,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 8,
     "id": "FMKIR1xMxLo",
     "t": "08-CompTIA Security+ (Lecture 8) By Eng-Hassan Saleh | Arabic",
     "d": 1067,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 9,
     "id": "sBtTdWZTC9E",
     "t": "09-CompTIA Security+ (Lecture 9) By Eng-Hassan Saleh | Arabic",
     "d": 1002,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 10,
     "id": "k-XU-m5m7S8",
     "t": "10-CompTIA Security+ (Lecture 10) By Eng-Hassan Saleh | Arabic",
     "d": 917,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 11,
     "id": "YjQ95ErSO1Y",
     "t": "11-CompTIA Security+ (Lecture 11) By Eng-Hassan Saleh | Arabic",
     "d": 1933,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 12,
     "id": "7bmVIJ7mudw",
     "t": "12-CompTIA Security+ (Lecture 12) By Eng-Hassan Saleh | Arabic",
     "d": 1386,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 13,
     "id": "vgzCVTdhEKA",
     "t": "13-CompTIA Security+ (Lecture 13) By Eng-Hassan Saleh | Arabic",
     "d": 1740,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 14,
     "id": "a63PFuM5t34",
     "t": "14-CompTIA Security+ (Lecture 14) By Eng-Hassan Saleh | Arabic",
     "d": 1108,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 15,
     "id": "XaVOrwX4cu4",
     "t": "15-CompTIA Security+ (Lecture 15) By Eng-Hassan Saleh | Arabic",
     "d": 856,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 16,
     "id": "E0dM-AMLw0c",
     "t": "16-CompTIA Security+ (Lecture 16) By Eng-Hassan Saleh | Arabic",
     "d": 1351,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 17,
     "id": "0pTKlS7QhAA",
     "t": "17-CompTIA Security+ (Lecture 17) By Eng-Hassan Saleh | Arabic",
     "d": 1495,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 18,
     "id": "i_fOz0FSlBU",
     "t": "18-CompTIA Security+ (Lecture 18) By Eng-Hassan Saleh | Arabic",
     "d": 1434,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 19,
     "id": "qnNCOyJE-zw",
     "t": "19-CompTIA Security+ (Lecture 19) By Eng-Hassan Saleh | Arabic",
     "d": 1054,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 20,
     "id": "_k1CRUkxfn0",
     "t": "20-CompTIA Security+ (Lecture 20) By Eng-Hassan Saleh | Arabic",
     "d": 1287,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 21,
     "id": "eWTPp6SBLKU",
     "t": "21-CompTIA Security+ (Lecture 21) By Eng-Hassan Saleh | Arabic",
     "d": 2008,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 22,
     "id": "rhJAJ_IN1fQ",
     "t": "22-CompTIA Security+ (Lecture 22) By Eng-Hassan Saleh | Arabic",
     "d": 1058,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 23,
     "id": "GnyHFEfgr2o",
     "t": "23-CompTIA Security+ (Lecture 23) By Eng-Hassan Saleh | Arabic",
     "d": 1709,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 24,
     "id": "5pQDTCCwLQ0",
     "t": "24-CompTIA Security+ (Lecture 24) By Eng-Hassan Saleh | Arabic",
     "d": 1922,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 25,
     "id": "V6Jp_xckMOQ",
     "t": "25-CompTIA Security+ (Lecture 25) By Eng-Hassan Saleh | Arabic",
     "d": 1101,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 26,
     "id": "jtE9tRhOKho",
     "t": "26-CompTIA Security+ (Lecture 26) By Eng-Hassan Saleh | Arabic",
     "d": 825,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 27,
     "id": "0-vUU4q7nUk",
     "t": "27-CompTIA Security+ (Lecture 27) By Eng-Hassan Saleh | Arabic",
     "d": 1073,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 28,
     "id": "LbTCKMlLycs",
     "t": "28-CompTIA Security+ (Lecture 28) By Eng-Hassan Saleh | Arabic",
     "d": 1421,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 29,
     "id": "RQapb2Bw4bU",
     "t": "29-CompTIA Security+ (Lecture 29) By Eng-Hassan Saleh | Arabic",
     "d": 578,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 30,
     "id": "7fwIgbKnvC8",
     "t": "30-CompTIA Security+ (Lecture 30) By Eng-Hassan Saleh | Arabic",
     "d": 2050,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 31,
     "id": "bDywKi4q-08",
     "t": "31-CompTIA Security+ (Lecture 31) By Eng-Hassan Saleh | Arabic",
     "d": 1292,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 32,
     "id": "tvyaZ1FAvCI",
     "t": "32-CompTIA Security+ (Lecture 32) By Eng-Hassan Saleh | Arabic",
     "d": 1840,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 33,
     "id": "9s6cOND4srI",
     "t": "33-CompTIA Security+ (Lecture 33) By Eng-Hassan Saleh | Arabic",
     "d": 1807,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 34,
     "id": "iYruMzZLYE0",
     "t": "34-CompTIA Security+ (Lecture 34) By Eng-Hassan Saleh | Arabic",
     "d": 1889,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 35,
     "id": "ayUyD7TndPw",
     "t": "35-CompTIA Security+ (Lecture 35) By Eng-Hassan Saleh | Arabic",
     "d": 1901,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 36,
     "id": "dFLd3tv8c4I",
     "t": "36-CompTIA Security+ (Lecture 36) By Eng-Hassan Saleh | Arabic",
     "d": 2324,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 37,
     "id": "XFpzX-zZxpU",
     "t": "37-CompTIA Security+ (Lecture 37) By Eng-Hassan Saleh | Arabic",
     "d": 1888,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 38,
     "id": "OJiTA25hj5g",
     "t": "38-CompTIA Security+ (Lecture 38) By Eng-Hassan Saleh | Arabic",
     "d": 1839,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 39,
     "id": "WrKLl3yfuog",
     "t": "39-CompTIA Security+ (Lecture 39) By Eng. Hassan Saleh | Arabic",
     "d": 2273,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 40,
     "id": "-7bPYhFHa-Y",
     "t": "40-CompTIA Security+ (Lecture 40) By Eng-Hassan Saleh | Arabic",
     "d": 1915,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 41,
     "id": "pojUuoZOJm4",
     "t": "41-CompTIA Security+ (Lecture 41) By Eng. Hassan Saleh | Arabic",
     "d": 2008,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 42,
     "id": "wmJPskFRd_0",
     "t": "42-CompTIA Security+ (Lecture 42) By Eng-Hassan Saleh | Arabic",
     "d": 1808,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 43,
     "id": "ORqkLU5oiu0",
     "t": "43-CompTIA Security+ (Lecture 43) By Eng-Hassan Saleh | Arabic",
     "d": 1865,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 44,
     "id": "luDxaqytxKs",
     "t": "44-CompTIA Security+ (Lecture 44) By Eng-Hassan Saleh | Arabic",
     "d": 1948,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 45,
     "id": "HklUgKuGaxM",
     "t": "45-CompTIA Security+ (Lecture 45) By Eng-Hassan Saleh | Arabic",
     "d": 373,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 46,
     "id": "LzXRlNhFbF0",
     "t": "46-CompTIA Security+ (Lecture 46) By Eng-Hassan Saleh | Arabic",
     "d": 1907,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 47,
     "id": "fIVBU19rM8o",
     "t": "47-CompTIA Security+ (Lecture 47) By Eng-Hassan Saleh | Arabic",
     "d": 1865,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 48,
     "id": "_x_yFUnX5BA",
     "t": "48-CompTIA Security+ (Lecture 48) By Eng-Hassan Saleh | Arabic",
     "d": 1831,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 49,
     "id": "MSr_V1JkPto",
     "t": "49-CompTIA Security+ (Lecture 49) By Eng-Hassan Saleh | Arabic",
     "d": 1825,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 50,
     "id": "OuCilyxIhY4",
     "t": "50-CompTIA Security+ (Lecture 50) By Eng-Hassan Saleh | Arabic",
     "d": 2049,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 51,
     "id": "_jJMaQB-G5o",
     "t": "51-CompTIA Security+ (Lecture 51) By Eng-Hassan Saleh | Arabic",
     "d": 1985,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 52,
     "id": "tfb_X1U9Kh8",
     "t": "52-CompTIA Security+ (Lecture 52) By Eng-Hassan Saleh | Arabic",
     "d": 1912,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 53,
     "id": "Kviapo02P_s",
     "t": "53-CompTIA Security+ (Lecture 53) By Eng-Hassan Saleh | Arabic",
     "d": 1885,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 54,
     "id": "0yZxts4OLSE",
     "t": "54-CompTIA Security+ (Lecture 54) By Eng-Hassan Saleh | Arabic",
     "d": 1802,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 55,
     "id": "sMoVExjUDA8",
     "t": "55-CompTIA Security+ (Lecture 55) By Eng. Hassan Saleh | Arabic",
     "d": 1899,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 56,
     "id": "rTBzZOEPHtE",
     "t": "56-CompTIA Security+ (Lecture 56) By Eng-Hassan Saleh | Arabic",
     "d": 1822,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 57,
     "id": "ttrbA3EuKZk",
     "t": "57-CompTIA Security+ (Lecture 57) By Eng-Hassan Saleh | Arabic",
     "d": 1840,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 58,
     "id": "FrgMT9mFSa0",
     "t": "58-CompTIA Security+ (Lecture 58) By Eng-Hassan Saleh | Arabic",
     "d": 1802,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 59,
     "id": "9OqmEFv5apg",
     "t": "59-CompTIA Security+ (Lecture 59) By Eng. Hassan Saleh | Arabic",
     "d": 1828,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 60,
     "id": "En1sIdbzSrk",
     "t": "60-CompTIA Security+ (Lecture 60) By Eng-Hassan Saleh | Arabic",
     "d": 1897,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 61,
     "id": "dfK99dVv8HI",
     "t": "61-CompTIA Security+ (Lecture 61) By Eng-Hassan Saleh | Arabic",
     "d": 2104,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 62,
     "id": "KaKYwhYi_TU",
     "t": "62-CompTIA Security+ (Lecture 62) By Eng-Hassan Saleh | Arabic",
     "d": 1851,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 63,
     "id": "dH1wFATKfjo",
     "t": "63-CompTIA Security+ (Lecture 63) By Eng-Hassan Saleh | Arabic",
     "d": 1984,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 64,
     "id": "mVOiUjsfWJk",
     "t": "64-CompTIA Security+ (Lecture 64) By Eng. Hassan Saleh | Arabic",
     "d": 1831,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 65,
     "id": "rxl7pyksAsc",
     "t": "65-CompTIA Security+ (Lecture 65) By Eng-Hassan Saleh | Arabic",
     "d": 2238,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 66,
     "id": "9hlHI-6C87g",
     "t": "66-CompTIA Security+ (Lecture 66) By Eng. Hassan Saleh | Arabic",
     "d": 2003,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 67,
     "id": "g2CZ1OZVmew",
     "t": "67-CompTIA Security+ (Lecture 67) By Eng-Hassan Saleh | Arabic",
     "d": 2157,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 68,
     "id": "wppOghUFwY0",
     "t": "68-CompTIA Security+ (Lecture 68) By Eng-Hassan Saleh | Arabic",
     "d": 1887,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 69,
     "id": "X1B5SfrYLp4",
     "t": "69-CompTIA Security+ (Lecture 69) By Eng-Hassan Saleh | Arabic",
     "d": 2000,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 70,
     "id": "fdTsady1Rms",
     "t": "70-CompTIA Security+ (Lecture 70) By Eng-Hassan Saleh | Arabic",
     "d": 1864,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 71,
     "id": "V-bOE1X3FXM",
     "t": "71-CompTIA Security+ (Lecture 71) By Eng-Hassan Saleh | Arabic",
     "d": 2190,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 72,
     "id": "EFXiRVmzOSQ",
     "t": "72-CompTIA Security+ (Lecture 72) By Eng-Hassan Saleh | Arabic",
     "d": 1821,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 73,
     "id": "WRFT9PpAeBA",
     "t": "73-CompTIA Security+ (Lecture 73) By Eng-Hassan Saleh | Arabic",
     "d": 2188,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 74,
     "id": "lT7rAFMl5aQ",
     "t": "74-CompTIA Security+ (Lecture 74) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 75,
     "id": "4AI9EERGPq8",
     "t": "75-CompTIA Security+ (Lecture 75) By Eng-Hassan Saleh | Arabic",
     "d": 2060,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 76,
     "id": "uKEEO4Nx12k",
     "t": "76-CompTIA Security+ (Lecture 76) By Eng-Hassan Saleh | Arabic",
     "d": 1851,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 77,
     "id": "pFZgp16CS7c",
     "t": "77-CompTIA Security+ (Lecture 77) By Eng-Hassan Saleh | Arabic",
     "d": 2249,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 78,
     "id": "G4sa20H_vzo",
     "t": "78-CompTIA Security+ (Lecture 78) By Eng-Hassan Saleh | Arabic",
     "d": 2030,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 79,
     "id": "5jqLLVQDGyU",
     "t": "79-CompTIA Security+ (Lecture 79) By Eng-Hassan Saleh | Arabic",
     "d": 1819,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 80,
     "id": "WwRreRKw-t0",
     "t": "80-CompTIA Security+ (Lecture 80) By Eng-Hassan Saleh | Arabic",
     "d": 1945,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 81,
     "id": "ZV19ZM_lHfI",
     "t": "81-CompTIA Security+ (Lecture 81) By Eng-Hassan Saleh | Arabic",
     "d": 2011,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 82,
     "id": "apThFJ4eDRk",
     "t": "82-CompTIA Security+ (Lecture 82) By Eng-Hassan Saleh | Arabic",
     "d": 1842,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 83,
     "id": "GpqTP9ZCmeQ",
     "t": "83-CompTIA Security+ (Lecture 83) By Eng-Hassan Saleh | Arabic",
     "d": 1847,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 84,
     "id": "pKBpmMh87sE",
     "t": "84-CompTIA Security+ (Lecture 84) By Eng-Hassan Saleh | Arabic",
     "d": 1880,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 85,
     "id": "d5xQRprnQ90",
     "t": "85-CompTIA Security+ (Lecture 85) By Eng-Hassan Saleh | Arabic",
     "d": 1849,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 86,
     "id": "NGLkGKDYB2M",
     "t": "86-CompTIA Security+ (Lecture 86) By Eng-Hassan Saleh | Arabic",
     "d": 1806,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 87,
     "id": "huaDHud8TdA",
     "t": "87-CompTIA Security+ (Lecture 87) By Eng-Hassan Saleh | Arabic",
     "d": 1823,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 88,
     "id": "f8SMkEszTh4",
     "t": "88-CompTIA Security+ (Lecture 88) By Eng-Hassan Saleh | Arabic",
     "d": 1993,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 89,
     "id": "2Z5_H6WPos0",
     "t": "89-CompTIA Security+ (Lecture 89) By Eng-Hassan Saleh | Arabic",
     "d": 1810,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 90,
     "id": "dc4tuAG77jc",
     "t": "90-CompTIA Security+ (Lecture 90) By Eng-Hassan Saleh | Arabic",
     "d": 1828,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 91,
     "id": "YCNsepkjQDo",
     "t": "91-CompTIA Security+ (Lecture 91) By Eng-Hassan Saleh | Arabic",
     "d": 1912,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 92,
     "id": "5ShyCb0VRT8",
     "t": "92-CompTIA Security+ (Lecture 92) By Eng-Hassan Saleh | Arabic",
     "d": 1831,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 93,
     "id": "1KZvrO3Vbmc",
     "t": "93-CompTIA Security+ (Lecture 93) By Eng-Hassan Saleh | Arabic",
     "d": 1825,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 94,
     "id": "Ux7ohi3-09M",
     "t": "94-CompTIA Security+ (Lecture 94) By Eng-Hassan Saleh | Arabic",
     "d": 1824,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 95,
     "id": "low22T2Rqvs",
     "t": "95-CompTIA Security+ (Lecture 95) By Eng-Hassan Saleh | Arabic",
     "d": 1822,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 96,
     "id": "nnBGr6yUppA",
     "t": "96-CompTIA Security+ (Lecture 96) By Eng-Hassan Saleh | Arabic",
     "d": 1805,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 97,
     "id": "41W3JtHajJw",
     "t": "97-CompTIA Security+ (Lecture 97) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 98,
     "id": "wDAepEN1DMM",
     "t": "98-CompTIA Security+ (Lecture 98) By Eng-Hassan Saleh | Arabic",
     "d": 1874,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 99,
     "id": "LqvsEZf1hw0",
     "t": "99-CompTIA Security+ (Lecture 99) By Eng-Hassan Saleh | Arabic",
     "d": 1829,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 100,
     "id": "LvWF36gY9fw",
     "t": "100-CompTIA Security+ (Lecture 100) By Eng-Hassan Saleh | Arabic",
     "d": 1877,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 101,
     "id": "oDmsYqbie5c",
     "t": "101-CompTIA Security+ (Lecture 101) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 102,
     "id": "i5nR7mvt5To",
     "t": "102-CompTIA Security+ (Lecture 102) By Eng-Hassan Saleh | Arabic",
     "d": 1821,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 103,
     "id": "5lS-53eDX-8",
     "t": "103-CompTIA Security+ (Lecture 103) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 104,
     "id": "gwmpzfM9kRA",
     "t": "104-CompTIA Security+ (Lecture 104) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 105,
     "id": "TStN8-ShHTU",
     "t": "105-CompTIA Security+ (Lecture 105) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 106,
     "id": "djJ63x71VeY",
     "t": "106-CompTIA Security+ (Lecture 106) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 107,
     "id": "moasrLJ18Vw",
     "t": "107-CompTIA Security+ (Lecture 107) By Eng-Hassan Saleh | Arabic",
     "d": 1858,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 108,
     "id": "WUDh7jKQsbQ",
     "t": "108-CompTIA Security+ (Lecture 108) By Eng-Hassan Saleh | Arabic",
     "d": 1858,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 109,
     "id": "01IZK0P1TGQ",
     "t": "109-CompTIA Security+ (Lecture 109) By Eng-Hassan Saleh | Arabic",
     "d": 1818,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 110,
     "id": "IgZIf0y4zHc",
     "t": "110-CompTIA Security+ (Lecture 110) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 111,
     "id": "Amo6yki-g9I",
     "t": "111-CompTIA Security+ (Lecture 111) By Eng-Hassan Saleh | Arabic",
     "d": 1841,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 112,
     "id": "igvVyK-WDUs",
     "t": "112-CompTIA Security+ (Lecture 112) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 113,
     "id": "BLE0NADO6i0",
     "t": "113-CompTIA Security+ (Lecture 113) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 114,
     "id": "yHHbbTCKJ7g",
     "t": "114-CompTIA Security+ (Lecture 114) By Eng-Hassan Saleh | Arabic",
     "d": 1844,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 115,
     "id": "QtvUDd4CCcE",
     "t": "115-CompTIA Security+ (Lecture 115) By Eng-Hassan Saleh | Arabic",
     "d": 1857,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 116,
     "id": "xMoabrpKa7U",
     "t": "116-CompTIA Security+ (Lecture 116) By Eng-Hassan Saleh | Arabic",
     "d": 1807,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 117,
     "id": "QmnHHGxLl-E",
     "t": "117-CompTIA Security+ (Lecture 117) By Eng-Hassan Saleh | Arabic",
     "d": 1843,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 118,
     "id": "LcpWa7kf_mA",
     "t": "118-CompTIA Security+ (Lecture 118) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 119,
     "id": "CwgbBZEgDpA",
     "t": "119-CompTIA Security+ (Lecture 119) By Eng-Hassan Saleh | Arabic",
     "d": 1846,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 120,
     "id": "mM7GeSYGFAA",
     "t": "120-CompTIA Security+ (Lecture 120) By Eng-Hassan Saleh | Arabic",
     "d": 1902,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 121,
     "id": "cukKhpEdE2A",
     "t": "121-CompTIA Security+ (Lecture 121) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 122,
     "id": "vL3YSUPYC7k",
     "t": "122-CompTIA Security+ (Lecture 122) By Eng-Hassan Saleh | Arabic",
     "d": 1806,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 123,
     "id": "pgyqn2_E7xo",
     "t": "123-CompTIA Security+ (Lecture 123) By Eng-Hassan Saleh | Arabic",
     "d": 1874,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 124,
     "id": "usM-pjNXQoY",
     "t": "124-CompTIA Security+ (Lecture 124) By Eng-Hassan Saleh | Arabic",
     "d": 1891,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 125,
     "id": "V7KYuJCZ7CE",
     "t": "125-CompTIA Security+ (Lecture 124) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 126,
     "id": "WxgmU32_W84",
     "t": "126-CompTIA Security+ (Lecture 126) By Eng-Hassan Saleh | Arabic",
     "d": 1892,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 127,
     "id": "-kFoKF9dtLs",
     "t": "127-CompTIA Security+ (Lecture 127) By Eng-Hassan Saleh | Arabic",
     "d": 1838,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 128,
     "id": "Rgx_SMUibgI",
     "t": "128-CompTIA Security+ (Lecture 128) By Eng-Hassan Saleh | Arabic",
     "d": 1927,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 129,
     "id": "cOQ3tMWOqNI",
     "t": "129-CompTIA Security+ (Lecture 129) By Eng-Hassan Saleh | Arabic",
     "d": 1851,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 130,
     "id": "xEnvR9vi_Ss",
     "t": "130-CompTIA Security+ (Lecture 130) By Eng-Hassan Saleh | Arabic",
     "d": 1897,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 131,
     "id": "6FS4S3htIeE",
     "t": "131-CompTIA Security+ (Lecture 131) By Eng-Hassan Saleh | Arabic",
     "d": 1834,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 132,
     "id": "wdpVbGs2jtU",
     "t": "132-CompTIA Security+ (Lecture 132) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 133,
     "id": "kRZC1WCkpyw",
     "t": "133-CompTIA Security+ (Lecture 133) By Eng-Hassan Saleh | Arabic",
     "d": 1907,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 134,
     "id": "EGIeK3MSxuA",
     "t": "134-CompTIA Security+ (Lecture 134) By Eng-Hassan Saleh | Arabic",
     "d": 1826,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 135,
     "id": "RwhbWuhWPcI",
     "t": "135-CompTIA Security+ (Lecture 135) By Eng-Hassan Saleh | Arabic",
     "d": 1884,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 136,
     "id": "DVNQm7x179o",
     "t": "136-CompTIA Security+ (Lecture 136) By Eng-Hassan Saleh | Arabic",
     "d": 1806,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 137,
     "id": "Kvw7_TPoyno",
     "t": "137-CompTIA Security+ (Lecture 137) By Eng-Hassan Saleh | Arabic",
     "d": 1876,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 138,
     "id": "as3HmapiH0I",
     "t": "138-CompTIA Security+ (Lecture 138) By Eng-Hassan Saleh | Arabic",
     "d": 1898,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 139,
     "id": "NlxEtN8wZ-E",
     "t": "139-CompTIA Security+ (Lecture 139) By Eng-Hassan Saleh | Arabic",
     "d": 1866,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 140,
     "id": "JzTRZ4rWhuk",
     "t": "140-CompTIA Security+ (Lecture 140) By Eng-Hassan Saleh | Arabic",
     "d": 1837,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 141,
     "id": "ACkec9QIV8M",
     "t": "141-CompTIA Security+ (Lecture 141) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 142,
     "id": "gQwkDKu74Uk",
     "t": "142-CompTIA Security+ (Lecture 142) By Eng-Hassan Saleh | Arabic",
     "d": 1921,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 143,
     "id": "6qh4xvC1Fn8",
     "t": "143-CompTIA Security+ (Lecture 143) By Eng-Hassan Saleh | Arabic",
     "d": 1814,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 144,
     "id": "h9YYzgsT7fo",
     "t": "144-CompTIA Security+ (Lecture 144) By Eng-Hassan Saleh | Arabic",
     "d": 1996,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 145,
     "id": "qW4fvLuCkYY",
     "t": "145-CompTIA Security+ (Lecture 145) By Eng-Hassan Saleh | Arabic",
     "d": 1936,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 146,
     "id": "VbBM7Ph_pes",
     "t": "146-CompTIA Security+ (Lecture 146) By Eng-Hassan Saleh | Arabic",
     "d": 1874,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 147,
     "id": "tAEndgwACVM",
     "t": "147-CompTIA Security+ (Lecture 147) By Eng-Hassan Saleh | Arabic",
     "d": 1889,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 148,
     "id": "qJI5GH-TjhE",
     "t": "148-CompTIA Security+ (Lecture 148) By Eng-Hassan Saleh | Arabic",
     "d": 1802,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 149,
     "id": "tJXiBMhUZHQ",
     "t": "149-CompTIA Security+ (Lecture 149) By Eng-Hassan Saleh | Arabic",
     "d": 1817,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 150,
     "id": "o0MVjgwvbsM",
     "t": "150-CompTIA Security+ (Lecture 150) By Eng-Hassan Saleh | Arabic",
     "d": 1813,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 151,
     "id": "KvISNRws7cE",
     "t": "151-CompTIA Security+ (Lecture 151) By Eng-Hassan Saleh | Arabic",
     "d": 1805,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 152,
     "id": "uCM_XMMw8IE",
     "t": "152-CompTIA Security+ (Lecture 152) By Eng-Hassan Saleh | Arabic",
     "d": 1864,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 153,
     "id": "j_VC1nR1xEg",
     "t": "153-CompTIA Security+ (Lecture 153) By Eng-Hassan Saleh | Arabic",
     "d": 1801,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 154,
     "id": "GUoAqEomaDg",
     "t": "154-CompTIA Security+ (Lecture 154) By Eng-Hassan Saleh | Arabic",
     "d": 1826,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    },
    {
     "i": 155,
     "id": "TwtAZKu0MOE",
     "t": "155-CompTIA Security+ (Lecture 155) By Eng-Hassan Saleh | Arabic",
     "d": 1828,
     "st": "later",
     "rs": "مرجع احتياطي — 155 محاضرة قصيرة (بمعدل 30 دقيقة) لتعمق أي مفهوم لم يستوعب من المصدر الأساسي"
    }
   ],
   "count": 155,
   "hours": 76.6,
   "counts": {
    "imp": 0,
    "med": 0,
    "later": 155,
    "skip": 0
   },
   "views": "138,237"
  },
  {
   "key": "p4",
   "name": "CompTIA Security+ شرح بالعربي — م. محمد علوي",
   "channel": "Information Technology — Eng. Mohamed Alwy",
   "url": "https://www.youtube.com/playlist?list=PLLlr6jKKdyK3imCcYMNBpklmnvePHOma9",
   "role": "مكمّلات المجال الأول (الهجمات)",
   "icon": "target",
   "color": "rose",
   "verdict": "13 فيديو قصيراً (7-18 دقيقة) متخصصاً في هجمات الهندسة الاجتماعية وعائلات البرمجيات الخبيثة — سلسلة Malware Families الثلاثية وسيكولوجيا التأثير محتوى تعمقي لا يوجد مثيله بهذا التركيز في القوائم الأخرى، والمجال الأول يمثل 24% من الامتحان.",
   "bestFor": "تعميق فهم الهجمات والبرمجيات الخبيثة (الفصل الرابع)",
   "strengths": [
    "سلسلة Malware Families (3 أجزاء) — أعمق تصنيف للبرمجيات الخبيثة بين القوائم",
    "فيديوهات قصيرة جداً مناسبة للتجزئة والمراجعة",
    "شرح سيكولوجيا التأثير والإقناع في الهندسة الاجتماعية"
   ],
   "weaknesses": [
    "تتوقف عند المحاضرة 13 — لا تغطي بقية المنهج",
    "عدة محاضرات بعناوين عامة لا تحدد المحتوى"
   ],
   "videos": [
    {
     "i": 1,
     "id": "_-Y7N6PFHsY",
     "t": "01-#CompTIA Security+ (Introduction) By Eng-Mohamed Alwy | Arabic",
     "d": 411,
     "st": "skip",
     "rs": "مقدمة قصيرة — المقدمة الشاملة في قائمة Netriders أفضل"
    },
    {
     "i": 2,
     "id": "7VkVnFA4pKg",
     "t": "02-#CompTIA Security+ (Lecture 2) By Eng-Mohamed Alwy | Arabic",
     "d": 589,
     "st": "later",
     "rs": "عنوان عام (غالباً أساسيات المنهج) — راجع وقت الحاجة"
    },
    {
     "i": 3,
     "id": "3-0AefFYH0E",
     "t": "03-#CompTIA Security+ (The Social Engineer) By Eng-Mohamed Alwy | Arabic",
     "d": 873,
     "st": "med",
     "rs": "تكملة قيّمة للفصل الرابع: سيكولوجيا الهندسة الاجتماعية من منظور المهاجم"
    },
    {
     "i": 4,
     "id": "BsYeY1LqL60",
     "t": "04-#CompTIA Security+ (Lecture 4) By Eng-Mohamed Alwy | Arabic",
     "d": 737,
     "st": "later",
     "rs": "عنوان عام — راجع وقت الحاجة"
    },
    {
     "i": 5,
     "id": "SNKO-_ZueZo",
     "t": "05-#CompTIA Security+ (Lecture 5) By Eng-Mohamed Alwy | Arabic",
     "d": 473,
     "st": "later",
     "rs": "عنوان عام — راجع وقت الحاجة"
    },
    {
     "i": 6,
     "id": "nQ2DJQYx9us",
     "t": "06-#CompTIA Security+ (Principles of Influence Reasons for Effectiveness) By Mohamed Alwy | Arabic",
     "d": 1029,
     "st": "med",
     "rs": "مبادئ التأثير والإقناع — تعمق فريد يدعم أسئلة الهندسة الاجتماعية (الفصل 4)"
    },
    {
     "i": 7,
     "id": "xjAkzscKncI",
     "t": "07-#CompTIA Security+ (Malware Families Part 1) By Eng-Mohamed Alwy | Arabic",
     "d": 640,
     "st": "imp",
     "rs": "سلسلة عائلات البرمجيات الخبيثة 1/3 — تعمق فريد يدعم أهم فصول المجال الأول"
    },
    {
     "i": 8,
     "id": "EK3t57jxtm8",
     "t": "08-#CompTIA Security+ (Malware Families Part 2) By Eng-Mohamed Alwy | Arabic",
     "d": 630,
     "st": "imp",
     "rs": "سلسلة عائلات البرمجيات الخبيثة 2/3 — تكملة أساسية"
    },
    {
     "i": 9,
     "id": "Pd8oqqq9EMA",
     "t": "09-#CompTIA Security+ (Malware Families Part 3) By Eng-Mohamed Alwy | Arabic",
     "d": 848,
     "st": "imp",
     "rs": "سلسلة عائلات البرمجيات الخبيثة 3/3 — تصنيفات كثيرة الورود في الامتحان"
    },
    {
     "i": 10,
     "id": "4FJ80ooCbC8",
     "t": "10-#CompTIA Security+ (Physical Attacks) By Eng-Mohamed Alwy | Arabic",
     "d": 641,
     "st": "later",
     "rs": "منظور هجومي للأمن الفيزيائي — يدعم الفصل 21"
    },
    {
     "i": 11,
     "id": "-cK8mI23FAU",
     "t": "11-#CompTIA Security+ (Password Attacks) By Eng-Mohamed Alwy | Arabic",
     "d": 1087,
     "st": "med",
     "rs": "أنواع هجمات كلمات المرور — يدعم الفصل السابع (المصادقة)"
    },
    {
     "i": 12,
     "id": "26gLfONdBc8",
     "t": "12-#CompTIA Security+ (Downgrade Attacks) By Eng. Mohamed Alwy | Arabic",
     "d": 243,
     "st": "later",
     "rs": "نوع هجوم متخصص (4 دقائق) — ثقافة إضافية"
    },
    {
     "i": 13,
     "id": "g5-6UkgI3S4",
     "t": "13-#CompTIA Security+ (Lecture 13) By Eng-Mohamed Alwy | Arabic",
     "d": 1072,
     "st": "later",
     "rs": "عنوان عام — راجع وقت الحاجة"
    }
   ],
   "count": 13,
   "hours": 2.6,
   "counts": {
    "imp": 3,
    "med": 3,
    "later": 6,
    "skip": 1
   },
   "views": "41,886"
  },
  {
   "key": "p2",
   "name": "CompTIA Security course || كومباتيا سيكيوريتي بالعربي",
   "channel": "Mohamed hosseny",
   "url": "https://www.youtube.com/playlist?list=PLPZy-VxWw-vqYosFN8Y4Zg5C8Hvd5set3",
   "role": "مقتطفات مساندة قديمة",
   "icon": "archive",
   "color": "amber",
   "verdict": "13 فيديو موضوعياً متفرقاً (4.2 ساعة) لا يتبع بنية SY0-601 الرسمية — على الأرجح مبني على إصدار أقدم من المنهج. أغلب مواضيعه مغطاة بشكل أشمل في قائمة Netriders، لكنه يحتفظ بقيمة كمراجعات سريعة مركزة لمواضيع بعينها (الشهادات، DoS، الأطر).",
   "bestFor": "مراجعات سريعة مركزة قبل الامتحان فقط",
   "strengths": [
    "فيديوهات قصيرة (17-36 دقيقة) لمواضيع منفردة",
    "مراجعة مركزة للشهادات الرقمية وهجمات DoS"
   ],
   "weaknesses": [
    "أقل القوائم تفاعلاً: 1.9 ألف مشاهدة",
    "لا يتبع بنية SY0-601 — ترتيبه لا يوازي ترتيب الفصول",
    "فيديوهان (013 و014) بعناوين لا تحدد المحتوى"
   ],
   "videos": [
    {
     "i": 1,
     "id": "523BAEdpp_U",
     "t": "001-CompTIA Security+ Course Intro | Arabic Introduction",
     "d": 147,
     "st": "skip",
     "rs": "مقدمة عابرة (دقيقتان ونصف) — لا قيمة معرفية"
    },
    {
     "i": 2,
     "id": "9Js0par6UPg",
     "t": "002-CompTIA Security Arabic | cyber security frameworks | شرح كورس كومباتيا سيكيوريتي",
     "d": 1257,
     "st": "later",
     "rs": "مكمل لفصلي الحوكمة (1 و19): نظرة مركزة على الأطر NIST/ISO"
    },
    {
     "i": 3,
     "id": "pkh-jIFk_eA",
     "t": "003- Comptia security Arabic | info security roles | شرح كورس كومباتيا سيكيوريتي",
     "d": 1017,
     "st": "skip",
     "rs": "مغطى بالكامل في الفصل الأول من المصدر الأساسي"
    },
    {
     "i": 4,
     "id": "iLSnlL6GqWY",
     "t": "004-Comptia security arabic | hacker types | شرح كورس كومباتيا سيكيوريتي",
     "d": 2141,
     "st": "later",
     "rs": "مراجعة سريعة مفيدة لتصنيفات المهاجمين قبل الامتحان — لكن الفصل الثاني أساسي وأشمل"
    },
    {
     "i": 5,
     "id": "mWxaoVyNV_8",
     "t": "005-Comptia security Arabic | Network protocols || شرح كورس كومباتيا سيكيوريتي",
     "d": 1040,
     "st": "skip",
     "rs": "مغطى في الفصل الحادي عشر"
    },
    {
     "i": 6,
     "id": "8CCVIucq-RU",
     "t": "006-Comptia security Arabic | DOS Attack | شرح كورس كومباتيا سيكيوريتي",
     "d": 1029,
     "st": "later",
     "rs": "تركيز مركز على DoS/DDoS — نوع هجمات مضمون الحضور في الامتحان"
    },
    {
     "i": 7,
     "id": "90x95GaAhrQ",
     "t": "007-Comptia security Arabic | software vulnerability | شرح كورس كومباتيا سيكيوريتي",
     "d": 1136,
     "st": "skip",
     "rs": "مغطى بشكل أشمل في الفصل الثالث"
    },
    {
     "i": 8,
     "id": "HZ8wiLgHfnc",
     "t": "008-CompTIA Security+ Arabic | Security Assessment | CompTIA Security+ Course Explanation",
     "d": 1007,
     "st": "skip",
     "rs": "مغطى بشكل أشمل في الفصل الثالث"
    },
    {
     "i": 9,
     "id": "O-PVT9yGIqA",
     "t": "009- Comptia security Arabic | cryptographic technology | شرح كورس كومباتيا سيكيوريتي",
     "d": 1924,
     "st": "skip",
     "rs": "الفصل الخامس الأساسي (100 دقيقة) يغطيه بشكل أفضل بكثير"
    },
    {
     "i": 10,
     "id": "GUpsVYzwJvM",
     "t": "010-Comptia security Arabic | digital certificates | شرح كورس كومباتيا سيكيوريتي",
     "d": 1199,
     "st": "later",
     "rs": "مراجعة مركزة للشهادات الرقمية — مفيدة قبل الامتحان (يدعم الفصل السادس)"
    },
    {
     "i": 11,
     "id": "gSYuxXDtj6M",
     "t": "011-Comptia security Arabic | quantum computer | شرح كورس كومباتيا سيكيوريتي",
     "d": 275,
     "st": "later",
     "rs": "ثقافة عامة (5 دقائق) — موضوع هامشي في SY0-601"
    },
    {
     "i": 12,
     "id": "PfjnX6bhkxE",
     "t": "014  Comptia security",
     "d": 1737,
     "st": "later",
     "rs": "عنوان عام لا يحدد المحتوى (014) — راجعه يدوياً وقت الحاجة"
    },
    {
     "i": 13,
     "id": "m1QOIqY1tb0",
     "t": "013  Comptia security",
     "d": 1222,
     "st": "later",
     "rs": "عنوان عام لا يحدد المحتوى (013) — راجعه يدوياً وقت الحاجة"
    }
   ],
   "count": 13,
   "hours": 4.2,
   "counts": {
    "imp": 0,
    "med": 0,
    "later": 7,
    "skip": 6
   },
   "views": "1,929"
  }
 ],
 "chapters": [
  {
   "n": 1,
   "ar": "الأدوار الأمنية وعناصر التحكم الأمنية",
   "en": "Comparing Security Roles and Security Controls",
   "dom": "D2+D5",
   "pri": "imp",
   "intro": "حجر أساس المنهج كله: تصنيفات عناصر التحكم والأدوار والمسؤوليات — مفاهيم تُبنى عليها كل الفصول اللاحقة وأسئلة الحوكمة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "تغطية متوازنة (38 دقيقة) لأنواع عناصر التحكم والأدوار ضمن بنية موحدة",
     "vids": [
      {
       "id": "H_u72hlzyoE",
       "t": "01- Comparing Security Roles and Security Controls",
       "d": 2269
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "62 دقيقة — نسخة موسعة عند الحاجة",
     "vids": [
      {
       "id": "U3Z_HEPzu6g",
       "t": "Chapter 01 Comparing Security Roles and Security Controls المحاضرة الأولى",
       "d": 3741
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "37 دقيقة",
     "verdict": "مختار",
     "note": "اتساق مع المسار + عمق كافٍ"
    },
    {
     "p": "p1",
     "dur": "62 دقيقة",
     "verdict": "بديل",
     "note": "أطول لكنه يكفي المراجعة لاحقاً"
    },
    {
     "p": "p2",
     "dur": "17 دقيقة",
     "verdict": "مستبعد",
     "note": "مقتضب جداً — مغطى بالأساسي"
    }
   ],
   "keys": [
    "أنواع عناصر التحكم: إدارية / تقنية / تشغيلية / فيزيائية",
    "الوظائف: وقائية، رادعة، كاشفة، تصحيحية، تعويضية",
    "الأدوار: CISO، محلل أمني، مالك البيانات، المسؤول عن الامتثال...",
    "مبدأ الفصل بين المهام Segregation of Duties"
   ]
  },
  {
   "n": 2,
   "ar": "الجهات الفاعلة التهديدية واستخبارات التهديدات",
   "en": "Explaining Threat Actors and Threat Intelligence",
   "dom": "D1",
   "pri": "imp",
   "intro": "قلب المجال الأول (24% من الامتحان): من هم المهاجمون، دوافعهم وقدراتهم، ومصادر استخبارات التهديدات.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "أعمق تغطية بين المرشحين (58 دقيقة) لأهم فصول المجال الأول",
     "vids": [
      {
       "id": "PQSF_1cWMCk",
       "t": "02- Explaining Threat Actors and Threat Intelligence",
       "d": 3466
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "30 دقيقة — أسرع لكن أقل عمقاً",
     "vids": [
      {
       "id": "AzB73FuxZKI",
       "t": "Chapter  02  Explaining Threat Actors and Threat Intelligence  المحاضرة الثانية",
       "d": 1811
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "58 دقيقة",
     "verdict": "مختار",
     "note": "الأعمق + معامل الفصول السابقة تمدّه"
    },
    {
     "p": "p1",
     "dur": "30 دقيقة",
     "verdict": "بديل",
     "note": "للمراجعة السريعة"
    },
    {
     "p": "p2",
     "dur": "36 دقيقة",
     "verdict": "مستبعد",
     "note": "تصنيفات فقط، إصدار أقدم"
    }
   ],
   "keys": [
    "تصنيف الجهات الفاعلة: APT، مخربون داخليون، hacktivists، منظمات إجرامية",
    "سمات كل نوع: الدافع، التمويل، القدرة، التطور",
    "استخبارات التهديدات: المصادر المفتوحة والمغلقة والوصاية",
    "مؤشرات الاختراق IOCs وخرائط TTPs"
   ]
  },
  {
   "n": 3,
   "ar": "تنفيذ تقييمات الأمن",
   "en": "Performing Security Assessments",
   "dom": "D1+D4",
   "pri": "imp",
   "intro": "فحص الثغرات وتحليل الشبكات — فصل عملي يظهر بكثافة في أسئلة الأداء PBQs وفي المجالين الأول والرابع.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "ثلاثة أجزاء نظرية (نحو ساعتين ونصف) تغطي الفحص بأنواعه وأدواته — مقابل 79 دقيقة فقط في p1 و17 في p2",
     "vids": [
      {
       "id": "Z6sxhcyJ8Kc",
       "t": "03.1- Performing Security Assessments - Part 1",
       "d": 3332
      },
      {
       "id": "IfUGpBZbBkQ",
       "t": "03.4- Performing Security Assessments - Part 4",
       "d": 2031
      },
      {
       "id": "q8kzykuxWpk",
       "t": "03.6- Performing Security Assessments - Part 6",
       "d": 3595
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "أربعة معامل تطبيقية: بيئة المعمل، فحص العقد، تحليل الحركة، الفحص المصدق",
     "vids": [
      {
       "id": "NFTVFOubAUg",
       "t": "03.2- Performing Security Assessments - Part 2 (Exploring the Lab Environment Lab)",
       "d": 1756
      },
      {
       "id": "vyaBoVd_Zj8",
       "t": "03.3- Performing Security Assessments - Part 3 (Scanning and Identifying Network Nodes Lab)",
       "d": 1936
      },
      {
       "id": "0eWWS5g0KHU",
       "t": "03.5- Performing Security Assessments - Part 5 (Intercepting and Interpreting Network Traffic Lab)",
       "d": 1855
      },
      {
       "id": "nAZjbj0nq8A",
       "t": "03.7- Performing Security Assessments - Part 7 ( Credentialed Vulnerability Scan Lab)",
       "d": 1551
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "79 دقيقة للجزأين — مسار سريع مضغوط",
     "vids": [
      {
       "id": "FTf8ia31i6Y",
       "t": "Chapter 03  Performing Security Assessments Part 1 المحاضرة الثالثة الجزء الاول",
       "d": 3816
      },
      {
       "id": "Ex8te6EbpyU",
       "t": "Chapter 03  Performing Security Assessments Part 2 المحاضرة الثالثة الجزء الثاني",
       "d": 958
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "2:30 نظرية + 2:00 معامل",
     "verdict": "مختار",
     "note": "تغطية شاملة نظرية وعملية"
    },
    {
     "p": "p1",
     "dur": "79 دقيقة",
     "verdict": "بديل",
     "note": "مضغوط للمراجعة"
    },
    {
     "p": "p2",
     "dur": "17 دقيقة",
     "verdict": "مستبعد",
     "note": "لمحة موجزة فقط"
    }
   ],
   "keys": [
    "أنواع الفحص: اكتشافي، ثغرات، مصدق vs غير مصدق",
    "أدوات: Nessus، OpenVAS، Nmap وأنماط الفحص",
    "تحليل نتائج الفحص وتقارير الثغرات",
    "CVSS وتقييم خطورة الثغرات",
    "اعتراض حركة الشبكة وتحليلها (Wireshark)"
   ]
  },
  {
   "n": 4,
   "ar": "الهندسة الاجتماعية والبرمجيات الخبيثة",
   "en": "Identifying Social Engineering and Malware",
   "dom": "D1",
   "pri": "imp",
   "intro": "أكثر فصول المجال الأول حضوراً في الامتحان — وهنا يتكامل مصدران: الشرح الشامل + سلسلة التعمق الفريدة في عائلات البرمجيات الخبيثة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "الجزءان الأساسيان (نظرية + تطبيق، نحو ساعة و42 دقيقة)",
     "vids": [
      {
       "id": "5bwzteyoUsU",
       "t": "04.1- Identifying Social Engineering and Malware - Part 1",
       "d": 2799
      },
      {
       "id": "f-pgjZzid-o",
       "t": "04.2- Identifying Social Engineering and Malware - Part 2",
       "d": 3302
      }
     ]
    },
    {
     "p": "p4",
     "role": "مكمّل أساسي",
     "why": "سلسلة Malware Families الثلاثية (35 دقيقة) — تعمق تصنيفي فريد لا يوجد مثيله في القوائم الأخرى",
     "vids": [
      {
       "id": "xjAkzscKncI",
       "t": "07-#CompTIA Security+ (Malware Families Part 1) By Eng-Mohamed Alwy | Arabic",
       "d": 640
      },
      {
       "id": "EK3t57jxtm8",
       "t": "08-#CompTIA Security+ (Malware Families Part 2) By Eng-Mohamed Alwy | Arabic",
       "d": 630
      },
      {
       "id": "Pd8oqqq9EMA",
       "t": "09-#CompTIA Security+ (Malware Families Part 3) By Eng-Mohamed Alwy | Arabic",
       "d": 848
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل الباب الخلفي عبر برمجية خبيثة",
     "vids": [
      {
       "id": "r69MX51XzEQ",
       "t": "04.3- Identifying Social Engineering and Malware - Part 3 (Malware-based Backdoor Lab)",
       "d": 1647
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p4",
     "role": "مكمل متوسط",
     "why": "سيكولوجيا المهندس الاجتماعي ومبادئ التأثير (32 دقيقة)",
     "vids": [
      {
       "id": "3-0AefFYH0E",
       "t": "03-#CompTIA Security+ (The Social Engineer) By Eng-Mohamed Alwy | Arabic",
       "d": 873
      },
      {
       "id": "nQ2DJQYx9us",
       "t": "06-#CompTIA Security+ (Principles of Influence Reasons for Effectiveness) By Mohamed Alwy | Arabic",
       "d": 1029
      }
     ]
    },
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "106 دقيقة — تغطية جيدة بلا فصل معمل",
     "vids": [
      {
       "id": "3iP2SOaJS7E",
       "t": "Chapter  04  Identifying Social Engineering and Malware Part 1 المحاضرة الرابعة الجزء الاول",
       "d": 2414
      },
      {
       "id": "8pRGGiRvyAM",
       "t": "Chapter   04  Identifying Social Engineering and Malware Part 2 المحاضرة الرابعة الجزء الثاني",
       "d": 3965
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:42 + معمل",
     "verdict": "مختار",
     "note": "أشمل تغطية منظمة"
    },
    {
     "p": "p1",
     "dur": "1:46",
     "verdict": "بديل",
     "note": "طويل لكن دون معمل"
    },
    {
     "p": "p4",
     "dur": "35 دقيقة (Malware)",
     "verdict": "مكمّل",
     "note": "تعمق تصنيفي فريد — إضافة لا تكرار"
    }
   ],
   "keys": [
    "أنواع الهندسة الاجتماعية: phishing، vishing، spear phishing، tailgating...",
    "عائلات البرمجيات الخبيثة: فيروسات، ديدان، أحصنة طروادة، فدية، تجسس، rootkits",
    "دورة حياة الهجوم ومؤشرات الاختراق",
    "مبادئ التأثير: السلطة، الندرة، الإلحاح، الإثبات الاجتماعي"
   ]
  },
  {
   "n": 5,
   "ar": "تلخيص المفاهيم التشفيرية الأساسية",
   "en": "Summarizing Basic Cryptographic Concepts",
   "dom": "D2+D3",
   "pri": "imp",
   "intro": "أساس فهم PKI والبروتوكولات الآمنة: التشفير المتماثل وغير المتماثل، التجزئة، التوقيعات — أطول فيديو منفرد في قائمة Netriders.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "أطول وأعمق شرح منفرد للفصل (100 دقيقة) — التشفير عتبة فهم باقي فصول الأمن التقني",
     "vids": [
      {
       "id": "3eZjVNCpyDU",
       "t": "05- Summarizing Basic Cryptographic Concepts",
       "d": 6022
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "65 دقيقة — نسخة أقصر",
     "vids": [
      {
       "id": "_1lojUbM0Vo",
       "t": "Chapter  05  Summarizing Basic Cryptographic Concepts المحاضرة الخامسة",
       "d": 3919
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:40",
     "verdict": "مختار",
     "note": "الأعمق والأشمل"
    },
    {
     "p": "p1",
     "dur": "1:05",
     "verdict": "بديل",
     "note": "للمراجعة"
    },
    {
     "p": "p2",
     "dur": "32 دقيقة",
     "verdict": "مستبعد",
     "note": "إصدار أقدم وأقل تفاعلاً"
    }
   ],
   "keys": [
    "التشفير المتماثل (AES) وغير المتماثل (RSA، ECC)",
    "التجزئة Hashing و HMAC و Salting وتمديد المفاتيح",
    "التوقيعات الرقمية وعدم الإنكار",
    "الخفاء Steganography والتعمية Obfuscation",
    "حالات الاستخدام: أثناء النقل / أثناء التخزين"
   ]
  },
  {
   "n": 6,
   "ar": "تنفيذ البنية التحتية للمفاتيح العامة PKI",
   "en": "Implementing Public Key Infrastructure",
   "dom": "D2+D3",
   "pri": "imp",
   "intro": "الشهادات الرقمية وسلاسل الثقة — فصل يربط التشفير النظري بالتطبيق العملي ويحلو بمعمل دورة حياة الشهادة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "النظرية الشاملة (63 دقيقة) لبنية PKI",
     "vids": [
      {
       "id": "q1rLVrMFbcY",
       "t": "06.1- Implementing Public Key Infrastructure - Part 1",
       "d": 3769
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل إدارة دورة حياة الشهادة — يجسد المفاهيم النظرية",
     "vids": [
      {
       "id": "9RUzcNv37Wk",
       "t": "06.2- Implementing Public Key Infrastructure - Part 2 (Managing the Lifecycle of a Certificate Lab)",
       "d": 1971
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "45 دقيقة",
     "vids": [
      {
       "id": "vYpOmrcX5EI",
       "t": "Chapter  06  Implementing Public Key Infrastructure المحاضرة السادسة",
       "d": 2726
      }
     ]
    },
    {
     "p": "p2",
     "role": "مكمل لاحق",
     "why": "20 دقيقة مراجعة مركزة للشهادات قبل الامتحان",
     "vids": [
      {
       "id": "GUpsVYzwJvM",
       "t": "010-Comptia security Arabic | digital certificates | شرح كورس كومباتيا سيكيوريتي",
       "d": 1199
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:03 + معمل",
     "verdict": "مختار",
     "note": "نظرية + تطبيق متكاملان"
    },
    {
     "p": "p1",
     "dur": "45 دقيقة",
     "verdict": "بديل",
     "note": "للمراجعة"
    },
    {
     "p": "p2",
     "dur": "20 دقيقة",
     "verdict": "لاحق",
     "note": "ملخص سريع مفيد قبيل الامتحان"
    }
   ],
   "keys": [
    "مكونات PKI: CA، RA، CSRs، الشهادات الرقمية",
    "أنواع الشهادات: wildcard، SAN، EV، self-signed",
    "التحقق: CRL، OCSP، stapling",
    "دورة حياة الشهادة: الإصدار، التتبع، الإبطال، التجديد",
    "حراسة المفاتيح Key Escrow والتقسيم"
   ]
  },
  {
   "n": 7,
   "ar": "تنفيذ عناصر التحكم بالمصادقة",
   "en": "Implementing Authentication Controls",
   "dom": "D3",
   "pri": "imp",
   "intro": "المصادقة عمود المجال الثالث (25% من الامتحان) — عواملها الثلاثة وبروتوكولاتها وتقنياتها الحديثة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "أطول وأعمق تغطية (82 دقيقة) لعناصر التحكم بالمصادقة",
     "vids": [
      {
       "id": "ftIpzBeBIqw",
       "t": "07.1- Implementing Authentication Controls - Part 1",
       "d": 4893
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل كسر كلمات المرور + معمل المصادقة المركزية",
     "vids": [
      {
       "id": "GJAN7oU0kKA",
       "t": "07.2- Implementing Authentication Controls - Part 2 (Password Cracking Lab)",
       "d": 2148
      },
      {
       "id": "sls2j_jTrHc",
       "t": "07.3- Implementing Authentication Controls - Part 3 (Managing Centralized Authentication Lab)",
       "d": 1812
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p4",
     "role": "مكمل متوسط",
     "why": "هجمات كلمات المرور (18 دقيقة) — فهم الهجوم يقوي فهم الدفاع",
     "vids": [
      {
       "id": "-cK8mI23FAU",
       "t": "11-#CompTIA Security+ (Password Attacks) By Eng-Mohamed Alwy | Arabic",
       "d": 1087
      }
     ]
    },
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "40 دقيقة",
     "vids": [
      {
       "id": "q3PbIno1NqQ",
       "t": "Chapter  07 Implementing Authentication Controls المحاضرة السابعة",
       "d": 2428
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:22 + معملان",
     "verdict": "مختار",
     "note": "الأعمق + تطبيق عملي"
    },
    {
     "p": "p1",
     "dur": "40 دقيقة",
     "verdict": "بديل",
     "note": "للمراجعة"
    },
    {
     "p": "p4",
     "dur": "18 دقيقة",
     "verdict": "مكمّل",
     "note": "منظور هجومي قيّم"
    }
   ],
   "keys": [
    "عوامل المصادقة الثلاثة: شيء تعرفه / تملكه / تكونه",
    "TOTP و HOTP والبطاقات الذكية والقياسات الحيوية",
    "بروتوكولات: PAP، CHAP، PAP مقابل MSCHAP",
    "تسجيل الدخول الأحادي SSO والاتحادي Federation",
    "أخطاء القياسات الحيوية: قبول خاطئ / رفض خاطئ"
   ]
  },
  {
   "n": 8,
   "ar": "إدارة الهويات وضوابط الحسابات",
   "en": "Implementing Identity and Account Management Controls",
   "dom": "D3",
   "pri": "imp",
   "intro": "إدارة الهوية والوصول IAM — أطول فصول قائمة Netriders عملياً (3 معامل مساندة) وموضوع مضمون في المجال الثالث.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "78 دقيقة نظرية شاملة لأنواع الحسابات ونماذج التحكم بالوصول",
     "vids": [
      {
       "id": "0v51j2EmzFY",
       "t": "08.1- Implementing Identity and Account Management Controls - Part 1",
       "d": 4696
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "ثلاثة معامل: ضوابط الوصول، سياسات التدقيق، وضوابط Linux",
     "vids": [
      {
       "id": "xy0GPXg-yss",
       "t": "08.2- Implementing Identity and Account Management Controls - Part 2 (Access Controls Lab)",
       "d": 2038
      },
      {
       "id": "6A0cUYVbdK0",
       "t": "08.3- Implementing Identity and Account Management Controls - Part 3 (Auditing Policies Lab)",
       "d": 2009
      },
      {
       "id": "AEAEmsywsbE",
       "t": "08.4- Implementing Identity and Account Management Controls - Part 4 (Access Controls in Linux Lab)",
       "d": 2140
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "41 دقيقة",
     "vids": [
      {
       "id": "EiNy7AR6yzY",
       "t": "Chapter  08  Implementing Identity and Account Management Controls المحاضرة الثامنة",
       "d": 2442
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:18 + 3 معامل",
     "verdict": "مختار",
     "note": "أوسع تغطية نظرية وتطبيقية"
    },
    {
     "p": "p1",
     "dur": "41 دقيقة",
     "verdict": "بديل",
     "note": "للمراجعة"
    }
   ],
   "keys": [
    "أنواع الحسابات: مستخدم، خدمة، privileged، ضيف",
    "نماذج التحكم: DAC، MAC، RBAC، ABAC، القائمة على القواعد",
    "مبدأ الحد الأدنى من الامتيازات Least Privilege",
    "سياسات بيانات الاعتماد ومراجعات الحسابات الدورية",
    "الإ provisioning وإلغاء التفعيل"
   ]
  },
  {
   "n": 9,
   "ar": "تنفيذ تصميمات الشبكات الآمنة",
   "en": "Implementing Secure Network Designs",
   "dom": "D2+D3",
   "pri": "imp",
   "intro": "أطول فصول النظرية في الكتاب: التجزئة، VLANs، DMZ، الثقة الصفرية — وثاني أفضل تغطية له موجودة في p1 (90 دقيقة).",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "جزءان نظريان (2:18) — أعمق تغطية متاحة للفصل",
     "vids": [
      {
       "id": "0uZ_lxxYrxk",
       "t": "09.1- Implementing Secure Network Designs - Part 1",
       "d": 3461
      },
      {
       "id": "Gmjuy6m5_9s",
       "t": "09.2- Implementing Secure Network Designs - Part 2",
       "d": 4812
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل تنفيذ تصميم شبكة آمن",
     "vids": [
      {
       "id": "X24w8M7SLCE",
       "t": "09.3- Implementing Secure Network Designs - Part 3 (Implementing a Secure Network Design Lab)",
       "d": 1922
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "بديل قوي",
     "why": "90 دقيقة في محاضرة واحدة — ثاني أفضل تغطية للفصل",
     "vids": [
      {
       "id": "u2w-quX4SIk",
       "t": "Chapter  09   Implementing Secure Network Designs المحاضرة التاسعة",
       "d": 5409
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "2:18 + معمل",
     "verdict": "مختار",
     "note": "الأشمل"
    },
    {
     "p": "p1",
     "dur": "1:30",
     "verdict": "بديل قوي",
     "note": "تغطية جيدة في جلسة واحدة"
    }
   ],
   "keys": [
    "تجزئة الشبكة و microsegmentation و VLANs",
    "المناطق المنزوعة السلاح DMZ و NAT و NAC",
    "نموذج الثقة الصفرية Zero Trust و SDN",
    "بنى العزل: physical، virtual، sandboxing",
    "الأمن اللاسلكي: WPA2/WPA3 ووضع الضيف"
   ]
  },
  {
   "n": 10,
   "ar": "تنفيذ أجهزة أمن الشبكة",
   "en": "Implementing Network Security Appliances",
   "dom": "D3+D4",
   "pri": "imp",
   "intro": "الجدران النارية وأنظمة كشف التسلل — أجهزة الدفاع الأولى، ومعملان تطبيقيان يعززان الفهم للامتحان والعمل.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "66 دقيقة — أعمق من بديل p1 ثلاث مرات (30 دقيقة فقط)",
     "vids": [
      {
       "id": "LwUHbTfjOZU",
       "t": "10.1- Implementing Network Security Appliances - Part 1",
       "d": 3976
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل إعداد جدار حماية + معمل نظام كشف التسلل IDS",
     "vids": [
      {
       "id": "LyxLUdrsLuU",
       "t": "10.2- Implementing Network Security Appliances - Part 2 (Configuring a Firewall Lab)",
       "d": 1352
      },
      {
       "id": "yh3AfEmD4MQ",
       "t": "10.3- Implementing Network Security Appliances - Part 3 (Intrusion Detection System Lab)",
       "d": 2110
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "30 دقيقة — مقتضب",
     "vids": [
      {
       "id": "wb-PtOaU7KM",
       "t": "Chapter  10  Implementing Network Security Appliances المحاضرة العاشرة",
       "d": 1827
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:06 + معملان",
     "verdict": "مختار",
     "note": "تغطية موسعة عملياً ونظرياً"
    },
    {
     "p": "p1",
     "dur": "30 دقيقة",
     "verdict": "بديل",
     "note": "مقتضب جداً"
    }
   ],
   "keys": [
    "أنواع الجدران النارية: packet filter، stateful، NGFW، WAF",
    "IDS مقابل IPS: مواضع النشر وأنماط الكشف",
    "البروكسيات وموازنات الأحمال و VPN concentrators",
    "تحليل السجلات و SIEM (جسر للمجال الرابع)"
   ]
  },
  {
   "n": 11,
   "ar": "تنفيذ البروتوكولات الآمنة",
   "en": "Implementing Secure Network Protocols",
   "dom": "D3",
   "pri": "imp",
   "intro": "TLS و IPsec و SSH و DNSSEC — ومعه أكبر كتلة معامل تطبيقية (عنونة آمنة، VPN، خادم SSH).",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "64 دقيقة نظرية شاملة للبروتوكولات الآمنة وبدائلها غير الآمنة",
     "vids": [
      {
       "id": "6oCNbljA7Zo",
       "t": "11.1- Implementing Secure Network Protocols  - Part 1",
       "d": 3870
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "ثلاثة معامل: العنونة الآمنة، تنفيذ VPN، وإعداد خادم SSH",
     "vids": [
      {
       "id": "xzz2cxzTtMw",
       "t": "11.2 - Implementing Secure Network Protocols - Part 2 (Secure Network Addressing Services Lab)",
       "d": 1547
      },
      {
       "id": "fx6OsgNl7Bk",
       "t": "11.3- Implementing Secure Network Protocols - Part 3 (Implementing a Virtual Private Network Lab)",
       "d": 1280
      },
      {
       "id": "kVUK3SSHl88",
       "t": "11.4- Implementing Secure Network Protocols - Part 4 (Implementing a Secure SSH Server Lab)",
       "d": 2469
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "50 دقيقة",
     "vids": [
      {
       "id": "y-xeMQs7EhI",
       "t": "Chapter 11  Implementing Secure Network Protocols المحاضرة الحادية عشر",
       "d": 3010
      }
     ]
    },
    {
     "p": "p1",
     "role": "معمل معماري موسع",
     "why": "3.4 ساعة — أضخم معمل شبكات بين القوائم، لمن يريد تعمقاً عملياً لاحقاً",
     "vids": [
      {
       "id": "L2bOgcxYc7s",
       "t": "Chapter 11 -  LAB Security + Networking Architectures Part 1 المحاضرة العملية الجزء الاول",
       "d": 6386
      },
      {
       "id": "ujA_TxeedfE",
       "t": "Chapter 11 - LAB Security + Networking Architectures Part 2 المحاضرة العملية الجزء الثاني",
       "d": 5420
      },
      {
       "id": "LMTxt-d241Q",
       "t": "Chapter 11 -  LAB Security + Networking Architectures Part 3 المحاضرة العملية الجزء الثالث",
       "d": 1566
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:04 + 3 معامل",
     "verdict": "مختار",
     "note": "معامل مدمجة لكل بروتوكول"
    },
    {
     "p": "p1",
     "dur": "50 دقيقة + معمل 3:26",
     "verdict": "بديل",
     "note": "معمل معماري موسع فيما بعد"
    },
    {
     "p": "p2",
     "dur": "17 دقيقة",
     "verdict": "مستبعد",
     "note": "لمحة سطحية"
    }
   ],
   "keys": [
    "TLS و IPsec وأوضاعه (transport vs tunnel)",
    "SSH مقابل Telnet و SNMPv3 مقابل v1/v2",
    "DNSSEC والتوقيع على مناطق DNS",
    "بروتوكولات VPN وأمن الشبكات اللاسلكية",
    "استبدال البروتوكولات غير الآمنة"
   ]
  },
  {
   "n": 12,
   "ar": "تنفيذ حلول أمن المضيف",
   "en": "Implementing Host Security Solutions",
   "dom": "D3",
   "pri": "imp",
   "intro": "تحصين الأنظمة وحماية النقاط الطرفية — فصل قصير عملي بمعمل لحماية endpoints.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "شرح مركز (17 دقيقة) + معمل حماية النقاط الطرفية",
     "vids": [
      {
       "id": "EToNpewImjs",
       "t": "12.1- Implementing Host Security Solutions - Part 1",
       "d": 1045
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل تنفيذ حماية النقاط الطرفية",
     "vids": [
      {
       "id": "DG5kfBgT7r4",
       "t": "12.2- Implementing Host Security Solutions - Part 2 (Implementing Endpoint Protection Lab)",
       "d": 1334
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "27 دقيقة",
     "vids": [
      {
       "id": "RP90Yq6QQGg",
       "t": "Chapter  12  Implementing Host Security Solutions المحاضرة الثانية عشر",
       "d": 1647
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "17 د + معمل",
     "verdict": "مختار",
     "note": "إيجاز مركز مع تطبيق"
    },
    {
     "p": "p1",
     "dur": "27 دقيقة",
     "verdict": "بديل",
     "note": "متقارب — للمراجعة"
    }
   ],
   "keys": [
    "تحصين الأنظمة Hardening وخطوط الأساس",
    "EDR ومكافحة الفيروسات وجدار حماية المضيف",
    "إدارة الرقع Patch Management",
    "الإقلاع الآمن Secure Boot و TPM",
    "النسخ الاحتياطي على مستوى المضيف"
   ]
  },
  {
   "n": 13,
   "ar": "تنفيذ حلول الأجهزة المحمولة الآمنة",
   "en": "Implementing Secure Mobile Solutions",
   "dom": "D2+D3",
   "pri": "med",
   "intro": "فصل قصير نسبياً (25 دقيقة) — MDM وسياسات BYOD تظهر بأسئلة مباشرة قليلة الوزن.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "25 دقيقة تغطي الفصل كاملاً بلا حشو",
     "vids": [
      {
       "id": "T1JXEG85r40",
       "t": "13- Implementing Secure Mobile Solutions",
       "d": 1514
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "16 دقيقة — أقصر نسخة",
     "vids": [
      {
       "id": "9FgiCRyxhXQ",
       "t": "Chapter 13 Implementing Secure Mobile Solutions المحاضرة الثالثة عشر",
       "d": 939
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "25 دقيقة",
     "verdict": "مختار",
     "note": "الأشمل"
    },
    {
     "p": "p1",
     "dur": "16 دقيقة",
     "verdict": "بديل",
     "note": "أقصر"
    }
   ],
   "keys": [
    "إدارة الأجهزة المحمولة MDM و MAM",
    "الحاويات وفصل بيانات العمل عن الشخصية",
    "التشفير الكامل للقرص والأقفال الجغرافية",
    "سياسات BYOD و COPE و CYOD"
   ]
  },
  {
   "n": 14,
   "ar": "تلخيص مفاهيم التطبيقات الآمنة",
   "en": "Summarizing Secure Application Concepts",
   "dom": "D2",
   "pri": "med",
   "intro": "دورة حياة التطوير الآمن والبرمجة الآمنة — النظرية (55 دقيقة) تكفي للامتحان، والمعامل الأربعة المطولة لمن يعمل بالتطوير.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "55 دقيقة نظرية — كافية لوزن الفصل في الامتحان",
     "vids": [
      {
       "id": "cs4lKSsgvkY",
       "t": "14.1- Summarizing Secure Application Concepts - Part 1",
       "d": 3310
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "أربعة معامل تطبيقية مطولة — لمن يريد التعمق العملي فيما بعد",
     "vids": [
      {
       "id": "BxvjYO3G4Ew",
       "t": "14.2- Summarizing Secure Application Concepts - Part 2 (Application Attack Indicators Lab)",
       "d": 1770
      },
      {
       "id": "xPLSITWpx3w",
       "t": "14.3- Summarizing Secure Application Concepts - Part 3 (Identifying a Browser Attack Lab)",
       "d": 2093
      },
      {
       "id": "hevbOcH0S8s",
       "t": "14.4- Summarizing Secure Application Concepts - Part 4 (Implementing PowerShell Security Lab)",
       "d": 2040
      },
      {
       "id": "8Ad2-DIJRpc",
       "t": "14.5- Summarizing Secure Application Concepts - Part 5 (Identifying Malicious Code Lab)",
       "d": 1475
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "55 دقيقة + معمل 44 دقيقة",
     "vids": [
      {
       "id": "OLzHOXcygYk",
       "t": "Chapter  14  Summarizing Secure Application Concepts المحاضرة الرابعة عشر",
       "d": 3325
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "55 د + 4 معامل",
     "verdict": "مختار",
     "note": "مرونة: نظرية تكفي + معامل اختيارية"
    },
    {
     "p": "p1",
     "dur": "55 د + معمل",
     "verdict": "بديل",
     "note": "متقارب"
    }
   ],
   "keys": [
    "دورة حياة التطوير SDLC ونماذجها",
    "مبادئ البرمجة الآمنة: التحقق من المدخلات، المعاملات المميزة",
    "التحليل الساكن مقابل الديناميكي",
    "توقيع الشيفرة وضمان سلامة التوريد",
    "أساسيات SQL injection و XSS (تعمقها في المعامل)"
   ]
  },
  {
   "n": 15,
   "ar": "تنفيذ الحلول السحابية الآمنة",
   "en": "Implementing Secure Cloud Solutions",
   "dom": "D2+D3",
   "pri": "imp",
   "intro": "السحابة حاضرة بقوة في الامتحان الحديث — نماذج الخدمة والنشر ونموذج المسؤولية المشتركة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "49 دقيقة — أعمق من بديل p1 بنسبة 60%",
     "vids": [
      {
       "id": "GrEINwEZSm0",
       "t": "15- Implementing Secure Cloud Solutions",
       "d": 2967
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "30 دقيقة",
     "vids": [
      {
       "id": "1YkLTlg5prc",
       "t": "Chapter  15  Implementing Secure Cloud Solutions المحاضرة الخامسة عشر",
       "d": 1816
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "49 دقيقة",
     "verdict": "مختار",
     "note": "الأعمق"
    },
    {
     "p": "p1",
     "dur": "30 دقيقة",
     "verdict": "بديل",
     "note": "للمراجعة"
    }
   ],
   "keys": [
    "نماذج الخدمة: IaaS / PaaS / SaaS",
    "نماذج النشر: عامة، خاصة، هجينة، مجتمعية",
    "نموذج المسؤولية المشتركة وحدوده في كل نموذج",
    "CASB وإدارة أمن الوصول للسحابة",
    "أمن الحاويات والخوادم الافتراضية و VPC"
   ]
  },
  {
   "n": 16,
   "ar": "شرح مفاهيم خصوصية البيانات وحمايتها",
   "en": "Explaining Data Privacy and Protection Concepts",
   "dom": "D2+D5",
   "pri": "med",
   "intro": "تصنيف البيانات و DLP — فصل قصير (24 دقيقة) يجمع بين المجالين الثاني والخامس.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "24 دقيقة — التغطيتان المتاحتان متقاربتان، والأصل الاتساق مع المسار",
     "vids": [
      {
       "id": "QLbr-I6DP4Y",
       "t": "16- Explaining Data Privacy and Protection Concepts",
       "d": 1455
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "22 دقيقة — تكافئ تقريباً",
     "vids": [
      {
       "id": "xiBfOMVcWH0",
       "t": "Chapter  16  Explaining Data Privacy and Protection Concepts المحاضرة السادسة عشر",
       "d": 1295
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "24 دقيقة",
     "verdict": "مختار",
     "note": "اتساق مع المسار"
    },
    {
     "p": "p1",
     "dur": "22 دقيقة",
     "verdict": "بديل",
     "note": "تكافؤ — للمراجعة"
    }
   ],
   "keys": [
    "تصنيف البيانات: عامة، خاصة، سرية، مقيدة",
    "أنواع البيانات: PII، PHI، PCI وأنظمتها",
    "منع تسرب البيانات DLP وأنماط نشره",
    "الاحتفاظ والتخلص الآمن من البيانات",
    "التشفير أثناء النقل والتخزين وإدارة المفاتيح"
   ]
  },
  {
   "n": 17,
   "ar": "تنفيذ الاستجابة للحوادث",
   "en": "Performing Incident Response",
   "dom": "D4",
   "pri": "imp",
   "intro": "مراحل الاستجابة للحوادث — فصل محوري في المجال الرابع (16%) سيتكرر في أسئلة سيناريوهات PBQs.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "ساعة كاملة (60 دقيقة) مقابل 24 دقيقة فقط في p1",
     "vids": [
      {
       "id": "hn4XGgsc6nI",
       "t": "17.1- Performing Incident Response - Part 1",
       "d": 3600
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل إدارة مصادر البيانات + معمل ضوابط التخفيف",
     "vids": [
      {
       "id": "xd6HXJfSKJc",
       "t": "17.2- Performing Incident Response - Part 2 (Managing Data Sources for Incident Response Lab)",
       "d": 2517
      },
      {
       "id": "jr6RNQZaihg",
       "t": "17.3- Performing Incident Response - Part 3 (Configuring Mitigation Controls Lab)",
       "d": 1114
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "24 دقيقة — مقتضب لمفاهيم السيناريوهات",
     "vids": [
      {
       "id": "ocLNoj6Pex0",
       "t": "Chapter  17  Performing Incident Response المحاضرة السابعة عشر",
       "d": 1442
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "1:00 + معملان",
     "verdict": "مختار",
     "note": "2.5x عمق البديل"
    },
    {
     "p": "p1",
     "dur": "24 دقيقة",
     "verdict": "بديل",
     "note": "مقتضب"
    }
   ],
   "keys": [
    "مراحل الاستجابة: التحضير، التحديد، الاحتواء، الاستئصال، التعافي، الدروس",
    "SIEM و SOAR وأتمتة الاستجابة",
    "مؤشرات الاختراق ومصادر البيانات",
    "خطط الاستجابة Playbooks وأولويات الاحتواء",
    "التواصل والرفع أثناء الحادث"
   ]
  },
  {
   "n": 18,
   "ar": "شرح الطب الشرعي الرقمي",
   "en": "Explaining Digital Forensics",
   "dom": "D4",
   "pri": "med",
   "intro": "فصل متوسط الوزن — وهنا حالة نادرة يتفوق فيها بديل p1 على أساسي p5 نظرياً (42 مقابل 12 دقيقة).",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي مركز",
     "why": "12 دقيقة تلخص المفاهيم الحرجة — كافية لوزن الفصل",
     "vids": [
      {
       "id": "VRlldq5snmM",
       "t": "18.1- Explaining Digital Forensics - Part 1",
       "d": 702
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل تحصيل الأدلة الجنائية — يجسد سلسلة الحيازة عملياً",
     "vids": [
      {
       "id": "8QCMP-nYW-A",
       "t": "18.2- Explaining Digital Forensics - Part 2 (Acquiring Digital Forensics Evidence Lab)",
       "d": 2060
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "تعمق نظري",
     "why": "42 دقيقة — الحالة الوحيدة التي يتفوق فيها p1 نظرياً؛ أنصح به لمن يجد الفصل صعباً",
     "vids": [
      {
       "id": "bppNMzqkPi8",
       "t": "Chapter  18  Explaining Digital Forensics المحاضرة الثامنة عشر",
       "d": 2547
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "12 د + معمل أدلة",
     "verdict": "مختار",
     "note": "إيجاز + تطبيق"
    },
    {
     "p": "p1",
     "dur": "42 دقيقة",
     "verdict": "تعمق نظري",
     "note": "أفضل شرح نظري منفرد — حالة استثنائية"
    }
   ],
   "keys": [
    "سلسلة الحيازة Chain of Custody",
    "ترتيب التقلبية Order of Volatility",
    "التصوير الجرمي Imaging والبصمات الرقمية",
    "قابلية قبول الأدلة والوثائق",
    "التحليل القانوني مقابل الاستخباراتي"
   ]
  },
  {
   "n": 19,
   "ar": "تلخيص مفاهيم إدارة المخاطر",
   "en": "Summarizing Risk Management Concepts",
   "dom": "D5",
   "pri": "imp",
   "intro": "بوابة المجال الخامس (14%) — أربعة أضعاف عمق البديل: مفاهيم مضمونة الحضور وأسئلة مباشرة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "44 دقيقة كاملة مقابل 11 دقيقة فقط في p1 — فارق حاسم في فصل كثيف المفاهيم",
     "vids": [
      {
       "id": "piw75hexagQ",
       "t": "19- Summarizing Risk Management Concepts",
       "d": 2640
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "غير كافٍ",
     "why": "11 دقيقة مختصرة جداً لمفاهيم المخاطر",
     "vids": [
      {
       "id": "tFNgjkgCcXQ",
       "t": "Chapter  19  Summarizing Risk Management Concepts المحاضرة التاسعة عشر",
       "d": 640
      }
     ]
    },
    {
     "p": "p2",
     "role": "مكمل لاحق",
     "why": "نظرة مركزة على الأطر NIST/ISO",
     "vids": [
      {
       "id": "9Js0par6UPg",
       "t": "002-CompTIA Security Arabic | cyber security frameworks | شرح كورس كومباتيا سيكيوريتي",
       "d": 1257
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "44 دقيقة",
     "verdict": "مختار",
     "note": "4x عمق البديل — فارق حاسم"
    },
    {
     "p": "p1",
     "dur": "11 دقيقة",
     "verdict": "مستبعد",
     "note": "غير كافٍ لحجم الفصل"
    }
   ],
   "keys": [
    "تحديد المخاطر وتقييمها ومعالجتها",
    "الاستجابات: قبول، نقل، تخفيف، تجنب",
    "المخاطر المتبقية وسجل المخاطر",
    "الكمي مقابل النوعي في التقييم",
    "الأطر: ISO 31000 و NIST وإدارة مخاطر الطرف الثالث"
   ]
  },
  {
   "n": 20,
   "ar": "تنفيذ مرونة الأمن السيبراني",
   "en": "Implementing Cybersecurity Resilience",
   "dom": "D4",
   "pri": "med",
   "intro": "النسخ الاحتياطي والتكرار والمواقع البديلة — أسئلة كلاسيكية مباشرة تستحق 35 دقيقة مركزة.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "النظرية المركزة (11 دقيقة) + معمل النسخ الاحتياطي",
     "vids": [
      {
       "id": "QT4xFnC1Mh4",
       "t": "20.1- Implementing Cybersecurity Resilience - Part 1",
       "d": 667
      }
     ]
    }
   ],
   "labs": [
    {
     "p": "p5",
     "why": "معمل النسخ الاحتياطي في Windows و Linux",
     "vids": [
      {
       "id": "JvcnnC__008",
       "t": "20.2- Implementing Cybersecurity Resilience - Part 2 (Backing Up Data in Windows and Linux Lab)",
       "d": 1422
      }
     ]
    }
   ],
   "alts": [
    {
     "p": "p1",
     "role": "مراجعة",
     "why": "21 دقيقة",
     "vids": [
      {
       "id": "CzMcy0fksEA",
       "t": "Chapter  20  Implementing Cybersecurity Resilience المحاضرة العشرون",
       "d": 1253
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "11 د + معمل",
     "verdict": "مختار",
     "note": "نظرية + تطبيق فعلي للنسخ"
    },
    {
     "p": "p1",
     "dur": "21 دقيقة",
     "verdict": "بديل",
     "note": "نظري فقط"
    }
   ],
   "keys": [
    "أنواع النسخ الاحتياطي: كامل، تزايدي، تفاضلي",
    "RAID بمستوياته وتكرار المكونات",
    "RPO و RTO و MTTR",
    "المواقع البديلة: ساخنة، دافئة، باردة",
    "التجاوز الفاشل Failover والتوافرية العالية"
   ]
  },
  {
   "n": 21,
   "ar": "شرح الأمن الفيزيائي",
   "en": "Explaining Physical Security",
   "dom": "D2+D5",
   "pri": "med",
   "intro": "آخر الفصول وأقصرها (17 دقيقة) — نقاط سهلة بأسئلة مباشرة عن الضوابط الفيزيائية.",
   "sel": [
    {
     "p": "p5",
     "role": "أساسي",
     "why": "17 دقيقة مقابل 7 فقط في p1 — تغطية أوفى لآخر الفصول",
     "vids": [
      {
       "id": "rcYIAlazvjI",
       "t": "21- Explaining Physical Security",
       "d": 996
      }
     ]
    }
   ],
   "labs": [],
   "alts": [
    {
     "p": "p1",
     "role": "مقتضب جداً",
     "why": "7 دقائق لا تكفي",
     "vids": [
      {
       "id": "fwp1qANofC4",
       "t": "Chapter  21  Explaining Physical Security المحاضرة الواحد والعشرون والاخيرة",
       "d": 395
      }
     ]
    },
    {
     "p": "p4",
     "role": "منظور هجومي",
     "why": "الهجمات الفيزيائية — فيما بعد",
     "vids": [
      {
       "id": "4FJ80ooCbC8",
       "t": "10-#CompTIA Security+ (Physical Attacks) By Eng-Mohamed Alwy | Arabic",
       "d": 641
      }
     ]
    }
   ],
   "cmp": [
    {
     "p": "p5",
     "dur": "17 دقيقة",
     "verdict": "مختار",
     "note": "أوفى تغطية"
    },
    {
     "p": "p1",
     "dur": "7 دقائق",
     "verdict": "مستبعد",
     "note": "مقتضب جداً"
    }
   ],
   "keys": [
    "الضوابط الفيزيائية: الأقفال، الكاميرات، الحواجز، الحراس",
    "شارات الدخول وأنظمة التحكم بالوصول الفيزيائي",
    "المراقبة البيئية وإطفاء الحرائق",
    "إدارة الزوار والأمن الطرفي للمنشآت"
   ]
  }
 ],
 "stats": {
  "totalVideos": 260,
  "totalHours": 137.5,
  "playlists": 5,
  "channels": 4,
  "impCount": 22,
  "impHours": 19.1,
  "medCount": 33,
  "medHours": 15.7,
  "laterCount": 198,
  "skipCount": 7
 }
};
