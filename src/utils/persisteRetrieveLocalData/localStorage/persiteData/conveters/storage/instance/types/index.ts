export type Data = string | number | bigint | boolean | symbol | undefined | object
export type TypesOf = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
export type StorageParams = {
    data: Data,
    key: string
}
export type ConvertData = {
    data: Data
}
export type GetDataConverts = Promise<DataConverters[keyof DataConverters] | undefined>
export type DataConverters = {
    object: ({ data }: ConvertData) => Promise<string>
}
export type TStorage = Promise<void>