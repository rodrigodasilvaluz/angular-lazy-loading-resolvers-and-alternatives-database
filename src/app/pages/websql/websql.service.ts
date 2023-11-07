import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, delay, of } from 'rxjs';
import {
  WebsqlInterface,
  ObsWebsqlInterface,
} from 'src/app/shared/interfaces/websql.interface';

@Injectable({
  providedIn: 'root',
})
export class WebsqlService {
  public result: ObsWebsqlInterface = {};
  private db: any;

  constructor() {

    // Create data base
    this.db = (<any> window).openDatabase('angular-lazy-loading-resolvers-and-alternatives-database', '', 'Database Application', 2 * 1024 * 1024);

    // Create table
    this.db.transaction((tx: any) => {
      tx.executeSql("DROP TABLE people");
    });

    // Create table
    this.db.transaction((tx: any) => {
      tx.executeSql("CREATE TABLE people (id unique, title string)");
    });

    // Create data 1
    this.db.transaction((tx: any) => {
      tx.executeSql("INSERT INTO people (id, title) VALUES (?,?)", [1, "Pedro"]);
    });

    // Create data 2
    this.db.transaction((tx: any) => {
      tx.executeSql("INSERT INTO people (id, title) VALUES (?,?)", [2, "Ana"]);
    });

    // Create data 3
    this.db.transaction((tx: any) => {
      tx.executeSql("INSERT INTO people (id, title) VALUES (?,?)", [3, "João"]);
    });

    // Create data 4
    this.db.transaction((tx: any) => {
      tx.executeSql("INSERT INTO people (id, title) VALUES (?,?)", [4, "Henrique"]);
    });
  }

  getPeople(callBack: Function): void {
    this.db.transaction(async (tx: any) => {
      tx.executeSql("SELECT id, title FROM people", [], (_tx: any, result: any) => {
        if (!result.rows.length) {
          callBack({ error: 'Não foi possível carregar a websql' });
          return;
        }
        const results: WebsqlInterface[] = [];
        for (let i = 0; i < result.rows.length; i++) {
          const row = result.rows.item(i);
          results.push({
            id: row['id'],
            title: row['title'],
          });
        }
        callBack({ success: results });
      });
    });
  }
}
