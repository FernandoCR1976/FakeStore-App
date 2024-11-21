import React from "react";
import './Pagination.css';


function Pagination({ totalProducts, productsPerPage, setCurrentPage }){

    const pages = Math.ceil(totalProducts/productsPerPage);

    return(
        <div className="pagination">
            {[...Array(pages)].map((_, index)=>(
                <button key={index} onClick={()=> setCurrentPage(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
    );

}

export default Pagination;