import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FociDTO, FociResponseDTO } from './foci';
import { FociController } from './foci.controller.service';
import { toCreatedFoci, toFocis } from './foci.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private controller: FociController) { }

    getFocis(): Observable<FociDTO[]> {
        return this.controller.getFocis().pipe(map((response: FociDTO[]) => {
            return response ? toFocis(response) : null;
        }));
    }
    /*   title: FociDTO.title,
      organizer: FociDTO.organizer,
      date: FociDTO.date,
      price: FociDTO.price,
      sitting: FociDTO.sitting */
    createFoci(title: string, organizer: string, date: Date, price: number, sitting: number) {
        return this.controller.createFoci({ title, organizer, date, price, sitting }).pipe(map((response: FociResponseDTO) => {
            return response ? toCreatedFoci(response) : null;
        }));
    }

    // tslint:disable-next-line: variable-name
    editFoci(_id: string, title: string, organizer: string, isbn: string, date: Date, price: number, sitting: number) {
        return this.controller.editFoci({ _id, title, organizer, date, price, sitting }).pipe();
    }

    // tslint:disable-next-line: variable-name
    deleteFoci(_id: string) {
        return this.controller.deleteFoci(_id).pipe();
    }

}
