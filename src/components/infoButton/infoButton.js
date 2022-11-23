import '../infoButton/infoButton.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function InfoButton(){
    useEffect(()=>{
        AOS.init({duration:1500, delay:1000})
    },[])


    return(
        <div> 
    <button className='infoButton' data-aos="fade-up">Ver invitación!</button>
    </div>

    )
}

export default InfoButton