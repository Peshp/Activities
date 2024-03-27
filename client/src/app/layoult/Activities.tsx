import axios from "axios";
import { useEffect, useState } from "react";
import MenuList  from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { Activity } from "../models/Activity";
import NavBar from "../Navbar/NavBar";

function Activities(){
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
            })
    }, []);

    return (
        <div>
            <NavBar />
            <MenuList className="align-center">
            <h1 >Activities</h1>
                {activities.map((activity: any) => {
                    return (
                        <MenuItem key={activity.id}>
                            {activity.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </div>
    );
}

export default Activities;