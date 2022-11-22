import '../invitacion/invitacion.scss'
import Gatirena from '../gatirena/gatirena'
import Pandy from '../pandy/pandy'
import HadaGatina from '../hadagatina/hadaGatina'

function Invitacion(){
    return(
<div className='Invitacion'>
    <h2>Info</h2>
    <div  className='infoInvitacion'>
        <h3>Te espero para compartir juntos mis 5 años!</h3>
        <p>Día: 30 de diciembre de 2022</p>
        <p>Salón: Ciudad del Sol</p>
        <p>Horario: 17:30 a 20hs.</p>
    </div>
    <button>Confirmar</button>
    <Gatirena/>
    <Pandy/>
    <HadaGatina/>
    
</div>

    )
}

export default Invitacion