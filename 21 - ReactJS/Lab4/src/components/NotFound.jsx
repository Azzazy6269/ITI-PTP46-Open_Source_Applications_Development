import React , {useContext} from 'react'
import {LanguageContext} from '../context/LanguageContext'

const NotFound = () => {
  const {language}=useContext(LanguageContext);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest animate-bounce">
            404
          </h1>
          <div className="bg-indigo-600 text-white px-2 text-sm rounded rotate-12 absolute top-12 left-1/3 inline-block">
            {language==='en'?'Page Not Found':'الصفحة غير موجودة'}
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {language==='en'?'Lost in space?':'لا يمكنك الوصول'}
          </h2>
          <p className="text-base text-gray-600">
            {language==='en'?"The page you're looking for doesn't exist or has been moved to another universe.":'الصفحة التى تحاول الوصول اليها غير موجودة. ربما تم نقلها لعنوان اخر'}
            
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-md"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                path="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {language==='en'?'Go back home':'انتقل للصفخة الرئيسية'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;