import React, { useState } from 'react'

function PageTwo(props){
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [emailError,setEmailError] = useState('');
    const [phoneError,setPhoneError] = useState('');
    const [isDisplay2,setIsDisplay2] = useState();

    function change2(event){
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                return;
        }
    }

    function validate2(){
        
        if (email.trim() === '' || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            setEmailError('*Check and enter proper Email ID');
        }
        else{
             setEmailError(''); 
        }

        if (phone.trim() === '' || phone.length !== 10){
            setPhoneError('*Enter 10 Digit number!');
            return false;
        }
        else{
            setPhoneError('');
            if(emailError === ''){ 
            return true;
            }
        }
    }

    function submitTwo(event){
        
        event.preventDefault();
        const isValidate = validate2();
        if(isValidate){
            props.getContact(email,phone,isDisplay2)
            setIsDisplay2(true)
            
        }
    }

    function goBack(){
        setIsDisplay2(false)
        props.back(true)
    }

    return(
        <div className="pagetwo">
            <h2 id ="middle">Step - 2</h2>
        
            <label className="form-label">Email :</label>
            <input type ="text" className="form-control width"
            name="email" placeholder="Email" value={email} onChange = {change2}/>  

            <p className="red">{emailError}</p>

            <label className="form-label">Phone :</label>
            <input type ="number" className="form-control width"
            name="phone" value={phone} onChange = {change2}/>                
            <p className="red">{phoneError}</p>
            <div className="inline">
            <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack}>PREVIOUS</button>
            <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitTwo}>NEXT</button>
            </div>

        </div>
    )
}


export default PageTwo
