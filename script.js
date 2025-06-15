// نفس الزر في الهاتف والحاسوب
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".scroll-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetSelector = button.getAttribute("data-target");
      const section = document.querySelector(targetSelector);
      if (section) {
        section.classList.remove("hidden");
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

//ضبط سكربت الولايات
document.addEventListener('DOMContentLoaded', () => {
  const wilayas = {
    "1": { name: "أدرار", communes: ["أدرار", "تيميمون", "برج باجي مختار", "شروين", "أولف", "تيوريرين", "رقان", "تسابيت", "المطارفة", "قصر قدور", "بودة", "أوقروت", "دلدول", "تامنطيت", "المسيحل", "عين صالح", "إينغر", "تاوريرت", "سالى", "المشرية", "سبع", "سيدي علي بن يوب", "سيدي قدور", "بني عباس", "لعماير", "أولاد أحمد تيمي", "تيمياوين", "طلمين", "بني ونيف", "غارداية", "سيدي بنور", "المزارعة", "تنزروفت", "أدلس", "أكرور", "سوق اللحم", "زاوية كنتة", "حاسي البيضة", "أولاد عيسى"] },
    "2": { name: "الشلف", communes: ["الشلف", "تنس", "أبو الحسن", "عين مران", "بني حواء", "صبحة", "بوقادير", "المرسى", "وادي الفضة", "أولاد عباس", "تاوقريت", "الهرانفة", "الكريمية", "سنجاس", "الصباحية", "بوزغاية", "وادي غنيم", "الزبيرية", "المالحة", "بريرة", "الحجاج", "عين السخونة", "الخوار", "القرية", "الدهارة", "الأبيض مجاجة", "بن عبد المالك رمضان", "أم الدروع", "سيدي عكاشة", "الشطية", "الزيبان", "الظهرة", "وادي سلي", "أولاد بن عبد القادر", "بني راشد", "عين الترك"] },
    "3": { name: "الأغواط", communes: ["الأغواط", "عين ماضي", "الحاج المشري", "سيدي مخلوف", "العسافية", "وادي مزي", "وادي مرة", "الحويطة", "الخنق", "تاجموت", "قلتة سيدي سعد", "بني نصير", "وادي الرمل", "القاهرة", "بريدة", "الغيشة", "عين سيدي علي", "حاسي الرمل", "الأبيض سيدي الشيخ", "قصر الحيران", "كويفيفة", "الحطبة", "العمورة", "سيدي بوزيد", "شتمة", "بوغزول", "تيلغمت", "عين الشهداء", "أفلو", "بن ناصر بن شهرة", "تاويالة", "سبق", "عين بوشليف", "الخناق", "الخلوة"] },
    "4": { name: "أم البواقي", communes: ["أم البواقي", "عين البيضاء", "عين مليلة", "عين فكرون", "عين كرشة", "عين الزيتون", "البلالة", "عين السبع", "بريش", "أولاد حملة", "سيقوس", "الرحية", "فدج الزاوية", "مسكيانة", "عين بابوش", "عين الديس", "العامرية", "الرصفة", "فكيرينة", "البسباس", "قصر صبيحي", "الضلعة", "برج صباط", "بئر الشهداء", "وادي نيني", "عين أزال", "بوقرة", "عين الحمام", "سيدي ارغيس", "الزرق", "العصنام", "مسعود بوجريو"] },
    "5": { name: "باتنة", communes: ["باتنة", "مروانة", "أولاد بوعكاز", "عين التوتة", "المعذر", "الربيع", "عين جاسر", "بوزينة", "القصبات", "وادي الماء", "تيمقاد", "الشمرة", "سريانة", "عين ياقوت", "أريس", "بئر تفاف", "عين الرومي", "تكسلانت", "جرمة", "وادي الطاقة", "عين ولمان", "فم الطوب", "بريكة", "عين زعطوط", "تيلاطو", "وادي الشعبة", "أبو رمان", "أولاد سلام", "شير", "تازولت", "ثنية العابد", "منعة", "تكوت", "بومية", "تغزوت", "لمسان", "عين الحجل", "ثنية العابد", "وادي سعيدة", "عين الزرقة", "الماقود", "المحمل", "عين سيدي علي", "نارة", "سيدي عون", "تيغانيمين", "بوجماعة", "أولاد عمار", "الرحبة", "القاهرة", "أبو رمان", "أولاد سي سليمان", "تاكسلانت"] },
    "6": { name: "بجاية", communes: ["بجاية", "أميزور", "واد قير", "تيزي وزو", "تاوريرت إغيل", "بن مهدي", "أوقاس", "البرج", "فراونة", "أيت رزين", "بني معوش", "سيدي عيش", "اقبيل", "تازمالت", "أيت إسماعيل", "أيت مليك", "إغيل علي", "بني جليل", "قورارة", "عين أرنات", "بني أوجل", "أيت سماعيل", "أولاد دراج", "أيت منصور", "أيت تيزي", "توجة", "العبادل", "بني وارس", "أيت وراغة", "بني جراح", "أيت واعلي", "أيت بوعدو", "تالة حمزة", "شميني", "أيت كسي", "تفريت", "آيت تيزي", "أيت سليمان", "أيت جليل", "الحمادية", "سوق الاثنين", "أيت بوعلي", "أيت زيكي", "تيمزريت", "برباشة", "إيشير", "إغيل أمغوس", "أيت أرزين", "القصور", "أيت سمال"] },
    "7": { name: "بسكرة", communes: ["بسكرة", "أولاد جلال", "سيدي عقبة", "طولقة", "ليشانة", "الحاجب", "الشعيبة", "سيدي خالد", "المزرعة", "عين الناقة", "المقرة", "الغروس", "عين الزرقاء", "عين زعطوط", "الحناية", "جمورة", "لوطاية", "برج بن عزوز", "الفايض", "القنطرة", "المساهل", "فوغالة"] },
    "8": { name: "بشار", communes: ["بشار", "العبادلة", "بني ونيف", "لحمر", "بوكايس", "القنادسة", "مرارة", "تغيث", "تاغيت", "مشرع هواري بومدين", "القصابي", "تبلبالة", "عرق فراج", "الواتة", "بني عباس", "إقلي", "تامرت", "فنوغيل", "بني قيرة", "بني قيس"] },
    "9": { name: "البليدة", communes: ["البليدة", "بوفاريك", "العفرون", "الشفة", "موزاية", "الشبلي", "القرارة", "أولاد سلامة", "الصومعة", "الرويبة", "وادي العلايق", "عين الرمان", "حجوط", "وادي جر", "بن خليل", "مفتاح", "خزرونة", "الجنوب", "المدية", "عين زويت", "وادي جمعة", "الشريعة", "صوحا", "تازارت", "عين سيدي علي", "بن علال"] },
    "10": { name: "البويرة", communes: ["البويرة", "الأخضرية", "قادرية", "برج أخضر", "عين الترك", "سور الغزلان", "عين بسام", "أهل القصر", "القرية", "حيزر", "سيدي عيسى", "برج وهران", "وادي البردي", "شرفات", "أولاد راشد", "عين الحمام", "تاغزوت", "الجباحية", "العجيبة", "الزبربر", "الديرة", "الحجرة الزرقاء", "آغبالو", "إغيل أمزيان", "عين عيسى", "أولاد إبراهيم", "عين العلوي", "بئر غبالو"] },
    "11": { name: "تمنراست", communes: ["تمنراست", "عين أمقل", "تازة", "أبلسة", "عين قزام", "تيزين", "تاظروك", "فقيق", "تاتار", "تينزاواتين", "تادمايت", "عين أكر", "إدلس", "تيت", "سيلت"] },
    "12": { name: "تبسة", communes: ["تبسة", "مرسط", "العوينات", "الكويف", "الماء الأبيض", "الحويجبات", "عين الزرقاء", "بئر العاتر", "الشريعة", "العقلة", "بكارية", "الونزة", "بوخضرة", "الثليجان", "العزيزية", "الصفصاف", "الماين", "الحمامات", "سطح قنطيس", "بئر الذهب"] },
    "13": { name: "تلمسان", communes: ["تلمسان", "مغنية", "سبدو", "نيدرومة", "بني سنوس", "عين فزة", "عين يوسف", "باب العسة", "شتوان", "حناية", "الغزوات", "هنين", "شيتوان", "منصورة", "سبت شيتوان", "عين فتاح", "بوحلو", "بني بحدل", "صبرة", "سيدي الجيلالي", "عين غرابة", "أولاد ميمون", "السواحل", "بني بوسعيد", "زناتة", "سيدي بوجنان", "ندرومة", "مرسى بن مهيدي", "البور", "دار يغموراسن", "مسيردة ثفة", "سيدي العبدلي", "أولاد صمد", "أولاد رياح", "الرمشي", "سيدي مجاهد"] },
    "14": { name: "تيارت", communes: ["تيارت", "عين الذهب", "عين بوشقيف", "مدروسة", "الرشايقة", "السوقر", "فرجيوة", "عين دزاريت", "مادنة", "السبت", "عسلة", "المعمورة", "النعامة", "واد ليلي", "عين الحديد", "عين كرمس", "مشراوة", "مغيلة", "تخمارت", "سيدي عبد الرحمان", "دحموني", "سيدي بختي"] },
    "15": { name: "تيزي وزو", communes: ["تيزي وزو", "تيزي غنيف", "ذراع بن خدة", "تادمايت", "وذية", "بني دوالة", "بوغني", "تيزي راشد", "ماكودة", "عزازقة", "تيميزار", "أيت محمود", "بوادز", "عين الزاوية", "تيمزريت", "بوزقن", "إفليسن", "أيت خليلي", "إيفرحونن", "إيلولة أومالو", "عين الحمام", "تيزي نبربر", "أيت يحيى موسى", "أيت عيسى ميمون", "جبالة", "ذراع الميزان", "أيت أومالو"] },
    "16": { name: "الجزائر", communes: ["الجزائر الوسطى", "سيدي امحمد", "القصبة", "المرادية", "باب الواد", "وادي قريش", "الأبيار", "بن عكنون", "بولوغين", "حسين داي", "المدنية", "القبة", "بوروبة", "الحراش", "باش جراح", "عين النعجة", "وادي السمار", "برج البحري", "دار البيضاء", "برج الكيفان", "الرغاية", "عين طاية", "المرسى", "هراوة", "الدرارية", "دويرة", "باب الزوار", "السحاولة", "الرحمانية"] },
    "17": { name: "الجلفة", communes: ["الجلفة", "عين الإبل", "حاسي بحبح", "البيرين", "مسعد", "عين وسارة", "الشارف", "الادريسية", "حد الصحاري", "دار الشيوخ", "عين فقه", "سيدي بايزيد", "بويرة الحداد", "عامرة", "وادي الأبيار", "القرارة", "مختار", "امجدل", "البسباس", "القرقارة", "حاسي فدول", "زكار", "عين معبد", "دليس", "الخنق"] },
    "18": { name: "جيجل", communes: ["جيجل", "العوانة", "تاكسانة", "جيملة", "أولاد يحيى خدروش", "الشقفة", "برج طهر", "أرسن", "سيدي عبد العزيز", "الميلية", "سيدي معروف", "الطاهير", "الزيامة منصورية", "خيري وادي عجول", "زيامة منصورية"] },
    "19": { name: "سطيف", communes: ["سطيف", "العلمة", "بوقاعة", "عين أزال", "عين ولمان", "عموشة", "تيزي نبشار", "آيت تيزي", "بئر العرش", "عين عباسة", "صالح باي", "حمامة", "بازر الصخر", "أولاد صابر", "قصر الأبطال", "عين الكبيرة", "عراس", "بني فودة", "عين لقراج", "بوعنداس", "بني ورثيلان", "بابور", "ماوكلان"] },
    "20": { name: "سعيدة", communes: ["سعيدة", "عين الحجر", "عين السخونة", "النعامة", "الحساسنة", "سيدي بوبكر", "ذوي ثابت", "معمورة", "وادي جر", "مرسى بني يمان", "سيدي عمار"] },
    "21": { name: "سكيكدة", communes: ["سكيكدة", "الحدائق", "عين بوزيان", "رمضان جمال", "فلفلة", "الحروش", "وادي الزهور", "عين قشرة", "عين شرشار", "لعبادلة", "أم الطوب", "بني بشير", "صالح بوالكور"] },
    "22": { name: "سيدي بلعباس", communes: ["سيدي بلعباس", "سيدي علي بن يوب", "سيدي لحسن", "راس الماء", "عين البرد", "عين تادلس", "الحصن", "تلاغ", "مرحوم", "مولاي سليسن", "الصفصاف", "الضاية", "عين أدن", "عين فكان", "وادي صباع", "بئر الحسيني", "الحاسي", "سيدي خالد", "بوجبهة البرج", "بني تادلس", "بني حماد"] },
    "23": { name: "عنابة", communes: ["عنابة", "البوني", "القطار", "سرايدي", "الحجار", "الذرعان", "برحال", "الشعيبة", "عين الباردة", "شطايبي", "عين العنب"] },
    "24": { name: "قالمة", communes: ["قالمة", "بوحمدان", "بوشقوف", "عين مخلوف", "هيليوبوليس", "بني حواء", "الدهارة", "الفجوج", "قلعة بوصبع", "وادي الزناتي", "تاملوكة", "عين صندل"] },
    "25": { name: "قسنطينة", communes: ["قسنطينة", "الخروب", "عين سمارة", "حامة بوزيان", "ديدوش مراد", "ابن زياد", "عين عبيد", "أولاد رحمون", "زيغود يوسف"] },
    "26": { name: "المدية", communes: ["المدية", "البرواقية", "وزرة", "شلالة العذاورة", "العمارية", "بن شيكاو", "بوغزول", "عين صالح", "الزرقة"] },
    "27": { name: "مستغانم", communes: ["مستغانم", "عين تدلس", "حاسي مفسوخ", "سيدي لخضر", "خير الدين", "الحسيان", "وادي الخير", "بوقيرات", "عين سيدي شريف"] },
    "28": { name: "المسيلة", communes: ["المسيلة", "سيدي عيسى", "عين الحجل", "بوسعادة", "مقرة", "بوخميسة", "بن سرور", "خبانة", "أولاد دراج", "الحشاني"] },
    "29": { name: "معسكر", communes: ["معسكر", "تيغنيف", "عين فكان", "غريس", "المحمدية", "سيق", "واد الابطال", "زهانة", "عين فارس", "عوف", "تيزي", "مغيلة", "ماوسة", "البرج", "وادي تاغية", "حسين", "المعاقلة"] },
    "30": { name: "ورقلة", communes: ["ورقلة", "الرويسات", "عين البيضاء", "حاسي مسعود", "سيدي خويلد", "تقرت", "المغير", "تماسين"] },
    "31": { name: "وهران", communes: ["وهران", "عين الترك", "بطيوة", "أرزيو", "قديل", "بئر الجير", "البرية", "السحانية"] },
    "32": { name: "البيض", communes: ["البيض", "بوقطب", "بوسمغون", "الأبيض سيدي الشيخ", "الشقيق", "بريزينة", "الكراكدة", "سيدي عمار"] },
    "33": { name: "إليزي", communes: ["إليزي", "جانت", "برج الحواس", "دبداب", "دجان", "عين أمناس"] },
    "34": { name: "برج بوعريريج", communes: ["برج بوعريريج", "برج الغدير", "المنصورة", "الحمادية", "زمورة", "رأس الوادي", "حسناوة", "عين تاغروت", "عين تسرة"] },
    "35": { name: "بومرداس", communes: ["بومرداس", "الثنية", "دلس", "الأربعاء", "سي مصطفى", "قورصو", "زموري", "قدارة", "سيدي داود"] },
    "36": { name: "الطارف", communes: ["الطارف", "البسباس", "القالة", "الركنية", "بوحجار", "شطايبي", "عين كرمة", "بوثلجة", "العيون"] },
    "37": { name: "تندوف", communes: ["تندوف", "أم العسل"] },
    "38": { name: "تيسمسيلت", communes: ["تيسمسيلت", "ثنية الحد", "برج بونعامة", "الأزهرية", "بوقائد", "العيون"] },
    "39": { name: "الوادي", communes: ["الوادي", "الرقيبة", "حاسي خليفة", "كوينين", "المقرن", "الرباح", "أم الطيور", "ورماس", "الدوائر"] },
    "40": { name: "خنشلة", communes: ["خنشلة", "عين الطويلة", "ششار", "بابار", "المحمل", "متوسة", "قايس", "عين توتة", "يواب"] },
    "41": { name: "سوق أهراس", communes: ["سوق أهراس", "سدراتة", "تاورة", "عين الزرقاء", "أم العظايم", "خضرة", "أولاد إدريس"] },
    "42": { name: "تيبازة", communes: ["تيبازة", "شرشال", "القليعة", "حجرة النص", "فوكة", "بوهارون", "عين تقورايت", "سيدي راشد"] },
    "43": { name: "ميلة", communes: ["ميلة", "عين بوشقوف", "تلاغمة", "فرجيوة", "عين التين", "وادي النجاء", "سيدي مروان", "تيزي غنيف", "حمالة"] },
    "44": { name: "عين الدفلى", communes: ["عين الدفلى", "العبادية", "العطاف", "الخميس", "بئر ولد خليفة", "عين بويحيى"] },
    "45": { name: "النعامة", communes: ["النعامة", "مغرار", "عين الصفراء", "تيوت", "مكمن بن عمار", "القصدير"] },
    "46": { name: "عين تموشنت", communes: ["عين تموشنت", "بني صاف", "المالح", "وادي الصباح", "شعبة اللحم", "حاسي الغلة"] },
    "47": { name: "غرداية", communes: ["غرداية", "القرارة", "بريان", "ضاية بن ضحوة", "متليلي", "المنصورة", "بنورة", "سبسب", "العطف"] },
    "48": { name: "غليزان", communes: ["غليزان", "وادي ارهيو", "عمي موسى", "جديوية", "مازونة", "عين طارق", "المطمر", "سيدي خطاب"] },
    "49": { name: "المغير", communes: ["المغير", "جامعة", "مرارة", "أم الطيور", "عين الشيبة", "سطيل", "سيدي عمران", "الحدادة"] },
    "50": { name: "المنيعة", communes: ["المنيعة", "حاسي القارة", "حاسي لغمار"] },
    "51": { name: "أولاد جلال", communes: ["أولاد جلال", "سيدي خالد", "البسباس", "الشعيبة", "راس الميعاد", "الدوسن", "الجامعة"] },
    "52": { name: "برج باجي مختار", communes: ["برج باجي مختار", "تيمياوين"] },
    "53": { name: "بني عباس", communes: ["بني عباس", "لعماير", "تمروقت", "أولاد خضير"] },
    "54": { name: "تيميمون", communes: ["تيميمون", "أولاد السعيد", "قصر قدور", "أوقروت", "دلدول", "المطارفة", "تامنطيت", "المسيحل", "بوده"] },
    "55": { name: "توقرت", communes: ["توقرت", "النزلة", "تبسبست", "الزاوية العابدية", "العالية", "الحجيرة", "المقرن", "الطيبات"] },
    "56": { name: "جانت", communes: ["جانت", "برج عمر إدريس"] },
    "57": { name: "عين صالح", communes: ["عين صالح", "فقارة الزاوية", "إنغر"] },
    "58": { name: "عين قزام", communes: ["عين قزام", "تين زواتين"] }
  };

  const wilayaSelect = document.getElementById('wilaya');
  const communeSelect = document.getElementById('commune');

  // Fonction pour peupler le sélecteur des wilayas
  function populateWilayaSelect() {
    for (const code in wilayas) {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${code} - ${wilayas[code].name}`;
      wilayaSelect.appendChild(option);
    }
  }

  function updateCommuneSelect() {
    const selectedWilayaCode = wilayaSelect.value;
    communeSelect.innerHTML = '<option value="" disabled selected>اختر البلدية</option>';
    communeSelect.disabled = true;
    communeSelect.classList.add('opacity-50', 'cursor-not-allowed');
    communeSelect.classList.remove('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-600');

    if (selectedWilayaCode) {
      const communes = wilayas[selectedWilayaCode].communes;
      communes.forEach(commune => {
        const option = document.createElement('option');
        option.value = commune;
        option.textContent = commune;
        communeSelect.appendChild(option);
      });
      communeSelect.disabled = false;
      communeSelect.classList.remove('opacity-50', 'cursor-not-allowed');
      communeSelect.classList.add('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-600');
    }
  }

  populateWilayaSelect();

  wilayaSelect.addEventListener('change', updateCommuneSelect);

  updateCommuneSelect();
});



document.addEventListener("DOMContentLoaded", () => {
  const quantitySpan = document.getElementById("quantity");
  const quantityLabel = document.getElementById("quantityLabel");
  const subtotalSpan = document.getElementById("subtotal");
  const totalSpan = document.getElementById("total");
  const shippingSpan = document.getElementById("shipping");
  const increaseBtn = document.getElementById("increaseBtn");
  const decreaseBtn = document.getElementById("decreaseBtn");
  const deliveryMethodSelect = document.getElementById("deliveryMethod");

  const unitPrice = 3500;
  let quantity = 1;
  let shipping = 0;

  function formatDZD(value) {
    return `${value.toLocaleString("fr-DZ")} دج`;
  }

  function updatePrices() {
    const subtotal = unitPrice * quantity;
    const total = subtotal + shipping;

    quantitySpan.textContent = quantity;
    quantityLabel.textContent = `×${quantity}`;
    subtotalSpan.textContent = formatDZD(subtotal);
    shippingSpan.textContent = formatDZD(shipping);
    totalSpan.textContent = formatDZD(total);
  }

  increaseBtn.addEventListener("click", () => {
    quantity++;
    updatePrices();
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updatePrices();
    }
  });

  deliveryMethodSelect.addEventListener("change", () => {
    const selected = deliveryMethodSelect.value;
    if (selected === "office") {
      shipping = 550;
    } else if (selected === "home") {
      shipping = 1050;
    }
    updatePrices();
  });

  updatePrices();
});

// ضبط مكان عرض الصور والفيديو للمنتج
document.addEventListener("DOMContentLoaded", () => {
  const mainProductDisplay = document.getElementById("main-display");
  const mainProductImage = document.getElementById("main-product-image");
  const mainProductVideo = document.getElementById("main-product-video");
  const playOverlay = document.getElementById("play-overlay");
  const videoDuration = document.getElementById("video-duration");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const dotButtons = document.querySelectorAll(".dot-button");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentActiveIndex = 0;

  function updateMainDisplay(index) {
    if (thumbnails.length === 0) return;

    if (index < 0) {
      index = thumbnails.length - 1;
    } else if (index >= thumbnails.length) {
      index = 0;
    }

    currentActiveIndex = index;
    const activeThumbnail = thumbnails[currentActiveIndex];
    const src = activeThumbnail.dataset.src;
    const type = activeThumbnail.dataset.type;

    if (mainProductImage) mainProductImage.classList.add("hidden");
    if (mainProductVideo) {
      mainProductVideo.classList.add("hidden");
      mainProductVideo.pause();
    }
    if (playOverlay) playOverlay.classList.add("hidden");
    if (videoDuration) videoDuration.classList.add("hidden");

    if (type === "image" && mainProductImage) {
      mainProductImage.src = src;
      mainProductImage.classList.remove("hidden");
    } else if (type === "video" && mainProductVideo) {
      if (mainProductVideo.src !== src) {
        mainProductVideo.src = src;
        mainProductVideo.load();
      }
      mainProductVideo.classList.remove("hidden");
      if (playOverlay) playOverlay.classList.remove("hidden");
      if (videoDuration) videoDuration.classList.remove("hidden");
    }

    thumbnails.forEach((thumb, i) => {
      thumb.classList.remove("border-blue-500");
      thumb.classList.add("border-transparent");
      if (i === currentActiveIndex) {
        thumb.classList.remove("border-transparent");
        thumb.classList.add("border-blue-500");
      }
    });

    if (dotButtons.length > 0) {
      dotButtons.forEach((dot, i) => {
        dot.classList.remove("bg-gray-500");
        dot.classList.add("bg-gray-300", "hover:bg-gray-400");
        if (i === currentActiveIndex) {
          dot.classList.remove("bg-gray-300", "hover:bg-gray-400");
          dot.classList.add("bg-gray-500");
        }
      });
    }
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      updateMainDisplay(index);
    });
  });

  if (playOverlay && mainProductVideo) {
    playOverlay.addEventListener("click", () => {
      if (!mainProductVideo.paused) {
        mainProductVideo.pause();
      } else {
        mainProductVideo.play();
      }
    });

    mainProductVideo.addEventListener("pause", () => {
      playOverlay.classList.remove("hidden");
    });

    mainProductVideo.addEventListener("ended", () => {
      playOverlay.classList.remove("hidden");
    });

    mainProductVideo.addEventListener("play", () => {
      playOverlay.classList.add("hidden");
    });

    mainProductVideo.addEventListener("loadedmetadata", () => {
      const duration = mainProductVideo.duration;
      if (!isNaN(duration) && videoDuration) {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        videoDuration.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds} ▶`;
      } else if (videoDuration) {
        videoDuration.textContent = "";
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateMainDisplay(currentActiveIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateMainDisplay(currentActiveIndex - 1);
    });
  }

  function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    const hoursElement = document.getElementById("countdown-hours");
    const minutesElement = document.getElementById("countdown-minutes");
    const secondsElement = document.getElementById("countdown-seconds");

    if (!hoursElement || !minutesElement || !secondsElement) return;

    const countdownInterval = setInterval(() => {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;

      hoursElement.textContent = String(hours).padStart(2, "0");
      minutesElement.textContent = String(minutes).padStart(2, "0");
      secondsElement.textContent = String(seconds).padStart(2, "0");

      if (--timer < 0) {
        clearInterval(countdownInterval);
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
      }
    }, 1000);
  }

  startCountdown(85314);

  if (thumbnails.length > 0) {
    updateMainDisplay(0);
  }
});



