
import React, { useEffect, useState } from 'react';
import Header from '../header';

import './style.css'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button'

import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

import { Typography } from '@mui/material';

import axios from 'axios'
import WeatherReportSection from './report';
import SearchBar from './search';

function WeaterReport(){

    
   const [Report,setReport] = useState([])

   const [latitude,setLatitude]  =useState("")
   const [longitude,setLongitude] = useState("")

   const [Daily,setDaily] = useState([])
   const [current,setCurrent] = useState([])
  //  const [weekly,setWeekly] =useState([])
  //  const [name,setName] = useState("")

   const [Weather,setWeather]  = useState([])

   

   const [Backup,setBackup] = useState([])

   const API  ="f1f07d9ea06338c06d8ca3c6a5f973a6"

   const [auto,setAuto] = useState(false)

    useEffect(()=>{

      navigator.geolocation.getCurrentPosition((position)=>{
        
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
         
        var lat = position.coords.latitude
        var lon  = position.coords.longitude
      
        getWeatherData(lat,lon)

      })


  

    },[])

  
    const getWeatherData=(lat,lon)=>{
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={
        minutely,
        hourly,}&appid=${API}`).then(res=>{

     

        var v =[]
        v.push(res.data['current'])

     
        var x = res.data['daily']

    
        console.log(v)

        setWeather(v)

        setDaily(x)

        setCurrent(v)

      

   
        })
    }


    // const [age, setAge] = React.useState('');


    const [value,setValue] = React.useState("current")

    const handleChange = (event) => {
       
      var day = 7
      
      if(event.target.value=='daily'){
       
        setValue('daily')

        setWeather(Daily)

      }else{

        setValue('current')

        setWeather(current)
      }
    
      
    };


    const [cityname,setCityname] = useState("")

    const SearchCityresult=(lat,lon,city)=>{


      getWeatherData(lat,lon)
      setCityname(city)

    }



    return(
        <React.Fragment  >
           
           <CssBaseline />

           <Container>

            
      
            <div className='d-flex flex-column mt-4 justify-content-center align-items-center col-12'>

              
            <SearchBar searchcity={(lat,lon,city)=>SearchCityresult(lat,lon,city)} />

          
            <Paper className='d-flex flex-lg-row flex-column justify-content-between align-items-center bg-light col-lg-9 col-12 p-3'>

        
          <div className='col-12'>
         
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label bg-light">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
          className='bg-light'
        >
          <MenuItem value={"current"}>Current</MenuItem>
          <MenuItem value={"daily"}>Daily</MenuItem>
      
        </Select>
      </FormControl>

              </div>



              </Paper>

             <Paper elevation={3} className='mt-2 mb-2 col-lg-8 col-12 d-flex flex-column justify-content-center align-items-center p-2'>

              <Typography className='text-center fw-bold text-uppercase' >{cityname!=""?cityname:""}</Typography>
              
              <WeatherReportSection  report = {Weather} />

             </Paper>

              </div>



              </Container>

          
            
     

        </React.Fragment>

    )
}

export default WeaterReport