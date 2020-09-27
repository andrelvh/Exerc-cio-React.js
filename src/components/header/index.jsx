import React, { useState, useEffect } from 'react'
import './index.css'

const Header = () => {
    const [title, setTitle] = useState('')
    // Definir título da header como "CDs"
    useEffect(()=>{
        setTitle('Lista de CDs à venda')
    },[]);
    return(
        <div>
            <h3 className = "titulo">{title}</h3>
        </div>
    );
};

export default Header;