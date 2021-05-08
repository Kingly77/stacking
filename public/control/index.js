const clickModifier = {
    comp:0,
    board:0,
    chip:0,
    cpu:0
};

const perSec= {
    comp:0,
    board:0,
    chip:0,
    cpu:0
};


setInterval(()=>{
    boardsApp.count += perSec.board;
    chips.count += perSec.chip + robot.addx();
    compApp.count += perSec.comp;
    cpuApp.count += perSec.cpu;

},1000)


function DoCost(cost){

    console.log(cost);
    if(!(chips.chips >= cost.chip && boardsApp.count >= cost.board && compApp.count >= cost.comp && cpuApp.count >= cost.cpu )) return false

    chips.chips -= cost.chip;
    boardsApp.count -= cost.board;
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
                        comps:100,
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
                        comps:100,
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
                        comps:100,
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
            console.log(cost.comps);
            if(!DoCost(this.listoupgrade[this.curUpgrade].cost)) return
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
            what:"Resister",
            cost:{
                comp: 0,
                board:0,
                chip:0,
                cpu:0
            },
            mod:{
                click:0,
                per:0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

    },
        methods: {

        updateStat(){
            this.cost.comp = 20 + this.curUpgrade * 1.5;
            if(!boardsApp.ishide || this.curUpgrade > 50) this.cost.board = 5 + this.curUpgrade *1.6
            if(!chips.ishide || this.curUpgrade > 200) this.cost.chip = 1 + this.curUpgrade *1.1
            if(!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = 1 + this.curUpgrade * 1.001
            this.mod.click = 1 + this.curUpgrade * 1.1;
            this.mod.per = this.curUpgrade * 1.01;
        },
            applyStat(){

            clickModifier.comp += this.mod.click;
            perSec.comp += this.mod.per;
            },

            DoBuy(){
                if (!DoCost(this.cost)) return;
                console.log('hi')
                this.applyStat()
                this.curUpgrade++;
                this.updateStat();

            },

            start(){
            this.updateStat();
            },

            addComp()
            {
                this.count += 1//clickModifier.comp + 1;
            }
        },

        template: `
      <h3>{{what}}<br>{{count}}</h3>
      <button @click='addComp'>Do Click</button>
      <div>
      <button @click="DoBuy">UPGRADE {{what}}</button>
      <p>click {{mod.click}}</p>
      <p>per sec {{mod.per}} </p>
      <!--//DISPLAY If cost  > 0-->
      
    <div >COST {{cost.board}}</div>
    <div >COST {{cost.cpu}}</div>
    <div >COST {{cost.comp}}</div>
    <div> COST {{cost.chip}}</div>
    </div>
    `

    }).mount('#comp');




