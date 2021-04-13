import './App.css';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import { useState } from 'react';

function App() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');

    const [page1,setPage1] = useState(true)
    const [page2,setPage2] = useState(false)
    const [page3,setPage3] = useState(false)
    const [page4,setPage4] = useState(false)

    function fullName(nameFirst,nameLast,hidePage1){
    setFirstName(nameFirst)
    setLastName(nameLast)
    setPage1(hidePage1)
    setPage2(true)
    }

    function contact(email,phone,showPage2){
      setEmail(email)
      setPhone(phone)
      setPage2(showPage2)
      setPage3(true)
    }

    function location(country,state,city,showPage3){
      setCountry(country)
      setState(state)
      setCity(city)
      setPage3(showPage3)
      setPage4(true)
    }

    function goBack(){
      setPage4(false)
      setPage3(true)
    }

    function toPage2(showPage2){
      setPage3(false)
      setPage2(showPage2)
    }

    function toPage1(showPage1){
      setPage2(false)
      setPage1(showPage1)
    }

  return (
    <div className="Border">

      <div>
      { page1 ? <PageOne  getName={fullName}/> : null }
        
      </div>
      
      <div>
      { page2 ? <PageTwo getContact={contact} back={toPage1}/> : null }
      </div>

      <div>
      { page3 ? <PageThree getLocation={location} back={toPage2} /> : null }
      </div>

      <div>
        {page4  ? 
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
            <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack}>PREVIOUS</button>
            </div> 
            : null
      }
      </div>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
