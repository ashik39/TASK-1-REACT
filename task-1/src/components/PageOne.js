import React,{ useState } from 'react'

function PageOne(props){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [firstNameError,setFirstNameError] = useState('');
    const [lastNameError,setLastNameError] = useState('');
    const [isDisplay1,setIsDisplay1] = useState('');

    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "firstname":
                setFirstName(value);
                break;
            case "lastname":
                setLastName(value);
                break;
            default:
                return;
        }
    }

    function validate(){
        
        if (firstName.trim() === ''){
            setFirstNameError('*First Name cant be blank');
        }
        else{
            setFirstNameError(''); 
        }

        if (lastName.trim() === ''){
            setLastNameError('*Last Name cant be blank');
            return false;
        }
        else{
            setLastNameError(''); 
            return true;
        }
    }

    function submitOne(){

        const isValidate = validate();
        if(isValidate){
            props.getName(firstName,lastName,isDisplay1)
            setIsDisplay1(false)
        }        
    }

    return(
        <div className="pageone">
    
            <h2 id ="middle">Step - 1</h2>

            <label className="form-label">First Name :</label>
            <input type ="text" className="form-control width"
            name="firstname" placeholder="First Name" value={firstName} onChange = {change}/>                
            <p style = {{color : 'red'}}>{firstNameError}</p>

            <label className="form-label">Last Name :</label>
            <input type ="text" className="form-control width"
            name="lastname" placeholder="Last Name" value={lastName} onChange = {change}/>                
            <p style = {{color : 'red'}}>{lastNameError}</p>

            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={submitOne}>NEXT</button>
        </div>
    )
}


export default PageOne