// Code Keypad Component Here
import React from 'react';

function Keypad(){
    return(
        <div id='Keypad'>
            <input 
            onChange={(event)=>console.log("Entering password...")}
            type="password"
            />
        </div>
        
    )
}
export default Keypad;