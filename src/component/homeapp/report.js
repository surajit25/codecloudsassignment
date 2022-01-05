import { useState ,useEffect} from "react"



import { Paper, Typography } from "@mui/material"

import { Box } from "@mui/system"

import ThermostatIcon from '@mui/icons-material/Thermostat';

import ShowChartIcon from '@mui/icons-material/ShowChart';

import InvertColorsIcon from '@mui/icons-material/InvertColors';

import SpeedIcon from '@mui/icons-material/Speed';

import CloudCircleIcon from '@mui/icons-material/CloudCircle';

import Brightness4Icon from '@mui/icons-material/Brightness4';

import Brightness7Icon from '@mui/icons-material/Brightness7';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function WeatherReportSection(props){

    const [value,setValue] = useState([])

    const [Weather,setWeather]  = useState([])

    useEffect(() => {

        setWeather(props.report)

    
    }, [props])


    return(
        <>
          {/* {value=='current'? */}

                
<div  className='col-lg-8 col-12 p-2'>


    {Weather.length==0?
    <div className="d-flex justify-content-center align-items-center col-12 p-4">
    <div className="spinner-border spinner-border-sm" role="status">
  
  </div>

  </div>

    :<>
    
    {Weather.length>0?<>
     
    {Weather.length>1?<>
        
        {Weather.map(item=>{

            var tempdate = item.dt
           
            var date = new Date(tempdate*1000)
            var sunrise = new Date(item.sunrise*1000)
            var sunset = new Date(item.sunset*1000)

            return(
                <Paper  key={item.dt} className="mb-2 p-2">

                <Typography className="fw-bold text-capitalize" >{item.weather[0].description}</Typography>

                <Typography><span className="fw-bold fs-6">
                    <CalendarTodayIcon />Date:</span>{date.toString("MM dd YYYY")}</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <ThermostatIcon /> Temperature:</span>{Math.round(item.temp.day-273.00)}deg centigrade</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <ShowChartIcon /> Air pressure:</span>{item.pressure} mb/hPa</Typography>
                
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <InvertColorsIcon /> Humidity:</span>{item.humidity} % </Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <SpeedIcon />Wind Speed:</span>{item.wind_speed} m/sec </Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <CloudCircleIcon />Cloud Cover:</span>{item.clouds} %</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <Brightness7Icon />Sunrise:</span>{sunrise.toString("MM DD YYYY")}</Typography>
                <Typography><span className="fs-6 fw-bold">
                    <Brightness4Icon />Sunset:</span> {sunset.toString("MM DD YYYY")}</Typography>


                </Paper>

            )
        })}

    </>:

    <>

<Typography variant='h6' className='fw-bold mb-1'>Current Report</Typography>

{Weather.map(item=>{
       var tempdate = item.dt

       var date = new Date(tempdate*1000)

       var sunrise = new Date(item.sunrise*1000)
       var sunset = new Date(item.sunset*1000)

     return(
        <Paper key={item.dt} className="mb-2 p-2">

                <Typography className="fw-bold text-capitalize" >{item.weather[0].description}</Typography>

                <Typography><span className="fw-bold fs-6">
                    <CalendarTodayIcon /> Date:</span>{date.toString("MM dd YYYY")}</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                <ThermostatIcon /> Temperature:</span>{Math.round(item.temp-273.00)}deg centigrade</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <ShowChartIcon />  Air pressure:</span>{item.pressure} mb/hPa</Typography>
            
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <InvertColorsIcon /> Humidity:</span>{item.humidity} % </Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <SpeedIcon /> Wind Speed:</span>{item.wind_speed} m/sec </Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <CloudCircleIcon /> Cloud Cover:</span>{item.clouds} %</Typography>
                <Typography className='mb-1'><span className="fs-6 fw-bold">
                    <Brightness7Icon /> Sunrise:</span>{sunrise.toString("MM DD YYYY")}</Typography>
                <Typography><span className="fs-6 fw-bold">
                <Brightness4Icon />Sunset:</span> {sunset.toString("MM DD YYYY")}</Typography>


                </Paper>
     )


   })}




    </>


    }

   </>
   :

   <Box>
       There is no report 
   </Box>

   }

  </>

}


 </div>




  {/* <div >
          
         {Daily.map(item=>{

           var temporary=item.temp
           console.log(temporary)

          return(
             <>
              <Typography>Temperature:{item.temp.day-273}</Typography>
            </>        )
          })}


  </div>

} */}
        </>
    )
}

export default WeatherReportSection