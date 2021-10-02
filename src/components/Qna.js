import React, {useState} from "react";
import styled from "styled-components";
import Board from "./hooks/Board";

const Qna = () => {
    return (
        <div id="main">
            <div className="inline_container">
                <TOP>
                    <TITLE>Q&A</TITLE>
                    <DESCRIPTION>도움이 필요하시거나 질문이 있으시다면 문의 남겨주세요.</DESCRIPTION>
                    <DESCRIPTION>해결 방법을 찾아드립니다.</DESCRIPTION>
                </TOP>
                <Board/>
            </div>
        </div>
    )
}

const TOP = styled.div`
    padding : 4vh 0 3vh 0;
`;

const TITLE = styled.div`
    padding : 2vh 0;
    font-weight : bold;
`;

const DESCRIPTION = styled.div`
    font-weight : lighter;
    color : #707070;
`;

export default Qna;
