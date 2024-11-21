import React,{useState} from "react";
import './Header.css';

function Header ({ onSearch }){
    const [search,setSearch] = useState('');

    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearch(query);
        onSearch(query); //pasando lo que vamos digitando al componente principal
    };

    return (
        <header className="header">
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Buscar Productos..."
            />
        </header>
    );

}

export default Header;