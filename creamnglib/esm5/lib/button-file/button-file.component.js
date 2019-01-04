/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var ButtonFileComponent = /** @class */ (function () {
    function ButtonFileComponent() {
    }
    /* OnChange method */
    /**
     * @param {?} files
     * @return {?}
     */
    ButtonFileComponent.prototype.onChange = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.files = files;
    };
    ButtonFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-button-file',
                    template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n    <li *ngFor=\"let f of files\"><span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only></li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
                }] }
    ];
    return ButtonFileComponent;
}());
export { ButtonFileComponent };
function ButtonFileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ButtonFileComponent.prototype.files;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3JlYW1uZ2xpYi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24tZmlsZS9idXR0b24tZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUFZekQscUJBQXFCOzs7OztJQUNyQixzQ0FBUTs7OztJQUFSLFVBQVMsS0FBZTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Z0JBYkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHdhQUEyQztvQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7OEJBUEQ7O1NBUWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2MzbS1idXR0b24tZmlsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24tZmlsZS5jb21wb25lbnQuY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GaWxlQ29tcG9uZW50IHtcbiAgICAvKiBGaWxlIExpc3QgKi9cbiAgICBmaWxlczogRmlsZUxpc3Q7XG5cbiAgICAvKiBPbkNoYW5nZSBtZXRob2QgKi9cbiAgICBvbkNoYW5nZShmaWxlczogRmlsZUxpc3QpIHtcbiAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgIH1cbn1cbiJdfQ==