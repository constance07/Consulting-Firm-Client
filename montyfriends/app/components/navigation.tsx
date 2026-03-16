'use client';
/*Functionality Imports */
import {useState} from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo.jpg';
import { Raleway } from 'next/font/google';
const raleway = Raleway({
    subsets: ["latin"], weight: "700"
})
export default function Navigation(){

        {/*State for Hamburger*/}
        const [menuOpen, setMenuOpen] = useState(false);
    
        {/* Disable Website Scrolling */}
       const disableScroll = () => {
            parent.document.body.classList.remove("overflowShow");
            parent.document.body.classList.add("overflowHidden");
       }
    
        {/* Enable Website Scrolling */}
       const enableScroll = () => {
            parent.document.body.classList.remove("overflowHidden");
            parent.document.body.classList.add("overflowShow");
       }
       {/* Enable Overlay */}
       const enableOverlay = () => {
            const overlay = parent.document.querySelector(".overlayContainer") as HTMLElement;
            overlay.classList.add("overlayFadeIn")
       }
       {/* Disable Overlay */}
       const disableOverlay = () => {
           const overlay = parent.document.querySelector(".overlayContainer") as HTMLElement;
            overlay.classList.add("overlayFadeOut")
            setTimeout(() => {
                    /* Fade Out */
                    overlay.classList.remove("overlayFadeOut")
                    overlay.classList.remove("overlayFadeIn")
                }, 200)
        }
    return(
        <>
         <div className={raleway.className}>
        {/*ON MOBILE*/}    
        <div className='overlayContainer'></div>
        {/*Hamburger Menu*/}
            <nav id = "navOpen" className="hamburgerContainer" >
            <div></div>
            <div className='fixedNavigation'>
                
                <Image
                    src = {logo}
                    width={2000}
                    height={500}
                    alt = 'Logo of Monty & Friends'
                    id = "logoMobile"
                />
                
                    {/*Collapsed*/}
                    <div className='hamburgerIconBackground'>
                        <div className = "hamburgerIcon" onClick={() => {
                            setMenuOpen(!menuOpen);
                            disableScroll();
                            enableOverlay();
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>
              </div>
                {/*Expanded(ON-CLICK)*/}
                    <ul className = {menuOpen ? "open" : ""}>
                    {/*Close Button*/}
                        <div id = "close-Button">
                            <span id = "1x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                disableOverlay();
                                }}></span>
                            <span id = "2x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                disableOverlay();
                                }}></span>
                        </div>
                    {/*Pages*/}
                        <a className = 'activeMobile' href ='/'><li>Home</li></a>
                        <a href ='/(1)services'><li>Services</li></a>
                        <a href ='/(2)founder'><li>Founder</li></a>
                        <a href ="/(3)blog"><li>Blog</li></a>
                        <a href ="/(4)contact"><li>Contact</li></a>
                    </ul>    
            </nav>


    {/* ON DESKTOP*/}   
        {/*Navigation Bar*/} 
        {/* <div className='placeHolderNav'>
        <nav className ='navContainer'>
     
            <ul className='navList'>
                {/*Pages*/}
                        {/* <a className='active' href ='/'><li>01. Home</li></a>
                        <a  href ='#aboutSection'><li>02. About</li></a>
                        <a  href ='#workSection'><li>03. Work</li></a>
                        <a  href ="#blogSection"><li>04. Blog</li></a>
                        <a  href ="#contactSection"><li>05. Contact</li></a>
            </ul> 
        </nav>  
        <div className='navBackgroundContainer'>
        <div className='navBackground'></div></div>
        </div> */}
        
        </div>
        </>
    )
}