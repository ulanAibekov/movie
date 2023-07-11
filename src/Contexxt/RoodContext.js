import React, {useState} from 'react';
import {LanguageContext} from "./contex";

const RoodContext = ({children}) => {
    const [language,setLanguage] = useState("en-US")
    const [dark,setDark] = useState(false)
    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            dark,
            setDark,
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RoodContext;