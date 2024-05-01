import { Button, Card, Grid, Image } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import Loading from "../../../../app/layoult/Loading";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadingInitial, loadingActivity} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) loadingActivity(id);
    }, [id, loadingActivity]);

    if(loadingInitial || !activity) return <Loading />;
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat activity={activity} />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailsSidebar />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetails);