import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Nav } from './Nav';




export default function App() {
  const initial=[{
  occupation:"develper"
  },
  {
    occupation:" senior develper"
 }]
  const [kal,setkal]=useState([]);
  
  const [occupation,setoccupation]=useState("");
  return (
    
    <div className="App">
      <div className='oii'>
     <TextField id="outlined-basic" label="NEW TASK..." variant="outlined"  onChange={(event)=>setoccupation(event.target.value)}  />
     </div>
 <br/>
<Button variant="contained"  onClick={()=>{const newtask={occupation:occupation};
   setkal([...kal,newtask])}} >CLICK ME👍</Button>
   <br/>
   <br/>
     
     
     
     
     <Router>
     <Nav/>
       <Switch>
         <Route exact path="/all">
        
    
    
    <div className='leo'>
      <div className='po'>
    <FormControlLabel control={<Checkbox default />} label="Create theme" />
<FormControlLabel control={<Checkbox default />} label="Work on wordpress " />
<FormControlLabel control={<Checkbox default />} label="Organize office main department" />
<FormControlLabel control={<Checkbox default />} label=" Error solve in HTML template" />
</div>
</div>
{kal.map((nm)=><Pandya name={nm.name} age={nm.age} occupation={nm.occupation}/>)}
         </Route>
         <Route path="/active"><Active/></Route>
         <Route path="/complete"><Complete/></Route>
       </Switch>
     </Router>
    </div>
  );
}

function All({occupation}){
 
  return(
<div>
 

</div>
  );
}
function Pandya({occupation}){
  return(
    <div>

<FormControlLabel control={<Checkbox default />} label={occupation} />

    </div>
  );
}

function  Active(){
  return(
    <div>
     <FormControlLabel control={<Checkbox default />} label="Create theme" />
    </div>
  );
}
function  Complete(){
  return(
    <div className='po'>
    <FormControlLabel control={<Checkbox default />} label="Create theme" />
<FormControlLabel control={<Checkbox default />} label="Work on wordpress " />
<FormControlLabel control={<Checkbox default />} label="Organize office main department" />
<FormControlLabel control={<Checkbox default />} label=" Error solve in HTML template" />
</div>
  );
}
