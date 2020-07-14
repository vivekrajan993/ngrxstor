import { Model } from "./model";
import * as ActionFile from './ActionFile'
import { Action } from '@ngrx/store'
import { Data } from '@angular/router';

const initialState: Model = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}
export function reducer(state: Model[] = [initialState], action: ActionFile.Actions) {

    // Section 3
    switch(action.type) {
        case ActionFile.ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}