import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';


const App=()=> {
const [p, setP] = useState(0)
const [t, setT] = useState(0)
const [r, setR] = useState(0)
const [si, setSi] = useState(0) 

const Interest = ()=> {
  setSi(p*t*r/100)
}
  return (
    <div className="div">
       <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Simple Interest
          </Typography>
        
        </Toolbar>
      </AppBar>
      <br>
      </br>
      <TextField  onChange={(event)=> setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" />  <br></br> <br></br>
      <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" />  <br></br> <br></br>
      <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" />
      <br></br>
      <br></br>
      <Button onClick={()=>Interest()} variant="contained">Calculate</Button>
    
      <Typography variant="h6" gutterBottom component='div'>
       Simple interest is: {si}
      </Typography>
    </div>
  );
}

export default App;
