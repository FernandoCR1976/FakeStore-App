import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './ProductDetails.css';

function ProductDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data));
    },[id]);

    if (!product) return <p>Cargando Productos...</p>;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
}

export default ProductDetails;