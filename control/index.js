let clickmodifier = {
    chip:0,
    comp:0
};
let list;
let perSecModifer= 0;

(async ()=>{

    list = await $.get('/upgrades');

    console.log(list)

})();

const unlocks = Vue.createApp({

    data(){
        return{

            boards:false,

            listoupgrade: [

                {
                    lvl : 1,
                    cost: 10,
                    name: "Unlock Chip",
                    usage: "Makes +1 Chip per Click",
                    mod: 1
                },
                {
                    lvl : 5,
                    cost: 20,
                    name: "Unlock CPUS",
                    usage: "Makes +5 Chip per Click"
                }
            ],
        }
    },
    methods:{
    },

    template:
        `
          <tr>
          <td >
            <button @click="">
              {{}}
            </button>
          </td>
          </tr>
        `

}).mount('.listV')




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

const boardsApp = Vue.createApp({

    data(){
        return{
            count:0,
            ishide:true
        }
    },
    methods:{
    },

    template: `
      <div v-if="!ishide">
      <h3>Boards<br>{{count}}</h3>
    <button @click='count++'>Do Click</button>;
      </div>
    `

}).mount('#boards');


const thing = Vue.createApp({

    data(){
        return{
            chips:0
        }
    },

    methods:{

      addchip(){
          if(board <= 1.2*(1.09)^this.chips && resist <= 2*(1.09)^this.chips) return;
          this.chips++;
      }

    },

    template:`
      <h3>{{chips}}</h3>
      <button @click="chips+=1">DO CHIP</button>
    `
}).mount('#chip')


const chipsUpgrades = Vue.createApp({

data(){
    return{
        curUpgrade:0,

        listoupgrade: [
            {
                lvl : 1,
                cost: 1,
                name: "Make Faster",
                usage: "Makes Resistors faster",
                mod: 1
            },
            {
                lvl : 1,
                cost:5,
                name: "Make MORE",
                usage: "Makes +1 resistor per Click",
                mod: 1
            },
            {
                lvl : 1,
                cost: 10,
                name: "Unlock Chip",
                usage: "Makes +1 Chip per Click",
                mod: 1
            },
            {
                lvl : 5,
                cost: 20,
                name: "Unlock CPUS",
                usage: "Makes +5 Chip per Click"
            }
        ],
    }
},

    methods:{
        checkupgrade(price){

            console.log(thing.chips)
            console.log(price)

            if(thing.chips < price ) return;
            thing.chips-= price;
            this.curUpgrade++;

        }
    },

template:
`

<button @click="checkupgrade(listoupgrade[curUpgrade].cost)">
  {{listoupgrade[curUpgrade].name}}
</button>
`

}).mount('.list')


const resist = Vue.createApp({

    data(){
        return{
            listoupgrade: [
                {
                    lvl : 1,
                    cost: 1,
                    name: "Make Faster",
                    usage: "Makes Resistors faster",
                    mod: 1
                },
                {
                    lvl : 1,
                    cost:5,
                    name: "Make MORE",
                    usage: "Makes +1 resistor per Click",
                    mod: 1
                },
                {
                    lvl : 1,
                    cost: 10,
                    name: "Unlock Chip",
                    usage: "Makes +1 Chip per Click",
                    mod: 1
                },
                {
                    lvl : 5,
                    cost: 20,
                    name: "Unlock CPUS",
                    usage: "Makes +5 Chip per Click"
                }
            ],
        }
    },

    methods:{

    },

    template:
        `
<tr>
<td >
<button @click="">
  {{}}
</button>
</td>
</tr>
`

}).mount('.listV')




//$.get('/upgrades',{lvl:0, cookies:2000})
