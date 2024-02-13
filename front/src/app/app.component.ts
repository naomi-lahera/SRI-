import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SerachResult } from './interfaces/serach-result';
import { PrimeNGConfig } from 'primeng/api';
import { BodyComponent } from './components/body/body.component'; 
import { TopbarComponent } from './components/topbar/topbar.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeNgModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BodyComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [
    SearchService,
    MessageService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig, private searchService: SearchService) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  title = 'old_news';

  query!: string;
  total = 0;
  source!: string;
  searchResult!: SerachResult; 

  search() {
    // console.log('component searching for:', this.query);
    this.searchService.search(this.query, this.source, this.total).then(result => {
      // console.log('component result:', result);
      this.searchResult = result;
      // console.log(this.searchResult.base.date.getDate)
    })
  }
}
