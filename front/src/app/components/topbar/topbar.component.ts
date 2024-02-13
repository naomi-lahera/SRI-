import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup'; 
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CommonModule } from '@angular/common'; 
import { PrimeNgModule } from '../../prime-ng/prime-ng.module'; 

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  search(){}
}
