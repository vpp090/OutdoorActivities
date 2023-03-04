import { makeObservable, observable } from "mobx";

export default class OfferStore{
    title = 'Hello world';

    constructor(){
        makeObservable(this, {
            title:observable

        })
    }
}