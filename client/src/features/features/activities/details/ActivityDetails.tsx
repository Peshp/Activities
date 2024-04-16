import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import Loading from "../../../../app/layoult/Loading";

function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, open, cancelSelectedActivity} = activityStore;

    if(!activity) return <Loading />;
    
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.name}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button onClick={() => open(activity.id)} basic color='blue' content='Edit' />
                        <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel' />
                    </Button.Group>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails;