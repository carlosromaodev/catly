import type { Adderess } from "@prisma/client";


export interface MekeAdderess {
  
  CreateAdderess(date: Adderess):Promise<Adderess>
  DeleteAdderess(id: string):Promise<Adderess>
  ChangeStreet(city:string):Promise<Adderess>
  ChangeCity(id: string):Promise<Adderess>
  Chengestate(state: string):Promise<Adderess>
  ChangeCountry(country: string):Promise<Adderess>
}