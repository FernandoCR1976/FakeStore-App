import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import './App.css';

function App (){
  const [ searchQuery, setSearchQuery] = useState('');

  const handleSearch =  (query)=>{
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<ProductGrid searchQuery={searchQuery}/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );

}

export default App;