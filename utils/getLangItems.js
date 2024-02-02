/* get arabic or english name depend on lang */

const names = [
    ['Mohab', 'مهاب'],
    ['Home', 'الرئيسية'],
    ['Services', 'الخدمات'],
    ['Cart', 'السلة'],
    ['About', 'عنا'],
    ['Login', 'تسجيل دخول'],
    ['Sign Up', 'انشاء حساب'],
    ['Check Our Services', 'تفقد خدماتنا'],
    ['Contact Us', 'تواصل معنا'],
    ['Print', 'طباعة'],
    ['Design', 'تصميم'],
    ['Advertise', 'اعلان'],
    ['Ads', 'اعلان'],
    ['Social Media', 'تواصل اجتماعي'], 
    ['Assisting', 'مساعدة'], 
    ['What we do ?', 'ماذا نقدم ؟'], 
    ['View Details', 'تفقد التفاصيل'], 
    ['Books Printing', 'طباعة الكتب'],
    ['Posters printing', 'طباعة الملصقات'],
    ['Cards design', 'تصميم البطاقات'],
    ['Sponsored ads', 'إعلانات مُرَعَّاة'],
    ['Cards printing', 'طباعة البطاقات'],
    ['Signs', 'اللافتات'],
    ['Business Card', 'بطاقة العمل'],
    ['Logo design', 'تصميم الشعار'],
    ['Stamps', 'الطوابع'],
    ['Document Print', 'طباعة المستندات'],
    ['Facebook Ads', 'إعلانات الفيسبوك'],
    ['Content Marketing', 'تسويق المحتوى'],
    ['Posters design', 'تصميم الملصقات'],
    ['Google Ads', 'إعلانات جوجل'],
    ['Banner', 'اللافتة الإعلانية'],
    ['About Us', 'تفاصيل عنا'],
    ['More Details', 'تفاصيل'],
    ['Get Help', 'تلقى مساعدة'],
    ['Inquire', 'استعلام'],
    ['Contact Specialist', 'تواصل مع خبير'],
    ['Payments', 'الدفع'],
    ['Support Us', 'ادعمنا'],
    ['Rate Us', 'قيمنا'],
    ['Email', 'البريد الالكتروني'],
    ['Enter your email', 'ادخل بريدك الالكتروني'],
    ['Password', 'كلمة المرور'],
    ['Enter your password', 'ادخل كلمة المرور'],
    ['Dark mode', 'الوضع المظلم'],
    ['Join Us', 'انضم لنا'],
    ['Subscribe', 'اشترك'],
    ['Mohab 2024', 'مهاب 2024'],
    ['Best Deal', 'افضل عرض'],
    ['View details', 'تفاصيل'],
    ['20% off', 'تخفيض 20%'],
    ['for every 1000 unit printed', 'لكل 1000 نسخة مطبوعة'],
    ['Search', 'ابحث'],
    ['Catagories', 'الاقسام'],
    ['Quantity', 'الكمية'],
    ['Total', 'المبلغ الكلي'],
    ['Price', 'السعر'],
    ['Cart', 'السلة'],
    ['Checkout', 'الدفع'],
    ['Enter Coupon', 'ادخل كوبون'],
    ['Use coupon', 'استعمل'],
    ['Sub Total', 'المجموع'],
    ['Shipping fee', 'الشحن'],
    ['Discount', 'التخفيض'],
    ['Tax fee', 'الضرائب'],
    ['Overall Total', 'المبلغ الكلي'],
    ['Pay with', 'ادفع ب'],
    ['Other', 'اخرى'],
    ['Delivery time', 'مدة التوصيل'],
    ['Customize', 'التعديل'],
    ['Add to cart', 'اضف الى السلة'],
    ['Added Successfully', 'تم الاضافة بنجاح'],
    ['Remove', 'ازالة'],
    ['Name', 'الاسم'],
    ['Enter a name', 'ادخل اسما'],
    ['Confirm Password', 'تأكيد كلمة المرور'],
    ['Confirm the password', 'أكد كلمة المرور'],
    ['Register', 'انضمام'],
    ['I agree to the', 'اوافق على'],
    ['terms of use', 'شروط الاستخدام'],
    ['policies', 'سياسات'],
    ['We are Printing company', 'نحن شركة طباعة'],
    ['We provide Printing, Designing & Advertising services', 'نقدم خدمات الطباعة و التصميم والاعلانات'],
    ['Did you like our website ?', 'هل اعجبت بموقعنا الالكتروني ؟'],
    ['Contact the developer to get your own website', 'تواصل مع المطور لتمتلك موقعك الخاص'],
    ['View services', 'خدماتنا'],
    ['More Services', 'خدمات اكثر']
];


