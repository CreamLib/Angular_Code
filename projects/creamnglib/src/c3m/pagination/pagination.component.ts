import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagerService } from './pager.service';

@Component({
  selector: 'c3m-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {
  // Constructor
  constructor(private http: Http, private pagerService: PagerService) {}

  // Array of all items to be paged
  private allItems: any[];

  // Inputs
  @Input() imgFirst = '';
  @Input() imgBack = '';
  @Input() imgNext = '';
  @Input() imgLast = '';

  // ViewChild
  @ViewChild('pagination') pagination: ElementRef;

  // Pager Object
  pager: any = {};

  // Paged Items
  pagedItems: any[];
  pageSelected = 2;

  // On Init
  ngOnInit() {
    // Get Data of a JSON (or other...)
    from(this.http.get('assets/json/dataPagination.json'))
      .pipe(map((response: Response) => response.json())) // Specify JSON type
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

    // Change aria-page
    const paginationListe = this.pagination.nativeElement;
    const eltPagined = paginationListe.children[this.pageSelected];
    const btnPagined = eltPagined.childNodes[0];
    const nextEltPagined = page + 2;
    const eltOn = page + 1;
    btnPagined.removeAttribute('aria-current');
    const nextButtonPagined = this.pagination.nativeElement.childNodes[nextEltPagined];
    nextButtonPagined.childNodes[0].setAttribute('aria-current', 'page');
    this.pageSelected = eltOn;
  }
}
