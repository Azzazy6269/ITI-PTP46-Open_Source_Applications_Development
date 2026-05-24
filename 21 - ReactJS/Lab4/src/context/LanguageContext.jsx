import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider =({children})=>{
    const [language,setLanguage] = useState('en');
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ع' : 'en'));
    };
    return <LanguageContext value={{language,setLanguage,toggleLanguage}}>{children}</LanguageContext>
}