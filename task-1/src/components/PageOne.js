import React,{ useState } from 'react'

function PageOne(props){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    function submitOne(){

        const isValidate = props.validatePage1('page1',firstName,lastName);
        if(isValidate){
            props.getFullName(firstName,lastName,'page2');
        }        
    }

    return(
        <div className="pageone">
    
            <h2 id ="middle">Step - 1</h2>
            
            <label className="form-label">First Name :</label>
            <input type ="text" className="form-control width"
            name="firstname" placeholder="First Name" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>                
            <p className="red">{props.firstNameError}</p>

            <label className="form-label">Last Name :</label>
            <input type ="text" className="form-control width"
            name="lastname" placeholder="Last Name" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>                
            <p className="red">{props.lastNameError}</p>

            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={submitOne}>NEXT</button>
        </div>
    )
}

export default PageOne