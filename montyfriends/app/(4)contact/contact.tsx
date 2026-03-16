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
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    {/*Update Input Value*/}
    const handleChange = (event: any) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    {/*Send to personal Email*/}
    const handleSubmit = async(event:any) => {
        {/*Dont let field be empty*/}
        event.preventDefault();

        {/* Grab HTML Elements */}
        const nameError = document.getElementById("nameError") as HTMLElement;
        const emailError = document.getElementById("emailError") as HTMLElement;
        const messageError = document.getElementById("messageError") as HTMLElement;

        {/*Valid Email*/}
        const emailErrorB = document.getElementById("inputB") as HTMLInputElement; 
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

        if(!formData.name || !emailErrorB.value.match(validEmail) || !formData.message){
            {/*If field is not valid, add error */}
            if(!formData.name) {nameError.innerHTML = "* Please insert your name."};
            if(!emailErrorB.value.match(validEmail)){emailError.innerHTML = "* Please insert a valid email."}
            if(!formData.message){ messageError.innerHTML = "* Please type your message."};

            {/*If field is now valid, remove error */}
            if(formData.name) {nameError.innerHTML = ""};
            if(emailErrorB.value.match(validEmail)){emailError.innerHTML = ""};
            if(formData.message){messageError.innerHTML = ""};

            toast.error('Please check all input fields.');
            return false;
        }

        {/*Make sure all errors are removed*/}
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        messageError.innerHTML = "";

        try{
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({...formData}),
            });
        /*Email Sent !*/
            setFormData(initialFormData);
            toast.success("Email was sent sucessfully!");
        } catch(error:any){
        /*Email Error !*/
            
            toast.error('Oops, looks like something went wrong ', error);
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
                    Tell us about your business, what you’re working toward, and where you see the biggest challenges. We review every inquiry carefully and respond directly
                </p>
                {/*Form*/}
                <div className = "formBox">
                    <form name = "conctactForm" onSubmit = {handleSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 id='formSubTitles' className = {ralewayBold.className} >NAME</h2>
                            <div className = {ralewayBold.className} id = "nameError"></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                value = {formData.name}
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className} >COMPANY NAME</h2>
                            <div className = {ralewayBold.className} id = ""></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                value = {formData.name}
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className} >INDUSTRY</h2>
                            <div className = {ralewayBold.className} id = ""></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                value = {formData.name}
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>SUBJECT</h2>
                            <div className = {ralewayBold.className} id = ""></div>
                                <input  
                                className= {raleway.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                value = {formData.email} 
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>EMAIL</h2>
                            <div className = {ralewayBold.className} id = "emailError"></div>
                                <input  
                                className= {raleway.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                value = {formData.email} 
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>MESSAGE</h2>
                            <div className = {ralewayBold.className} id = "messageError"></div>
                            <textarea  
                                className= {raleway.className} 
                                id='textArea' 
                                name = 'message' 
                                value = {formData.message} 
                                onChange={handleChange}>
                            </textarea>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>ANNUAL REVENUE RANGE</h2>
                            <div className = {ralewayBold.className} id = "messageError"></div>
                            <textarea  
                                className= {raleway.className} 
                                id='annualRev' 
                                name = 'message' 
                                value = {formData.message} 
                                onChange={handleChange}>
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
