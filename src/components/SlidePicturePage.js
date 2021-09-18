import React, { useState, useRef, useEffect } from "react";
import image1 from "../asset/images/블라우스.png";
import image2 from "../asset/images/블라우스2.png";
import image3 from "../asset/images/블라우스3.png";
import InfinitySlidePicturePage from "./InfinitySlidePicturePage";

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

            <InfinitySlidePicturePage/>
        </div>
    )
}

export default SildePicturePage;