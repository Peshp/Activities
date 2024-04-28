
import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

function ActivityList(){
    const {activityStore} = useStore();
    const {activities} = activityStore;

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <ActivityListItem key={activity.id} activity={activity} />
                ))}
            </Item.Group>
        </Segment>
    );
}

export default observer(ActivityList); 