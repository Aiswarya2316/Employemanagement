import React from 'react';
import Display from './components/Display';
import Add from './components/Add';


function App(){
    return(
        <div className="App">
            <h1> Employemanagement</h1>
            <a href="./components/Add"></a>
           
            <Display/>
            <Add/>
        </div>
    );
}

export default App;
