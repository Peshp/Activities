import { Button, Card, Image } from "semantic-ui-react";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
}

function ActivityDetails({activity, cancelSelectActivity}: Props){
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
                        <Button basic color='blue' content='Edit' />
                        <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
                    </Button.Group>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails;