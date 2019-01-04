import { Component, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonComponent {
    constructor() { }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: "c3m-button",
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button button{color:var(--text-inv);background:var(--main-color)}c3m-button button:hover{opacity:.8}c3m-button.optional button{background-color:var(--n-dark)}c3m-button.submit button{background-color:var(--hot-color)}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonFileComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonIconComponent {
    constructor() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-icon',
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-icon[class*=icon-] button{color:var(--text-inv);background-color:var(--main-color);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem .5rem 2rem}c3m-button-icon button:hover{opacity:.8}.icon-delete button{background-position:.5em 5px}.icon-edit button{background-position:.5em -78px}.icon-download button{background-position:.5em -176px}.icon-add button{background-position:.5em -242px}"]
            }] }
];
/** @nocollapse */
ButtonIconComponent.ctorParameters = () => [];
ButtonIconComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonIconOnlyComponent {
    constructor() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonIconOnlyComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-icon-only',
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=this.class>\n    <!-- ng-content contains the button text -->\n    <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-icon-only{position:relative}c3m-button-icon-only[class*=icon-] button{overflow:hidden;text-indent:-50em;color:var(--text-inv);background-color:var(--n-dark);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem}c3m-button-icon-only button:hover{opacity:.8}span.tooltip{display:none;position:absolute;top:50px;width:8em;height:auto;max-width:8em;overflow-wrap:break-word;font:9px/1 var(--stack-m);text-align:center;color:#fff;background:var(--n-s-dark);padding:.7em 1em;border:1px solid var(--n-s-dark);box-shadow:0 1px 2px rgba(0,0,0,.5);opacity:1;z-index:10000}span.tooltip::before{position:absolute;top:-5px;left:50%;display:block;width:10px;height:10px;content:\"\";background:var(--n-s-dark);margin-left:-5px;border-top:1px solid var(--n-s-dark);border-left:1px solid var(--n-s-dark);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-delete button{background-position:7px 5px}.icon-edit button{background-position:7px -78px}.icon-download button{background-position:7px -176px}.icon-add button{background-position:7px -242px}"]
            }] }
];
/** @nocollapse */
ButtonIconOnlyComponent.ctorParameters = () => [];
ButtonIconOnlyComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonSubmitComponent {
    constructor() { }
}
ButtonSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-submit',
                template: "\n<!-- USE \"Input\" type submit -->\n<input type=\"submit\" value=\"{{ inputValue }}\" />\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-submit input{color:var(--text-inv);background:var(--hot-color);border:none;cursor:pointer}c3m-button-submit input:hover{opacity:.8}"]
            }] }
];
/** @nocollapse */
ButtonSubmitComponent.ctorParameters = () => [];
ButtonSubmitComponent.propDecorators = {
    inputValue: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CreamnglibModule {
}
CreamnglibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent,
                    ButtonFileComponent,
                    ButtonIconComponent,
                    ButtonIconOnlyComponent,
                    ButtonSubmitComponent
                ],
                imports: [BrowserModule],
                exports: [
                    ButtonComponent,
                    ButtonFileComponent,
                    ButtonIconComponent,
                    ButtonIconOnlyComponent,
                    ButtonSubmitComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ButtonComponent, ButtonFileComponent, ButtonIconComponent, ButtonIconOnlyComponent, ButtonSubmitComponent, CreamnglibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYW1uZ2xpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2NyZWFtbmdsaWIvbGliL2J1dHRvbi1maWxlL2J1dHRvbi1maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vY3JlYW1uZ2xpYi9saWIvYnV0dG9uLWljb24vYnV0dG9uLWljb24uY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9idXR0b24taWNvbi1vbmx5L2J1dHRvbi1pY29uLW9ubHkuY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9idXR0b24tc3VibWl0L2J1dHRvbi1zdWJtaXQuY29tcG9uZW50LnRzIiwibmc6Ly9jcmVhbW5nbGliL2xpYi9jcmVhbW5nbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImMzbS1idXR0b25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9idXR0b24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2J1dHRvbi5jb21wb25lbnQuY3NzXCJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWZpbGUuY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmlsZUNvbXBvbmVudCB7XG4gICAgLyogRmlsZSBMaXN0ICovXG4gICAgZmlsZXM6IEZpbGVMaXN0O1xuXG4gICAgLyogT25DaGFuZ2UgbWV0aG9kICovXG4gICAgb25DaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1idXR0b24taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1pY29uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25JY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgLy8gSW5wdXRzXG4gICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWljb24tb25seScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi1vbmx5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWljb24tb25seS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uU3VibWl0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qIElucHV0IFN1Ym1pdCB2YWx1ZSAqL1xuICBASW5wdXQoKSBpbnB1dFZhbHVlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uRmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi1maWxlL2J1dHRvbi1maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uSWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi1pY29uL2J1dHRvbi1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uSWNvbk9ubHlDb21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24taWNvbi1vbmx5L2J1dHRvbi1pY29uLW9ubHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCdXR0b25TdWJtaXRDb21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24tc3VibWl0L2J1dHRvbi1zdWJtaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkZpbGVDb21wb25lbnQsXG4gICAgQnV0dG9uSWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25JY29uT25seUNvbXBvbmVudCxcbiAgICBCdXR0b25TdWJtaXRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkZpbGVDb21wb25lbnQsXG4gICAgQnV0dG9uSWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25JY29uT25seUNvbXBvbmVudCxcbiAgICBCdXR0b25TdWJtaXRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhbW5nbGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BUWEsZUFBZTtJQUMxQixpQkFBZ0I7OztZQVBqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJKQUFzQztnQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7Ozs7Ozs7QUNQRCxNQVFhLG1CQUFtQjs7Ozs7SUFLNUIsUUFBUSxDQUFDLEtBQWU7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7OztZQWJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3YUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7Ozs7OztBQ1BELE1BUWEsbUJBQW1CO0lBSzlCOztRQUZDLGFBQWlCLEVBQUUsQ0FBQztLQUVKOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGtMQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztvQkFJRyxLQUFLOzs7Ozs7O0FDWFQsTUFRYSx1QkFBdUI7SUFLbEM7O1FBRkEsYUFBaUIsRUFBRSxDQUFDO0tBRUo7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7WUFiZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsa0xBQWdEO2dCQUVoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O29CQUlFLEtBQUs7Ozs7Ozs7QUNYUixNQVFhLHFCQUFxQjtJQUVoQyxpQkFBaUI7OztZQVJsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd0dBQTZDO2dCQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O3lCQU1FLEtBQUs7Ozs7Ozs7QUNiUixNQXlCYSxnQkFBZ0I7OztZQWpCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3RCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzsifQ==