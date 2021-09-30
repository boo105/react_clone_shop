import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ProductSlide({img,index}) {
    return (
        <PRODUCT_ITEM>
            <Product img = {img} index={index}/>
        </PRODUCT_ITEM>
    )
}

const PRODUCT_ITEM = styled.div`
    width: 5.4%;
    padding : 0 0.1%;
`;

