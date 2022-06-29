import { MyContext } from "./context";

import Stage1 from "./component/stage_1";
import Stage2 from "./component/stage_2";
import React,{ useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style/app.css'

const App = () =>{

const context = useContext(MyContext)

  return(
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Quien paga la cuenta ?</h1>
        {context.state.stage === 1 ? 
        <Stage1/>  
        :
        <Stage2/>   
        }
      </div>
    </div>
  )
}

export default App;