import Axios from "axios";
import { useState } from "react";


function Api3()
{
    const [excuse, setExcuse] = useState("");

    const [holder , setHolder] = useState("");

    const handleExcuse = (type) => {

        setHolder(type)

        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${holder}/`).then((res) => {
        setExcuse(res.data[0].excuse);
    });


    }


    const fetchParty= () => {
       
    }
   
    return (
        <div className="App">
            <h1>Generate An Excuse</h1>
           <button onClick={() => handleExcuse('party')}>Party</button>
           <button onClick={() => handleExcuse('family')}>Family</button>
           <button onClick={() => handleExcuse('office')}>Office</button>

          




            <p> {excuse}</p>
        </div>
    )

}


export default Api3;