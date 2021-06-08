export type IndexedObject<T> = { [key: string]: T }
export type ValueOf<T> = T[keyof T]
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type Overwrite<T, U> = Omit<T, keyof U> & U
