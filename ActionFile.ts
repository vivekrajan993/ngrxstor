import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Model } from './model'


export const ADD       = '[Data] Add'
export const REMOVE    = '[Data] Remove'

export class AddData implements Action {
    readonly type = ADD

    constructor(public payload: Model) {}
}

export class RemoveData implements Action {
    readonly type = REMOVE

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddData | RemoveData