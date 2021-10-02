import React, { useState } from "react";
import styled from "styled-components";

import search_icon from "../../asset/icons/search_icon.ico";
import lock_icon from "../../asset/icons/lock.png";

import arrow_l from "../../asset/images/l.png";
import arrow_r from "../../asset/images/r.png";

const posts = [
    {
        "no" : 1,
        "title" : "배송문의",
        "name" : "ziov****",
        "date" : "1일전"
    },
    {
        "no" : 2,
        "title" : "결제완료! 배송일정은 어떻게될까요?",
        "name" : "err6****",
        "date" : "2일전"
    },
    {
        "no" : 3,
        "title" : "배송전 사이즈교환",
        "name" : "boo****",
        "date" : "2021-09-26"
    },

]

export default function Board() {
    const [page,setPage] = useState(1);

    function PrePagingnation() {
        if(page > 1)
            setPage(page - 1)
    }

    function NextPagingnation() {
        if(page < 5)
            setPage(page + 1)
    }

    return (
        <div className="boardContainer">
            <BOARD>
                <HEADER>
                    <li className="no">No</li>
                    <li className="title">제목</li>
                    <li className="name">글쓴이</li>
                    <li className="date">작성시간</li>
                </HEADER>
                {posts.map((post) => (
                    <BODY>
                        <li className="no">{post.no}</li>
                        <li className="title"><img src={lock_icon}/>{post.title}</li>
                        <li className="name">{post.name}</li>
                        <li className="date">{post.date}</li>
                    </BODY>
                ))}
            </BOARD>
            <BOARD_FOOTER>
                <form id="boardSearch" className="input-group" action="/" method="get">
                    <input className="controler" type="text" placeholder="Search"/>
                    <a href="/" onClick="$('#boardSearch').submit()">
                        <img src={search_icon}/>
                    </a>
                </form>
                <a className="btn" href="/" >글쓰기</a>
            </BOARD_FOOTER>
            <PAGING>
                <ul className="pagingnation">
                    <li><a  onClick = {() =>PrePagingnation()} ><img src={arrow_l}/></a></li>
                    <li className={page === 1 ? "active" : ""}><a onClick={() => setPage(1)}>1</a></li>
                    <li className={page === 2 ? "active" : ""}><a onClick={() => setPage(2)}>2</a></li>
                    <li className={page === 3 ? "active" : ""}><a onClick={() => setPage(3)}>3</a></li>
                    <li className={page === 4 ? "active" : ""}><a onClick={() => setPage(4)}>4</a></li>
                    <li className={page === 5 ? "active" : ""}><a onClick={() => setPage(5)}>5</a></li>
                    <li><a onClick = {() =>NextPagingnation()} ><img src={arrow_r}/></a></li>
                </ul>
            </PAGING>
        </div>

    )
}

const BOARD = styled.div`
    display : table;
    width : 100%;
    border-width : 1px 0 0 0;
    border-style : solid;
    border-color : #363636;

    ul {
        li {
            border-bottom : 1px solid #E1E1E1;
            display : table-cell;
        }

        li.no {
            text-align : center;
            width : 5%;
        }
    
        li.title {
            width : auto;
        }
    
        li.name {
            text-align : center;
            width : 10%;
        }
        li.date {
            text-align : center;
            width : 12%;
        }
    }
`;

const HEADER = styled.ul`
    list-style : none;
    margin-bottom : 0;
    display : table-row-group;
    clear : both;

    li {
        text-align : center;
        padding : 2% 1%;
    }
`;

const BODY = styled.ul`
    display : table-row-group;

    li {
        padding : 1%;
    }

    li.title {
        img {
            width : 14px;
            padding : 0 1%;
        }
    }

    li.name {
        color : rgba(54,54,54,0.4);
    }

    li.date {
        color : rgba(54,54,54,0.4);
    }
`;


const BOARD_FOOTER = styled.div`
    margin : 2% 0 0 0;
    text-align : center;
    display : flex;
    flex-direction : row;
    position : relative;

    form.input-group {
        display : table;
        position : relative;
        left : 40%;
        min-width : 220px;

        a{
            position : absolute;
            line-height : 230%;
            top : 0;
            right : 8%;
    
            img {
                width : 16px;
            }
        }
    }

    input {
        padding : 3% 6% ;
        display : table-cell;
        border-color : rgba(0, 0, 0, 0.1);

        border : 1px solid #ccc;
    }

    a.btn {
        position : absolute;
        right : 0;

        background-color : #363636;
        border-color : #363636;
        color : #ffffff;
        border-width : 1px;
        border-radius : 3px;
        padding : 1% 2%;

        font-size : 0.8rem;
        
        text-decoration : none;
    }  
`;

const PAGING = styled.nav`
    text-align : center;

    margin : 3% 0;

    ul.pagingnation {
        display : inline;
        list-style : disc;

        li {
            display : inline-block;
            float : none;
            margin : 0 1%;

            a {
                display : inline-block;
                text-decoration : none;
                color : rgba(54,54,54,0.4);
                cursor : pointer;
                width : 2vw;
                img {
                    width : 13px;
                }
            }
        }

        li.active {
            a{
                color : #363636;
            }
        }
    }

`;