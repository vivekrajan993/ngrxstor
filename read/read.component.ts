import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../appstate';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Model[]>;

  constructor(private store: Store<AppState>) { 
    debugger
    console.log(store);
    this.tutorials = store.select('Data');
    debugger
    console.log(this.tutorials);

  }

  ngOnInit(): void {
  }

}
