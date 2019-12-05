import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg'
import './styles.css'

export default function New(){
    
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail]);

    function handleSubmit(){}

    return(
        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail"
                style={{ backgroundImage: `url("${preview}")` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={e=> setThumbnail(e.target.files[0])}/>
                <img src={camera} alt="select img"/>
            </label>
            <label htmlFor="company">Empresa*</label>
            <input 
                type="text"
                id='company'
                placeholder='Sua empresa incrível'
                value={company}
                onChange={e=> setCompany(e.target.value)}
            />
            
            <label htmlFor="techs">Tecnologias*<span>(separadas por vírgula)</span></label>
            <input 
                type="text"
                id='techs'
                placeholder='Quais tecnologias usam'
                value={techs}
                onChange={e=> setTechs(e.target.value)}
            />

            <label htmlFor="price">Valor da diária* <span>(em branco para gratuíto)</span></label>
            <input 
                type="text"
                id='price'
                placeholder='Valor cobrado por dia'
                value={price}
                onChange={e=> setPrice(e.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}