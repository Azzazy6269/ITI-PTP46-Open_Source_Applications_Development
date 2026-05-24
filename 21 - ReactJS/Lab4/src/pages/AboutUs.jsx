import React , {useContext} from 'react'
import {LanguageContext} from '../context/LanguageContext'
import { useTheme } from '../store/Zustand/useThemeStore'
export const ErrorBoundary = ()=>{
  return (
    <Error/>
  )
}

const AboutUs = () => {
  const {language}=useContext(LanguageContext);
  const theme = useTheme((state) => state.theme);
  
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-700 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            {language === 'en' ? 'Our Story & Mission' : 'قصتنا ورسالتنا'}
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'We are a team of innovators, creators, and problem solvers dedicated to building tools that empower people and transform industries.' 
              : 'نحن فريق من المبتكرين، المبدعين، ومقدمي الحلول المكرسين لبناء أدوات تمكن الأفراد وتحدث ثورة في مجالات العمل.'}
          </p>
        </div>
      </section>

      {/* 2. Who We Are Section (Text + Placeholder) */}
      <section className={`${theme === 'dark' ? 'bg-gray-100' : 'bg-grey-100'} py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {language === 'en' ? 'Who We Are' : 'من نحن'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'en' 
                ? 'Founded in [Year], we started with a simple idea: to make technology more accessible and impactful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate aut? Omnis unde alias mollitia, sequi veritatis voluptatum inventore.' 
                : 'تأسسنا في عام [العام]، وبدأنا بفكرة بسيطة: جعل التكنولوجيا أكثر سهولة وقدرة على إحداث تأثير إيجابي. المبدأ الأساسي يعتمد على الابتكار المستمر وتقديم الأفضل دائماً للمجتمع.'}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'en' 
                ? "Today, we serve thousands of users globally, constantly pushing the boundaries of what's possible through collaboration, continuous learning, and a relentless focus on quality." 
                : 'اليوم، نحن نخدم آلاف المستخدمين حول العالم، ونسعى دائماً لتخطي حدود الممكن من خلال التعاون، التعلم المستمر، والتركيز الدائم على الجودة.'}
            </p>
          </div>
          {/* Visual Placeholder (Can be replaced with an actual <img> tag) */}
          <div className={`${theme === 'dark' ? 'bg-black' : 'bg-grey-100'} h-72 sm:h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200`}>
            <span className="text-gray-400 font-medium">
              
              <div className="flex flex-col leading-none">
                    <span className={`text-[100px] font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral'}`}>
                    ROFOUF
                    </span>
                    <span className="text-[100px] font-bold tracking-[0.2em] text-primary uppercase">
                    Market
                    </span>
                </div>
            </span>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-grey-50'} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
            </h2>
            <p className="text-gray-600 mt-2">
              {language === 'en' ? 'The foundational principles that guide everything we do.' : 'المبادئ الأساسية التي توجه كل ما نقوم به.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Innovation' : 'الابتكار'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We constantly question the status quo and look for creative solutions to complex problems.' 
                  : 'نحن نتحدى الوضع الراهن باستمرار ونبحث عن حلول إبداعية للمشكلات المعقدة.'}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Integrity' : 'النزاهة'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Trust is our currency. We operate with honesty, transparency, and deep respect for our community.' 
                  : 'الثقة هي عملتنا. نحن نعمل بصدق، شفافية، واحترام عميق لمجتمعنا.'}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Impact' : 'التأثير'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We measure our success by the tangible, positive outcomes we create for our clients.' 
                  : 'نحن نقيس نجاحنا بالنتائج الملموسة والإيجابية التي نصنعها لعملائنا.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;