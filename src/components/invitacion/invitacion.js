import '../invitacion/invitacion.scss'
import Gatirena from '../gatirena/gatirena'
import Pandy from '../pandy/pandy'
import HadaGatina from '../hadagatina/hadaGatina'
import Form from '../form/form'
import { useState } from 'react'
import React from 'react'
import {addDoc,collection,getFirestore} from "firebase/firestore"
import { Link } from 'react-router-dom';


function Invitacion(){
    const [formulario,setFormulario] = useState(false)
    const [orderiD,setOrderId] = useState("")
    const [nombre,setNombre] = useState("")
    const [asistencia,setAsistencia] = useState("")


    console.log(formulario)

    const sendOrder=()=>{
        console.log("hola")
        console.log(asistencia)
    const order ={
            invitado: {name:`${nombre}`},
            asistencia:{name:`${asistencia}`}
        }
        
    if(nombre != "" && asistencia != ""){
        const db = getFirestore();
        const Invitaciones = collection(db,"Invitaciones");
        addDoc(Invitaciones,order).then(({name})=>setOrderId(name));
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
    </div>
    <button onClick={()=>formDisplay()}>Confirmar</button>
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