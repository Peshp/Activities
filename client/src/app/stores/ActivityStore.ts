import { makeAutoObservable, observable } from "mobx";

export default class ActivityStore{
    name = 'Hello from Mobx';

    constructor(){
        makeAutoObservable(this, {
            name: observable,
        });
    }
}