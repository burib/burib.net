import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    NzTimelineModule
  ]
})
export class CvModule { }
