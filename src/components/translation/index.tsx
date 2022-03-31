import React, {FC} from 'react';
import {IntlProvider} from 'react-intl'
import English from '../../languages/en-US.json'
import Russian from '../../languages/ru-RU.json'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {selectLanguage} from "../../store/selectors/translationSelectors";
import {useActions} from "../../hooks/useActions";
import Ru from '../../assets/RU.png'
import En from '../../assets/US.png'
import {SetLanguagesContainer} from "./TranslationStyledComponents";

const Translation:FC = (props)=>{

    const local = navigator.language;
    let language = useTypedSelector(selectLanguage);
    const {SetEnglishLang, SetRussianLang} = useActions()

    let text = English;
   if(language === 'English') text = English
    else if(language === 'Russian') text = Russian


     return <IntlProvider locale={local}
                          messages={text}
            >
                <SetLanguagesContainer>
                    <img src={Ru}
                         alt="RU"
                         onClick={()=> SetRussianLang()}
                    />
                    <img src={En}
                         alt="Eng"
                         onClick={()=> SetEnglishLang()}
                    />
                </SetLanguagesContainer>
                {props.children}
            </IntlProvider>

}

export default Translation;