/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})
/*Images*/
import Image from 'next/image';
import heroImage from '@/public/images/heroImage.jpg'

export default function Hero(){
    return(
        <div>
            <div id = "heroSection">
            <div className='heroContainer'>
                {/*Hero Image*/}
                <div className='heroImageContainer'>
                    <Image
                        src = {heroImage}
                        width={1000}
                        height={100}
                        alt = 'Stock Photo of Team'
                        className='heroImage'>
                    </Image>
                </div>
                {/* Introduction*/}
                <div className='titleContainer'>
                <div className = 'title'>
                    <h3 id ='firstPartTitle' className={ralewayBold.className}>THE IDEA? IT'S SIMPLE: </h3>
                    <h3 id ='secondPartTitle' className={ralewayBold.className}>HAPPY PEOPLE, BETTER BUSINESS.</h3>
                {/* Disc*/}
                <p id = "heroDisc" className={merriweather.className}>We partner directly with business owners and 
                    their teams to improve operations, strengthen margins, and build short and long-term strategy — because real performance starts with the people behind the business.
                </p>
                {/*Button*/}
                 <button /* onMouseEnter = {enableUnderline()} */ id = "helpButton" className={ralewayBold.className}><span id = "helpContent"><a href = '/services' id = "helpLink">Work With Us</a></span></button>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}