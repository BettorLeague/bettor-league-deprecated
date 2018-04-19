import { NgModule } from '@angular/core';
import {SafePipe} from "./safe/safe.pipe";

@NgModule({
  declarations: [
    SafePipe
  ],
  exports: [
    SafePipe
  ]
})
export class PipeModule { }