// ضبط زر عرض المزيد
document.addEventListener('DOMContentLoaded', () => {
  const desc = document.getElementById('productDescription');
  const toggleBtn = document.getElementById('toggleButton');

  const lineHeight = parseFloat(getComputedStyle(desc).lineHeight);
  const maxHeight = lineHeight * 2;

  if (desc.scrollHeight > maxHeight) {
    toggleBtn.classList.remove('hidden');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isClamped = desc.classList.contains('line-clamp-2');

    if (isClamped) {
      desc.classList.remove('line-clamp-2');
      toggleBtn.textContent = 'عرض أقل';
    } else {
      desc.classList.add('line-clamp-2');
      toggleBtn.textContent = 'عرض المزيد';
    }
  });
});

// زر حدف كل المنتوجات
document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.getElementById("clear-cart");
  const cartContent = document.getElementById("cart-content");
  const emptyMessage = document.getElementById("empty-cart-message");

  clearButton.addEventListener("click", () => {
    cartContent.classList.add("hidden");
    emptyMessage.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

function loadCart() {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const tableBody = document.querySelector("tbody");
  const cartContent = document.getElementById("cart-content");
  const emptyCartMessage = document.getElementById("empty-cart-message");

  const formatter = new Intl.NumberFormat("de-DE");

  cartContent.classList.add("hidden");
  emptyCartMessage.classList.remove("hidden");
  tableBody.innerHTML = "";

  if (cart.length === 0) return;

  cartContent.classList.remove("hidden");
  emptyCartMessage.classList.add("hidden");

  const grouped = {};
  cart.forEach(product => {
    const key = product.title;
    if (grouped[key]) {
      grouped[key].quantity += 1;
    } else {
      grouped[key] = { ...product, quantity: 1 };
    }
  });

  Object.values(grouped).forEach(product => {
    // استخراج السعر كرقم صحيح (مثل 3500)
    const price = parseInt(product.price.replace(/[^\d]/g, ""), 10) || 0;
    const total = formatter.format(price * product.quantity) + " دج";

    const row = document.createElement("tr");
    row.className = "border-b border-gray-200";

    row.innerHTML = `
  <td class="px-2 sm:px-4 py-3 flex items-center gap-2 sm:gap-3 border-b border-gray-200 dark:border-gray-700">
    <img src="${product.image}" alt="${product.title}" class="w-10 h-10 sm:w-12 sm:h-12 rounded">
    <span class="text-xs sm:text-base product-title text-gray-900 dark:text-gray-100">${product.title}</span>
  </td>
  <td class="px-2 sm:px-4 py-3 whitespace-nowrap unit-price text-gray-800 dark:text-gray-300" data-price="${price}">
    ${formatter.format(price)} دج
  </td>
  <td class="px-2 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-center gap-1 sm:gap-2">
      <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600" onclick="updateQuantity(this, -1)">-</button>
      <span class="quantity text-gray-900 dark:text-gray-100">${product.quantity}</span>
      <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600" onclick="updateQuantity(this, 1)">+</button>
    </div>
  </td>
  <td class="px-2 sm:px-4 py-3 whitespace-nowrap total-price text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">${total}</td>
  <td class="px-2 sm:px-10 py-3 text-red-500 text-xl border-b border-gray-200 dark:border-gray-700">
    <button onclick="deleteRow(this)" class="hover:text-red-700 dark:hover:text-red-400">🗑️</button>
  </td>
`;
    tableBody.appendChild(row);
  });
}


// التعامل مع المنتجات المضافة مسبقا 
document.addEventListener("DOMContentLoaded", function () {
  const cartCountEl = document.getElementById("cart-count");
  const alertBox = document.getElementById("alert-box");
  const alertTitle = document.getElementById("alert-title");
  const alertMessage = document.getElementById("alert-message");
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  updateCartCount();

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
      const productEl = this.closest(".product");

      const imageSrc = productEl.querySelector("img").getAttribute("src");
      const title = productEl.querySelector("h2").innerText.trim();
      const price = productEl.querySelector(".text-blue-600").innerText.trim();

      const product = { image: imageSrc, title, price };

      const alreadyInCart = cart.some(item => item.title === product.title);

      if (!alreadyInCart) {
        cart.push(product);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      } else {
        showAlert("⚠️ المنتج مضاف مسبقًا", "هذا المنتج مضاف مسبقًا إلى السلة.");
      }
    });
  });

  function updateCartCount() {
    const count = cart.length;
    cartCountEl.textContent = count;
    cartCountEl.classList.toggle("hidden", count === 0);
  }

  function showAlert(title, message) {
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    alertBox.classList.remove("hidden");

    // إعادة إخفاء التنبيه بعد 3 ثوانٍ
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 3000);
  }
});

