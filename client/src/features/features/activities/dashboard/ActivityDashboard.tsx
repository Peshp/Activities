import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import Loading from "../../../../app/layoult/Loading";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityFilters from "./ActivityFilters";

function Activities() {
    const activityStore = useStore();
    const loadActivity = activityStore

    useEffect(() => {
        activityStore.activityStore.loadActivity();
    }, [activityStore.activityStore]);

    if (activityStore.activityStore.loadingInitial) return <Loading content='Loading app' />;

    return (
        <> 
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <ActivityFilters/>
                </Grid.Column>
            </Grid>
        </>
    );
}

export default observer(Activities);
