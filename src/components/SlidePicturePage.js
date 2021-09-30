import React, { useState, useRef, useEffect } from "react";
import image1 from "../asset/images/블라우스.png";
import image2 from "../asset/images/블라우스2.png";
import image3 from "../asset/images/블라우스3.png";
import InfinitySlider from "./hooks/InfinitySlider";
import ProductList from "./hooks/ProductList";


// 이미지 테스트셋 
import shoes1 from "../asset/images/조던1.png";
import shoes2 from "../asset/images/조던2.png";
import shoes3 from "../asset/images/조던3.png";
import shoes4 from "../asset/images/조던4.png";
import shoes5 from "../asset/images/조던5.png";
import shoes6 from "../asset/images/조던6.png";

const SildePicturePage = () => {
    const [imageIndex,setImageIndex] = useState(0);
    const slideListRef = useRef(null);

    useEffect(() => {
        const changeWidth = imageIndex * 45;
        slideListRef.current.style.transform = `translateX(-${changeWidth}vw)`;
    }, [imageIndex]);

    return(
        <div className = "inline_container centerPosition">
            <div className ="slideContainer">
                <div ref={slideListRef} className = "slideList">
                    <div className = "inner"> <img src={image1}/> </div>
                    <div className = "inner"> <img src={image2}/> </div>
                    <div className = "inner"> <img src={image3}/> </div>
                </div>
                
                <div className = "slideButtonList">
                    <button className = {imageIndex === 0 ? "active" : ""} onClick={() => setImageIndex(0)}/>
                    <button className = {imageIndex === 1 ? "active" : ""} onClick={() => setImageIndex(1)}/>
                    <button className = {imageIndex === 2 ? "active" : ""} onClick={() => setImageIndex(2)}/>
                </div>
            </div>

            <div className='product_list_title'>
                <span>신상품</span>
            </div>
            <InfinitySlider imgs = {[shoes1,shoes2,shoes3,shoes4,shoes5,shoes6]}/>
            <div className='product_list_title'>
                <span>기획전</span>
            </div>
            <ProductList imgs = {[shoes1,shoes2,shoes3,shoes4,shoes5,shoes6,shoes1]}/>
        </div>
    )
}

export default SildePicturePage;