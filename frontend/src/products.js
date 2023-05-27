// let Data

// fetch('localhost:8000/all').then(response => {
//   if (response.ok) {
//     return response.json()
//   } else {
//     throw new Error('Erro ao buscar os dados:' + response.status)
//   }
// }).then(data=> Data=data).catch(error=>console.log(error))

// export const PRODUCTS = Data


export const PRODUCTS=[
  {
    "id":1,
    "productName": "Dog Tradicional",
    "price":9,
    "category":"dog",
    "productImage": ""
  },
  {
    "id":2,
    "productName": "Dog Prensado",
    "price":9,
    "category":"dog",
    "productImage": "Dog_prensado"
  },
  {
    "id":3,
    "productName": "Dog Prensado com Ovo",
    "price":11,
   " category":"dog",
    "productImage": "Prensado_Ovo"
  },
  {
    "id":4,
    "productName": "Dog Prensado com Purê",
    "price":11,
   " category":"dog",
    "productImage": "Prensado_Pure"
  },
  {
    "id":5,
    "productName": "Dog Prensado com Cheddar",
    "price":11,
   " category":"dog",
    "productImage": "Prensado_cheddar"
  },
  {
    "id":6,
    "productName": "Dog Prensado com Catupiry",
    "price":11,
   "category":"dog",
    "productImage": "Prensado_Catupiry"
  },
  {
    "id":7,
    "productName": "Dog Prensado com Bacon",
    "price":12,
   " category":"dog",
    "productImage": "Prensado_Bacon"
  },
  {
    "id":8,
    "productName": "Dog Prensado com Frango e Catupiry",
    "price":13,
   " category":"dog",
    "productImage": "Prensado_Frango_Catupiry"
  },
  {
    "id":9,
    "productName": "X-Tudo",
    "price":30,
    "category":"lanche",
    "productImage": "foto xtudo"
  },
  {
    "id":10,
    "productName": "Suco de Laranja",
    "price":10,
    "category":"drink",
    "productImage": "foto suco de laranja"
  }
]