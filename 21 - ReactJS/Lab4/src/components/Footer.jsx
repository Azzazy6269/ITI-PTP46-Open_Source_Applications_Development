import React , {useContext} from 'react'
import {LanguageContext} from '../context/LanguageContext'

const Footer = () => {
const {language}=useContext(LanguageContext);

  return (
    <>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
            <h6 className="footer-title">{language==='en'?'Services':'خدمات'}</h6>
            <a className="link link-hover">{language==='en'?'Branding':'العلامة التجارية'}</a>
            <a className="link link-hover">{language==='en'?'Design':'التصميم'}</a>
            <a className="link link-hover">{language==='en'?'Marketing':'التسويق'}</a>
            <a className="link link-hover">{language==='en'?'Advertisement':'الإعلانات'}</a>
        </nav>
        <nav>
            <h6 className="footer-title">{language==='en'?'Company':'الشركة'}</h6>
            <a className="link link-hover">{language==='en'?'About us':'من نحن'}</a>
            <a className="link link-hover">{language==='en'?'Contact':'اتصل بنا'}</a>
            <a className="link link-hover">{language==='en'?'Jobs':'الوظائف'}</a>
            <a className="link link-hover">{language==='en'?'Press kit':'المركز الإعلامي'}</a>
        </nav>
        <nav>
            <h6 className="footer-title">{language==='en'?'Legal':'قانوني'}</h6>
            <a className="link link-hover">{language==='en'?'Terms of use':'شروط الاستخدام'}</a>
            <a className="link link-hover">{language==='en'?'Privacy policy':'سياسة الخصوصية'}</a>
            <a className="link link-hover">{language==='en'?'Cookie policy':'سياسة ملفات تعريف الارتباط'}</a>
        </nav>
    </footer>
    </>
  )
}

export default Footer