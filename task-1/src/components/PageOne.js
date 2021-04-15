import React,{ useState } from 'react'

function PageOne(props){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    
    const [isDisplayPage1,setIsDisplayPage1] = useState();

    function submitOne(){

        const isValidate = props.validatePage1('page1',firstName,lastName);
        console.log(isValidate)
        if(isValidate){
            props.getFullName(firstName,lastName,isDisplayPage1)
            setIsDisplayPage1(false)
        }        
    }


    return(
        <div className="pageone">
    
            <h2 id ="middle">Step - 1</h2>
            
            <label className="form-label">First Name :</label>
            <input type ="text" className="form-control width"
            name="firstname" placeholder="First Name" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>                
            <p style = {{color : 'red'}}>{props.firstNameError}</p>

            <label className="form-label">Last Name :</label>
            <input type ="text" className="form-control width"
            name="lastname" placeholder="Last Name" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>                
            <p style = {{color : 'red'}}>{props.lastNameError}</p>

            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={submitOne}>NEXT</button>
        </div>
    )
}

export default PageOne
    //const [isDisplayPage1,setIsDisplayPage1] = useState('');

    // function change(event){
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     switch (name){
    //         case "firstname":
    //             setFirstName(value);
    //             break;
    //         case "lastname":
    //             setLastName(value);
    //             break;
    //         default:
    //             return;
    //     }
    // }

    // function validate(){
        
    //     if (firstName.trim() === ''){
    //         setFirstNameError('*First Name cant be blank');
    //     }
    //     else{
    //         setFirstNameError(''); 
    //     }

    //     if (lastName.trim() === ''){
    //         setLastNameError('*Last Name cant be blank');
    //         return false;
    //     }
    //     else{
    //         setLastNameError(''); 
    //         return true;
    //     }
    // }




