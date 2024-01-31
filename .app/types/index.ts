export * from './wizard'

export interface Meta {
  code: number
  message: string | null
  status: 'success' | 'error'
}

export interface Toc {
  id: any
  level: any
  label: any
}
