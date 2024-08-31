let myApp = {
    data(){
        return{
            products : products,
            isCartVisiable : false ,
            cart : []//{ product:{product} , quntity : 1}
        }
    },
    methods:{
        addToCart : function(product){
            
            let check = this.cart.some(function(ele){
                return ele.product.id == product.id
            })

            if (!check) {
                this.cart.push({product , quantity:1})
            }else{
                this.cart.find(function(ele){
                    return ele.product.id == product.id
                }).quantity++

            }

                product.stock-- ;



        },
        DeleteFromCart :function(item){
            let index = this.cart.findIndex(function(ele){
                return ele.product.id == item.product.id
            })

            this.cart.splice(index , 1);

            this.products.find(function(ele){

                return item.product.id == ele.id;

            }).stock += item.quantity
        }
    }
}

Vue.createApp(myApp).mount("#app")