// زري الشراء
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const available = product.getAttribute("data-available");
    const buyButton = product.querySelector(".buy-button");
    const cartButton = product.querySelector(".add-to-cart");

    if (available === "false") {
      buyButton.textContent = "غير متوفر";
      buyButton.disabled = true;
      buyButton.classList.add("opacity-50", "cursor-not-allowed");
      buyButton.classList.remove("hover:bg-blue-700");

      if (cartButton) {
        cartButton.disabled = true;
        cartButton.classList.add("opacity-50", "cursor-not-allowed");
      }
    }
  });
});


// الوضع المضلم
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // تحديث الأيقونة حسب الوضع الحالي
  function updateIcon() {
    if (htmlEl.classList.contains('dark')) {
      toggleBtn.classList.remove('fa-moon');
      toggleBtn.classList.add('fa-sun');
    } else {
      toggleBtn.classList.remove('fa-sun');
      toggleBtn.classList.add('fa-moon');
    }
  }

  if (localStorage.getItem('theme') === 'dark') {
    htmlEl.classList.add('dark');
  }

  updateIcon();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');

      if (htmlEl.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      updateIcon();
    });
  }
});


// عرض 4 عناصر في السكشن 
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".bg-white.rounded-xl.shadow-md");

  products.forEach((product, index) => {
    if (index >= 4) {
      product.style.display = "none";
    }
  });
});




