import React from 'react';
import CardPayments from "./components/card";
import {GlobalStyles} from "./components/card/CardStyledComponents";

function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <CardPayments/>
    </div>
  );
}

export default App;
