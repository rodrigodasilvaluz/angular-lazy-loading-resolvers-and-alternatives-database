import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObsJsonserverInterface } from 'src/app/shared/interfaces/jsonserver.interface';

@Component({
  selector: 'app-jsonserver',
  templateUrl: './jsonserver.component.html',
  styleUrls: ['./jsonserver.component.scss'],
})
export class JsonserverComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  public jsonserver: ObsJsonserverInterface = this.activateRoute.snapshot.data['jsonserver'];

  ngOnInit(): void {}
}
