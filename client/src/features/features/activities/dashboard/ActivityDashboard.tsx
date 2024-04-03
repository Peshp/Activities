import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { Activity } from "../../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import NavBar from "../../../../app/Navbar/NavBar";
import {v4 as uuid} from 'uuid';
import agent from "../../../../app/api/agent";

function Activities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        agent.Activities.list()
            .then(response => {
                let activities: Activity[] = [];
                response.forEach(activity => {
                    activity.date = activity.date.split('T')[0];
                    activities.push(activity);
                });
                setActivities(activities);
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

    function handleCreateOrEditActivity(activity: Activity) {
        activity.id
            ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
            : setActivities([...activities, {...activity, id: uuid()}]);
        
        setEditMode(false);
        setSelectedActivity(activity);
    }

    function handleDeleteActivity(id: string) {
        setActivities([...activities.filter(x => x.id !== id)]);
    }

    return (
        <><
        NavBar openForm={handleFormOpen} />
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} 
                selectedActivity={handleSelectActivity} 
                deleteActivity={handleDeleteActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    openForm={handleFormOpen} />}
                {editMode &&
                <ActivityForm closeForm={handleFormClose} activity={selectedActivity} createOrEdit={handleCreateOrEditActivity} />}
            </Grid.Column>
        </Grid>
        </>
    );
}

export default Activities;
