import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ProductList({imgs}) {
    return (
       <PRODUCTS_CONTAINER>
           {imgs.map((item,index) => (
                <PRODUCT_ITEM>
                   <Product img = {item} index = {index}/>
                </PRODUCT_ITEM>
            ))}
       </PRODUCTS_CONTAINER>
    )
}

const PRODUCTS_CONTAINER = styled.div`
    width : 100%;
    display : flex;
    flex-flow : row wrap;
    padding : 2vh 0;
`;

const PRODUCT_ITEM = styled.div`
    width: 30%;
    height : 20vh;
    padding : 0 1.65%;

    .product {
        height : 70%
    }

    .item_img {
        height : 100%;
    }

    img {
        width : 100%;
        height : 100%;
    }
    
    
`;