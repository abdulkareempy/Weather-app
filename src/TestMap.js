import React,{useState,useEffect} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import Loading from "./components/loading";
import "./App.css"

const setIconLength = (id) =>{
    return id.length=== 1 ? ("0"+id):id
}

function TestMap() {
    const [viewport,setViewport] = useState({
        latitude:45,
        longitude:-75,
        width:"100vw",
        height:"100vh",
        zoom:10

    })

    const [citiesData,setCitiesData] = useState([])
    const [loading,setLoading] = useState(true)
    const getAllCitiesData = async ()=>{
        setLoading(true);
        const response = await fetch("https://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=jVT1jG9DlSdYmaLFh1i372lgnBvGc0Ah");
        const data = await response.json();
        console.log(data)
        setCitiesData(data);
        setLoading(false);
    }

    useEffect(()=>{
        getAllCitiesData()
    },[])
    return (
        <>
        {
            !loading?(
            <div>
            <ReactMapGL
            mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxrYXJlZW1qcyIsImEiOiJja3U1YWplZnIzaGpjMm9xdDQxbXQyNW4yIn0.Odse6gpOgIBfxag6egTxqw"
            {...viewport}
            mapStyle = "mapbox://styles/mapbox/streets-v11"
            onViewportChange = {viewport => setViewport(viewport)}
            >
                {
                    citiesData.map((city,index)=>(
                        <Marker
                        key={index}
                        latitude={city.GeoPosition.Latitude}
                        longitude={city.GeoPosition.Longitude}
                        >
                            <p id="myPara">
                               {city.WeatherText}
                            </p>
                        </Marker>
                    ))
                }
            </ReactMapGL>
        </div>
             ):Loading }
        </>
    )
}

export default TestMap

