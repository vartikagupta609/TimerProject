import React from 'react';

const Start=({getInput,starttimer})=>{
    return(  
      <div className="tc pa2">
          <input className="pa2 w40 tc" type="date" placeholder="Enter End Date dd-mm-yyyy" onChange={getInput} />
         <button className="btn" type="submit" onClick={starttimer}>START</button>
       </div> 
    )
} 
export default Start;