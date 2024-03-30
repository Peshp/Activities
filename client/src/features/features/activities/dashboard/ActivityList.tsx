
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../../app/models/Activity";

interface Props{
    activities: Activity[];
    sekectedActivity: Activity | undefined;
    selectedActivity: (id: string) => void;
}

function ActivityList({ activities, selectedActivity }: Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.name}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectedActivity(activity.id)} floated="right" content='View' color="blue" />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
}

export default ActivityList; 