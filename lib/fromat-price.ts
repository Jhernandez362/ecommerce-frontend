export function FormatPrice(price: number){
     const priceFormated = new Intl.NumberFormat('es-US', {
        style: "currency",
        currency: "USD"
     })

     const finalPrice = priceFormated.format(price)
     return finalPrice;
}