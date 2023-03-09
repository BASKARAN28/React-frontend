import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
             margin: theme.spacing(1),
              width: '25ch' },
    },
}));
export default function BasicTextFields() { 
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const[rollnumber,setRollNumber]=useState("")
    const[name,setName]=useState("")
    const[department,setDepartment]=useState("")
    const[year,setyear]=useState("")
    const[email,setEmail]=useState("")
    const[students,setStudents]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const student={rollnumber:rollnumber,name:name,department:department,year:year,email:email}
        console.log(student)
        // axios.post("http://localhost:8080/post",student);
        fetch("http://localhost:8080/post",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          console.log("New student registed")
        })
    }
    const handleClick1=(roll)=>{
      console.log(roll);
      axios.delete("http://localhost:8080/del/"+roll);

    }
    const handleClick2=(id)=>{
      console.log(id);
      axios.delete("http://localhost:8080/put/"+id);
      <TextField id="outlined-basic1" label="Enter your Rollnumber" variant="outlined" fullWidth
      value={rollnumber}
      onChange={(e)=>setRollNumber(e.target.value)}/>

    }
    useEffect(()=>{
      fetch("http://localhost:8080/get")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result)
      }
      )
    },[])

    const classes = useStyles ();
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{textAlign:'center',color:"#4863A0"}}>ADD REGISTRATION</h1>
    <form className={classes.root} noValidate autoComplete='on'>
        <h3 style={{textAlign:'left',color:" #626566"}}>Roll No :</h3>
        <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic1" label="Enter your Rollnumber" variant="outlined" fullWidth
      value={rollnumber}
      onChange={(e)=>setRollNumber(e.target.value)}/>
      </Paper>
      <h3 style={{textAlign:'left',color:" #626566"}}>Name :</h3>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic2" label="Enter your Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      </Paper>
      <h3 style={{textAlign:'left',color:" #626566"}}>Department :</h3>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic3" label="Enter Department" variant="outlined" fullWidth
      value={department}
      onChange={(e)=>setDepartment(e.target.value)}/>
      </Paper>
      <h3 style={{textAlign:'left',color:" #626566"}}>Year :</h3>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic4" label="Academic Year" variant="outlined" fullWidth
      value={year}
      onChange={(e)=>setyear(e.target.value)}/>
      </Paper>
      <h3 style={{textAlign:'left',color:" #626566"}}>E-mail :</h3>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="Enter your E-mail" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      </Paper>
      
      <Button variant="contained" color="secondary" onClick={handleClick}>Register</Button>
    </form>
    {rollnumber}
    </Paper>
    <Paper elevation={3} style={paperStyle}>
    <h1 style={{textAlign:'center',color:"#4863A0"}}>REGISTERED STUDENT LIST</h1>
      {students.map(student=>(
      <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}} key={student.id} >
      Rollnumber :{student.rollnumber}<br/>
      Name       :{student.name}<br/>
      Department :{student.department}<br/>
      Year       :{student.year}<br/>
      E-mail     :{student.email}<br/>
      <Button variant="contained" color="primary" onClick={()=>{handleClick1(student.rollnumber)}}>DELETE</Button>
      <Button variant="contained" color="primary" onClick={()=>{handleClick2(student.rollnumber)}}>EDIT</Button>
      </Paper>
      ))
}
    </Paper>
  
    </Container>
  );
}