import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  
  template: `
  <div [ngSwitch]="likes">
    <div *ngSwitchCase="'baseball'">// Display baseball content</div>
    <div *ngSwitchCase="'football'">// Display football content</div>
    <div *ngSwitchCase="'baseketball'">// Display baseketball content</div>
  </div>
  <div [ngSwitchCase="'baseball'"]


  <h1 *ngIf="!title; else mytemplate">I'm here</h1>

  <ng-template #mytemplate><h1>I'm not here</h1></ng-template>

  <div *ngIf="title; then truthtempl else fasletempl">
  This will not appear.
  </div>

  <ng-template #truthtempl>I'm true<ng-template>
  <ng-template #falsetempl>I'm false<ng-template>
  
  
  <h1>
  Inline HTML <br>
  I {{ title }} <br>
  {{ teams.baseball }}
  </h1>
  
  <ul>
    <li 
    *ngFor="let team of sportTeams; 
    let i = index;
    let last = last
    ">{{ i + 1 }}. {{ team.baseball }} <strong *ngIf="last">Hey, I'm last</strong></li>
  </ul>
    
  <p>It certainly does!</p>
  `,
  styleUrls: ['./app.component.css']
   
  /*
  styles: [` h1 { color: green; } `]
  */

})
export class AppComponent {
  title = 'app';

  likes = 'baseball';

  teams = {
    baseball: 'Indians',
    basketball: 'Cavaliers',
    football: 'Browns'
  }

  sportTeams =[ 
    { baseball: 'Indians'},
    { baseball: 'Mets'},
    { baseball: 'Yankees'},
  ]
}
