import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { PagerService } from './pager.service';


@Component({
  selector: 'c3m-pagination',
  moduleId: module.id,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {

    // Constructor
    constructor(private http: Http, private pagerService: PagerService) { }

    // Array of all items to be paged
    private allItems: any[];

    // Pager Object
    pager: any = {};

    // Paged Items
    pagedItems: any[];

    // On Init
    ngOnInit() {
        // Get Data of a JSON (or other...)
        this.http.get('assets/json/dataPagination.json')
            .map((response: Response) => response.json()) // Specify JSON type
            .subscribe(data => {
                // Set items to response Json
                this.allItems = data;

                // Initialize to page 1
                this.setPage(1);
            });
    }

    // SetPage
    setPage(page: number) {
        // check page < 1 or page > totalPages
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // Get pager object from service ( numberOfItems, Page)
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // Get current page of items (copy with slice(start,end))
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
