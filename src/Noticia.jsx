import { useState } from 'react';
import Button from './Button';
import './Noticia.css';

function Noticia({horario, desc}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);

    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }

    return(
        <div className='card'>
            <div className='data'>{horario}</div>
            <p className="desc">{desc}</p>
        </div>
    );
}
export default Noticia;