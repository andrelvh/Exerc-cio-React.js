import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const List = () => {
    const [cds, setCds] = useState([]);
    // Utilizamos o get para puxar os produtos de nossa API, encontrada em express/index.js
    useEffect(()=>{
        axios.get('http://localhost:3333').then(res =>{
            setCds(res.data);
        })
    },[]);
    return(
        <div>
            {/* Utilizamos o map como um foreach para puxar o valor de cada um dos elementos,
            que depois atribuímos no html */}
            {cds.map((cd,index)=>(
                <div key={index} className = "itens">
                    <label className = "titulo-itens">{cd.name}</label>
                    <br/><br/>
                    <img src={cd.image} alt={cd.name}/>
                    <br/>
                    <label className = "preco-itens">R${(cd.price).toFixed(2)}</label>
                    <br/>
                    <label>{cd.description}</label>
                    <br/><br/><br/>
                </div>
            ))}
        </div>
    );
};

export default List;