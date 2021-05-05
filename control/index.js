let clickmodifier = {
    chip:0,
    comp:0
};

let perSecModifer= 0;

//TODO FIX COSTS
const unlocks = Vue.createApp({

    data(){
        return{
            curUpgrade:0,
            listoupgrade: [
                {
                    lvl : 1,
                    cost: {
                        boards:0,
                        res:150,
                        chips:0,
                        cpus:0,
                    },
                    name: "Unlock Boards",
                    usage: "Allows to make boards",
                    mod: 1
                },

                {
                    lvl : 5,
                    cost: {
                        boards:30,
                        res:30,
                        chips:0,
                        cpus:0,
                    },
                    name: "Unlock Chip",
                    usage: "Allows to make Chips",
                    mod: 1
                },

                {
                    lvl : 10,
                    cost: {
                        boards:0,
                        res:0,
                        chips:100,
                        cpus:0,
                    },
                    name: "Unlock CPUS",
                    usage: "Allows to make Cpus"
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
            ishide:true,
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
            chips:0,
            ishide:true,
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
      <button @click="addchip">DO CHIP</button>
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
            curUp:0,
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

            ],
        }
    },
    methods:{
        checkupgrade(price){

            if(compApp.count < price ) return;
            compApp.count-= price;
            this.curUpgrade++;

        }

    },
    template:
        `
<tr>
<td >
<button @click="checkupgrade(this.listoupgrade[this.curUp].cost)">
  {{this.listoupgrade[this.curUp].name}}
</button>
</td>
</tr>
`
}).mount('.listV')

//$.get('/upgrades',{lvl:0, cookies:2000})
