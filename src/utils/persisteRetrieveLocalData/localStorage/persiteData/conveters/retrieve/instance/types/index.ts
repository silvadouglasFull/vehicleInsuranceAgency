export type Data = string | number | bigint | boolean | symbol | undefined | object
export type TypesOf = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
export type ConvertData = {
    data: string
    type: TypesOf
}
export type DataConvertersFunction = Pick<ConvertData, 'data'>
export type DataConverters = {
    object: ({ data }: DataConvertersFunction) => Promise<Data>
    string: ({ data }: DataConvertersFunction) => Promise<Data>
}
export type GetDataConverts = Promise<DataConverters[keyof DataConverters] | undefined>