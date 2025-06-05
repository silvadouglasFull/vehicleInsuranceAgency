/* eslint-disable @typescript-eslint/no-explicit-any */
export type GroupByProps<T extends Record<string, any>> = {
    array: T[]
    key: string
}