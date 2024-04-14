import { action, makeAutoObservable } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../api/agent";

class ActivityStore{
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this);
    }

    loadActivity = async () => {
        this.setLoadingInitial(true);

        try {
            const response = await agent.Activities.list();
            response.forEach(activity => {
                activity.date = activity.date.split('T')[0];
                this.activities.push(activity);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectActivity = (id: string) => {
        this.selectedActivity = this.activities.find(a => a.id === id);
        console.log(this.selectedActivity);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    open = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    close = () => {
        this.editMode = false;
    }
}

export default ActivityStore;