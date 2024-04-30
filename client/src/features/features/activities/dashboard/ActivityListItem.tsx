import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../../app/models/Activity";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../../app/stores/store";
import { Link } from "react-router-dom";

interface Props {
    activity: Activity;
}

function ActivityListItem({activity}: Props) {
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    const [target, setTarget] = useState('');
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.name}
                            </Item.Header>
                            <Item.Description>
                                ]Hosted by Me
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`} color="teal" floated="right" content='View'/>
            </Segment>
        </Segment.Group>
    );
}

export default ActivityListItem;