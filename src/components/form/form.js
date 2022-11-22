import '../hadagatina/hadaGatina.scss'

function Form(){

    const prevForm=(e)=> e.preventDefault()

return(
    <div>
    <h2>Datos del comprador</h2>
    <div className='form'>
    <input type={'text'} placeholder={"Nombre y Apellido"} name="name"></input>
    <button>Enviar</button>
    </div>

</div>
)
}

export default Form