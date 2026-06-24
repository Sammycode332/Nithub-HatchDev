abstract class PaymentProcessor{
    protected transactionFee: number
    constructor(transactionFee: number){
        this.transactionFee = transactionFee
    }
    processPayment(amount: number){
        console.log(`Processing payment of ${amount}`)
        this.pay()
        console.log(this.getFee())
    }
    getFee(){
        return `Transaction fee: ${this.transactionFee}%`
    }
    protected abstract pay(): void
}

class PayStackProcessor extends PaymentProcessor{
    constructor(startingValue: number=1.5){
        super(startingValue);
    }
    protected pay():void{
        console.log("Paying with Paystack")
    }
}
class FlutterwaveProcessor extends PaymentProcessor{
    constructor(startingValue: number=2.0){
        super(startingValue);
    }
    protected pay():void{
        console.log("Paying with FlutterWave")
    }
}

const paystack = new PayStackProcessor()
const flutterwave = new FlutterwaveProcessor()

paystack.processPayment(5000)
// Processing payment of 5000
// Paying with Paystack 🟢
// Transaction fee: 1.5%

flutterwave.processPayment(5000)
// Processing payment of 5000
// Paying with Flutterwave 🦋
// Transaction fee: 2%

