import { NgModule } from '@angular/core';
import {FuseIfOnDomDirective} from "./fuse-if-on-dom/fuse-if-on-dom.directive";

@NgModule({
    declarations: [
        FuseIfOnDomDirective
    ],
    imports     : [],
    exports     : [
        FuseIfOnDomDirective
    ]
})
export class FuseDirectivesModule
{
}
