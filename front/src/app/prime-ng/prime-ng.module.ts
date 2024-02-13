import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ImageModule } from 'primeng/image';
import { AutoFocusModule } from 'primeng/autofocus';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  exports: [
    AutoFocusModule,
    MenubarModule,
    ToolbarModule,
    TimelineModule,
    CardModule,
    DividerModule,
    ButtonModule,
    RadioButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ImageModule
  ]
})
export class PrimeNgModule { }
