import React,{ useContext } from "react"
import { MyContext } from "../context"

const Stage2 = () =>{
    
    const context = useContext(MyContext)
    
    
    return(
        <>
            <div className="result_wrapper">
                <h3>El perdedor es:</h3>
                <div>{ context.state.result }</div>
            </div>
            <div className="action_button"
                onClick={ context.resetGame }>
                REINICIAR
            </div>
            <div className="action_button btn_2"
                onClick={ context.getNewLooser }>
                NUEVO PERDEDOR
            </div>
        </>
    )

}

export default Stage2