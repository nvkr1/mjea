import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Link } from "react-scroll";
const MobileMenu = ({ mobileMenu, handleMobileMenu }) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleIsOpen = () => {
  //   setIsOpen(!mobileMenu);
  // };
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={mobileMenu ? "mobile-nav" : "mobile-nav show"}>
      <button onClick={handleMobileMenu} type='button' className='close-nav'>
        <i className='fal fa-times-circle'></i>
      </button>
      <nav className='sidebar-nav'>
        <ul className='metismenu' id='mobile-menu'>
          {currentLanguage == "mn" ? (
            <li>
              <a href='/'>НҮҮР</a>
            </li>
          ) : (
            <li>
              <a href='/'>HOME</a>
            </li>
          )}
          {currentLanguage == "mn" ? (
            <li>
              <Link to='about' spy={true} smooth={true}>
                <button onClick={handleMobileMenu}>ХОЛБООНЫ ТУХАЙ</button>
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
          ) : (
            <li>
              <Link to='about' spy={true} smooth={true}>
                <button onClick={handleMobileMenu}>ABOUT</button>
              </Link>
              <ul className='sub-menu'>
                <li>
                  <Link to='ceos' spy={true} smooth={true}>
                    <button onClick={handleMobileMenu}>MANAGEMENT</button>
                  </Link>
                </li>
                <li>
                  <Link to='structure' spy={true} smooth={true}>
                    <button onClick={handleMobileMenu}>STRUCTURE</button>
                  </Link>
                </li>
                <li>
                  <Link to='partners' spy={true} smooth={true}>
                    <button onClick={handleMobileMenu}>MEMBERS</button>
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {currentLanguage == "mn" ? (
            <>
              <li>
                <a href='/Documents'> БАРИМТ БИЧИГ</a>
              </li>
              <li>
                <a href='/Ecosystem'> ЭКОСИСТЕМ</a>
              </li>
              <li>
                <Link to='contacts' spy={true} smooth={true}>
                  ХОЛБОО БАРИХ
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='/Documents'> DOCUMENTS</a>
              </li>
              <li>
                <a href='/Ecosystem'> ECOSYSTEM</a>
              </li>
              <li>
                <Link to='contacts' spy={true} smooth={true}>
                  CONTACT
                </Link>
              </li>
            </>
          )}
          {currentLanguage == "en" ? (
            <li>
              <a onClick={() => changeLanguage("mn")}>MN</a>
            </li>
          ) : (
            <li>
              <a onClick={() => changeLanguage("en")}>EN</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
