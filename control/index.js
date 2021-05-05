let clickmodifier = {
    chip:0,
    comp:0
};
let perSecModifer= 0;


const {chip, comp} = clickmodifier;

const compApp = Vue.createApp({


    data(){
        return{
            count:0,
        }
    },
    template: `
      <h3>resister<br>{{count}}</h3>
    <button @click='count++'>Do Click</button>;
    `

}).mount('#comp');


const thing = Vue.createApp({

    data(){
        return{
            chips:0
        }
    },
    template:`
      <h3>{{chips}}</h3>
      <button @click="chips+=chip+1">DO CHIP</button>
    `
}).mount('#chip')


console.log(thing);


//$.get('/upgrades',{lvl:0, cookies:2000})
