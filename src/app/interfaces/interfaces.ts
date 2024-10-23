export interface User{
    id:number,
    username:string,
    password:string
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