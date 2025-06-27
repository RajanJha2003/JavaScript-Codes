// Create a user-defined exception called InvalidCouponCode and demonstrate how it
// is used when a customer tries to apply an invalid coupon code during checkout.


class InvalidCouponCode extends Error{
    constructor(message){
        super(message);
        this.message=message;
    }
}


function applyCoupon(couponCode){
    const coupons=["SAVE10","NEW50","LUCKY30"];

    if(!coupons.includes(couponCode)){
        throw new InvalidCouponCode("Invalid coupon code")
    }
        console.log("Coupon code applied")
    

}


try {
    applyCoupon("SAVE10");
} catch (error) {
    if (error instanceof InvalidCouponCode) {
        console.log("Error:", error.message);
    } else {
        console.log("An unexpected error occurred:", error.message);
    }
}
