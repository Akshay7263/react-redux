
import { createContext, useState } from 'react';
import './App.css';
import UseEffectForCallBack from './components/UseEffectForCallBack';
import UseEffectHook from './components/UseEffectHook';
import UseStateHook from './components/UseStateHook';
import UseContextHook from './components/UseContextHook';
import UseRefHook from './components/UseRefHook';
import UseReducerHooks from './components/UseReducerHooks';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseMemoHooks from './components/UseMemoHooks';
import UseCallBack from './components/UseCallBack';
import UseCustomHook from './components/UseCustomHook';
export const VarContext = createContext();

function App() {
   const [value,setValue] = useState(true)
  return (
    <div className="App">
       
     {/* <UseStateHook /> */}

     {/* <UseEffectHook /> */}


     {/* {value? <UseEffectForCallBack />:<UseEffectHook /> }
      <button onClick={()=>setValue(!value)} >set value</button> */}



     <VarContext.Provider value={"akshay"}>  
     <UseContextHook />
     <UseReducerHooks /> 
     </VarContext.Provider> 


     
     {/* <UseRefHook /> */}

     {/*   */}
    {/* <UseLayoutEffectHook /> */}
    {/* <UseMemoHooks /> */}
    {/* <UseCallBack /> */}
    <UseCustomHook />

    </div>
  );
}

export default App;
