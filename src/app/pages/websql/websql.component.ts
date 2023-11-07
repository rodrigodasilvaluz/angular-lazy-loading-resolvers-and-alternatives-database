import { Component, DoCheck, OnInit } from '@angular/core';
import { ObsWebsqlInterface } from 'src/app/shared/interfaces/websql.interface';
import { WebsqlService } from './websql.service';

@Component({
  selector: 'app-websql',
  templateUrl: './websql.component.html',
  styleUrls: ['./websql.component.scss'],
})
export class WebsqlComponent implements OnInit, DoCheck {
  public result: ObsWebsqlInterface = {};
  public websql: ObsWebsqlInterface = {};

  constructor(private websqlService: WebsqlService) {}

  ngOnInit(): void {
    this.websqlService.getPeople((websql: ObsWebsqlInterface) => {
      this.result = websql;
    });
  }

  ngDoCheck(): void {
    setTimeout(() => {
      Object.assign(this.websql, this.result);
      this.result = {};
    }, 0);
  }
}
