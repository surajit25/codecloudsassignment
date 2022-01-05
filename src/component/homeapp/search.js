import { Paper } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useEffect, useState } from "react";

function SearchBar(props){

    useEffect(()=>{
        if(window){
            window.addEventListener('keydown',Enterkeydetect)
        }
    },[])

    const API  ="f1f07d9ea06338c06d8ca3c6a5f973a6"

    const [cityname,setCityname] =useState("")

    const InputChange=(event)=>{

        setCityname(event.target.value)
    }

    const Searchresult=()=>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API}`).then(res=>{
            
             var lon = res.data.coord.lon
             var lat = res.data.coord.lat


             props.searchcity(lon,lat,cityname)
        })
    }

    const Enterkeydetect=(e)=>{

        if(e.key=="Enter"){
            Searchresult()
        }
    }



    return(<>
         <Paper className="col-lg-9 mb-3  p-2">

         <div className="input-group ">
        <span  onClick={Searchresult} className="input-group-text cursor" id="basic-addon1">
            <SearchIcon  />
        </span>
        <input type="text" name="city" value={cityname} onChange={(event)=>InputChange(event)} className="form-control shadow-none" placeholder="Search by city" aria-label="Username" aria-describedby="basic-addon1" />

        </div>

         </Paper>
    </>)
}

export default SearchBar