import React, { useState, useEffect } from 'react'
import './header.css'
import logo from '../../assets/company_logo.svg';

export function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuActive, setMenuActive] = useState<boolean>(false)

  useEffect(() => {
    // Function to add the 'scrolled' class to the header and navigation when scrolled down
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Event listener to trigger the handleScroll function on scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = (target: string) => {
    const element = document.querySelector(target) as HTMLElement;
    if (element) {
      const headerOffset = (document.querySelector('.header') as HTMLElement)?.offsetHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBurgerClick = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };


  // Event handler for navigation links
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    if (target) {
      smoothScroll(target)
    }
  };

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className='logo' onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault()
        smoothScroll("#home")
      }}>
        <img src={logo} alt='Company Logo' />
        <h4>Company Logo</h4>
      </div>
      <nav className={scrolled ? 'navigation scrolled' : 'navigation'}>
        <div className={`burger${menuActive ? ' active' : ''}`} id="burger" onClick={handleBurgerClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu${menuActive ? ' active' : ''}`} id="menu">
          <li><a href='#home' onClick={handleLinkClick}>Home</a></li>
          <li><a href='#about' onClick={handleLinkClick}>About</a></li>
          <li><a href='#services' onClick={handleLinkClick}>Services</a></li>
          <li><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
