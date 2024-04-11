import { action, makeAutoObservable, observable } from "mobx";

export default class ActivityStore{
    name = 'Hello from Mobx';

    constructor(){
        makeAutoObservable(this, {
            name: observable,
            setName: action.bound
        });
    }

    setName = (name: string) => {
        this.name = name;
    }
}