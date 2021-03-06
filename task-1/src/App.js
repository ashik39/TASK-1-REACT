import { useState } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import './App.css';
function App() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');

    const [activePage,setActivePage] = useState('page1');

    const [error, setError] = useState({
      firstName: "", 
      lastName: "", 
      email: "", 
      phone : "",
      country : "",
      state : "",
      city : ""
    });
    

    const handleValidate = (validationPage,value1,value2,value3) => {

      switch(validationPage){
        case "page1":
          return validationPage1(value1,value2);

        case "page2":
          return validationPage2(value1,value2);

        case "page3":
          return validationPage3(value1,value2,value3);
        
        default:
          break;
      }

    }

    const validationPage1 = (firstName,lastName) => {
          const firstNameToValidate = firstName;
          const lastNameToValidate = lastName;
          let firstNameStatus;
          let lastNameStatus;
          if(firstNameToValidate.trim() === '') { 
            setError({firstName:'*First Name cant be blank'});
            firstNameStatus = false;
          }
          else{
            setError(prevError => ({...prevError,firstName:''}));
            firstNameStatus = true;
          }
          
          if(lastNameToValidate.trim() === '') { 
            setError(prevError => ({...prevError,lastName :'*Last Name cant be blank'}));
            lastNameStatus = false;
          } 
          else{ 
            setError(prevError => ({...prevError,lastName:''}));
            lastNameStatus = true;
          }
          
          if(firstNameStatus && lastNameStatus){
            return true;
          }
          else{
            return false;
          }
          
    }

    const validationPage2 = (email,phone) => {
          const emailToValidate = email;
          const phoneToValidate = phone;
          let emailStatus;
          let phoneStatus;
          if(emailToValidate.trim() === '' || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailToValidate)){
            setError(prevError => ({...prevError,email:"*Check and enter proper Email ID"}));
            emailStatus = false;
          }
          else{
            setError(prevError => ({...prevError,email:""})) ;
            emailStatus = true;
          }

          if(phoneToValidate.trim() === '' || phoneToValidate.length !== 10){
            setError(prevError => ({...prevError,phone: "*Enter 10 Digit number!"}));
            phoneStatus = false;
            }
          else{
            setError(prevError => ({...prevError,phone: ""}));
            phoneStatus = true;
          }

          if(emailStatus && phoneStatus){
            return true;
          }
          else{
            return false;
          }
    }

    const validationPage3 = (country,state,city) => {
          const countryToValidate = country;
          const stateToValidate = state;
          const cityToValidate = city;

          let countryStatus;
          let stateStatus;
          let cityStatus;
          if(countryToValidate.trim() === ''){
            setError(prevError => ({...prevError,country : "*Select Country"}))
            countryStatus = false;
          }
          else{ 
            setError(prevError => ({...prevError,country : ""}));
            countryStatus = true;
          }
          if(stateToValidate.trim() === ''){
            setError(prevError => ({...prevError,state : "*Select state"}));
            stateStatus = false;
          }
          else{
            setError(prevError => ({...prevError,state : ""}));
            stateStatus = true;
          }
          if(cityToValidate.trim() === '') {
          setError(prevError => ({...prevError,city : "*City cant be blank"}));
          cityStatus = false;
          }
          else{ 
          setError(prevError => ({...prevError,city : ""}));
          cityStatus = true;
          }

          if(countryStatus && stateStatus && cityStatus){
            return true;
          }
          else{
            return false;
          }
    }

    const fullName = (nameFirst,nameLast,hidePage1) => {
    setFirstName(nameFirst);
    setLastName(nameLast);
    setActivePage(hidePage1);
    }

    const contact = (email,phone,showPage3) => {
      setEmail(email);
      setPhone(phone);
      setActivePage(showPage3);
    }

    const location = (country,state,city,showPage4) => {
      setCountry(country);
      setState(state);
      setCity(city);
      setActivePage(showPage4);
    }

    const backToPage3 = () => {
      setActivePage('page3');
    }

    const backToPage2 = (showPage2) => {
      setActivePage(showPage2);
    }

    const backToPage1 = (showPage1) => {
      setActivePage(showPage1);
    }

  return (
    <div className="Border">

      <div>
      { activePage === 'page1' && <PageOne  
      getFullName={fullName} 
      validatePage1={handleValidate} 
      firstNameError={error.firstName}
      lastNameError={error.lastName}/>}
        
      </div>
      
      <div>
      { activePage === 'page2' && <PageTwo 
      getContact={contact} 
      back={backToPage1} 
      validatePage2={handleValidate}
      emailError={error.email}
      phoneError={error.phone}/>}
      </div>

      <div>
      { activePage === 'page3' && <PageThree 
      getLocation={location} 
      back={backToPage2} 
      validatePage3={handleValidate} 
      countryError = {error.country}
      stateError = {error.state}
      cityError = {error.city}/>}
      </div>

      <div>
        { activePage === 'page4'&&
          <div>
            <div id ="middle">
            <h2>Details</h2>
            <h3>First Name : {firstName}</h3>
            <h3>Last Name : {lastName}</h3>
            <h3>Email : {email}</h3>
            <h3>Phone : {phone}</h3>
            <h3>Country :  {country}</h3>
            <h3>State : {state}</h3>
            <h3>City : {city}</h3>
            </div>
            <br/>
            <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={backToPage3}>PREVIOUS</button>
            </div> 
      }
      </div>
    </div>
  );
}

export default App;