// تفعيل الايقونات
lucide.createIcons();

AOS.init({
  duration: 800,
  once: true
});





// لفتح وإغلاق القائمة

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');        // زر فتح القائمة
    const drawer = document.getElementById('mobile-drawer');         // القائمة الجانبية
    const backdrop = document.getElementById('drawer-backdrop');     // الخلفية
    const closeBtn = document.getElementById('drawer-close');        // زر الإغلاق

    // فتح القائمة
    toggleBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      backdrop.classList.remove('hidden');
    });

    // إغلاق عند الضغط على زر الإغلاق
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    });

    // إغلاق عند الضغط خارج القائمة (على الخلفية)
    backdrop.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    });
  });





// زر الانتقال للاعلى
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("hidden", window.scrollY < 300);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// فلتر المنتجات
document.addEventListener('DOMContentLoaded', function () {
  const categoryRadios = document.querySelectorAll('input[name="category"]');
  const priceRange = document.querySelector('input[type="range"]');
  const availableCheckbox = document.querySelector('input[type="checkbox"]');
  const resetButton = document.getElementById('resetButton');
  const products = document.querySelectorAll('.product');
  const noProductsMessage = document.getElementById('noProductsMessage');
  const productCountElement = document.getElementById('productCount');
  const currentPrice = document.getElementById('currentPrice');

  function applyFilters() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').nextSibling.textContent.trim();
    const maxPrice = parseFloat(priceRange.value);
    const onlyAvailable = availableCheckbox.checked;

    let visibleCount = 0;

    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      const productPrice = parseFloat(product.getAttribute('data-price'));
      const isAvailable = product.getAttribute('data-available') === 'true';

      let show = true;

      if (selectedCategory !== 'الكل' && productCategory !== selectedCategory) {
        show = false;
      }

      if (productPrice > maxPrice) {
        show = false;
      }

      if (onlyAvailable && !isAvailable) {
        show = false;
      }

      product.style.display = show ? 'block' : 'none';
      if (show) visibleCount++;
    });

    productCountElement.textContent = `${visibleCount} منتج`;

    noProductsMessage.classList.toggle('hidden', visibleCount > 0);
  }

  priceRange.addEventListener('input', () => {
    currentPrice.textContent = `${priceRange.value} دج`;
  });

  priceRange.addEventListener('change', applyFilters);

  categoryRadios.forEach(radio => radio.addEventListener('change', applyFilters));
  availableCheckbox.addEventListener('change', applyFilters);

  resetButton.addEventListener('click', function () {
    document.querySelector('input[name="category"]').checked = true;
    priceRange.value = priceRange.max;
    currentPrice.textContent = `${priceRange.value} دج`;
    availableCheckbox.checked = false;
    applyFilters();
  });

  applyFilters();
});


