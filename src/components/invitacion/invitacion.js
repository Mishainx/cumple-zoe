import '../invitacion/invitacion.scss'
import Gatirena from '../gatirena/gatirena'
import Pandy from '../pandy/pandy'
import HadaGatina from '../hadagatina/hadaGatina'
import { useState } from 'react'
import React from 'react'
import {addDoc,collection,getFirestore} from "firebase/firestore"
import InfoIcons from '../infoIcons/infoIcons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Invitacion(){
    const [formulario,setFormulario] = useState(false)
    const [orderiD,setOrderId] = useState("")
    const [nombre,setNombre] = useState("")
    const [asistencia,setAsistencia] = useState("")


    console.log(formulario)

    const sendOrder=()=>{
    const order ={
            invitado: {name:`${nombre}`},
            asistencia:{name:`${asistencia}`}
        }
        
    if(nombre != "" && asistencia != ""){
        const db = getFirestore();
        const Invitaciones = collection(db,"Invitaciones");
        addDoc(Invitaciones,order).then(({id})=>setOrderId(id));


Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: '/img/pandi.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})

        }
    else{
        alert("Para confirmar envianos tu nombre y si podrás asistir!")
    }
    }



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
    <InfoIcons/>
    <button onClick={()=>formDisplay()}>Confirmar</button>
    </div>
    </>
:

<div className='infoInvitacion'>
<h2>Asistencia</h2>
<div className='formName'>
<h3>Tu Nombre</h3>
<input type={'text'} name="name" onChange={e=>setNombre(e.target.value)}></input>
</div>
<div className='formAssist'>
    <h3>Venís a jugar?</h3>    
    <div className='radioAssist'>
        <input type="radio" value="Si" name="confirmacion" onChange={e=>setAsistencia(e.target.value)}></input><p>Si, vamos a divertirnos!</p>
    </div>
    <div className='radioAssist'>
        <input type="radio" value="No" name="confirmacion" onChange={e=>setAsistencia(e.target.value)}></input><p>No puedo, que se diviertan!</p>
    </div>
</div>
<button onClick={()=>sendOrder()}>Enviar</button>
</div>

}
    <Gatirena/>
    <Pandy/>
    <HadaGatina/>
    
</div>

    )
}

export default Invitacion