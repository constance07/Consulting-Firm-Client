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
import sumisHeadshot from '@/public/images/sumisHeadshot.jpg'

export default function Founder(){
    return(
        <>
        <div className='founderAboutSection'>
            <div className='founderAboutContainer'>
                {/*Company About Image*/}
                <div className='founderImageContainer'>
                    <Image
                        src = {sumisHeadshot}
                        width={2000}
                        height={500}
                        alt = 'sumis Headshot'
                        className='sumiHeadshot'>
                    </Image>
                    <button id = "downloadResume" className={ralewayBold.className}><span id = "downloadContent"><a id = "downloadLink" href = "/SumiResume.docx"download = "SumiResume" target ="_blank">Resume</a></span></button>

                </div>
                {/*Founder About Disc*/}
                <div className='founderAboutDisc'>
                    <h2 id = "secondHeader" className = {ralewayBold.className}>FOUNDER & STRATEGIC LEAD</h2>
                        <h1 id = "firstHeader" className = {ralewayBold.className}>SUMI VIJAY</h1>
                        <p id = "paragraphText" className = {merriweather.className}>
                            Monty & Friends was founded on the belief that small and mid-sized businesses deserve disciplined strategy, financial clarity, 
                            and systems that actually support long-term performance.
                            
                            <br></br><br></br>Sumi brings an analytical, systems-based approach to her work by viewing businesses as interconnected operations where pricing, 
                            expenses, workflows, and team dynamics all affect results.
                            
                            <br></br><br></br>Her work begins by understanding how a business truly functions. From there, she builds financial clarity for owners, identifies structural inefficiencies, 
                            and develops long-term strategies to strengthen performance.

                            <br></br><br></br>Each engagement is collaborative. Depending on the needs of the business, Sumi works alongside owners, managers, and trusted specialists to 
                            implement practical systems that improve operations, strengthen margins, and support sustainable growth.
                            
                            <br></br><br></br>She believes that clear numbers lead to better decisions — and that aligned teams drive sustainable success.

                            <br></br><br></br>Monty & Friends is being built as a growing consulting firm grounded in structured problem-solving, hands-on execution, and long-term stability.
                        </p>
                    </div>
                </div>
        </div>
        
        </>
    )
}