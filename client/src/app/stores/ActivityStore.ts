import { makeAutoObservable } from "mobx";

export default class ActivityStore{
    name = 'Hello from Mobx';

    constructor(){
        makeAutoObservable(this);
    }

    setName = () => {
        this.name = this.name + '!';
    }
}