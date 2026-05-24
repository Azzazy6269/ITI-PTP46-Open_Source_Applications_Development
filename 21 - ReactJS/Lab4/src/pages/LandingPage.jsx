import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../store/Zustand/useThemeStore'
import { useSelector } from 'react-redux';
import { LanguageContext } from '../context/LanguageContext';

const LandingPage = () => {
    const theme = useTheme((state) => state.theme);
    const { language } = useContext(LanguageContext);

    const isEn = language === 'en';
    const isDark = theme === 'dark';

    const textColor = isDark ? 'text-white' : 'text-neutral';
    const textColorSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
    const sectionBgAlt = isDark ? 'bg-neutral' : 'bg-base-200';

    const content = {
        hero: {
            title: isEn ? 'Discover Premium Products Gallery' : 'اكتشف معرض المنتجات المميزة',
            subtitle: isEn
                ? 'Your one-stop destination for high-quality items, seamless shopping, and unbeatable deals. Start exploring today.'
                : 'وجهتك الواحدة للمنتجات عالية الجودة، تسوق سلس، وعروض لا مثيل لها. ابدأ الاستكشاف اليوم.',
            cta: isEn ? 'Shop Now' : 'تسوق الآن',
        },
        features: {
            title: isEn ? 'Why Choose Us' : 'لماذا تختارنا',
            f1: { t: isEn ? 'Fast Delivery' : 'شحن سريع', d: isEn ? 'To your doorstep' : 'إلى باب منزلك' },
            f2: { t: isEn ? 'Secure Payment' : 'دفع آمن', d: isEn ? '100% protected' : 'محمي بنسبة 100%' },
            f3: { t: isEn ? '24/7 Support' : 'دعم 24/7', d: isEn ? 'Dedicated team' : 'فريق متخصص' },
        },
        categories: {
            title: isEn ? 'Shop by Category' : 'تسوق حسب الفئة',
            c1: isEn ? 'Electronics' : 'إلكترونيات',
            c2: isEn ? 'Fashion' : 'موضة',
            c3: isEn ? 'Home Decor' : 'ديكور منزل',
        },
        finalCta: {
            title: isEn ? 'Ready to Upgrade Your Shopping?' : 'جاهز للارتقاء بتسوقك؟',
            subtitle: isEn ? 'Join thousands of satisfied customers.' : 'انضم لآلاف العملاء الرضيين.',
            btn: isEn ? 'Create Account' : 'أنشئ حساباً',
        }
    };

    return (
        <div className={`w-full min-h-screen ${isDark ? 'bg-black' : 'bg-base-100'} ${textColor}`} style={{ direction: isEn ? 'ltr' : 'rtl' }}>

            {/* --- 1. HERO SECTION --- */}

            <div className={`hero min-h-[80vh] ${sectionBgAlt}`}>
                <div className="hero-content text-center py-20 px-4">
                    <div className="max-w-3xl">
                        <h1 className={`text-5xl md:text-6xl font-extrabold ${isDark ? 'text-blue-400' : 'text-blue-600'} leading-tight`}>
                            {content.hero.title}
                        </h1>
                        <p className={`py-8 text-xl md:text-2xl ${textColorSecondary} max-w-2xl mx-auto`}>
                            {content.hero.subtitle}
                        </p>
                        {/* استخدام نفس ستايل أزرار الـ Navbar الأساسية */}
                        <NavLink to="/products" className="btn btn-primary btn-lg rounded-full px-10 shadow-lg hover:scale-105 transition-transform">
                            {content.hero.cta}
                            {isEn ? ' →' : ' ←'}
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* --- 2. FEATURES SECTION --- */}
            <div className="container mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">{content.features.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {/* Feature 1 */}
                    <div className={`p-8 rounded-2xl ${sectionBgAlt} shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                        <div className="text-secondary text-5xl mb-6">🚚</div>
                        <h3 className="text-2xl font-semibold mb-3">{content.features.f1.t}</h3>
                        <p className={`${textColorSecondary} text-lg`}>{content.features.f1.d}</p>
                    </div>
                    {/* Feature 2 */}
                    <div className={`p-8 rounded-2xl ${sectionBgAlt} shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                        <div className="text-secondary text-5xl mb-6">🔒</div>
                        <h3 className="text-2xl font-semibold mb-3">{content.features.f2.t}</h3>
                        <p className={`${textColorSecondary} text-lg`}>{content.features.f2.d}</p>
                    </div>
                    {/* Feature 3 */}
                    <div className={`p-8 rounded-2xl ${sectionBgAlt} shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                        <div className="text-secondary text-5xl mb-6">🛠️</div>
                        <h3 className="text-2xl font-semibold mb-3">{content.features.f3.t}</h3>
                        <p className={`${textColorSecondary} text-lg`}>{content.features.f3.d}</p>
                    </div>
                </div>
            </div>

            {/* --- 3. CATEGORIES PREVIEW SECTION --- */}
            <div className={`${sectionBgAlt} py-24 px-6`}>
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">{content.categories.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { name: content.categories.c1, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
                { name: content.categories.c2, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400' },
                { name: content.categories.c3, img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400' },
            ].map((cat, index) => (
                <div
                    key={index}
                    className="card bg-base-100 shadow-2xl image-full group cursor-pointer overflow-hidden rounded-2xl h-10/12"
                >
            <figure className="h-full">
                <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </figure>

            <div className="card-body justify-end items-center">
                <h2 className="card-title text-3xl font-bold text-white tracking-wide">
                    {cat.name}
                </h2>
            </div>
        </div>
    ))}
</div>
                </div>
            </div>

            {/* --- 4. FINAL CTA SECTION --- */}
            <div className="container mx-auto py-24 px-6 text-center">
                <div className={`py-16 px-8 rounded-3xl ${isDark ? 'bg-black border border-gray-800' : 'bg-base-100 border border-gray-100'} shadow-2xl`}>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        {content.finalCta.title}
                    </h2>
                    <p className={`text-xl md:text-2xl ${textColorSecondary} mb-12 max-w-xl mx-auto`}>
                        {content.finalCta.subtitle}
                    </p>
                    <NavLink to="/Register" className={`btn btn-soft btn-secondary btn-lg rounded-2xl px-12 text-lg hover:scale-105 transition-transform ${isDark ? 'shadow-blue-900/30' : ''} shadow-xl`}>
                        {content.finalCta.btn}
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;