const details = [
    ['LandingDetails', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim id alias corrupti ut at dolorem impedit doloribus dolores quo. Unde facere non harum pariatur quae odio fugit quidem neque ipsum.', 'تفاصيل عنا'],
    ['LandingHeaderDetails', 'Distinguish Yourself From Competitors With Unique Ads & Attractive Designs', 'تميز عن المنافسين باعلانات فريدة و تصاميم جذابة'],
    ['Books Printing', 'Get ready packaged & printed books, with any number of pages, we also provide free cover design.', 'احصل على كتب مطبوعة ومعبأة جاهزة، بأي عدد من الصفحات، كما نقدم تصميم غلاف مجاني.'],
    ['Posters printing', 'Print posters with specific attributes, material & scale.', 'اطبع الملصقات بخصائص محددة، ومواد ومقياس معين.'],
    ['Cards design', 'Attractive & powerful cards design, with the ability to make changes.', 'تصميم بطاقات جذابة وقوية، مع القدرة على إجراء التغييرات.'],
    ['Sponsored ads', 'More than 100 popular content creators are ready for advertising for you.', 'أكثر من 100 من مبدعي المحتوى الشهيرين جاهزون للإعلان لك.'],
    ['Cards printing', 'Print cards with ability to customize the scale, sharpness & materials.', 'طباعة البطاقات مع القدرة على تخصيص المقياس والحدة والمواد.'],
    ['Signs', 'Print signs with custom attributes with width & height up to 15 meters, we also provide free sign design.', 'اطبع اللافتات بخصائص مخصصة بعرض وارتفاع يصل إلى 15 مترًا، كما نقدم تصميم لافتات مجاني.'],
    ['Business Card', 'Print business cards with custom attributes.', 'اطبع بطاقات العمل بخصائص مخصصة.'],
    ['Logo design', 'Design logos with the ability to make changes.', 'تصميم الشعارات مع القدرة على إجراء التغييرات.'],
    ['Stamps', 'Order custom Stamps, with free design & custom attributes.', 'اطلب الطوابع المخصصة، مع تصميم مجاني وخصائص مخصصة.'],
    ['Document Print', 'Print any type of documents with specific requirements.', 'اطبع أي نوع من المستندات بمتطلبات محددة.'],
    ['Facebook Ads', 'Advertise in one of the most popular social media platforms.', 'أعلن في واحدة من أشهر منصات وسائل التواصل الاجتماعي.'],
    ['Content Marketing', 'Put your company in the compatitive zone with intelligent content marketing.', 'ضع شركتك في منطقة النافسة مع التسويق بالمحتوى الذكي.'],
    ['Posters design', 'Stand out by attractive & powerful poster design.', 'تألق بتصميم الملصقات الجذاب والقوي.'],
    ['Google Ads', 'Advertise in the most popular advertising platform.', 'أعلن في أكثر منصة إعلانات شعبية.'],
    ['Banner', 'Get your advertise banner with width & height up to 15 meters, we also provide free banner design.', 'احصل على لافتة إعلانية بعرض وارتفاع يصل إلى 15 مترًا، كما نقدم تصميم لافتات مجاني.'],
    ['Get Help', 'We will help & guide you', 'سنقدم لك المساعدة و التوجيهات'],
    ['Inquire', 'Ask questions to our specialists', 'اسأل خبرائنا'],
    ['Contact Specialist', 'Talk with one of our specialists', 'تكلم مباشرة مع خبير'],
    ['Payments', 'We have a lot of payments methods', 'استعلم عن طرق الدفع المناسبة لك'],
    ['Support Us', 'We will appreciate your support', 'سنقدر دعمك لنا'],
    ['Rate us', 'Rate our work in our Social Media pages', 'قيمنا على صفحاتنا على مواقع التواصل الاجتماعي']
]

export const getConstName = (desired, isAr) => {

    let desiredName = '';

    const searchName = desired.toUpperCase();

    console.log("searchName: ", searchName);

    for (let i = 0; i < names.length; i++) {
        if(names[i][0].toUpperCase() === searchName){
            desiredName = isAr && names[i][1].length > 0 ? names[i][1] : (names[i][0].length > 0 ? names[i][0] : desired)
        }
    }

    return desiredName;

};


/* get details in english or arabic from details array */
export const getConstDetails = (desired, isAr) => {

    let desiredDetails = '';

    const searchDetail = desired.toUpperCase();

    console.log("searchDetail: ", searchDetail);

    for (let i = 0; i < details.length; i++) {
        if(details[i][0].toUpperCase() === searchDetail){
            desiredDetails = isAr ? details[i][2] : details[i][1]
        }
    }

    return desiredDetails;

};