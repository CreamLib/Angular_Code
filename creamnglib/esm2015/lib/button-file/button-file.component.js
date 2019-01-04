/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
export class ButtonFileComponent {
    /**
     * @param {?} files
     * @return {?}
     */
    onChange(files) {
        this.files = files;
    }
}
ButtonFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-file',
                template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n    <li *ngFor=\"let f of files\"><span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only></li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
            }] }
];
function ButtonFileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ButtonFileComponent.prototype.files;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3JlYW1uZ2xpYi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24tZmlsZS9idXR0b24tZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRN0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFLNUIsUUFBUSxDQUFDLEtBQWU7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7OztZQWJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3YUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWZpbGUuY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmlsZUNvbXBvbmVudCB7XG4gICAgLyogRmlsZSBMaXN0ICovXG4gICAgZmlsZXM6IEZpbGVMaXN0O1xuXG4gICAgLyogT25DaGFuZ2UgbWV0aG9kICovXG4gICAgb25DaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICB9XG59XG4iXX0=