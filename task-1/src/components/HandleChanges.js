import React, { useState } from 'react'
import PageOne from './PageOne'

function HandleChanges(event,props){
    const [input,setName] = useState('')
    const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "firstname":
                setName(value);
                break;
            case "lastname":
                setName(value);
                break;
            default:
                return;
        }
    return (
        <div>
            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={()=>props.handleClick()}>NEXT</button>
        </div>
    )
}

export default HandleChanges