import React, { useState } from "react";

import { Link } from "react-scroll";
const MobileMenu = ({ mobileMenu, handleMobileMenu }) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleIsOpen = () => {
  //   setIsOpen(!mobileMenu);
  // };
  return (
    <div className={mobileMenu ? "mobile-nav" : "mobile-nav show"}>
      <button onClick={handleMobileMenu} type='button' className='close-nav'>
        <i className='fal fa-times-circle'></i>
      </button>
      <nav className='sidebar-nav'>
        <ul className='metismenu' id='mobile-menu'>
          <li>
            <li>
              <a href='/'>НҮҮР</a>
            </li>
          </li>
          <li>
            <Link to='about' spy={true} smooth={true}>
              <button onClick={handleMobileMenu}>ХОЛБООНЫ</button>
            </Link>
            <ul className='sub-menu'>
              <li>
                <Link to='ceos' spy={true} smooth={true}>
                  <button onClick={handleMobileMenu}>УДИРДЛАГА</button>
                </Link>
              </li>
              <li>
                <Link to='structure' spy={true} smooth={true}>
                  <button onClick={handleMobileMenu}> БҮТЭЦ</button>
                </Link>
              </li>
              <li>
                <Link to='partners' spy={true} smooth={true}>
                  <button onClick={handleMobileMenu}> ГИШҮҮД</button>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href='/Documents'>
              <button onClick={handleMobileMenu}> БАРИМТ БИЧИГ</button>
            </a>
          </li>
          <li>
            <Link to='' spy={true} smooth={true}>
              <button onClick={handleMobileMenu}>ЭКОСИСТЕМ</button>
            </Link>
          </li>
          <li>
            <Link to='contacts' spy={true} smooth={true}>
              <button onClick={handleMobileMenu}> ХОЛБОО БАРИХ</button>
            </Link>
          </li>
          <li>
            <Link to='' spy={true} smooth={true}>
              EN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
