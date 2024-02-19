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

export interface FeaturePackDetails {
  id: number
  feature_pack_id: string
  item: string
}
export interface Feature {
  id: string
  name: string
  price: number
  photo: string
  status: null | string
  description: string
  discount: {
    id: string
    feature_pack_id: string
    start_discount: string
    end_discount: string
    discount: number
    price: number
  }
  six_mount: number
  one_year: number
  slug: string
  feature_pack_details: FeaturePackDetails[]
}
