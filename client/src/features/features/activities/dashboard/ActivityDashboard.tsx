import axios from "axios";
import { useEffect, useState } from "react";
import ActivityList from "./ActivityList";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../../app/models/Activity";

function Activities() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
            })
    }, []);

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
        </Grid> 
    );
}

export default Activities; 