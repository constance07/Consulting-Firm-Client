/*Functionality Imports */
'use client';
import {useState} from 'react'
/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const raleway = Raleway({
    subsets: ["latin"], weight: "400"
})
const ralewaySemiBold = Raleway({
    subsets: ["latin"], weight: "700"
})
/*Images*/
import Image from 'next/image';

{/*General Imports*/}
import { ToastContainer, toast } from 'react-toastify';

export default function Contact(){

    {/*Empty Form*/}
    const initialFormData = {
        name: "",
        companyName: "",
        industry: "",
        subject: "",
        email: "",
        message: "",
        annualRev: "",
    };

    const [formDataServer, setFormDataServer] = useState(initialFormData);
    const [result, setResult] = useState("");

    {/*Update Input Value*/}
    const handleChange = (event: any) => {
        setFormDataServer({...formDataServer, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        
        {/* Grab HTML Elements */}
        const nameError = document.getElementById("nameError") as HTMLElement;
        const compNameError = document.getElementById("compNameError") as HTMLElement;
        const industryError = document.getElementById("industryError") as HTMLElement;
        const subjectError = document.getElementById("subjectError") as HTMLElement;
        const emailError = document.getElementById("emailError") as HTMLElement;
        const messageError = document.getElementById("messageError") as HTMLElement;
        const annualRevError = document.getElementById("annualRevError") as HTMLElement;


        {/*Valid Email*/}
        const emailErrorB = document.getElementById("inputB") as HTMLInputElement; 
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

        if(!formDataServer.name || !formDataServer.email.match(validEmail) || !formDataServer.message ||
           !formDataServer.industry || !formDataServer.companyName || !formDataServer.subject || 
           !formDataServer.annualRev){
            {/*If field is not valid, add error */}
            if(!formDataServer.name) {nameError.innerHTML = "* Please insert your name."};
            if(!formDataServer.companyName) {compNameError.innerHTML = "* Please insert the company name."};
            if(!formDataServer.industry) {industryError.innerHTML = "* Please specify the industry you're in."};
            if(!formDataServer.subject) {subjectError.innerHTML = "* Please clarify the subject you need help with."};
            if(!formDataServer.email.match(validEmail)){emailError.innerHTML = "* Please insert a valid email."}
            if(!formDataServer.message){ messageError.innerHTML = "* Please type a complete message."};
            if(!formDataServer.annualRev){ annualRevError.innerHTML = "* Please insert a valid revenue amount."};

            {/*If field is now valid, remove error */}
            if(formDataServer.name) {nameError.innerHTML = ""};
            if(formDataServer.companyName) {compNameError.innerHTML = ""};
            if(formDataServer.industry) {industryError.innerHTML = ""};
            if(formDataServer.subject) {subjectError.innerHTML = ""};
            if(formDataServer.email.match(validEmail)){emailError.innerHTML = ""}
            if(formDataServer.message){ messageError.innerHTML = ""};
            if(formDataServer.annualRev){ annualRevError.innerHTML = ""};

            toast.error('Please check all input fields.');
            return false;
           }

            {/*Make sure all errors are removed*/}
            nameError.innerHTML = "";
            compNameError.innerHTML = "";
            industryError.innerHTML = "";
            subjectError.innerHTML = "";
            emailError.innerHTML = "";
            messageError.innerHTML = "";
            annualRevError.innerHTML = "";

            setResult("Sending....");
            const formData = new FormData(event.target);
            formData.append("access_key", "d6792353-b77e-4f33-a38f-f9dfbd338b2d");
            // d6792353-b77e-4f33-a38f-f9dfbd338b2d
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        const data = await response.json();

        if (data.success) {
            setFormDataServer(initialFormData);
            setResult("Form Submitted Successfully");
            toast.success("Email was sent sucessfully!");
            event.target.reset();
        } else {
            
            toast.error('Oops, looks like something went wrong ');
            
            setResult("Error");
        }

    };


    return(
        <div className='section' id = "contactSection">
                <div className='contactContainer'>
                {/*Title*/}
                <div id = "contactTitle" className= {ralewayBold.className}>
                    <div id = 'contactTextB1' className={raleway.className}>Start the <span id = "contactTextA2" className={ralewayBold.className}>
                        Conversation.</span> </div> 
                </div>
                
                {/*Disc*/}
                <p className={merriweather.className} id = "contactDisc">
                    If you’re looking to strengthen performance, improve financial clarity, or prepare your business for its next stage of growth, we’d welcome the opportunity to learn more.
                    Tell us about your business, what you’re working toward, and where you see the biggest challenges. We review every inquiry carefully and respond directly.
                </p>
                {/*Form*/}
                <div className = "formBox">
                    <form name = "conctactForm" onSubmit = {onSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 id='formSubTitles' className = {ralewayBold.className} >NAME</h2>
                            <div className = {ralewayBold.className} id = "nameError"></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                onChange={handleChange}
                                />

                            <h2 id='formSubTitles' className = {ralewayBold.className} >COMPANY NAME</h2>
                            <div className = {ralewayBold.className} id = "compNameError"></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'companyName'
                                onChange={handleChange}
                                />

                            <h2 id='formSubTitles' className = {ralewayBold.className} >INDUSTRY</h2>
                            <div className = {ralewayBold.className} id = "industryError"></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'industry'
                                onChange={handleChange}
                                />

                            <h2 id='formSubTitles' className = {ralewayBold.className}>SUBJECT</h2>
                            <div className = {ralewayBold.className} id = "subjectError"></div>
                                <input  
                                className= {raleway.className} 
                                id='inputA'
                                type = 'text' 
                                name = 'subject'
                                onChange={handleChange}
                                />

                            <h2 id='formSubTitles' className = {ralewayBold.className}>EMAIL</h2>
                            <div className = {ralewayBold.className} id = "emailError"></div>
                                <input  
                                className= {raleway.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                onChange={handleChange}
                                />

                            <h2 id='formSubTitles' className = {ralewayBold.className}>MESSAGE</h2>
                            <div className = {ralewayBold.className} id = "messageError"></div>
                            <textarea  
                                className= {raleway.className} 
                                id='textArea' 
                                name = 'message' 
                                onChange={handleChange}>
                            </textarea>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>ANNUAL REVENUE RANGE</h2>
                            <div className = {ralewayBold.className} id = "annualRevError"></div>
                            <textarea  
                                className= {raleway.className} 
                                id='annualRev' 
                                name = 'annualRev'
                                onChange={handleChange}
                                >
                            </textarea>

                        </fieldset>
                            <button id = "submit" className={ralewaySemiBold.className}>
                               Send
                            </button>
                            <div className= {ralewayBold.className} >
                                <ToastContainer/>
                            </div >
                    </form>
                </div>
            </div>
        </div>
    )
}
