
export const getDiscount = (basket, coupones, shop, basketAmount) => {
    const validCoupones = coupones.filter(item => checkCouponeValidity(item));
    if(!validCoupones.length) {
        return 0;
    }
    const discountArr = validCoupones.map(item => {
        return calcDiscount(item);
    });
    const discount = discountArr.reduce((biggest, current) => {
        return biggest > current ? biggest : current
    });


    return -Math.floor(discount);
    

    // Check which coupone from list can be used
    function checkCouponeValidity(coupone) {

        if(coupone.shop !== shop && coupone.shop !== 'all') {
            return false
        }

        switch(coupone.type) {
            case "date": {
                const date = new Date().toString().split(' ');
                return coupone.date === date[0];
            }
            case 'amount': {
                return coupone.amount <= basketAmount;
            }
            case 'qtty': {
                return basket.some(item => {
                     return item.id === coupone.discountForItem && item.qtty >= coupone.everyN;
                })
            }
            default: return false;
        }
    }

    // Calculate discount by coupone
    function calcDiscount(coupone){
        switch(coupone.type) {
            case "date": {
                return basketAmount * coupone.discount;
            }
            case 'amount': {
                return basketAmount * coupone.discount;
            }
            case 'qtty': {
                const item = basket.filter(item => item.id === coupone.discountForItem);
                return Math.floor(item[0].qtty / coupone.everyN) * +item[0].price * coupone.discount;
            }
            default: return false;
        }
    }
}




// {
//     "id": "mon20",
//     "shop": "all",
//     "type": "date",
//     "date": "Mon",
//     "amount": 0,
//     "everyN": 0,
//     "discount": 0.2,
//     "discountForItem": ""
//   },
//   {
//     "id": "sushi",
//     "shop": "sushi",
//     "type": "amount",
//     "date": "every",
//     "amount": 500,
//     "everyN": 0,
//     "discount": 0.1,
//     "discountForItem": ""
//   },
//   {
//     "id": "hamburger",
//     "shop": "mcdonalds",
//     "type": "qtty",
//     "date": "every",
//     "amount": 0,
//     "everyN": 3,
//     "discount": 0.3,
//     "discountForItem": "hamburger"
//   }