import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { New } from './interfaces/new';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeNgModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchService,
    MessageService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(private searchService: SearchService) { }

  title = 'front';
  query!: string;
  show_news: boolean = true
  news: New[] = [
    {
      title: "Title  1",
      author: "Author  1",
      summary: "Summary of the first news item.",
      date: new Date("2024-02-08"),
      url: "https://example.com/news1"
    },
    {
      title: "Title  2",
      author: "Author  2",
      summary: "Summary of the second news item.",
      date: new Date( "2024-02-07"),
      url: "https://example.com/news2"
    },
    {
      title: "Title  3",
      author: "Author  3",
      summary: "Summary of the third news item.",
      date: new Date( "2024-02-06"),
      url: "https://example.com/news3"
    },
    {
      title: "Title  4",
      author: "Author  4",
      summary: "Summary of the fourth news item.",
      date: new Date( "2024-02-05"),
      url: "https://example.com/news4"
    },
    {
      title: "Title  5",
      author: "Author  5",
      summary: "Summary of the fifth news item.",
      date: new Date("2024-02-04"),
      url: "https://example.com/news5"
    },
    {
      title: "Title  6",
      author: "Author  6",
      summary: "Summary of the sixth news item.",
      date: new Date("2024-02-03"),
      url: "https://example.com/news6"
    }
  ]
  
  search() {
    console.log('component searching for:', this.query);
    this.searchService.search(this.query).subscribe((response: any) => {
      this.news = response.items;
    })
  }
}
