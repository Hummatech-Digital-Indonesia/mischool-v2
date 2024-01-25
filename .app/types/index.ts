export * from './wizard'

export interface Meta {
    code: number
    message: string | null
    status: 'success' | 'error'
}
