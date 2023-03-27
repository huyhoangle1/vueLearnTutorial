var vueInstance = new Vue({
    el:'#app',
    data:{
        title:" hoc vue js"
    },
    methods:{
        say:function(text){
            return 'hello' + ' ' + text;
        }
    }
  });
  //he thong phan ung, reactivity
  console.log(vueInstance);
  setTimeout(() =>{
      vueInstance.title="dien thoai iphone";
  },3000)