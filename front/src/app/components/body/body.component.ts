import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SerachResult } from '../../interfaces/serach-result';
import { CommonModule } from '@angular/common'; 
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  sources : string[] = ['kjs', 'ybhnj'];

  constructor(private searchService: SearchService) { }
  ngOnInit(): void {
    // this.searchService.get_available_authors().then(result => {
    //   this.sources = result
    // })
    // console.log('result')
    // console.log(this.sources)
  }

  query!: string;
  total = 0;
  source!: string;
  searchResult: SerachResult 
  = 
  {
    base:
    {
      title: "Title  1",
      author: "Author  1",
      summary: "Summary of the first news item.",
      date: new Date("2024-02-08"),
      url: "https://example.com/news1"
    },
    associated_news: 
  [
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
  };

  search() {
    // console.log('component searching for:', this.query);
    this.searchService.search(this.query, this.source, this.total).then(result => {
      // console.log('component result:', result);
      this.searchResult = result;
      console.log(this.searchResult.base.date.getDate)
    })
  }

  // monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // formatDate(date: Date): string {
  //   const day = date.getDate();
  //   const month = this.monthNames[date.getMonth() +  1]; // JavaScript months are  0-based
  //   const year = date.getFullYear();
  //   console.log('date:')
  //   console.log(`${month},${day} ${year}`)
  //   return `${month},${day} ${year}`;
  // }
}
