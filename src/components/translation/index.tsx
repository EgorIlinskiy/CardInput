import React, {FC, useState} from 'react';
import { IntlProvider} from 'react-intl'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {selectLanguage} from "../../store/selectors/translationSelectors";
import {useActions} from "../../hooks/useActions";
import {SetLanguagesContainer} from "./TranslationStyledComponents";
import {messages} from '../../languages'
import {LanguageString} from "../../types/languageTypes";

const Translation:FC = (props)=>{

    const local = navigator.language;
    const selectedLanguage = useTypedSelector(selectLanguage);
    const {setLanguage} = useActions()
    const [lang, setLang] = useState('English')

    const selectingLanguage = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setLang(e.target.value)
        let newLang = e.target.value as LanguageString
        setLanguage(newLang)
    }

    const options = ()=>{
       return Object.getOwnPropertyNames(messages).map((language,index)=>{
            return <option key={index}
                           value={`${language}`}
            >
                {language}
            </option>
        })
    }

     return <IntlProvider locale={local}
                          messages={messages[selectedLanguage]}
            >
                <SetLanguagesContainer>
                    <select name="select"
                            onChange={selectingLanguage}
                            value={lang}
                    >
                        {options()}
                    </select>
                </SetLanguagesContainer>
                {props.children}
            </IntlProvider>
}

export default Translation;