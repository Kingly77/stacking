let clickmodifier = {
    comps:0,
    boards:0,
    chips:0,
    cpus:0
};

let perSec= {
    comps:0,
    boards:0,
    chips:0,
    cpus:0
};



setInterval(()=>{
    console.log(perSec)
    boardsApp.count += perSec.boards;
    chips.count += perSec.chips + robot.addx();
    compApp.count += perSec.comps;
    cpuApp.count += perSec.cpus;


},1000)


function DoCost(cost){

    if(!(chips.chips >= cost.chips && boardsApp.count >= cost.boards && compApp.count >= cost.comp && cpuApp.count >= cost.cpu )) return false

    chips.chips -= cost.chips;
    boardsApp.count -= cost.boards;
    compApp.count -= cost.comp;
    cpuApp.count -= cost.cpu
    return true;
}

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
                        res:100,
                        chips:0,
                        cpus:0,
                    },
                    name: "Unlock Boards",
                    usage: "Allows to make boards",
                    doBuy: () => { boardsApp.ishide = false }
                },

                {
                    lvl : 5,
                    cost: {
                        boards:30,
                        res:100,
                        chips:0,
                        cpus:0,
                    },
                    name: "Unlock Chip",
                    usage: "Allows to make Chips",
                    doBuy:()=>{  chips.ishide = false }
                },

                {
                    lvl: 10,
                    cost: {
                        boards:100,
                        res:100,
                        chips:30,
                        cpus:0,
                    },
                    name: "Unlock CPUS",
                    usage: "Allows to make Cpus",
                    // TODO ADD WHEN IMPLEMENTED
                    doBuy:()=>{ cpuApp.ishide = false}
                }
            ],
        }
    },
    methods:{
        doUnlock(){

            const {cost , doBuy} = this.listoupgrade[this.curUpgrade];
            console.log(cost.res);
            if(!checkCost(this.listoupgrade[this.curUpgrade].cost)) return
            //if(cost.boards > boardsApp.count || cost.chips > chips.count  || cost.res > compApp.count ) return;
            boardsApp.count -= cost.boards;
            chips.chips -= cost.chips;
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

    data() {
        return {
            cost:{
                rest: 0,
                board:0,
                chip:0,
                cpu:0
            },
            count: 0,
            curUpgrade: 0,
            listoupgrade: [
                {

                    name: "Make Faster",
                    usage: "Makes Resistors faster",
                    mod: {
                        click:0,
                        sec:1
                    }
                },
                {

                    name: "Make Faster",
                    usage: "Makes Resistors faster",
                    mod: {
                        click:0,
                        sec:2
                    }
                },
            ],
            ishide: false,

        }
    },
        methods: {
            checkupgrade(price) {

                cost.res = 20 + this.curUpgrade * 1.5;
                if(!boardsApp.ishide || this.curUpgrade > 50) cost.boards = 5 + this.curUpgrade *1.6
                if(!chips.ishide || this.curUpgrade > 200) cost.chips = 1 + this.curUpgrade *1.1
                if(!cpuApp.ishide || this.curUpgrade > 500) cost.cpus = 1 + this.curUpgrade * 1.001

                if (DoCost) return;
                boardsApp.count -= price;
                this.curUpgrade++;
            },
            addComp()
            {
                this.count += clickmodifier.comp + 1;
            }
        },

        template: `
      <h3>Resister<br>{{count}}</h3>
      <button @click='addComp'>Do Click</button>
      <div>
      <button @click="checkupgrade(this.listoupgrade[this.curUpgrade].cost)">
        {{this.listoupgrade[this.curUpgrade%2].name}}
      </button>
      </div>
    `

    }).mount('#comp');
