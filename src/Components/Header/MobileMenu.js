import React from "react";

import { Link } from "react-scroll";
const MobileMenu = ({ mobileMenu, handleMobileMenu }) => {
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
              ХОЛБООНЫ ТУХАЙ
            </Link>
            <ul className='sub-menu'>
              <li>
                <Link to='ceos' spy={true} smooth={true}>
                  УДИРДЛАГА
                </Link>
              </li>
              <li>
                <Link to='structure' spy={true} smooth={true}>
                  БҮТЭЦ
                </Link>
              </li>
              <li>
                <Link to='partners' spy={true} smooth={true}>
                  ГИШҮҮД
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href='/Documents'> БАРИМТ БИЧИГ</a>
          </li>
          <li>
            <Link to='' spy={true} smooth={true}>
              ЭКОСИСТЕМ
            </Link>
          </li>
          <li>
            <Link to='contacts' spy={true} smooth={true}>
              ХОЛБОО БАРИХ
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
