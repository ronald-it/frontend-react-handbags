import React from "react";

function Product({imageSrc, imageAlt, bagName, price}) {
    return <article>
        <span>Best seller</span>
        <img src={imageSrc} alt={imageAlt}/>
        <p>{bagName}</p>
        <h4>{price}</h4>
    </article>
}

export default Product;