
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};


let is_shop_open = !false;

function time(ms){
    return new Promise ((resolve, reject)=> {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })    
} 


async function kitchen() {
    try{

        await time(2000)
        console.log(`${stocks.Fruits[2]} was selected`)

        await time(0000)
        console.log("start the production")
        
        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`${stocks.holder[1]} was selected`)

        await time(3000)
        console.log(`${stocks.toppings[1]} and ${stocks.toppings[0]} were the selected toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch(error){
        console.log("customer left", error) 
    }
    finally{
        await time(1000)
        console.log("day ended, shop is closed")
    }
}

kitchen()