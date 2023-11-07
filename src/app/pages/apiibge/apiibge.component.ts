import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObsApiibgeInterface } from 'src/app/shared/interfaces/apiibge.interface';

@Component({
  selector: 'app-apiibge',
  templateUrl: './apiibge.component.html',
  styleUrls: ['./apiibge.component.scss'],
})
export class ApiibgeComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  // When subscribing to an observable in a component, you almost always arrange to unsubscribe when the component is destroyed.
  // There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
  public apiibge: ObsApiibgeInterface = this.activateRoute.snapshot.data['apiibge'];

  ngOnInit(): void { }
}
