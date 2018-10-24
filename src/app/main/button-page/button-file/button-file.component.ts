import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'c3m-button-file',
    templateUrl: './button-file.component.html',
    styleUrls: ['./button-file.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonFileComponent {
    /* File List */
    files: FileList;

    /* OnChange method */
    onChange(files: FileList) {
        this.files = files;
    }
}
