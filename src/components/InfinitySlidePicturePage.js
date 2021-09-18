import React, { useState, useRef, useEffect } from "react";

// 이미지 테스트셋 
import shoes1 from "../asset/images/조던1.png";
import shoes2 from "../asset/images/조던2.png";
import shoes3 from "../asset/images/조던3.png";
import shoes4 from "../asset/images/조던4.png";
import shoes5 from "../asset/images/조던5.png";
import shoes6 from "../asset/images/조던6.png";

import TestShoes from "../asset/images/사카이.png";

const InfinitySlidePicturePage = () => {
    // 배열 map 기능을 활용하려고 배열로 선언해줌
    const shoes = [shoes1,shoes2,shoes3,shoes4,shoes5,shoes6];

    const [slideCount,setSlideCount] = useState(2);
    const shoesListRef = useRef(null); 

    // 이미지 크기 만큼 이동시키기때문에 정의해줌
    const imgSize = 11.3; 

    // 페이지에 처음 접속시 로딩 장면이 보이는 것이 있기때문에 처리해줌 
    // 연출의 차이긴 한데 페이지 접속시 바로 보이는것을 선호해서 그냥 해줌
    useEffect(() => {
        shoesListRef.current.style.transition = "0s";
    }, [])

    useEffect(() => {
        // console.log(`작동 중 ${slideCount}`)
        const moveNextDistance = slideCount * imgSize;
        shoesListRef.current.style.transform = `translateX(-${moveNextDistance}vw)`;

        const slideCountInterval = setInterval(() => {
            checkActiveAnimation();

            if(slideCount == 6)
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
                <div className = "InfinitySlideElementContainer">
                        <img src = {shoes[4]}></img>
                        <span className="shoesName">조던5</span>
                        <span>20,000</span>
                </div>
                <div className = "InfinitySlideElementContainer">
                        <img src = {shoes[5]}></img>
                        <span className="shoesName">조던6</span>
                        <span>20,000</span>
                </div>
                {shoes.map((item,index) => (
                    <div className = "InfinitySlideElementContainer">
                        <img src = {item}></img>
                        <img src = {TestShoes} className="upper-image"></img>
                        <span className="shoesName">조던{index + 1}</span>
                        <span>20,000</span>
                    </div>
                ))}
                <div className = "InfinitySlideElementContainer">
                        <img src = {shoes[0]}></img>
                        <span className="shoesName">조던1</span>
                        <span>20,000</span>
                </div>
                <div className = "InfinitySlideElementContainer">
                        <img src = {shoes[1]}></img>
                        <span className="shoesName">조던2</span>
                        <span>20,000</span>
                </div>
            </div>
        </div>
    )
}

export default InfinitySlidePicturePage;