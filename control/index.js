let clickmodifier = {
    chip:0,
    comp:0,
    board:0
};

let perSec= {
    chips:0,
    boards:0,
    comps:0
};

setInterval(()=>{
    boardsApp.count += perSec.boards
    thing.chips+= perSec.chips;
    compApp.count+=perSec.comps;

},1000)

//TODO ADD PER SECOND INCRESS AND BUILDINGS OR EQUIVALENT
const unlocks = Vue.createApp({

    data(){
        return{
            curUpgrade:0,
            listoupgrade: [
                {
                    lvl : 1,
                    cost: {
                        boards:0,
                        res:1,
                        chips:0,
                        cpus:0,
                    },
                    name: "Unlock Boards",
                    usage: "Allows to make boards",
                    doBuy:()=>{  boardsApp.ishide = false }
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
                    doBuy:()=>{  thing.ishide = false }
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
                    usage: "Allows to make Cpus",
                    // TODO ADD WHEN IMPLEMENTED
                    doBuy:()=>{  console.log('NOT IMPLEMENTED') }
                }
            ],
        }
    },
    methods:{
        doUnlock(){

            const {cost , doBuy} = this.listoupgrade[this.curUpgrade];
            console.log(cost.res);
            if(cost.boards > boardsApp.count || cost.chips > thing.chips  || cost.res > compApp.count ) return;
            boardsApp.count -= cost.boards;
            thing.chips -= cost.chips;
            compApp.count -= cost.res;
            doBuy();
            this.curUpgrade++;
        }
    },

    template:
        `
          <tr>
          <td >
            <button @click="doUnlock">
              {{listoupgrade[curUpgrade].name}}
            </button>
          </td>
          </tr>
        `

}).mount('#unlocky')


const compApp = Vue.createApp({

    data(){
        return{
            count:0,
        }
    },
    methods:{
        addComp()
        {
            this.count += clickmodifier.comp + 1;
        }
    },

    template: `
      <h3>Resister<br>{{count}}</h3>
      <button @click='addComp'>Do Click</button>
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
    <button @click='count++'>Do Click</button>
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
          if(boardsApp.count <= 1.2*(1.09)^this.chips && compApp.count <= 2*(1.09)^this.chips) return;
          this.chips+= clickmodifier.chip + 1;
      }

    },

    template:`
      <div v-if="!ishide">
      <h3>Chips</h3>
      <h3>{{chips}}</h3>
      <button @click="addchip">DO CHIP</button>
      </div>
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
        ishide:true,
    }
},

    methods:{
        checkupgrade(price){

            if(thing.chips < price ) return;
            thing.chips-= price;
            this.curUpgrade++;

        }
    },

template:
`
  <div v-if="!ishide">
<button @click="checkupgrade(listoupgrade[curUpgrade].cost)">
  {{listoupgrade[curUpgrade].name}}
</button>
  </div>
`

}).mount('#chipUp')


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
            ishide:false,
        }
    },
    methods:{
        checkupgrade(price){

            if(compApp.count < price ) return;
            compApp.count-= price;
            this.curUp++;
        }

    },
    template:
        `
          <div v-if="!this.ishide">
<button @click="checkupgrade(this.listoupgrade[this.curUp].cost)">
  {{this.listoupgrade[this.curUp].name}}
</button>
          </div>

`
}).mount('#compUp')
