import React,{ useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";
import azhwarsList from "../data/azhwarsList";
import "./styles.css";
import { Typography } from '@mui/material';
import Life from "../images/Life_Clickable.png"
import Works from "../images/Works_Clickable.png"
import Desham from "../images/Divyadesham_clickable.png"

export default () => {
    
  let { name } = useParams();
        name = name.replace(/^:+/, "");
    const [data, setData] = useState(null)
    
    useEffect(() => {
        /** find the data using key */
        setData(azhwarsList().filter((item)=> item.key === name)[0]);
    }, [azhwarsList])
    

    console.log("name",data)
    return (
        data && 
        <div className ="detailPage">
            
            
                <Typography variant="h5" gutterBottom component="div" py={4}>
                    The divine lives & works of the {data.name} 
                </Typography>
            <Grid container spacing={4} py={4}>
                <Grid item xs={12}>
                    <img src={data.image} className="detailImage"></img>
                    <Typography variant="button" display="block" gutterBottom>{data.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={Life} className="detailImage"></img>
                    <Typography variant="button" display="block" gutterBottom>Life</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={Works} className="detailImage"></img>
                    <Typography variant="button"  display="block" gutterBottom>Works</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={Desham} className="detailImage"></img>
                    <Typography variant="button" display="block" gutterBottom>Divya Desham</Typography>
                </Grid>
            </Grid>
        </div>
    )
}