
const thing = Vue.createApp({

    data(){
        return{
            chips:0,
        }
    }

});

thing.component('fish',{

    data(){
       return{
           chips:0
       }
    },
    props:{'num':Number},

    template:`
      <h1>{{chips}}</h1>
     <button @click="chips++">MAKE CHIP</button>
    `
})
thing.mount('#chip');


$.get('/upgrades',{lvl:0, cookies:2000})
