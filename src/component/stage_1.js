import React,{ useState, useContext, useRef} from "react"
import { Button, Form, Alert } from "react-bootstrap"
import { MyContext } from "../context"


const Stage1 = () =>{
const context = useContext(MyContext)
const textInput = useRef()
const [error, setError] = useState([false,''])

const handleSubmit = (e) => {
    e.preventDefault() //Prevenir el submit del botón
    const value = capitalize(textInput.current.value)
    const validate = validateInput(value)

    if(validate){
        setError([false,''])
        textInput.current.value = ''
        context.addPlayer(value)
        console.log(value)
    }
}

const validateInput = (value) => {
    if(value === ''){
        setError([true,'Lo siento pero debes agregar a alguien'])
        return false
    }
    if(value.length <= 2){
        setError([true,'Lo siento, ese no es un nombre valido'])
        return false
    }
    return true
}

const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

return(
    <>
        <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
                <Form.Control 
                type="text" 
                placeholder="Ingrese un nombre"
                name='Jugador'
                ref={textInput}
                style={{ textTransform: 'capitalize'}}            
                />
            </Form.Group>

            {error[0] ? 
                <Alert>
                    {error[1]}
                </Alert>
            :null
            }

            <Button className="miami" variant="primary" type="submit">
                Agregar persona
            </Button>

            {context.state.players && context.state.players.length > 0 ?
            <>  
                <hr/>
                <div>
                    <ul className="list-group">
                        { context.state.players.map((player, idx)=>
                        (
                           <li key={idx} className="list-group-item d-flex
                           justify-content-between align-item-center
                           list-group-item-action">
                            {player}
                            <span className="badge badge-danger"
                            onClick={()=> context.removePlayer(idx)}>
                                X
                            </span>
                           </li>


                        ))
                        }
                    </ul>
                    <div 
                        className='action_button'
                        onClick={ () => context.next()}>
                        NEXT 
                    </div>
                </div>
            </>
            :null
            }

        </Form>
    </>
)

}

export default Stage1