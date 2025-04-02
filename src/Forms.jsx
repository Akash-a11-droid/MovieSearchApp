import React, {useState} from 'react';

function Forms() {
    const [curr, setText] = useState("Slim Shady");

    const handleEvent = (e) => {
        setText((curr)=>{return (e.target.value)});
    }

    return(
        <>
        <form action="">
            <label>Name: </label>
            <input type="text" onChange={handleEvent} />
            <h1>Your name is {curr}</h1>
        </form>
        </>
    );
}

export default Forms;