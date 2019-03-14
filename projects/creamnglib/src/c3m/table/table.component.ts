import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'c3m-column-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnTableComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    /*const heads = document.querySelectorAll('thead th');
    const titles = [];
    for ( let x = 0; x < heads.length ; x++) {
      titles.push(heads[x].innerHTML);
    }

    const bodyTr = document.querySelectorAll('tbody tr');

    for ( let i = 0; i < bodyTr.length; i++) {
        const bodyTrTd = bodyTr[i].querySelectorAll('td');
        for ( let j = 0; j < bodyTrTd.length; j++) {

            const strong = document.createElement('strong');
            const title = document.createTextNode(titles[j]);
            strong.appendChild(title);
            bodyTrTd[j].insertBefore(strong, bodyTrTd[j].childNodes[0]);
        }
    }*/
  }
}
