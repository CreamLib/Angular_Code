import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {

    // Function getPager (totalItems,  CurrentPage  , PageSize)
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

        // Calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        // StartPage and EndPage declaration
        let startPage: number, endPage: number;

        // Check TotalPages <= 10
        if (totalPages <= 10) {
            startPage = 1; // If Less Than 10 total pages
            endPage = totalPages; // Show All Pages
        } else {
            // Check Total Pages > 10
            if (currentPage <= 6) {
                startPage = 1;  // StartPage = 1
                endPage = 10; // EndPage = 10
            } else if (currentPage + 4 >= totalPages) {
                // Check CurrentPage + 4 >= TotalPages  (Exit TotalPages.length)
                startPage = totalPages - 9; // StartPage = TotalPage - 9
                endPage = totalPages;   // EndPage = total pages
            } else {
                // Check CurrentPage > 6 && CurrentPage + 4 < total pages
                startPage = currentPage - 5; // StartPage = CurrentPage - 5
                endPage = currentPage + 4; // EndPage = CurrentPage +4
            }
        }

        // StartIndex = currentPage-1 * pageSize
        const startIndex = (currentPage - 1) * pageSize;

        // EndIndex = min between [startIndex + pageSize-1] AND [totalItems-1]
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        const pages: number[] = [];

        // Create an array of pages to ng-repeat in the pager control
        for (let i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }

        // Return Pager Properties
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
