export type inputTypes = 'text' | 'password' | 'email' | 'tel' | 'file';

export interface IField {
    label: string,
    name: string,
    type: inputTypes,
    initialValue?: any
}

export type propsType = {
    labelUppercase: string,
    description: string,
    fields: IField[]
}
export type stateType = {
    [key: string]: any
}