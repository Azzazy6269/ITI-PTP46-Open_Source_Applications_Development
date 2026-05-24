import React , {useContext} from 'react'
import {LanguageContext} from '../context/LanguageContext'

const Loading = () => {
  const {language}=useContext(LanguageContext);
  return (
    
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          {language==='en'?'Loading...':'...تحميل'}
        </p>
      </div>
    </div>
    </>
  )
}

export default Loading