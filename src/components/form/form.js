import '../hadagatina/hadaGatina.scss'

function Form(){

    const prevForm=(e)=> e.preventDefault()

return(
    <form>
    <h2>Asistencia</h2>
    <div className='form'>
    <input type={'text'} placeholder={"Nombre y Apellido"} name="name"></input>
    <div>
        <input type='radio' value="Si">Si</input>
        <input type='radio' value="No">No</input>
    </div>
    <button>Enviar</button>
    </div>

</form>
)
}

export default Form