// دالة إعادة ضبط الفلاتر (تُستخدم أيضًا مع رسالة "لم يتم العثور على منتجات")
function resetFilters() {
  const categoryRadios = document.querySelectorAll('input[name="category"]');
  const priceRange = document.getElementById('priceRange');
  const availableCheckbox = document.querySelector('input[type="checkbox"]');
  const noProductsMessage = document.getElementById('noProductsMessage');

  if (categoryRadios.length > 0) {
    categoryRadios[0].checked = true;
  }

  priceRange.value = priceRange.max;
  availableCheckbox.checked = false;
  noProductsMessage.style.display = 'none';

  const event = new Event('input');
  priceRange.dispatchEvent(event);
}

// تفعيل

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.remove("text-gray-700");
      link.classList.add("text-blue-600", "font-bold", "underline");
    }
  });
});






// اعادة ضبط الفلتر 
document.addEventListener('DOMContentLoaded', function () {
  const priceRange = document.getElementById('priceRange');
  const currentPrice = document.getElementById('currentPrice');
  const categoryRadios = document.querySelectorAll('input[name="category"]');
  const availabilityCheckbox = document.getElementById('availableOnly');
  const resetButton = document.getElementById('resetFilters');
  const products = document.querySelectorAll('.product');

  function filterProducts() {
    const selectedCategoryInput = document.querySelector('input[name="category"]:checked');
    const maxPrice = priceRange ? parseInt(priceRange.value) : 0;
    const onlyAvailable = availabilityCheckbox?.checked ?? false;

    // تحقق من وجود اختيار صنف قبل المتابعة
    if (!selectedCategoryInput) return;

    const selectedCategory = selectedCategoryInput.value;

    products.forEach(product => {
      const productCategory = product.dataset.category || '';
      const productPrice = parseInt(product.dataset.price || '0');
      const isAvailable = product.dataset.available === 'true';

      const matchCategory = (selectedCategory === 'الكل' || selectedCategory === productCategory);
      const matchPrice = productPrice <= maxPrice;
      const matchAvailability = !onlyAvailable || isAvailable;

      product.style.display = (matchCategory && matchPrice && matchAvailability) ? 'block' : 'none';
    });

    if (currentPrice && priceRange) {
      currentPrice.textContent = `${priceRange.value} دج`;
    }
  }

  if (priceRange) {
    priceRange.addEventListener('input', filterProducts);
  }

  categoryRadios.forEach(radio => {
    radio.addEventListener('change', filterProducts);
  });

  if (availabilityCheckbox) {
    availabilityCheckbox.addEventListener('change', filterProducts);
  }

  if (resetButton) {
    resetButton.addEventListener('click', function () {
      const defaultCategory = document.querySelector('input[name="category"][value="الكل"]');
      if (defaultCategory) defaultCategory.checked = true;

      if (priceRange) {
        priceRange.value = '50000';
      }
      if (currentPrice) {
        currentPrice.textContent = '50000 دج';
      }

      if (availabilityCheckbox) {
        availabilityCheckbox.checked = false;
      }

      filterProducts();
    });
  }

  filterProducts(); // تشغيل التصفية عند التحميل الأولي
});




