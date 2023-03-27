var vueInstance = new Vue({
    el:'#app',
    data:{
        title:" Ấn vào đây để ra fb của em",
        URL:"https://www.facebook.com/chuoikia111",
        target:"_blank",
        check:true,
        Price:100000
    },
    methods:{
        formatPrice:function()
        {
            const number = this.Price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
    // console.log(this.Price)
        }
    }
});
