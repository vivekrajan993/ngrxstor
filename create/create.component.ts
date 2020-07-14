import { Component, OnInit } from '@angular/core';
import { AppState } from '../appstate';
import { Store } from '@ngrx/store';
//import { ActionFile } from '../ActionFile';
import * as ActionFiles from './../ActionFile';
import * as ActionFile from '../ActionFile'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new ActionFile.AddData({name: name, url: url}) )
  }

  ngOnInit(): void {
  }

}
