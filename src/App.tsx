import React from 'react';
import CardPayments from "./components/card";
import {GlobalStyles} from "./components/card/CardStyledComponents";
import Translation from "./components/translation";
import {IntlProvider} from 'react-intl'
import English from './languages/en-US.json'
import Russian from './languages/ru-RU.json'

const local = navigator.language;

let lang:any;
if(local === "en-US"){
    lang = English
}
else if (local === 'ru-RU')
    lang = Russian
else lang = English

function App() {
  return (
    <IntlProvider locale={local}
                    messages={lang}>
        <Translation/>
        <GlobalStyles/>
        <CardPayments/>
    </IntlProvider>
  );
}

export default App;
