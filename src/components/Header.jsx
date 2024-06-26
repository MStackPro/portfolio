import React from "react";
import HeroImage from "../assets/me.jpg";
import { Link } from "react-router-dom";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { TypeWriter } from "react-typewritter";
import { Zoom } from "react-reveal";

const Header = () => {
  return (
    <Zoom>
      <header className="bg-colorWhite">
      <section className="container relative hero grid grid-cols-2 place-items-center h-screen ">
        <article className="flex flex-col gap-2 pt-16">
          <h5>Hello! I'm</h5>
          <div className="name">
          <h2 className="text-3xl">Manasseh</h2>
          <h1 className="text-6xl font-semibold">Walshak</h1>
          </div>
          <p className="w-3/4 my-desc">
            <TypeWriter
              elementType="p"
              text={
                "A passionate skilled Frontend Developer and Creative Graphic Designer."
              }
              interval={50}
              delay={20}
            />
          </p>
          <a href="#contact" className="btn btn-primary mt-4">
            Get in touch
          </a>

          <div className="social-link pt-4 flex items-center gap-6">
            <Link
              to={"https://www.github.com/MStackPro"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out"
            >
              <LuGithub />
            </Link>
            <Link
              to={"https://www.twitter.com/walshak_m"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out"
            >
              <FaXTwitter />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/manasseh-walshak-yakubu-946733244"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out"
            >
              <RiLinkedinBoxLine />
            </Link>
            <Link
              to={"https://www.instagram.com/manasseh_walshak"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.behance.net/walshakmanasseh"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out"
            >
              <FaBehance />
            </Link>
          </div>
        </article>
        
          <aside className="hero-image-portrait mt-20">
            <img src={HeroImage} alt="about image" className="hero" />
          </aside>
      </section>
    </header>
    </Zoom>
  );
};

export default Header;