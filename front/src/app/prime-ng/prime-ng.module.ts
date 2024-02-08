import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    ToolbarModule,
    TimelineModule,
    CardModule,
    DividerModule
  ]
})
export class PrimeNgModule { }
