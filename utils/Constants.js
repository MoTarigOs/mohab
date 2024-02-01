import BooksPrintingImage from '../assets/images/services_images/books_printing.jpg';
import PosterPrintingImage from '../assets/images/services_images/poster_printing.jpg';
import CardsDesignImage from '../assets/images/services_images/cards_design.jpg';
import SponsoredAdsImage from '../assets/images/services_images/sponsored_ads.jpg';
import CardsPrintingImage from '../assets/images/services_images/cards_printing.jpg';
import SignsImage from '../assets/images/services_images/signs.jpg';
import BusinessCardImage from '../assets/images/services_images/business_card.jpg';
import LogoDesignImage from '../assets/images/services_images/logo_design.png';
import StampsImage from '../assets/images/services_images/stamps.jpg';
import DocumentPrintingImage from '../assets/images/services_images/document_printing.jpg';
import FacebookAdsImage from '../assets/images/services_images/facebook_ads.jpg';
import ContentMarketingImage from '../assets/images/services_images/content_marketing.jpg';
import GoogleAdsImage from '../assets/images/services_images/google_ads.jpg';
import BannerImage from '../assets/images/services_images/banner.jpg';

export const servicesArray = [
    { _id: '0', title: 'Books Printing', catagory: ['Print'], desc: 'Get ready packaged & printed books, with any number of pages, we also provide free cover design.', minQuantity: 100, quantityStep: 1, price: 5, pic: BooksPrintingImage},
    { _id: '1', title: 'Posters printing', catagory: ['Print'], desc: 'Print posters with specific attributes, material & scale.', minQuantity: 1000, quantityStep: 5, price: 0.12, sale: 'Hot', pic: PosterPrintingImage},
    { _id: '2', title: 'Cards design', catagory: ['Design'], desc: 'Attractive & powerful cards design, with the ability to make changes.', minQuantity: 1, quantityStep: 1, price: 14.99, sale: '20% off', pic: CardsDesignImage},
    { _id: '3', title: 'Sponsored ads', catagory: ['Ads'], desc: 'More than 100 popular content creators are ready for advertising for you.', minQuantity: 100000, quantityStep: 1000, price: 0.001, pic: SponsoredAdsImage},
    { _id: '4', title: 'Cards printing', catagory: ['Print'], desc: 'Print cards with ability to customize the scale, sharpness & materials.', minQuantity: 1000, quantityStep: 5, price: 0.7, pic: CardsPrintingImage},
    { _id: '5', title: 'Signs', catagory: ['Print'], desc: 'Print signs with custom attributes with width & height up to 15 meters, we also provide free sign design.', minQuantity: 1000, quantityStep: 5, price: 0.1, sale: 'New', pic: SignsImage},
    { _id: '6', title: 'Business Card', catagory: ['Print'], desc: 'Print business cards with custom attributes.', minQuantity: 1000, quantityStep: 5, price: 0.1, pic: BusinessCardImage},
    { _id: '7', title: 'Logo design', catagory: ['Design'], desc: 'Design logos with the ability to make changes.', minQuantity: 1, quantityStep: 1, price: 25, sale: 'Hot', pic: LogoDesignImage},
    { _id: '8', title: 'Stamps', catagory: ['Print', 'Design'], desc: 'Order custom Stamps, with free design & custom attributes.', minQuantity: 5, quantityStep: 1, price: 35, sale: 'New', pic: StampsImage},
    { _id: '9', title: 'Document Print', catagory: ['Print'], desc: 'Print any type of documents with specific requirements.', minQuantity: 100, quantityStep: 1, price: 0.79, pic: DocumentPrintingImage},
    { _id: '10', title: 'Facebook Ads', catagory: ['Ads'], desc: 'Advertise in one of the most popular social media platforms.', minQuantity: 100000, quantityStep: 1000, price: 0.001, pic: FacebookAdsImage},
    { _id: '11', title: 'Content Marketing', catagory: ['Ads'], desc: 'Put your company in the compatitive zone with intelligent content marketing.', minQuantity: 1, quantityStep: 1, price: 120, pic: ContentMarketingImage},
    { _id: '12', title: 'Posters design', catagory: ['Design'], desc: 'Stand out by attractive & powerful poster design.', minQuantity: 1, quantityStep: 1, price: 24.50, sale: 'Hot', pic: PosterPrintingImage},
    { _id: '13', title: 'Google Ads', catagory: ['Ads'], desc: 'Advertise in the most popular advertising platform.', minQuantity: 100000, quantityStep: 1000, price: 0.001, pic: GoogleAdsImage},
    { _id: '14', title: 'Banner', catagory: ['Print', 'Design'], desc: 'Get your advertise banner with width & height up to 15 meters, we also provide free banner design.', minQuantity: 1000, quantityStep: 5, price: 0.1, sale: 'New', pic: BannerImage},
];

