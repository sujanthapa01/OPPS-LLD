export type TVariant = {
    title: string
    discription?: string
    extraPrice: number

}

export type TSize = { 
    size : "small" | "mid" | "large" | "x-large" | undefined
    priceMutiplier : number | undefined

}


export type TMenuItem = {
item_no: number
title : string
description? : string
variant? :TVariant[]
size?: TSize[]
price: number
}


export type TMenu = {
    menu: TMenuItem[]
}