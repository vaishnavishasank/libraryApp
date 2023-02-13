import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css" ;

const Header = () => {
    return(
        <div className="holder">
            <Header className="Header">
                <Navbar/>
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">find your book of choice.</h2><br/>
                    <p className="header-text fs-18 fw-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam reprehenderit, fuga corrupti dignissimos a dicta modi quaerat excepturi, maiores natus, magnam alias deserunt omnis consequatur culpa placeat porro voluptatum.</p>
                    <SearchForm  />              
                </div>
            </Header>
        </div>
    )
}

export default Header;