// عرض عدد المنتجات
function updateProductCount() {
  const products = document.querySelectorAll('.product');
  const count = products.length;
  const countSpan = document.getElementById('productCount');

  if (count === 0) {
    countSpan.textContent = 'لا توجد منتجات';
  } else if (count === 1) {
    countSpan.textContent = '1 منتج';
  } else if (count <= 10) {
    countSpan.textContent = `${count} منتجات`;
  } else {
    countSpan.textContent = `${count} منتج`;
  }
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  updateProductCount();
});



function showNoProductsSection() {
  document.getElementById("no-products").style.display = "block";
}
function resetFilters() {
  console.log("إعادة ضبط الفلاتر");
  location.reload();
}


// اضهار عدم وجود منتجات
function updateProductDisplay() {
  const products = document.querySelectorAll('.product');
  const visibleProducts = Array.from(products).filter(p => p.style.display !== 'none');
  const noProductsMessage = document.getElementById('noProductsMessage');

  if (visibleProducts.length === 0) {
    noProductsMessage.classList.remove('hidden');
  } else {
    noProductsMessage.classList.add('hidden');
  }
}

document.querySelectorAll('input[type="radio"][name="category"]').forEach(radio => {
  radio.addEventListener('change', () => {
    updateProductDisplay();
  });
});

