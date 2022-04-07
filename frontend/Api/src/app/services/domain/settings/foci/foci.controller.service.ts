import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FociResponse } from './foci.model';
import { CreateFociDTO as CreateFociDTO, FociDTO as FociDTO, } from './foci';

@Injectable()
export abstract class FociController {
    public abstract getFocis(): Observable<FociDTO[]>;
    public abstract createFoci(request: CreateFociDTO): Observable<FociResponse>;
    public abstract editFoci(request: FociDTO): Observable<FociDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deleteFoci(_id: string);
}
