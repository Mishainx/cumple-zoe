import '../admin/admin.scss'
import {useEffect,useState} from 'react';
import {collection,getDocs,getFirestore} from 'firebase/firestore'

function Admin(){
    const [asistencias,setAsistencias] = useState([])

    useEffect(() => {
        const db = getFirestore ()
  
        const Invitaciones = collection(db, "Invitaciones");
        getDocs(Invitaciones).then((snapshot)=>{
          if(snapshot.size === 0){
            console.log("no results");
          }
          setAsistencias(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
        });
      }, []
      
);


return(
   <div className='Admin'>
    {asistencias.length > 0 ?
<>
<div className='tutu'>
 <h2>Invitados</h2>   
<table className='listaInvitados'>
<thead>
    <tr className="invitadoTitulos">
        <td className='itemProp'>Nombre</td>             
        <td className='itemProp'>Asistencia</td> 
    </tr>
</thead>
<tbody id="tbody">
{asistencias.map((compañero,i)=>
<tr key={i} className="compañeroItem">
<td className='compañeroProp'>{`${compañero.invitado.name}`}</td>  
<td className='compañeroProp'>{`${compañero.asistencia.name}`}</td>      
</tr>
)}
</tbody>
</table>
</div>




<div>

<div className="total">
<p className='itemTotal'>{`Total de asistencias confirmadas:${asistencias.length}`}</p>   
</div>

    
</div>
</>


:
<p></p>
}

   </div>
)
}

export default Admin