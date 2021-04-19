import React, { useState } from 'react'

function PageTwo(props){
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    function submitTwo(event){
        
        event.preventDefault();
        const isValidate = props.validatePage2('page2',email,phone);
        if(isValidate){
            props.getContact(email,phone,'page3');
        }
    }

    function goBack(){
        props.back('page1');
    }

    return(
        <div className="pagetwo">
            <h2 id ="middle">Step - 2</h2>
        
            <label className="form-label">Email :</label>
            <input type ="email" className="form-control width"
            name="email" placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>  

            <p className="red">{props.emailError}</p>

            <label className="form-label">Phone :</label>
            <input type ="number" className="form-control width"
            name="phone" value={phone} onChange = {(e)=>setPhone(e.target.value)}/>                
            <p className="red">{props.phoneError}</p>
            <div className="inline">
            <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack}>PREVIOUS</button>
            <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitTwo}>NEXT</button>
            </div>

        </div>
    )
}


export default PageTwo
