import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import Loading from "../../../../app/layoult/Loading";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";

function Activities() {
    const activityStore = useStore();

    useEffect(() => {
        activityStore.activityStore.loadActivity();
    }, [activityStore.activityStore]);

    if (activityStore.activityStore.loadingInitial) return <Loading content='Loading app' />;

    const {selectedActivity, editMode} = activityStore.activityStore;

    return (
        <> 
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList/>
                </Grid.Column>
                <Grid.Column width={6}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails/>}
                    {editMode &&
                    <ActivityForm/>}
                </Grid.Column>
            </Grid>
        </>
    );
}

export default observer(Activities);
