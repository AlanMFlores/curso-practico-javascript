// ////////// Total Saving ////////// //

// Function Discount Saving //

const totalDiscountSaving = (productPrice, priceWithDiscount) => {
    let totalSaving = productPrice - priceWithDiscount;
    return totalSaving;
}


// Function Discount Percent //

const discountFunction = (price, discount) => {
    let priceWithDiscount = (price * (100 - discount)) / 100;
    return priceWithDiscount;
}

// Coupons Object //

const couponSelected = '50OFF';
const result = couponSelected.toLowerCase();

const COUPONS = {
    '10off' : 10,
    '20off' : 20,
    '30off' : 30,
    '40off' : 40,
    '50off' : 50,
    '60off' : 60,
    '70off' : 70,
    '80off' : 80,
    '90off' : 90,
    '100off' : 100
}

const discountCoupon = COUPONS[result];

const getDiscountCoupon = (coupon) => {
    let result = coupon.toLowerCase();
    let discountCoupon = COUPONS[result];
    return discountCoupon;
}

const discountWithCoupon = (coupon) => {
    let couponDiscount = getDiscountCoupon(coupon);
    return couponDiscount;
}





// Function Cupon Discount //





// ////////// -- ////////// -- ////////// -- ////////// // 

// ---------- Funciones con HTML ---------- //

// ----- Discount Button ----- //

const discountButton = document.querySelector('#calc-discount');
const disBlockResult = document.querySelector('#dis-block-result');
const discountResult = document.querySelector('#dis-result');
const disBlockSaving = document.querySelector('#dis-block-saving');
const discountSaving = document.querySelector('#dis-saving');


discountButton.addEventListener('click', () => {
    let productPrice = document.querySelector('#discount-amount').value;
    let discountPercent = document.querySelector('#discount-percentage').value;
    let priceWithDiscount = discountFunction(productPrice, discountPercent);
    let totalSaving = totalDiscountSaving(productPrice, priceWithDiscount);
    disBlockResult.classList.add('show-result');
    disBlockSaving.classList.add('show-result');
    discountResult.innerText = `$${priceWithDiscount.toFixed(2)}`
    discountSaving.innerText = `$${totalSaving.toFixed(2)}`;
})


// ----- Discount Coupon Button ----- //
 
const discountCouponButton = document.getElementById('calc-coupon-discount');
const discountCouponPercentage = document.getElementById('coupon-discount-percentage');
const disCoBlockResult = document.getElementById('dis-co-block-result');
const disCoBlockSaving = document.getElementById('dis-co-block-saving');
const disCoResult = document.getElementById('dis-co-result');
const disCoSaving = document.getElementById('dis-co-saving');

discountCouponButton.addEventListener('click', () => {
    const couponPrice = document.getElementById('coupon-discount-amount').value;
    const couponSelected = document.getElementById('coupon-discount-percentage').value;
    const discountPercentage = discountWithCoupon(couponSelected);
    const priceWithDiscount = discountFunction(couponPrice,discountPercentage);
    const totalSaving = totalDiscountSaving(couponPrice, priceWithDiscount);
    disCoBlockResult.classList.add('show-result');
    disCoBlockSaving.classList.add('show-result');
    disCoResult.innerText = `$${priceWithDiscount.toFixed(2)}`;
    disCoSaving.innerText = `$${totalSaving.toFixed(2)}`;
})