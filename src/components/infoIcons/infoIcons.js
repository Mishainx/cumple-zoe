import '../infoIcons/infoIcons.scss'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function InfoIcons(){

    return(
        <div className='iconsContainer'>
            <a href="https://goo.gl/maps/NtU9XoMRa7mKqEwx5" target="_blank"><FaMapMarkerAlt className='icono'/></a>
            <a href="https://api.whatsapp.com/send?phone=5491132396935&text=Hola!%20tengo%20una%20%20consulta%20sobre%20el%20cumple!" target="_blank"><FaWhatsapp className="icono"/></a>
        </div>


    )
}

export default InfoIcons
