import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { New } from '../interfaces/new';
import { Observable, firstValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';
import { PageResult } from '../interfaces/page-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:4000';
  constructor(private httpClient: HttpClient,  private messageService: MessageService) { }

  async search(query: string) : Promise<New[]> {
    console.log('searching for:', query);
    let params = new HttpParams().set('query', query);
    let result = await firstValueFrom(this.httpClient.get<New[]>(`${this.apiUrl}/api/search`, {params: params})).
      then(response => {
        console.log('result:', response);
        return response as New[];
    });
    console.log('result:', result);
    return result;
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
