const MyNameApp = {
    data(){
        return{
            name: "Thiago",
            age: 36
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");