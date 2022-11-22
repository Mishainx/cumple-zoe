import '../infoIcons/infoIcons.scss'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function InfoIcons(){

    return(
        <div className='iconsContainer'>
            <a src="https://goo.gl/maps/NtU9XoMRa7mKqEwx5"><FaMapMarkerAlt/></a>
        </div>


    )
}

export default InfoIcons