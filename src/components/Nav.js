import React from "react";
//icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
//links
import { Link } from "react-scroll";

//sound
import useSound from 'use-sound';
import soundEffect from '../assets/click.mp3';

const Nav = () => {

  const [play] = useSound(soundEffect, { volume: 0.5 });

  return (
    <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto ">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
           href="/home"
            aria-label="home"
            to="home"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            onClick={play}
            className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
          aria-label="about"
           href="/about"
            to="about"
            activeClass='active'
            smooth={true}
            spy={true}
            onClick={play}
            className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
          aria-label="services"
          href="/services"
            to="services"
            activeClass='active'
            smooth={true}
            spy={true}
            onClick={play}
            className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
          aria-label="work"
           href="/work"
            to="work"
            activeClass='active'
            smooth={true}
            spy={true}
            onClick={play}
            className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
          aria-label="contact"
           href="/contact"
            to="contact"
            activeClass='active'
            smooth={true}
            spy={true}
            onClick={play}
            className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