document.getElementById('resetButton').addEventListener('click', () => {
  document.getElementById('resetFilters').click();
});





// عرض المودل 
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const image = document.getElementById('modalImage');
  image.src = imageSrc;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}





// استهداف عنصر عداد السلة






// عداد المشتريات
function updateQuantity(button, change) {
  const row = button.closest('tr');
  const quantityElem = row.querySelector('.quantity');
  const unitPriceElem = row.querySelector('.unit-price');
  const totalPriceElem = row.querySelector('.total-price');

  let quantity = parseInt(quantityElem.textContent);
  const unitPrice = parseInt(unitPriceElem.getAttribute('data-price'));

  quantity += change;
  if (quantity < 1) quantity = 1;

  quantityElem.textContent = quantity;
  const total = quantity * unitPrice;

  totalPriceElem.textContent = formatPrice(total) + " دج";
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}




// حساب مجموع المشتريات

function updateSummary() {
  const rows = document.querySelectorAll("tbody tr");
  let subtotal = 0;

  rows.forEach(row => {
    const price = parseFloat(row.querySelector(".unit-price").dataset.price);
    const quantity = parseInt(row.querySelector(".quantity").textContent);
    const total = price * quantity;
    subtotal += total;

    row.querySelector(".total-price").textContent = `${total.toLocaleString()} دج`;
  });

  document.getElementById("subtotal").textContent = `${subtotal.toLocaleString()} دج`;

  const shipping = 800;
  document.getElementById("shipping").textContent = `${shipping.toLocaleString()} دج`;

  const total = subtotal + shipping;
  document.getElementById("total").textContent = `${total.toLocaleString()} دج`;
}

