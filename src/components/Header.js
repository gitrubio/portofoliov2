import React from 'react';
import { Link } from "react-scroll";

import Logo from '../assets/carlosrubio.png'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a  href='#'>
          <img src={Logo} alt='logo'   className='h-[80px]'/>
        </a>
        <Link
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
