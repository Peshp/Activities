import axios from "axios";
import { useEffect, useState } from "react";

function Activities(){
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
                console.log(activities);
            })
    }, []);

    return (
        <div>
            <h1>Activities</h1>
            <List>
                {activities.map((activity: any) => {
                    return (
                        <li key={activity.id}>
                            {activity.name}
                        </li>
                    );
                })}
            </List>
        </div>
    );
}

export default Activities;