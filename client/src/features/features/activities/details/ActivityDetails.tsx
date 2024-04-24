import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import Loading from "../../../../app/layoult/Loading";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadingInitial, loadingActivity} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) loadingActivity(id);
    }, [id, loadingActivity]);

    if(loadingInitial || !activity) return <Loading />;
    
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
                        <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='Edit' />
                        <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
                    </Button.Group>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default observer(ActivityDetails);