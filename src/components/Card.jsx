import {Link} from 'react-router-dom'

export default function Card(props) {
   return (
      <div>
          <button onClick={()=> props.onClose(props.id)}>X</button>
         <h2><Link to={`/detail/${props.id}`}>{props.name}</Link></h2>
         <h2>{props.status}</h2>
         <h2>{props.especie}</h2>
         <h2>{props.género}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}
