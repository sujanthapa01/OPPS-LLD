export type TVarient = {
    tittle: string
    discription: string
    extraPrice: number

}

export type TSize = { 
    size? : "small" | "mid" | "large" | "x-large" | undefined
    priceMutiplier? : number | undefined

}


export type TMenuIteam = {
tittle : string
discription? : string
varient? :TVarient[]
size?: TSize[]
price: number
}


export type TMenu = {
    menu?: TMenuIteam[]
}