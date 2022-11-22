import '../invitacion/invitacion.scss'
import Gatirena from '../gatirena/gatirena'
import Pandy from '../pandy/pandy'
import HadaGatina from '../hadagatina/hadaGatina'
import Form from '../form/form'
import { useState } from 'react'
import React from 'react'

function Invitacion(){
    const [formulario,setFormulario] = useState(false)
    console.log(formulario)


    function formDisplay(){
        setFormulario(true)
    }

    return(
<div className='Invitacion'>
    {!formulario?
    <>
    <div  className='infoInvitacion'>
    <h3>Te espero para compartir juntos mis 5 años!</h3>
    <p>Día: 30 de diciembre de 2022</p>
    <p>Salón: Ciudad del Sol</p>
    <p>Horario: 17:30 a 20hs.</p>
    </div>
    <button onClick={()=>formDisplay()}>Confirmar</button>
    </>
:
<div className='infoInvitacion'>
<h2>Asistencia</h2>
<input type={'text'} placeholder={"Nombre y Apellido"} name="name"></input>
<div>    
<label>Si<input type="radio" value="Si" name="confirmacion"></input></label>
<label>No<input type="radio" value="No" name="confirmacion"></input></label>
</div>
<button>Enviar</button>

</div>
}
    <Gatirena/>
    <Pandy/>
    <HadaGatina/>
    
</div>

    )
}

export default Invitacion