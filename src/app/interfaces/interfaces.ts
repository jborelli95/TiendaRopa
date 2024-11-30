export interface User{
    id:string,
    username:string,
    password:string,
    name:string,
    surname:string,
    email:string,
    city:string,
    state:string,
    country:string,
    startedDate:string|null
}

export interface Garment{
    id:number, /**PK */
    name:string,
    category:string,
    price:number
}

export interface Stock{
    id:number, /**PK */
    garmentId:number, /**FK */
    stock:number,
    color:string,
    size:string
}