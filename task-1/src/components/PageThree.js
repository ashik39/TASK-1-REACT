import React, { useState } from 'react'

function  PageThree(props){
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    
    const [pageStatus,setPageStatus] = useState('page4');

    function submitThree(event){
        
        event.preventDefault();
        const isValidate = props.validatePage3('page3',country,state,city);
        if(isValidate){
            setPageStatus('page4');
            props.getLocation(country,state,city,pageStatus);
        }        
    }

    function goBack(){
        props.back('page2');
    }

    return(
        <div className="pagethree">
            <h2 id ="middle">Step - 3</h2>
                
                <label>Country : </label>
                <select className="form-select width" name="country" value={country} onChange = {(e)=>setCountry(e.target.value)}>
                    <option value = "">SELECT</option>
                    <option value = "INDIA">INDIA</option>
                    <option value = "AUSTRALIA">AUSTRALIA</option>
                    <option value = "RUSSIA">RUSSIA</option>
                    <option value = "USA">USA</option>
                </select>
                <p className="red">{props.countryError}</p><br/>

                <label>State : </label>
                <select className="form-select width" name="state" value={state} onChange = {(e)=>setState(e.target.value)}>
                    <option value = "">SELECT</option>
                    <option value = "Tamilnadu">Tamilnadu</option>
                    <option value = "Delhi">Delhi</option>
                    <option value = "Mumbai">Mumbai</option>
                    <option value = "Kerala">Kerala</option>
                </select>
                <p className="red">{props.stateError}</p><br/>

                <label className="form-label">City :</label>
                <input type ="text" className="form-control width"
                name="city" placeholder="City" value={city} onChange = {(e)=>setCity(e.target.value)}/>  
                <p className="red">{props.cityError}</p>

                <div className="inline">
                <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack}>PREVIOUS</button>
                <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitThree}>NEXT</button>
                </div>
                
            </div>
    )
}

export default PageThree