import { NgModule } from '@angular/core';
import {FuseIfOnDomDirective} from "./fuse-if-on-dom/fuse-if-on-dom.directive";
import {FusePerfectScrollbarDirective} from "./fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";

@NgModule({
    declarations: [
        FuseIfOnDomDirective,
      FusePerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
      FusePerfectScrollbarDirective,
        FuseIfOnDomDirective
    ]
})
export class FuseDirectivesModule
{
}
