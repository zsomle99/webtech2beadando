import { FociDTO as FociDTO, FociResponseDTO as FociResponseDTO } from './foci';

export interface Foci {
    _id: string;
    title: string;
    organizer: string;
    date: Date;
    price: number;
    sitting: number;
}

export interface FociResponse {
    _id: string;
}
export function toFocis(productResponse: FociDTO[]): Foci[] {
    return productResponse.map(dto => toFoci(dto));
}

export function toFoci(fociDTO: FociDTO): Foci {
    return {
        _id: fociDTO._id,
        title: fociDTO.title,
        organizer: fociDTO.organizer,
        date: fociDTO.date,
        price: fociDTO.price,
        sitting: fociDTO.sitting
    };
}

export function toCreatedFoci(fociDTO: FociResponseDTO): FociResponse {
    return {
        _id: fociDTO._id,
    };
}

