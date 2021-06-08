import faker from 'faker'
import { ICard } from '@components/homePage/card/index'

const generatePrice = (): string => {
  return faker.commerce.price(100, 300, 2, 'R$ ').replace('.', ',')
}

const mocks: ICard[] = [
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/150384/product/0241.jpg?1556344099',
    productName: 'Brinquedo Furacão Pet Bola Maciça Azul',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/203861/product/Brinquedo_Luppet_Conforto_Arranhador_Redondo_Azul.jpg?1556479003',
    productName: 'Brinquedo Arranhador Luppet Conforto Redondo Azul',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/219117/product/Brinquedo_Furac%C3%A3o_Pet_Osso_de_Borracha_Vermelho_3101600_1.jpg?1579287943',
    productName: 'Brinquedo Furacão Pet Osso de Borracha Vermelho',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/137275/product/3100860-2.jpg?1556338793',
    productName: 'Brinquedo Furacão Pet Bola Maciça Mamona Vermelho',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      "https://www.petlove.com.br/images/products/199728/product/Brinquedo_LCM_Pet's_Toys_Cachorro_com_Corda_-_Laranja_1952278.jpg?1556464498",
    productName: 'Brinquedo de Vinil LCM Cachorro com Corda Laranja',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/193609/product/1786687_c%C3%B3pia.jpg?1556450961',
    productName: 'Brinquedo Jambo Mordedor Pelúcia Macaco Kelev Azul',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/198014/product/Brinquedo_Pawise_Corda_Desafiada_c_3_N%C3%B3s_e_Bola_de_T%C3%AAnis_-_Tam._P_1911450.jpg?1556460124',
    productName: 'Brinquedo Pawise Corda Desafiada c/ 3 Nós e Bola de Tênis',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      "https://www.petlove.com.br/images/products/199681/product/Brinquedo_LCM_Pet's_Toys_Pintinho_com_Corda_-_Laranja_1952303.jpg?1556471425",
    productName: 'Brinquedo de Vinil LCM Pintinho com Corda Laranja',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/234602/product/Brinquedo_Corda_com_Bolinha_Laranja_para_C%C3%A3es_2635147.jpg?1619119626',
    productName: 'Brinquedo Corda com Bolinha Laranja para Cães',
    productPrice: generatePrice()
  },
  {
    imageUrl:
      'https://www.petlove.com.br/images/products/234595/product/Brinquedo_Bolinha_de_Corda_Azul_para_C%C3%A3es_2635141.jpg?1619118780',
    productName: 'Brinquedo Bolinha de Corda Azul para Cães',
    productPrice: generatePrice()
  }
]

export default mocks