export const aboutUsDetails = (type, isArabic) => {

    switch (type){
        case 'home-page-paragraph':
            return isArabic ? "مهاب هي شركة ديناميكية متخصصة في مجموعة شاملة من الخدمات بما في ذلك حلول الطباعة والتصميم والإعلان. مع الالتزام بالتميز والابتكار، تستفيد موهاب من التكنولوجيا المتطورة والخبرة الإبداعية لتقديم نتائج لا مثيل لها لعملائها. بدءًا من تطوير المفهوم وحتى التنفيذ النهائي، يعمل فريق موهاب المتفاني بشكل وثيق مع العملاء لتحقيق رؤيتهم على أرض الواقع، سواء من خلال التصميمات الجذابة أو الطباعة عالية الجودة أو الحملات الإعلانية المؤثرة. مع التركيز على رضا العملاء والاهتمام بالتفاصيل، يضمن موهاب تنفيذ كل مشروع بدقة واحترافية، مما يجعلهم شريكًا موثوقًا للشركات والمؤسسات التي تسعى إلى حلول تسويقية وعلامات تجارية عالية المستوى." : "Mohab is a dynamic company specializing in a comprehensive range of services including printing, designing, and advertising solutions. With a commitment to excellence and innovation, Mohab leverages cutting-edge technology and creative expertise to deliver unparalleled results to its clients. From concept development to final execution, Mohab's dedicated team works closely with customers to bring their visions to life, whether through eye-catching designs, high-quality printing, or impactful advertising campaigns. With a focus on customer satisfaction and attention to detail, Mohab ensures that each project is executed with precision and professionalism, making them a trusted partner for businesses and organizations seeking top-tier marketing and branding solutions."
        case 'home-page-short':
            return isArabic ? "تقدم مهاب خدمات الطباعة والتصميم والإعلان من الدرجة الأولى، حيث تمزج بين الابتكار والدقة لإضفاء الحيوية على رؤى العملاء." : "Mohab offers top-notch printing, design, and advertising services, blending innovation with precision to bring clients' visions to life."
        case 'home-page-landing':
            return !isArabic ? "Mohab offers top-notch printing, design, and advertising services, blending innovation with precision to bring clients' visions to life. Trusted for quality and creativity, Mohab stands as a premier partner for businesses seeking impactful marketing solutions." : "تقدم مهاب خدمات الطباعة والتصميم والإعلان من الدرجة الأولى، حيث تمزج بين الابتكار والدقة لإضفاء الحيوية على رؤى العملاء. نظرًا لثقته في الجودة والإبداع، يعد مهاب شريكًا رئيسيًا للشركات التي تبحث عن حلول تسويقية مؤثرة."
        case 'about-page-1':
            return isArabic ? "مهاب هي وجهتك الشاملة لاحتياجات الطباعة والتصميم والإعلان. مع التركيز على التميز ورضا العملاء، نقوم بتحويل الأفكار إلى صور جذابة وحملات تسويقية فعالة، مما يجعلنا الخيار المفضل للشركات التي تهدف إلى إحداث تأثير دائم." : "Mohab is your one-stop destination for printing, design, and advertising needs. With a focus on excellence and client satisfaction, we transform ideas into captivating visuals and effective marketing campaigns, making us the preferred choice for businesses aiming to make a lasting impact."
        case 'about-page-2':
            return isArabic ? "في مهاب، نتميز في خدمات الطباعة والتصميم والإعلان، حيث ندمج الإبداع مع الخبرة لتقديم نتائج استثنائية. تحظى بثقة الشركات من جميع الأحجام، ونحن نرفع مستوى العلامات التجارية من خلال الحلول المبتكرة والاهتمام الشخصي، ونضع معايير جديدة في الصناعة." : "At Mohab, we excel in printing, designing, and advertising services, merging creativity with expertise to deliver exceptional results. Trusted by businesses of all sizes, we elevate brands through innovative solutions and personalized attention, setting new standards in the industry."    
        case 'about-page-3':
            return isArabic ? "مهاب: حيث تجتمع الطباعة والتصميم والإعلان مع التميز. ارفع مستوى علامتك التجارية من خلال حلولنا المبتكرة وخدماتنا الشخصية." : "Mohab: Where printing, design, and advertising meet excellence. Elevate your brand with our innovative solutions and personalized service."    
    
    }
};

export const catagoriesArray = [
    'Print', 'Design', 'Ads'
];

export const getServiceSaleBgColor = (type) => {
    switch (type){
        case 'Hot':
            return 'red';
        case 'New':
            return '#98eb00';   
        default:
            return 'orange';
    }
};