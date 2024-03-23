import axios from "axios";
import { useEffect, useState } from "react";
import MenuList  from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import StadiumIcon from '@mui/icons-material/Stadium';


function Activities(){
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Activities</h1>
            <MenuList>
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