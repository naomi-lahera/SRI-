import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup'; 
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

}
