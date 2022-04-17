import React, { useState } from "react";
const Homepage = () => {
    const [name, SetName] = useState()
    const [age, SetAge] = useState()
    const removeDT = () => {
        setTimeout(() => {
            SetName('')
            SetAge('')
        }, 300)
    }
    return (
        <div className="wrapper">
            <input type="text" value={name} onChange={(e) => SetName(e.target.value)} placeholder="Name" />
            <br />
            <input type="text" value={age} onChange={(e) => SetAge(e.target.value)} placeholder="Age" />
            <h1> Hello: {name}
            </h1>

            <h2> Age: {age}
            </h2>

            <button onClick={() => removeDT()}>Remove
            </button>

        </div>);
};

export default Homepage;