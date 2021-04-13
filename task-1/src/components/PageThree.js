import React, { useState } from 'react'

function  PageThree(props){
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    const [countryError,setCountryError] = useState('');
    const [stateError,setStateError] = useState('');
    const [cityError,setCityError] = useState('');
    const [isDisplay3,setIsDisplay3] = useState();

    function change3(event){
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "country":
                setCountry(value);
                break;
            case "state":
                setState(value);
                break;
            case "city":
                setCity(value);
                break;
            default:
                return;
        }
    }

    function validate3(){
        
        if (country.trim() === ''){
            setCountryError('*Select Country');
        }
        else{
            setCountryError(''); 
        }

        if (state.trim() === ''){
            setStateError('*Select state');
        }
        else{
            setStateError(''); 
        }

        if (city.trim() === ''){
            setCityError('*City cant be blank');
            return false;
        }
        else{
            setCityError(''); 
            return true;
        }
    }

    function submitThree(event){
        
        event.preventDefault();
        const isValidate = validate3();
        if(isValidate){
            setIsDisplay3(true)
            props.getLocation(country,state,city,isDisplay3)
        }        
    }

    function goBack(){
        setIsDisplay3(false)
        props.back(true)
    }

    return(
        <div className="pagethree">
            <h2 id ="middle">Step - 3</h2>
                
                <label>Country : </label>
                <select className="form-select width" name="country" value={country} onChange = {change3}>
                    <option value = "">SELECT</option>
                    <option value = "INDIA">INDIA</option>
                    <option value = "AUSTRALIA">AUSTRALIA</option>
                    <option value = "RUSSIA">RUSSIA</option>
                    <option value = "USA">USA</option>
                </select>
                <p className="red">{countryError}</p><br/>

                <label>State : </label>
                <select className="form-select width" name="state" value={state} onChange = {change3}>
                    <option value = "">SELECT</option>
                    <option value = "Tamilnadu">Tamilnadu</option>
                    <option value = "Delhi">Delhi</option>
                    <option value = "Mumbai">Mumbai</option>
                    <option value = "Kerala">Kerala</option>
                </select>
                <p className="red">{stateError}</p><br/>

                <label className="form-label">City :</label>
                <input type ="text" className="form-control width"
                name="city" placeholder="City" value={city} onChange = {change3}/>  
                <p className="red">{cityError}</p>

                <div className="inline">
                <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack}>PREVIOUS</button>
                <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitThree}>NEXT</button>
                </div>
                
            </div>
    )
}

export default PageThree