import '../invitacion/invitacion.scss'
import { useState } from 'react'
import React from 'react'
import {addDoc,collection,getFirestore} from "firebase/firestore"
import InfoIcons from '../infoIcons/infoIcons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'


function Invitacion(){
    const [formulario,setFormulario] = useState(false)
    const [orderiD,setOrderId] = useState("")
    const [nombre,setNombre] = useState("")
    const [asistencia,setAsistencia] = useState("")
    const [confirmacion,setConfirmacion] = useState (false)

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
            title: 'Gracias por confirmar!',
            imageUrl: '/img/pandi.png',
            imageWidth: '40%',
            imageAlt: 'Custom image',
            showConfirmButton: 'false',
            confirmButtonText: 'ok'
                  })

                  setFormulario(false)
                  setConfirmacion(true)
    }
    
    else{
        console.log("hola")
        Swal.fire({
            title: 'Para confirmar envianos tu nombre y si podrás asistir!',
            imageUrl: '/img/catrat.png',
            imageWidth: '50%',
            imageAlt: 'Custom image',
            showConfirmButton: 'false',
            confirmButtonText: 'ok'
                  })
    }

    }



    function formDisplay(){
        setFormulario(true)
    }

    return(
<div className='Invitacion'> 
{!formulario ?
 <>
 <div className='hadaGatinaContainer'>
    <img className='hadaGatina' src='/img/hadagatina.png'/>
 </div>
 <div  className='infoInvitacion'>
    {!confirmacion?
     <h3>Confirmación recibida!</h3>:
     <div></div>
    }
 <h3>Te espero para compartir juntos mis 5 años!</h3>
 <p>Día: 30 de diciembre de 2022</p>
 <p>Salón: Ciudad del Sol</p>
 <p>Dirección: Nuestra Sra. de Loreto 2371
Saenz Peña, Buenos Aires.</p>
 <p>Horario: 17:30 a 20hs.</p>
 <InfoIcons/>
 {!confirmacion? 
 <button onClick={()=>formDisplay()}>Confirmar</button>:
 <div></div>
 }

 </div>

 <div className='gatirenaContainer'>
    <img className='gatirena' src='/img/pandi.png'/>
     <img className='gatirena r' src='/img/gatirena.png'/>
 </div>
 </>
:
<>
<div className='hadaGatinaContainer'>
    <img className='hadaGatina' src='/img/hadagatina.png'/>
 </div>
 <div className='infoInvitacion'>
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
<div className='gatirenaContainer'>
    <img className='gatirena' src='/img/pandi.png'/>
     <img className='gatirena r' src='/img/gatirena.png'/>
 </div>
</>

}         
    
</div>

    )
}

export default Invitacion