const boardsApp = Vue.createApp({

    data() {
        return {
            what:"Board",
            cost:{
                comp: 0,
                board:0,
                chip:0,
                cpu:0
            },
            mod:{
                click:0,
                per:0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

    },
    methods: {
        updateStat(){
            this.cost.comp = 20 + this.curUpgrade * 1.5;
            this.cost.board = 5 + this.curUpgrade *1.6
            if(!chips.ishide || this.curUpgrade > 200) this.cost.chip = 1 + this.curUpgrade *1.1
            if(!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = 1 + this.curUpgrade * 1.001
            this.mod.click = 1 + this.curUpgrade * 1.1;
            this.mod.per = this.curUpgrade * 1.01;
        },
            applyStat(){

            clickModifier.comp += this.mod.click;
            perSec.comp += this.mod.per;
            },

            DoBuy(){
                if (!DoCost(this.cost)) return;
                console.log('hi')
                this.applyStat()
                this.curUpgrade++;
                this.updateStat();

            },

            start(){
            this.updateStat();
            },

            addComp()
            {
                this.count += 1//clickModifier.comp + 1;
            }
    },

    template: `
    <h3>{{what}}<br>{{count}}</h3>
    <button @click='addComp'>Do Click</button>
    <div>
    <button @click="DoBuy">UPGRADE {{what}}</button>
    <p>click {{mod.click}}</p>
    <p>per sec {{mod.per}} </p>
    <!--//DISPLAY If cost  > 0-->
    
  <div >COST {{cost.board}}</div>
  <div >COST {{cost.cpu}}</div>
  <div >COST {{cost.comp}}</div>
  <div> COST {{cost.chip}}</div>
  </div>
    `

}).mount('#boards');

const cpuApp = Vue.createApp({

    data() {
        return {
            what:"Resister",
            cost:{
                comp: 0,
                board:0,
                chip:0,
                cpu:0
            },
            mod:{
                click:0,
                per:0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

    },
    methods: {
        updateStat(){
            this.cost.comp = 20 + this.curUpgrade * 1.5;
            this.cost.board = 5 + this.curUpgrade *1.6
            if(!chips.ishide || this.curUpgrade > 200) this.cost.chip = 1 + this.curUpgrade *1.1
            this.cost.cpu = 1 + this.curUpgrade * 1.001
            this.mod.click = 1 + this.curUpgrade * 1.1;
            this.mod.per = this.curUpgrade * 1.01;
        },
            applyStat(){

            clickModifier.comp += this.mod.click;
            perSec.comp += this.mod.per;
            },

            DoBuy(){
                if (!DoCost(this.cost)) return;
                console.log('hi')
                this.applyStat()
                this.curUpgrade++;
                this.updateStat();

            },

            start(){
            this.updateStat();
            },

            addComp()
            {
                this.count += 1//clickModifier.comp + 1;
            }
         },

    template: `
    <h3>{{what}}<br>{{count}}</h3>
    <button @click='addComp'>Do Click</button>
    <div>
    <button @click="DoBuy">UPGRADE {{what}}</button>
    <p>click {{mod.click}}</p>
    <p>per sec {{mod.per}} </p>
    <!--//DISPLAY If cost  > 0-->
    
  <div >COST {{cost.board}}</div>
  <div >COST {{cost.cpu}}</div>
  <div >COST {{cost.comp}}</div>
  <div> COST {{cost.chip}}</div>
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
            what:"Chip",
            cost:{
                comp: 0,
                board:0,
                chip:0,
                cpu:0
            },
            mod:{
                click:0,
                per:0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

   },

    methods:{
        updateStat(){
        this.cost.comp = 20 + this.curUpgrade * 1.5;
        this.cost.board = 5 + this.curUpgrade *1.6
        this.cost.chip = 1 + this.curUpgrade *1.1
        this.cost.cpu = 1 + this.curUpgrade * 1.001
        this.mod.click = 1 + this.curUpgrade * 1.1;
        this.mod.per = this.curUpgrade * 1.01;
        },
        applyStat(){

        clickModifier.comp += this.mod.click;
        perSec.comp += this.mod.per;
        },

        DoBuy(){
            if (!DoCost(this.cost)) return;
            console.log('hi')
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start(){
        this.updateStat();
        },

        addComp()
        {
            this.count += 1//clickModifier.comp + 1;
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
}).mount('#chip');



const robot = Vue.createApp({

    data() {
        return {
            what:"Robot",
            cost:{
                comp: 0,
                board:0,
                chip:0,
                cpu:0
            },
            mod:{
                click:0,
                per:0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

    },

    methods: {
        updateStat(){
            this.cost.comp = 20 + this.curUpgrade * 1.5;
             this.cost.board = 5 + this.curUpgrade *1.6
            this.cost.chip = 1 + this.curUpgrade *1.1
            this.cost.cpu = 1 + this.curUpgrade * 1.001
            this.mod.click = 1 + this.curUpgrade * 1.1;
            this.mod.per = this.curUpgrade * 1.01;
        },
            applyStat(){

            clickModifier.comp += this.mod.click;
            perSec.comp += this.mod.per;
            },

            DoBuy(){
                if (!DoCost(this.cost)) return;
                console.log('hi')
                this.applyStat()
                this.curUpgrade++;
                this.updateStat();

            },

            start(){
            this.updateStat();
            },

            addComp()
            {
                this.count += 1//clickModifier.comp + 1;
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

compApp.start();
// boardsApp.start();
// chips.start();
// robot.start();
