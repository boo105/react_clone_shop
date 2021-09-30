import React, { useState, useRef, useEffect } from "react";
import ProductSlide from "./ProductSlide";

const InfinitySlider = ({imgs}) => {
    // 배열 map 기능을 활용하려고 배열로 선언해줌
    const imgsLength = imgs.length;
    const [slideCount,setSlideCount] = useState(2);
    const shoesListRef = useRef(null); 

    // 페이지에 처음 접속시 로딩 장면이 보이는 것이 있기때문에 처리해줌 
    // 연출의 차이긴 한데 페이지 접속시 바로 보이는것을 선호해서 그냥 해줌
    useEffect(() => {
        shoesListRef.current.style.transition = "0s";
    }, [])

    useEffect(() => {
        //console.log(`작동 중 ${slideCount}`)
        shoesListRef.current.style.transform = `translateX(-${slideCount * 5.6}%)`;

        const slideCountInterval = setInterval(() => {
            checkActiveAnimation();
            
            if(slideCount == imgsLength)
                resetSlide();
            else 
                nextSlide();
        },2000);
        
        // 파기 시 인터벌도 clear 시켜줌
        return () => clearInterval(slideCountInterval);
    }, [slideCount]);

    function checkActiveAnimation() {
        if (slideCount == 0 || slideCount == 2)
            shoesListRef.current.style.transition = "all 0.8s ease-in-out";
    }

    function resetSlide () {
        shoesListRef.current.style.transition = "0s";
        setSlideCount(0);
    }

    function nextSlide() {
        setSlideCount(slideCount + 1);
    }

    // 앞뒤로 붙여주는 부분이 너무 수동적이긴 한데 나중에 깔끔하게 바꾸기 ㄱㄱ 씽
    return(
        <div className="InfinityContainer">
            <div ref ={shoesListRef} className="shoesList">
                <ProductSlide img = {imgs[imgsLength - 2]} index = {imgsLength - 2}/>
                <ProductSlide img = {imgs[imgsLength - 1]} index = {imgsLength - 1}/>
                {imgs.map((item,index) => (
                    <ProductSlide img = {item} index = {index}/>
                ))}
                <ProductSlide img = {imgs[0]} index = {0}/>
                <ProductSlide img = {imgs[1]} index = {1}/>
            </div>
        </div>
    )
}

export default InfinitySlider;