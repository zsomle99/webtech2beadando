export interface FociDTO {
  _id: string;
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface CreateFociDTO {
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface FociResponseDTO {
  _id: string;
}
