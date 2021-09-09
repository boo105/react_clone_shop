import React, { useState } from "react";

const NavBar = () => {

    const [categoryActive,setCategoryActive] = useState(false);
    const [customActive,setCustomActive] = useState(false);
    const [pieceActive,setPieceActive] = useState(false);
    const [veteransActive,setVeteransActive] = useState(false);
    const [geeksActive,setGeeksActive] = useState(false);

    return (
        <div className="header">
            <div className="topContainer">
                <div className="topLeftItems">
                    <span>WORLDWIDE SHIPPING</span>
                </div>
                <div className="topRightItems">
                    <i class="fas fa-search"></i>
                    <span>MY PAGE</span>
                    <span>Cart</span>
                    <span>LOGOUT</span>
                </div>
            </div>
            <div className="selectionContainer inline_container">
                <img id="logo" src="https://cdn.imweb.me/thumbnail/20201014/1f6a0149de065.png"></img>
                <ul>
                    <li onMouseOver={() => setCategoryActive(true)} onMouseLeave={() => setCategoryActive(false)}>CATEGOTY</li>
                    <li onMouseOver={() => setCustomActive(true)} onMouseLeave={() => setCustomActive(false)}>RE-MAKE · CUSTOM</li>
                    <li onMouseOver={() => setPieceActive(true)} onMouseLeave={() => setPieceActive(false)}>SHOW-PIECE</li>
                    <li onMouseOver={() => setVeteransActive(true)} onMouseLeave={() => setVeteransActive(false)}>VETERANS</li>
                    <li onMouseOver={() => setGeeksActive(true)} onMouseLeave={() => setGeeksActive(false)}>TO GEEKS</li>
                </ul>
            </div>
            <div className={categoryActive ? "dropdownCategory active" : "dropdownCategory"}></div>
            <div className={customActive ? "dropdownCustom active" : "dropdownCustom"}></div>
            <div className={pieceActive ? "dropdownPiece active" : "dropdownPiece"}></div>
            <div className={veteransActive ? "dropdownVeterans active" : "dropdownVeterans"}></div>
            <div className={geeksActive ? "dropdownGeeks active" : "dropdownGeeks"}></div>
        </div>
    );
};

export default NavBar;