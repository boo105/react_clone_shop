import React from "react";
import styled from "styled-components";

import TestShoes from "../../asset/images/사카이.png";


export default function Product({img,index}) {
    return (
        <div className = "InfinitySlideElementContainer">
            <img src = {img}></img>
            <span className="shoesName">조던 {index + 1}</span>
            <img src = {TestShoes} className="upper-image"></img>
            <span>20,000</span>
        </div>
    )
}