// 0 1 0 1 0 1 0
const boardsApp = Vue.createApp({

    data() {
        return {
            count: 0,
            ishide: true,
            curUpgrade: 0,
            listoupgrade: [
                {
                    lvl: 1,
                    cost: 1,
                    name: "Make Faster",
                    usage: "Makes Boards faster",
                    mod: 1
                },
                {
                    lvl: 1,
                    cost: 5,
                    name: "Make MORE",
                    usage: "Makes +1 board per Click",
                    mod: 1
                },

            ],
        }
    },
    methods: {
        checkupgrade(price) {

            if (boardsApp.count < price) return;
            boardsApp.count -= price;
            this.curUp++;
        },

        addComp() {
            this.count += clickmodifier.board + 1;
        }
    },

    template: `
      <div v-if="!ishide">
      <h3>Boards<br>{{count}}</h3>
    <button @click='count++'>Do Click</button>
      </div>
      <div v-if="!this.ishide">
<button @click="checkupgrade(this.listoupgrade[this.curUpgrade].cost)">
  {{this.listoupgrade[this.curUpgrade].name}}
</button>
          </div>
    `

}).mount('#boards');

const cpuApp = Vue.createApp({

    data() {
        return {
            count: 0,
            ishide: true,
        }
    },
    methods: {
        addComp() {
            this.count += clickmodifier.cpu + 1;
        }
    },

    template: `
      <div v-if="!ishide">
      <h3>CPUs<br>{{count}}</h3>
    <button @click='count++'>Do Click</button>
      </div>
      <div v-if="!this.ishide">
      <button @click="checkupgrade(this.listoupgrade[this.curUpgrade].cost)">
        {{this.listoupgrade[this.curUpgrade].name}}
      </button>
    </div>
    `

}).mount('#cpus');

const printer= Vue.createApp({
data(){
    return{
        curUpgrade:0,
    }
}

})

const chips = Vue.createApp({

    data() {
        return {
            chips: 0,
            ishide: true,
            curUpgrade: 0,
            listoupgrade: [
                {
                    lvl : 1,
                    cost: 1,
                    name: "Make Faster",
                    usage: "Makes Chips faster",
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

            if(chips.count < price ) return;
            chips.chips-= price;
            this.curUpgrade++;

        },

        addchip() {

            if (boardsApp.count <= 1.2 * (1.09) ^ this.chips && compApp.count <= 2 * (1.09) ^ this.chips) return;
            this.chips += clickmodifier.chip + 1;
        }
    },

    template: `
      <div v-if="!ishide">
      <h3>Chips</h3>
      <h3>{{chips}}</h3>
      <button @click="addchip">DO CHIP</button>
      </div>
      <div v-if="!ishide">
      <button @click="checkupgrade(listoupgrade[curUpgrade].cost)">
        {{listoupgrade[curUpgrade].name}}
      </button>
        </div>
    `
}).mount('#chip')



const robot = Vue.createApp({

    data() {
        return {
            qty: 0,
            ishide: false,
            per: 1,
            curUpgrade: 0,
            listoupgrade: [
                {
                    lvl: 1,
                    cost: 1,
                    name: "Make Faster",
                    usage: "Makes Resistors faster",
                    mod: 1
                },
                {
                    lvl: 1,
                    cost: 5,
                    name: "Make MORE",
                    usage: "Makes +1 resistor per Click",
                    mod: 1
                },
            ],

        }
    },

    methods: {
        checkupgrade(price) {

            if (chips.count < price) return;
            chips.chips -= price;
            this.curUpgrade++;
            this.qty++
        },
        addx() {
            return this.per * this.qty;
        },
        checkupgrade(price) {

            if (chips.count < price) return;
            chips.chips -= price;
            this.curUpgrade++;
            robot.per++;

        }

    },
    template:
        `
  <div v-if="!ishide">
<button @click="checkupgrade( 1.2*(1.09)^qty);">
  Robots {{1.2*(1.09)^qty}} Chips
</button>
  </div>
  <div v-if="!ishide">
<button @click="checkupgrade(listoupgrade[curUpgrade].cost)">
  {{listoupgrade[curUpgrade].name}}
</button>
  </div>
`

}).mount('#robot');

