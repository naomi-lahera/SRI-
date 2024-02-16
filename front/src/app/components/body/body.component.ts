import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SerachResult } from '../../interfaces/serach-result';
import { CommonModule } from '@angular/common'; 
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  animations: [
    trigger('overlayContentAnimation', [
      state('start', style({ opacity:  0 })),
      state('end', style({ opacity:  1 })),
      transition('start => end', animate('500ms ease-in')),
      transition('end => start', animate('500ms ease-out'))
    ])
  ]
})
export class BodyComponent {
  isLoading = false;
  sources! : string[];

  constructor(private searchService: SearchService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.searchService.get_available_authors().then(result => {
      this.sources = result
    })
    // console.log('result')
    // console.log(this.sources)
  }

  query!: string;
  total = 0;
  selectedSource!: string;
  searchResult: SerachResult
  = 
  {
    base:
    {
      title: "",
      author: "",
      summary: "",
      date: new Date(),
      url: ""
    },
    associated_news: 
  [
      // {
      //   title: "Title  1",
      //   author: "Author  1",
      //   summary: "Summary of the first news item.",
      //   date: new Date("2024-02-08"),
      //   url: "https://example.com/news1"
      // },
      // {
      //   title: "Title  2",
      //   author: "Author  2",
      //   summary: "Summary of the second news item.",
      //   date: new Date( "2024-02-07"),
      //   url: "https://example.com/news2"
      // },
      // {
      //   title: "Title  3",
      //   author: "Author  3",
      //   summary: "Summary of the third news item.",
      //   date: new Date( "2024-02-06"),
      //   url: "https://example.com/news3"
      // },
      // {
      //   title: "Title  4",
      //   author: "Author  4",
      //   summary: "Summary of the fourth news item.",
      //   date: new Date( "2024-02-05"),
      //   url: "https://example.com/news4"
      // },
      // {
      //   title: "Title  5",
      //   author: "Author  5",
      //   summary: "Summary of the fifth news item.",
      //   date: new Date("2024-02-04"),
      //   url: "https://example.com/news5"
      // },
      // {
      //   title: "Title  6",
      //   author: "Author  6",
      //   summary: "Summary of the sixth news item.",
      //   date: new Date("2024-02-03"),
      //   url: "https://example.com/news6"
      // }
    ]
  };

  sourceName(source: string){
    const nameWithoutExtension = source.split('.')[0]; // Quitar la extensión .csv
    const words = nameWithoutExtension.split('_'); // Dividir por '_'
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalizar
    const newFilename = `${formattedWords.join(' ')}`; // Unir y agregar extensión

    console.log(newFilename); // Output: 'Word1 Word2 Word3 .csv'
    return newFilename
  }

  search() {
    this.isLoading = true;
    console.log('url: ', this.query);
    console.log('source: ', this.selectedSource)
    this.searchService.search(this.query, this.selectedSource, this.total).then(result => {
      // console.log('component result:', result);
      this.searchResult = result;
      console.log('base: ', this.searchResult.base)
      this.isLoading = false;
    })
  }

  // monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  blockDocument() {
    this.cd.markForCheck();
  }
}
