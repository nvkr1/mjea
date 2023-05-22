import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/img/logo.png";
import MobileMenu from "./MobileMenu";

const HeaderFour = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <header className='header-wrap header-1 header-4'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <Link to='/'>
              <img src={mainLogo} height={60} widht={60} alt='logo2' />
            </Link>
          </div>
          <div className='header-right-area d-flex'>
            <div className='main-menu d-none me-0 pe-xl-5 me-xl-5 d-xl-block'>
              <ul>
                <li>
                  <a href='index.html'>НҮҮР</a>
                </li>
                <li>
                  <a href='#'>
                    ХОЛБООНЫ ТУХАЙ <i className='fal fa-plus'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/services'>УДИРДЛАГА</Link>
                    </li>
                    <li>
                      <Link to='/news'>БҮТЭЦ</Link>
                    </li>
                    <li>
                      <Link to='/contact'> ГИШҮҮД</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/contact'> БАРИМТ БИЧИГ</Link>
                </li>
                <li>
                  <Link to='/contact'> ЭКОСИСТЕМ</Link>
                </li>
                <li>
                  <Link to='/contact'> ХОЛБОО БАРИХ</Link>
                </li>
                <li>
                  <Link to='/'> EN</Link>
                </li>
              </ul>
            </div>
            <div className='header-right-elements d-flex align-items-center justify-content-between'>
              <div className='d-inline-block ms-4 d-xl-none'>
                <div className='mobile-nav-wrap'>
                  <div id='hamburger' onClick={handleMobileMenu}>
                    <i className='fal fa-bars text-white'></i>
                  </div>
                  <MobileMenu
                    mobileMenu={mobileMenu}
                    handleMobileMenu={handleMobileMenu}
                  />
                </div>
                <div className='overlay'></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderFour;
