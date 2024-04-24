import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Activity } from "../../../../app/models/Activity";
import Loading from "../../../../app/layoult/Loading";

function ActivityForm(){
    const {activityStore} = useStore();
    const {selectedActivity, createActivity, updateActivity, loading, loadingActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        name: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadingActivity(id).then(activity => setActivity(activity));
    }, [id, loadingActivity]);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    if(loadingInitial) return (<Loading content="Loading activities..." />);

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Name' value={activity.name} name='name' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type="date" placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={loading} onClick={handleSubmit} floated='right' positive type='submit' content='Submit'/>
                <Button floated='right' type='button' content='Cancel'/>
            </Form>       
        </Segment>
    );    
}

export default observer(ActivityForm);
