(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('creamnglib', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global.creamnglib = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,core,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "c3m-button",
                        template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                        encapsulation: core.ViewEncapsulation.None,
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
            { type: core.Component, args: [{
                        selector: 'c3m-button-file',
                        template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n    <li *ngFor=\"let f of files\"><span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only></li>\n</ul>\n",
                        encapsulation: core.ViewEncapsulation.None,
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
            { type: core.Component, args: [{
                        selector: 'c3m-button-icon',
                        template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["c3m-button-icon[class*=icon-] button{color:var(--text-inv);background-color:var(--main-color);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem .5rem 2rem}c3m-button-icon button:hover{opacity:.8}.icon-delete button{background-position:.5em 5px}.icon-edit button{background-position:.5em -78px}.icon-download button{background-position:.5em -176px}.icon-add button{background-position:.5em -242px}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonIconComponent.ctorParameters = function () { return []; };
        ButtonIconComponent.propDecorators = {
            class: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'c3m-button-icon-only',
                        template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["c3m-button-icon-only{position:relative}c3m-button-icon-only[class*=icon-] button{overflow:hidden;text-indent:-50em;color:var(--text-inv);background-color:var(--n-dark);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem}c3m-button-icon-only button:hover{opacity:.8}span.tooltip{display:none;position:absolute;top:50px;width:8em;height:auto;max-width:8em;overflow-wrap:break-word;font:9px/1 var(--stack-m);text-align:center;color:#fff;background:var(--n-s-dark);padding:.7em 1em;border:1px solid var(--n-s-dark);box-shadow:0 1px 2px rgba(0,0,0,.5);opacity:1;z-index:10000}span.tooltip::before{position:absolute;top:-5px;left:50%;display:block;width:10px;height:10px;content:\"\";background:var(--n-s-dark);margin-left:-5px;border-top:1px solid var(--n-s-dark);border-left:1px solid var(--n-s-dark);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-delete button{background-position:7px 5px}.icon-edit button{background-position:7px -78px}.icon-download button{background-position:7px -176px}.icon-add button{background-position:7px -242px}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonIconOnlyComponent.ctorParameters = function () { return []; };
        ButtonIconOnlyComponent.propDecorators = {
            class: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'c3m-button-submit',
                        template: "\n<!-- USE \"Input\" type submit -->\n<input type=\"submit\" value=\"{{ inputValue }}\" />\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["c3m-button-submit input{color:var(--text-inv);background:var(--hot-color);border:none;cursor:pointer}c3m-button-submit input:hover{opacity:.8}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonSubmitComponent.ctorParameters = function () { return []; };
        ButtonSubmitComponent.propDecorators = {
            inputValue: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [
                            ButtonComponent,
                            ButtonFileComponent,
                            ButtonIconComponent,
                            ButtonIconOnlyComponent,
                            ButtonSubmitComponent
                        ],
                        imports: [platformBrowser.BrowserModule],
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

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonFileComponent = ButtonFileComponent;
    exports.ButtonIconComponent = ButtonIconComponent;
    exports.ButtonIconOnlyComponent = ButtonIconOnlyComponent;
    exports.ButtonSubmitComponent = ButtonSubmitComponent;
    exports.CreamnglibModule = CreamnglibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYW1uZ2xpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NyZWFtbmdsaWIvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9idXR0b24tZmlsZS9idXR0b24tZmlsZS5jb21wb25lbnQudHMiLCJuZzovL2NyZWFtbmdsaWIvbGliL2J1dHRvbi1pY29uL2J1dHRvbi1pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uLWljb24tb25seS9idXR0b24taWNvbi1vbmx5LmNvbXBvbmVudC50cyIsIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uLXN1Ym1pdC9idXR0b24tc3VibWl0LmNvbXBvbmVudC50cyIsIm5nOi8vY3JlYW1uZ2xpYi9saWIvY3JlYW1uZ2xpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjM20tYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYnV0dG9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9idXR0b24uY29tcG9uZW50LmNzc1wiXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYzNtLWJ1dHRvbi1maWxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi1maWxlLmNvbXBvbmVudC5jc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZpbGVDb21wb25lbnQge1xuICAgIC8qIEZpbGUgTGlzdCAqL1xuICAgIGZpbGVzOiBGaWxlTGlzdDtcblxuICAgIC8qIE9uQ2hhbmdlIG1ldGhvZCAqL1xuICAgIG9uQ2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24taWNvbi5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIC8vIElucHV0c1xuICAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWJ1dHRvbi1pY29uLW9ubHknLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWljb24tb25seS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1pY29uLW9ubHkuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkljb25Pbmx5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWJ1dHRvbi1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1zdWJtaXQuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblN1Ym1pdENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiBJbnB1dCBTdWJtaXQgdmFsdWUgKi9cbiAgQElucHV0KCkgaW5wdXRWYWx1ZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbkZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24tZmlsZS9idXR0b24tZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbkljb25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24taWNvbi9idXR0b24taWNvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbkljb25Pbmx5Q29tcG9uZW50IH0gZnJvbSBcIi4vYnV0dG9uLWljb24tb25seS9idXR0b24taWNvbi1vbmx5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uU3VibWl0Q29tcG9uZW50IH0gZnJvbSBcIi4vYnV0dG9uLXN1Ym1pdC9idXR0b24tc3VibWl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBCdXR0b25GaWxlQ29tcG9uZW50LFxuICAgIEJ1dHRvbkljb25Db21wb25lbnQsXG4gICAgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQsXG4gICAgQnV0dG9uU3VibWl0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBCdXR0b25GaWxlQ29tcG9uZW50LFxuICAgIEJ1dHRvbkljb25Db21wb25lbnQsXG4gICAgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQsXG4gICAgQnV0dG9uU3VibWl0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYW1uZ2xpYk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkJyb3dzZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFO1NBQWdCOztvQkFQakJBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsMkpBQXNDO3dCQUV0QyxhQUFhLEVBQUVDLHNCQUFpQixDQUFDLElBQUk7O3FCQUN0Qzs7Ozs4QkFQRDs7Ozs7OztBQ0FBOzs7Ozs7OztRQWFJLHNDQUFROzs7O1lBQVIsVUFBUyxLQUFlO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7b0JBYkpELGNBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQix3YUFBMkM7d0JBRTNDLGFBQWEsRUFBRUMsc0JBQWlCLENBQUMsSUFBSTs7cUJBQ3hDOztrQ0FQRDs7Ozs7OztBQ0FBO1FBYUU7O1lBRkMsYUFBaUIsRUFBRSxDQUFDO1NBRUo7Ozs7UUFFakIsc0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGRCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0Isa0xBQTJDO3dCQUUzQyxhQUFhLEVBQUVDLHNCQUFpQixDQUFDLElBQUk7O3FCQUN0Qzs7Ozs7NEJBSUdDLFVBQUs7O2tDQVhUOzs7Ozs7O0FDQUE7UUFhRTs7WUFGQSxhQUFpQixFQUFFLENBQUM7U0FFSjs7OztRQUVoQiwwQ0FBUTs7O1lBQVIsZUFBYTs7b0JBYmRGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxrTEFBZ0Q7d0JBRWhELGFBQWEsRUFBRUMsc0JBQWlCLENBQUMsSUFBSTs7cUJBQ3RDOzs7Ozs0QkFJRUMsVUFBSzs7c0NBWFI7Ozs7Ozs7QUNBQTtRQVVFO1NBQWlCOztvQkFSbEJGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3Qix3R0FBNkM7d0JBRTdDLGFBQWEsRUFBRUMsc0JBQWlCLENBQUMsSUFBSTs7cUJBQ3RDOzs7OztpQ0FNRUMsVUFBSzs7b0NBYlI7Ozs7Ozs7QUNBQTs7OztvQkFRQ0MsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRTs0QkFDWixlQUFlOzRCQUNmLG1CQUFtQjs0QkFDbkIsbUJBQW1COzRCQUNuQix1QkFBdUI7NEJBQ3ZCLHFCQUFxQjt5QkFDdEI7d0JBQ0QsT0FBTyxFQUFFLENBQUNDLDZCQUFhLENBQUM7d0JBQ3hCLE9BQU8sRUFBRTs0QkFDUCxlQUFlOzRCQUNmLG1CQUFtQjs0QkFDbkIsbUJBQW1COzRCQUNuQix1QkFBdUI7NEJBQ3ZCLHFCQUFxQjt5QkFDdEI7cUJBQ0Y7OytCQXhCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==