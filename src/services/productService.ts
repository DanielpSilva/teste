import productsJson from './data/test.json'

export interface ApiProduct {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

interface ApiResponse {
  success: boolean
  products: ApiProduct[]
}

export async function fetchProducts(): Promise<ApiProduct[]> {
  try {
    const res: ApiResponse = productsJson

    if (!res.success) {
      throw new Error('A API retornou um erro: success é false')
    }

    return res.products
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    throw error
  }
}
