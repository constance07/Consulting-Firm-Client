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
import companyAbout from '@/public/images/companyAbout.jpg'

export default function CompanyAbout(){
    return(
        <>
            <div id = "companyAboutSection">
                <div className='companyAboutSection'>

                    <div className='statsPart'>
                        <div className='statsSection'>
                        <div className='companyAboutTitle'>
                            {/*Title*/}
                            <h2 id = "secondHeader" className = {ralewayBold.className}>REAL RESULTS</h2>
                            <h1 id = "firstHeader" className = {ralewayBold.className}>Where Strategy Meets Measurable Growth.</h1>
                            {/*Disc*/}
                            <p id = "paragraphText" className = {merriweather.className}>We focus on practical execution and measurable outcomes. 
                                From operational restructuring to financial modeling and capital improvement planning, 
                                our work drives performance gains that owners can see and sustain.</p>
                        </div>

                        {/*Statistics*/}
                        <div className='companyAbtStats'>
                            <div id = "stat1" className = {ralewayBold.className}>
                                <p className='statNumbers'>+20%</p><p className = "statMoney"></p><br></br>
                                <span className='statDisc'> Revenue growth within 4 months through pricing and occupancy optimization </span>
                            </div>
                            <div id = "stat2" className = {ralewayBold.className}>
                                <p className='statNumbers'>60% → 80%</p><p className = "statPercent">%</p><br></br>
                                <span className='statDisc'> Occupancy increase following operational and demand strategy adjustments </span>
                            </div>
                            <div id = "stat3" className = {ralewayBold.className}>
                                <p className='statNumbers'>–15%</p><p className = "statPercent">%</p><br></br>
                                <span className='statDisc'> Reduction in operating expenses through structural cost improvements </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    {/*Qoute*/}
                    <div className='companyAbtQoutePart'>
                    <div className ='companyAbtQoute'>
                        <div id = "qoutations1"  className={ralewayBold.className}>"</div>
                        <h2 id = "qouteContent" className={ralewayBold.className}> 
                            Spreadsheets inform decisions. People drive results.
                        </h2>
                        <div id = "qoutations2" className={ralewayBold.className}>"</div>
                    </div>
                    </div>
                    
                    {/*About*/}
                    <div className='companyAboutPart'>
                    <div className='companyAboutDisc'>
                        {/*Company About Image*/}
                        <div className='compAbtImgContainer'>
                            <div id = 'compAbtBorder'>
                                <Image
                                    src = {companyAbout}
                                    width={1000}
                                    height={500}
                                    alt = 'Company Stock Photo'
                                    className='compAbtImg'>
                                </Image>
                            </div>
                        </div>
                        
                        {/*Company About Disc*/}
                        <div className='companyAboutDiscContent'>
                            <h2 id = "secondHeader" className = {ralewayBold.className}>WHAT DRIVES US</h2>
                            <h1 id = "firstHeader" className = {ralewayBold.className}>About The Company</h1>
                            <p id = "paragraphText" className = {merriweather.className}>
                                Monty & Friends is built around a simple idea: small and mid-sized businesses deserve clear financial visibility, strong systems, 
                                and strategy that actually gets implemented.
                                <br></br><br></br>We go into businesses and work directly with the people who run them every day, from owners to managers to staff. 
                                Our goal is to understand how the operation truly functions. From there, we build structured financial models that make the numbers clear: 
                                where money is being made, where it’s being lost, and where opportunity exists.
                                <br></br><br></br>We help implement individualized systems that reduce operating expenses, strengthen revenue performance, and create structure that 
                                lasts long after we step away.
                                As our clients grow, we grow with them and continue to offer strategic tailored support each step of the way.
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}