import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { New } from '../interfaces/new';
import { firstValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';
import { PageResult } from '../interfaces/page-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:4000';
  constructor(private httpClient: HttpClient,  private messageService: MessageService) { }

  search(query: string) {
    console.log('searching for:', query);
    let params = new HttpParams().set('query', query);
    return this.httpClient.get(`${this.apiUrl}/api/search`, {params: params}); 
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
}
