/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';

const raleway = Raleway({
    subsets: ["latin"], weight: "600"
})
/* Images */
import Image from 'next/image';
import secondaryLogo from '@/public/images/secondaryLogo.jpg';

export default function Footer(){
    return(
        <>
            <div className='footerContainer'>
                <Image
                    src= {secondaryLogo}
                    width={50}
                    height={60}
                    alt = 'Monty & Friends Logo'
                    id = 'secondaryLogo'
                ></Image>
                <p id = 'ownershipTag' className={raleway.className}>© 2026 Monty & Friends LLC. All Rights Reserved</p>
                <p id = 'ownershipMotto' className={raleway.className}>Happy People, Better Business.</p>
            </div>

        </>
    )
}