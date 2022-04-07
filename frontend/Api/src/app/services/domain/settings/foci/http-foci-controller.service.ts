import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FociController } from './foci.controller.service';
import { FociDTO, FociResponseDTO, CreateFociDTO } from './foci';
import { FociResponse } from './foci.model';

@Injectable()
export class HttpProductController implements FociController {
    private readonly BASE_URL = `http://localhost:5000/api/foci`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createFoci(request: CreateFociDTO): Observable<FociResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: FociResponse) => res)
        );
    }
    public editFoci(request: FociDTO): Observable<FociDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: FociDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deleteFoci(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getFocis(): Observable<FociDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: FociDTO[]) => res)
        );
    }

}
