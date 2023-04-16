import Dog_prensado from './assets/Dog-Prensado.png'
import Dog_trad from './assets/Dog-trad.png'
import Prensado_Bacon from './assets/Prensado-Bacon.png'
import Prensado_Catupiry from './assets/Prensado-Catupiry.png'
import Prensado_cheddar from './assets/Prensado-cheddar.png'
import Prensado_Frango_Catupiry from './assets/Prensado-Frango-Catupiry.png'
import Prensado_Ovo from './assets/Prensado-Ovo.png'
import Prensado_Pure from './assets/Prensado-Pure.png'


export const PRODUCTS=[
  {
    id:1,
    productName: 'Dog Tradicional',
    price:parseFloat(9.00),
    productImage: Dog_trad
  },
  {
    id:2,
    productName: 'Dog Prensado',
    price:parseFloat(9.50),
    productImage: Dog_prensado
  },
  {
    id:3,
    productName: 'Dog Prensado com Ovo',
    price:parseFloat(11.00),
    productImage: Prensado_Ovo
  },
  {
    id:4,
    productName: 'Dog Prensado com Purê',
    price:parseFloat(11.00),
    productImage: Prensado_Pure
  },
  {
    id:5,
    productName: 'Dog Prensado com Cheddar',
    price:parseFloat(11.00),
    productImage: Prensado_cheddar
  },
  {
    id:6,
    productName: 'Dog Prensado com Catupiry',
    price:parseFloat(11.00),
    productImage: Prensado_Catupiry
  },
  {
    id:7,
    productName: 'Dog Prensado com Bacon',
    price:parseFloat(12.00),
    productImage: Prensado_Bacon
  },
  {
    id:8,
    productName: 'Dog Prensado com Frango e Catupiry',
    price:parseFloat(13.00),
    productImage: Prensado_Frango_Catupiry
  }
]