function updateQuantity(button, delta) {
  const quantitySpan = button.parentElement.querySelector(".quantity");
  let quantity = parseInt(quantitySpan.textContent);
  quantity += delta;
  if (quantity < 1) quantity = 1;
  quantitySpan.textContent = quantity;
  updateSummary();
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
  updateSummary();
}

document.getElementById("clear-cart").addEventListener("click", function () {
  document.querySelector("tbody").innerHTML = "";
  updateSummary();
});

window.addEventListener("DOMContentLoaded", function () {
  updateSummary();
});








// حدف منتج من عربة التسوق
function deleteRow(button) {
  const row = button.closest('tr');
  if (row) {
    row.remove();

    // تحقق هل باقي أي صفوف في tbody
    const tbody = document.querySelector('tbody');
    if (tbody.children.length === 0) {
      document.getElementById('cart-content').classList.add('hidden');
      document.getElementById('empty-cart-message').classList.remove('hidden');
    }
  }
}






// ازرار حدف المنتجات من السلة
function deleteRow(button) {
  const row = button.closest("tr");
  const title = row.querySelector("span").textContent.trim();

  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart = cart.filter(product => product.title !== title);
  sessionStorage.setItem("cart", JSON.stringify(cart));

  row.remove();
}


function clearCart() {
  sessionStorage.removeItem("cart");

  const tbody = document.getElementById("cart-table-body");
  if (tbody) {
    tbody.innerHTML = '';
  }

  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = "0";
    cartCountEl.classList.add("hidden");
  }

  console.log("✅ تم إفراغ السلة من sessionStorage");
}







document.addEventListener("DOMContentLoaded", function () {
  const cartCountEl = document.getElementById("cart-count");
  const alertBox = document.getElementById("alert-box");
  const alertTitle = document.getElementById("alert-title");
  const alertMessage = document.getElementById("alert-message");
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  updateCartCount();

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
      const productEl = this.closest(".product");

      const imageSrc = productEl.querySelector("img").getAttribute("src");
      const title = productEl.querySelector("h2").innerText.trim();
      const price = productEl.querySelector(".text-blue-600").innerText.trim();

      const product = { image: imageSrc, title, price };

      const alreadyInCart = cart.some(item => item.title === product.title);

      if (!alreadyInCart) {
        cart.push(product);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      } else {
        showAlert("⚠️ المنتج مضاف مسبقًا", "هذا المنتج مضاف مسبقًا إلى السلة.");
      }
    });
  });

  function updateCartCount() {
    const count = cart.length;
    cartCountEl.textContent = count;
    cartCountEl.classList.toggle("hidden", count === 0);
  }

  function showAlert(title, message) {
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    alertBox.classList.remove("hidden");

    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 3000);
  }
});





