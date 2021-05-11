import Equipment from "./Equipment";

export default class Realty{
    id?: number
    img_path?: string
    name?: string
    description?: string
    realtyTypeName?: string
    price?: number
    area?: number
    latitude?: number
    longitude?: number
    price_per_metr?: number
    discount_sum?: number

    photo?: Array<string>
    equipments?: Array<Equipment>
}
