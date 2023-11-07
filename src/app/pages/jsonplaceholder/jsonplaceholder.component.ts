import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObsJsonplaceholderInterface } from 'src/app/shared/interfaces/jsonplaceholder.interface';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.scss']
})
export class JsonplaceholderComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  public jsonplaceholder: ObsJsonplaceholderInterface = this.activateRoute.snapshot.data['jsonplaceholder'];

  ngOnInit(): void { }

}
