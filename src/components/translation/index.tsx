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
import {PossibleLanguages} from "../../types/languageTypes";

const Translation:FC = (props)=>{

    const local = navigator.language;
    let language = useTypedSelector(selectLanguage);
    const {setEnglishLang, setRussianLang} = useActions()
    let messages

   switch(language){
       case PossibleLanguages.ENGLISH:
           messages = English
           break;
       case PossibleLanguages.RUSSIAN:
           messages = Russian
           break;
       default: messages = English
   }

     return <IntlProvider locale={local}
                          messages={messages}
            >
                <SetLanguagesContainer>
                    <img src={Ru}
                         alt="RU"
                         onClick={()=> setRussianLang()}
                    />
                    <img src={En}
                         alt="Eng"
                         onClick={()=> setEnglishLang()}
                    />
                </SetLanguagesContainer>
                {props.children}
            </IntlProvider>
}

export default Translation;