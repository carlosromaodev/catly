// import type {Adderess} from '@prisma/client'
// import  type {MekeAdderess} from '../use-case/make/meke-adderess'
// import { randomUUID } from 'node:crypto'



// interface RequestAddress {
//     street: string
//     city: string
//     state: string
//     country: string
//     description: string
//     merchantId: string
// }

// interface ResponseAddress {
//   address: Adderess
// }

// /**
//  * @param date - DADOS PARA ACTUALIZAR O MERCHANT
//  * @returns - RETORNO DO FORNECEDOR
//  */

// // ============================================== CONTROLLER ADDRESS ======================================================


// export class controllerAdderess {
//   constructor( private functionAddress: MekeAdderess) {}

//   async createAddress(date: RequestAddress):Promise<ResponseAddress> {

//     const createAddress: Adderess = await this.functionAddress.CreateAdderess({
//       id: randomUUID(),
//       street: date.street,
//       city: date.city,
//       country: date.country,
//       description: date.description,
//       state: date.state,
//       ComercianteId: date.description
//     })
    
//   }
// }