import axios from "axios";
import { useEffect, useState } from "react";
import MenuList  from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { Activity } from "../models/Activity";
import NavBar from "../Navbar/NavBar";
import { Grid } from "@mui/material";
import ActivityList from "../../features/features/activities/dashboard/ActivityList";

function Activities(){
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
            })
    }, []);

    return (
        <>
         <NavBar></NavBar>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ActivityList activities={activities} />
                </Grid>
            </Grid>
        </>    
    );
}

export default Activities;