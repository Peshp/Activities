import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { Activity } from "../../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import NavBar from "../../../../app/Navbar/NavBar";

function Activities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5004/api/Activity')
            .then(response => {
                setActivities(response.data);
            })
    }, []); 

    function handleSelectActivity(id: string) {
        const selected = activities.find(x => x.id === id);
        setSelectedActivity(selected);
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string) {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    return (
        <><
        NavBar openForm={handleFormOpen} />
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectedActivity={handleSelectActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    openForm={handleFormOpen} />}
                {editMode &&
                    <ActivityForm closeForm={handleFormClose} activity={selectedActivity} />}
            </Grid.Column>
        </Grid>
        </>
    );
}

export default Activities;
