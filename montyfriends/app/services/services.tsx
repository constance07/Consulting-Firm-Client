/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const raleway = Raleway({
    subsets: ["latin"], weight: "400"
})
const ralewaySemiBold = Raleway({
    subsets: ["latin"], weight: "700"
})
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})

/*Images*/
import Image from 'next/image';
import serviceImage from '@/public/images/serviceImage.jpg';

export default function Hero(){
    return(
        <div>
            <div id = "serviceSection">
            <div className='serviceContainer'>
                {/* Introduction*/}
                <div className='serviceTitleContainer'>
                <div className = 'serviceTitle'>
                    <h3 id ='secondHeader' className={ralewayBold.className}>STRATEGIC SERVICES. REAL IMPLEMENTATION.</h3>
                    <h3 id ='firstHeader' className={ralewayBold.className}>Our Services</h3>
                {/* Disc*/}
                <p id = "paragraphText" className={merriweather.className}>Monty & Friends works inside businesses to improve financial clarity, operational performance, and long-term stability. 
                    Our services are structured, measurable, and tailored to the realities of each operation. </p>
                {/*Service Image*/}
                <div className='serviceImageContainer'>
                    <Image
                        src = {serviceImage}
                        width={1000}
                        height={100}
                        alt = 'Stock Photo of Service'
                        id='serviceImage'>
                    </Image>
                </div>
                </div>
                </div>
                {/*Service Cards*/}
                <div className='cardServiceSet'>
                    <div id = "card1" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Financial Visibility & Modeling</p>
                        <p id ="serviceCardDisc" className={raleway.className}>We build structured financial models that give owners clear insight into where money is earned, spent, and optimized.
                            This includes: monthly performance tracking, expense categorization & analysis, revenue trend modeling, and forecasting & scenario planning.
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card2" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Operational Efficiency & Cost Optimization</p>
                        <p id ="serviceCardDisc" className={raleway.className}>We analyze how the business actually runs and identify structural inefficiencies that affect profitability.
                            This includes: workflow evaluation, vendor & expense review, cost restructuring, and on-site process improvements.
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card3" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Marketing, Revenue & Pricing Strategy</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            We evaluate how businesses attract customers, position themselves competitively in the market, and convert demand into revenue.
                            The goal is simple: improve market visibility, strengthen pricing power, and increase sustainable revenue.
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card4" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Capital & Improvement Planning</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            We help owners plan and execute improvement initiatives that strengthen long-term performance and asset value.
                            This includes: This includes: PIP planning & execution support, ROI-based capital allocation, and asset repositioning strategy.
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card5" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Transition & Growth Support</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            We support ownership transitions, expansion phases, and restructuring efforts while maintaining team stability and operational continuity.
                            This includes: implementation planning, team alignment, system integration, and ongoing advisory support.
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
               
                </div>
            </div>
            </div>
        </div>
    )
}