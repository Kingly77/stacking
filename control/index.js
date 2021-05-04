

let mod = 1;


const thing = Vue.createApp({

    data(){
        return{
            chips:0
        }
    },
    template:`
      <h3>{{chips}}</h3>
      <button @click="chips++"></button>
    `
}).mount('#chip')


console.log(thing);

thing.mount('#chip');



//$.get('/upgrades',{lvl:0, cookies:2000})
