import React from 'react';
import CardPayments from "./components/card";
import {GlobalStyles} from "./components/card/CardStyledComponents";
import Translation from "./components/translation";

function App() {
  return (
    <Translation>
        <GlobalStyles/>
        <CardPayments/>
    </Translation>
  );
}

export default App;
