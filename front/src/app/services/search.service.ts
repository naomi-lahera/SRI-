import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { New } from '../interfaces/new';
import { firstValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';
import { SerachResult } from '../interfaces/serach-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:4000';
  constructor(private httpClient: HttpClient,  private messageService: MessageService) { }

  async search(query: string, source: string, total: number) : Promise<SerachResult> {
    // console.log('searching for:', query);
    let params = new HttpParams()
      .set('url', query)
      .set('total', total)
      .set('source', source);

    // params.set('url', query);
    // params.set('total', total);
    // console.log('source')
    // console.log('params')
    // console.log(params.getAll)
    // params.set('source', source)
    
    return await firstValueFrom(this.httpClient.get<SerachResult>(`${this.apiUrl}/api/search`, {params: params})).
      then(response => {
        console.log('result:', response);
        return response as SerachResult;
    })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error ocurred.' });
        return {
          base: { 
            title: '', 
            author: '', 
            summary: '', 
            date: new Date(), 
            url: ''}, 
          associated_news: []
        };
      });
  }

  // async search(query: string): Promise<PageResult<New>> {
  //   const params = new HttpParams();
  //   params.set('query', query);

  //   return await firstValueFrom(this.httpClient.get(`/api/search`, { params: params}))
  //     .then(response => {
  //       return response as PageResult<New>;
  //     })
  //     .catch(() => {
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error ocurred.' });
  //       return {
  //         total: 0, items: []
  //       };
  //     });
  // }

  async get_available_authors() : Promise<string[]> {
    // console.log('searching for:', query);
    let result = await firstValueFrom(this.httpClient.get<string[]>(`${this.apiUrl}/api/get_sources`)).
      then(response => {
        return response as string[];
    });
    // console.log('result:', result);
    return result;
  }
}
