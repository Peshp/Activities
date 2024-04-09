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
import Loading from "../../../../app/layoult/Loading";
import { useStore } from "../../../../app/stores/store";

function Activities() {
    const ActivityStore = useStore();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function fetchActivities() {
            try {
                const response = await agent.Activities.list();
                const formattedActivities = response.map(activity => ({
                    ...activity,
                    date: activity.date.split('T')[0] // Format date
                }));
                setActivities(formattedActivities);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching activities:', error);
                setLoading(false);
            }
        }
        fetchActivities();
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

    async function handleCreateOrEditActivity(activity: Activity) {
        setSubmitting(true);
        if (activity.id) {
            await agent.Activities.update(activity);
            setActivities([...activities.filter(x => x.id !== activity.id), activity]);
            setSelectedActivity(activity);
        } else {
            activity.id = uuid();
            await agent.Activities.create(activity);
            setActivities([...activities, activity]);
        }
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
    }

    async function handleDeleteActivity(id: string) {
        setSubmitting(true);
        await agent.Activities.delete(id);
        setActivities([...activities.filter(x => x.id !== id)]);
        setSubmitting(false);
    }

    if (loading) return <Loading content='Loading app' />;

    return (
        <>
            <NavBar openForm={handleFormOpen} />
            <h2>{ActivityStore.name}</h2>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList
                        activities={activities}
                        selectedActivity={handleSelectActivity}
                        deleteActivity={handleDeleteActivity}
                        submitting={submitting}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={handleCancelSelectActivity}
                            openForm={handleFormOpen}
                        />}
                    {editMode &&
                        <ActivityForm
                            closeForm={handleFormClose}
                            activity={selectedActivity}
                            createOrEdit={handleCreateOrEditActivity}
                            submitting={submitting}
                        />}
                </Grid.Column>
            </Grid>
        </>
    );
}

export default Activities;
