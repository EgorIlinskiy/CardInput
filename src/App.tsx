import React from 'react';
import Counter from "./components/counter";
import InputCard from "./components/card/input";


function App() {
  return (
    <div className="App" style={{width:'600px',margin:'0 auto'}}>
        <Counter/>
        <InputCard placeholder={'4584'}
                    label='Credit card number'
                   isHidden={false}
                   maxSize={16}
        />
    </div>
  );
}

export default App;
