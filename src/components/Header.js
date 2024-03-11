import React from 'react';
import { Link } from "react-scroll";

import Logo from '../assets/carlosrubio.webp'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
          <img src={Logo} alt='logo' height={'80px'}  width={'200px'}/>
        <Link
         aria-label="contact"
            href='/contact'
            to="contact"
            smooth={true}
            spy={true}
            className='btn btn-sm flex justify-center items-center cursor-pointer'>
              Work with  me</Link>
      </div>
    </div>
  </header>;
};

export default Header;
