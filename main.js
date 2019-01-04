(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/creamnglib/fesm5/creamnglib.js":
/*!*********************************************!*\
  !*** ./dist/creamnglib/fesm5/creamnglib.js ***!
  \*********************************************/
/*! exports provided: ButtonComponent, ButtonFileComponent, ButtonIconComponent, ButtonIconOnlyComponent, ButtonSubmitComponent, CreamnglibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFileComponent", function() { return ButtonFileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return ButtonIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconOnlyComponent", function() { return ButtonIconOnlyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSubmitComponent", function() { return ButtonSubmitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreamnglibModule", function() { return CreamnglibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "c3m-button",
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["c3m-button button{color:var(--text-inv);background:var(--main-color)}c3m-button button:hover{opacity:.8}c3m-button.optional button{background-color:var(--n-dark)}c3m-button.submit button{background-color:var(--hot-color)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c3m-button-file',
                    template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n    <li *ngFor=\"let f of files\"><span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only></li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
                }] }
    ];
    return ButtonFileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonIconComponent = /** @class */ (function () {
    function ButtonIconComponent() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ButtonIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c3m-button-icon',
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["c3m-button-icon[class*=icon-] button{color:var(--text-inv);background-color:var(--main-color);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem .5rem 2rem}c3m-button-icon button:hover{opacity:.8}.icon-delete button{background-position:.5em 5px}.icon-edit button{background-position:.5em -78px}.icon-download button{background-position:.5em -176px}.icon-add button{background-position:.5em -242px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonIconComponent.ctorParameters = function () { return []; };
    ButtonIconComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ButtonIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonIconOnlyComponent = /** @class */ (function () {
    function ButtonIconOnlyComponent() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ButtonIconOnlyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ButtonIconOnlyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c3m-button-icon-only',
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["c3m-button-icon-only{position:relative}c3m-button-icon-only[class*=icon-] button{overflow:hidden;text-indent:-50em;color:var(--text-inv);background-color:var(--n-dark);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem}c3m-button-icon-only button:hover{opacity:.8}span.tooltip{display:none;position:absolute;top:50px;width:8em;height:auto;max-width:8em;overflow-wrap:break-word;font:9px/1 var(--stack-m);text-align:center;color:#fff;background:var(--n-s-dark);padding:.7em 1em;border:1px solid var(--n-s-dark);box-shadow:0 1px 2px rgba(0,0,0,.5);opacity:1;z-index:10000}span.tooltip::before{position:absolute;top:-5px;left:50%;display:block;width:10px;height:10px;content:\"\";background:var(--n-s-dark);margin-left:-5px;border-top:1px solid var(--n-s-dark);border-left:1px solid var(--n-s-dark);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-delete button{background-position:7px 5px}.icon-edit button{background-position:7px -78px}.icon-download button{background-position:7px -176px}.icon-add button{background-position:7px -242px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonIconOnlyComponent.ctorParameters = function () { return []; };
    ButtonIconOnlyComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ButtonIconOnlyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonSubmitComponent = /** @class */ (function () {
    function ButtonSubmitComponent() {
    }
    ButtonSubmitComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c3m-button-submit',
                    template: "\n<!-- USE \"Input\" type submit -->\n<input type=\"submit\" value=\"{{ inputValue }}\" />\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["c3m-button-submit input{color:var(--text-inv);background:var(--hot-color);border:none;cursor:pointer}c3m-button-submit input:hover{opacity:.8}"]
                }] }
    ];
    /** @nocollapse */
    ButtonSubmitComponent.ctorParameters = function () { return []; };
    ButtonSubmitComponent.propDecorators = {
        inputValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ButtonSubmitComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CreamnglibModule = /** @class */ (function () {
    function CreamnglibModule() {
    }
    CreamnglibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ButtonComponent,
                        ButtonFileComponent,
                        ButtonIconComponent,
                        ButtonIconOnlyComponent,
                        ButtonSubmitComponent
                    ],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
                    exports: [
                        ButtonComponent,
                        ButtonFileComponent,
                        ButtonIconComponent,
                        ButtonIconOnlyComponent,
                        ButtonSubmitComponent
                    ]
                },] }
    ];
    return CreamnglibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYW1uZ2xpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2NyZWFtbmdsaWIvbGliL2J1dHRvbi1maWxlL2J1dHRvbi1maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uLWljb24vYnV0dG9uLWljb24uY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9idXR0b24taWNvbi1vbmx5L2J1dHRvbi1pY29uLW9ubHkuY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9idXR0b24tc3VibWl0L2J1dHRvbi1zdWJtaXQuY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9jcmVhbW5nbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImMzbS1idXR0b25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9idXR0b24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2J1dHRvbi5jb21wb25lbnQuY3NzXCJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWZpbGUuY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmlsZUNvbXBvbmVudCB7XG4gICAgLyogRmlsZSBMaXN0ICovXG4gICAgZmlsZXM6IEZpbGVMaXN0O1xuXG4gICAgLyogT25DaGFuZ2UgbWV0aG9kICovXG4gICAgb25DaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1idXR0b24taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1pY29uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25JY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgLy8gSW5wdXRzXG4gICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWljb24tb25seScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi1vbmx5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWljb24tb25seS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uU3VibWl0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qIElucHV0IFN1Ym1pdCB2YWx1ZSAqL1xuICBASW5wdXQoKSBpbnB1dFZhbHVlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uRmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi1maWxlL2J1dHRvbi1maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uSWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi1pY29uL2J1dHRvbi1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24taWNvbi1vbmx5L2J1dHRvbi1pY29uLW9ubHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCdXR0b25TdWJtaXRDb21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24tc3VibWl0L2J1dHRvbi1zdWJtaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkZpbGVDb21wb25lbnQsXG4gICAgQnV0dG9uSWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25JY29uT25seUNvbXBvbmVudCxcbiAgICBCdXR0b25TdWJtaXRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkZpbGVDb21wb25lbnQsXG4gICAgQnV0dG9uSWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25JY29uT25seUNvbXBvbmVudCxcbiAgICBCdXR0b25TdWJtaXRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhbW5nbGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBU0U7S0FBZ0I7O2dCQVBqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDJKQUFzQztvQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OzswQkFQRDs7Ozs7OztBQ0FBOzs7Ozs7OztJQWFJLHNDQUFROzs7O0lBQVIsVUFBUyxLQUFlO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOztnQkFiSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isd2FBQTJDO29CQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs4QkFQRDs7Ozs7OztBQ0FBO0lBYUU7O1FBRkMsYUFBaUIsRUFBRSxDQUFDO0tBRUo7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixrTEFBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7O3dCQUlHLEtBQUs7OzhCQVhUOzs7Ozs7O0FDQUE7SUFhRTs7UUFGQSxhQUFpQixFQUFFLENBQUM7S0FFSjs7OztJQUVoQiwwQ0FBUTs7O0lBQVIsZUFBYTs7Z0JBYmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGtMQUFnRDtvQkFFaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7d0JBSUUsS0FBSzs7a0NBWFI7Ozs7Ozs7QUNBQTtJQVVFO0tBQWlCOztnQkFSbEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdHQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7NkJBTUUsS0FBSzs7Z0NBYlI7Ozs7Ozs7QUNBQTs7OztnQkFRQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjtxQkFDdEI7aUJBQ0Y7OzJCQXhCRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <app-main id=\"page-body\" (click)=\"CallToggleMenuBurger()\">\n    <c3m-breadcrumbs [allowBootstrap]=\"true\" [addClass]=\"'custom-crumbs'\"></c3m-breadcrumbs>\n    <router-outlet></router-outlet>\n  </app-main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        // Initialise Code-Prettify
        this.PR = window['PR'];
    }
    // Write snippets into comp pages
    AppComponent.prototype.codeSnippets = function (subComp) {
        var compBlock = document.querySelectorAll('.descriptionComponent');
        var compB = Array.prototype.slice.call(compBlock);
        var mainFolder = compB[0].getAttribute('id');
        var file2Read, tempo;
        var charArray = ['<', '>', '{', '}', '\'', ' & ', '\'', '\`'];
        var entArray = ['&lt;', '&gt;', '&#123;', '&#125;', '&#34;', '&amp;', '&apos;', '&#96;'];
        var _loop_1 = function (i) {
            var compBlockId = compB[i].getAttribute('id');
            /* Find proper block to write to */
            var toWrite2 = compB[i].querySelectorAll('c3m-tabs.snippets c3m-tab');
            var _loop_2 = function (z) {
                tempo = toWrite2[z];
                if (tempo.getAttribute('tabTitle') === 'HTML') {
                    var output_1 = tempo.querySelector('div.content');
                    output_1.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-HTML' + '\"></div>');
                    output_1 = document.getElementById(compBlockId + '-HTML');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.html';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_1.innerHTML = output_1.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.html</strong></p><div class=\"code\"><!--?prettify lang=html linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.html';
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_1.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.html</strong></p><div class=\"code\"><!--?prettify lang=html linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                            }
                        });
                    }
                }
                else if (tempo.getAttribute('tabTitle') === 'CSS') {
                    var output_2 = tempo.querySelector('div.content');
                    output_2.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-CSS' + '\"></div>');
                    output_2 = document.getElementById(compBlockId + '-CSS');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.css';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_2.innerHTML = output_2.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.css</strong></p><div class=\"code\"><!--?prettify lang=css linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.css';
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_2.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.css</strong></p><div class=\"code\"><!--?prettify lang=css linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                            }
                        });
                    }
                }
                else {
                    var output_3 = tempo.querySelector('div.content');
                    output_3.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-TS' + '\"></div>');
                    output_3 = document.getElementById(compBlockId + '-TS');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.ts';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_3.innerHTML = output_3.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.ts</strong></p><div class=\"code\"><!--?prettify lang=js linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.ts';
                        this_1.http.get(file2Read)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_3.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.ts</strong></p><div class=\"code\"><!--?prettify lang=js linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                            }
                        });
                    }
                }
            };
            for (var z = 0; z < toWrite2.length; z++) {
                _loop_2(z);
            }
        };
        var this_1 = this;
        for (var i = 0; i < compB.length; i++) {
            _loop_1(i);
        }
    };
    // Function create random ID for Accessibility
    AppComponent.prototype.randomID = function () {
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    // After View Checked
    AppComponent.prototype.ngAfterViewChecked = function () {
        // Launch Code-Prettify
        this.PR.prettyPrint();
    };
    AppComponent.prototype.CallToggleMenuBurger = function () {
        this.header.ToggleMenuBurgerMain();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"])
    ], AppComponent.prototype, "header", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-scroll-to */ "./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
/* harmony import */ var _module_breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-breadcrumbs */ "./src/app/module-breadcrumbs.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/accueil/accueil.component */ "./src/app/main/accueil/accueil.component.ts");
/* harmony import */ var _main_accordion_page_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/accordion-page/accordion/accordion.component */ "./src/app/main/accordion-page/accordion/accordion.component.ts");
/* harmony import */ var _main_accordion_page_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/accordion-page/accordion/accordion-item/accordion-item.component */ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_tabs_page_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/tabs-page/tabs/tabs.component */ "./src/app/main/tabs-page/tabs/tabs.component.ts");
/* harmony import */ var _main_tabs_page_tabs_tabs_item_tabs_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/tabs-page/tabs/tabs-item/tabs-item.component */ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.ts");
/* harmony import */ var _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/button-page/button-page.component */ "./src/app/main/button-page/button-page.component.ts");
/* harmony import */ var _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/tabs-page/tabs-page.component */ "./src/app/main/tabs-page/tabs-page.component.ts");
/* harmony import */ var _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/accordion-page/accordion-page.component */ "./src/app/main/accordion-page/accordion-page.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _header_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/menu/menu-item/menu-item.component */ "./src/app/header/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/carousel-page/carousel-page.component */ "./src/app/main/carousel-page/carousel-page.component.ts");
/* harmony import */ var _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/modal-page/modal-page.component */ "./src/app/main/modal-page/modal-page.component.ts");
/* harmony import */ var _main_modal_page_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/modal-page/modal/modal.component */ "./src/app/main/modal-page/modal/modal.component.ts");
/* harmony import */ var _main_modal_page_modal_alert_modal_alert_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/modal-page/modal-alert/modal-alert.component */ "./src/app/main/modal-page/modal-alert/modal-alert.component.ts");
/* harmony import */ var _main_carousel_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/carousel-page/carousel/carousel.component */ "./src/app/main/carousel-page/carousel/carousel.component.ts");
/* harmony import */ var _main_carousel_page_carousel_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/carousel-page/carousel/carousel-item/carousel-item.component */ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.ts");
/* harmony import */ var _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/table-page/table-page.component */ "./src/app/main/table-page/table-page.component.ts");
/* harmony import */ var _main_table_page_table_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main/table-page/table/table.component */ "./src/app/main/table-page/table/table.component.ts");
/* harmony import */ var _main_table_page_table_toggle_table_toggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./main/table-page/table-toggle/table-toggle.component */ "./src/app/main/table-page/table-toggle/table-toggle.component.ts");
/* harmony import */ var _main_table_page_table_swipe_table_swipe_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/table-page/table-swipe/table-swipe.component */ "./src/app/main/table-page/table-swipe/table-swipe.component.ts");
/* harmony import */ var _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main/pagination-page/pagination-page.component */ "./src/app/main/pagination-page/pagination-page.component.ts");
/* harmony import */ var _main_pagination_page_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main/pagination-page/pagination/pagination.component */ "./src/app/main/pagination-page/pagination/pagination.component.ts");
/* harmony import */ var _main_pagination_page_pagination_pager_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./main/pagination-page/pagination/pager.service */ "./src/app/main/pagination-page/pagination/pager.service.ts");
/* harmony import */ var _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./main/slider-page/slider-page.component */ "./src/app/main/slider-page/slider-page.component.ts");
/* harmony import */ var _main_slider_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./main/slider-page/slider/slider.component */ "./src/app/main/slider-page/slider/slider.component.ts");
/* harmony import */ var _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./main/getting-started/getting-started.component */ "./src/app/main/getting-started/getting-started.component.ts");
/* harmony import */ var _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./main/step-page/step-page.component */ "./src/app/main/step-page/step-page.component.ts");
/* harmony import */ var _main_step_page_step_step_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./main/step-page/step/step.component */ "./src/app/main/step-page/step/step.component.ts");
/* harmony import */ var _main_step_page_step_step_item_step_item_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./main/step-page/step/step-item/step-item.component */ "./src/app/main/step-page/step/step-item/step-item.component.ts");
/* harmony import */ var _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./main/calendar-page/calendar-page.component */ "./src/app/main/calendar-page/calendar-page.component.ts");
/* harmony import */ var _main_calendar_page_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./main/calendar-page/calendar/calendar.component */ "./src/app/main/calendar-page/calendar/calendar.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./main/dropdown-page/dropdown-page.component */ "./src/app/main/dropdown-page/dropdown-page.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./main/dropdown-page/dropdown/dropdown.component */ "./src/app/main/dropdown-page/dropdown/dropdown.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_dropdown_item_dropdown_item_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./main/dropdown-page/dropdown/dropdown-item/dropdown-item.component */ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.ts");
/* harmony import */ var _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./main/input-page/input-page.component */ "./src/app/main/input-page/input-page.component.ts");
/* harmony import */ var _main_input_page_input_input_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./main/input-page/input/input.component */ "./src/app/main/input-page/input/input.component.ts");
/* harmony import */ var _main_input_page_input_floating_input_floating_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./main/input-page/input-floating/input-floating.component */ "./src/app/main/input-page/input-floating/input-floating.component.ts");
/* harmony import */ var _main_input_page_input_material_input_material_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./main/input-page/input-material/input-material.component */ "./src/app/main/input-page/input-material/input-material.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-page.component */ "./src/app/main/checkbox-page/checkbox-page.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./main/checkbox-page/checkbox/checkbox.component */ "./src/app/main/checkbox-page/checkbox/checkbox.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-group/checkbox-group.component */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_button_checkbox_button_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-button/checkbox-button.component */ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.ts");
/* harmony import */ var _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./main/select-page/select-page.component */ "./src/app/main/select-page/select-page.component.ts");
/* harmony import */ var _main_select_page_select_select_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./main/select-page/select/select.component */ "./src/app/main/select-page/select/select.component.ts");
/* harmony import */ var _main_select_page_select_datalist_select_datalist_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./main/select-page/select-datalist/select-datalist.component */ "./src/app/main/select-page/select-datalist/select-datalist.component.ts");
/* harmony import */ var _main_select_page_select_datalists_select_datalists_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./main/select-page/select-datalists/select-datalists.component */ "./src/app/main/select-page/select-datalists/select-datalists.component.ts");
/* harmony import */ var _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./main/faq/faq.component */ "./src/app/main/faq/faq.component.ts");
/* harmony import */ var _main_input_page_input_tel_input_tel_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./main/input-page/input-tel/input-tel.component */ "./src/app/main/input-page/input-tel/input-tel.component.ts");
/* harmony import */ var _main_input_page_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./main/input-page/input-mail/input-mail.component */ "./src/app/main/input-page/input-mail/input-mail.component.ts");
/* harmony import */ var _main_input_page_input_error_msg_input_error_msg_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./main/input-page/input-error-msg/input-error-msg.component */ "./src/app/main/input-page/input-error-msg/input-error-msg.component.ts");
/* harmony import */ var _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./main/breadcrumbs-page/breadcrumbs-page.component */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts");
/* harmony import */ var _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./main/fieldset-page/fieldset-page.component */ "./src/app/main/fieldset-page/fieldset-page.component.ts");
/* harmony import */ var _main_navbar_page_navbar_page_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./main/navbar-page/navbar-page.component */ "./src/app/main/navbar-page/navbar-page.component.ts");
/* harmony import */ var _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./main/list-page/list-page.component */ "./src/app/main/list-page/list-page.component.ts");
/* harmony import */ var _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./main/skip-page/skip-page.component */ "./src/app/main/skip-page/skip-page.component.ts");
/* harmony import */ var _main_fieldset_page_fieldset_fieldset_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./main/fieldset-page/fieldset/fieldset.component */ "./src/app/main/fieldset-page/fieldset/fieldset.component.ts");
/* harmony import */ var _main_skip_page_skip_skip_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./main/skip-page/skip/skip.component */ "./src/app/main/skip-page/skip/skip.component.ts");
/* harmony import */ var _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./main/toast-page/toast-page.component */ "./src/app/main/toast-page/toast-page.component.ts");
/* harmony import */ var _main_toast_page_toast_toast_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./main/toast-page/toast/toast.component */ "./src/app/main/toast-page/toast/toast.component.ts");
/* harmony import */ var _main_list_page_list_list_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./main/list-page/list/list.component */ "./src/app/main/list-page/list/list.component.ts");
/* harmony import */ var _main_list_page_list_order_list_order_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./main/list-page/list-order/list-order.component */ "./src/app/main/list-page/list-order/list-order.component.ts");
/* harmony import */ var _main_list_page_list_thumbnails_list_thumbnails_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./main/list-page/list-thumbnails/list-thumbnails.component */ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.ts");
/* harmony import */ var _main_list_page_list_description_list_description_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./main/list-page/list-description/list-description.component */ "./src/app/main/list-page/list-description/list-description.component.ts");
/* harmony import */ var _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./main/bottom-page/bottom-page.component */ "./src/app/main/bottom-page/bottom-page.component.ts");
/* harmony import */ var _main_bottom_page_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./main/bottom-page/bottom/bottom.component */ "./src/app/main/bottom-page/bottom/bottom.component.ts");
/* harmony import */ var _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./main/radio-page/radio-page.component */ "./src/app/main/radio-page/radio-page.component.ts");
/* harmony import */ var _main_radio_page_radio_radio_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./main/radio-page/radio/radio.component */ "./src/app/main/radio-page/radio/radio.component.ts");
/* harmony import */ var _main_radio_page_radio_radio_item_radio_item_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./main/radio-page/radio/radio-item/radio-item.component */ "./src/app/main/radio-page/radio/radio-item/radio-item.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_group_checkbox_group_item_checkbox_group_item_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_link_checkbox_link_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-link/checkbox-link.component */ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.ts");
/* harmony import */ var _main_input_page_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./main/input-page/input-search/input-search.component */ "./src/app/main/input-page/input-search/input-search.component.ts");
/* harmony import */ var _main_slider_page_progress_progress_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./main/slider-page/progress/progress.component */ "./src/app/main/slider-page/progress/progress.component.ts");
/* harmony import */ var _main_input_page_input_url_input_url_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./main/input-page/input-url/input-url.component */ "./src/app/main/input-page/input-url/input-url.component.ts");
/* harmony import */ var _main_input_page_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./main/input-page/input-password/input-password.component */ "./src/app/main/input-page/input-password/input-password.component.ts");
/* harmony import */ var creamnglib__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! creamnglib */ "./dist/creamnglib/fesm5/creamnglib.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
























































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_11__["AccueilComponent"],
                _main_accordion_page_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__["AccordionComponent"],
                _main_accordion_page_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_13__["AccordionItemComponent"],
                _main_tabs_page_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _main_tabs_page_tabs_tabs_item_tabs_item_component__WEBPACK_IMPORTED_MODULE_16__["TabComponent"],
                _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_17__["ButtonPageComponent"],
                _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_18__["TabsPageComponent"],
                _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_19__["AccordionPageComponent"],
                _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _header_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_21__["MenuItemComponent"],
                _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_22__["CarouselPageComponent"],
                _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_23__["ModalPageComponent"],
                _main_modal_page_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"],
                _main_modal_page_modal_alert_modal_alert_component__WEBPACK_IMPORTED_MODULE_25__["ModalAlertComponent"],
                _main_carousel_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_26__["CarouselComponent"],
                _main_carousel_page_carousel_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_27__["CarouselItemComponent"],
                _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_28__["TablePageComponent"],
                _main_table_page_table_table_component__WEBPACK_IMPORTED_MODULE_29__["ColumnTableComponent"],
                _main_table_page_table_toggle_table_toggle_component__WEBPACK_IMPORTED_MODULE_30__["ToggleTableComponent"],
                _main_table_page_table_swipe_table_swipe_component__WEBPACK_IMPORTED_MODULE_31__["PageSwipeTableComponent"],
                _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_32__["PaginationPageComponent"],
                _main_pagination_page_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_33__["PaginationComponent"],
                _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_35__["SliderPageComponent"],
                _main_slider_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_36__["SliderComponent"],
                _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_37__["GettingStartedComponent"],
                _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_38__["StepPageComponent"],
                _main_step_page_step_step_component__WEBPACK_IMPORTED_MODULE_39__["StepComponent"],
                _main_step_page_step_step_item_step_item_component__WEBPACK_IMPORTED_MODULE_40__["StepItemComponent"],
                _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_41__["CalendarPageComponent"],
                _main_calendar_page_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_42__["CalendarComponent"],
                _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_43__["DropdownPageComponent"],
                _main_dropdown_page_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_44__["DropdownComponent"],
                _main_dropdown_page_dropdown_dropdown_item_dropdown_item_component__WEBPACK_IMPORTED_MODULE_45__["DropdownItemComponent"],
                _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_46__["InputPageComponent"],
                _main_input_page_input_input_component__WEBPACK_IMPORTED_MODULE_47__["InputComponent"],
                _main_input_page_input_floating_input_floating_component__WEBPACK_IMPORTED_MODULE_48__["InputFloatingComponent"],
                _main_input_page_input_material_input_material_component__WEBPACK_IMPORTED_MODULE_49__["InputMaterialComponent"],
                _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_50__["CheckboxPageComponent"],
                _main_checkbox_page_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_51__["CheckboxComponent"],
                _main_checkbox_page_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_52__["CheckboxGroupComponent"],
                _main_checkbox_page_checkbox_button_checkbox_button_component__WEBPACK_IMPORTED_MODULE_53__["CheckboxButtonComponent"],
                _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_54__["SelectPageComponent"],
                _main_select_page_select_select_component__WEBPACK_IMPORTED_MODULE_55__["SelectComponent"],
                _main_select_page_select_datalist_select_datalist_component__WEBPACK_IMPORTED_MODULE_56__["SelectDatalistComponent"],
                _main_select_page_select_datalists_select_datalists_component__WEBPACK_IMPORTED_MODULE_57__["SelectDatalistsComponent"],
                _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_58__["FaqComponent"],
                _main_input_page_input_tel_input_tel_component__WEBPACK_IMPORTED_MODULE_59__["InputTelComponent"],
                _main_input_page_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_60__["InputMailComponent"],
                _main_input_page_input_error_msg_input_error_msg_component__WEBPACK_IMPORTED_MODULE_61__["InputErrorMsgComponent"],
                _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_62__["BreadcrumbsPageComponent"],
                _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_63__["FieldsetPageComponent"],
                _main_navbar_page_navbar_page_component__WEBPACK_IMPORTED_MODULE_64__["NavbarPageComponent"],
                _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_65__["ListPageComponent"],
                _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_66__["SkipPageComponent"],
                _main_fieldset_page_fieldset_fieldset_component__WEBPACK_IMPORTED_MODULE_67__["FieldsetComponent"],
                _main_skip_page_skip_skip_component__WEBPACK_IMPORTED_MODULE_68__["SkipComponent"],
                _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_69__["ToastPageComponent"],
                _main_toast_page_toast_toast_component__WEBPACK_IMPORTED_MODULE_70__["ToastComponent"],
                _main_list_page_list_list_component__WEBPACK_IMPORTED_MODULE_71__["ListComponent"],
                _main_list_page_list_order_list_order_component__WEBPACK_IMPORTED_MODULE_72__["ListOrderComponent"],
                _main_list_page_list_thumbnails_list_thumbnails_component__WEBPACK_IMPORTED_MODULE_73__["ListThumbnailsComponent"],
                _main_list_page_list_description_list_description_component__WEBPACK_IMPORTED_MODULE_74__["ListDescriptionComponent"],
                _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_75__["BottomPageComponent"],
                _main_bottom_page_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_76__["BottomComponent"],
                _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_77__["RadioPageComponent"],
                _main_radio_page_radio_radio_component__WEBPACK_IMPORTED_MODULE_78__["RadioComponent"],
                _main_radio_page_radio_radio_item_radio_item_component__WEBPACK_IMPORTED_MODULE_79__["RadioItemComponent"],
                _main_checkbox_page_checkbox_group_checkbox_group_item_checkbox_group_item_component__WEBPACK_IMPORTED_MODULE_80__["CheckboxGroupItemComponent"],
                _main_checkbox_page_checkbox_link_checkbox_link_component__WEBPACK_IMPORTED_MODULE_81__["CheckboxLinkComponent"],
                _main_input_page_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_82__["InputSearchComponent"],
                _main_slider_page_progress_progress_component__WEBPACK_IMPORTED_MODULE_83__["ProgressComponent"],
                _main_input_page_input_url_input_url_component__WEBPACK_IMPORTED_MODULE_84__["InputUrlComponent"],
                _main_input_page_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_85__["InputPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_87__["appRoutes"]),
                ng_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieAnimationViewModule"].forRoot(),
                _module_breadcrumbs__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                creamnglib__WEBPACK_IMPORTED_MODULE_86__["CreamnglibModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
            providers: [_main_pagination_page_pagination_pager_service__WEBPACK_IMPORTED_MODULE_34__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/accueil/accueil.component */ "./src/app/main/accueil/accueil.component.ts");
/* harmony import */ var _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/button-page/button-page.component */ "./src/app/main/button-page/button-page.component.ts");
/* harmony import */ var _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/tabs-page/tabs-page.component */ "./src/app/main/tabs-page/tabs-page.component.ts");
/* harmony import */ var _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/accordion-page/accordion-page.component */ "./src/app/main/accordion-page/accordion-page.component.ts");
/* harmony import */ var _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/modal-page/modal-page.component */ "./src/app/main/modal-page/modal-page.component.ts");
/* harmony import */ var _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/carousel-page/carousel-page.component */ "./src/app/main/carousel-page/carousel-page.component.ts");
/* harmony import */ var _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/table-page/table-page.component */ "./src/app/main/table-page/table-page.component.ts");
/* harmony import */ var _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/pagination-page/pagination-page.component */ "./src/app/main/pagination-page/pagination-page.component.ts");
/* harmony import */ var _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/slider-page/slider-page.component */ "./src/app/main/slider-page/slider-page.component.ts");
/* harmony import */ var _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/getting-started/getting-started.component */ "./src/app/main/getting-started/getting-started.component.ts");
/* harmony import */ var _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/faq/faq.component */ "./src/app/main/faq/faq.component.ts");
/* harmony import */ var _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/step-page/step-page.component */ "./src/app/main/step-page/step-page.component.ts");
/* harmony import */ var _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/calendar-page/calendar-page.component */ "./src/app/main/calendar-page/calendar-page.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/dropdown-page/dropdown-page.component */ "./src/app/main/dropdown-page/dropdown-page.component.ts");
/* harmony import */ var _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/input-page/input-page.component */ "./src/app/main/input-page/input-page.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-page.component */ "./src/app/main/checkbox-page/checkbox-page.component.ts");
/* harmony import */ var _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/radio-page/radio-page.component */ "./src/app/main/radio-page/radio-page.component.ts");
/* harmony import */ var _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/select-page/select-page.component */ "./src/app/main/select-page/select-page.component.ts");
/* harmony import */ var _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/fieldset-page/fieldset-page.component */ "./src/app/main/fieldset-page/fieldset-page.component.ts");
/* harmony import */ var _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/skip-page/skip-page.component */ "./src/app/main/skip-page/skip-page.component.ts");
/* harmony import */ var _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/toast-page/toast-page.component */ "./src/app/main/toast-page/toast-page.component.ts");
/* harmony import */ var _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/list-page/list-page.component */ "./src/app/main/list-page/list-page.component.ts");
/* harmony import */ var _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/bottom-page/bottom-page.component */ "./src/app/main/bottom-page/bottom-page.component.ts");
/* harmony import */ var _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/breadcrumbs-page/breadcrumbs-page.component */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts");
























var appRoutes = [
    { path: "home", component: _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_0__["AccueilComponent"], data: { breadcrumb: "Home" } },
    {
        path: "button",
        component: _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_1__["ButtonPageComponent"],
        data: { breadcrumb: "Button" }
    },
    { path: "tabs", component: _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__["TabsPageComponent"], data: { breadcrumb: "Tabs" } },
    {
        path: "accordion",
        component: _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_3__["AccordionPageComponent"],
        data: { breadcrumb: "Accordion" }
    },
    {
        path: "modal",
        component: _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_4__["ModalPageComponent"],
        data: { breadcrumb: "modal" }
    },
    {
        path: "carousel",
        component: _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_5__["CarouselPageComponent"],
        data: { breadcrumb: "carousel" }
    },
    {
        path: "table",
        component: _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_6__["TablePageComponent"],
        data: { breadcrumb: "table" }
    },
    {
        path: "pagination",
        component: _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_7__["PaginationPageComponent"],
        data: { breadcrumb: "pagination" }
    },
    {
        path: "slider",
        component: _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_8__["SliderPageComponent"],
        data: { breadcrumb: "slider" }
    },
    {
        path: "gettingStarted",
        component: _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"],
        data: { breadcrumb: "GettingStarted" }
    },
    { path: "faq", component: _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"], data: { breadcrumb: "F.A.Q" } },
    { path: "step", component: _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_11__["StepPageComponent"], data: { breadcrumb: "Step" } },
    {
        path: "calendar",
        component: _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_12__["CalendarPageComponent"],
        data: { breadcrumb: "Calendar" }
    },
    {
        path: "dropdown",
        component: _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_13__["DropdownPageComponent"],
        data: { breadcrumb: "Dropdown" }
    },
    {
        path: "input",
        component: _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_14__["InputPageComponent"],
        data: { breadcrumb: "Input" }
    },
    {
        path: "checkbox",
        component: _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_15__["CheckboxPageComponent"],
        data: { breadcrumb: "Checkbox" }
    },
    {
        path: "radio",
        component: _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_16__["RadioPageComponent"],
        data: { breadcrumb: "Radios" }
    },
    {
        path: "select",
        component: _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_17__["SelectPageComponent"],
        data: { breadcrumb: "select" }
    },
    {
        path: "fieldset",
        component: _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_18__["FieldsetPageComponent"],
        data: { breadcrumb: "fieldset" }
    },
    { path: "skip", component: _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_19__["SkipPageComponent"], data: { breadcrumb: "skip" } },
    {
        path: "toast",
        component: _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_20__["ToastPageComponent"],
        data: { breadcrumb: "toast" }
    },
    { path: "list", component: _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_21__["ListPageComponent"], data: { breadcrumb: "list" } },
    {
        path: "bottom",
        component: _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_22__["BottomPageComponent"],
        data: { breadcrumb: "Bottom" }
    },
    {
        path: "breadcrumbs",
        component: _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_23__["BreadcrumbsPageComponent"],
        data: { breadcrumb: "Breadcrumbs" }
    },
    { path: "", redirectTo: "/home", pathMatch: "full" }
    //  { path: '**', component: PageNotFoundComponent }
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    color: var(--body-text);\n    background-color: var(--n-light);\n    padding: 1rem 5%;\n}\n\n  footer p {\n    font-size: 0.8rem;\n    line-height: 1.45;\n  }\n\n  @media screen and (min-width: 1000px) {\n    .footerContent p {\n      font-size: 1rem;\n      text-align: right;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxpQkFBaUI7Q0FDcEI7O0VBRUM7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0dBQ25COztFQUdIO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsa0JBQWtCO0tBQ25CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5LXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tbGlnaHQpO1xuICAgIHBhZGRpbmc6IDFyZW0gNSU7XG59XG5cbiAgZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICB9XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgLmZvb3RlckNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footerContent\">\n  <p>CREAM LIB, <span>Open-Source © 2018</span>, Contributors : Thibault J. - Angela P.R. - Johan B.</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HEADER */\n\nheader {background-color: var(--n-dark);}\n\nheader h1 {\n    color: var(--text-inv);\n    background-color: var(--n-dark);\n    padding: 1.1rem 0 0 45px;\n    margin-left: 5%;\n  }\n\nh1 img {max-width: 175px;}\n\nheader > button {\n    position: absolute;\n    top: 0;\n    left: 5%;\n    background: initial;\n    padding: 1rem;\n    margin-left: -1rem;\n    transition: -webkit-transform 0.7s;\n    transition: transform 0.7s;\n    transition: transform 0.7s, -webkit-transform 0.7s;\n  }\n\nheader > button img {width: 25px; height: 25px;}\n\n/* If Burger Menu Open */\n\n.mobileOpen {\n  height: 100%;\n  left: 0;\n  transition: left 0.6s;\n}\n\n/* Else if Burger Menu Close */\n\n.mobileClose {transition: left 0.6s;}\n\n/* Rotate Burger Button */\n\n.burgerVertical {-webkit-transform: rotateZ(90deg);transform: rotateZ(90deg);}\n\nc3m-menu {\n  position: absolute;\n  left: -1000px;\n  width: 80%;\n  max-width: 350px;\n  height: auto;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  transition: left 0.6s;\n  z-index: 999;\n}\n\n@media screen and (min-width: 1000px) {\n\n  header {height: 100%;}\n    header .logo {\n      display: block;\n      text-align: center;\n      padding: 5vh 0 9vh;\n    }\n    header h1 {padding: 0; margin: 0;}\n    header > button {display: none;}\n    header > p {padding: 0;}\n\n    header .mobileClose, .mobileOpen {\n      left: 0;\n      height: auto;\n      background-color: var(--n-dark);\n    }\n\n  c3m-menu {\n    display: block;\n    position: static;\n    overflow: hidden;\n    width: auto;\n    height: auto;\n    top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVosUUFBUSxnQ0FBZ0MsQ0FBQzs7QUFFdkM7SUFDRSx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixnQkFBZ0I7R0FDakI7O0FBQ0csUUFBUSxpQkFBaUIsQ0FBQzs7QUFFOUI7SUFDRSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQ0FBMkI7SUFBM0IsMkJBQTJCO0lBQTNCLG1EQUEyQjtHQUM1Qjs7QUFFQyxxQkFBcUIsWUFBWSxDQUFDLGFBQWEsQ0FBQzs7QUFFcEQseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0NBQ3ZCOztBQUVELCtCQUErQjs7QUFFL0IsY0FBYyxzQkFBc0IsQ0FBQzs7QUFFckMsMEJBQTBCOztBQUUxQixpQkFBaUIsa0NBQTBCLEFBQTFCLDBCQUEwQixDQUFDOztBQUU1QztFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsYUFBYTtDQUNkOztBQUVEOztFQUVFLFFBQVEsYUFBYSxDQUFDO0lBQ3BCO01BQ0UsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixtQkFBbUI7S0FDcEI7SUFDRCxXQUFXLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDbEMsaUJBQWlCLGNBQWMsQ0FBQztJQUNoQyxZQUFZLFdBQVcsQ0FBQzs7SUFFeEI7TUFDRSxRQUFRO01BQ1IsYUFBYTtNQUNiLGdDQUFnQztLQUNqQzs7RUFFSDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztHQUNSO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIRUFERVIgKi9cblxuaGVhZGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO31cblxuICBoZWFkZXIgaDEge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgICBwYWRkaW5nOiAxLjFyZW0gMCAwIDQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gICAgICBoMSBpbWcge21heC13aWR0aDogMTc1cHg7fVxuXG4gIGhlYWRlciA+IGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzO1xuICB9XG5cbiAgICBoZWFkZXIgPiBidXR0b24gaW1nIHt3aWR0aDogMjVweDsgaGVpZ2h0OiAyNXB4O31cblxuLyogSWYgQnVyZ2VyIE1lbnUgT3BlbiAqL1xuXG4ubW9iaWxlT3BlbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzO1xufVxuXG4vKiBFbHNlIGlmIEJ1cmdlciBNZW51IENsb3NlICovXG5cbi5tb2JpbGVDbG9zZSB7dHJhbnNpdGlvbjogbGVmdCAwLjZzO31cblxuLyogUm90YXRlIEJ1cmdlciBCdXR0b24gKi9cblxuLmJ1cmdlclZlcnRpY2FsIHt0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO31cblxuYzNtLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLXRleHQtaW52KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuXG4gIGhlYWRlciB7aGVpZ2h0OiAxMDAlO31cbiAgICBoZWFkZXIgLmxvZ28ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1dmggMCA5dmg7XG4gICAgfVxuICAgIGhlYWRlciBoMSB7cGFkZGluZzogMDsgbWFyZ2luOiAwO31cbiAgICBoZWFkZXIgPiBidXR0b24ge2Rpc3BsYXk6IG5vbmU7fVxuICAgIGhlYWRlciA+IHAge3BhZGRpbmc6IDA7fVxuXG4gICAgaGVhZGVyIC5tb2JpbGVDbG9zZSwgLm1vYmlsZU9wZW4ge1xuICAgICAgbGVmdDogMDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tZGFyayk7XG4gICAgfVxuXG4gIGMzbS1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header>\n\n    <!-- Burger Button -->\n    <button [ngClass]=\"{burgerVertical: menuMobile, burgerHorizontal: !menuMobile}\" (click)=\"ToggleMenuBurger()\">\n        <img src=\"assets/img/burger.svg\" alt=\"Mobile Button (Open Menu)\"/>\n    </button>\n\n    <!-- Logo -->\n    <h1>\n        <a routerLink=\"/home\" class=\"logo\" routerLinkActive=\"active\">\n            <picture>\n                <source srcset=\"assets/img/creamNG-logo.svg\" media=\"(min-width: {{mediumRes}})\">\n                <img src=\"assets/img/creamNG-logo-sml.svg\" alt=\"Cream-NG, your accessible Angular Lib\">\n            </picture>\n        </a>\n    </h1>\n\n    <!-- MENU -->\n    <c3m-menu [ngClass]=\"{mobileOpen: menuMobile, mobileClose: !menuMobile}\">\n\n        <!-- GROUP FORM ELEMENTS -->\n        <c3m-menu-item nameButton=\"Form Elements\" idSvg=\"assets/img/icons.svg#svg1\" [index]=1 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/button\" routerLinkActive=\"active\">Buttons &amp; Controls</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/checkbox\" routerLinkActive=\"active\">Checkboxes</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/calendar\" routerLinkActive=\"active\">Datepicker</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/fieldset\" routerLinkActive=\"active\">Fieldset</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/input\" routerLinkActive=\"active\">Inputs</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/radio\" routerLinkActive=\"active\">Radios</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/select\" routerLinkActive=\"active\">Selects &amp; Datalists</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/slider\" routerLinkActive=\"active\">Sliders  &amp; Progress</a></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- NAVIGATION -->\n        <c3m-menu-item nameButton=\"Navigation\" idSvg=\"assets/img/icons.svg#svg2\" [index]=2 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/breadcrumbs\" routerLinkActive=\"active\">Breadcrumbs</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/skip\" routerLinkActive=\"active\">Skip Link</a></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- GROUP BLOCKS -->\n        <c3m-menu-item nameButton=\"Blocks\" idSvg=\"assets/img/icons.svg#svg3\" [index]=3 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/accordion\" routerLinkActive=\"active\">Accordion</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/carousel\" routerLinkActive=\"active\">Carousel</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/table\" routerLinkActive=\"active\">Data Table</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/list\" routerLinkActive=\"active\">List</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/tabs\" routerLinkActive=\"active\">Tabs</a></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- STRUCTURE -->\n        <c3m-menu-item nameButton=\"Page Structure\" idSvg=\"assets/img/icons.svg#svg5\" [index]=4 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/bottom\" routerLinkActive=\"active\">Bottom</a></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- EDITORIAL -->\n        <c3m-menu-item nameButton=\"Editorial\" idSvg=\"assets/img/icons.svg#svg5\" [index]=5 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n                <li></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- GENERAL ELEMENTS -->\n        <c3m-menu-item nameButton=\"Utilities\" idSvg=\"assets/img/icons.svg#svg5\" [index]=6 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/dropdown\" routerLinkActive=\"active\">Dropdown</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/modal\" routerLinkActive=\"active\">Modal</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/pagination\" routerLinkActive=\"active\">Pagination</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/step\" routerLinkActive=\"active\">Steps</a></li>\n              <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/toast\" routerLinkActive=\"active\">Toast</a></li>\n            </ul>\n        </c3m-menu-item>\n\n        <!-- GROUP HELP -->\n        <c3m-menu-item nameButton=\"Help\" class=\"help\" idSvg=\"assets/img/icons.svg#svg4\" [index]=0 [isOpen]=false>\n            <ul class=\"contenuMenu\">\n                <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/gettingStarted\" routerLinkActive=\"active\">Getting Started</a></li>\n                <li (click)=\"ToggleMenuBurger()\"><a routerLink=\"/faq\" routerLinkActive=\"active\">F.A.Q</a></li>\n            </ul>\n        </c3m-menu-item>\n\n    </c3m-menu>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuMobile = false;
        this.mediumRes = '1000px';
    }
    /* Action button burger */
    HeaderComponent.prototype.ToggleMenuBurger = function () {
        if (this.menuMobile) {
            this.menuMobile = false;
        }
        else if (!this.menuMobile) {
            this.menuMobile = true;
        }
    };
    HeaderComponent.prototype.ToggleMenuBurgerMain = function () {
        if (this.menuMobile) {
            this.menuMobile = false;
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.css":
/*!***************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-group.closed .panel-collapse {display: none;}\n\nc3m-menu-item button {\n  position: relative;\n  width: 100%;\n  text-align: left;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  padding: 1.1rem 1rem 0.8rem;\n  -webkit-transform: perspective(1px) translateZ(0);\n          transform: perspective(1px) translateZ(0);\n  transition: color 0.5s;\n  cursor: pointer;\n}\n\nc3m-menu-item button::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--n-light);\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1;\n}\n\nc3m-menu-item button:hover:before, c3m-menu-item button:focus:before, c3m-menu-item button:active:before {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\nc3m-menu-item button:hover, c3m-menu-item button:active, c3m-menu-item button:focus {\n  color: var(--n-dark);\n}\n\nc3m-menu-item button svg {\n  position: relative;\n  top: -3px;\n  width: 24px;\n  height: 29px;\n  fill: var(--n-light);\n  margin-right: 10px;\n  vertical-align: middle;\n  transition: fill 1.5s cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\nc3m-menu-item.help button {color: var(--main-light);}\n\nc3m-menu-item.help button svg {fill: var(--main-light);}\n\nc3m-menu-item button:hover svg, c3m-menu-item button:active svg, c3m-menu-item button:focus svg {\n  fill: var(--n-dark);\n}\n\nc3m-menu-item.help button:hover, c3m-menu-item.help button:active, c3m-menu-item.help button:focus {\n  color: var(--main-color);\n}\n\nc3m-menu-item.help button:hover svg, c3m-menu-item.help button:active svg, c3m-menu-item.help button:focus svg {\n  fill: var(--main-color);\n}\n\n/* Menu Items */\n\n.contenuMenu {margin: 0 0 0.5rem 0.8rem;}\n\n.contenuMenu li {\n  padding: 0 0 0.4rem 30px;\n  font: 0.95em/1 var(--stack-l);\n}\n\n.contenuMenu li:first-child {\n  margin-top: 0.5rem;\n}\n\n.contenuMenu li a {\n  display: block;\n  width: 80%;\n  text-decoration: none;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  padding: 0.5rem 0 0.5rem 1rem;\n}\n\n.contenuMenu li a.active, .contenuMenu li a:hover, .contenuMenu li a:active, .contenuMenu li a:focus {\n  color: var(--n-dark);\n  background-color: var(--n-light);\n}\n\n/* DESKTOP */\n\n@media screen and (min-width: 1400px) {\n  c3m-menu-item button {padding: 1.1rem 2rem 0.8rem;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQyxjQUFjLENBQUM7O0FBRW5EO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsa0RBQTBDO1VBQTFDLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQS9CLGtEQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsaUVBQWlFO0NBQ2xFOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDJEQUEyRDtDQUM1RDs7QUFFRCwyQkFBMkIseUJBQXlCLENBQUM7O0FBQ25ELCtCQUErQix3QkFBd0IsQ0FBQzs7QUFFMUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekI7O0FBRUQsZ0JBQWdCOztBQUVoQixjQUFjLDBCQUEwQixDQUFDOztBQUV6QztFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7Q0FDbEM7O0FBRUQsYUFBYTs7QUFFYjtFQUNFLHNCQUFzQiw0QkFBNEIsQ0FBQztDQUNwRCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tZW51L21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWdyb3VwLmNsb3NlZCAucGFuZWwtY29sbGFwc2Uge2Rpc3BsYXk6IG5vbmU7fVxuXG5jM20tbWVudS1pdGVtIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tZGFyayk7XG4gIHBhZGRpbmc6IDEuMXJlbSAxcmVtIDAuOHJlbTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYzNtLW1lbnUtaXRlbSBidXR0b246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uLWxpZ2h0KTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgei1pbmRleDogLTE7XG59XG5cbmMzbS1tZW51LWl0ZW0gYnV0dG9uOmhvdmVyOmJlZm9yZSwgYzNtLW1lbnUtaXRlbSBidXR0b246Zm9jdXM6YmVmb3JlLCBjM20tbWVudS1pdGVtIGJ1dHRvbjphY3RpdmU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MiwgMS42NCwgMC4zNywgMC42Nik7XG59XG5cbmMzbS1tZW51LWl0ZW0gYnV0dG9uOmhvdmVyLCBjM20tbWVudS1pdGVtIGJ1dHRvbjphY3RpdmUsIGMzbS1tZW51LWl0ZW0gYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLW4tZGFyayk7XG59XG5cbmMzbS1tZW51LWl0ZW0gYnV0dG9uIHN2ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBmaWxsOiB2YXIoLS1uLWxpZ2h0KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBmaWxsIDEuNXMgY3ViaWMtYmV6aWVyKDAuNTIsIDEuNjQsIDAuMzcsIDAuNjYpO1xufVxuXG5jM20tbWVudS1pdGVtLmhlbHAgYnV0dG9uIHtjb2xvcjogdmFyKC0tbWFpbi1saWdodCk7fVxuICBjM20tbWVudS1pdGVtLmhlbHAgYnV0dG9uIHN2ZyB7ZmlsbDogdmFyKC0tbWFpbi1saWdodCk7fVxuXG5jM20tbWVudS1pdGVtIGJ1dHRvbjpob3ZlciBzdmcsIGMzbS1tZW51LWl0ZW0gYnV0dG9uOmFjdGl2ZSBzdmcsIGMzbS1tZW51LWl0ZW0gYnV0dG9uOmZvY3VzIHN2ZyB7XG4gIGZpbGw6IHZhcigtLW4tZGFyayk7XG59XG5jM20tbWVudS1pdGVtLmhlbHAgYnV0dG9uOmhvdmVyLCBjM20tbWVudS1pdGVtLmhlbHAgYnV0dG9uOmFjdGl2ZSwgYzNtLW1lbnUtaXRlbS5oZWxwIGJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cbmMzbS1tZW51LWl0ZW0uaGVscCBidXR0b246aG92ZXIgc3ZnLCBjM20tbWVudS1pdGVtLmhlbHAgYnV0dG9uOmFjdGl2ZSBzdmcsIGMzbS1tZW51LWl0ZW0uaGVscCBidXR0b246Zm9jdXMgc3ZnIHtcbiAgZmlsbDogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi8qIE1lbnUgSXRlbXMgKi9cblxuLmNvbnRlbnVNZW51IHttYXJnaW46IDAgMCAwLjVyZW0gMC44cmVtO31cblxuLmNvbnRlbnVNZW51IGxpIHtcbiAgcGFkZGluZzogMCAwIDAuNHJlbSAzMHB4O1xuICBmb250OiAwLjk1ZW0vMSB2YXIoLS1zdGFjay1sKTtcbn1cblxuLmNvbnRlbnVNZW51IGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uY29udGVudU1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tZGFyayk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxcmVtO1xufVxuXG4uY29udGVudU1lbnUgbGkgYS5hY3RpdmUsIC5jb250ZW51TWVudSBsaSBhOmhvdmVyLCAuY29udGVudU1lbnUgbGkgYTphY3RpdmUsIC5jb250ZW51TWVudSBsaSBhOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLW4tZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tbGlnaHQpO1xufVxuXG4vKiBERVNLVE9QICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICBjM20tbWVudS1pdGVtIGJ1dHRvbiB7cGFkZGluZzogMS4xcmVtIDJyZW0gMC44cmVtO31cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"menu-group\" [ngClass]=\"{'closed': !isOpen}\">\n\n  <button class=\"panel-heading\" (click)=\"toggleOpen()\" [attr.aria-expanded]=\"isOpen\" [attr.aria-controls]=\"panelID\" id={{tabID}}>\n    <svg>\n      <use [attr.xlink:href]=idSvg></use>\n    </svg>\n    {{nameButton}}\n  </button>\n\n  <div class=\"panel-collapse\" [attr.aria-hidden]=\"!isOpen\" id={{panelID}} [attr.aria-labeledby]=\"tabID\">\n      <ng-content></ng-content>\n  </div>\n\n</li>\n\n"

/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.component */ "./src/app/header/menu/menu.component.ts");



var MenuItemComponent = /** @class */ (function () {
    /* By default , add item to accordion */
    function MenuItemComponent(menu) {
        this.menu = menu;
        this.menu.addGroup(this);
    }
    /* remove item to accordion*/
    MenuItemComponent.prototype.ngOnDestroy = function () {
        this.menu.removeGroup(this);
    };
    /* changes */
    MenuItemComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                var changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.menu.groups[this.index + 1].toggleOpen();
                }
            }
        }
    };
    /* initialisation */
    MenuItemComponent.prototype.ngOnInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* when view init */
    MenuItemComponent.prototype.ngAfterViewInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* open accordion'element */
    MenuItemComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this.menu.closeOthers(this);
        }
        else if (this.isOpen) {
            this.menu.closeAll(this);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuItemComponent.prototype, "nameButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuItemComponent.prototype, "idSvg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MenuItemComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MenuItemComponent.prototype, "index", void 0);
    MenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/header/menu/menu-item/menu-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./menu-item.component.css */ "./src/app/header/menu/menu-item/menu-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/header/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <c3m-skip text=\"Jump navigation\" [id]=\"'page-body'\"></c3m-skip>\n  <ul class=\"accordion\">\n    <ng-content></ng-content>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.groups = [];
    }
    MenuComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    MenuComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    MenuComponent.prototype.closeAll = function (openGroup) {
        this.groups.forEach(function (group) {
            group.isOpen = false;
        });
    };
    MenuComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/header/menu/menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/header/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWNjb3JkaW9uLXBhZ2UvYWNjb3JkaW9uLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- TITLE TABS COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Accordion</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"accordion\">Normal Accordion</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"accordion\">\n    <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Normal Accordion\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/accordion\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span></a>\n      </h3>\n\n      <div class=\"explain\">\n        <dl>\n          <dt>nameButton</dt>\n          <dd>Title of the collapse</dd>\n        </dl>\n        <dl>\n          <dt>Index</dt>\n          <dd>Order of the collapse</dd>\n        </dl>\n        <dl>\n          <dt>isOpen</dt>\n          <dd>true if the collapse is open by default</dd>\n        </dl>\n      </div>\n    <!-- ACCORDION DEMO -->\n    <div class=\"demo\">\n        <c3m-accordion>\n\n            <c3m-accordion-item nameButton=\"Title1\" [index]=0 [isOpen]=false>\n              <p>Content 1</p>\n            </c3m-accordion-item>\n\n\n            <c3m-accordion-item nameButton=\"Title 2\" [index]=1 [isOpen]=false>\n             <p>Content 2</p>\n            </c3m-accordion-item>\n\n            <c3m-accordion-item nameButton=\"Title3\" [index]=2 [isOpen]=false>\n              <p>Content 3</p>\n            </c3m-accordion-item>\n\n\n            <c3m-accordion-item nameButton=\"Title 4\" [index]=3 [isOpen]=false>\n              <p>Content 4</p>\n            </c3m-accordion-item>\n\n          </c3m-accordion>\n    </div>\n\n    <div class=\"explain\">\n      <p>This component is fully accessible and semantic and it is the same component\n        used for the main navigation of this website.</p>\n      <p>If you want a specific block to be opened on page load, set \"isOpen\" to \"true\".</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-accordion&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title1&#x22;  [index]=0 [isOpen]=false&#x3E;\n        Content 1\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title 2&#x22;  [index]=1 [isOpen]=false&#x3E;\n        Content 2\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title3&#x22;  [index]=2 [isOpen]=false&#x3E;\n        Content 3\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title 4&#x22;  [index]=3 [isOpen]=false&#x3E;\n        Content 4\n      &#x3C;/c3m-accordion-item&#x3E;\n  &#x3C;/c3m-accordion&#x3E;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccordionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageComponent", function() { return AccordionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var AccordionPageComponent = /** @class */ (function () {
    function AccordionPageComponent(app) {
        this.app = app;
    }
    AccordionPageComponent.prototype.ngOnInit = function () {
        var subComp = ['accordion-item'];
        this.app.codeSnippets(subComp);
    };
    AccordionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-accordion-page',
            template: __webpack_require__(/*! ./accordion-page.component.html */ "./src/app/main/accordion-page/accordion-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accordion-page.component.css */ "./src/app/main/accordion-page/accordion-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], AccordionPageComponent);
    return AccordionPageComponent;
}());



/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Accordion */\nc3m-accordion > ul {\n  padding: 1rem;\n  width: 80%\n}\n/* Accordion Item */\nc3m-accordion-item > li {\n  position: relative;\n  color: #FFF;\n  background-color: #dea348;\n  border: none;\n  z-index: 5;\n}\n/* Accordion item closed */\nc3m-accordion-item > li.closed {\n  color: #FFF;\n  background-color: #44abbc;\n  border-bottom: 1px solid #FFF;\n}\n/* Last Accordion Item Closed */\nc3m-accordion-item:last-child > li.closed {border:none;}\n/* Content Accordion Item Closed */\nc3m-accordion-item > li.closed > .panel-collapse {\n  display: none;\n}\n/* Accordion Item Content */\nc3m-accordion .panel-collapse {\n  color: #000;\n  background-color: #F9F0E2;\n  padding: 1rem;\n}\n/* Accordion Item Button */\nc3m-accordion-item > li > button {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  line-height: 1.7rem;\n  text-align: left;\n  color: #FFF;\n  background-color: var(--main-light);\n  background-size: 2.1rem;\n  padding: 0.5rem 2.5rem 0.5rem 0.5rem;\n  cursor: pointer;\n  z-index: 10;\n}\nc3m-accordion-item > li > button svg {\n      position: absolute;\n      width: 24px;\n      height: 24px;\n      right: 1rem;\n      fill: white;\n      transition: all 0.3s;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      z-index: 1;\n    }\nc3m-accordion-item > li.closed > button svg {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hY2NvcmRpb24tcGFnZS9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYO0FBRUQsb0JBQW9CO0FBRXBCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFdBQVc7Q0FDWjtBQUVELDJCQUEyQjtBQUMzQjtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsOEJBQThCO0NBQy9CO0FBRUQsZ0NBQWdDO0FBQ2hDLDJDQUEyQyxZQUFZLENBQUM7QUFFeEQsbUNBQW1DO0FBQ25DO0VBQ0UsY0FBYztDQUNmO0FBRUQsNEJBQTRCO0FBQzVCO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixjQUFjO0NBQ2Y7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiO0FBQ0c7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtNQUNaLHFCQUFxQjtNQUNyQixrQ0FBMEI7Y0FBMUIsMEJBQTBCO01BQzFCLFdBQVc7S0FDWjtBQUNEO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtLQUN6QiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWNjb3JkaW9uLXBhZ2UvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBY2NvcmRpb24gKi9cbmMzbS1hY2NvcmRpb24gPiB1bCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA4MCVcbn1cblxuLyogQWNjb3JkaW9uIEl0ZW0gKi9cblxuYzNtLWFjY29yZGlvbi1pdGVtID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVhMzQ4O1xuICBib3JkZXI6IG5vbmU7XG4gIHotaW5kZXg6IDU7XG59XG5cbi8qIEFjY29yZGlvbiBpdGVtIGNsb3NlZCAqL1xuYzNtLWFjY29yZGlvbi1pdGVtID4gbGkuY2xvc2VkIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFiYmM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xufVxuXG4vKiBMYXN0IEFjY29yZGlvbiBJdGVtIENsb3NlZCAqL1xuYzNtLWFjY29yZGlvbi1pdGVtOmxhc3QtY2hpbGQgPiBsaS5jbG9zZWQge2JvcmRlcjpub25lO31cblxuLyogQ29udGVudCBBY2NvcmRpb24gSXRlbSBDbG9zZWQgKi9cbmMzbS1hY2NvcmRpb24taXRlbSA+IGxpLmNsb3NlZCA+IC5wYW5lbC1jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEFjY29yZGlvbiBJdGVtIENvbnRlbnQgKi9cbmMzbS1hY2NvcmRpb24gLnBhbmVsLWNvbGxhcHNlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUYwRTI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi8qIEFjY29yZGlvbiBJdGVtIEJ1dHRvbiAqL1xuYzNtLWFjY29yZGlvbi1pdGVtID4gbGkgPiBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyLjFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDtcbn1cbiAgICBjM20tYWNjb3JkaW9uLWl0ZW0gPiBsaSA+IGJ1dHRvbiBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICByaWdodDogMXJlbTtcbiAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgYzNtLWFjY29yZGlvbi1pdGVtID4gbGkuY2xvc2VkID4gYnV0dG9uIHN2ZyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"accordion-group\" [ngClass]=\"{'closed': !isOpen}\">\n\n  <button class=\"panel-heading\" (click)=\"toggleOpen()\" [attr.aria-expanded]=\"isOpen\" [attr.aria-controls]=\"panelID\" id={{tabID}}>\n       {{nameButton}}\n\n       <svg>\n          <use xlink:href=\"#arrowDownSvg\"></use>\n       </svg>\n\n  </button>\n\n  <div class=\"panel-collapse\" [attr.aria-hidden]=\"!isOpen\" id={{panelID}} [attr.aria-labeledby]=\"tabID\">\n      <ng-content></ng-content>\n  </div>\n\n</li>\n\n"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccordionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return AccordionItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accordion.component */ "./src/app/main/accordion-page/accordion/accordion.component.ts");



var AccordionItemComponent = /** @class */ (function () {
    /* By default , add item to accordion */
    function AccordionItemComponent(accordion) {
        this.accordion = accordion;
        this.accordion.addGroup(this);
    }
    /* remove item to accordion*/
    AccordionItemComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    /* changes */
    AccordionItemComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                var changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.accordion.groups[this.index + 1].toggleOpen();
                }
            }
        }
    };
    /* initialisation */
    AccordionItemComponent.prototype.ngOnInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* when view init */
    AccordionItemComponent.prototype.ngAfterViewInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* open accordion'element */
    AccordionItemComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this.accordion.closeOthers(this);
        }
        else if (this.isOpen) {
            this.accordion.closeAll(this);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionItemComponent.prototype, "nameButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionItemComponent.prototype, "urlImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordionItemComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AccordionItemComponent.prototype, "index", void 0);
    AccordionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-accordion-item',
            template: __webpack_require__(/*! ./accordion-item.component.html */ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accordion-item.component.css */ "./src/app/main/accordion-page/accordion/accordion-item/accordion-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordion_component__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]])
    ], AccordionItemComponent);
    return AccordionItemComponent;
}());



/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWNjb3JkaW9uLXBhZ2UvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"accordion\">\n  <ng-content></ng-content>\n</ul>\n"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion/accordion.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion/accordion.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.closeAll = function (openGroup) {
        this.groups.forEach(function (group) {
            group.isOpen = false;
        });
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/main/accordion-page/accordion/accordion.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/main/accordion-page/accordion/accordion.component.css")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/main/accueil/accueil.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Welcome Title */\n\n.whyNgCream h2 {\n  display: none;\n  font: 2em var(--stack-b);\n  text-align: center;\n  color: var(--n-dark);\n  margin-bottom: 0.5em;\n}\n\n/* Welcome Paragraph */\n\n.whyNgCream {\n  display: block;\n  padding: 6vh 1rem 7vh;\n  background-color: rgba(249, 249, 249, 0.72);\n  background: url(/assets/background.1ba0c6f664cf338ab5ea.jpg);\n}\n\n.whyNgCream p {\n  text-align: center;\n  font: calc(1.3em + 0.8vmax)/1.45 var(--stack-l);\n}\n\n/* Containers with SVG icons */\n\n.ngCreamBecause {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  margin: 0 auto;\n  padding-top: 1rem;\n  background-color: rgba(249, 249, 249, 0.72);\n  padding-bottom: 3rem;\n}\n\n.ngCreamBecause li {\n  margin: 0 auto 2rem;\n}\n\n/* The SVG */\n\n.ngCreamBecause li svg {\n  width: 16vmax;\n  height: 16vmax;\n  max-width: 150px;\n  max-height: 150px;\n  fill: var(--n-dark);\n}\n\n.ngCreamBecause li h3 {\n  font: 1.5rem var(--stack-b);\n  text-transform: uppercase;\n  margin-bottom: 0.8rem;\n}\n\n.ngCreamBecause li p {\n  display: block;\n  width: 70%;\n  max-width: 20em;\n  line-height: 1.45;\n  margin: 0 auto;\n}\n\n.ngCreamBecause li p strong {\n  font-family: var(--stack-b);\n  color: var(--main-color);\n}\n\n/* BREAKPOINT */\n\n@media screen and (min-width: 450px) {\n  .ngCreamBecause li {width: 50%;}\n}\n\n@media screen and (min-width: 750px) {\n  .ngCreamBecause li {font-size: 1em;}\n}\n\n/* BREAKPOINT */\n\n@media screen and (min-width: 1000px) {\n\n  .whyNgCream {padding: 12vh 13vw 7vh;}\n\n  .ngCreamBecause {padding-top: 4rem;}\n    .ngCreamBecause li {margin-bottom: 6rem;}\n}\n\n@media screen and (min-width: 1400px) {\n  lottie-animation-view > div {\n    background-color: var(--body-bg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7O0FBRW5CO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtDQUN0Qjs7QUFFRCx1QkFBdUI7O0FBRXZCO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsNkRBQTZEO0NBQzlEOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdEQUFnRDtDQUNqRDs7QUFFRCwrQkFBK0I7O0FBRS9CO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVELGFBQWE7O0FBRWI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7Q0FDMUI7O0FBRUQsZ0JBQWdCOztBQUVoQjtFQUNFLG9CQUFvQixXQUFXLENBQUM7Q0FDakM7O0FBQ0Q7RUFDRSxvQkFBb0IsZUFBZSxDQUFDO0NBQ3JDOztBQUVELGdCQUFnQjs7QUFFaEI7O0VBRUUsYUFBYSx1QkFBdUIsQ0FBQzs7RUFFckMsaUJBQWlCLGtCQUFrQixDQUFDO0lBQ2xDLG9CQUFvQixvQkFBb0IsQ0FBQztDQUM1Qzs7QUFFRDtFQUNFO0lBQ0UsaUNBQWlDO0dBQ2xDO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FjY3VlaWwvYWNjdWVpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2VsY29tZSBUaXRsZSAqL1xuXG4ud2h5TmdDcmVhbSBoMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQ6IDJlbSB2YXIoLS1zdGFjay1iKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi8qIFdlbGNvbWUgUGFyYWdyYXBoICovXG5cbi53aHlOZ0NyZWFtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDZ2aCAxcmVtIDd2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcyKTtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmFja2dyb3VuZC4xYmEwYzZmNjY0Y2YzMzhhYjVlYS5qcGcpO1xufVxuXG4ud2h5TmdDcmVhbSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiBjYWxjKDEuM2VtICsgMC44dm1heCkvMS40NSB2YXIoLS1zdGFjay1sKTtcbn1cblxuLyogQ29udGFpbmVycyB3aXRoIFNWRyBpY29ucyAqL1xuXG4ubmdDcmVhbUJlY2F1c2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNzIpO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cblxuLm5nQ3JlYW1CZWNhdXNlIGxpIHtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcbn1cblxuLyogVGhlIFNWRyAqL1xuXG4ubmdDcmVhbUJlY2F1c2UgbGkgc3ZnIHtcbiAgd2lkdGg6IDE2dm1heDtcbiAgaGVpZ2h0OiAxNnZtYXg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBmaWxsOiB2YXIoLS1uLWRhcmspO1xufVxuXG4ubmdDcmVhbUJlY2F1c2UgbGkgaDMge1xuICBmb250OiAxLjVyZW0gdmFyKC0tc3RhY2stYik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuLm5nQ3JlYW1CZWNhdXNlIGxpIHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiAyMGVtO1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uZ0NyZWFtQmVjYXVzZSBsaSBwIHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdGFjay1iKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4vKiBCUkVBS1BPSU5UICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5uZ0NyZWFtQmVjYXVzZSBsaSB7d2lkdGg6IDUwJTt9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAubmdDcmVhbUJlY2F1c2UgbGkge2ZvbnQtc2l6ZTogMWVtO31cbn1cblxuLyogQlJFQUtQT0lOVCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcblxuICAud2h5TmdDcmVhbSB7cGFkZGluZzogMTJ2aCAxM3Z3IDd2aDt9XG5cbiAgLm5nQ3JlYW1CZWNhdXNlIHtwYWRkaW5nLXRvcDogNHJlbTt9XG4gICAgLm5nQ3JlYW1CZWNhdXNlIGxpIHttYXJnaW4tYm90dG9tOiA2cmVtO31cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIGxvdHRpZS1hbmltYXRpb24tdmlldyA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZyk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/accueil/accueil.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"whyNgCream\">\n  <p>Develop accessible Angular applications with our components and patterns.</p>\n</div>\n\n  <ul class=\"ngCreamBecause\">\n  <li>\n      <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n        <use xlink:href=\"assets/img/icons.svg#htmIconSvg\"></use>\n      </svg>\n      <h3>Embrace the Web</h3>\n      <p>Each component has been handcrafted with love, with a progressive enhancement approach that\n        respects web standards and <strong>semantics</strong>.</p>\n  </li>\n\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use xlink:href=\"assets/img/icons.svg#gitIconSvg\"></use>\n    </svg>\n      <h3>Fork &amp; Contribute</h3>\n      <p>All the components are <strong>open source</strong>.\n        You can <strong><a href=\"https://github.com/CreamLib/Angular_Code\">fork us on Github</a></strong>\n        and propose your own components.</p>\n  </li>\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use xlink:href=\"assets/img/icons.svg#responsiveIconSvg\"></use>\n    </svg>\n      <h3>Be Responsive</h3>\n      <p>All components were designed to be fully <strong>responsive</strong> and multi-device.</p>\n  </li>\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use xlink:href=\"assets/img/icons.svg#a11yIconSvg\"></use>\n    </svg>\n      <h3>Accessibility</h3>\n      <p>We're doing our best to create the most accessible Angular components! It is not a Javascript Framework that will stop us</p>\n  </li>\n\n  </ul>\n"

/***/ }),

/***/ "./src/app/main/accueil/accueil.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.ts ***!
  \***************************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccueilComponent = /** @class */ (function () {
    function AccueilComponent() {
        this.animationSpeed = 1;
        this.lottieConfig = {
            path: 'assets/json/creamNGanimation.json',
            autoplay: true,
            loop: false
        };
    }
    AccueilComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    AccueilComponent.prototype.stop = function () {
        this.anim.stop();
    };
    AccueilComponent.prototype.play = function () {
        this.anim.play();
    };
    AccueilComponent.prototype.pause = function () {
        this.anim.pause();
    };
    AccueilComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    AccueilComponent.prototype.ngOnInit = function () {
    };
    AccueilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/main/accueil/accueil.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accueil.component.css */ "./src/app/main/accueil/accueil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYm90dG9tLXBhZ2UvYm90dG9tLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE FOOTER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2>\n    <strong>Footer</strong> Component</h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"bottom\">Footer(bottom) </a>\n    </li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION FOOTER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"footer\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Footer(bottom)\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/footer\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n        <span>Github</span>\n      </a>\n    </h3>\n\n    <p>A simple footer</p>\n\n    <div class=\"demo\">\n      <p> The footer is positioned after the main content of the page </p>\n      <c3m-bottom copyright=\"©Copyright CreamNG - 2018 - Studio Worldline\">\n        <nav>\n          <ul>\n            <li>\n              Home\n            </li>\n            <li>\n              F.a.q\n            </li>\n            <li>\n              Getting Started\n            </li>\n          </ul>\n        </nav>\n      </c3m-bottom>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>copyright</dt>\n        <dd>Simple text that displays the copyright of the page </dd>\n      </dl>\n      <dl>\n          <dt>ng-content</dt>\n          <dd>Insert here the code in your footer</dd>\n        </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- Footer Component --&gt;\n  &lt;c3m-bottom copyright=&#34;©Copyright CreamNG - 2018 - Studio Worldline&#34;&gt;\n    &lt;nav&gt;\n      &lt;ul&gt;\n        &lt;li&gt;Home&lt;/li&gt;\n        &lt;li&gt;F.a.q&lt;/li&gt;\n        &lt;li&gt;Getting Started&lt;/li&gt;\n      &lt;/ul&gt;\n    &lt;/nav&gt;\n  &lt;/c3m-bottom&gt;\n          </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BottomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomPageComponent", function() { return BottomPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var BottomPageComponent = /** @class */ (function () {
    function BottomPageComponent(app) {
        this.app = app;
    }
    BottomPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    BottomPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-bottom-page',
            template: __webpack_require__(/*! ./bottom-page.component.html */ "./src/app/main/bottom-page/bottom-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./bottom-page.component.css */ "./src/app/main/bottom-page/bottom-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], BottomPageComponent);
    return BottomPageComponent;
}());



/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-bottom{\n  margin-top: 3rem;\n  display: block;\n}\nc3m-bottom .contentFooter{\n    background-color: #3e3e3e;\n    color: white;\n    padding: 1.2rem 1.3rem;\n}\nc3m-bottom .copyrightFooter{\n  background-color: #c5c5c5;\n  padding: 0.3rem 1rem;\n  font-size: 0.8rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ib3R0b20tcGFnZS9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ib3R0b20tcGFnZS9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tYm90dG9te1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmMzbS1ib3R0b20gLmNvbnRlbnRGb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2UzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDEuM3JlbTtcbn1cbmMzbS1ib3R0b20gLmNvcHlyaWdodEZvb3RlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"contentFooter\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"copyrightFooter\">\n      <p>{{ copyright }}</p>\n    </div>\n"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.ts ***!
  \*************************************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BottomComponent.prototype, "copyright", void 0);
    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-bottom',
            template: __webpack_require__(/*! ./bottom.component.html */ "./src/app/main/bottom-page/bottom/bottom.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./bottom.component.css */ "./src/app/main/bottom-page/bottom/bottom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYnJlYWRjcnVtYnMtcGFnZS9icmVhZGNydW1icy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE STEP COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2>\n    <strong> Breadcrumbs </strong> Component </h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#breadcrumbs\">Simple Breadcrumbs</a>\n    </li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION STEP COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"breadcrumbs\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Regular Breadcrumbs\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n\n    <p>Display the current page in the app hierarchy. Each Item is a page. The last Item is the current page.</p>\n\n    <div class=\"demo\">\n      <!-- BREADCRUMBS -->\n      <c3m-breadcrumbs></c3m-breadcrumbs>\n    </div>\n\n    <!-- EXPLAIN -->\n    <div class=\"explain\">\n      <dl>\n        <dt>Model</dt>\n        <dd>You can get the model\n          <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.model.ts\">here</a>\n        </dd>\n      </dl>\n      <dl>\n        <dt>Module</dt>\n        <dd>You can get the module\n          <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.module.ts\">here</a>\n        </dd>\n      </dl>\n      <dl>\n        <dt>Service</dt>\n        <dd>You can get the service\n          <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.service.ts\">here</a>\n        </dd>\n      </dl>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\"> To call the component </p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n    &lt;!-- BREADCRUMBS --&gt;\n    &lt;c3m-breadcrumbs&gt;&lt;/c3m-breadcrumbs&gt;\n              </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"Import\">\n        <p class=\"pre-code\"> In your App Module </p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  import &#123; BreadcrumbsModule &#125; from &apos;./module-breadcrumbs&apos;;\n\n  imports: [\n      RouterModule.forRoot(appRoutes),\n      BreadcrumbsModule\n  ]\n                </pre>\n        </div>\n        <p class=\"pre-code\"> The Breadcrumbs module </p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module&apos; ;\n          </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsPageComponent", function() { return BreadcrumbsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var BreadcrumbsPageComponent = /** @class */ (function () {
    function BreadcrumbsPageComponent(app) {
        this.app = app;
    }
    BreadcrumbsPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    BreadcrumbsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-breadcrumbs-page',
            template: __webpack_require__(/*! ./breadcrumbs-page.component.html */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./breadcrumbs-page.component.css */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], BreadcrumbsPageComponent);
    return BreadcrumbsPageComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-breadcrumbs li{\n  display: inline-block;\n  margin-right: 0.1rem;\n}\nc3m-breadcrumbs li:not(:last-of-type)::after{\n  content: \">\";\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n}\nc3m-breadcrumbs li > span{\n  font-size: 1.2rem;\n  font-family: \"quicksandregular\"\n}\nc3m-breadcrumbs li > a,\nc3m-breadcrumbs li > a:visited{\n  font-size: 1.2rem;\n  font-family: \"quicksandregular\";\n  color: #21b1ca;\n}\nc3m-breadcrumbs li > a:hover{\n    text-decoration: underline;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9icmVhZGNydW1icy1wYWdlL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7Q0FDaEM7QUFFRDs7RUFFRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGVBQWU7Q0FDaEI7QUFDQztJQUNFLDJCQUEyQjtHQUM1QiIsImZpbGUiOiJzcmMvYXBwL21haW4vYnJlYWRjcnVtYnMtcGFnZS9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYzNtLWJyZWFkY3J1bWJzIGxpe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMC4xcmVtO1xufVxuYzNtLWJyZWFkY3J1bWJzIGxpOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiPlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbmMzbS1icmVhZGNydW1icyBsaSA+IHNwYW57XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogXCJxdWlja3NhbmRyZWd1bGFyXCJcbn1cblxuYzNtLWJyZWFkY3J1bWJzIGxpID4gYSxcbmMzbS1icmVhZGNydW1icyBsaSA+IGE6dmlzaXRlZHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBcInF1aWNrc2FuZHJlZ3VsYXJcIjtcbiAgY29sb3I6ICMyMWIxY2E7XG59XG4gIGMzbS1icmVhZGNydW1icyBsaSA+IGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li><a href=\"/home\"> Home </a></li>\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" [ngClass]=\"{ 'list': true, 'active': last }\">\n\n    <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n      {{breadcrumb.label}}\n    </a>\n    <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _breadcrumbs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");






var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(breadcrumbService, activatedRoute, router) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe(function (breadcrumbs) {
            _this.breadcrumbs = breadcrumbs;
        });
    }
    BreadcrumbsComponent.prototype.hasParams = function (breadcrumb) {
        return Object.keys(breadcrumb.params).length
            ? [breadcrumb.url, breadcrumb.params]
            : [breadcrumb.url];
    };
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        var ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        var PREFIX_BREADCRUMB = "prefixBreadcrumb";
        // subscribe to the NavigationEnd event
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.router.events)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            // reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            // get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            // set the url to an empty string
            var url = "";
            var _loop_1 = function () {
                var childrenRoutes = currentRoute.children;
                var breadCrumbLabel = "";
                // iterate over each children
                childrenRoutes.forEach(function (route) {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]) {
                        return;
                    }
                    var hasData = route.routeConfig && route.routeConfig.data;
                    var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
                    if (hasData || hasDynamicBreadcrumb) {
                        /*
                        Verify the custom data property "breadcrumb"
                        is specified on the route or in its parameters.
          
                        Route parameters take precedence over route data
                        attributes.
                        */
                        if (hasDynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                        }
                        else if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                            breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
                        }
                        // Get the route's URL segment
                        var routeURL = route.snapshot.url
                            .map(function (segment) { return segment.path; })
                            .join("/");
                        url += "/" + routeURL;
                        // Cannot have parameters on a root route
                        if (routeURL.length === 0) {
                            route.snapshot.params = {};
                        }
                        // Add breadcrumb
                        var breadcrumb = {
                            label: breadCrumbLabel,
                            params: route.snapshot.params,
                            url: url
                        };
                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                            _this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            _this.currentBreadcrumbs.push(breadcrumb);
                        }
                    }
                });
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            };
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                _loop_1();
            }
        });
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "c3m-breadcrumbs",
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return BreadcrumbsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs.component */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumbs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");







var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"],
            ],
            providers: [
                _breadcrumbs_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsService"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
            ],
            exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsModule);
    return BreadcrumbsModule;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts ***!
  \**************************************************************************/
/*! exports provided: BreadcrumbsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsService", function() { return BreadcrumbsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem("prefixedBreadcrumbs") != null) {
            this.prefixedBreadcrumbs = JSON.parse(localStorage.getItem("prefixedBreadcrumbs"));
        }
    }
    //Store the breadcrumbs of the current route
    BreadcrumbsService.prototype.store = function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    // Add a prefixed breadcrumb
    BreadcrumbsService.prototype.storePrefixed = function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem("prefixedBreadcrumbs", JSON.stringify(this.prefixedBreadcrumbs));
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    //Return the breadcrumbs
    BreadcrumbsService.prototype.get = function () {
        return this.breadcrumbsChanged$;
    };
    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    BreadcrumbsService.prototype.storeIfUnique = function (newBreadcrumb) {
        var isUnique = true;
        for (var _i = 0, _a = this.prefixedBreadcrumbs; _i < _a.length; _i++) {
            var crumb = _a[_i];
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    BreadcrumbsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsService);
    return BreadcrumbsService;
}());



/***/ }),

/***/ "./src/app/main/button-page/button-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYnV0dG9uLXBhZ2UvYnV0dG9uLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/button-page/button-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Component Page Title -->\n<div class=\"panelTitle\">\n  <h2><strong>Buttons &amp; Controls</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#button\">General buttons</a></li>\n    <li><a scrollTo href=\"#button-icon\">Button with icons</a></li>\n    <li><a scrollTo href=\"#button-icon-only\">Button with icons only</a></li>\n    <li><a scrollTo href=\"#button-file\">Upload</a></li>\n    <li><a scrollTo href=\"#button-submit\">Submit</a></li>\n  </ul>\n</div>\n\n<!-- Component Title -->\n<div class=\"titleComponent\">\n  <!-- NORMAL BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button\">\n    <h3>\n      <!-- GitHub SVG -->\n      <svg><use xlink:href=\"#gitListItem\"></use></svg> General Buttons\n\n      <!-- GitHub Repo Link -->\n      <a\n        href=\"https://github.com/CreamNG/Components/tree/master/button\"\n        class=\"gitBtn\"\n        target=\"_blank\"\n      >\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <!-- Description -->\n    <div class=\"explain\">\n      <p>General action buttons.</p>\n      <blockquote>\"If href has no value, then it is a button.\"</blockquote>\n    </div>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <c3m-button (click)=\"alert('general action')\">general action</c3m-button>\n      <c3m-button (click)=\"alert('submit action')\" ngClass=\"submit\"\n        >submit action</c3m-button\n      >\n      <c3m-button (click)=\"alert('optional action')\" ngClass=\"optional\"\n        >optional action</c3m-button\n      >\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                      <code>\n  &lt;!-- Normal Buttons --&gt;\n  &lt;c3m-button&gt;general action&lt;/c3m-button&gt;\n  &lt;c3m-button ngClass=&#34;submit&#34; &gt;submit action&lt;/c3m-button&gt;\n  &lt;c3m-button ngClass=&#34;optional&#34; &gt;optional action&lt;/c3m-button&gt;</code>\n                  </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- ICONS BUTTONS -->\n  <div class=\"descriptionComponent\" id=\"button-icon\">\n    <h3>\n      <!-- GitHub SVG -->\n      <svg><use xlink:href=\"#gitListItem\"></use></svg> Icon Buttons\n\n      <!-- GitHub Repo Link -->\n      <a\n        href=\"https://github.com/CreamNG/Components/tree/master/button\"\n        class=\"gitBtn\"\n        target=\"_blank\"\n      >\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <c3m-button-icon class=\"icon-delete\">Delete</c3m-button-icon>\n      <c3m-button-icon class=\"icon-edit\">Edit</c3m-button-icon>\n      <c3m-button-icon class=\"icon-add\">Add</c3m-button-icon>\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                    <code>\n&lt;c3m-button-icon class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon&gt;\n&lt;c3m-button-icon class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon&gt;\n&lt;c3m-button-icon class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon&gt;\n</code>\n                </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- ICON ONLY BUTTONS -->\n  <div class=\"descriptionComponent\" id=\"button-icon-only\">\n    <h3>\n      <!-- GitHub SVG -->\n      <svg><use xlink:href=\"#gitListItem\"></use></svg> Buttons With Icons Only\n\n      <!-- GitHub Repo Link -->\n      <a\n        href=\"https://github.com/CreamNG/Components/tree/master/button\"\n        class=\"gitBtn\"\n        target=\"_blank\"\n      >\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only>\n      <c3m-button-icon-only class=\"icon-edit\">Edit</c3m-button-icon-only>\n      <c3m-button-icon-only class=\"icon-add\">Add</c3m-button-icon-only>\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                    <code>\n&lt;c3m-button-icon-only class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon-only&gt;\n&lt;c3m-button-icon-only class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon-only&gt;\n&lt;c3m-button-icon-only class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon-only&gt;\n</code>\n                </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- UPLOAD BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button-file\">\n    <h3>\n      <svg><use xlink:href=\"#gitListItem\"></use></svg> Upload Button\n\n      <a\n        href=\"https://github.com/CreamNG/Components/tree/master/button-file\"\n        class=\"gitBtn\"\n        target=\"_blank\"\n      >\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <div class=\"explain\"><p>Allow the upload of multiple files.</p></div>\n    <div class=\"demo\"><c3m-button-file>Files to upload</c3m-button-file></div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- Button Upload --&gt;\n  &#x3C;c3m-button-file&#x3E;Choose a file&#x3C;/c3m-button-file&#x3E;\n                  </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- SUBMIT BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button-submit\">\n    <h3>\n      <svg><use xlink:href=\"#gitListItem\"></use></svg> Submit Button\n\n      <a\n        href=\"https://github.com/CreamNG/Components/tree/master/button-submit\"\n        class=\"gitBtn\"\n        target=\"_blank\"\n      >\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <div class=\"explain\">\n      <p>\n        A standard submit input (should appear inside a form or be attached to\n        one).\n      </p>\n    </div>\n    <div class=\"demo\">\n      <c3m-button-submit inputValue=\"submit\"></c3m-button-submit>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                      <code>\n  &lt;!-- Button Submit --&gt;\n  &#x3C;c3m-button-submit inputValue=&#x22;submit&#x22;&#x3E;&#x3C;/c3m-button-submit&#x3E; </code>\n                  </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/button-page/button-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageComponent", function() { return ButtonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonPageComponent = /** @class */ (function () {
    function ButtonPageComponent() {
    }
    ButtonPageComponent.prototype.alert = function (msg) {
        alert(msg);
    };
    ButtonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-button-page",
            template: __webpack_require__(/*! ./button-page.component.html */ "./src/app/main/button-page/button-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./button-page.component.css */ "./src/app/main/button-page/button-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonPageComponent);
    return ButtonPageComponent;
}());



/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.a11yExplain{\n    padding:0.6rem 0;\n    font-size: 1.2rem\n  }\n\n  div.explain dd {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAuYTExeUV4cGxhaW57XG4gICAgcGFkZGluZzowLjZyZW0gMDtcbiAgICBmb250LXNpemU6IDEuMnJlbVxuICB9XG5cbiAgZGl2LmV4cGxhaW4gZGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Component Page Title -->\n<div class=\"panelTitle\">\n  <h2> <strong>Datepicker</strong> Component </h2>\n  <ul>\n    <li><a scrollTo href=\"#calendar\">Simple Datepicker</a></li>\n\n  </ul>\n</div>\n\n<!-- Component Title -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"calendar\">\n      <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          Simple Datepicker\n\n          <a href=\"https://github.com/CreamNG/Components/calendar\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n\n            <span>Github</span></a>\n      </h3>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n        <c3m-calendar></c3m-calendar>\n    </div>\n\n    <div class=\"explain\">\n      <h4>Accessibility Keys</h4>\n      <dl>\n        <div>\n          <dt><kbd>Up</kbd></dt>\n          <dd>Go back 7 days</dd>\n        </div>\n        <div>\n          <dt><kbd>Down</kbd></dt>\n          <dd>Advance 7 days</dd>\n        </div>\n        <div>\n          <dt><kbd>Left</kbd></dt>\n          <dd>Go back 1 day</dd>\n        </div>\n        <div>\n          <dt><kbd>Right</kbd></dt>\n          <dd>Avance 1 day</dd>\n        </div>\n        <div>\n          <dt><kbd>Page Up</kbd></dt>\n          <dd>Go to the previous Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Page Down</kbd></dt>\n          <dd>Go to the next Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Home</kbd></dt>\n          <dd>Go to the first day of Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>End</kbd></dt>\n          <dd>Go to the last day of Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Esc</kbd></dt>\n          <dd>Exit the Calendar component</dd>\n        </div>\n        <div>\n          <dt><kbd>Tab</kbd></dt>\n          <dd>Go to previous button if we are on the calendar</dd>\n          <dd>Go to next button if we are on the previous button</dd>\n          <dd>Go to grid if we are on the next button</dd>\n        </div>\n        <div>\n          <dt><kbd>Shift + Tab</kbd></dt>\n          <dd>Go to previous button if we are on the next button</dd>\n          <dd>Go to next button if we are on the calendar</dd>\n          <dd>Go to grid if we are on the previous button</dd>\n        </div>\n        <div>\n          <dt><kbd>Enter</kbd> Or <kbd>Space</kbd></dt>\n          <dd>Go to next month if we are on the next button</dd>\n          <dd>Go to previous month if we are on the previous button</dd>\n          <dd>Select the focused date if we are on the calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>CTRL + Enter</kbd> Or <kbd>Space</kbd></dt>\n          <dd>Go to next year if we are on the next button</dd>\n          <dd>Go to previous year if we are on the previous button</dd>\n        </div>\n      </dl>\n    </div>\n\n\n           <!-- TABS SNIPPETS -->\n           <c3m-tabs class=\"snippets\">\n            <c3m-tab tabTitle=\"HTML\">\n                <p class=\"pre-code\"> To call the component </p>\n                <div class=\"code\">\n                    <!--?prettify lang=html linenums=true?-->\n                    <pre class=\"prettyprint linenums\">\n&lt;div class=&#34;calendar&#34;&gt;\n    &lt;c3m-calendar&gt;&lt;/c3m-calendar&gt;\n&lt;/div>\n                    </pre>\n                </div>\n            </c3m-tab>\n\n            <c3m-tab tabTitle=\"CSS\">\n            </c3m-tab>\n\n            <c3m-tab tabTitle=\"TypeScript\">\n            </c3m-tab>\n\n          </c3m-tabs>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CalendarPageComponent = /** @class */ (function () {
    function CalendarPageComponent(app) {
        this.app = app;
    }
    CalendarPageComponent.prototype.ngOnInit = function () {
        var subComp = ['tabs-item'];
        this.app.codeSnippets(subComp);
    };
    CalendarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-calendar-page',
            template: __webpack_require__(/*! ./calendar-page.component.html */ "./src/app/main/calendar-page/calendar-page.component.html"),
            styles: [__webpack_require__(/*! ./calendar-page.component.css */ "./src/app/main/calendar-page/calendar-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/main/calendar-page/calendar/calendar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar/calendar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nc3m-calendar div > input {max-width: 9em;}\n\nc3m-calendar p button {\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n}\n\nc3m-calendar button:hover {opacity: 0.8;}\n\nc3m-calendar .datepicker {\n  position: absolute;\n  width: 250px;\n  background-color: var(--body-bg);\n  margin: 0.5rem;\n  border: none;\n  border-radius: 0.3rem;\n  box-shadow: 0 3px 7px rgba(0,0,0,.5);\n}\n\n#month-wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-inv);\n  background-color: var(--main-color);\n  padding: 0.5em;\n}\n\n#month-wrap strong {display: inline-block;}\n\n#month-wrap button {\n    background-color: var(--main-color);\n    padding: 0;\n  }\n\nc3m-calendar caption button {}\n\nc3m-calendar table thead {\n  margin-top: 2rem;\n  line-height: 2.2rem;\n}\n\nc3m-calendar button svg {\n  height: 1.2rem;\n  width: 1.7rem;\n  fill: var(--text-inv);\n}\n\nc3m-calendar div#month {\n  float: left;\n  padding-top: 6px;\n  width: 199px;\n  height: 24px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\nc3m-calendar tbody#cal {\n  width: 261px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n/* THE CELLS */\n\nc3m-calendar table {\n  color: var(--text-inv);\n  background-color: var(--main-color);\n}\n\nc3m-calendar table th,\nc3m-calendar table td {\n  width: 35px;\n  height: 35px;\n  line-height: 2em;\n  text-align: center;\n  color: var(--text-inv);\n  background-color: var(--main-color);\n  padding: 0;\n}\n\nc3m-calendar table th {\n  font: var(--stack-l);\n  text-transform: uppercase;\n}\n\nc3m-calendar table th abbr {text-decoration: none;}\n\nc3m-calendar table td.today, c3m-calendar table td.today.focus {\n    background-color: var(--hot-color-sec);\n  }\n\nc3m-calendar table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 1px;\n}\n\nc3m-calendar table td.empty, c3m-calendar table td.empty:hover {\n  background-color: var(--main-color);\n  cursor: initial;\n}\n\nc3m-calendar table td:hover, c3m-calendar table td.focus {\n  background-color: rgba(255,255,255,0.15);\n  cursor: pointer;\n}\n\nc3m-calendar .offscreen {\n  position: absolute;\n  left: -200em;\n  top: -100em;\n}\n\nc3m-calendar [aria-hidden=\"true\"] {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUEwQixlQUFlLENBQUM7O0FBRTFDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdDQUFnQztDQUNqQzs7QUFDQywyQkFBMkIsYUFBYSxDQUFDOztBQUUzQztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFDQUFxQztDQUN0Qzs7QUFDRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsZUFBZTtDQUNoQjs7QUFDQyxvQkFBb0Isc0JBQXNCLENBQUM7O0FBQzNDO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7R0FDWjs7QUFFRCw4QkFBOEI7O0FBRWhDO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQsZUFBZTs7QUFDZjtFQUNFLHVCQUF1QjtFQUN2QixvQ0FBb0M7Q0FDckM7O0FBQ0Q7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsV0FBVztDQUNaOztBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtDQUMzQjs7QUFDQyw0QkFBNEIsc0JBQXNCLENBQUM7O0FBRW5EO0lBQ0UsdUNBQXVDO0dBQ3hDOztBQUVIO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmMzbS1jYWxlbmRhciBkaXYgPiBpbnB1dCB7bWF4LXdpZHRoOiA5ZW07fVxuXG5jM20tY2FsZW5kYXIgcCBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO1xufVxuICBjM20tY2FsZW5kYXIgYnV0dG9uOmhvdmVyIHtvcGFjaXR5OiAwLjg7fVxuXG5jM20tY2FsZW5kYXIgLmRhdGVwaWNrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZyk7XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjUpO1xufVxuI21vbnRoLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbiAgI21vbnRoLXdyYXAgc3Ryb25nIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxuICAjbW9udGgtd3JhcCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBjM20tY2FsZW5kYXIgY2FwdGlvbiBidXR0b24ge31cblxuYzNtLWNhbGVuZGFyIHRhYmxlIHRoZWFkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbn1cblxuYzNtLWNhbGVuZGFyIGJ1dHRvbiBzdmcge1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgd2lkdGg6IDEuN3JlbTtcbiAgZmlsbDogdmFyKC0tdGV4dC1pbnYpO1xufVxuXG5jM20tY2FsZW5kYXIgZGl2I21vbnRoIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHdpZHRoOiAxOTlweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuYzNtLWNhbGVuZGFyIHRib2R5I2NhbCB7XG4gIHdpZHRoOiAyNjFweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBUSEUgQ0VMTFMgKi9cbmMzbS1jYWxlbmRhciB0YWJsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuYzNtLWNhbGVuZGFyIHRhYmxlIHRoLFxuYzNtLWNhbGVuZGFyIHRhYmxlIHRkIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcGFkZGluZzogMDtcbn1cbmMzbS1jYWxlbmRhciB0YWJsZSB0aCB7XG4gIGZvbnQ6IHZhcigtLXN0YWNrLWwpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuICBjM20tY2FsZW5kYXIgdGFibGUgdGggYWJiciB7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cblxuICBjM20tY2FsZW5kYXIgdGFibGUgdGQudG9kYXksIGMzbS1jYWxlbmRhciB0YWJsZSB0ZC50b2RheS5mb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG90LWNvbG9yLXNlYyk7XG4gIH1cblxuYzNtLWNhbGVuZGFyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAxcHg7XG59XG5jM20tY2FsZW5kYXIgdGFibGUgdGQuZW1wdHksIGMzbS1jYWxlbmRhciB0YWJsZSB0ZC5lbXB0eTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmMzbS1jYWxlbmRhciB0YWJsZSB0ZDpob3ZlciwgYzNtLWNhbGVuZGFyIHRhYmxlIHRkLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5jM20tY2FsZW5kYXIgLm9mZnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMGVtO1xuICB0b3A6IC0xMDBlbTtcbn1cblxuYzNtLWNhbGVuZGFyIFthcmlhLWhpZGRlbj1cInRydWVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar/calendar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar/calendar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"application\" role=\"application\">\n\n  <p><label id=\"date_label\" for=\"date\">Date</label>\n    <input id=\"date\" type=\"text\" value={{targetString}} />\n    <button id=\"bn_date\">Select Date</button></p>\n\n  <div id=\"dp1\" class=\"datepicker\" aria-hidden=\"true\">\n\n    <div id=\"month-wrap\">\n      <button id=\"bn_prev\" role=\"button\" aria-label=\"Mois ou Année précédent(e)\" aria-labelledby=\"bn_prev-label\" tabindex=\"0\">\n         <svg>\n           <use xlink:href=\"assets/img/icons.svg#leftCalendarSvg\"></use>\n         </svg>\n      </button>\n      <strong id=\"month\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthString }}</strong>\n      <button id=\"bn_next\" role=\"button\" aria-label=\"Mois ou Année suivant(e)\" aria-labelledby=\"bn_next-label\" tabindex=\"0\">\n       <svg>\n         <use xlink:href=\"assets/img/icons.svg#rightCalendarSvg\"></use>\n       </svg>\n      </button>\n    </div>\n\n    <table id=\"cal\" aria-activedescendant=\"errMsg\" aria-labelledby=\"month\" tabindex=\"0\">\n      <thead>\n        <tr id=\"weekdays\">\n          <th scope=\"col\" id=\"Sunday\"><abbr title=\"Sunday\">Su</abbr></th>\n          <th scope=\"col\" id=\"Monday\"><abbr title=\"Monday\">Mo</abbr></th>\n          <th scope=\"col\" id=\"Tuesday\"><abbr title=\"Tuesday\">Tu</abbr></th>\n          <th scope=\"col\" id=\"Wednesday\"><abbr title=\"Wednesday\">We</abbr></th>\n          <th scope=\"col\" id=\"Thursday\"><abbr title=\"Thursday\">Th</abbr></th>\n          <th scope=\"col\" id=\"Friday\"><abbr title=\"Friday\">Fr</abbr></th>\n          <th scope=\"col\" id=\"Saturday\"><abbr title=\"Saturday\">Sa</abbr></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr>\n          <td id=\"errMsg\" colspan=\"7\">Javascript must be enabled</td>\n        </tr>\n      </tbody>\n\n    </table>\n\n    <button id=\"bn_prev-label\" class=\"offscreen\">Go to previous month</button>\n    <button id=\"bn_next-label\" class=\"offscreen\">Go to next month</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar/calendar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar/calendar.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarComponent = /** @class */ (function () {
    /* ********* CONSTRUCTOR ********* */
    function CalendarComponent() {
        this.targetString = ' ';
        this.keys = {};
    }
    /* ************ ON INIT *********** */
    CalendarComponent.prototype.ngOnInit = function () {
        this.datepicker('dp1', 'date', true);
        var thisObj = this;
        /* LISTENER CLICK DATE BUTTON */
        document.getElementById('bn_date').addEventListener('click', function (e) {
            thisObj.showDlg(); // OPEN MODAL
            e.stopPropagation();
            return false;
        });
    };
    /* ************** MAIN FUNCTION ************** */
    CalendarComponent.prototype.datepicker = function (id, target, modal) {
        /* All the selectors */
        this.id = '#' + id;
        var elem = document.getElementById(id);
        this.monthObj = elem.querySelector('#month');
        this.prev = elem.querySelector('#bn_prev');
        this.next = elem.querySelector('#bn_next');
        this.grid = elem.querySelector('#cal');
        this.target = '#' + target;
        this.bModal = modal; // true if datepicker should appear in modal
        // Month Names
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        // Day Names
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // DATE
        this.dateObj = new Date();
        // Current Date
        this.curYear = this.dateObj.getFullYear(); // Get the Year using Local Time
        this.year = this.curYear;
        this.curMonth = this.dateObj.getMonth(); // Get the Month using Local Time
        this.month = this.curMonth;
        this.currentDate = true;
        this.date = this.dateObj.getDate();
        // Keyboard Keys
        this.keys = {
            tab: 9,
            enter: 13,
            esc: 27,
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        // Stock name of current Date
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        // Fill the calendar grid
        this.fillGrid();
        // Point Activedescendant to the current day
        var today = this.grid.querySelector('.today');
        this.grid.setAttribute('aria-activedescendant', today.getAttribute('id'));
        // Call all events listener
        this.bindHandlers();
    };
    /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    CalendarComponent.prototype.bindHandlers = function () {
        var thisobj = this;
        /* ---------------------------------------------- */
        this.prev.addEventListener('click', function (e) {
            return thisobj.handlePrevClick(e);
        });
        this.next.addEventListener('click', function (e) {
            return thisobj.handleNextClick(e);
        });
        this.prev.addEventListener('keydown', function (e) {
            return thisobj.handlePrevKeyDown(e);
        });
        this.next.addEventListener('keydown', function (e) {
            return thisobj.handleNextKeyDown(e);
        });
        /* ---------------------------------------------- */
        this.grid.addEventListener('keydown', function (e) {
            return thisobj.handleGridKeyDown(e);
        });
        this.grid.addEventListener('keypress', function (e) {
            return thisobj.handleGridKeyPress(e);
        });
        this.grid.addEventListener('focus', function (e) {
            return thisobj.handleGridFocus(e);
        });
        this.grid.addEventListener('blur', function (e) {
            return thisobj.handleGridBlur(e);
        });
        /* ---------------------------------------------- */
        this.addEventListenerList(thisobj);
    };
    /* ************************** HANDLE GRID BLUR ********************** */
    CalendarComponent.prototype.handleGridBlur = function (e) {
        if (document.querySelector('#' + this.grid.getAttribute('aria-activedescendant'))) {
            var idActiveDescendant = document.querySelector('#' + this.grid.getAttribute('aria-activedescendant'));
            idActiveDescendant.classList.remove('focus');
            idActiveDescendant.setAttribute('aria-selected', 'false');
        }
        return true;
    };
    /* ************************** HANDLE GRID FOCUS ********************** */
    CalendarComponent.prototype.handleGridFocus = function (e) {
        var active = this.grid.getAttribute('aria-activedescendant');
        if (document.querySelector('#' + active).getAttribute('id') === undefined) {
            var lastDay = 'day' + this.calcNumDays(this.year, this.month);
            document.querySelector('#' + lastDay).classList.add('focus');
            document.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
        }
        else {
            document.querySelector('#' + active).classList.add('focus');
            document.querySelector('#' + active).setAttribute('aria-selected', 'true');
        }
        return true;
    };
    /* ************************** HANDLE KEY PRESS ********************** */
    CalendarComponent.prototype.handleGridKeyPress = function (e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab:
            case this.keys.enter:
            case this.keys.space:
            case this.keys.esc:
            case this.keys.left:
            case this.keys.right:
            case this.keys.up:
            case this.keys.down:
            case this.keys.pageup:
            case this.keys.pagedown:
            case this.keys.home:
            case this.keys.end: {
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** HANDLE GRID CLICK ********************** */
    CalendarComponent.prototype.handleGridClick = function (id, e) {
        var cell = id;
        // If Cell is empty
        if (cell.classList.contains('empty')) {
            return true;
        }
        // Get Focus Cell
        var tmpCell = this.grid.querySelector('.focus');
        tmpCell.classList.remove('focus');
        tmpCell.setAttribute('aria-selected', 'false');
        // Add New Focus Cell
        cell.classList.add('focus');
        cell.setAttribute('aria-selected', 'true');
        // Change Grid ActiveDescendant to the newCellId
        this.grid.setAttribute('aria-activedescendant', cell.getAttribute('id'));
        // Get the new Click Cell
        var curDay = document.getElementById(this.grid.getAttribute('aria-activedescendant'));
        // Change the targetString to represente the new current date
        this.targetString = (this.month < 9 ? '0' : '') + (this.month + 1) + '/' + curDay.firstChild.nodeValue + '/' + this.year;
        // Hide modal Dialog
        this.hideDlg();
        e.stopPropagation();
        return false;
    };
    /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    CalendarComponent.prototype.addEventListenerList = function (thisobj) {
        var list = this.grid.querySelectorAll('td');
        var i = 0;
        var len = list.length;
        for (i = 0; i < len; i++) {
            var itemList = list[i];
            itemList.addEventListener('click', function (e) {
                return thisobj.handleGridClick(this, e);
            });
        }
    };
    /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    CalendarComponent.prototype.handlePrevClick = function (e) {
        var active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showPrevYear();
        }
        else {
            this.showPrevMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', 'active');
        }
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    CalendarComponent.prototype.handleNextClick = function (e) {
        var active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showNextYear();
        }
        else {
            this.showNextMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', active);
        }
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    CalendarComponent.prototype.handlePrevKeyDown = function (e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (e.ctrlKey) {
                    return true;
                }
                else if (e.shiftKey) {
                    this.grid.focus();
                }
                else {
                    this.next.focus();
                }
                e.stopPropagation();
                return false;
            }
            case this.keys.enter:
            case this.keys.space: {
                if (e.shiftKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    CalendarComponent.prototype.handleNextKeyDown = function (e) {
        // Alt
        if (e.altKey) {
            return true;
        }
        // ENTER OR SPACE
        switch (e.keyCode) {
            case this.keys.enter:
            case this.keys.space: {
                // CTRL + SPACE   OR CTRL + ENTER
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** SHOW DIALOG ********************** */
    CalendarComponent.prototype.showDlg = function () {
        var thisObj = this;
        // Bind Event Listener
        document.addEventListener('click', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.addEventListener('mousedown', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.addEventListener('mouseup', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.addEventListener('mousemove', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.addEventListener('mouseover', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.querySelector(thisObj.id).setAttribute('aria-hidden', 'false');
        this.grid.focus();
    };
    /* ************************** ShowDialog Modal Method ********************** */
    CalendarComponent.prototype.showDialogMethod = function (e) {
        this.grid.focus();
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    CalendarComponent.prototype.handleGridKeyDown = function (e) {
        var rows = this.grid.querySelectorAll('tbody tr');
        var curDay = document.getElementById(this.grid.getAttribute('aria-activedescendant'));
        var days = this.grid.querySelectorAll('td:not(.empty)');
        var curRow = curDay.parentElement;
        // ALT
        if (e.altKey) {
            return true;
        }
        // TAB
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (this.bModal === true) {
                    // SHIFT + TAB
                    if (e.shiftKey) {
                        this.next.focus();
                    }
                    else {
                        this.prev.focus();
                    }
                    e.stopPropagation();
                    return false;
                }
                break;
            }
            // ENTER OR SPACE
            case this.keys.enter:
            case this.keys.space: {
                // CTRL ENTER OR CTRL SPACE
                if (e.ctrlKey) {
                    return true;
                }
                // update targent box
                this.targetString = (this.month < 9 ? '0' : '') + (this.month + 1) + '/' + curDay.firstChild.nodeValue + '/' + this.year;
                this.hideDlg();
                return false;
            }
            // ESCAPE
            case this.keys.esc: {
                this.hideDlg();
                e.stopPropagation();
                return false;
            }
            // LEFT
            case this.keys.left: {
                // LEFT + CTRL OR LEFT + SHIFT
                if (e.ctlrKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                var dayIndex = days.indexOf(curDay) - 1;
                var prevDay = null;
                if (dayIndex >= 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // RIGHT
            case this.keys.right: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                var dayIndex = days.indexOf(curDay) + 1;
                var nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // UP
            case this.keys.up: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                var dayIndex = days.indexOf(curDay) - 7;
                var prevDay = null;
                if (dayIndex > 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 3 - days.indexOf(curDay) + 7;
                    this.showPrevMonth(dayIndex);
                }
                e.stopPropagation();
                return false;
            }
            // DOWN
            case this.keys.down: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                var dayIndex = days.indexOf(curDay) + 7;
                var nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 8 - (days.length - days.indexOf(curDay));
                    this.showNextMonth(dayIndex);
                }
                e.stopPropagation();
                return false;
            }
            // PAGE UP
            case this.keys.pageup: {
                var active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    var lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    var lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.stopPropagation();
                return false;
            }
            // PAGE DOWN
            case this.keys.pagedown: {
                var active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    var lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    var lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.stopPropagation();
                return false;
            }
            // HOME
            case this.keys.home: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#day1').classList.add('focus');
                this.grid.querySelector('#day1').setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', 'day1');
                e.stopPropagation();
                return false;
            }
            // END
            case this.keys.end: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                ;
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#' + lastDay).classList.add('focus');
                this.grid.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', lastDay);
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** HIDE MODAL DIALOG ********************** */
    CalendarComponent.prototype.hideDlg = function () {
        var thisObj = this;
        document.removeEventListener('click', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.removeEventListener('mousedown', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.removeEventListener('mouseup', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.removeEventListener('mousemove', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.removeEventListener('mouseover', function (e) {
            return thisObj.showDialogMethod(e);
        });
        document.querySelector(this.id).setAttribute('aria-hidden', 'true');
        document.querySelector(this.target).focus();
    };
    /* ************************** SHOW PREVIOUS MONTH ********************** */
    CalendarComponent.prototype.showPrevMonth = function (offset) {
        if (this.month === 0) {
            this.month = 11;
            this.year--;
        }
        else {
            this.month--;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            var numDays = this.calcNumDays(this.year, this.month);
            var day = 'day' + (numDays - offset);
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    };
    /* ************************** SHOW NEXT MONTH ********************** */
    CalendarComponent.prototype.showNextMonth = function (offset) {
        if (this.month === 11) {
            this.month = 0;
            this.year++;
        }
        else {
            this.month++;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            var day = 'day' + offset;
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    };
    /* ************************** SHOW PREVIOUS YEAR ********************** */
    CalendarComponent.prototype.showPrevYear = function () {
        this.year--;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = (this.monthNames[this.month] + ' ' + this.year);
        this.addEventListenerList(this);
    };
    /* ************************** SHOW NEXT YEAR ********************** */
    CalendarComponent.prototype.showNextYear = function () {
        this.year++;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = (this.monthNames[this.month] + ' ' + this.year);
        this.addEventListenerList(this);
    };
    /* ************************** FILL THE GRID ********************** */
    CalendarComponent.prototype.fillGrid = function () {
        var numDays = this.calcNumDays(this.year, this.month);
        var startWeekDay = this.calcStarWeekDay(this.year, this.month);
        var weekDay = 0;
        var curDay = 1;
        var rowCount = 1;
        this.tbody = this.grid.querySelector('tbody');
        var gridCells = '\t<tr id="row0">\n';
        // Clear the grid
        var tbodyChild = this.tbody.querySelector('tr');
        while (this.tbody.firstChild) {
            this.tbody.removeChild(this.tbody.firstChild);
        }
        // Insert Empty Cells
        for (weekDay = 0; weekDay < startWeekDay; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp; </td>\n';
        }
        // Insert the days of the month
        for (curDay = 1; curDay <= numDays; curDay++) {
            if (curDay === this.date && this.currentDate === true) {
                gridCells += '\t\t<td id="day' + curDay + '" class="today"' + 'headers="row' + rowCount + ' ' + this.dayNames[weekDay] + '" ' + 'role="gridcell" aria-selected="false">' + curDay + '</td> \n';
            }
            else {
                gridCells += '\t\t<td id="day' + curDay + '" headers="row' + rowCount + ' ' + this.dayNames[weekDay] + '" ' + 'role="gridcell" aria-selected="false">' + curDay + '</td> \n';
            }
            // Last day of week
            if (weekDay === 6 && curDay < numDays) {
                gridCells += '\t</tr>\n\t<tr id="row' + rowCount + '">\n';
                rowCount++;
                weekDay = 0;
            }
            else {
                weekDay++;
            }
        }
        // Insert empty cells
        for (weekDay; weekDay < 7; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
        }
        gridCells += '\t </tr>';
        this.tbody.insertAdjacentHTML('beforeend', gridCells);
    };
    /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    CalendarComponent.prototype.calcNumDays = function (year, month) {
        return 32 - new Date(year, month, 32).getDate();
    };
    /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    CalendarComponent.prototype.calcStarWeekDay = function (year, month) {
        return new Date(year, month, 1).getDay();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "monthString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "targetString", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/main/calendar-page/calendar/calendar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/main/calendar-page/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2Fyb3VzZWwtcGFnZS9jYXJvdXNlbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE CAROUSEL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Carousel</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"carousel\">Carousel</a></li>\n    <!--<li><a href=\"#\">Automatic Carousel</a></li>\n    <li><a href=\"#\">Images Carousel</a></li>-->\n  </ul>\n</div>\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"carousel\">\n    <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Simple Carousel\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/carousel\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n          <span>Github</span></a>\n      </h3>\n\n    <div class=\"demo\">\n      <!-- CAROUSEL DEMO -->\n      <c3m-carousel>\n\n          <c3m-carousel-item [index]=\"0\">\n              <p>Slide 1</p>\n          </c3m-carousel-item>\n\n          <c3m-carousel-item [index]=\"1\">\n              <p>Slide 2</p>\n          </c3m-carousel-item>\n\n          <c3m-carousel-item [index]=\"2\">\n              <p>Slide 3</p>\n          </c3m-carousel-item>\n\n        </c3m-carousel>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>index</dt>\n        <dd>Order of the slides</dd>\n      </dl>\n      <dl>\n        <dt> p tag</dt>\n        <dd>Write what you want, it's a ng-content tag</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n              <code>\n  &#x3C;c3m-carousel&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;0&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 1&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;1&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 2&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;2&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 3&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n  &#x3C;/c3m-carousel&#x3E;</code>\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CarouselPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPageComponent", function() { return CarouselPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CarouselPageComponent = /** @class */ (function () {
    function CarouselPageComponent(app) {
        this.app = app;
    }
    CarouselPageComponent.prototype.ngOnInit = function () {
        var subComp = ['carousel-item'];
        this.app.codeSnippets(subComp);
    };
    CarouselPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-carousel-page',
            template: __webpack_require__(/*! ./carousel-page.component.html */ "./src/app/main/carousel-page/carousel-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./carousel-page.component.css */ "./src/app/main/carousel-page/carousel-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CarouselPageComponent);
    return CarouselPageComponent;
}());



/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2Fyb3VzZWwtcGFnZS9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- A Carousel Item-->\n<li class=\"carousel-item\" role=\"tab\" tabindex={{tabIndex}} [attr.aria-selected]=\"isVisible\" [attr.aria-controls]=\"itemID\">\n        <!-- Previous button -->\n        <button class=\"previousCarouselItem\" tabindex={{tabIndex}} (click)=\"previousSlide()\" aria-label=\"Previous slide\"></button>\n\n        <!-- Carousel item Content -->\n        <div class=\"carousel-item-content\" role=\"tabpanel\" id={{itemID}} [attr.aria-hidden]=\"!isVisible\">\n            <ng-content></ng-content>\n        </div>\n\n        <!-- Next Button -->\n        <button class=\"nextCarouselItem\" tabindex={{tabIndex}} (click)=\"nextSlide()\" aria-label=\"Next slide\"></button>\n</li>\n\n"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel.component */ "./src/app/main/carousel-page/carousel/carousel.component.ts");



var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(carousel) {
        this.carousel = carousel;
        this.isVisible = true;
        this.tabIndex = '-1';
        this.carousel.addGroup(this);
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
        this.itemID = 'item' + this.index;
    };
    CarouselItemComponent.prototype.ngAfterViewInit = function () {
        this.itemID = 'item' + this.index;
    };
    CarouselItemComponent.prototype.previousSlide = function () {
        this.carousel.previous(this);
    };
    CarouselItemComponent.prototype.nextSlide = function () {
        this.carousel.next(this);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselItemComponent.prototype, "isVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CarouselItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselItemComponent.prototype, "tabIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CarouselItemComponent.prototype, "itemID", void 0);
    CarouselItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-carousel-item',
            template: __webpack_require__(/*! ./carousel-item.component.html */ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./carousel-item.component.css */ "./src/app/main/carousel-page/carousel/carousel-item/carousel-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Carousel Container */\nc3m-carousel .carousel{\n    position:relative;\n    overflow: hidden;\n    width: 80%;\n    margin: 2.5rem;\n}\nc3m-carousel .carouselItemList{\n        overflow:hidden;\n        margin:0 auto;\n        display:block;\n        width:100%;\n        height: 20rem;\n    }\n/* BULLEPOINTS */\nc3m-carousel .bulletpoint{\n        display:block;\n        margin: 0 auto;\n        text-align:center;\n        width:100%;\n        position:absolute;\n        z-index:17;\n        bottom: 5%;\n    }\nc3m-carousel .bulletpoint li {\n            height: 1.2rem;\n            width: 1.2rem;\n            background-color: #89dbe8;\n            display: inline-block;\n            margin-right: 1rem;\n            border-radius: 50%;\n\n        }\nc3m-carousel .bulletpoint li:hover{\n                opacity:0.8;\n            }\nc3m-carousel .bulletpoint li button{\n                    height: 100%;\n                    width: 100%;\n                    background-color: transparent;\n                    cursor: pointer;\n                }\nc3m-carousel .bulletpoint li[aria-selected=\"true\"]{\n                        background-color: white;\n                    }\n/* CONTROLS */\nc3m-carousel .previousCarouselItem::before {\n                 display: block;\n                 width: 1rem;\n                 height: 1rem;\n                 content: \"\";\n                 border-bottom: 4px solid white;\n                 border-left: 4px solid white;\n                 -webkit-transform: rotate(45deg);\n                         transform: rotate(45deg);\n                 position: absolute;\n                 top: 1rem;\n                 left: 50%;\n             }\nc3m-carousel .nextCarouselItem::before {\n                    display: block;\n                    width: 1rem;\n                    height: 1rem;\n                    content: \"\";\n                    border-bottom: 4px solid white;\n                    border-right: 4px solid white;\n                    -webkit-transform: rotate(-45deg);\n                            transform: rotate(-45deg);\n                    position: absolute;\n                    top: 1rem;\n                    right: 50%;\n                }\nc3m-carousel .carousel-item{\n                    display:inline-block;\n                    height: 20rem;\n                    width:100%;\n                }\nc3m-carousel .previousCarouselItem:hover,\n                    c3m-carousel .nextCarouselItem:hover{\n                        opacity: 0.8;\n                    }\n/* Carousel Item List Content */\nc3m-carousel .carousel-item-content{\n                            display: block;\n                            width: 100%;\n                            background-color: #44abbc;\n                            height: calc(100% - 3.4rem);\n                            margin: 0 auto;\n                            position: absolute;\n                            transition: -webkit-transform 0.3s;\n                            transition: transform 0.3s;\n                            transition: transform 0.3s, -webkit-transform 0.3s;\n                            left: 0;\n                            top: 3.4rem;\n                        }\n/* A simple paragraph in a item list content */\nc3m-carousel .carousel-item-content p{\n                                display: block;\n                                padding-top: 5.2rem;\n                                color: white;\n                                font-size: 4rem;\n                                text-align: center;\n                            }\n/* PREVIOUS button */\nc3m-carousel .previousCarouselItem{\n                                    position: absolute;\n                                    top:0;\n                                    display: inline-block;\n                                    width: 50%;\n                                    height: 3.4rem;\n                                    left:0;\n                                    cursor:pointer;\n                                    background-color: #ed9c20;\n                                }\n/* NEXT button */\nc3m-carousel .nextCarouselItem{\n                                    position: absolute;\n                                    top:0;\n                                    display: inline-block;\n                                    width: 50%;\n                                    height: 3.4rem;\n                                    left:50%;\n                                    cursor:pointer;\n                                    background-color: #ed9c20;\n                                }\n/* MANAGE BUTTONS TAB INDEX */\nc3m-carousel .nextCarouselItem[tabindex=\"-1\"],\n  c3m-carousel .previousCarouselItem[tabindex=\"-1\"]{\n      z-index: 0;\n      opacity:0;\n  }\nc3m-carousel .nextCarouselItem[tabindex=\"0\"],\n      c3m-carousel .previousCarouselItem[tabindex=\"0\"]{\n          z-index: 15;\n      }\n/* **** MIN WIN 1000 px ***** */\n@media (min-width: 1000px){\n    c3m-carousel .previousCarouselItem::before {\n        width: 2rem;\n        height: 2rem;\n        top: 45%;\n        left: 39.7%;\n    }\n        c3m-carousel .nextCarouselItem::before {\n            width: 2rem;\n            height: 2rem;\n            top: 45%;\n            right: 39.7%\n        }\n    c3m-carousel .previousCarouselItem{\n        width: 11.5%;\n        height: 100%;\n        font-size: 3.5rem;\n        display:inline-block;\n        left:0;\n    }\n    c3m-carousel .carouselItemList {\n        width: 75%;\n    }\n    c3m-carousel  .nextCarouselItem{\n        width: 11.5%;\n        height: 100%;\n        font-size: 3.5rem;\n        display:inline-block;\n        right:0;\n        left:auto;\n    }\n    c3m-carousel .carousel-item-content {\n        display: block;\n        margin: 0 auto;\n        position: absolute;\n        height: 100%;\n        left: 0;\n        top: 0;\n    }\n    c3m-carousel .carousel-item-content p {\n        padding-top: 6rem;\n    }\n    c3m-carousel .bulletpoint{\n        bottom:1rem;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYXJvdXNlbC1wYWdlL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdCQUF3QjtBQUN4QjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFFRztRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO0tBQ2pCO0FBQ0QsaUJBQWlCO0FBQ2pCO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztLQUNkO0FBQ0c7WUFDSSxlQUFlO1lBQ2YsY0FBYztZQUNkLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLG1CQUFtQjs7U0FFdEI7QUFDRztnQkFDSSxZQUFZO2FBQ2Y7QUFDRztvQkFDSSxhQUFhO29CQUNiLFlBQVk7b0JBQ1osOEJBQThCO29CQUM5QixnQkFBZ0I7aUJBQ25CO0FBQ0c7d0JBQ0ksd0JBQXdCO3FCQUMzQjtBQUdSLGNBQWM7QUFDZDtpQkFDSSxlQUFlO2lCQUNmLFlBQVk7aUJBQ1osYUFBYTtpQkFDYixZQUFZO2lCQUNaLCtCQUErQjtpQkFDL0IsNkJBQTZCO2lCQUM3QixpQ0FBeUI7eUJBQXpCLHlCQUF5QjtpQkFDekIsbUJBQW1CO2lCQUNuQixVQUFVO2lCQUNWLFVBQVU7Y0FDYjtBQUNFO29CQUNJLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixhQUFhO29CQUNiLFlBQVk7b0JBQ1osK0JBQStCO29CQUMvQiw4QkFBOEI7b0JBQzlCLGtDQUEwQjs0QkFBMUIsMEJBQTBCO29CQUMxQixtQkFBbUI7b0JBQ25CLFVBQVU7b0JBQ1YsV0FBVztpQkFDZDtBQUNEO29CQUNJLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxXQUFXO2lCQUNkO0FBRUc7O3dCQUVJLGFBQWE7cUJBQ2hCO0FBQ0csZ0NBQWdDO0FBQ2hDOzRCQUNJLGVBQWU7NEJBQ2YsWUFBWTs0QkFDWiwwQkFBMEI7NEJBQzFCLDRCQUE0Qjs0QkFDNUIsZUFBZTs0QkFDZixtQkFBbUI7NEJBQ25CLG1DQUEyQjs0QkFBM0IsMkJBQTJCOzRCQUMzQixtREFBbUQ7NEJBQ25ELFFBQVE7NEJBQ1IsWUFBWTt5QkFDZjtBQUVELCtDQUErQztBQUMvQztnQ0FDUSxlQUFlO2dDQUNmLG9CQUFvQjtnQ0FDcEIsYUFBYTtnQ0FDYixnQkFBZ0I7Z0NBQ2hCLG1CQUFtQjs2QkFDdEI7QUFDRyxxQkFBcUI7QUFDckI7b0NBQ0ksbUJBQW1CO29DQUNuQixNQUFNO29DQUNOLHNCQUFzQjtvQ0FDdEIsV0FBVztvQ0FDWCxlQUFlO29DQUNmLE9BQU87b0NBQ1AsZUFBZTtvQ0FDZiwwQkFBMEI7aUNBQzdCO0FBQ0MsaUJBQWlCO0FBQ2pCO29DQUNFLG1CQUFtQjtvQ0FDbkIsTUFBTTtvQ0FDTixzQkFBc0I7b0NBQ3RCLFdBQVc7b0NBQ1gsZUFBZTtvQ0FDZixTQUFTO29DQUNULGVBQWU7b0NBQ2YsMEJBQTBCO2lDQUM3QjtBQUUvQiw4QkFBOEI7QUFDOUI7O01BRUksV0FBVztNQUNYLFVBQVU7R0FDYjtBQUNHOztVQUVJLFlBQVk7T0FDZjtBQUdQLGdDQUFnQztBQUVoQztJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixTQUFTO1FBQ1QsWUFBWTtLQUNmO1FBQ0c7WUFDSSxZQUFZO1lBQ1osYUFBYTtZQUNiLFNBQVM7WUFDVCxZQUFZO1NBQ2Y7SUFDTDtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixPQUFPO0tBQ1Y7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLFFBQVE7UUFDUixVQUFVO0tBQ2I7SUFDRDtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixRQUFRO1FBQ1IsT0FBTztLQUNWO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jYXJvdXNlbC1wYWdlL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIENhcm91c2VsIENvbnRhaW5lciAqL1xuYzNtLWNhcm91c2VsIC5jYXJvdXNlbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAyLjVyZW07XG59XG5cbiAgICBjM20tY2Fyb3VzZWwgLmNhcm91c2VsSXRlbUxpc3R7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICB9XG4gICAgLyogQlVMTEVQT0lOVFMgKi9cbiAgICBjM20tY2Fyb3VzZWwgLmJ1bGxldHBvaW50e1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjE3O1xuICAgICAgICBib3R0b206IDUlO1xuICAgIH1cbiAgICAgICAgYzNtLWNhcm91c2VsIC5idWxsZXRwb2ludCBsaSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlkYmU4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIH1cbiAgICAgICAgICAgIGMzbS1jYXJvdXNlbCAuYnVsbGV0cG9pbnQgbGk6aG92ZXJ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTowLjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYzNtLWNhcm91c2VsIC5idWxsZXRwb2ludCBsaSBidXR0b257XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLmJ1bGxldHBvaW50IGxpW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJde1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgLyogQ09OVFJPTFMgKi9cbiAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLnByZXZpb3VzQ2Fyb3VzZWxJdGVtOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMzbS1jYXJvdXNlbCAubmV4dENhcm91c2VsSXRlbTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW17XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLnByZXZpb3VzQ2Fyb3VzZWxJdGVtOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLm5leHRDYXJvdXNlbEl0ZW06aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIENhcm91c2VsIEl0ZW0gTGlzdCBDb250ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjM20tY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0tY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhYmJjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMy40cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogQSBzaW1wbGUgcGFyYWdyYXBoIGluIGEgaXRlbSBsaXN0IGNvbnRlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGMzbS1jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbS1jb250ZW50IHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogUFJFVklPVVMgYnV0dG9uICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMzbS1jYXJvdXNlbCAucHJldmlvdXNDYXJvdXNlbEl0ZW17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkOWMyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIE5FWFQgYnV0dG9uICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzNtLWNhcm91c2VsIC5uZXh0Q2Fyb3VzZWxJdGVte1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkOWMyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gIC8qIE1BTkFHRSBCVVRUT05TIFRBQiBJTkRFWCAqL1xuICBjM20tY2Fyb3VzZWwgLm5leHRDYXJvdXNlbEl0ZW1bdGFiaW5kZXg9XCItMVwiXSxcbiAgYzNtLWNhcm91c2VsIC5wcmV2aW91c0Nhcm91c2VsSXRlbVt0YWJpbmRleD1cIi0xXCJde1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIG9wYWNpdHk6MDtcbiAgfVxuICAgICAgYzNtLWNhcm91c2VsIC5uZXh0Q2Fyb3VzZWxJdGVtW3RhYmluZGV4PVwiMFwiXSxcbiAgICAgIGMzbS1jYXJvdXNlbCAucHJldmlvdXNDYXJvdXNlbEl0ZW1bdGFiaW5kZXg9XCIwXCJde1xuICAgICAgICAgIHotaW5kZXg6IDE1O1xuICAgICAgfVxuXG5cbi8qICoqKiogTUlOIFdJTiAxMDAwIHB4ICoqKioqICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpe1xuICAgIGMzbS1jYXJvdXNlbCAucHJldmlvdXNDYXJvdXNlbEl0ZW06OmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIHRvcDogNDUlO1xuICAgICAgICBsZWZ0OiAzOS43JTtcbiAgICB9XG4gICAgICAgIGMzbS1jYXJvdXNlbCAubmV4dENhcm91c2VsSXRlbTo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgdG9wOiA0NSU7XG4gICAgICAgICAgICByaWdodDogMzkuNyVcbiAgICAgICAgfVxuICAgIGMzbS1jYXJvdXNlbCAucHJldmlvdXNDYXJvdXNlbEl0ZW17XG4gICAgICAgIHdpZHRoOiAxMS41JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIGxlZnQ6MDtcbiAgICB9XG4gICAgYzNtLWNhcm91c2VsIC5jYXJvdXNlbEl0ZW1MaXN0IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gICAgYzNtLWNhcm91c2VsICAubmV4dENhcm91c2VsSXRlbXtcbiAgICAgICAgd2lkdGg6IDExLjUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgbGVmdDphdXRvO1xuICAgIH1cbiAgICBjM20tY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgYzNtLWNhcm91c2VsIC5jYXJvdXNlbC1pdGVtLWNvbnRlbnQgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgIH1cbiAgICBjM20tY2Fyb3VzZWwgLmJ1bGxldHBvaW50e1xuICAgICAgICBib3R0b206MXJlbTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- A Carousel -->\n<div class=\"carousel\">\n\n    <!-- Carousel Item List -->\n   <ul role=\"tablist\" class=\"carouselItemList\">\n       <ng-content></ng-content>\n   </ul>\n\n    <!-- Carousel Bullet Points -->\n    <ul class=\"bulletpoint\">\n        <li *ngFor=\"let groupItem of groups; let i = 'index' \"\n            [attr.aria-controls]=\"groupItem.itemID\"\n            role=\"tab\"\n            [attr.aria-selected]=\"groupItem.isVisible\"\n            tabindex={{groupItem.tabIndex}} >\n\n            <button #bulletPoint aria-label=\"Go to this slide\" (click)=\"goTo(i)\"> </button>\n        </li>\n    </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel/carousel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel/carousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.sizeLi = 0;
        this.groups = [];
    }
    // After View Init
    CarouselComponent.prototype.ngAfterViewInit = function () {
        // Select All Carousel Item Content
        this.tabItemContent = document.querySelectorAll('.carousel-item-content');
        // Calcul Size of all Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
        }
        // Opacity 0 for All Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.tabItemContent[i].style.opacity = '0';
        }
        // Opacity 1 for the first Carousel Item
        this.tabItemContent[0].style.opacity = '1';
    };
    // On Init
    CarouselComponent.prototype.ngOnInit = function () {
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // For the visible Carousel Item, change the Aria Attributes and Tab Index
        this.groups[0].isVisible = true;
        this.groups[0].tabIndex = '0';
    };
    // Add a Carousel Item to the group of Carousel Item
    CarouselComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    // Click on Next Button
    CarouselComponent.prototype.next = function (group) {
        var _this = this;
        // "index" is the index of the carousel item in the group
        var index = this.groups.indexOf(group);
        // "lengthGroup" is the length of the Carousel Item Group
        var lengthGroup = this.groups.length;
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // If click next button with the last Slide (go to the first slide)
        if (index + 1 > lengthGroup - 1) {
            this.groups[0].isVisible = true;
            this.groups[0].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[lengthGroup - 1].style.opacity = '1';
            this.tabItemContent[0].style.transition = 'none';
            this.tabItemContent[0].style.transform = 'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[lengthGroup - 1].style.transform = 'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[0].style.opacity = '1';
                _this.tabItemContent[0].style.transition = 'transform 0.3s';
                _this.tabItemContent[0].style.zIndex = '10';
                _this.tabItemContent[0].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index + 1].isVisible = true;
            this.groups[index + 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index + 1].style.transition = 'none';
            this.tabItemContent[index + 1].style.transform = 'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform = 'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[index + 1].style.opacity = '1';
                _this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index + 1].style.zIndex = '10';
                _this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Click on a previous button  */
    CarouselComponent.prototype.previous = function (group) {
        var _this = this;
        var index = this.groups.indexOf(group);
        var lengthGroup = this.groups.length;
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        if (index - 1 < 0) {
            this.groups[lengthGroup - 1].isVisible = true;
            this.groups[lengthGroup - 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[0].style.opacity = '1';
            this.tabItemContent[lengthGroup - 1].style.transition = 'none';
            this.tabItemContent[lengthGroup - 1].style.transform = 'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[0].style.transform = 'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[lengthGroup - 1].style.opacity = '1';
                _this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
                _this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index - 1].isVisible = true;
            this.groups[index - 1].tabIndex = '0';
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index - 1].style.transition = 'none';
            this.tabItemContent[index - 1].style.transform = 'translate(-' + this.tabItemContent[index - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform = 'translate(+' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[index - 1].style.opacity = '1';
                _this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index - 1].style.zIndex = '10';
                _this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Function to go on a specific item with Bullepoint Click Event */
    CarouselComponent.prototype.goTo = function (indexToGo, group) {
        var _this = this;
        var random = Math.floor(Math.random() * 2 + 0);
        console.log(random);
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        this.groups[indexToGo].isVisible = true;
        this.groups[indexToGo].tabIndex = '0';
        this.tabItemContent[indexToGo].style.transition = 'none';
        if (random === 1) {
            this.tabItemContent[indexToGo].style.transform = 'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform = 'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        else if (random === 0) {
            this.tabItemContent[indexToGo].style.transform = 'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform = 'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        setTimeout(function () {
            _this.tabItemContent[indexToGo].style.opacity = '1';
            _this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
            _this.tabItemContent[indexToGo].style.zIndex = '10';
            _this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
        }, 300);
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/main/carousel-page/carousel/carousel.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/main/carousel-page/carousel/carousel.component.css")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Label styled as a button */\nc3m-checkbox-button label {\n  display: inline-block;\n  overflow: hidden;\n}\n/* Style of Button */\nc3m-checkbox-button label span {\n  display: inline-block;\n  line-height: 1.6;\n  text-align: center;\n  padding: 0 0.5em;\n  border: 1px solid var(--n-dark);\n  cursor: pointer;\n}\n/* Hover */\nc3m-checkbox-button label span:hover {\n  color: var(--text-inv);\n  background-color: var(--main-color);\n  border-color: var(--main-color);\n}\n/* Hide Input */\nc3m-checkbox-button label input {\n  position: relative;\n  left: -5em;\n}\n/* Style of Button is Checked */\nc3m-checkbox-button input:checked + span {\n  color: var(--text-inv);\n  background-color: var(--main-color);\n  border-color: var(--main-color);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jaGVja2JveC1wYWdlL2NoZWNrYm94LWJ1dHRvbi9jaGVja2JveC1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEJBQThCO0FBQzlCO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQjtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0NBQ2pCO0FBRUQsV0FBVztBQUNYO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7Q0FDakM7QUFFRCxnQkFBZ0I7QUFDaEI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaO0FBRUQsZ0NBQWdDO0FBQ2hDO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NoZWNrYm94LXBhZ2UvY2hlY2tib3gtYnV0dG9uL2NoZWNrYm94LWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBMYWJlbCBzdHlsZWQgYXMgYSBidXR0b24gKi9cbmMzbS1jaGVja2JveC1idXR0b24gbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFN0eWxlIG9mIEJ1dHRvbiAqL1xuYzNtLWNoZWNrYm94LWJ1dHRvbiBsYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMS42O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW4tZGFyayk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogSG92ZXIgKi9cbmMzbS1jaGVja2JveC1idXR0b24gbGFiZWwgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4vKiBIaWRlIElucHV0ICovXG5jM20tY2hlY2tib3gtYnV0dG9uIGxhYmVsIGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNWVtO1xufVxuXG4vKiBTdHlsZSBvZiBCdXR0b24gaXMgQ2hlY2tlZCAqL1xuYzNtLWNoZWNrYm94LWJ1dHRvbiBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label>\n    <input type=\"checkbox\" [name]=this.name><span> {{this.title}}</span>\n </label>\n</p>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckboxButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxButtonComponent", function() { return CheckboxButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxButtonComponent = /** @class */ (function () {
    function CheckboxButtonComponent() {
    }
    CheckboxButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxButtonComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxButtonComponent.prototype, "name", void 0);
    CheckboxButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox-button',
            template: __webpack_require__(/*! ./checkbox-button.component.html */ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-button.component.css */ "./src/app/main/checkbox-page/checkbox-button/checkbox-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxButtonComponent);
    return CheckboxButtonComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hlY2tib3gtcGFnZS9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC1pdGVtL2NoZWNrYm94LWdyb3VwLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <input type=\"checkbox\" id=\"{{id}}\" [name]=this.name [value]=this.value />\n  <label for=\"{{id}}\">{{ this.title }}</label>\n</li>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CheckboxGroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupItemComponent", function() { return CheckboxGroupItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxGroupItemComponent = /** @class */ (function () {
    function CheckboxGroupItemComponent() {
        // Inputs
        this.title = '';
    }
    CheckboxGroupItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxGroupItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxGroupItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxGroupItemComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxGroupItemComponent.prototype, "id", void 0);
    CheckboxGroupItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox-group-item',
            template: __webpack_require__(/*! ./checkbox-group-item.component.html */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-group-item.component.css */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxGroupItemComponent);
    return CheckboxGroupItemComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-checkbox-group {margin-bottom: 1rem;}\n\n  c3m-checkbox-group legend {\n    font: 1em/1 var(--stack-b);\n    padding-bottom: 1em;\n  }\n\n  c3m-checkbox-group label {\n    display: inline-block;\n    font-family: var(--stack);\n    padding: 0;\n  }\n\n  c3m-checkbox-group-item + c3m-checkbox-group-item li {margin-top: 0.5em;}\n\n  /* Single line options */\n\n  c3m-checkbox-group.go-along ul {display: flex;}\n\n  c3m-checkbox-group.go-along c3m-checkbox-group-item + c3m-checkbox-group-item li {margin: 0 0 0 1em;}\n\n  /* ------------- @MEDIA ---------------- */\n\n  @media screen and (min-width: 750px) {\n  c3m-checkbox-group legend {font-size: 1.3em;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jaGVja2JveC1wYWdlL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CLG9CQUFvQixDQUFDOztFQUV2QztJQUNFLDJCQUEyQjtJQUMzQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLFdBQVc7R0FDWjs7RUFDRCxzREFBc0Qsa0JBQWtCLENBQUM7O0VBRTNFLHlCQUF5Qjs7RUFDdkIsZ0NBQWdDLGNBQWMsQ0FBQzs7RUFDL0Msa0ZBQWtGLGtCQUFrQixDQUFDOztFQUd2RywyQ0FBMkM7O0VBRTNDO0VBQ0UsMkJBQTJCLGlCQUFpQixDQUFDO0NBQzlDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jaGVja2JveC1wYWdlL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tY2hlY2tib3gtZ3JvdXAge21hcmdpbi1ib3R0b206IDFyZW07fVxuXG4gIGMzbS1jaGVja2JveC1ncm91cCBsZWdlbmQge1xuICAgIGZvbnQ6IDFlbS8xIHZhcigtLXN0YWNrLWIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIH1cblxuICBjM20tY2hlY2tib3gtZ3JvdXAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogdmFyKC0tc3RhY2spO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgYzNtLWNoZWNrYm94LWdyb3VwLWl0ZW0gKyBjM20tY2hlY2tib3gtZ3JvdXAtaXRlbSBsaSB7bWFyZ2luLXRvcDogMC41ZW07fVxuXG4vKiBTaW5nbGUgbGluZSBvcHRpb25zICovXG4gIGMzbS1jaGVja2JveC1ncm91cC5nby1hbG9uZyB1bCB7ZGlzcGxheTogZmxleDt9XG4gIGMzbS1jaGVja2JveC1ncm91cC5nby1hbG9uZyBjM20tY2hlY2tib3gtZ3JvdXAtaXRlbSArIGMzbS1jaGVja2JveC1ncm91cC1pdGVtIGxpIHttYXJnaW46IDAgMCAwIDFlbTt9XG5cbiAgXG4vKiAtLS0tLS0tLS0tLS0tIEBNRURJQSAtLS0tLS0tLS0tLS0tLS0tICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIGMzbS1jaGVja2JveC1ncm91cCBsZWdlbmQge2ZvbnQtc2l6ZTogMS4zZW07fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckboxGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupComponent", function() { return CheckboxGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxGroupComponent = /** @class */ (function () {
    function CheckboxGroupComponent() {
        // Inputs
        this.legend = '';
    }
    CheckboxGroupComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxGroupComponent.prototype, "legend", void 0);
    CheckboxGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox-group',
            template: __webpack_require__(/*! ./checkbox-group.component.html */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-group.component.css */ "./src/app/main/checkbox-page/checkbox-group/checkbox-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxGroupComponent);
    return CheckboxGroupComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-checkbox-link label {\n  display: inline-block;\n  padding: 0;\n}\n\nc3m-checkbox-link label {\n  font-family: var(--stack);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jaGVja2JveC1wYWdlL2NoZWNrYm94LWxpbmsvY2hlY2tib3gtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hlY2tib3gtcGFnZS9jaGVja2JveC1saW5rL2NoZWNrYm94LWxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS1jaGVja2JveC1saW5rIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuXG5jM20tY2hlY2tib3gtbGluayBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdGFjayk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"checkbox\" id=\"{{id}}\" [name]=this.name [value]=this.value />\n  <label for=\"{{id}}\">\n    <ng-content></ng-content>\n  </label>\n</p>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckboxLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxLinkComponent", function() { return CheckboxLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxLinkComponent = /** @class */ (function () {
    function CheckboxLinkComponent() {
    }
    CheckboxLinkComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxLinkComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxLinkComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxLinkComponent.prototype, "value", void 0);
    CheckboxLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox-link',
            template: __webpack_require__(/*! ./checkbox-link.component.html */ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-link.component.css */ "./src/app/main/checkbox-page/checkbox-link/checkbox-link.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxLinkComponent);
    return CheckboxLinkComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hlY2tib3gtcGFnZS9jaGVja2JveC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Checkboxes</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#checkbox\">Checkboxes</a></li>\n    <li><a scrollTo href=\"#checkbox-group\">Checkbox Group</a></li>\n    <li><a scrollTo href=\"#checkbox-link\">Checkbox with link in label</a></li>\n    <li><a scrollTo href=\"#checkbox-button\">Checkbox button</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Checkboxes\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/checkbox\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxName1\"\n        value=\"checkboxValue1\"\n        [id]=\"'checkbox1'\">\n      </c3m-checkbox>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The label tag</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The most important attribute : Link between Label and Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of input</dd>\n        </div>\n        <div>\n          <dt>class</dt>\n          <dd>allows to customize checkboxes (optional)</dd>\n        </div>\n        <div>\n          <dt>checked</dt>\n          <dd>if present, checkbox will be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>required</dt>\n          <dd>if present, check will be required on submit (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>disable the checkbox (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <h4>Custom checkbox (add the <code>custom</code> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxName2\"\n        value=\"checkboxValue2\"\n        [id]=\"'checkbox2'\"\n        class=\"custom\">\n      </c3m-checkbox>\n    </div>\n\n    <h4>Unstressed labels (add the <code>unstressed</code> class)</h4>\n\n    <div class=\"demo\">\n        <!-- SIMPLE CHECKBOX -->\n        <c3m-checkbox\n          title=\"Do you want check me? This case is suitable for longer labels\"\n          name=\"checkboxName3\"\n          value=\"checkboxValue3\"\n          [id]=\"'checkbox3'\"\n          class=\"unstressed\">\n        </c3m-checkbox>\n    </div>\n\n    <h4>On-Off Button (add the <code>on-off</code> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxOnOff\"\n        value=\"checked\"\n        [id]=\"'checkboxOnOff'\"\n        class=\"on-off\">\n      </c3m-checkbox>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE CHECKBOX --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName1&#34;\n  value=&#34;checkboxValue1&#34;\n  [id]=&#34;&apos;checkbox1&apos;&#34;&gt;\n&lt;/c3m-checkbox&gt;\n\n\n&lt;!-- CUSTOM CSS CHECKBOX --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName2&#34;\n  value=&#34;checkboxValue2&#34;\n  [id]=&#34;&apos;checkbox2&apos;&#34;\n  class=&#34;custom&#34;&gt;\n&lt;/c3m-checkbox&gt;\n\n&lt;!-- UNSTRESSED LABELS --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName3&#34;\n  value=&#34;checkboxValue3&#34;\n  [id]=&#34;&apos;checkbox3&apos;&#34;\n  class=&#34;unstressed&#34;&gt;\n&lt;/c3m-checkbox&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<!-- CHECKBOX GROUP -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-group\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Checkbox Group\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/checkbox-group\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <h4>Common List</h4>\n    <div class=\"demo\">\n      <c3m-checkbox-group legend=\"Which conferences would you like to attend?\">\n        <c3m-checkbox-group-item\n          title=\"Smashing Conf\"\n          name=\"conf\"\n          value=\"smash\"\n          [id]=\"'smash'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"An Event Apart\"\n          name=\"conf\"\n          value=\"apart\"\n          [id]=\"'apart'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"Performance Now\"\n          name=\"conf\"\n          value=\"perf\"\n          [id]=\"'perf'\">\n        </c3m-checkbox-group-item>\n      </c3m-checkbox-group>\n    </div>\n\n    <h4>Single Line (add the <em>go-along</em> class)</h4>\n    <div class=\"demo\">\n      <c3m-checkbox-group class=\"go-along\" legend=\"Which subjects are you interested on?\">\n        <c3m-checkbox-group-item\n          title=\"web\"\n          name=\"interest\"\n          value=\"web\"\n          [id]=\"'confWeb'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"mobile\"\n          name=\"interest\"\n          value=\"mobile\"\n          [id]=\"'confMob'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"cloud\"\n          name=\"interest\"\n          value=\"cloud\"\n          [id]=\"'confCloud'\">\n        </c3m-checkbox-group-item>\n      </c3m-checkbox-group>\n    </div>\n\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-checkbox-group class=&#34;go-along&#34; legend=&#34;Which subjects are you interested on?&#34;&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;web&#34;\n      name=&#34;interest&#34;\n      value=&#34;web&#34;\n      [id]=&#34;'confWeb'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;mobile&#34;\n      name=&#34;interest&#34;\n      value=&#34;mobile&#34;\n      [id]=&#34;'confMob'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;cloud&#34;\n      name=&#34;interest&#34;\n      value=&#34;cloud&#34;\n      [id]=&#34;'confCloud'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n  &lt;/c3m-checkbox-group&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- RADIO GROUP BUTTON -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-link\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Checkbox With Link in Label\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/checkbox-link\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <c3m-checkbox-link\n        [id]=\"'tofu'\"\n        name=\"tofu\"\n        value=\"ok\">\n        I've read and I agree with the <a href=\"#\">termes of use</a>\n      </c3m-checkbox-link>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-checkbox-link\n  [id]=&#34;'tofu'&#34;\n  name=&#34;tofu&#34;\n  value=&#34;ok&#34;&gt;\n  I've read and I agree with the &lt;a href=&#34;#&#34;&gt;termes of use&lt;/a&gt;\n&lt;/c3m-checkbox-link&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- RADIO CHECK BUTTON-->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-button\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Checkbox Button\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/checkbox-button\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- CHECKBOX BUTTON -->\n      <c3m-checkbox-button\n        title=\"Check me!\"\n        name=\"checkboxName3\">\n      </c3m-checkbox-button>\n    </div>\n\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- CHECKBOX BUTTON --&gt;\n&lt;c3m-checkbox-button\n  title=&#34;Check me !&#34;\n  name=&#34;checkboxName3&#34;&gt;\n&lt;/c3m-checkbox-button&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageComponent", function() { return CheckboxPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CheckboxPageComponent = /** @class */ (function () {
    function CheckboxPageComponent(app) {
        this.app = app;
    }
    CheckboxPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    CheckboxPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox-page',
            template: __webpack_require__(/*! ./checkbox-page.component.html */ "./src/app/main/checkbox-page/checkbox-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-page.component.css */ "./src/app/main/checkbox-page/checkbox-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CheckboxPageComponent);
    return CheckboxPageComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox/checkbox.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox/checkbox.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-checkbox label {\n  display: inline-block;\n  padding: 0;\n}\n\nc3m-checkbox.unstressed label {\n  font-family: var(--stack);\n}\n\n/* ---- CUSTOM CHECKBOX ----- */\n\n/* Hide the checkbox */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked),\nc3m-checkbox.custom input[type=\"checkbox\"]:checked{\n  position: absolute;\n  left: -9999px;\n}\n\n/* move the label */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label,\nc3m-checkbox.custom input[type=\"checkbox\"]:checked + label {\n  position: relative;\n  padding-left: 25px;\n}\n\n/* Design a new checkbox */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label:before,\nc3m-checkbox.custom input[type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: -0.2em;\n  width: 17px; height: 17px;\n  border: 1px solid var(--n-medium);\n  background: var(--n-light);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0,0,0,.3)\n}\n\n/* Design a new validate icon for checkbox */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label:after,\nc3m-checkbox.custom input[type=\"checkbox\"]:checked + label:after {\n  content: '✔';\n  position: absolute;\n  top: -0.2em;\n  left: 4px;\n  font-size: 16px;\n  color: var(--sec-color);\n  transition: all .2s;\n  margin-top: 0.2rem;\n  margin-left: 0;\n}\n\n/* Design if checkbox isn't checked */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n/* Design if checkbox is checked */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n/* Design if checkbox is focused */\n\nc3m-checkbox.custom input[type=\"checkbox\"]:checked:focus + label:before,\nc3m-checkbox.custom input[type=\"checkbox\"]:not(:checked):focus + label:before {\n  border: 1px dotted var(--sec-color);\n}\n\n/* ------------- ON-OFF BUTTON ---------------- */\n\nc3m-checkbox.on-off {position: relative;}\n\nc3m-checkbox.on-off label {\n    display: inline-block;\n    margin-left: 40px;\n    cursor: pointer;\n  }\n\nc3m-checkbox.on-off input {\n    position: relative;\n    left: 15px;\n    opacity: 0;\n  }\n\nc3m-checkbox.on-off label::before {\n    display: block;\n    position: absolute;\n    width: 50px;\n    height: 25px;\n    top: 0.5em;\n    left: 0;\n    content: \"\";\n    background-color: var(--n-medium);\n    border-radius: 1rem;\n  }\n\nc3m-checkbox.on-off label::after {\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    top: 0.635em;\n    left: 27px;\n    content: \"\";\n    background-color: var(--n-medium-a);\n    border-radius: 20px;\n    transition: all 1s;\n  }\n\nc3m-checkbox.on-off input:checked + label::before {\n    background: var(--main-light);\n  }\n\nc3m-checkbox.on-off input:checked + label::after {\n    left: 2px;\n    background: var(--body-bg);\n  }\n\n/* ------------- @MEDIA ---------------- */\n\n@media screen and (min-width: 750px) {\n  c3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label:after,\n  c3m-checkbox.custom input[type=\"checkbox\"]:checked + label:after {\n    top: 0;\n  }\n  c3m-checkbox.custom input[type=\"checkbox\"]:not(:checked) + label:before,\n  c3m-checkbox.custom input[type=\"checkbox\"]:checked + label:before {\n    top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jaGVja2JveC1wYWdlL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztDQUNaOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVELGdDQUFnQzs7QUFDaEMsdUJBQXVCOztBQUN2Qjs7RUFFRSxtQkFBbUI7RUFDbkIsY0FBYztDQUNmOztBQUVELG9CQUFvQjs7QUFDcEI7O0VBRUUsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRCwyQkFBMkI7O0FBQzNCOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZLENBQUMsYUFBYTtFQUMxQixrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7Q0FDM0M7O0FBRUQsNkNBQTZDOztBQUM3Qzs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUV4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0FBQ0Qsc0NBQXNDOztBQUN0QztFQUNFLFdBQVc7RUFDWCw0QkFBb0I7VUFBcEIsb0JBQW9CO0NBQ3JCOztBQUVELG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUNyQjs7QUFFRCxtQ0FBbUM7O0FBQ25DOztFQUVFLG9DQUFvQztDQUNyQzs7QUFHRCxrREFBa0Q7O0FBRWxELHFCQUFxQixtQkFBbUIsQ0FBQzs7QUFDdkM7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtHQUNqQjs7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztHQUNaOztBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxvQkFBb0I7R0FDckI7O0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSw4QkFBOEI7R0FDL0I7O0FBQ0Q7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0dBQzVCOztBQUVILDJDQUEyQzs7QUFFM0M7RUFDRTs7SUFFRSxPQUFPO0dBQ1I7RUFDRDs7SUFFRSxPQUFPO0dBQ1I7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hlY2tib3gtcGFnZS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYzNtLWNoZWNrYm94IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuXG5jM20tY2hlY2tib3gudW5zdHJlc3NlZCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdGFjayk7XG59XG5cbi8qIC0tLS0gQ1VTVE9NIENIRUNLQk9YIC0tLS0tICovXG4vKiBIaWRlIHRoZSBjaGVja2JveCAqL1xuYzNtLWNoZWNrYm94LmN1c3RvbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSxcbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTk5OTlweDtcbn1cblxuLyogbW92ZSB0aGUgbGFiZWwgKi9cbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCxcbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4vKiBEZXNpZ24gYSBuZXcgY2hlY2tib3ggKi9cbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUsXG5jM20tY2hlY2tib3guY3VzdG9tIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMC4yZW07XG4gIHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW4tbWVkaXVtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbi1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjMpXG59XG5cbi8qIERlc2lnbiBhIG5ldyB2YWxpZGF0ZSBpY29uIGZvciBjaGVja2JveCAqL1xuYzNtLWNoZWNrYm94LmN1c3RvbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyLFxuYzNtLWNoZWNrYm94LmN1c3RvbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogJ+KclCc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4yZW07XG4gIGxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLyogRGVzaWduIGlmIGNoZWNrYm94IGlzbid0IGNoZWNrZWQgKi9cbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi8qIERlc2lnbiBpZiBjaGVja2JveCBpcyBjaGVja2VkICovXG5jM20tY2hlY2tib3guY3VzdG9tIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4vKiBEZXNpZ24gaWYgY2hlY2tib3ggaXMgZm9jdXNlZCAqL1xuYzNtLWNoZWNrYm94LmN1c3RvbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcbmMzbS1jaGVja2JveC5jdXN0b20gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCk6Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgdmFyKC0tc2VjLWNvbG9yKTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tIE9OLU9GRiBCVVRUT04gLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jM20tY2hlY2tib3gub24tb2ZmIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxuICBjM20tY2hlY2tib3gub24tb2ZmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgYzNtLWNoZWNrYm94Lm9uLW9mZiBpbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIGMzbS1jaGVja2JveC5vbi1vZmYgbGFiZWw6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB0b3A6IDAuNWVtO1xuICAgIGxlZnQ6IDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgfVxuICBjM20tY2hlY2tib3gub24tb2ZmIGxhYmVsOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB0b3A6IDAuNjM1ZW07XG4gICAgbGVmdDogMjdweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tbWVkaXVtLWEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICB9XG4gIGMzbS1jaGVja2JveC5vbi1vZmYgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tbGlnaHQpO1xuICB9XG4gIGMzbS1jaGVja2JveC5vbi1vZmYgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gICAgbGVmdDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmcpO1xuICB9XG5cbi8qIC0tLS0tLS0tLS0tLS0gQE1FRElBIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgYzNtLWNoZWNrYm94LmN1c3RvbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyLFxuICBjM20tY2hlY2tib3guY3VzdG9tIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgfVxuICBjM20tY2hlY2tib3guY3VzdG9tIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlLFxuICBjM20tY2hlY2tib3guY3VzdG9tIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox/checkbox.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox/checkbox.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"checkbox\"\n  id=\"{{id}}\"\n  [name]=this.name\n  [value]=this.value\n  [checked] = 'checked'\n  [required] = 'required'\n  [disabled] = 'disabled' />\n  <label for=\"{{id}}\">{{ this.title }}</label>\n</p>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox/checkbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox/checkbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        // Inputs
        this.title = '';
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxComponent.prototype, "required", void 0);
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/main/checkbox-page/checkbox/checkbox.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox.component.css */ "./src/app/main/checkbox-page/checkbox/checkbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZHJvcGRvd24tcGFnZS9kcm9wZG93bi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Dropdown</strong> Component</h2>\n  <ul>\n      <li><a scrollTo href=\"dropdown\">Dropdown normal</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"dropdown\">\n      <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          Dropdown\n\n          <a href=\"https://github.com/CreamNG/Components/tree/master/dropdown\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n            <span>Github</span></a>\n      </h3>\n\n      <p>Dropdown with unlimited dropdown Item with true links</p>\n\n      <div class=\"demo\">\n          <c3m-dropdown nameDropdown=\"Dropdown\">\n            <c3m-dropdown-item nameDdItem=\"Item1\" url=\"creamng.github.io\"></c3m-dropdown-item>\n            <c3m-dropdown-item nameDdItem=\"Item2\"></c3m-dropdown-item>\n            <c3m-dropdown-item nameDdItem=\"Item3\"></c3m-dropdown-item>\n          </c3m-dropdown>\n      </div>\n\n      <div class=\"explain\">\n           <dl>\n              <dt>nameDropdown</dt>\n              <dd>On the c3m-dropdown component to rename the dropdown button</dd>\n            </dl>\n            <dl>\n                <dt>nameDdItem</dt>\n                <dd>On the c3m-dropdown-item component to rename the link</dd>\n             </dl>\n             <dl>\n                <dt>url</dt>\n                <dd>On the c3m-dropdown-item component to change the href path of link</dd>\n             </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n            <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-dropdown nameDropdown=&#34;Dropdown&#34;&gt;\n      &lt;c3m-dropdown-item nameDdItem=&#34;Item1&#34; url=&#34;creamng.github.io&#34;&gt;&lt;/c3m-dropdown-item&gt;\n      &lt;c3m-dropdown-item nameDdItem=&#34;Item2&#34;&gt;&lt;/c3m-dropdown-item&gt;\n      &lt;c3m-dropdown-item nameDdItem=&#34;Item3&#34;&gt;&lt;/c3m-dropdown-item&gt;\n&lt;/c3m-dropdown&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n      </c3m-tabs>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.ts ***!
  \***************************************************************/
/*! exports provided: DropdownPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownPageComponent", function() { return DropdownPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var DropdownPageComponent = /** @class */ (function () {
    function DropdownPageComponent(app) {
        this.app = app;
    }
    DropdownPageComponent.prototype.ngOnInit = function () {
        var subComp = ['dropdown-item'];
        this.app.codeSnippets(subComp);
    };
    DropdownPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-dropdown-page',
            template: __webpack_require__(/*! ./dropdown-page.component.html */ "./src/app/main/dropdown-page/dropdown-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dropdown-page.component.css */ "./src/app/main/dropdown-page/dropdown-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], DropdownPageComponent);
    return DropdownPageComponent;
}());



/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZHJvcGRvd24tcGFnZS9kcm9wZG93bi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Item of the Dropdown Content List -->\n<li>\n  <!-- Link -->\n  <a [href]= this.url>\n    {{ this.nameDdItem }}\n  </a>\n</li>\n"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DropdownItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItemComponent", function() { return DropdownItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownItemComponent = /** @class */ (function () {
    function DropdownItemComponent() {
    }
    DropdownItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownItemComponent.prototype, "nameDdItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownItemComponent.prototype, "url", void 0);
    DropdownItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-dropdown-item',
            template: __webpack_require__(/*! ./dropdown-item.component.html */ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dropdown-item.component.css */ "./src/app/main/dropdown-page/dropdown/dropdown-item/dropdown-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownItemComponent);
    return DropdownItemComponent;
}());



/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown */\nc3m-dropdown{\n  position:relative;\n}\n/* Dropdown Content */\nc3m-dropdown ul {\n    display: none;\n    width: 20%;\n    transition: all .25s ease;\n  }\n/* Dropdown Content List Item */\nc3m-dropdown li{\n      background-color: #f3ba65\n    }\n/* Link Of Dropdown Content List Item */\nc3m-dropdown a {\n        color: white;\n        display: block;\n        padding: 0.5rem 1rem;\n        text-align: left;\n        text-decoration: none;\n        transition: all .25s ease;\n      }\n/* Dropdown Button */\nc3m-dropdown > button{\n          padding: 0.5rem 1rem;\n          background-color: #44abbc;\n          color: white;\n          cursor : pointer;\n        }\nc3m-dropdown button:hover{\n            background-color: #58c5d8;\n          }\nc3m-dropdown > button span{\n            display: inline-block;\n          }\nc3m-dropdown > button svg{\n            display: inline-block;\n            height: 24px;\n            width: 24px;\n            fill: white;\n            margin-left: 0.4rem;\n            transition: -webkit-transform 0.5s;\n            transition: transform 0.5s;\n            transition: transform 0.5s, -webkit-transform 0.5s;\n            vertical-align: top;\n            margin-top: -0.1rem;\n          }\n/* Display Dropdown Content List if Button Click */\nc3m-dropdown ul.open {\n    display: block;\n    position: absolute;\n    top: calc(100% + 1.3rem);\n    left: 0;\n    width: 14rem;\n  }\nc3m-dropdown > button.open svg{\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n    }\nc3m-dropdown ul li {\n        width: 100%;\n    }\nc3m-dropdown ul a:hover {\n        background: #e0ac5d;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kcm9wZG93bi1wYWdlL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQsc0JBQXNCO0FBQ3RCO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7R0FDM0I7QUFDQyxnQ0FBZ0M7QUFDaEM7TUFDRSx5QkFBeUI7S0FDMUI7QUFDQyx3Q0FBd0M7QUFDeEM7UUFDRSxhQUFhO1FBQ2IsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtPQUMzQjtBQUNDLHFCQUFxQjtBQUNyQjtVQUNFLHFCQUFxQjtVQUNyQiwwQkFBMEI7VUFDMUIsYUFBYTtVQUNiLGlCQUFpQjtTQUNsQjtBQUNDO1lBQ0UsMEJBQTBCO1dBQzNCO0FBQ0Q7WUFDRSxzQkFBc0I7V0FDdkI7QUFDRDtZQUNFLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsWUFBWTtZQUNaLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtZQUEzQixtREFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtXQUNyQjtBQUVULG1EQUFtRDtBQUNuRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixhQUFhO0dBQ2Q7QUFDQztNQUNFLGtDQUEwQjtjQUExQiwwQkFBMEI7S0FDM0I7QUFDRjtRQUNLLFlBQVk7S0FDZjtBQUNEO1FBQ0ksb0JBQW9CO0tBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kcm9wZG93bi1wYWdlL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEcm9wZG93biAqL1xuYzNtLWRyb3Bkb3due1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLyogRHJvcGRvd24gQ29udGVudCAqL1xuYzNtLWRyb3Bkb3duIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgfVxuICAgIC8qIERyb3Bkb3duIENvbnRlbnQgTGlzdCBJdGVtICovXG4gICAgYzNtLWRyb3Bkb3duIGxpe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzYmE2NVxuICAgIH1cbiAgICAgIC8qIExpbmsgT2YgRHJvcGRvd24gQ29udGVudCBMaXN0IEl0ZW0gKi9cbiAgICAgIGMzbS1kcm9wZG93biBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAgIH1cbiAgICAgICAgLyogRHJvcGRvd24gQnV0dG9uICovXG4gICAgICAgIGMzbS1kcm9wZG93biA+IGJ1dHRvbntcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhYmJjO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgICAgYzNtLWRyb3Bkb3duIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1OGM1ZDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMzbS1kcm9wZG93biA+IGJ1dHRvbiBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjM20tZHJvcGRvd24gPiBidXR0b24gc3Zne1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4xcmVtO1xuICAgICAgICAgIH1cblxuICAvKiBEaXNwbGF5IERyb3Bkb3duIENvbnRlbnQgTGlzdCBpZiBCdXR0b24gQ2xpY2sgKi9cbiAgYzNtLWRyb3Bkb3duIHVsLm9wZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDEuM3JlbSk7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTRyZW07XG4gIH1cbiAgICBjM20tZHJvcGRvd24gPiBidXR0b24ub3BlbiBzdmd7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cbiAgIGMzbS1kcm9wZG93biB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBjM20tZHJvcGRvd24gdWwgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGFjNWQ7XG4gICAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dropdown Button -->\n<button [ngClass]=\"{'open': isOpen}\" (click)=\"toggleOpen()\" class=\"dropdown\">\n  <span> {{ this.nameDropdown }} </span>\n  <svg>\n      <use xlink:href=\"#arrowDownSvg\"></use>\n   </svg>\n</button>\n\n<!-- Dropdown Content List -->\n<ul [ngClass]=\"{'open': isOpen}\">\n    <ng-content></ng-content>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown/dropdown.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown/dropdown.component.ts ***!
  \*******************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        /* INPUTS */
        this.isOpen = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    /* Open / Close the Dropdown */
    DropdownComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownComponent.prototype, "nameDropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "nameSubDropdown", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/main/dropdown-page/dropdown/dropdown.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/main/dropdown-page/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/main/faq/faq.component.css":
/*!********************************************!*\
  !*** ./src/app/main/faq/faq.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmFxL2ZhcS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/faq/faq.component.html":
/*!*********************************************!*\
  !*** ./src/app/main/faq/faq.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COMPONENT PAGE HEADER FOR GETTING STARTED-->\n<div class=\"panelTitle\">\n  <h2>\n    <strong> Frequently Asked Questions (F.A.Q) </strong>\n  </h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#svg\">SVG</a>\n    </li>\n  </ul>\n</div>\n\n<article class=\"post\">\n\n  <!-- ANGULAR 2 INSTALL -->\n  <section>\n    <h3 id=\"svg\">I have a problem with the icons, they do not appear. What should I do?</h3>\n\n    <div class=\"group\">\n      <p>We use the svg &lt;use&gt; tag to display the icons, thanks to an ID that we declare in our index.html.\n        You can find all declared SVG icons <a href=\"https://github.com/CreamNG/Components/_SVG/index.html\">here</a>\n      </p>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/main/faq/faq.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/faq/faq.component.ts ***!
  \*******************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/main/faq/faq.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/main/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmllbGRzZXQtcGFnZS9maWVsZHNldC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Fieldset</strong> Component</h2>\n  <ul>\n      <li><a scrollTo href=\"fieldset\">Normal Fieldset </a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"fieldset\">\n      <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          Fieldset\n\n          <a href=\"https://github.com/CreamNG/Components/tree/master/fieldset\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n            <span>Github</span></a>\n      </h3>\n\n      <div class=\"explain\">\n        <p>Fieldset must be a child of a <code>form</code> element. Use it to group fields of the same nature</p>\n\n        <div class=\"tip\">\n          <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n          <div class=\"content\">\n            <p>The <code>legend</code> element is mandatory for fieldsets.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"demo\">\n          <c3m-fieldset legend=\"fieldset\">\n            This is the content of my Fieldset\n          </c3m-fieldset>\n      </div>\n\n      <div class=\"explain\">\n         <dl>\n            <dt>legend</dt>\n            <dd>legend of the fieldset</dd>\n          </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n            <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;c3m-fieldset legend=&#34;fieldset&#34;&gt;\n    This is the content of my Fieldset\n  &lt;/c3m-fieldset&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n      </c3m-tabs>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.ts ***!
  \***************************************************************/
/*! exports provided: FieldsetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetPageComponent", function() { return FieldsetPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var FieldsetPageComponent = /** @class */ (function () {
    function FieldsetPageComponent(app) {
        this.app = app;
    }
    FieldsetPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    FieldsetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-fieldset-page',
            template: __webpack_require__(/*! ./fieldset-page.component.html */ "./src/app/main/fieldset-page/fieldset-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./fieldset-page.component.css */ "./src/app/main/fieldset-page/fieldset-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], FieldsetPageComponent);
    return FieldsetPageComponent;
}());



/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset/fieldset.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset/fieldset.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fieldset */\nc3m-fieldset fieldset {\n  padding: 1rem;\n  border: 2px solid var(--main-light);\n}\n/* Legend */\nc3m-fieldset fieldset > legend {\n  text-transform: uppercase;\n  letter-spacing: 1.1px;\n  color: var(--main-color);\n  padding: 0 0.5rem;\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9maWVsZHNldC1wYWdlL2ZpZWxkc2V0L2ZpZWxkc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztDQUNyQztBQUVELFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2ZpZWxkc2V0LXBhZ2UvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZpZWxkc2V0ICovXG5jM20tZmllbGRzZXQgZmllbGRzZXQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWxpZ2h0KTtcbn1cblxuLyogTGVnZW5kICovXG5jM20tZmllbGRzZXQgZmllbGRzZXQgPiBsZWdlbmQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset/fieldset.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset/fieldset.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fieldset -->\n<fieldset>\n  <!-- Legend -->\n  <legend> {{this.legend}} </legend>\n  <!-- Content -->\n  <ng-content></ng-content>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset/fieldset.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset/fieldset.component.ts ***!
  \*******************************************************************/
/*! exports provided: FieldsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetComponent", function() { return FieldsetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldsetComponent = /** @class */ (function () {
    function FieldsetComponent() {
    }
    FieldsetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldsetComponent.prototype, "legend", void 0);
    FieldsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-fieldset',
            template: __webpack_require__(/*! ./fieldset.component.html */ "./src/app/main/fieldset-page/fieldset/fieldset.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./fieldset.component.css */ "./src/app/main/fieldset-page/fieldset/fieldset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldsetComponent);
    return FieldsetComponent;
}());



/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COMPONENT PAGE HEADER FOR GETTING STARTED-->\n<div class=\"panelTitle\">\n    <h2><strong> Getting Started </strong></h2>\n    <ul>\n        <li><a scrollTo href=\"#install\">Install Angular</a></li>\n        <li><a scrollTo href=\"#create\">Create Project</a></li>\n        <li><a scrollTo href=\"#start\">Start Project</a></li>\n        <li><a scrollTo href=\"#creamng\">Import CreamNG</a></li>\n    </ul>\n</div>\n\n\n<article class=\"post\">\n\n  <!-- ANGULAR 2 INSTALL -->\n  <section>\n      <h3 id=\"install\">How to install Angular 2</h3>\n\n      <div class=\"group\">\n        <h4>First Step</h4>\n        <p>The first Step is to download <a href=\"https://nodejs.org/en/\">Node.js</a> to use <strong> npm </strong>.</p>\n        <p>Npm is the <strong>package manager</strong> for JavaScript and the world’s largest software registry.</p>\n      </div>\n\n      <div class=\"group\">\n        <h4>Install NPM</h4>\n        <p>If you don't have the latest version of Npm, you can download it with this command line:</p>\n\n        <div class=\"code-ex\">\n          <code>npm install npm@latest -g</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Install Angular</h4>\n        <p>The second step is to download <strong>Angular-Cli </strong> with npm.</p>\n        <p>Angular-Cli is a <strong>command line</strong> interface for Angular. It allows you to use:</p>\n        <div class=\"code-ex\">\n          <code>ng new</code>\n          <code>ng generate</code>\n          <code>ng serve</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Update</h4>\n        <p>To get the latest Andular-Cli version:</p>\n\n        <div class=\"code-ex\">\n          <code>npm install -g angular-cli@latest</code>\n        </div>\n      </div>\n  </section>\n\n  <!-- CREATE A PROJECT -->\n  <section>\n      <h3 id=\"create\">How to create your project</h3>\n\n      <div class=\"group\">\n        <h4>New Project</h4>\n        <p>To create a <strong>new project</strong>, write this command:</p>\n        <div class=\"code-ex\">\n          <code>ng new angular-app-name</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>New Project with SASS</h4>\n        <p>If you want an Angular project that use <strong>SASS</strong>, write this command:</p>\n        <div class=\"code-ex\">\n          <code>ng new angular-app-name --style = scss</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>New Component</h4>\n        <p>To create a component, use:</p>\n        <div class=\"code-ex\">\n          <code>ng generate component my-component-name</code>\n        </div>\n\n        <p>You can use <strong>ng generate</strong> or just <abbr title=\"generate\">ng g</abbr>.</p>\n        <p>The others <strong>ng g</strong> attributes are:</p>\n        <div class=\"code-ex\">\n          <code>ng g component</code>\n          <code>ng g directive</code>\n          <code>ng g pipe</code>\n          <code>ng g service</code>\n          <code>ng g class</code>\n          <code>ng g guard</code>\n          <code>ng g interface</code>\n          <code>ng g enum</code>\n          <code>ng g module</code>\n        </div>\n    </div>\n  </section>\n\n\n  <!-- START ANGULAR 2 PROJECT -->\n  <section>\n    <h3 id=\"start\">How to start your project</h3>\n\n    <div class=\"group\">\n      <h4>Git Import</h4>\n      <p>If you got your project on <a href=\"https://github.com/\">Github</a>, the folder\n        will not contain a <strong>node-modules</strong> folder.</p>\n      <p>To download it, write this command:</p>\n      <div class=\"code-ex\">\n        <code>npm install</code>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <h4>Start Project</h4>\n      <p>To test your project, use:</p>\n      <div class=\"code-ex\">\n        <code>ng serve</code>\n      </div>\n    </div>\n  </section>\n\n\n  <!-- CREAM NG -->\n  <section>\n      <h3 id=\"creamng\">How to import CreamNG into your project</h3>\n\n      <div class=\"group\">\n        <h4>Installation</h4>\n        <p>Install via <a href=\"https://www.npmjs.com/\">npm</a>:</p>\n        <div class=\"code-ex\">\n          <code>npm install creamngnpm</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Import Me!</h4>\n        <p>Then include the <strong>CreamNG</strong> module in your app root module:</p>\n        <div class=\"code-ex\">\n          <code>import &#123; CreamNgModule &#125; from 'creamngnpm'; </code>\n        </div>\n      </div>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.ts ***!
  \*******************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/main/getting-started/getting-started.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/main/getting-started/getting-started.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-error-msg/input-error-msg.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/main/input-page/input-error-msg/input-error-msg.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-input-error-msg p {\n  font-family: var(--stack-b);\n  color: var(--alert-color);\n  margin-bottom: 0.8rem;\n}\nc3m-input-error-msg svg {\n  fill: var(--alert-color);\n  vertical-align: -0.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LWVycm9yLW1zZy9pbnB1dC1lcnJvci1tc2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LWVycm9yLW1zZy9pbnB1dC1lcnJvci1tc2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS1pbnB1dC1lcnJvci1tc2cgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdGFjay1iKTtcbiAgY29sb3I6IHZhcigtLWFsZXJ0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuYzNtLWlucHV0LWVycm9yLW1zZyBzdmcge1xuICBmaWxsOiB2YXIoLS1hbGVydC1jb2xvcik7XG4gIHZlcnRpY2FsLWFsaWduOiAtMC4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/input-page/input-error-msg/input-error-msg.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main/input-page/input-error-msg/input-error-msg.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <span>\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path d=\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\" />\n    </svg>\n    <ng-content></ng-content>\n  </span>\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-error-msg/input-error-msg.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/input-page/input-error-msg/input-error-msg.component.ts ***!
  \******************************************************************************/
/*! exports provided: InputErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorMsgComponent", function() { return InputErrorMsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputErrorMsgComponent = /** @class */ (function () {
    function InputErrorMsgComponent() {
    }
    InputErrorMsgComponent.prototype.ngOnInit = function () {
    };
    InputErrorMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-error-msg',
            template: __webpack_require__(/*! ./input-error-msg.component.html */ "./src/app/main/input-page/input-error-msg/input-error-msg.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-error-msg.component.css */ "./src/app/main/input-page/input-error-msg/input-error-msg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputErrorMsgComponent);
    return InputErrorMsgComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-floating/input-floating.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/input-page/input-floating/input-floating.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Global p */\nc3m-input-floating > p {\n  position: relative;\n  overflow: hidden;\n  width: 40%;\n  font-size: 1rem;\n  min-width: 220px;\n}\n/* Input */\nc3m-input-floating input {\n  width: 100%;\n  border: 2px solid gray;\n  background: none;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  padding: 8px 12px;\n  outline: 0;\n  font-family: quicksandregular;\n  box-sizing: border-box;\n}\n/* If Valid */\nc3m-input-floating input:valid {\n    background: white;\n  }\n/* If Focus */\nc3m-input-floating input:focus {\n    border-color: #f06d06;\n  }\n/* Label If Input Focused */\nc3m-input-floating input:focus + label {\n    background: #f06d06;\n    color: white;\n    font-size: 70%;\n    padding: 1px 6px;\n    z-index: 2;\n    text-transform: uppercase;\n  }\n/* Label */\nc3m-input-floating label {\n  transition:\n    background 0.2s,\n    color 0.2s,\n    top 0.2s,\n    bottom 0.2s,\n    right 0.2s,\n    left 0.2s;\n  position: absolute;\n  color: #999;\n  padding: 7px 6px;\n}\n/* Input with Floating Bottom */\nc3m-input-floating p.bottom > input {\n  padding: 12px 0 12px 0;\n}\n/* Label with Floating Bottom */\nc3m-input-floating p.bottom > label {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n/* Input Focused with Floating Bottom */\nc3m-input-floating p.bottom > input:focus {\n  padding: 4px 6px 20px 6px;\n}\n/* Label with Input Focused FLoating Bottom */\nc3m-input-floating p.bottom > input:focus + label{\n  top: 100%;\n  margin-top: -16px;\n}\n/* **** RIGHT ***** */\nc3m-input-floating p.right label {\n    top: 2px;\n    right: 100%;\n    width: 100%;\n    margin-right: -100%;\n    bottom: 2px;\n  }\nc3m-input-floating p.right input:focus + label {\n    right: 0;\n    margin-right: 0;\n    width: 40%;\n    padding-top: 5px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LWZsb2F0aW5nL2lucHV0LWZsb2F0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNELFdBQVc7QUFDWDtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7Q0FDeEI7QUFDQyxjQUFjO0FBQ2Q7SUFDRSxrQkFBa0I7R0FDbkI7QUFDRCxjQUFjO0FBQ2Q7SUFDRSxzQkFBc0I7R0FDdkI7QUFDRCw0QkFBNEI7QUFDNUI7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDBCQUEwQjtHQUMzQjtBQUVELFdBQVc7QUFDWDtFQUNBOzs7Ozs7Y0FNWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBRUQsZ0NBQWdDO0FBQ2hDO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBQ0QsZ0NBQWdDO0FBQ2hDO0VBQ0UsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtDQUNiO0FBQ0Qsd0NBQXdDO0FBQ3hDO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0QsOENBQThDO0FBQzlDO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtDQUNuQjtBQUdELHNCQUFzQjtBQUN0QjtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0dBQ2I7QUFDRDtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC1mbG9hdGluZy9pbnB1dC1mbG9hdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIHAgKi9cbmMzbS1pbnB1dC1mbG9hdGluZyA+IHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cbi8qIElucHV0ICovXG5jM20taW5wdXQtZmxvYXRpbmcgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBvdXRsaW5lOiAwO1xuICBmb250LWZhbWlseTogcXVpY2tzYW5kcmVndWxhcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiAgLyogSWYgVmFsaWQgKi9cbiAgYzNtLWlucHV0LWZsb2F0aW5nIGlucHV0OnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAvKiBJZiBGb2N1cyAqL1xuICBjM20taW5wdXQtZmxvYXRpbmcgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogI2YwNmQwNjtcbiAgfVxuICAvKiBMYWJlbCBJZiBJbnB1dCBGb2N1c2VkICovXG4gIGMzbS1pbnB1dC1mbG9hdGluZyBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjA2ZDA2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDcwJTtcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC8qIExhYmVsICovXG4gIGMzbS1pbnB1dC1mbG9hdGluZyBsYWJlbCB7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZCAwLjJzLFxuICAgIGNvbG9yIDAuMnMsXG4gICAgdG9wIDAuMnMsXG4gICAgYm90dG9tIDAuMnMsXG4gICAgcmlnaHQgMC4ycyxcbiAgICBsZWZ0IDAuMnM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM5OTk7XG4gIHBhZGRpbmc6IDdweCA2cHg7XG59XG5cbi8qIElucHV0IHdpdGggRmxvYXRpbmcgQm90dG9tICovXG5jM20taW5wdXQtZmxvYXRpbmcgcC5ib3R0b20gPiBpbnB1dCB7XG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDA7XG59XG4vKiBMYWJlbCB3aXRoIEZsb2F0aW5nIEJvdHRvbSAqL1xuYzNtLWlucHV0LWZsb2F0aW5nIHAuYm90dG9tID4gbGFiZWwge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiBJbnB1dCBGb2N1c2VkIHdpdGggRmxvYXRpbmcgQm90dG9tICovXG5jM20taW5wdXQtZmxvYXRpbmcgcC5ib3R0b20gPiBpbnB1dDpmb2N1cyB7XG4gIHBhZGRpbmc6IDRweCA2cHggMjBweCA2cHg7XG59XG4vKiBMYWJlbCB3aXRoIElucHV0IEZvY3VzZWQgRkxvYXRpbmcgQm90dG9tICovXG5jM20taW5wdXQtZmxvYXRpbmcgcC5ib3R0b20gPiBpbnB1dDpmb2N1cyArIGxhYmVse1xuICB0b3A6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuXG5cbi8qICoqKiogUklHSFQgKioqKiogKi9cbmMzbS1pbnB1dC1mbG9hdGluZyBwLnJpZ2h0IGxhYmVsIHtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICAgIGJvdHRvbTogMnB4O1xuICB9XG4gIGMzbS1pbnB1dC1mbG9hdGluZyBwLnJpZ2h0IGlucHV0OmZvY3VzICsgbGFiZWwge1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/input-page/input-floating/input-floating.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/input-page/input-floating/input-floating.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngClass]=\"this.floating\">\n    <input type=\"text\" [id]=this.id [name]=this.name>\n    <label [for]=this.id>{{ this.title }}</label>\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-floating/input-floating.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/input-page/input-floating/input-floating.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputFloatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFloatingComponent", function() { return InputFloatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputFloatingComponent = /** @class */ (function () {
    function InputFloatingComponent() {
        this.floating = 'bottom';
    }
    InputFloatingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFloatingComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFloatingComponent.prototype, "floating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFloatingComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFloatingComponent.prototype, "id", void 0);
    InputFloatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-floating',
            template: __webpack_require__(/*! ./input-floating.component.html */ "./src/app/main/input-page/input-floating/input-floating.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-floating.component.css */ "./src/app/main/input-page/input-floating/input-floating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputFloatingComponent);
    return InputFloatingComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-mail/input-mail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/input-page/input-mail/input-mail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Mail Input */\nc3m-input-mail[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\nc3m-input-mail input {\n  width: 85%;\n  max-width: 22em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LW1haWwvaW5wdXQtbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGlEQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0IsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LW1haWwvaW5wdXQtbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFpbCBJbnB1dCAqL1xuYzNtLWlucHV0LW1haWxbcmVxdWlyZWRdIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL21hbmRhdG9yeS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmMzbS1pbnB1dC1tYWlsIGlucHV0IHtcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiAyMmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/input-page/input-mail/input-mail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/input-page/input-mail/input-mail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"email\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [multiple] = 'multiple'\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-mail/input-mail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/input-page/input-mail/input-mail.component.ts ***!
  \********************************************************************/
/*! exports provided: InputMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMailComponent", function() { return InputMailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputMailComponent = /** @class */ (function () {
    function InputMailComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    InputMailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMailComponent.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMailComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMailComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMailComponent.prototype, "placeholder", void 0);
    InputMailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-mail',
            template: __webpack_require__(/*! ./input-mail.component.html */ "./src/app/main/input-page/input-mail/input-mail.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-mail.component.css */ "./src/app/main/input-page/input-mail/input-mail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputMailComponent);
    return InputMailComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-material/input-material.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/input-page/input-material/input-material.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Global Parent */\nc3m-input-material p.field {\n    display: flex;\n    flex-flow: column-reverse;\n    margin-bottom: 1em;\n    width: 40%;\n    min-width: 220px;\n  }\n/* Animation Label / Input */\nc3m-input-material label,\n  c3m-input-material input {\n    transition: all 0.2s;\n    touch-action: manipulation;\n  }\n/* Input */\nc3m-input-material input {\n    font-size: 1.2em;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    font-family: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    border-radius: 0;\n    padding: 0;\n    cursor: text;\n  }\n/* Input Focused */\nc3m-input-material input:focus {\n    outline: 0;\n    border-bottom: 1px solid #666;\n  }\n/* Label */\nc3m-input-material label {\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n/* Label With Input PlaceHolder Selected */\nc3m-input-material input::-webkit-input-placeholder-shown + label {\n    cursor: text;\n    padding-bottom: 0.4rem;\n    max-width: 66.66%;\n    pointer-events: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: translate(0, 1.825rem) scale(1.3);\n            transform: translate(0, 1.825rem) scale(1.3);\n  }\nc3m-input-material input:-ms-input-placeholder-shown + label {\n    cursor: text;\n    padding-bottom: 0.4rem;\n    max-width: 66.66%;\n    pointer-events: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transform-origin: left bottom;\n    transform: translate(0, 1.825rem) scale(1.3);\n  }\nc3m-input-material input::-ms-input-placeholder-shown + label {\n    cursor: text;\n    padding-bottom: 0.4rem;\n    max-width: 66.66%;\n    pointer-events: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transform-origin: left bottom;\n    transform: translate(0, 1.825rem) scale(1.3);\n  }\nc3m-input-material input::placeholder-shown + label {\n    cursor: text;\n    padding-bottom: 0.4rem;\n    max-width: 66.66%;\n    pointer-events: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: translate(0, 1.825rem) scale(1.3);\n            transform: translate(0, 1.825rem) scale(1.3);\n  }\n/* PlaceHolder Selected */\nc3m-input-material ::-webkit-input-placeholder {\n    opacity: 0;\n    transition: inherit;\n  }\n/* Input with PlaceHolder selected & focused */\nc3m-input-material input:focus::-webkit-input-placeholder{\n    opacity: 1;\n  }\n/* Label with input focus but placeholder not selected */\nc3m-input-material input:not(:placeholder-shown) + label,\n  c3m-input-material input:focus + label {\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    -webkit-transform: translate(0, 0) scale(0.8);\n            transform: translate(0, 0) scale(0.8);\n    padding-bottom: 0;\n    cursor: pointer;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LW1hdGVyaWFsL2lucHV0LW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtHQUNsQjtBQUVELDZCQUE2QjtBQUM3Qjs7SUFFRSxxQkFBcUI7SUFDckIsMkJBQTJCO0dBQzVCO0FBRUQsV0FBVztBQUNYO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0dBQ2Q7QUFFRCxtQkFBbUI7QUFDbkI7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0dBQy9CO0FBRUQsV0FBVztBQUNYO0lBQ0UsMEJBQTBCO0lBQzFCLHVCQUF1QjtHQUN4QjtBQUVELDJDQUEyQztBQUMzQztJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHFEQUE2QztZQUE3Qyw2Q0FBNkM7R0FDOUM7QUFWRDtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkNBQTZDO0dBQzlDO0FBVkQ7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZDQUE2QztHQUM5QztBQVZEO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIscURBQTZDO1lBQTdDLDZDQUE2QztHQUM5QztBQUVELDBCQUEwQjtBQUMxQjtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7QUFFRCwrQ0FBK0M7QUFDL0M7SUFDRSxXQUFXO0dBQ1o7QUFFRCx5REFBeUQ7QUFDekQ7O0lBRUUsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnQkFBZ0I7R0FDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2lucHV0LXBhZ2UvaW5wdXQtbWF0ZXJpYWwvaW5wdXQtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBQYXJlbnQgKi9cbmMzbS1pbnB1dC1tYXRlcmlhbCBwLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWluLXdpZHRoOiAyMjBweDtcbiAgfVxuXG4gIC8qIEFuaW1hdGlvbiBMYWJlbCAvIElucHV0ICovXG4gIGMzbS1pbnB1dC1tYXRlcmlhbCBsYWJlbCxcbiAgYzNtLWlucHV0LW1hdGVyaWFsIGlucHV0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgfVxuXG4gIC8qIElucHV0ICovXG4gIGMzbS1pbnB1dC1tYXRlcmlhbCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICB9XG5cbiAgLyogSW5wdXQgRm9jdXNlZCAqL1xuICBjM20taW5wdXQtbWF0ZXJpYWwgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XG4gIH1cblxuICAvKiBMYWJlbCAqL1xuICBjM20taW5wdXQtbWF0ZXJpYWwgbGFiZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgfVxuXG4gIC8qIExhYmVsIFdpdGggSW5wdXQgUGxhY2VIb2xkZXIgU2VsZWN0ZWQgKi9cbiAgYzNtLWlucHV0LW1hdGVyaWFsIGlucHV0OjpwbGFjZWhvbGRlci1zaG93biArIGxhYmVsIHtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgICBtYXgtd2lkdGg6IDY2LjY2JTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMS44MjVyZW0pIHNjYWxlKDEuMyk7XG4gIH1cblxuICAvKiBQbGFjZUhvbGRlciBTZWxlY3RlZCAqL1xuICBjM20taW5wdXQtbWF0ZXJpYWwgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gIH1cblxuICAvKiBJbnB1dCB3aXRoIFBsYWNlSG9sZGVyIHNlbGVjdGVkICYgZm9jdXNlZCAqL1xuICBjM20taW5wdXQtbWF0ZXJpYWwgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC8qIExhYmVsIHdpdGggaW5wdXQgZm9jdXMgYnV0IHBsYWNlaG9sZGVyIG5vdCBzZWxlY3RlZCAqL1xuICBjM20taW5wdXQtbWF0ZXJpYWwgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCxcbiAgYzNtLWlucHV0LW1hdGVyaWFsIGlucHV0OmZvY3VzICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDAuOCk7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/input-page/input-material/input-material.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/input-page/input-material/input-material.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"field\">\n    <input type=\"text\" [placeholder]=this.placeholder [id]=this.id [name]=this.name />\n    <label [for]=this.id>{{ this.title }}</label>\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-material/input-material.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/input-page/input-material/input-material.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaterialComponent", function() { return InputMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputMaterialComponent = /** @class */ (function () {
    function InputMaterialComponent() {
        this.placeholder = '';
    }
    InputMaterialComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMaterialComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMaterialComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMaterialComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMaterialComponent.prototype, "id", void 0);
    InputMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-material',
            template: __webpack_require__(/*! ./input-material.component.html */ "./src/app/main/input-page/input-material/input-material.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-material.component.css */ "./src/app/main/input-page/input-material/input-material.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputMaterialComponent);
    return InputMaterialComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/input-page/input-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n    <h2><strong>Inputs</strong></h2>\n    <ul>\n      <li><a scrollTo href=\"#input\">Regular Text Input</a></li>\n      <!--li><a scrollTo href=\"#input-floating\">Input Floating Label</a></li>\n      <li><a scrollTo href=\"#input-material\">Input Floating Material</a></li-->\n      <li><a scrollTo href=\"#input-search\">Search Input</a></li>\n      <li><a scrollTo href=\"#input-tel\">Phone Input</a></li>\n      <li><a scrollTo href=\"#input-mail\">E-mail Input</a></li>\n      <li><a scrollTo href=\"#input-url\">URL Input</a></li>\n      <li><a scrollTo href=\"#input-password\">Password Input</a></li>\n      <li><a scrollTo href=\"#input-error-msg\">Contextual Error Message</a></li>\n    </ul>\n</div>\n\n\n  <!-- INPUT REGULAR -->\n  <div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"input\">\n      <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Regular Text Input\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/input\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span></a>\n      </h3>\n\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name1'\"\n          name=\"name1\"\n          placeholder=\"a placeholder\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <div>\n            <dt>id</dt>\n            <dd>input's identifier</dd>\n          </div>\n          <div>\n            <dt>name</dt>\n            <dd>input's general identifier</dd>\n          </div>\n          <div>\n            <dt>value</dt>\n            <dd>input's current value (optional)</dd>\n          </div>\n          <div>\n            <dt>autocomplete</dt>\n            <dd>defaults to \"on\" (optional)</dd>\n          </div>\n          <div>\n            <dt>maxlength</dt>\n            <dd>the maximum allowed value length (optional)</dd>\n          </div>\n          <div>\n            <dt>required</dt>\n            <dd>when present, the element is required (optional)</dd>\n          </div>\n          <div>\n            <dt>disabled</dt>\n            <dd>when present, the element is disabled/read-only (optional)</dd>\n          </div>\n          <div>\n            <dt>placeholder</dt>\n            <dd>Placeholder value (optional)</dd>\n          </div>\n        </dl>\n\n        <div class=\"tip\">\n          <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n          <div class=\"content\">\n            <p>The <code>id</code> attribute of an input is very important for form accessibility. It allows\n            the user-agent to associate a label to its input.</p>\n            <p><code>Placeholders</code> don't replace labels; they should give hints on how to fill the input.</p>\n          </div>\n        </div>\n      </div>\n\n      <h4>Mandatory field</h4>\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name2'\"\n          name=\"name2\"\n          value=\"Peter Parker\"\n          required=\"required\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <h4>Disabled field</h4>\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name3'\"\n          name=\"name3\"\n          value=\"Peter Parker\"\n          disabled=\"disabled\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n             <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name1'&#34;\n    name=&#34;name1&#34;\n    placeholder=&#34;a placeholder&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n\n&lt;!-- MANDATORY INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name2'&#34;\n    name=&#34;name2&#34;\n    required=&#34;required&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n\n&lt;!-- DISABLED INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name3'&#34;\n    name=&#34;name3&#34;\n    value=&#34;Peter Parker&#34;\n    disabled=&#34;disabled&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n      </c3m-tabs>\n    </div>\n  </div>\n\n\n<!-- INPUT FLOATING LABEL\n<div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"input-floating\">\n      <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Input Floating Label\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/input-floating\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span></a>\n      </h3>\n\n      <p>Input with a floating label <code>bottom</code></p>\n\n      <div class=\"demo\">\n        <c3m-input-floating\n          title=\"Enter your name\"\n          floating=\"bottom\"\n          name=\"name1\"\n          id=\"name1\">\n        </c3m-input-floating>\n      </div>\n\n        <p>Input with a floating label <code>right</code></p>\n\n      <div class=\"demo\">\n          <c3m-input-floating\n            title=\"Enter your name\"\n            floating=\"right\"\n            name=\"name2\"\n            id=\"name2\">\n          </c3m-input-floating>\n      </div>\n\n\n      <div class=\"explain\">\n        <dl>\n          <dt>title</dt>\n          <dd>The label tag</dd>\n        </dl>\n        <dl>\n          <dt>placeholder</dt>\n          <dd>Placeholder value 'bottom', 'right' or 'top' </dd>\n        </dl>\n      </div>\n\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n              <pre class=\"prettyprint linenums\">\n&lt;!-- FLOATING BOTTOM INPUT --&gt;\n&lt;c3m-input-floating\ntitle=&#34;Enter your name&#34;\nfloating=&#34;bottom&#34;\nname=&#34;name1&#34;\nid=&#34;name1&#34;&gt;\n&lt;/c3m-input-floating&gt;\n\n&lt;!-- FLOATING RIGHT INPUT --&gt;\n&lt;c3m-input-floating\ntitle=&#34;Enter your name&#34;\nfloating=&#34;right&#34;\nname=&#34;name1&#34;\nid=&#34;name1&#34;&gt;\n&lt;/c3m-input-floating&gt;\n\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n      </c3m-tabs>\n    </div>\n</div> -->\n\n<!-- INPUT MATERIAL FLOATING LABEL\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-material\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Input Material Floating\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-material\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n    <p>Input Material Like (don't forget to add a <code>form</code> tag). </p>\n    <p>It uses the functionality <code>:placeholder-shown</code> that is not handled by all browsers</p>\n\n    <div class=\"demo\">\n      <c3m-input-material\n        title=\"Enter your name\"\n        placeholder=\"placeholder3\"\n        name=\"name3\"\n        id=\"name3\">\n      </c3m-input-material>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>title</dt>\n        <dd>The label tag</dd>\n      </dl>\n      <dl>\n        <dt>placeholder</dt>\n        <dd>Placeholder value (optional)</dd>\n      </dl>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n            <pre class=\"prettyprint linenums\">\n&lt;!-- Input Material --&gt;\n&lt;c3m-input-material\ntitle=&#34; Enter your name &#34;\nplaceholder=&#34;placeholder3&#34;\nname=&#34;name3&#34;\nid=&#34;name3&#34;&gt;\n&lt;/c3m-input-material&gt;\n\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div> -->\n\n<!-- INPUT TYPE SEARCH -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-search\">\n    <h3><svg><use xlink:href=\"#gitListItem\"></use></svg>\n      Search Input\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-tel\" class=\"gitBtn\" target=\"_blank\">\n        <svg><use xlink:href=\"assets/img/icons.svg#gitSvg\"></use></svg> <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- INPUT SEARCH -->\n      <c3m-input-search\n        [id]=\"'main-search'\"\n        name=\"main-search\">\n        Search the site\n      </c3m-input-search>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>search</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT SEARCH --&gt;\n  &lt;c3m-input-search\n    [id]=&#34;'main-search'&#34;\n    name=&#34;main-search&#34;&gt;\n    Search the site\n  &lt;/c3m-input-search&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- INPUT TYPE PHONE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-tel\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Phone Input\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-tel\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- INPUT PHONE -->\n      <c3m-input-tel\n        [id]=\"'phoneTelId'\"\n        name=\"phoneTelName\"\n        placeholder=\"+xx x.xx.xx.xx.xx\">\n        Enter your phone number\n      </c3m-input-tel>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>tel</code> will inherit all attributes from the generic <code>input</code> element.\n        In addition, you may use also:</p>\n      <dl>\n        <div>\n          <dt>pattern</dt>\n          <dd>regular expression against which the control's value is to be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>title</dt>\n          <dd>gives description of the pattern (mandatory if <code>pattern</code> is used)</dd>\n        </div>\n      </dl>\n\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n        <div class=\"content\">\n          <p>If you're using the <code>pattern</code> attribute, you should add a <code>title</code> attribute\n            to give a description of the pattern.</p>\n          <p>For pattern examples, check <a href=\"http://html5pattern.com/\">HTML Pattern</a>.</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;!-- INPUT PHONE --&gt;\n  &lt;c3m-input-tel\n    [id]=&#34;'phoneTelId'&#34;\n    name=&#34;phoneTelName&#34;\n    placeholder=&#34;+xx x.xx.xx.xx.xx&#34;&gt;\n    Enter your phone number\n  &lt;/c3m-input-tel&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- URL -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-url\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      URL Input\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-url\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT URL -->\n        <c3m-input-url\n          id=\"'myUrl'\"\n          name=\"myUrl\"\n          placeholder=\"http://\">\n          URL of your personal site\n        </c3m-input-url>\n      </div>\n    </div>\n    <div class=\"explain\">\n      <p>The input type <code>url</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT URL --&gt;\n  &lt;c3m-input-url\n    id=&#34;'myUrl'&#34;\n    name=&#34;myUrl&#34;\n    placeholder=&#34;http://&#34;&gt;\n    URL of your personal site\n  &lt;/c3m-input-url&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- URL -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-password\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Password Input\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-password\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT PASSWORD -->\n        <c3m-input-password\n          id=\"'myPwd'\"\n          name=\"myPwd\"\n          required=\"required\">\n          Password\n        </c3m-input-password>\n      </div>\n    </div>\n    <div class=\"explain\">\n      <p>The input type <code>password</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-input-password\n  id=&#34;'myPwd'&#34;\n  name=&#34;myPwd&#34;&gt;\n  required=&#34;required&#34;&gt;\n  Password\n&lt;/c3m-input-password&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- INPUT TYPE MAIL -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-mail\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n       E-mail Input\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-mail\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- INPUT MAIL -->\n      <c3m-input-mail\n        [id]=\"'mailId'\"\n        name=\"mailName\"\n        placeholder=\"peter-parker@dailybugle.com\">\n        Enter your e-mail adress\n      </c3m-input-mail>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>email</code> will inherit all attributes from the generic <code>input</code> element.\n        In addition, you may use also:</p>\n      <dl>\n        <div>\n          <dt>multiple</dt>\n          <dd>If present, allows the user to enter more than one value (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;!-- INPUT MAIL --&gt;\n    &lt;c3m-input-mail\n      [id]=&#34;'mailId'&#34;\n      name=&#34;mailName&#34;\n      placeholder=&#34;peter-parker@dailybugle.com&#34;&gt;\n      Enter your e-mail adress\n  &lt;/c3m-input-mail&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- ERRO RMESSAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-error-msg\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Input Error Message\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-error-msg\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n    <div class=\"explain\">\n      <p>Contextual Input Error Message.</p>\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n         <p>Always place error messages before the associated field, so it can be read by screen-readers before\n         the field presenting the error.</p>\n      </div>\n    </div>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT ERROR MESSAGE -->\n        <c3m-input-error-msg>\n          The field is not correct\n        </c3m-input-error-msg>\n\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'nameBeforeError'\"\n          name=\"nameBeforeError\"\n          placeholder=\"oh, my!\">\n          Enter a name\n        </c3m-input>\n      </div>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT ERROR MESSAGE --&gt;\n  &lt;c3m-input-error-msg&gt;\n    The field is not correct\n  &lt;/c3m-input-error-msg&gt;\n\n  &lt;!-- SIMPLE INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'aField'&#34;\n    name=&#34;aField&#34;\n    placeholder=&#34;oh, my!&#34;&gt;\n    Enter a name\n  &lt;/c3m-input&gt;\n\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.ts ***!
  \*********************************************************/
/*! exports provided: InputPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageComponent", function() { return InputPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var InputPageComponent = /** @class */ (function () {
    function InputPageComponent(app) {
        this.app = app;
    }
    InputPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    InputPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-page',
            template: __webpack_require__(/*! ./input-page.component.html */ "./src/app/main/input-page/input-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-page.component.css */ "./src/app/main/input-page/input-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], InputPageComponent);
    return InputPageComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-password/input-password.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/input-page/input-password/input-password.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-input-password[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LXBhc3N3b3JkL2lucHV0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC1wYXNzd29yZC9pbnB1dC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYzNtLWlucHV0LXBhc3N3b3JkW3JlcXVpcmVkXSBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9tYW5kYXRvcnkuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/input-page/input-password/input-password.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/input-page/input-password/input-password.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"password\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [maxlength] = ''\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-password/input-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/input-page/input-password/input-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordComponent", function() { return InputPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputPasswordComponent = /** @class */ (function () {
    function InputPasswordComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    InputPasswordComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputPasswordComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputPasswordComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputPasswordComponent.prototype, "placeholder", void 0);
    InputPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-password',
            template: __webpack_require__(/*! ./input-password.component.html */ "./src/app/main/input-page/input-password/input-password.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-password.component.css */ "./src/app/main/input-page/input-password/input-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputPasswordComponent);
    return InputPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-search/input-search.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/input-page/input-search/input-search.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-input-search button {\n  vertical-align: bottom;\n}\n\nc3m-input-search circle {\n  fill: var(--main-color);\n}\n\nc3m-input-search button:hover circle, c3m-input-search button:focus circle {\n  fill: var(--sec-color);\n}\n\nc3m-input-search[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LXNlYXJjaC9pbnB1dC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGlEQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0IsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LXNlYXJjaC9pbnB1dC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS1pbnB1dC1zZWFyY2ggYnV0dG9uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuYzNtLWlucHV0LXNlYXJjaCBjaXJjbGUge1xuICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuYzNtLWlucHV0LXNlYXJjaCBidXR0b246aG92ZXIgY2lyY2xlLCBjM20taW5wdXQtc2VhcmNoIGJ1dHRvbjpmb2N1cyBjaXJjbGUge1xuICBmaWxsOiB2YXIoLS1zZWMtY29sb3IpO1xufVxuXG5jM20taW5wdXQtc2VhcmNoW3JlcXVpcmVkXSBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9tYW5kYXRvcnkuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/input-page/input-search/input-search.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/input-page/input-search/input-search.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p role=\"search\">\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"search\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [maxlength] = ''\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n    <button type=\"submit\">\n      <svg width=\"35\" height=\"35\" viewBox=\"0 0 35 35\" aria-labelledby=\"searchTitId\">\n        <title id=\"searchTitId\">Perform search</title>\n        <circle cx=\"17.5\" cy=\"17.5\" r=\"17.5\"/>\n        <g>\n          <path d=\"M19.12,19a7,7,0,1,1-.61-10A7.05,7.05,0,0,1,19.12,19ZM9.65,10.59a5.59,5.59,0,1,0,7.89-.49A5.6,5.6,0,0,0,9.65,10.59Z\" style=\"fill: #fff\"/>\n          <rect x=\"18.15\" y=\"18.98\" width=\"3.64\" height=\"1.46\" rx=\"0.73\" ry=\"0.73\" transform=\"translate(-8.02 21.63) rotate(-48.54)\" style=\"fill: #fff\"/>\n          <rect x=\"23.01\" y=\"18.96\" width=\"2.19\" height=\"8.78\" rx=\"1\" ry=\"1\" transform=\"translate(-9.36 25.96) rotate(-48.54)\" style=\"fill: #fff\"/>\n        </g>\n      </svg>\n    </button>\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-search/input-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/input-page/input-search/input-search.component.ts ***!
  \************************************************************************/
/*! exports provided: InputSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchComponent", function() { return InputSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputSearchComponent = /** @class */ (function () {
    function InputSearchComponent() {
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    InputSearchComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputSearchComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputSearchComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputSearchComponent.prototype, "placeholder", void 0);
    InputSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-search',
            template: __webpack_require__(/*! ./input-search.component.html */ "./src/app/main/input-page/input-search/input-search.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-search.component.css */ "./src/app/main/input-page/input-search/input-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputSearchComponent);
    return InputSearchComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-tel/input-tel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/input-page/input-tel/input-tel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Input Phone */\nc3m-input-tel input {\n  width: 85%;\n  max-width: 22em;\n}\nc3m-input-tel[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LXRlbC9pbnB1dC10ZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC10ZWwvaW5wdXQtdGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbnB1dCBQaG9uZSAqL1xuYzNtLWlucHV0LXRlbCBpbnB1dCB7XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogMjJlbTtcbn1cbmMzbS1pbnB1dC10ZWxbcmVxdWlyZWRdIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL21hbmRhdG9yeS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/input-page/input-tel/input-tel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/input-page/input-tel/input-tel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"tel\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [maxlength] = ''\n    [pattern] = ''\n    [title] = ''\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-tel/input-tel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/input-page/input-tel/input-tel.component.ts ***!
  \******************************************************************/
/*! exports provided: InputTelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTelComponent", function() { return InputTelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputTelComponent = /** @class */ (function () {
    function InputTelComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.pattern = '';
        this.title = '';
        this.placeholder = '';
    }
    InputTelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "pattern", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputTelComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputTelComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputTelComponent.prototype, "placeholder", void 0);
    InputTelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-tel',
            template: __webpack_require__(/*! ./input-tel.component.html */ "./src/app/main/input-page/input-tel/input-tel.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-tel.component.css */ "./src/app/main/input-page/input-tel/input-tel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputTelComponent);
    return InputTelComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-url/input-url.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/input-page/input-url/input-url.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Input URL */\nc3m-input-url input {\n  width: 85%;\n  max-width: 22em;\n}\nc3m-input-url[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0LXVybC9pbnB1dC11cmwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC11cmwvaW5wdXQtdXJsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbnB1dCBVUkwgKi9cbmMzbS1pbnB1dC11cmwgaW5wdXQge1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDIyZW07XG59XG5jM20taW5wdXQtdXJsW3JlcXVpcmVkXSBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9tYW5kYXRvcnkuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/input-page/input-url/input-url.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/input-page/input-url/input-url.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"url\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [maxlength] = ''\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-url/input-url.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/input-page/input-url/input-url.component.ts ***!
  \******************************************************************/
/*! exports provided: InputUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUrlComponent", function() { return InputUrlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputUrlComponent = /** @class */ (function () {
    function InputUrlComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    InputUrlComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputUrlComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputUrlComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputUrlComponent.prototype, "placeholder", void 0);
    InputUrlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input-url',
            template: __webpack_require__(/*! ./input-url.component.html */ "./src/app/main/input-page/input-url/input-url.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-url.component.css */ "./src/app/main/input-page/input-url/input-url.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputUrlComponent);
    return InputUrlComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input/input.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/input-page/input/input.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-input[required] label {\n  background-image: url(/assets/img/mandatory.svg);\n  background-repeat: no-repeat;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbnB1dC1wYWdlL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYzNtLWlucHV0W3JlcXVpcmVkXSBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9tYW5kYXRvcnkuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/input-page/input/input.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/input-page/input/input.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <input type=\"text\"\n    id = \"{{id}}\"\n    [name] = this.name\n    [value] = value\n    [autocomplete] = autocomplete\n    [maxlength] = ''\n    [required] = 'required'\n    [disabled] = 'disabled'\n    [placeholder] = placeholder />\n</p>\n"

/***/ }),

/***/ "./src/app/main/input-page/input/input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/input-page/input/input.component.ts ***!
  \**********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    InputComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "placeholder", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/main/input-page/input/input.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/main/input-page/input/input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list-description/list-description.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/list-page/list-description/list-description.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-list-description dl{\n  margin: 1rem 0;\n}\nc3m-list-description dt{\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tbGlzdC1kZXNjcmlwdGlvbiBkbHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5jM20tbGlzdC1kZXNjcmlwdGlvbiBkdHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/list-page/list-description/list-description.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/list-page/list-description/list-description.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dl *ngFor=\"let item of listItem\" >\n    <dt>{{item.title}}</dt>\n    <dd>{{item.content}}</dd>\n</dl>\n\n"

/***/ }),

/***/ "./src/app/main/list-page/list-description/list-description.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/list-page/list-description/list-description.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDescriptionComponent", function() { return ListDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListDescriptionComponent = /** @class */ (function () {
    // Constructor
    function ListDescriptionComponent(http) {
        this.http = http;
    }
    // On Init
    ListDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListDescriptionComponent.prototype, "title", void 0);
    ListDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-list-description',
            template: __webpack_require__(/*! ./list-description.component.html */ "./src/app/main/list-page/list-description/list-description.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list-description.component.css */ "./src/app/main/list-page/list-description/list-description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ListDescriptionComponent);
    return ListDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list-order/list-order.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/list-page/list-order/list-order.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-list-order ol{\n  list-style-type: decimal;\n  margin-left: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tbGlzdC1vcmRlciBvbHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/list-page/list-order/list-order.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/list-page/list-order/list-order.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n    <li *ngFor=\"let item of listItem\"> {{ item.value }} </li>\n</ol>\n"

/***/ }),

/***/ "./src/app/main/list-page/list-order/list-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/list-page/list-order/list-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListOrderComponent = /** @class */ (function () {
    // Constructor
    function ListOrderComponent(http) {
        this.http = http;
    }
    // On Init
    ListOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListOrderComponent.prototype, "title", void 0);
    ListOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-list-order',
            template: __webpack_require__(/*! ./list-order.component.html */ "./src/app/main/list-page/list-order/list-order.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list-order.component.css */ "./src/app/main/list-page/list-order/list-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ListOrderComponent);
    return ListOrderComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbGlzdC1wYWdlL2xpc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/list-page/list-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panelTitle\">\n  <h2>\n    <strong>List</strong> Component</h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#list\">Regular List</a>\n    </li>\n    <li>\n      <a scrollTo href=\"#list-order\">Ordered List</a>\n    </li>\n    <li>\n      <a scrollTo href=\"#list-thumbnails\">List with thumbnails</a>\n    </li>\n    <li>\n        <a scrollTo href=\"#list-description\">Description list</a>\n      </li>\n  </ul>\n</div>\n\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"list\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Regular List\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/list\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n    <p>Regular List (JSON)</p>\n\n    <div class=\"demo\">\n      <!-- SIMPLE LIST -->\n      <c3m-list>\n      </c3m-list>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>dataList</dt>\n        <dd>The data in the list comes from a JSON file</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- SIMPLE LIST --&gt;\n  &lt;c3m-list&gt;\n  &lt;/c3m-list&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"JSON\">\n          <p class=\"pre-code\"> dataList.json</p>\n          <div class=\"code\">\n            <!--?prettify lang=js linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n[\n  &#123;\n      &#34;value&#34;: &#34;List Item 1&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 2&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 3&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 4&#34;,\n  &#125;\n]\n              </pre>\n          </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"list-order\">\n      <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Regular List\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/list-order\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span>\n        </a>\n      </h3>\n      <p>Ordered List (JSON)</p>\n\n      <div class=\"demo\">\n        <!-- SIMPLE LIST -->\n        <c3m-list-order>\n        </c3m-list-order>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <dt>dataList</dt>\n          <dd>The data in the list comes from a JSON file</dd>\n        </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n            <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n    &lt;!-- SIMPLE LIST --&gt;\n    &lt;c3m-list-order&gt;\n    &lt;/c3m-list-order&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"JSON\">\n            <p class=\"pre-code\"> dataList.json</p>\n            <div class=\"code\">\n              <!--?prettify lang=js linenums=true?-->\n                <pre class=\"prettyprint linenums\">\n[\n    &#123;\n        &#34;value&#34;: &#34;List Item 1&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 2&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 3&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 4&#34;,\n    &#125;\n]\n                </pre>\n            </div>\n        </c3m-tab>\n      </c3m-tabs>\n    </div>\n  </div>\n\n\n\n  <div class=\"titleComponent\">\n      <div class=\"descriptionComponent\" id=\"list-thumbnails\">\n        <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          List with thumbnails\n\n          <a href=\"https://github.com/CreamNG/Components/tree/master/list-thumbnails\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n\n            <span>Github</span>\n          </a>\n        </h3>\n        <p>List with thumbnails (JSON)</p>\n\n        <div class=\"demo\">\n          <!-- SIMPLE LIST -->\n          <c3m-list-thumbnails>\n          </c3m-list-thumbnails>\n        </div>\n\n        <div class=\"explain\">\n          <dl>\n            <dt>dataList</dt>\n            <dd>The data in the list comes from a JSON file</dd>\n          </dl>\n          <dl>\n              <dt>placeholder.com</dt>\n              <dd>Fake image with a specific size</dd>\n            </dl>\n\n        </div>\n\n        <!-- TABS SNIPPETS -->\n        <c3m-tabs class=\"snippets\">\n          <c3m-tab tabTitle=\"HTML\">\n            <p class=\"pre-code\">To call the component</p>\n            <div class=\"code\">\n              <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n      &lt;!-- SIMPLE LIST --&gt;\n      &lt;c3m-list-thumbnails&gt;\n      &lt;/c3m-list-thumbnails&gt;\n                </pre>\n            </div>\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"CSS\">\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"TypeScript\">\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"JSON\">\n              <p class=\"pre-code\"> dataList.json</p>\n              <div class=\"code\">\n                <!--?prettify lang=js linenums=true?-->\n                  <pre class=\"prettyprint linenums\">\n  [\n      &#123;\n          &#34;value&#34;: &#34;List Item 1&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 2&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 3&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 4&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;\n  ]\n                  </pre>\n              </div>\n          </c3m-tab>\n        </c3m-tabs>\n      </div>\n    </div>\n\n\n  <div class=\"titleComponent\">\n      <div class=\"descriptionComponent\" id=\"list-description\">\n        <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          Description List\n\n          <a href=\"https://github.com/CreamNG/Components/tree/master/list-description\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n\n            <span>Github</span>\n          </a>\n        </h3>\n        <p>Description List (JSON)</p>\n\n        <div class=\"demo\">\n          <!-- SIMPLE LIST -->\n          <c3m-list-description>\n          </c3m-list-description>\n        </div>\n\n        <div class=\"explain\">\n          <dl>\n            <dt>dataList</dt>\n            <dd>The data in the list comes from a JSON file</dd>\n          </dl>\n        </div>\n\n        <!-- TABS SNIPPETS -->\n        <c3m-tabs class=\"snippets\">\n          <c3m-tab tabTitle=\"HTML\">\n            <p class=\"pre-code\">To call the component</p>\n            <div class=\"code\">\n              <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n      &lt;!-- SIMPLE LIST --&gt;\n      &lt;c3m-list-description&gt;\n      &lt;/c3m-list-description&gt;\n                </pre>\n            </div>\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"CSS\">\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"TypeScript\">\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"JSON\">\n              <p class=\"pre-code\"> dataList.json</p>\n              <div class=\"code\">\n                <!--?prettify lang=js linenums=true?-->\n                  <pre class=\"prettyprint linenums\">\n  [\n      &#123;\n          &#34;title&#34;: &#34;List Title 1&#34;,\n          &#34;content&#34;: &#34;List Content 1&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 2&#34;,\n          &#34;content&#34;: &#34;List Content 2&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 3&#34;,\n          &#34;content&#34;: &#34;List Content 3&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 4&#34;,\n          &#34;content&#34;: &#34;List Content 4&#34;\n      &#125;\n  ]\n                  </pre>\n              </div>\n          </c3m-tab>\n\n        </c3m-tabs>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/main/list-page/list-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.ts ***!
  \*******************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(app) {
        this.app = app;
    }
    ListPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    ListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/main/list-page/list-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list-page.component.css */ "./src/app/main/list-page/list-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/main/list-page/list-thumbnails/list-thumbnails.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nc3m-list-thumbnails li{\n  display: block;\n  margin: 1rem 0;\n  padding: 0 0 1rem 0;\n  border-bottom: 1px solid lightgray;\n  width: 50%;\n}\nc3m-list-thumbnails img{\n    display: inline-block;\n}\nc3m-list-thumbnails span{\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC10aHVtYm5haWxzL2xpc3QtdGh1bWJuYWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxXQUFXO0NBQ1o7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xpc3QtcGFnZS9saXN0LXRodW1ibmFpbHMvbGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmMzbS1saXN0LXRodW1ibmFpbHMgbGl7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMCAwIDFyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDUwJTtcbn1cbmMzbS1saXN0LXRodW1ibmFpbHMgaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYzNtLWxpc3QtdGh1bWJuYWlscyBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/list-page/list-thumbnails/list-thumbnails.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let item of listItem\">\n      <img src={{item.url}} alt=\"fake image\">\n      <span>{{ item.value }}</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/list-page/list-thumbnails/list-thumbnails.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbnailsComponent", function() { return ListThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListThumbnailsComponent = /** @class */ (function () {
    // Constructor
    function ListThumbnailsComponent(http) {
        this.http = http;
    }
    // On Init
    ListThumbnailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListThumbnailsComponent.prototype, "title", void 0);
    ListThumbnailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-list-thumbnails',
            template: __webpack_require__(/*! ./list-thumbnails.component.html */ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list-thumbnails.component.css */ "./src/app/main/list-page/list-thumbnails/list-thumbnails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ListThumbnailsComponent);
    return ListThumbnailsComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list/list.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/list-page/list/list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-list ul{\n  list-style-type: disc;\n  margin-left: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9saXN0LXBhZ2UvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tbGlzdCB1bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/list-page/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/list-page/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of listItem\"> {{ item.value }} </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/main/list-page/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/list-page/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListComponent = /** @class */ (function () {
    // Constructor
    function ListComponent(http) {
        this.http = http;
    }
    // On Init
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "title", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/main/list-page/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/main/list-page/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\n <!-- MAIN CONTENT -->\n  <div class=\"contentMain\">\n    <ng-content></ng-content>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/modal-page/modal-alert/modal-alert.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/modal-page/modal-alert/modal-alert.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kYWwtcGFnZS9tb2RhbC1hbGVydC9tb2RhbC1hbGVydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/modal-page/modal-alert/modal-alert.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/modal-page/modal-alert/modal-alert.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  modal-alert works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/modal-page/modal-alert/modal-alert.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/modal-page/modal-alert/modal-alert.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModalAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAlertComponent", function() { return ModalAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalAlertComponent = /** @class */ (function () {
    function ModalAlertComponent() {
    }
    ModalAlertComponent.prototype.ngOnInit = function () {
    };
    ModalAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-modal-alert',
            template: __webpack_require__(/*! ./modal-alert.component.html */ "./src/app/main/modal-page/modal-alert/modal-alert.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./modal-alert.component.css */ "./src/app/main/modal-page/modal-alert/modal-alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalAlertComponent);
    return ModalAlertComponent;
}());



/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kYWwtcGFnZS9tb2RhbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n    <h2><strong>Modal</strong> Component</h2>\n    <ul>\n        <li><a scrollTo href=\"modal\">Dialog Modal</a></li>\n    </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"modal\">\n        <h3>\n            <svg>\n              <use xlink:href=\"#gitListItem\"></use>\n            </svg>\n            Dialog Modal\n\n            <a href=\"https://github.com/CreamNG/Components/tree/master/modal\" class=\"gitBtn\" target=\"_blank\">\n              <svg>\n                <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n              </svg>\n              <span>Github</span></a>\n        </h3>\n\n        <div class=\"explain\">\n          <p>Opens a dialog modal with focus set on the modal title. Focus loops inside the modal.</p>\n        </div>\n\n\n        <div class=\"demo\">\n          <!-- MODAL DEMO -->\n          <c3m-button ngClass=\"info\" (click)=\"OpenModal()\">Open Modal</c3m-button>\n          <c3m-modal></c3m-modal>\n        </div>\n\n        <div class=\"explain\">\n          <dl>\n            <dt>click</dt>\n            <dd>event that opens the modal</dd>\n          </dl>\n        </div>\n\n        <!-- TABS SNIPPETS -->\n        <c3m-tabs class=\"snippets\">\n          <c3m-tab tabTitle=\"HTML\">\n              <p class=\"pre-code\">To call the component</p>\n              <div class=\"code\">\n                    <!--?prettify lang=html linenums=true?-->\n                    <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-button (click)=&#x22;OpenModal()&#x22;&#x3E;Open Modal&#x3C;/c3m-button&#x3E;\n  &#x3C;c3m-modal&#x3E;&#x3C;/c3m-modal&#x3E;\n                    </pre>\n              </div>\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"CSS\">\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"TypeScript\">\n          </c3m-tab>\n        </c3m-tabs>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageComponent", function() { return ModalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/main/modal-page/modal/modal.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");




var ModalPageComponent = /** @class */ (function () {
    function ModalPageComponent(app) {
        this.app = app;
    }
    ModalPageComponent.prototype.OpenModal = function () {
        this.modal.ToggleOpen();
    };
    ModalPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"])
    ], ModalPageComponent.prototype, "modal", void 0);
    ModalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-modal-page',
            template: __webpack_require__(/*! ./modal-page.component.html */ "./src/app/main/modal-page/modal-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./modal-page.component.css */ "./src/app/main/modal-page/modal-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], ModalPageComponent);
    return ModalPageComponent;
}());



/***/ }),

/***/ "./src/app/main/modal-page/modal/modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/modal-page/modal/modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog[aria-hidden=\"true\"] {\n    display: none;\n}\n    .dialog-overlay {\n        z-index: 10;\n        background-color: rgba(16, 15, 15, 0.84);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n    .dialog-content {\n            background-color: rgb(255, 255, 255);\n            z-index: 15;\n            position: fixed;\n            top: 40%;\n            left: 25%;\n            padding: 2em;\n            width: 50%;\n            border-radius: 2px;\n        }\n    .dialog[aria-hidden=\"false\"] .dialog-content{\n        -webkit-animation-duration:1s;\n                animation-duration:1s;\n         -webkit-animation-name: test;\n                 animation-name: test;\n     }\n    @-webkit-keyframes test {\n                from {\n                    opacity: 0;\n                    top:0%;\n                }\n                to {\n                    opacity: 1;\n                    top:40%;\n                }\n            }\n    @keyframes test {\n                from {\n                    opacity: 0;\n                    top:0%;\n                }\n                to {\n                    opacity: 1;\n                    top:40%;\n                }\n            }\n    .dialog h1 {\n    margin-bottom: 1.5rem;\n    font-size: 2rem;\n}\n    .dialog p{\n        font-size: 1.2rem;\n        margin-bottom:1.5rem;\n    }\n    .dialog-close {\n        position: absolute;\n        top: 0.5em;\n        right: 0.5em;\n        border: 0;\n        padding: 0;\n        background-color: transparent;\n        font-weight: bold;\n        font-size: 1.25em;\n        width: 1.2em;\n        height: 1.2em;\n        text-align: center;\n        cursor: pointer;\n        transition: 0.15s;\n    }\n    .dialog input{\n            border-radius: 2px;\n            border: 1px solid gray;\n            height: 1.4rem;\n            width: 90%;\n            min-width: 10em;\n        }\n    .dialog label{\n                font-family:\"quicksanditalic\";\n                margin-right:1rem;\n            }\n    @media screen and (min-width: 700px) {\n    .dialog-close {\n        top: 1em;\n        right: 1em;\n    }\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb2RhbC1wYWdlL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCO0lBQ0c7UUFDSSxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFVBQVU7UUFDVixTQUFTO0tBQ1o7SUFFQTtZQUNPLHFDQUFxQztZQUNyQyxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFNBQVM7WUFDVCxVQUFVO1lBQ1YsYUFBYTtZQUNiLFdBQVc7WUFDWCxtQkFBbUI7U0FDdEI7SUFDSjtRQUNHLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1NBQ3JCLDZCQUFxQjtpQkFBckIscUJBQXFCO01BQ3hCO0lBQ007Z0JBQ0k7b0JBQ0ksV0FBVztvQkFDWCxPQUFPO2lCQUNWO2dCQUNEO29CQUNJLFdBQVc7b0JBQ1gsUUFBUTtpQkFDWDthQUNKO0lBVEQ7Z0JBQ0k7b0JBQ0ksV0FBVztvQkFDWCxPQUFPO2lCQUNWO2dCQUNEO29CQUNJLFdBQVc7b0JBQ1gsUUFBUTtpQkFDWDthQUNKO0lBRWI7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0NBQ25CO0lBQ0c7UUFDSSxrQkFBa0I7UUFDbEIscUJBQXFCO0tBQ3hCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGFBQWE7UUFDYixVQUFVO1FBQ1YsV0FBVztRQUNYLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7S0FDckI7SUFDRztZQUNJLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLFdBQVc7WUFDWCxnQkFBZ0I7U0FDbkI7SUFDRztnQkFDSSw4QkFBOEI7Z0JBQzlCLGtCQUFrQjthQUNyQjtJQUViO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsV0FBVztLQUNkOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2RhbC1wYWdlL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgICAuZGlhbG9nLW92ZXJsYXkge1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTUsIDE1LCAwLjg0KTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgIC5kaWFsb2ctY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgICB6LWluZGV4OiAxNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuICAgICAuZGlhbG9nW2FyaWEtaGlkZGVuPVwiZmFsc2VcIl0gLmRpYWxvZy1jb250ZW50e1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgICAgICBhbmltYXRpb24tbmFtZTogdGVzdDtcbiAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyB0ZXN0IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOjAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIHRvcDo0MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4uZGlhbG9nIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuICAgIC5kaWFsb2cgcHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206MS41cmVtO1xuICAgIH1cbiAgICAuZGlhbG9nLWNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuNWVtO1xuICAgICAgICByaWdodDogMC41ZW07XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgd2lkdGg6IDEuMmVtO1xuICAgICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgfVxuICAgICAgICAuZGlhbG9nIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgIGhlaWdodDogMS40cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgfVxuICAgICAgICAgICAgLmRpYWxvZyBsYWJlbHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcInF1aWNrc2FuZGl0YWxpY1wiO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICAgICAgICAgICAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5kaWFsb2ctY2xvc2Uge1xuICAgICAgICB0b3A6IDFlbTtcbiAgICAgICAgcmlnaHQ6IDFlbTtcbiAgICB9XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/main/modal-page/modal/modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/modal-page/modal/modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\" [attr.aria-hidden]=\"!isOpen\">\n  <div class=\"dialog-overlay\" (click)=\"ToggleOpen()\" tabindex=\"-1\"></div>\n    <div class=\"dialog-content\" [attr.aria-labeledby]=\"dialogTitle\" [attr.aria-describedby]=\"dialogDescription\" role=\"dialog\">\n\n      <h1 #focusable  id=\"{{dialogTitle}}\" tabindex=\"0\"> Modal Title </h1>\n      <p id=\"{{dialogDescription}}\">Modal content text</p>\n\n      <button (click)=\"ToggleOpen()\" (keydown.tab)=\"focusable.focus()\" class=\"dialog-close\" [attr.aria-label]=\"btnCloseLabel\">&times;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/modal-page/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/modal-page/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.dialogTitle = 'dialogTitle';
        this.dialogDescription = 'dialogDescription';
        this.btnCloseLabel = 'Fermer la fenêtre de dialogue';
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.isOpen = false;
    };
    /* Open Modal */
    ModalComponent.prototype.ToggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    };
    ModalComponent.prototype.OnKey = function (event) {
        console.log(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ModalComponent.prototype, "isOpen", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/main/modal-page/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/main/modal-page/modal/modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/main/navbar-page/navbar-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/navbar-page/navbar-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbmF2YmFyLXBhZ2UvbmF2YmFyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/navbar-page/navbar-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/navbar-page/navbar-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/navbar-page/navbar-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/navbar-page/navbar-page.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarPageComponent", function() { return NavbarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarPageComponent = /** @class */ (function () {
    function NavbarPageComponent() {
    }
    NavbarPageComponent.prototype.ngOnInit = function () {
    };
    NavbarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-navbar-page',
            template: __webpack_require__(/*! ./navbar-page.component.html */ "./src/app/main/navbar-page/navbar-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./navbar-page.component.css */ "./src/app/main/navbar-page/navbar-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarPageComponent);
    return NavbarPageComponent;
}());



/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFnaW5hdGlvbi1wYWdlL3BhZ2luYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE PAGINATION COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Pagination</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"pagination\">Pagination</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION PAGINATION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"pagination\">\n\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Pagination\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/pagination\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n        <span>Github</span></a>\n  </h3>\n\n\n  <p>A simple page pagination.</p>\n\n    <div class=\"demo\">\n      <!-- Pagination Demo -->\n      <c3m-pagination></c3m-pagination>\n    </div>\n    <div class=\"explain\">\n        <dl>\n          <dt>pageSize</dt>\n          <dd>allows you to change the value of items per page\n            (You will need to download <em><a href=\"https://github.com/CreamNG/Components/blob/master/pagination/pager.service.ts\" target=\"_blank\">pager.service.ts</a></em> service)</dd>\n        </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-pagination&#x3E;&#x3C;/c3m-pagination&#x3E;\n                    </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPageComponent", function() { return PaginationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var PaginationPageComponent = /** @class */ (function () {
    function PaginationPageComponent(app) {
        this.app = app;
    }
    PaginationPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    PaginationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-pagination-page',
            template: __webpack_require__(/*! ./pagination-page.component.html */ "./src/app/main/pagination-page/pagination-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pagination-page.component.css */ "./src/app/main/pagination-page/pagination-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], PaginationPageComponent);
    return PaginationPageComponent;
}());



/***/ }),

/***/ "./src/app/main/pagination-page/pagination/pager.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination/pager.service.ts ***!
  \******************************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    // Function getPager (totalItems,  CurrentPage  , PageSize)
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // Calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // StartPage and EndPage declaration
        var startPage, endPage;
        // Check TotalPages <= 10
        if (totalPages <= 10) {
            startPage = 1; // If Less Than 10 total pages
            endPage = totalPages; // Show All Pages
        }
        else {
            // Check Total Pages > 10
            if (currentPage <= 6) {
                startPage = 1; // StartPage = 1
                endPage = 10; // EndPage = 10
            }
            else if (currentPage + 4 >= totalPages) {
                // Check CurrentPage + 4 >= TotalPages  (Exit TotalPages.length)
                startPage = totalPages - 9; // StartPage = TotalPage - 9
                endPage = totalPages; // EndPage = total pages
            }
            else {
                // Check CurrentPage > 6 && CurrentPage + 4 < total pages
                startPage = currentPage - 5; // StartPage = CurrentPage - 5
                endPage = currentPage + 4; // EndPage = CurrentPage +4
            }
        }
        // StartIndex = currentPage-1 * pageSize
        var startIndex = (currentPage - 1) * pageSize;
        // EndIndex = min between [startIndex + pageSize-1] AND [totalItems-1]
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [];
        // Create an array of pages to ng-repeat in the pager control
        for (var i = startPage; i < endPage + 1; i++) {
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
    };
    PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/main/pagination-page/pagination/pagination.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination/pagination.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Pagination Container */\nc3m-pagination .paginationContainer{\n    padding:0.5rem;\n}\n/* Pagination Items List */\nc3m-pagination .paginationItems{\n        display:flex;\n        text-align: center;\n        flex-wrap: wrap;\n    }\n/* Pagination Items */\nc3m-pagination .paginationItems li{\n          color: #fff;\n          height: 5rem;\n          font: 1rem quicksandbold, Helvetica, Arial, sans-serif;\n          width: 5rem;\n          background-color: #45abbc;\n          margin: 0.5rem;\n          padding: 0.5rem;\n        }\n/* Buttons List for Pagination */\nc3m-pagination .pagination{\n              margin-top: 2rem;\n              text-align: left;\n          }\n/* Buttons for Pagination */\nc3m-pagination .pagination li {\n               background-color: #ed9c21;\n               width: 1.7rem;\n               display: inline-block;\n               height: 1.7rem;\n               margin-right: 0.3rem;\n               margin-bottom: 0.6rem;\n           }\nc3m-pagination .pagination li:not(.btnPages){\n             background-color:#6cbe45;\n           }\n/* Item List Active */\nc3m-pagination .pagination li.active{\n               background-color: #ea920b;\n           }\n/* Pagination List Item Button */\nc3m-pagination .pagination button{\n               background-color: transparent;\n               height: 100%;\n               width: 100%;\n               color:white;\n               cursor:pointer;\n           }\n/* Pagination List Item Button IMG */\nc3m-pagination .pagination button img{\n                width: 80%;\n                height: 80%;\n                margin: 0 auto;\n                display: block;\n            }\nc3m-pagination .pagination li:hover{\n                    opacity: 0.8;\n                }\nc3m-pagination .pagination li.disabled {\n                     background-color: #b7bdb4;\n                 }\nc3m-pagination .pagination li.disabled button {\n                       pointer-events: none;\n                    }\nc3m-pagination .pagination li.disabled:hover {\n                          opacity: 1;\n                      }\n@media screen and (min-width: 1000px){\n                c3m-pagination .pagination li {\n                    width: 2.4rem;\n                    height: 2.4rem;\n                }\n            }\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wYWdpbmF0aW9uLXBhZ2UvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCO0lBQ0ksZUFBZTtDQUNsQjtBQUNHLDJCQUEyQjtBQUMzQjtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0JBQWdCO0tBQ25CO0FBQ0csc0JBQXNCO0FBQ3RCO1VBQ0UsWUFBWTtVQUNaLGFBQWE7VUFDYix1REFBdUQ7VUFDdkQsWUFBWTtVQUNaLDBCQUEwQjtVQUMxQixlQUFlO1VBQ2YsZ0JBQWdCO1NBQ2pCO0FBQ0MsaUNBQWlDO0FBQ2pDO2NBQ0ksaUJBQWlCO2NBQ2pCLGlCQUFpQjtXQUNwQjtBQUNELDRCQUE0QjtBQUMzQjtlQUNJLDBCQUEwQjtlQUMxQixjQUFjO2VBQ2Qsc0JBQXNCO2VBQ3RCLGVBQWU7ZUFDZixxQkFBcUI7ZUFDckIsc0JBQXNCO1lBQ3pCO0FBQ0Q7YUFDRSx5QkFBeUI7WUFDMUI7QUFDRCxzQkFBc0I7QUFDdEI7ZUFDSSwwQkFBMEI7WUFDN0I7QUFFRCxpQ0FBaUM7QUFDakM7ZUFDSSw4QkFBOEI7ZUFDOUIsYUFBYTtlQUNiLFlBQVk7ZUFDWixZQUFZO2VBQ1osZUFBZTtZQUNsQjtBQUVBLHFDQUFxQztBQUNyQztnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixlQUFlO2FBQ2xCO0FBQ0c7b0JBQ0ksYUFBYTtpQkFDaEI7QUFDQTtxQkFDSSwwQkFBMEI7a0JBQzdCO0FBQ0U7dUJBQ0cscUJBQXFCO3FCQUN2QjtBQUNDOzBCQUNJLFdBQVc7dUJBQ2Q7QUFHWDtnQkFDSTtvQkFDSSxjQUFjO29CQUNkLGVBQWU7aUJBQ2xCO2FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL3BhZ2luYXRpb24tcGFnZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhZ2luYXRpb24gQ29udGFpbmVyICovXG5jM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbkNvbnRhaW5lcntcbiAgICBwYWRkaW5nOjAuNXJlbTtcbn1cbiAgICAvKiBQYWdpbmF0aW9uIEl0ZW1zIExpc3QgKi9cbiAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbkl0ZW1ze1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAgICAgLyogUGFnaW5hdGlvbiBJdGVtcyAqL1xuICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbkl0ZW1zIGxpe1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICBmb250OiAxcmVtIHF1aWNrc2FuZGJvbGQsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YWJiYztcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgICAvKiBCdXR0b25zIExpc3QgZm9yIFBhZ2luYXRpb24gKi9cbiAgICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbntcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogQnV0dG9ucyBmb3IgUGFnaW5hdGlvbiAqL1xuICAgICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbiBsaSB7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ5YzIxO1xuICAgICAgICAgICAgICAgd2lkdGg6IDEuN3JlbTtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xuICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgYzNtLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGk6bm90KC5idG5QYWdlcyl7XG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNmNiZTQ1O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC8qIEl0ZW0gTGlzdCBBY3RpdmUgKi9cbiAgICAgICAgICAgYzNtLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGkuYWN0aXZle1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhOTIwYjtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC8qIFBhZ2luYXRpb24gTGlzdCBJdGVtIEJ1dHRvbiAqL1xuICAgICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbiBidXR0b257XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBQYWdpbmF0aW9uIExpc3QgSXRlbSBCdXR0b24gSU1HICovXG4gICAgICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbiBidXR0b24gaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYzNtLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGk6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGMzbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uIGxpLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2JkYjQ7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYzNtLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGkuZGlzYWJsZWQgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjM20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbiBsaS5kaXNhYmxlZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCl7XG4gICAgICAgICAgICAgICAgYzNtLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination/pagination.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination/pagination.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Pagination container -->\n<div class=\"paginationContainer\">\n\n      <!-- All Items -->\n      <ul class=\"paginationItems\">\n          <li *ngFor=\"let item of pagedItems\">{{item.name}}</li>\n      </ul>\n\n      <!-- Pages -->\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\n         <!-- first -->\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"btnFirst\">\n          <button (click)=\"setPage(1)\"><img src=\"assets/img/first.svg\" alt=\"First Page\"/> </button>\n        </li>\n\n        <!-- previous -->\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"btnPrevious\">\n          <button (click)=\"setPage(pager.currentPage - 1)\"><img src=\"assets/img/previous.svg\" alt=\"Previous Page\"/> </button>\n        </li>\n\n        <!-- pages numbers -->\n        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"btnPages\">\n          <button (click)=\"setPage(page)\">{{page}}</button>\n        </li>\n\n        <!-- next -->\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"btnNext\">\n          <button (click)=\"setPage(pager.currentPage + 1)\"><img src=\"assets/img/next.svg\" alt=\"Next Page\"/> </button>\n        </li>\n\n        <!-- last -->\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"btnLast\">\n          <button (click)=\"setPage(pager.totalPages)\"><img src=\"assets/img/last.svg\" alt=\"Last Page\"/> </button>\n        </li>\n\n      </ul>\n\n\n</div>"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination/pagination.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination/pagination.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pager.service */ "./src/app/main/pagination-page/pagination/pager.service.ts");






var PaginationComponent = /** @class */ (function () {
    // Constructor
    function PaginationComponent(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        // Pager Object
        this.pager = {};
    }
    // On Init
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataPagination.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allItems = data;
            // Initialize to page 1
            _this.setPage(1);
        });
    };
    // SetPage
    PaginationComponent.prototype.setPage = function (page) {
        // check page < 1 or page > totalPages
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // Get pager object from service ( numberOfItems, Page)
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // Get current page of items (copy with slice(start,end))
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/main/pagination-page/pagination/pagination.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/main/pagination-page/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmFkaW8tcGFnZS9yYWRpby1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Radio</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"#radio\">Radios</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"radio\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Radios\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/radio\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>Rememeber that all radios from the same group must share the same <code>name</code> attribute value.</p>\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The label description</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The value of the <code>name</code> attribute</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>The value of the input <code>value</code> attribute</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The value of the <code>id</code> attribute</dd>\n        </div>\n        <div>\n          <dt>checked</dt>\n          <dd>if present, checkbox will be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>required</dt>\n          <dd>if present, check will be required on submit (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>disable the checkbox (optional)</dd>\n        </div>\n        <div>\n          <dt>classes (optional)</dt>\n          <dd><em>go-along</em>, <em>switch</em></dd>\n        </div>\n      </dl>\n\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n        <p>The <code>id</code> attribute of an input is very important for form accessibility. It allows\n        the user-agent to associate a label to its input.</p>\n      </div>\n    </div>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-radio legend=\"Which star do you prefer?\">\n        <c3m-radio-item\n          title=\"Star Wars\"\n          [id]=\"'series1'\"\n          name=\"series\"\n          value=\"series1\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Star Trek\"\n          [id]=\"'series2'\"\n          name=\"series\"\n          value=\"series2\"\n          checked=\"checked\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Star Gate\"\n          [id]=\"'series3'\"\n          name=\"series\"\n          value=\"series3\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <h4>Single line radios (add the <em>go-along</em> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-radio class=\"go-along\" legend=\"Star Trek is the best?\">\n        <c3m-radio-item\n          title=\"Yes\"\n          name=\"startrekisbest\"\n          value=\"startrek\"\n          [id]=\"'best1'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"No\"\n          name=\"startrekisbest\"\n          value=\"other\"\n          [id]=\"'best2'\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <h4>Switch radios (add the <em>switch</em> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SWITCH -->\n      <c3m-radio class=\"switch\" legend=\"Check the star\">\n        <c3m-radio-item\n          title=\"Wars\"\n          name=\"starS\"\n          value=\"star1\"\n          [id]=\"'star1'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Trek\"\n          name=\"starS\"\n          value=\"star2\"\n          checked=\"checked\"\n          [id]=\"'star2'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Gate\"\n          name=\"starS\"\n          value=\"star3\"\n          [id]=\"'star3'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Dust\"\n          name=\"starS\"\n          value=\"star5\"\n          [id]=\"'star5'\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- RADIOS --&gt;\n&lt;c3m-radio legend=&#34;Which star do you prefer?&#34;&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Wars&#34;\n    name=&#34;series&#34;\n    value=&#34;series1&#34;\n    [id]=&#34;'series1'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Trek&#34;\n    name=&#34;series&#34;\n    value=&#34;series2&#34;\n    [id]=&#34;'series2'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Gate&#34;\n    name=&#34;series&#34;\n    value=&#34;series3&#34;\n    [id]=&#34;'series3'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n&lt;/c3m-radio&gt;\n\n&lt;!-- RADIOS IN-LINE --&gt;\n&lt;c3m-radio class=&#34;go-along&#34; legend=&#34;Star Trek is the best?&#34;&gt;\n  &lt;c3m-radio-item\n    title=&#34;Yes&#34;\n    name=&#34;startrekisbest&#34;\n    value=&#34;startrek&#34;\n    [id]=&#34;'best1'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;No&#34;\n    name=&#34;startrekisbest&#34;\n    value=&#34;other&#34;\n    [id]=&#34;'best2'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n&lt;/c3m-radio&gt;\n\n&lt;!-- SWITCH --&gt;\n  &lt;c3m-radio class=&#34;switch&#34; legend=&#34;Check the star&#34;&gt;\n    &lt;c3m-radio-item\n      title=&#34;Wars&#34;\n      name=&#34;starS&#34;\n      value=&#34;star1&#34;\n      [id]=&#34;'star1'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Trek&#34;\n      name=&#34;starS&#34;\n      value=&#34;star2&#34;\n      checked=&#34;checked&#34;\n      [id]=&#34;'star2'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Gate&#34;\n      name=&#34;starS&#34;\n      value=&#34;star3&#34;\n      [id]=&#34;'star3'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Dust&#34;\n      name=&#34;starS&#34;\n      value=&#34;star5&#34;\n      [id]=&#34;'star5'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n  &lt;/c3m-radio&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.ts ***!
  \*********************************************************/
/*! exports provided: RadioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageComponent", function() { return RadioPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var RadioPageComponent = /** @class */ (function () {
    function RadioPageComponent(app) {
        this.app = app;
    }
    RadioPageComponent.prototype.ngOnInit = function () {
        var subComp = ['radio-item'];
        this.app.codeSnippets(subComp);
    };
    RadioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-radio-page',
            template: __webpack_require__(/*! ./radio-page.component.html */ "./src/app/main/radio-page/radio-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./radio-page.component.css */ "./src/app/main/radio-page/radio-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], RadioPageComponent);
    return RadioPageComponent;
}());



/***/ }),

/***/ "./src/app/main/radio-page/radio/radio-item/radio-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio-item/radio-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmFkaW8tcGFnZS9yYWRpby9yYWRpby1pdGVtL3JhZGlvLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/radio-page/radio/radio-item/radio-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio-item/radio-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <input type=\"radio\"\n    id=\"{{id}}\"\n    [name]=this.name\n    [value]=this.value\n    [checked] = 'checked'\n    [required] = 'required'\n    [disabled] = 'disabled' />\n  <label for=\"{{id}}\">{{ this.title }}</label>\n</li>\n"

/***/ }),

/***/ "./src/app/main/radio-page/radio/radio-item/radio-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio-item/radio-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RadioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioItemComponent", function() { return RadioItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioItemComponent = /** @class */ (function () {
    function RadioItemComponent() {
        // Inputs
        this.title = '';
    }
    RadioItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioItemComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioItemComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RadioItemComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RadioItemComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RadioItemComponent.prototype, "required", void 0);
    RadioItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-radio-item',
            template: __webpack_require__(/*! ./radio-item.component.html */ "./src/app/main/radio-page/radio/radio-item/radio-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./radio-item.component.css */ "./src/app/main/radio-page/radio/radio-item/radio-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioItemComponent);
    return RadioItemComponent;
}());



/***/ }),

/***/ "./src/app/main/radio-page/radio/radio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-radio {margin-bottom: 1rem;}\n\n  c3m-radio legend {\n    font: 1em/1 var(--stack-b);\n    padding-bottom: 1em;\n  }\n\n  c3m-radio label {\n    display: inline-block;\n    font-family: var(--stack);\n    padding: 0;\n  }\n\n  /* Single line options */\n\n  c3m-radio.go-along ul {display: flex;}\n\n  c3m-radio.go-along c3m-radio-item + c3m-radio-item {margin-left: 1em;}\n\n  /* Radio buttons */\n\n  c3m-radio.switch {display: flex; position: relative;}\n\n  c3m-radio.switch li {display: inline-block;}\n\n  c3m-radio.switch input {\n    position: absolute;\n    width: 25px;\n    left: -35px;\n    opacity: 0;\n  }\n\n  c3m-radio.switch c3m-radio-item label {\n    display: inline-block;\n    overflow: hidden;\n    font-size: 0.95rem;\n    text-transform: uppercase;\n    color: var(--n-dark);\n    background: var(--n-medium);\n    padding: 0.65em 0.8em 0.5em;\n    margin-left: -4px;\n    border-bottom: 1px solid rgba(0,0,0,.2);\n    transition: all .5s;\n    cursor: pointer;\n  }\n\n  c3m-radio.switch c3m-radio-item:first-child label {\n    border-top-left-radius: 0.3em;\n    border-bottom-left-radius: 0.3em;\n    margin-left: 0;\n  }\n\n  c3m-radio.switch c3m-radio-item:last-child label {\n    border-top-right-radius: 0.3em;\n    border-bottom-right-radius: 0.3em;\n  }\n\n  c3m-radio.switch input:checked + label {\n    color: var(--text-inv);\n    background-color: var(--main-color);\n  }\n\n  @media screen and (min-width: 750px) {\n  c3m-radio legend {font-size: 1.3em;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yYWRpby1wYWdlL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxvQkFBb0IsQ0FBQzs7RUFFOUI7SUFDRSwyQkFBMkI7SUFDM0Isb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixXQUFXO0dBQ1o7O0VBRUgseUJBQXlCOztFQUN2Qix1QkFBdUIsY0FBYyxDQUFDOztFQUN0QyxvREFBb0QsaUJBQWlCLENBQUM7O0VBRXhFLG1CQUFtQjs7RUFFbkIsa0JBQWtCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQzs7RUFFbkQscUJBQXFCLHNCQUFzQixDQUFDOztFQUU1QztJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7R0FDWjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixnQkFBZ0I7R0FDakI7O0VBQ0Q7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGVBQWU7R0FDaEI7O0VBQ0Q7SUFDRSwrQkFBK0I7SUFDL0Isa0NBQWtDO0dBQ25DOztFQUVEO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9DQUFvQztHQUNyQzs7RUFHSDtFQUNFLGtCQUFrQixpQkFBaUIsQ0FBQztDQUNyQyIsImZpbGUiOiJzcmMvYXBwL21haW4vcmFkaW8tcGFnZS9yYWRpby9yYWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYzNtLXJhZGlvIHttYXJnaW4tYm90dG9tOiAxcmVtO31cblxuICBjM20tcmFkaW8gbGVnZW5kIHtcbiAgICBmb250OiAxZW0vMSB2YXIoLS1zdGFjay1iKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgYzNtLXJhZGlvIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXN0YWNrKTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbi8qIFNpbmdsZSBsaW5lIG9wdGlvbnMgKi9cbiAgYzNtLXJhZGlvLmdvLWFsb25nIHVsIHtkaXNwbGF5OiBmbGV4O31cbiAgYzNtLXJhZGlvLmdvLWFsb25nIGMzbS1yYWRpby1pdGVtICsgYzNtLXJhZGlvLWl0ZW0ge21hcmdpbi1sZWZ0OiAxZW07fVxuXG4vKiBSYWRpbyBidXR0b25zICovXG5cbmMzbS1yYWRpby5zd2l0Y2gge2Rpc3BsYXk6IGZsZXg7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XG5cbiAgYzNtLXJhZGlvLnN3aXRjaCBsaSB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cblxuICBjM20tcmFkaW8uc3dpdGNoIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbGVmdDogLTM1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIGMzbS1yYWRpby5zd2l0Y2ggYzNtLXJhZGlvLWl0ZW0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW4tbWVkaXVtKTtcbiAgICBwYWRkaW5nOiAwLjY1ZW0gMC44ZW0gMC41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGMzbS1yYWRpby5zd2l0Y2ggYzNtLXJhZGlvLWl0ZW06Zmlyc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM2VtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIGMzbS1yYWRpby5zd2l0Y2ggYzNtLXJhZGlvLWl0ZW06bGFzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNlbTtcbiAgfVxuXG4gIGMzbS1yYWRpby5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgYzNtLXJhZGlvIGxlZ2VuZCB7Zm9udC1zaXplOiAxLjNlbTt9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/radio-page/radio/radio.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/main/radio-page/radio/radio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/radio-page/radio/radio.component.ts ***!
  \**********************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        // Inputs
        this.legend = '';
    }
    RadioComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioComponent.prototype, "legend", void 0);
    RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/main/radio-page/radio/radio.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./radio.component.css */ "./src/app/main/radio-page/radio/radio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/main/select-page/select-datalist/select-datalist.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalist/select-datalist.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-select-datalist label {\n  display: block;\n  padding-bottom: 0.3rem;\n}\n\nc3m-select-datalist input {\n  display: block;\n  font: 100%/1 var(--stack);\n  padding: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zZWxlY3QtcGFnZS9zZWxlY3QtZGF0YWxpc3Qvc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zZWxlY3QtcGFnZS9zZWxlY3QtZGF0YWxpc3Qvc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tc2VsZWN0LWRhdGFsaXN0IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59XG5cbmMzbS1zZWxlY3QtZGF0YWxpc3QgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udDogMTAwJS8xIHZhcigtLXN0YWNrKTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/select-page/select-datalist/select-datalist.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalist/select-datalist.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"> {{ this.title }}</label>\n  <input #inputList type=\"text\" id=\"{{id}}\" [name]=this.name />\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{option.value}}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n"

/***/ }),

/***/ "./src/app/main/select-page/select-datalist/select-datalist.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalist/select-datalist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectDatalistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDatalistComponent", function() { return SelectDatalistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SelectDatalistComponent = /** @class */ (function () {
    // Constructor
    function SelectDatalistComponent(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    SelectDatalistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
        this.myListId = this.list;
        this.myInput.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectDatalistComponent.prototype, "myInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectDatalistComponent.prototype, "myDataList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistComponent.prototype, "list", void 0);
    SelectDatalistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-select-datalist',
            template: __webpack_require__(/*! ./select-datalist.component.html */ "./src/app/main/select-page/select-datalist/select-datalist.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select-datalist.component.css */ "./src/app/main/select-page/select-datalist/select-datalist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SelectDatalistComponent);
    return SelectDatalistComponent;
}());



/***/ }),

/***/ "./src/app/main/select-page/select-datalists/select-datalists.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalists/select-datalists.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-select-datalists label {\n  display: block;\n  padding-bottom: 0.3rem;\n}\nc3m-select-datalists input {\n  display: block;\n  font: 100%/1 var(--stack);\n  padding: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zZWxlY3QtcGFnZS9zZWxlY3QtZGF0YWxpc3RzL3NlbGVjdC1kYXRhbGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VsZWN0LXBhZ2Uvc2VsZWN0LWRhdGFsaXN0cy9zZWxlY3QtZGF0YWxpc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tc2VsZWN0LWRhdGFsaXN0cyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufVxuYzNtLXNlbGVjdC1kYXRhbGlzdHMgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udDogMTAwJS8xIHZhcigtLXN0YWNrKTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/select-page/select-datalists/select-datalists.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalists/select-datalists.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id1}}\">{{ this.title1 }}</label>\n  <input #inputList1 type=\"text\" id=\"{{id2}}\" [name]=this.name1>\n</p>\n\n<p>\n    <label for=\"{{id1}}\">{{ this.title2 }}</label>\n    <input #inputList2 type=\"text\" id=\"{{id2}}\" [name]=this.name2>\n\n    <datalist #dataList>\n        <option *ngFor=\"let option of allOptions\" value=\"{{option.value}}\"> {{ option.value }} </option>\n    </datalist>\n</p>\n"

/***/ }),

/***/ "./src/app/main/select-page/select-datalists/select-datalists.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/select-page/select-datalists/select-datalists.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectDatalistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDatalistsComponent", function() { return SelectDatalistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SelectDatalistsComponent = /** @class */ (function () {
    // Constructor
    function SelectDatalistsComponent(http) {
        this.http = http;
        this.id1 = '';
        this.id2 = '';
    }
    // On Init
    SelectDatalistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
        this.myListId = this.list;
        this.myInput1.nativeElement.setAttribute('list', this.myListId);
        this.myInput2.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputList1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectDatalistsComponent.prototype, "myInput1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputList2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectDatalistsComponent.prototype, "myInput2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectDatalistsComponent.prototype, "myDataList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "title1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "title2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "name1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "name2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "id1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "id2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDatalistsComponent.prototype, "list", void 0);
    SelectDatalistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-select-datalists',
            template: __webpack_require__(/*! ./select-datalists.component.html */ "./src/app/main/select-page/select-datalists/select-datalists.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select-datalists.component.css */ "./src/app/main/select-page/select-datalists/select-datalists.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SelectDatalistsComponent);
    return SelectDatalistsComponent;
}());



/***/ }),

/***/ "./src/app/main/select-page/select-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VsZWN0LXBhZ2Uvc2VsZWN0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/select-page/select-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panelTitle\">\n  <h2>\n    <strong>Selects &amp; Datalists</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#select\">Regular Select</a></li>\n    <li><a scrollTo href=\"#select-datalist\">Datalist</a></li>\n    <li><a scrollTo href=\"#select-datalists\">Combined Datalists</a></li>\n  </ul>\n</div>\n\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Regular Select\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/select\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>Regular select component with JSON input for options.</p>\n    </div>\n\n    <div class=\"demo\" lang=\"en\">\n      <!-- SIMPLE SELECT -->\n      <c3m-select title=\"Choose an answer\" name=\"choice\" [id]=\"'choice'\">\n      </c3m-select>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The Label of the Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of the Input</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The id of the Input and the \"for\" Label Attribute</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Select --&gt;\n&lt;c3m-select\n  title=&#34;Choose something&#34;\n  name=&#34;Choose Something&#34;\n  [id]=&#34;&apos;choice-something&apos;&#34;&gt;\n&lt;/c3m-select&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<!-- ************************************* -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select-datalist\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Datalist\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/select-datalist\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>Integrates native auto-completion system, with JSON source input.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- Datalist Select -->\n      <c3m-select-datalist title=\"Choose an answer\" name=\"Choose Me\" list=\"mylist1\" [id]=\"'choose-me'\">\n      </c3m-select-datalist>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The Label of the Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of the Input</dd>\n        </div>\n        <div>\n          <dt>list</dt>\n          <dd>Link between input and datalist</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The id of the Input and the \"for\" Label Attribute</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Datalist Select --&gt;\n&lt;c3m-select-datalist\n  title=&#34;Choose Me&#34;\n  name=&#34;Choose Me&#34;\n  list=&#34;mylist1&#34;\n  [id]=&#34;&apos;choice-me&apos;&#34;&gt;\n&lt;/c3m-select-datalist&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- ************************************* -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select-datalists\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Combined Datalists\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/select-datalists\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>You can associate two inputs to the same datalist.\n        Both datalists integrate the auto-completion system\n        (JSON).</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- Datalists Select -->\n      <c3m-select-datalists title1=\"Choose Me Please\" title2=\"Choose Me To\" name1=\"Choose Me1 \" name2=\"Choose Me2\" list=\"mylist2\"\n        [id1]=\"'choice-me1'\" [id2]=\"'choice-me2'\">\n      </c3m-select-datalists>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title1</dt>\n          <dd>Label of the first Input</dd>\n        </div>\n        <div>\n          <dt>title2</dt>\n          <dd>Label of the Second Input</dd>\n        </div>\n        <div>\n          <dt>name1</dt>\n          <dd>Name of the first Input</dd>\n        </div>\n        <div>\n          <dt>name2</dt>\n          <dd>Name of the first Input</dd>\n        </div>\n        <div>\n          <dt>title1</dt>\n          <dd>Label of the first Input</dd>\n        </div>\n        <div>\n          <dt>id1</dt>\n          <dd>ID of the first Input and \"for\" label attribute</dd>\n        </div>\n        <div>\n          <dt>id2</dt>\n          <dd>ID of the Second Input and \"for\" label attribute</dd>\n        </div>\n        <div>\n          <dt>list</dt>\n          <dd>Link between the DataList ID and the \"list\" attributes of the two lists</dd>\n        </div>\n      </dl>\n\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Datalists Select --&gt;\n&lt;c3m-select-datalists\n  title1=&#34;Choose Me Please&#34;\n  title2=&#34;Choose Me To&#34;\n  name1=&#34;Choose Me1 &#34;\n  name2=&#34;Choose Me2&#34;\n  list=&#34;mylist2&#34;\n  [id1]=&#34;&apos;choice-me1&apos;&#34;\n  [id2]=&#34;&apos;choice-me2&apos;&#34;&gt;\n&lt;/c3m-select-datalists&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/select-page/select-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageComponent", function() { return SelectPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SelectPageComponent = /** @class */ (function () {
    function SelectPageComponent(app) {
        this.app = app;
    }
    SelectPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    SelectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-select-page',
            template: __webpack_require__(/*! ./select-page.component.html */ "./src/app/main/select-page/select-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select-page.component.css */ "./src/app/main/select-page/select-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SelectPageComponent);
    return SelectPageComponent;
}());



/***/ }),

/***/ "./src/app/main/select-page/select/select.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/select-page/select/select.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-select label {\n  display: block;\n  padding-bottom: 0.3rem;\n}\nc3m-select select {\n  display: block;\n  font: 100%/1 var(--stack);\n  padding: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zZWxlY3QtcGFnZS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3NlbGVjdC1wYWdlL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS1zZWxlY3QgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbn1cbmMzbS1zZWxlY3Qgc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQ6IDEwMCUvMSB2YXIoLS1zdGFjayk7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/select-page/select/select.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/select-page/select/select.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"> {{ this.title }} </label>\n  <select id=\"{{id}}\" [name]=this.name>\n    <option *ngFor=\"let option of allOptions\" value=\"{{option.value}}\"> {{ option.value }} </option>\n  </select>\n</p>\n"

/***/ }),

/***/ "./src/app/main/select-page/select/select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/select-page/select/select.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SelectComponent = /** @class */ (function () {
    // Constructor
    function SelectComponent(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    SelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "id", void 0);
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/main/select-page/select/select.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/main/select-page/select/select.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2tpcC1wYWdlL3NraXAtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n    <h2><strong>Skip Link</strong> Component</h2>\n    <ul>\n      <li><a scrollTo href=\"#skip\">Skip link </a></li>\n    </ul>\n</div>\n\n\n  <!-- INPUT REGULAR -->\n  <div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"skip\">\n      <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Skip Link (invisible)\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/skip\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span></a>\n      </h3>\n      <p>This link is used to skip the <code>main navigation</code>. It is <strong>invisible</strong> and gets focus with keyboard.</p>\n      <p>It uses <a href=\"#\">Link To</a> to focus/scroll to the desired content.</p>\n      <div class=\"demo\">\n        <!-- SKIP LINK -->\n        <c3m-skip\n          text=\"Go to the main content\"\n          [id]=\"'goTotheBottom'\">\n        </c3m-skip>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <dt>Text</dt>\n          <dd>Text of the link</dd>\n        </dl>\n        <dl>\n          <dt>Id</dt>\n          <dd>Reference to the Id that we want to focus</dd>\n        </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n             <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n  &lt;c3m-skip\n    text=&#34;Go to the main content&#34;\n    [id]=&#34;&apos;goTotheBottom&apos;&#34;&gt;\n  &lt;/c3m-skip&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"CSS\">\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"TypeScript\">\n        </c3m-tab>\n\n      </c3m-tabs>\n\n      <p id=\"goTotheBottom\">I'm the focused text by <strong>c3m-link</strong></p>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.ts ***!
  \*******************************************************/
/*! exports provided: SkipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipPageComponent", function() { return SkipPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SkipPageComponent = /** @class */ (function () {
    function SkipPageComponent(app) {
        this.app = app;
    }
    SkipPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    SkipPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-skip-page',
            template: __webpack_require__(/*! ./skip-page.component.html */ "./src/app/main/skip-page/skip-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./skip-page.component.css */ "./src/app/main/skip-page/skip-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SkipPageComponent);
    return SkipPageComponent;
}());



/***/ }),

/***/ "./src/app/main/skip-page/skip/skip.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/skip-page/skip/skip.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Hide the link */\nc3m-skip a{\n  position: absolute;\n  left: -9999px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9za2lwLXBhZ2Uvc2tpcC9za2lwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2tpcC1wYWdlL3NraXAvc2tpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGlkZSB0aGUgbGluayAqL1xuYzNtLXNraXAgYXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTk5OXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/skip-page/skip/skip.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/skip-page/skip/skip.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a scrollTo href=#{{this.id}}> {{this.text}} </a>\n"

/***/ }),

/***/ "./src/app/main/skip-page/skip/skip.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/skip-page/skip/skip.component.ts ***!
  \*******************************************************/
/*! exports provided: SkipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipComponent", function() { return SkipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkipComponent = /** @class */ (function () {
    function SkipComponent() {
    }
    SkipComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SkipComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SkipComponent.prototype, "text", void 0);
    SkipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-skip',
            template: __webpack_require__(/*! ./skip.component.html */ "./src/app/main/skip-page/skip/skip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./skip.component.css */ "./src/app/main/skip-page/skip/skip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkipComponent);
    return SkipComponent;
}());



/***/ }),

/***/ "./src/app/main/slider-page/progress/progress.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main/slider-page/progress/progress.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGVyLXBhZ2UvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/slider-page/progress/progress.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/slider-page/progress/progress.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label for=\"{{id}}\"><ng-content></ng-content></label>\n  <progress\n    id=\"{{id}}\"\n    [name]=\"name\"\n    [attr.max]=\"max\"\n    [attr.value]=\"value\"\n    [disabled] = \"disabled\">\n  </progress>\n</p>\n"

/***/ }),

/***/ "./src/app/main/slider-page/progress/progress.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/slider-page/progress/progress.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProgressComponent.prototype, "disabled", void 0);
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/main/slider-page/progress/progress.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/main/slider-page/progress/progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGVyLXBhZ2Uvc2xpZGVyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Sliders  &amp; Progress</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#slider\">Slider</a></li>\n    <li><a scrollTo href=\"#progress\">Progress Bar</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"slider\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Slider\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/slider\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE SLIDER -->\n      <c3m-slider\n        [id]=\"'slider1'\"\n        name=\"checkboxName1\"\n        min=\"0\"\n        max=\"50\"\n        value=\"45\"\n        step=\"1\">\n        Choose a value\n      </c3m-slider>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>id</dt>\n          <dd>single field identifier</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>general field identifier</dd>\n        </div>\n        <div>\n          <dt>min</dt>\n          <dd>minimum slider value</dd>\n        </div>\n        <div>\n          <dt>max</dt>\n          <dd>maximum slider value</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>default value</dd>\n        </div>\n        <div>\n          <dt>step</dt>\n          <dd>steps value (integer or float)</dd>\n        </div>\n        <div>\n          <dt>class (optional)</dt>\n          <dd><em>bubble</em></dd>\n        </div>\n      </dl>\n    </div>\n\n    <h4>Tooltip Slider</h4>\n    <div class=\"explain\">\n      <p>The current value is displayed in a sliding tooltip.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- SLIDER WITH BUBBLE -->\n      <c3m-slider\n        [id]=\"'slider2'\"\n        min=\"0\"\n        max=\"100\"\n        value=\"30\"\n        step=\"1\"\n        class=\"bubble\">\n        Slider with Bubble\n      </c3m-slider>\n    </div>\n\n    <div class=\"explain\">\n      <p>Just add the class <em>bubble</em> when calling the <code>c3m-slider</code> component\n        to display the <code>output</code> element as a tooltip.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE SLIDER --&gt;\n  &lt;c3m-slider\n    [id]=&#34;'slider1'&#34;\n    name=&#34;checkboxName1&#34;\n    min=&#34;0&#34;\n    max=&#34;50&#34;\n    value=&#34;45&#34;\n    step=&#34;1&#34;&gt;\n    Choose a value\n&lt;/c3m-slider&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"progress\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Progress Bar\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/progress\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE PROGRESS BAR -->\n      <c3m-progress\n        [id]=\"'prog1'\"\n        name=\"prog1\"\n        max=\"100\"\n        value=\"30\">\n        Progress\n      </c3m-progress>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>id</dt>\n          <dd>single field identifier</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>general field identifier</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>indicates progress (floating between 0 and <code>max</code>)</dd>\n        </div>\n        <div>\n          <dt>max</dt>\n          <dd>maximum progress value, defaults to 1 (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>when present, the element is disabled/read-only (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE PROGRESS BAR --&gt;\n  &lt;c3m-progress\n    [id]=&#34;'prog1'&#34;\n    name=&#34;prog1&#34;\n    title=&#34;Progress&#34;\n    max=&#34;100&#34;\n    value=&#34;30&#34;&gt;\n    Progress\n  &lt;/c3m-progress&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SliderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageComponent", function() { return SliderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SliderPageComponent = /** @class */ (function () {
    function SliderPageComponent(app) {
        this.app = app;
    }
    SliderPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    SliderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-slider-page',
            template: __webpack_require__(/*! ./slider-page.component.html */ "./src/app/main/slider-page/slider-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./slider-page.component.css */ "./src/app/main/slider-page/slider-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SliderPageComponent);
    return SliderPageComponent;
}());



/***/ }),

/***/ "./src/app/main/slider-page/slider/slider.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/slider-page/slider/slider.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* INPUT CSS */\n\nc3m-slider .slider-content {position: relative;}\n\nc3m-slider.bubble .slider-content {margin-bottom: 2em;}\n\n/* DEFAULT INPUT */\n\nc3m-slider input[type=range] {\n  display: inline-block;\n  width: 50%;\n  background-color: rgba(0,0,0,0);\n  padding: 0;\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n/* DEFAULT INPUT FOCUS */\n\nc3m-slider input[type=range]:focus {\n      outline: none;\n  }\n\n/* TRACK */\n\nc3m-slider input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 8px;\n      background: var(--main-light);\n      border-radius: 8px;\n      box-shadow: none;\n      cursor: pointer;\n  }\n\n/* BALL */\n\nc3m-slider input[type=range]::-webkit-slider-thumb {\n      height: 26px;\n      width: 26px;\n      background: var(--sec-light);\n      margin-top: -9px;\n      border-radius: 26px;\n      -webkit-appearance: none;\n      box-shadow: 1px 1px 2px rgba(0,0,0,.5);\n      cursor: pointer;\n  }\n\n/* FOCUS TRACK */\n\nc3m-slider input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #45ABBC;\n  }\n\n/* MOZ TRACK */\n\nc3m-slider input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 8px;\n      background: var(--main-light);\n      border-radius: 8px;\n      box-shadow: none;\n      cursor: pointer;\n  }\n\n/* MOZ BALL */\n\nc3m-slider input[type=range]::-moz-range-thumb {\n      height: 26px;\n      width: 26px;\n      background: var(--sec-light);\n      border: none;\n      border-radius: 26px;\n      box-shadow: 1px 1px 2px rgba(0,0,0,.5);\n      cursor: pointer;\n  }\n\n/* MS TRACK */\n\ninput[type=range]::-ms-track {\n      width: 100%;\n      height: 8px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent;\n  }\n\nc3m-slider input[type=range]::-ms-fill-lower {\n      background: var(--main-light);\n      border: 0.2px solid var(--n-medium);\n      border-radius: 2.6px;\n      box-shadow: none;\n  }\n\nc3m-slider input[type=range]::-ms-fill-upper {\n      background: var(--main-light);\n      border: 0.2px solid var(--n-medium);\n      border-radius: 2.6px;\n      box-shadow: none;\n  }\n\nc3m-slider input[type=range]::-ms-thumb {\n    height: 26px;\n    width: 26px;\n    border-radius: 12px;\n    background: var(--sec-light);\n    cursor: pointer;\n    height: 8.4px;\n}\n\nc3m-slider input[type=range]:focus::-ms-fill-lower {\n    background: var(--main-light);\n}\n\nc3m-slider input[type=range]:focus::-ms-fill-upper {\n    background: var(--main-light);\n}\n\n/* Output */\n\nc3m-slider output {\n  position: relative;\n  top: 0.3em;\n  font: 1.2rem var(--stack-b);\n  text-transform: uppercase;\n  color:  var(--main-color);\n  margin-left: 1rem;\n}\n\nc3m-slider.bubble output {\n      position: absolute;\n      display: inline-block;\n      top: auto;\n      bottom: -2.4rem;\n      left: 0;\n      width: 40px;\n      height: 26.2px;\n      text-align: center;\n      color: var(--text-inv);\n      background-color: var(--n-dark);\n      padding-top: 0.3rem;\n      margin-left: 0;\n      border-radius: 10px;\n      -webkit-transform: translate(-50%);\n              transform: translate(-50%);\n    }\n\nc3m-slider.bubble output:after {\n            content: \"\";\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-bottom: 10px solid var(--n-dark);\n            border-left: 5px solid transparent;\n            border-right: 5px solid transparent;\n            bottom: 100%;\n            left: 50%;\n            margin-left: -5px;\n            margin-top: -1px;\n        }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zbGlkZXItcGFnZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZiw0QkFBNEIsbUJBQW1CLENBQUM7O0FBQ2hELG1DQUFtQyxtQkFBbUIsQ0FBQzs7QUFFdkQsbUJBQW1COztBQUNuQjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEI7O0FBRUQseUJBQXlCOztBQUN2QjtNQUNJLGNBQWM7R0FDakI7O0FBRUQsV0FBVzs7QUFDWDtNQUNJLFlBQVk7TUFDWixZQUFZO01BQ1osOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0JBQWdCO0dBQ25COztBQUVELFVBQVU7O0FBQ1Y7TUFDSSxhQUFhO01BQ2IsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsb0JBQW9CO01BQ3BCLHlCQUF5QjtNQUN6Qix1Q0FBdUM7TUFDdkMsZ0JBQWdCO0dBQ25COztBQUVELGlCQUFpQjs7QUFDakI7TUFDSSxvQkFBb0I7R0FDdkI7O0FBRUQsZUFBZTs7QUFDZjtNQUNJLFlBQVk7TUFDWixZQUFZO01BQ1osOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0JBQWdCO0dBQ25COztBQUNELGNBQWM7O0FBQ2Q7TUFDSSxhQUFhO01BQ2IsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixhQUFhO01BQ2Isb0JBQW9CO01BQ3BCLHVDQUF1QztNQUN2QyxnQkFBZ0I7R0FDbkI7O0FBRUQsY0FBYzs7QUFDZDtNQUNJLFlBQVk7TUFDWixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLHdCQUF3QjtNQUN4QiwwQkFBMEI7TUFDMUIsbUJBQW1CO0dBQ3RCOztBQUNEO01BQ0ksOEJBQThCO01BQzlCLG9DQUFvQztNQUNwQyxxQkFBcUI7TUFDckIsaUJBQWlCO0dBQ3BCOztBQUNEO01BQ0ksOEJBQThCO01BQzlCLG9DQUFvQztNQUNwQyxxQkFBcUI7TUFDckIsaUJBQWlCO0dBQ3BCOztBQUNIO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUdELFlBQVk7O0FBQ1o7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtDQUNuQjs7QUFDRztNQUNFLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsWUFBWTtNQUNaLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGdDQUFnQztNQUNoQyxvQkFBb0I7TUFDcEIsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixtQ0FBMkI7Y0FBM0IsMkJBQTJCO0tBQzVCOztBQUNHO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsVUFBVTtZQUNWLHdDQUF3QztZQUN4QyxtQ0FBbUM7WUFDbkMsb0NBQW9DO1lBQ3BDLGFBQWE7WUFDYixVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGlCQUFpQjtTQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGVyLXBhZ2Uvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSU5QVVQgQ1NTICovXG5cbmMzbS1zbGlkZXIgLnNsaWRlci1jb250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxuYzNtLXNsaWRlci5idWJibGUgLnNsaWRlci1jb250ZW50IHttYXJnaW4tYm90dG9tOiAyZW07fVxuXG4vKiBERUZBVUxUIElOUFVUICovXG5jM20tc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKiBERUZBVUxUIElOUFVUIEZPQ1VTICovXG4gIGMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC8qIFRSQUNLICovXG4gIGMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvKiBCQUxMICovXG4gIGMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWxpZ2h0KTtcbiAgICAgIG1hcmdpbi10b3A6IC05cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLDAsMCwuNSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvKiBGT0NVUyBUUkFDSyAqL1xuICBjM20tc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDVBQkJDO1xuICB9XG5cbiAgLyogTU9aIFRSQUNLICovXG4gIGMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAvKiBNT1ogQkFMTCAqL1xuICBjM20tc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWxpZ2h0KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsMCwwLC41KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC8qIE1TIFRSQUNLICovXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBjM20tc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWxpZ2h0KTtcbiAgICAgIGJvcmRlcjogMC4ycHggc29saWQgdmFyKC0tbi1tZWRpdW0pO1xuICAgICAgYm9yZGVyLXJhZGl1czogMi42cHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIGMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tbGlnaHQpO1xuICAgICAgYm9yZGVyOiAwLjJweCBzb2xpZCB2YXIoLS1uLW1lZGl1bSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWxpZ2h0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA4LjRweDtcbn1cbmMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWxpZ2h0KTtcbn1cbmMzbS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWxpZ2h0KTtcbn1cblxuXG4vKiBPdXRwdXQgKi9cbmMzbS1zbGlkZXIgb3V0cHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuM2VtO1xuICBmb250OiAxLjJyZW0gdmFyKC0tc3RhY2stYik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAgdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuICAgIGMzbS1zbGlkZXIuYnViYmxlIG91dHB1dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBib3R0b206IC0yLjRyZW07XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDI2LjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICAgICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIH1cbiAgICAgICAgYzNtLXNsaWRlci5idWJibGUgb3V0cHV0OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tbi1kYXJrKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/main/slider-page/slider/slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/slider-page/slider/slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Slider Content -->\n<p class=\"slider-content\">\n    <label for=\"{{id}}\"><ng-content></ng-content></label>\n    <!-- Input type RANGE -->\n    <input type=\"range\" #slider\n      id=\"{{id}}\"\n      [attr.min]=\"min\"\n      [attr.max]=\"max\"\n      [attr.step]=\"step\"\n      [attr.value]=\"value\"\n      [required] = \"required\"\n      [disabled] = \"disabled\"\n      (input)=\"showValue();\"/>\n    <!-- Output for display change value -->\n    <output for=\"{{id}}\" #output>{{ this.value }}</output>\n</p>\n"

/***/ }),

/***/ "./src/app/main/slider-page/slider/slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/slider-page/slider/slider.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function SliderComponent(myComponent) {
        this.myComponent = myComponent;
        this.offset = 0;
    }
    /* AFTER VIEW INIT */
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
        // If contains Bubble class
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Resize breakpoint tab */
    SliderComponent.prototype.onResize = function (event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Display value */
    SliderComponent.prototype.showValue = function () {
        if (this.isBubble) {
            this.setPositionBubble();
        }
        this.output.nativeElement.innerHTML = this.input.nativeElement.value;
    };
    /* Move the output with the slider */
    SliderComponent.prototype.setPositionBubble = function () {
        this.width = this.input.nativeElement.getBoundingClientRect().width;
        this.point = (this.input.nativeElement.value - this.min) / (this.max - this.min);
        if (this.point < 0.5) {
            this.offset = ((this.point * 2) * -12) + 12;
        }
        else if (this.point > 0.5) {
            this.offset = ((this.point - 0.5) * 2) * -12;
        }
        this.newPoint = this.width * this.point;
        this.output.nativeElement.style.left = this.newPoint + this.offset + 'px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SliderComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SliderComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SliderComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('output'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SliderComponent.prototype, "output", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "onResize", null);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/main/slider-page/slider/slider.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/main/slider-page/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/main/step-page/step-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc3RlcC1wYWdlL3N0ZXAtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/step-page/step-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE STEP COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2> <strong> Step </strong> Component </h2>\n  <ul>\n    <li><a  scrollTo href=\"#step\">Multiple Steps</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION STEP COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"step\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Multiple Steps\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/step\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>This component displays the different steps of a form if divided in different pages/containers.\n        It will automatically detect the previous and next steps.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- STEP -->\n      <c3m-step>\n        <!-- STEP ITEMS -->\n        <c3m-step-item title=\"Title Of Past Step\"></c3m-step-item>\n        <c3m-step-item isActive=\"true\" title=\"Title Of Active Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n      </c3m-step>\n    </div>\n\n    <!-- EXPLAIN -->\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The step title</dd>\n        </div>\n        <div>\n          <dt>isActive=\"true\"</dt>\n          <dd>To indicate the current step</dd>\n        </div>\n        <div>\n          <dt>over</dt>\n          <dd>The class added to calculate the breakpoint</dd>\n        </div>\n      </dl>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\"> To call the component </p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- STEP --&gt;\n  &lt;c3m-step&gt;\n    &lt;!-- STEP ITEMS --&gt;\n    &lt;c3m-step-item title=&#34;Title Of Past Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item isActive=&#34;true&#34; title=&#34;Title Of Active Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n  &lt;/c3m-step&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n\n    </c3m-tabs>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/step-page/step-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.ts ***!
  \*******************************************************/
/*! exports provided: StepPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepPageComponent", function() { return StepPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var StepPageComponent = /** @class */ (function () {
    function StepPageComponent(app) {
        this.app = app;
    }
    StepPageComponent.prototype.ngOnInit = function () {
        var subComp = ['step-item'];
        this.app.codeSnippets(subComp);
    };
    StepPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-step-page',
            template: __webpack_require__(/*! ./step-page.component.html */ "./src/app/main/step-page/step-page.component.html"),
            styles: [__webpack_require__(/*! ./step-page.component.css */ "./src/app/main/step-page/step-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], StepPageComponent);
    return StepPageComponent;
}());



/***/ }),

/***/ "./src/app/main/step-page/step/step-item/step-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/step-page/step/step-item/step-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc3RlcC1wYWdlL3N0ZXAvc3RlcC1pdGVtL3N0ZXAtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/step-page/step/step-item/step-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/step-page/step/step-item/step-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Step Item -->\n<li\n  #items\n  [ngClass]=\"{'active': isActive,'past': Past,'future': Future}\">\n  {{ title }}\n</li>\n"

/***/ }),

/***/ "./src/app/main/step-page/step/step-item/step-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/step-page/step/step-item/step-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: StepItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepItemComponent", function() { return StepItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../step.component */ "./src/app/main/step-page/step/step.component.ts");



var StepItemComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepItemComponent(step, cdr) {
        this.cdr = cdr;
        this.isActive = false;
        step.addTab(this); // Add item on Items Tab
    }
    Object.defineProperty(StepItemComponent.prototype, "Past", {
        get: function () {
            return this._past;
        },
        set: function (value) {
            this._past = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepItemComponent.prototype, "Future", {
        get: function () {
            return this._future;
        },
        set: function (value) {
            this._future = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    StepItemComponent.prototype.ngAfterViewInit = function () {
        this.reference = this.itemRef;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('items'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StepItemComponent.prototype, "itemRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StepItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StepItemComponent.prototype, "isActive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StepItemComponent.prototype, "indexStep", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StepItemComponent.prototype, "reference", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isPast'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], StepItemComponent.prototype, "Past", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isFuture'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], StepItemComponent.prototype, "Future", null);
    StepItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-step-item',
            template: __webpack_require__(/*! ./step-item.component.html */ "./src/app/main/step-page/step/step-item/step-item.component.html"),
            styles: [__webpack_require__(/*! ./step-item.component.css */ "./src/app/main/step-page/step/step-item/step-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_step_component__WEBPACK_IMPORTED_MODULE_2__["StepComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], StepItemComponent);
    return StepItemComponent;
}());



/***/ }),

/***/ "./src/app/main/step-page/step/step.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/step-page/step/step.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Step List */\nc3m-step ol {\n  counter-reset: step;\n}\n/* Step List Item */\nc3m-step ol li {\n    display: inline-block;\n    position: relative;\n    list-style-type: none;\n    font-size: 0.9em;\n    text-align: center;\n    color: var(--n-dark);\n    background-color: rgba(255,255,255,0);\n    padding: 0.8em 1em;\n    margin-left: -5px;\n  }\n/* Step List Item Number */\nc3m-step ol li::before {\n      display: block;\n      position: relative;\n      width: 1.5em;\n      height: 1.5em;\n      line-height: 1.5em;\n      font-size: 1.2em;\n      content: counter(step);\n      counter-increment: step;\n      text-align: center;\n      color: var(--text-inv);\n      background-color: var(--n-dark);\n      border-radius: 1.5em;\n      margin: 0 auto 0.6rem;\n      z-index: 2;\n    }\n/* Line of liaison */\nc3m-step ol li::after {\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 5px;\n      top: 1.5em;\n      left: 0;\n      content: \"\";\n      background-color: var(--n-dark);\n      z-index: 1;\n    }\nc3m-step-item:first-child li::after {\n      width: 50%;\n      left:  50%;\n    }\nc3m-step-item:last-child li::after {\n      width: 50%;\n      left: auto;\n      right:  50%;\n    }\n/* PAST STEP */\nc3m-step ol li.past {\n  color: var(--n-dark);\n  background-color: rgba(255,255,255,0);\n}\nc3m-step ol li.past::before {\n    content: \"\";\n    color: var(--text-inv);\n    background: var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat;\n  }\nc3m-step ol li.past::after {\n    background-color: var(--main-color);\n  }\n/* ACTIVE STEP */\nc3m-step ol li.active {}\nc3m-step ol li.active::before {\n    color: var(--text-inv);\n    background-color: var(--main-color);\n  }\nc3m-step ol li.active::after {\n    background-color: var(--n-dark);\n    background-image: linear-gradient(90deg, var(--main-color) 50%, var(--n-dark) 50%);\n  }\n/* FUTURE STEP */\nc3m-step ol li.future {\n  color: var(--n-dark);\n  background-color: var(--n-light);\n}\nc3m-step ol li.future::before {\n    color: var(--n-light);\n    background-color: var(--n-dark);\n  }\n/* BREAKPOINT */\nc3m-step ol.over li {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem;\n}\nc3m-step ol.over li:before {\n    display: inline-block;\n    margin: 0;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zdGVwLXBhZ2Uvc3RlcC9zdGVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGVBQWU7QUFDZjtFQUNFLG9CQUFvQjtDQUNyQjtBQUNDLG9CQUFvQjtBQUNwQjtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0dBQ25CO0FBQ0QsMkJBQTJCO0FBQ3pCO01BQ0UsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGdDQUFnQztNQUNoQyxxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLFdBQVc7S0FDWjtBQUVELHFCQUFxQjtBQUNyQjtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFlBQVk7TUFDWixXQUFXO01BQ1gsUUFBUTtNQUNSLFlBQVk7TUFDWixnQ0FBZ0M7TUFDaEMsV0FBVztLQUNaO0FBRUQ7TUFDRSxXQUFXO01BQ1gsV0FBVztLQUNaO0FBQ0Q7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7S0FDYjtBQUVMLGVBQWU7QUFDZjtFQUNFLHFCQUFxQjtFQUNyQixzQ0FBc0M7Q0FDdkM7QUFDQztJQUNFLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsK0VBQStFO0dBQ2hGO0FBQ0Q7SUFDRSxvQ0FBb0M7R0FDckM7QUFFSCxpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3RCO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9DQUFvQztHQUNyQztBQUNEO0lBQ0UsZ0NBQWdDO0lBQ2hDLG1GQUFtRjtHQUNwRjtBQUVILGlCQUFpQjtBQUNqQjtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7Q0FDbEM7QUFDQztJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7R0FDakM7QUFJSCxnQkFBZ0I7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDQztJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0dBQ1giLCJmaWxlIjoic3JjL2FwcC9tYWluL3N0ZXAtcGFnZS9zdGVwL3N0ZXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogU3RlcCBMaXN0ICovXG5jM20tc3RlcCBvbCB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0ZXA7XG59XG4gIC8qIFN0ZXAgTGlzdCBJdGVtICovXG4gIGMzbS1zdGVwIG9sIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xuICAgIHBhZGRpbmc6IDAuOGVtIDFlbTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxuICAvKiBTdGVwIExpc3QgSXRlbSBOdW1iZXIgKi9cbiAgICBjM20tc3RlcCBvbCBsaTo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMC42cmVtO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAvKiBMaW5lIG9mIGxpYWlzb24gKi9cbiAgICBjM20tc3RlcCBvbCBsaTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgdG9wOiAxLjVlbTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgYzNtLXN0ZXAtaXRlbTpmaXJzdC1jaGlsZCBsaTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGxlZnQ6ICA1MCU7XG4gICAgfVxuICAgIGMzbS1zdGVwLWl0ZW06bGFzdC1jaGlsZCBsaTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogIDUwJTtcbiAgICB9XG5cbi8qIFBBU1QgU1RFUCAqL1xuYzNtLXN0ZXAgb2wgbGkucGFzdCB7XG4gIGNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xufVxuICBjM20tc3RlcCBvbCBsaS5wYXN0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY29sb3I6IHZhcigtLXRleHQtaW52KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKSB1cmwoL2Fzc2V0cy9pbWcvc3ByaXRlLnN2ZykgM3B4IC00MjlweCBuby1yZXBlYXQ7XG4gIH1cbiAgYzNtLXN0ZXAgb2wgbGkucGFzdDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG5cbi8qIEFDVElWRSBTVEVQICovXG5jM20tc3RlcCBvbCBsaS5hY3RpdmUge31cbiAgYzNtLXN0ZXAgb2wgbGkuYWN0aXZlOjpiZWZvcmUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIH1cbiAgYzNtLXN0ZXAgb2wgbGkuYWN0aXZlOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLW1haW4tY29sb3IpIDUwJSwgdmFyKC0tbi1kYXJrKSA1MCUpO1xuICB9XG5cbi8qIEZVVFVSRSBTVEVQICovXG5jM20tc3RlcCBvbCBsaS5mdXR1cmUge1xuICBjb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1saWdodCk7XG59XG4gIGMzbS1zdGVwIG9sIGxpLmZ1dHVyZTo6YmVmb3JlIHtcbiAgICBjb2xvcjogdmFyKC0tbi1saWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgfVxuXG5cblxuLyogQlJFQUtQT0lOVCAqL1xuXG5jM20tc3RlcCBvbC5vdmVyIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4gIGMzbS1zdGVwIG9sLm92ZXIgbGk6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/step-page/step/step.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/step-page/step/step.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Items List -->\n<ol #items [ngClass]=\"{over: isOver}\">\n  <ng-content></ng-content>\n</ol>\n"

/***/ }),

/***/ "./src/app/main/step-page/step/step.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/step-page/step/step.component.ts ***!
  \*******************************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StepComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepComponent(cdr) {
        this.cdr = cdr;
        /* VARIABLES */
        this.itemStepTab = [];
        this.itemsStepTabReference = [];
        this.sizeInit = 0;
    }
    /* AFTER VIEW INIT */
    StepComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.itemStepTab.forEach(function (StepItemComponent, index) {
            StepItemComponent.indexStep = index + 1;
            _this.itemsStepTabReference.push(StepItemComponent.reference);
            if (StepItemComponent.isActive) {
                _this.theActiveStepItem = StepItemComponent.indexStep;
            }
        });
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (var i = 0; i < this.itemsStepTabReference.length - 1; i++) {
            this.sizeInit = this.itemsStepTabReference[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop !== this.itemsStepTabReference[0].nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* AFTER VIEW CHECK */
    StepComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        /* For Each items */
        this.itemStepTab.forEach(function (StepItemComponent, index) {
            /* if after the active item, add class future */
            if (index + 1 > _this.theActiveStepItem) {
                StepItemComponent.Future = true;
            }
            else {
                StepItemComponent.Future = false;
            }
            /* if before the active item, add class past */
            if (index + 1 < _this.theActiveStepItem) {
                StepItemComponent.Past = true;
            }
            else {
                StepItemComponent.Past = false;
            }
        });
    };
    /* Resize breakpoint tab*/
    StepComponent.prototype.onResize = function (event) {
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop > this.itemsStepTabReference[0].nativeElement.offsetTop) {
            if ((this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop > this.itemsStepTabReference[0].nativeElement.offsetTop) && (this.isOver !== true)) {
                this.widthBreak = event.target.innerWidth;
                this.isOver = true;
            }
            if (this.widthBreak) {
                if ((event.target.innerWidth > this.widthBreak) && (this.isOver === true)) {
                    this.isOver = false;
                }
            }
            else {
                this.widthBreak = this.sizeInit;
                if (event.target.innerWidth >= this.widthBreak) {
                    this.isOver = false;
                }
            }
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* ADD AN ITEM INTO ITEMS TAB */
    StepComponent.prototype.addTab = function (stepItem) {
        stepItem.isActive = false; // And set isActive var to False
        this.itemStepTab.push(stepItem);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], StepComponent.prototype, "onResize", null);
    StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-step',
            template: __webpack_require__(/*! ./step.component.html */ "./src/app/main/step-page/step/step.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./step.component.css */ "./src/app/main/step-page/step/step.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "./src/app/main/table-page/table-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGFibGUtcGFnZS90YWJsZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/table-page/table-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE TABLE COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Table</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"table\">Responsive row</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION TABLE COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"table\">\n    <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Responsive | Row Table\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/table\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n          <span>Github</span></a>\n    </h3>\n\n    <div class=\"explain\">\n      <p>A fully responsive table suitable for when it makes sense to consult rows independently.</p>\n      <p>Please, note that this component uses <code>max-width</code> breakpoint; this makes the \"transformation\"\n        of the data easier and less verbose.</p>\n    </div>\n\n    <div class=\"demo\">\n        <!-- TABLE DEMO -->\n        <c3m-column-table></c3m-column-table>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>title class</dt>\n        <dd>Necessary to make the table responsive</dd>\n      </dl>\n      <dl>\n        <dt>col scope</dt>\n        <dd>Necessary to make the table responsive</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-column-table&#x3E;&#x3C;/c3m-column-table&#x3E;\n          </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"CSS\">\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"TypeScript\">\n      </c3m-tab>\n    </c3m-tabs>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/table-page/table-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.ts ***!
  \*********************************************************/
/*! exports provided: TablePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageComponent", function() { return TablePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var TablePageComponent = /** @class */ (function () {
    function TablePageComponent(app) {
        this.app = app;
    }
    TablePageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    TablePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-table-page',
            template: __webpack_require__(/*! ./table-page.component.html */ "./src/app/main/table-page/table-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./table-page.component.css */ "./src/app/main/table-page/table-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], TablePageComponent);
    return TablePageComponent;
}());



/***/ }),

/***/ "./src/app/main/table-page/table-swipe/table-swipe.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/table-page/table-swipe/table-swipe.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGFibGUtcGFnZS90YWJsZS1zd2lwZS90YWJsZS1zd2lwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/table-page/table-swipe/table-swipe.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/table-page/table-swipe/table-swipe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-swipe-table works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/table-page/table-swipe/table-swipe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/table-page/table-swipe/table-swipe.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageSwipeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSwipeTableComponent", function() { return PageSwipeTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageSwipeTableComponent = /** @class */ (function () {
    function PageSwipeTableComponent() {
    }
    PageSwipeTableComponent.prototype.ngOnInit = function () {
    };
    PageSwipeTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-page-swipe-table',
            template: __webpack_require__(/*! ./table-swipe.component.html */ "./src/app/main/table-page/table-swipe/table-swipe.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./table-swipe.component.css */ "./src/app/main/table-page/table-swipe/table-swipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageSwipeTableComponent);
    return PageSwipeTableComponent;
}());



/***/ }),

/***/ "./src/app/main/table-page/table-toggle/table-toggle.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/table-page/table-toggle/table-toggle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGFibGUtcGFnZS90YWJsZS10b2dnbGUvdGFibGUtdG9nZ2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/table-page/table-toggle/table-toggle.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/table-page/table-toggle/table-toggle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  toggle-table works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/table-page/table-toggle/table-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/table-page/table-toggle/table-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTableComponent", function() { return ToggleTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleTableComponent = /** @class */ (function () {
    function ToggleTableComponent() {
    }
    ToggleTableComponent.prototype.ngOnInit = function () {
    };
    ToggleTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-toggle-table',
            template: __webpack_require__(/*! ./table-toggle.component.html */ "./src/app/main/table-page/table-toggle/table-toggle.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./table-toggle.component.css */ "./src/app/main/table-page/table-toggle/table-toggle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleTableComponent);
    return ToggleTableComponent;
}());



/***/ }),

/***/ "./src/app/main/table-page/table/table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/table-page/table/table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-column-table table {\n  width: 100%;\n  text-align: left;\n  border: 1px solid #FFF;\n}\nc3m-column-table caption {\n    font: 1.3em \"quicksandregular\", Helvetica, Arial, sans-serif;\n    text-align: left;\n    color: #1b1b1f;\n    margin-bottom: 0.6rem;\n}\nc3m-column-table thead th {\n  color: #333;\n  background-color: rgb(237, 156, 32);\n  padding: 1rem 0.4rem;\n  border: 1px solid #423E3E;\n}\nc3m-column-table tbody td {\n  color: #333;\n  background-color: #44ABBC;\n  padding: 1rem 0.4rem;\n  border: 1px solid #333;\n}\nc3m-column-table tbody strong {display:none;}\nc3m-column-table tfoot td {\n    color: #FFF;\n    background-color: #565658;\n    padding: 1rem 0.4rem;\n    border: 1px solid #423E3E;\n}\n@media screen and (max-width: 1000px){\n\n    c3m-column-table table {\n      display: block;\n      width: 100%;\n      background-color: #44ABBC;\n      padding: 0.5rem;\n      border-radius: 0.3em;\n      border: none;\n    }\n    c3m-column-table tbody {display: block;}\n    c3m-column-table thead {display:none;}\n\n      c3m-column-table tbody tr {\n          display: block;\n          margin-bottom: 2rem;\n      }\n          c3m-column-table tbody tr td {\n            display: block;\n            width: 100%;\n            color: #eaeaea;\n            background-color: initial;\n            padding: 0.3rem 0.4rem;\n            border: none;\n            border-bottom: 1px solid #FFF;\n          }\n          c3m-column-table tbody strong {\n              display: inline-block;\n              width: 6em;\n              color: rgb(245, 245, 245);\n          }\n          c3m-column-table tbody span {display: inline-block;}\n\n          c3m-column-table caption {\n            display: block;\n            width: 100%;\n            font-size: 1.5rem;\n            color: #FFF;\n          }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90YWJsZS1wYWdlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtDQUN4QjtBQUNEO0lBQ0ksNkRBQTZEO0lBQzdELGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHVCQUF1QjtDQUN4QjtBQUNBLCtCQUErQixhQUFhLENBQUM7QUFDOUM7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEI7Q0FDN0I7QUFFRDs7SUFFSTtNQUNFLGVBQWU7TUFDZixZQUFZO01BQ1osMEJBQTBCO01BQzFCLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIsYUFBYTtLQUNkO0lBQ0Qsd0JBQXdCLGVBQWUsQ0FBQztJQUN4Qyx3QkFBd0IsYUFBYSxDQUFDOztNQUVwQztVQUNJLGVBQWU7VUFDZixvQkFBb0I7T0FDdkI7VUFDRztZQUNFLGVBQWU7WUFDZixZQUFZO1lBQ1osZUFBZTtZQUNmLDBCQUEwQjtZQUMxQix1QkFBdUI7WUFDdkIsYUFBYTtZQUNiLDhCQUE4QjtXQUMvQjtVQUNEO2NBQ0ksc0JBQXNCO2NBQ3RCLFdBQVc7Y0FDWCwwQkFBMEI7V0FDN0I7VUFDRCw2QkFBNkIsc0JBQXNCLENBQUM7O1VBRXBEO1lBQ0UsZUFBZTtZQUNmLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsWUFBWTtXQUNiOztDQUVWIiwiZmlsZSI6InNyYy9hcHAvbWFpbi90YWJsZS1wYWdlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tY29sdW1uLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG59XG5jM20tY29sdW1uLXRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQ6IDEuM2VtIFwicXVpY2tzYW5kcmVndWxhclwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMxYjFiMWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuYzNtLWNvbHVtbi10YWJsZSB0aGVhZCB0aCB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAxNTYsIDMyKTtcbiAgcGFkZGluZzogMXJlbSAwLjRyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MjNFM0U7XG59XG5jM20tY29sdW1uLXRhYmxlIHRib2R5IHRkIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NEFCQkM7XG4gIHBhZGRpbmc6IDFyZW0gMC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuIGMzbS1jb2x1bW4tdGFibGUgdGJvZHkgc3Ryb25nIHtkaXNwbGF5Om5vbmU7fVxuYzNtLWNvbHVtbi10YWJsZSB0Zm9vdCB0ZCB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1ODtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDIzRTNFO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xuXG4gICAgYzNtLWNvbHVtbi10YWJsZSB0YWJsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0QUJCQztcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBjM20tY29sdW1uLXRhYmxlIHRib2R5IHtkaXNwbGF5OiBibG9jazt9XG4gICAgYzNtLWNvbHVtbi10YWJsZSB0aGVhZCB7ZGlzcGxheTpub25lO31cblxuICAgICAgYzNtLWNvbHVtbi10YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgICAgICBjM20tY29sdW1uLXRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogI2VhZWFlYTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC40cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMzbS1jb2x1bW4tdGFibGUgdGJvZHkgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogNmVtO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjM20tY29sdW1uLXRhYmxlIHRib2R5IHNwYW4ge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XG5cbiAgICAgICAgICBjM20tY29sdW1uLXRhYmxlIGNhcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/table-page/table/table.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/table-page/table/table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <caption> Responsive Table </caption>\n    <thead>\n    <tr>\n      <th scope=\"col\">Movie Title</th>\n      <th scope=\"col\">Time</th>\n      <th scope=\"col\">Year</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Country</th>\n    </tr>\n    </thead>\n\n    <tbody>\n        <tr>\n          <td class=\"title\"><span>Inception</span></td>\n          <td><span>148</span></td>\n          <td> <span>2010</span></td>\n          <td><span>SF</span></td>\n          <td><span>UK</span></td>\n        </tr>\n        <tr>\n          <td class=\"title\"> <span>The dark knight</span></td>\n          <td><span>164</span></td>\n          <td><span>2012</span></td>\n          <td><span>SH</span></td>\n          <td><span>USA/UK</span></td>\n        </tr>\n        <tr>\n          <td class=\"title\"><span>Pulp Fiction</span></td>\n          <td><span>154</span></td>\n          <td><span>1994</span></td>\n          <td><span>Gangster</span></td>\n          <td><span>USA</span></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/main/table-page/table/table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/table-page/table/table.component.ts ***!
  \**********************************************************/
/*! exports provided: ColumnTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTableComponent", function() { return ColumnTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColumnTableComponent = /** @class */ (function () {
    function ColumnTableComponent() {
    }
    ColumnTableComponent.prototype.ngAfterViewInit = function () {
        var heads = document.querySelectorAll('thead th');
        var titles = [];
        for (var x = 0; x < heads.length; x++) {
            titles.push(heads[x].innerHTML);
        }
        var bodyTr = document.querySelectorAll('tbody tr');
        for (var i = 0; i < bodyTr.length; i++) {
            var bodyTrTd = bodyTr[i].querySelectorAll('td');
            for (var j = 0; j < bodyTrTd.length; j++) {
                var strong = document.createElement('strong');
                var title = document.createTextNode(titles[j]);
                strong.appendChild(title);
                bodyTrTd[j].insertBefore(strong, bodyTrTd[j].childNodes[0]);
            }
        }
    };
    ColumnTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-column-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/main/table-page/table/table.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/main/table-page/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColumnTableComponent);
    return ColumnTableComponent;
}());



/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-tabs.presentationTabV .tabsContainer {margin: 0;}\n\nc3m-tabs.presentationTabV > div div.content[aria-hidden=\"false\"] {\n  border: 1px solid var(--main-color);\n}\n\n@media screen and (min-width:850px) {\n\n  /*c3m-tabs.presentationTabV > div {margin-bottom: 2.5rem;}\n    c3m-tabs.presentationTabV > div div.content[aria-hidden=\"false\"] {\n      font-size:1rem;\n    }\n      c3m-tabs.presentationTabV > div > ul > li > a {\n        font-size: 1.3rem;\n      }*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90YWJzLXBhZ2UvdGFicy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDLFVBQVUsQ0FBQzs7QUFFckQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBR0Q7O0VBRUU7Ozs7OztTQU1PO0NBQ1IiLCJmaWxlIjoic3JjL2FwcC9tYWluL3RhYnMtcGFnZS90YWJzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS10YWJzLnByZXNlbnRhdGlvblRhYlYgLnRhYnNDb250YWluZXIge21hcmdpbjogMDt9XG5cbmMzbS10YWJzLnByZXNlbnRhdGlvblRhYlYgPiBkaXYgZGl2LmNvbnRlbnRbYXJpYS1oaWRkZW49XCJmYWxzZVwiXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODUwcHgpIHtcblxuICAvKmMzbS10YWJzLnByZXNlbnRhdGlvblRhYlYgPiBkaXYge21hcmdpbi1ib3R0b206IDIuNXJlbTt9XG4gICAgYzNtLXRhYnMucHJlc2VudGF0aW9uVGFiViA+IGRpdiBkaXYuY29udGVudFthcmlhLWhpZGRlbj1cImZhbHNlXCJdIHtcbiAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAgIGMzbS10YWJzLnByZXNlbnRhdGlvblRhYlYgPiBkaXYgPiB1bCA+IGxpID4gYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgfSovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- TITLE TABS COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2> <strong> Tabs </strong> Component </h2>\n  <ul>\n    <li><a href=\"#tabs\">Normal Tabs</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION TABS COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"tabs\">\n\n      <h3>\n          <svg>\n            <use xlink:href=\"#gitListItem\"></use>\n          </svg>\n          Normal Tabs\n\n          <a href=\"https://github.com/CreamNG/Components/tree/master/tabs\" class=\"gitBtn\" target=\"_blank\">\n            <svg>\n              <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n            </svg>\n\n            <span>Github</span></a>\n        </h3>\n    <p>The tab component is composed by two different components: one\n      for the tab container (<code>TabsComponent</code>) and the other one for the tab content (<code>TabComponent</code>).</p>\n\n\n    <div class=\"demo\">\n      <!-- TABS DEMO -->\n      <c3m-tabs class=\"presentationTabV\">\n        <c3m-tab tabTitle=\"Title1\">\n          Content 1\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title2\">\n          Content 2\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title3\">\n          Content 3\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title4\">\n          Content 4\n        </c3m-tab>\n      </c3m-tabs>\n    </div>\n    <div class=\"explain\">\n      <dl>\n        <dt>tabTitle</dt>\n        <dd>title of the tab</dd>\n      </dl>\n      <dl>\n        <dt>Content text</dt>\n        <dd>Content of the tab (ng-content)</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\"> To call the component </p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n              <code>\n                  &#x3C;c3m-tabs &#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title1&#x22;&#x3E;\n                          Content 1\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title2&#x22;&#x3E;\n                          Content 2\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title3&#x22;&#x3E;\n                          Content 3\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title4&#x22;&#x3E;\n                          Content 4\n                      &#x3C;/c3m-tab&#x3E;\n                  &#x3C;/c3m-tabs&#x3E;\n              </code>\n            </pre>\n        </div>\n\n      <!--  <p class=\"pre-code\"> For <strong>tabs.component.html</strong> </p>\n        <div class=\"code\">-->\n            <!--?prettify lang=html linenums=true?-->\n            <!--<pre class=\"prettyprint linenums\">\n              <code>\n                  &#x3C;div class=&#x22;tabsContainer&#x22;&#x3E;\n                    &#x3C;ul&#x3E;\n                          &#x3C;li #tabs *ngFor=&#x22;let tab of tabs&#x22;\n                              (click)=&#x22;selectTab(tab)&#x22;\n                              [ngClass]=&#x22;&#123;active: tab.isActive, over: isOver&#125;&#x22;\n                              [attr.aria-expanded]=&#x22;tab.isActive&#x22;\n                              [attr.aria-controls]=&#x22;tab.panelID&#x22;\n                              [attr.aria-selected]=&#x22;tab.isActive&#x22;\n                              id= &#123; &#123; tab.tabID &#125; &#125; &#x3E;\n\n                            &#x3C;button &#x3E; &#123; &#123; tab.tabTitle &#125;&#125; &#x3C;/button&#x3E;\n                          &#x3C;/li&#x3E;\n                    &#x3C;/ul&#x3E;\n\n                    &#x3C;ng-content&#x3E; &#x3C;/ng-content&#x3E;\n                  &#x3C;/div&#x3E;\n              </code>\n            </pre>\n        </div>\n          <p class=\"pre-code\"> For <strong>tab.component.html</strong> </p>\n        <div class=\"code\">-->\n            <!--?prettify lang=html linenums=true?-->\n            <!--<pre class=\"prettyprint linenums\">\n              <code>\n                      &#x3C;div class=&#x22;content&#x22;\n                            [attr.aria-hidden]=&#x22;!isActive&#x22;\n                            [attr.aria-labeledby]=&#x22;tabID&#x22;\n                            id= &#123; &#123; panelID &#125;&#125; &#x3E;\n                            &#x3C;ng-content&#x3E;&#x3C;/ng-content&#x3E;\n                      &#x3C;/div&#x3E;\n              </code>\n            </pre>\n        </div>-->\n\n\n      </c3m-tab>\n      <c3m-tab tabTitle=\"CSS\">\n        <!--<div class=\"code\">-->\n              <!--?prettify lang=css linenums=true?-->\n            <!--  <pre class=\"prettyprint linenums\">\n              <code>\n\n                  /* GESTION DES SNIPPETS */\n\n                .tabsContainer &#123;\n                    background-color: transparent;\n                    margin-top: 2rem;\n                    box-shadow: 0px 7px 5px -4px rgba(50, 50, 50, 0.62)\n                   &#125;\n\n                    .tabsContainer ul &#x3E; li &#123;\n                      display: inline-block;\n                      padding: 0 1em;\n                      text-align: center;\n                      font: 0.9rem &#x22;quicksandblack&#x22;;\n                      background-color: rgba(152, 142, 128, 0.31);\n                      margin-right: 0.4rem;\n                     &#125;\n                    .tabsContainer &#x3E; ul &#x3E; li.active &#123;\n                      background-color: rgba(218, 218, 218, 0.68);\n                     &#125;\n\n                    .tabsContainer &#x3E; ul &#x3E; li button  &#123;\n                       padding: 0.5rem 1.3rem;\n                        width: 100%;\n                        background-color: initial;\n                        color:black;\n                        cursor:pointer;\n                        font: 1.1rem \"quicksandlight\";\n                     &#125;\n                        c3m-tab .content[aria-hidden=&#x22;false&#x22;] &#123;\n                          padding: 1rem;\n                          background-color: rgba(218, 218, 218, 0.68);\n                          padding-top: 2.2rem;\n                          font: 1rem &#x22;quicksandlight&#x22;;\n                         &#125;\n                          c3m-tab .content[aria-hidden=&#x22;true&#x22;] &#123;\n                            display: none;\n                           &#125;\n                            .tabsContainer ul &#x3E; li.over &#123;\n                              display:block;\n                              width:100%;\n                              border-bottom: 1px solid white;\n                             &#125;\n\n                @media screen and (min-width:850px) &#123;\n\n                  .tabsContainer &#x3E; ul &#x3E; li &#123;\n                      font-size: 1.2rem;\n\n                     &#125;\n                 &#125;\n\n              </code>\n            </pre>\n        </div>-->\n\n      </c3m-tab>\n      <c3m-tab tabTitle=\"TypeScript\">\n        <!--<p class=\"pre-code\">For <strong>tabs-page.component.ts</strong></p>\n          <div class=\"code\">-->\n              <!--?prettify lang=js linenums=true?-->\n              <!--<pre class=\"prettyprint linenums\">\n                  <code>\n                      import &#123; Component, ViewEncapsulation, Input, ElementRef, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef, HostListener &#125; from &#x27;@angular/core&#x27;;\n                      import &#123; TabComponent &#125; from &#x27;./tab/tab.component&#x27;;\n\n                      @Component(&#123;\n                        selector: &#x27;-tabs&#x27;,\n                        templateUrl: &#x27;./tabs.component.html&#x27;,\n                        styleUrls: [&#x27;./tabs.component.css&#x27;],\n                        encapsulation: ViewEncapsulation.None\n                      &#125;)\n                      export class TabsComponent implements AfterViewInit &#123;\n\n                        @ViewChildren(&#x27;tabs&#x27;) tabsElement: QueryList&#x3C;ElementRef&#x3E;;\n\n                        tabs: TabComponent[] = [];\n                        isOver: boolean;\n                        widthBreak: number;\n                        sizeInit = 0;\n                        arrayTmp: ElementRef[] = [];\n\n                        /* Managing resize for tab breakpoint */\n                        @HostListener(&#x27;window:resize&#x27;, [&#x27;$event&#x27;])\n                        onResize(event) &#123;\n                          if ( this.tabsElement.last.nativeElement.offsetTop &#x3E; this.tabsElement.first.nativeElement.offsetTop ) &#123;\n\n                                    if ( (this.tabsElement.last.nativeElement.offsetTop &#x3E; this.tabsElement.first.nativeElement.offsetTop) &#x26;&#x26;  (this.isOver !== true) ) &#123;\n                                        this.widthBreak = event.target.innerWidth;\n                                        this.isOver = true;\n                                    &#125;\n\n                                    if (this.widthBreak) &#123;\n                                          if ( (event.target.innerWidth &#x3E; this.widthBreak) &#x26;&#x26; (this.isOver === true) ) &#123;\n                                          this.isOver = false;\n                                          &#125;\n\n                                    &#125; else &#123;\n                                          this.widthBreak = this.sizeInit;\n                                            if ( event.target.innerWidth &#x3E;= this.widthBreak ) &#123;\n                                              this.isOver = false;\n                                            &#125;\n                                    &#125;\n                          &#125; else &#123;\n                            this.isOver = false;\n                          &#125;\n                          this.cdr.detectChanges();\n                        &#125;\n\n                        /* Adding a Tab to the Tab Table and Selecting the Current Tab */\n                        addTab(tab: TabComponent) &#123;\n                          if (this.tabs.length === 0) &#123;\n                            tab.isActive = true;\n                          &#125;\n                          this.tabs.push(tab);\n                        &#125;\n\n                        /* Closing tabs and opening the current Tab */\n                        selectTab(tab: TabComponent) &#123;\n                          this.tabs.forEach((TabComponent) =&#x3E; &#123;\n                            TabComponent.isActive = false;\n                          &#125;);\n                          tab.isActive = true;\n                          &#125;\n\n                        /* Tab breakpoint management */\n                        ngAfterViewInit(): void &#123;\n\n                          this.arrayTmp = this.tabsElement.toArray();\n                          for ( let i = 0; i &#x3C; this.arrayTmp.length - 1; i ++ ) &#123;\n                              this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;\n                          &#125;\n\n                          if ( this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop ) &#123;\n                            this.isOver = true;\n                          &#125; else &#123;\n                            this.isOver = false;\n                          &#125;\n                            this.cdr.detectChanges();\n                        &#125;\n\n\n                        /* Constructor */\n                        constructor(private cdr: ChangeDetectorRef) &#123;\n                        &#125;\n\n                      &#125;\n\n\n                </code>\n              </pre>\n          </div>\n\n          <p class=\"pre-code\">For <strong>tab-page.component.ts</strong></p>\n          <div class=\"code\">-->\n             <!--?prettify lang=js linenums=true?-->\n                        <!--<pre class=\"prettyprint linenums\">\n                          <code>\n                                import &#123; Component, OnInit, ViewEncapsulation, Input, AfterViewInit&#125; from &#x27;@angular/core&#x27;;\n                                import &#123; TabsComponent &#125; from &#x27;../tabs.component&#x27;;\n                                import &#123; AppComponent &#125; from &#x27;../../../../app.component&#x27;;\n\n                                @Component(&#123;\n                                  selector: &#x27;c3m-tab&#x27;,\n                                  templateUrl: &#x27;./tab.component.html&#x27;,\n                                  styleUrls: [&#x27;./tab.component.css&#x27;],\n                                  encapsulation: ViewEncapsulation.None\n                                &#125;)\n                                export class TabComponent implements OnInit, AfterViewInit &#123;\n\n                                  @Input() tabTitle;\n                                  @Input() isActive: boolean;\n                                  @Input() idTab: number;\n                                  tabID: string;\n                                  panelID: string;\n\n                                  constructor(tabs: TabsComponent, : AppComponent) &#123;\n                                    tabs.addTab(this);\n                                    this.idTab = app.randomID();\n                                  &#125;\n\n                                  ngOnInit() &#123;\n                                    this.tabID = &#x27;tab&#x27; + this.idTab;\n                                    this.panelID = &#x27;panel&#x27; + this.idTab;\n                                  &#125;\n\n                                  ngAfterViewInit() &#123;\n                                    this.tabID = &#x27;tab&#x27; + this.idTab;\n                                    this.panelID = &#x27;panel&#x27; + this.idTab;\n\n                                  &#125;\n                                &#125;\n                          </code>\n                        </pre>\n          </div>\n\n          <p class=\"pre-code\">It's the <strong> Random Function </strong> that generates id automatically for \"aria\" and \"id\" attributes <strong> in the AppComponent </strong> for example</p>\n          <div class=\"code\">-->\n             <!--?prettify lang=js linenums=true?-->\n              <!--<pre class=\"prettyprint linenums\">\n                    <code>\n                        public randomID() &#123;\n                          const idRandom = Math.round(Math.random() * (20000 - 1) + 1);\n                          return idRandom;\n                        &#125;\n                    </code>\n              </pre>\n          </div>-->\n      </c3m-tab>\n    </c3m-tabs>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageComponent", function() { return TabsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var TabsPageComponent = /** @class */ (function () {
    function TabsPageComponent(app) {
        this.app = app;
    }
    TabsPageComponent.prototype.ngOnInit = function () {
        var subComp = ['tabs-item'];
        this.app.codeSnippets(subComp);
    };
    TabsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-page',
            template: __webpack_require__(/*! ./tabs-page.component.html */ "./src/app/main/tabs-page/tabs-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tabs-page.component.css */ "./src/app/main/tabs-page/tabs-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], TabsPageComponent);
    return TabsPageComponent;
}());



/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGFicy1wYWdlL3RhYnMvdGFicy1pdGVtL3RhYnMtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"content\"\n      [attr.aria-hidden]=\"!isActive\"\n      [attr.aria-labeledby]=\"tabID\"\n      id={{panelID}}>\n      <ng-content></ng-content>\n </div>\n"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs.component */ "./src/app/main/tabs-page/tabs/tabs.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");




var TabComponent = /** @class */ (function () {
    /* Constructor Tab Component */
    function TabComponent(tabs, app) {
        tabs.addTab(this);
        this.idTab = app.randomID();
    }
    /* ID for Accessbility */
    TabComponent.prototype.ngOnInit = function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    /* ID for Accessbility */
    TabComponent.prototype.ngAfterViewInit = function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "tabTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TabComponent.prototype, "isActive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TabComponent.prototype, "idTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TabComponent.prototype, "isDisabled", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-tab',
            template: __webpack_require__(/*! ./tabs-item.component.html */ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tabs-item.component.css */ "./src/app/main/tabs-page/tabs/tabs-item/tabs-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* SNIPPETS */\n\n.tabsContainer {\n  background-color: transparent;\n  margin: 2rem 0;\n}\n\n.tabsContainer > ul li button {\n    width: 100%;\n    font-family: var(--stack-b);\n    text-align: left;\n    background-color: var(--n-light);\n    padding: 0.5em 1em;\n  }\n\n.tabsContainer > ul li.active button,\n    .tabsContainer > ul li button:hover,\n      .tabsContainer > ul li button:focus {\n        color: var(--text-inv);\n        background-color: var(--main-color);\n  }\n\nc3m-tab .content[aria-hidden=\"false\"] {\n  background-color: var(--n-light);\n  padding: 1rem;\n}\n\nc3m-tab .content[aria-hidden=\"true\"] {\n  display: none;\n}\n\n/* When space is not enough ... */\n\n.tabsContainer > ul li.over {display: inline-block; margin-right: 0.5rem;}\n\n.tabsContainer > ul li.over button {\n  background-color: var(--body-bg);\n  border-radius: 0;\n}\n\n.tabsContainer > ul li.over.active button,\n  .tabsContainer > ul li.over button:hover,\n    .tabsContainer > ul li.over button:focus {\n      color: var(--body-text);\n      background-color: var(--n-light);\n}\n\n@media screen and (min-width: 850px) {\n  .tabsContainer > ul li {font-size: 1.2rem;}\n  c3m-tab .content[aria-hidden=\"false\"] {\n    padding: 2rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90YWJzLXBhZ2UvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0NBQ2hCOztBQUVDO0lBQ0UsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtHQUNwQjs7QUFDRDs7O1FBR00sdUJBQXVCO1FBQ3ZCLG9DQUFvQztHQUN6Qzs7QUFFSDtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQsa0NBQWtDOztBQUNsQyw2QkFBNkIsc0JBQXNCLENBQUMscUJBQXFCLENBQUM7O0FBRTFFO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtDQUNsQjs7QUFDRDs7O01BR00sd0JBQXdCO01BQ3hCLGlDQUFpQztDQUN0Qzs7QUFFRDtFQUNFLHdCQUF3QixrQkFBa0IsQ0FBQztFQUMzQztJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi90YWJzLXBhZ2UvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTTklQUEVUUyAqL1xuXG4udGFic0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuICAudGFic0NvbnRhaW5lciA+IHVsIGxpIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXN0YWNrLWIpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1saWdodCk7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gIC50YWJzQ29udGFpbmVyID4gdWwgbGkuYWN0aXZlIGJ1dHRvbixcbiAgICAudGFic0NvbnRhaW5lciA+IHVsIGxpIGJ1dHRvbjpob3ZlcixcbiAgICAgIC50YWJzQ29udGFpbmVyID4gdWwgbGkgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtaW52KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIH1cblxuYzNtLXRhYiAuY29udGVudFthcmlhLWhpZGRlbj1cImZhbHNlXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1saWdodCk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmMzbS10YWIgLmNvbnRlbnRbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogV2hlbiBzcGFjZSBpcyBub3QgZW5vdWdoIC4uLiAqL1xuLnRhYnNDb250YWluZXIgPiB1bCBsaS5vdmVyIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi1yaWdodDogMC41cmVtO31cblxuLnRhYnNDb250YWluZXIgPiB1bCBsaS5vdmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcpO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnRhYnNDb250YWluZXIgPiB1bCBsaS5vdmVyLmFjdGl2ZSBidXR0b24sXG4gIC50YWJzQ29udGFpbmVyID4gdWwgbGkub3ZlciBidXR0b246aG92ZXIsXG4gICAgLnRhYnNDb250YWluZXIgPiB1bCBsaS5vdmVyIGJ1dHRvbjpmb2N1cyB7XG4gICAgICBjb2xvcjogdmFyKC0tYm9keS10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tbGlnaHQpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAudGFic0NvbnRhaW5lciA+IHVsIGxpIHtmb250LXNpemU6IDEuMnJlbTt9XG4gIGMzbS10YWIgLmNvbnRlbnRbYXJpYS1oaWRkZW49XCJmYWxzZVwiXSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabsContainer\">\n  <ul>\n        <li #tabs *ngFor=\"let tab of tabs\"\n            [ngClass]=\"{active: tab.isActive, over: isOver, disabled: isDisabled}\">\n\n          <button\n            id={{tab.tabID}}\n            (click)=\"selectTab(tab)\"\n            [attr.aria-expanded]=\"tab.isActive\"\n            [attr.aria-controls]=\"tab.panelID\"\n            [attr.aria-selected]=\"tab.isActive\">{{ tab.tabTitle }}</button>\n        </li>\n  </ul>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs/tabs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/tabs-page/tabs/tabs.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    /* constructor tab */
    function TabsComponent(cdr) {
        this.cdr = cdr;
        /* Variables */
        this.tabs = [];
        this.sizeInit = 0;
        this.arrayTmp = [];
        this.startIndexActiv = 0;
    }
    /* Resize breakpoint tab */
    TabsComponent.prototype.onResize = function (event) {
        if (this.tabsElement.last.nativeElement.offsetTop > this.tabsElement.first.nativeElement.offsetTop) {
            if ((this.tabsElement.last.nativeElement.offsetTop > this.tabsElement.first.nativeElement.offsetTop) && (this.isOver !== true)) {
                this.widthBreak = event.target.innerWidth;
                this.isOver = true;
            }
            if (this.widthBreak) {
                if ((event.target.innerWidth > this.widthBreak) && (this.isOver === true)) {
                    this.isOver = false;
                }
            }
            else {
                this.widthBreak = this.sizeInit;
                if (event.target.innerWidth >= this.widthBreak) {
                    this.isOver = false;
                }
            }
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* add tab to tab table and select tab active */
    TabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === this.startIndexActiv) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    };
    /* close tabs et open the active tab */
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (TabComponent) {
            TabComponent.isActive = false;
        });
        tab.isActive = true;
    };
    /* breakpoint tab */
    TabsComponent.prototype.ngAfterViewInit = function () {
        this.arrayTmp = this.tabsElement.toArray();
        for (var i = 0; i < this.arrayTmp.length - 1; i++) {
            this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('tabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TabsComponent.prototype, "tabsElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TabsComponent.prototype, "onResize", null);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/main/tabs-page/tabs/tabs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/main/tabs-page/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdG9hc3QtcGFnZS90b2FzdC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE TOAST COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2>\n    <strong> Toast </strong> Component </h2>\n  <ul>\n    <li>\n      <a href=\"#toast\">Floating Toast</a>\n    </li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION TOAST COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"toast\">\n\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Floating Toast\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/toast\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span>\n      </a>\n    </h3>\n    <p>A toast appears course moment ion the interface and disappears </p>\n    <p>Change the <strong>active</strong> value with a click event (use <code>ViewChild</code> on <code>#Toast)</code></p>\n\n\n    <div class=\"demo\">\n      <c3m-button (click)=\"openToast()\" ngClass=\"info\"> Display Toast </c3m-button>\n      <!-- TOAST DEMO -->\n      <c3m-toast #toast delay=\"2500\">\n        I'm a toast !\n      </c3m-toast>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>active</dt>\n        <dd>For displaying the toast </dd>\n      </dl>\n      <dl>\n          <dt>delay</dt>\n          <dd>delay before toast dissapears</dd>\n        </dl>\n\n    </div>\n\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\"> To call the component </p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n              <code>\n  &lt;!-- TOAST DEMO --&gt;\n  &lt;c3m-toast #toast delay=&#34;2500&#34;&gt;\n    I&apos;m a toast !\n  &lt;/c3m-toast&gt;\n              </code>\n            </pre>\n        </div>\n      </c3m-tab>\n      <c3m-tab tabTitle=\"CSS\">\n\n      </c3m-tab>\n      <c3m-tab tabTitle=\"TypeScript\">\n\n      </c3m-tab>\n    </c3m-tabs>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ToastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageComponent", function() { return ToastPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var ToastPageComponent = /** @class */ (function () {
    function ToastPageComponent(app) {
        this.app = app;
    }
    ToastPageComponent.prototype.openToast = function () {
        console.log(this.toast);
        this.toast.toggle();
    };
    ToastPageComponent.prototype.ngOnInit = function () {
        this.app.codeSnippets('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toast'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToastPageComponent.prototype, "toast", void 0);
    ToastPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-toast-page',
            template: __webpack_require__(/*! ./toast-page.component.html */ "./src/app/main/toast-page/toast-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./toast-page.component.css */ "./src/app/main/toast-page/toast-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ToastPageComponent);
    return ToastPageComponent;
}());



/***/ }),

/***/ "./src/app/main/toast-page/toast/toast.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/toast-page/toast/toast.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Toast */\nc3m-toast p{\n  position: fixed;\n  right: 1rem;\n  transition: bottom 2s cubic-bezier(0.43, 1.18, 0.99, 0.98);\n  padding: 0.5rem 1rem;\n  background-color: #d769a8;\n  color: white;\n  border-radius: 3px;\n}\n/* Before Appears */\nc3m-toast p.inactive{\n  bottom: 110%;\n  transition: bottom 0.1s;\n}\n/* Appears */\nc3m-toast p.active{\n  bottom: 1rem;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90b2FzdC1wYWdlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Qsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtDQUN6QjtBQUVELGFBQWE7QUFDYjtFQUNFLGFBQWE7O0NBRWQiLCJmaWxlIjoic3JjL2FwcC9tYWluL3RvYXN0LXBhZ2UvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRvYXN0ICovXG5jM20tdG9hc3QgcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMXJlbTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDJzIGN1YmljLWJlemllcigwLjQzLCAxLjE4LCAwLjk5LCAwLjk4KTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzY5YTg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLyogQmVmb3JlIEFwcGVhcnMgKi9cbmMzbS10b2FzdCBwLmluYWN0aXZle1xuICBib3R0b206IDExMCU7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzO1xufVxuXG4vKiBBcHBlYXJzICovXG5jM20tdG9hc3QgcC5hY3RpdmV7XG4gIGJvdHRvbTogMXJlbTtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/toast-page/toast/toast.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/toast-page/toast/toast.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toast -->\n<p role=\"alert\" [ngClass]=\"{'active': active, 'inactive': !active}\">\n  <!-- Your Content -->\n  <ng-content></ng-content>\n</p>\n"

/***/ }),

/***/ "./src/app/main/toast-page/toast/toast.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/toast-page/toast/toast.component.ts ***!
  \**********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.active = false;
    }
    ToastComponent.prototype.toggle = function () {
        var _this = this;
        if (this.active === false) {
            this.active = true;
            setTimeout(function () {
                _this.active = false;
            }, this.delay);
        }
    };
    ToastComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ToastComponent.prototype, "delay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToastComponent.prototype, "active", void 0);
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'c3m-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/main/toast-page/toast/toast.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./toast.component.css */ "./src/app/main/toast-page/toast/toast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/module-breadcrumbs.js":
/*!***************************************!*\
  !*** ./src/app/module-breadcrumbs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbsComponent"]; });

/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsService", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsService"]; });

/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts");
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__) if(["BreadcrumbsComponent","BreadcrumbsService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"]; });







/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");





Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_4__["default"])({
    include: 'style',
    onlyLegacy: true,
    watch: true,
    onComplete: function (cssText, styleNode, cssVariables) {
        console.log(cssText);
    }
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/repo/master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map