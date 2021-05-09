<<<<<<< HEAD
=======

>>>>>>> b51b304312a3da2dcf911a401cd03ea447f4afdd
const clickModifier = {
    comp: 0,
    board: 0,
    chip: 0,
    cpu: 0
};

const perSec = {
    comp: 0,
    board: 0,
    chip: 0,
    cpu: 0
};

function DoCost(cost) {

    console.log(cost);
    if (!(chips.count >= cost.chip && boardsApp.count >= cost.board && compApp.count >= cost.comp && cpuApp.count >= cost.cpu)) return false

    chips.chips -= cost.chip;
    boardsApp.count -= cost.board;
    compApp.count -= cost.comp;
    cpuApp.count -= cost.cpu
    return true;
}

//TODO ADD PER SECOND INCRESS AND BUILDINGS OR EQUIVALENT
const unlocks = Vue.createApp({

    data() {
        return {
            curUpgrade: 0,
            listoupgrade: [

                {
                    lvl: 1,
                    cost: {
                        board: 0,
                        comp: 100,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Robots",
                    usage: "Allows to make boards",
                    doBuy: () => { robot.ishide = false; }
                },
                {
                    lvl: 1,
                    cost: {
                        board: 0,
                        comp: 1000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Boards",
                    usage: "Allows to make boards",
                    doBuy: () => { boardsApp.ishide = false }
                },
                {
                    lvl: 1,
                    cost: {
                        board: 1000,
                        comp: 10000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Printing",
                    usage: "Allows to make boards",
                    doBuy: () => { printer.ishide = false; }
                },

                {
                    lvl: 5,
                    cost: {
                        board: 30000,
                        comp: 100000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Chip",
                    usage: "Allows to make Chips",
                    doBuy: () => { chips.ishide = false }
                },

                {
                    lvl: 10,
                    cost: {
                        board: 1000000,
                        comp: 10000000,
                        chip: 30000,
                        cpus: 0,
                    },
                    name: "Unlock CPUS",
                    usage: "Allows to make Cpus",
                    doBuy: () => { cpuApp.ishide = false }
                }
            ],
        }
    },
    methods: {
        doUnlock() {

            const { cost } = this.listoupgrade[this.curUpgrade];
            if (!DoCost(this.listoupgrade[this.curUpgrade].cost)) return
            console.log(cost.comp);
            this.listoupgrade[this.curUpgrade].doBuy();
            this.curUpgrade++;
        },
        getCost() {
            return this.listoupgrade[this.curUpgrade].cost;
        },

    },

    template:
        `
          <tr>
          <td >
            <button @click="doUnlock" id="doUnlock" class="btn btn-dark">
              {{listoupgrade[curUpgrade].name}}
            </button>
        
  <div>Board: {{getCost().board}}</div>
  <div>Cpu: {{getCost().cpu}}</div>
  <div>Resister: {{getCost().comp}}</div>
  <div> Chips: {{getCost().chip}}</div>
          </td>
          </tr>
        `

}).mount('#unlocky')

const compApp = Vue.createApp({

    data() {
        return {
            what: "Resister",
            cost: {
                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0
            },
            mod: {
                click: 0,
                per: 0
            },

            count: 0,
            curUpgrade: 0,
            ishide: false,

        }

    },
    methods: {

        updateStat() {
            this.cost.comp = (20 + this.curUpgrade) * 2;
            if (!boardsApp.ishide || this.curUpgrade > 50) this.cost.board = Math.round((5 + this.curUpgrade) * 1.5)
            if (!chips.ishide || this.curUpgrade > 200) this.cost.chip = Math.round( (1 + this.curUpgrade) * 1.09)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = Math.round( (1 + this.curUpgrade) * 1.001)
            this.mod.click = Math.round(1 + this.curUpgrade * 0.9);
            this.mod.per = Math.round(this.curUpgrade * 0.02);

        },
        applyStat() {

            clickModifier.comp = this.mod.click;
            perSec.comp = this.mod.per;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            console.log('hi')
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            this.count += clickModifier.comp + 1;
        }
    },

    template: `
    <div>
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
     <div>
     click: {{mod.click}} &nbsp;&nbsp;&nbsp;&nbsp; per sec: {{mod.per}}
     </div>
    <table>
    <tr>
    <td>
      <button @click='addComp' class="btn btn-light" >Do Click</button> 
   <br>
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
    </td>
    <td>  
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </td>
     </tr>
       </table>
    </div>
    `
}).mount('#comp');


const boardsApp = Vue.createApp({

    data() {
        return {
            what: "Board",
            cost: {
                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0
            },
            mod: {
                click: 0,
                per: 0
            },

            count: 0,
            ishide: true,
            curUpgrade: 0,


        }

    },
    methods: {
        updateStat() {
            this.cost.comp = 20 + this.curUpgrade * 10;
            this.cost.board = 5 + this.curUpgrade * 5;
            if (!chips.ishide || this.curUpgrade > 200) Math.round(this.cost.chip = 1 + this.curUpgrade * 2.5)
            if (!cpuApp.ishide || this.curUpgrade > 500)Math.round( this.cost.cpu = 1 + this.curUpgrade * 1.1)
            this.mod.click = Math.round(1 + this.curUpgrade * 1.1);
            this.mod.per = Math.round(this.curUpgrade * 1.01);
        },
        applyStat() {

            clickModifier.board = this.mod.click;
            perSec.board = this.mod.per;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            console.log('hi')
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            this.count += clickModifier.board + 1;
        }
    },

    template: `
    <div v-if="!ishide">
    <h3>{{what}}<br>{{count}}</h3>
    <button @click='addComp' class="btn btn-light me-md-2">Do Click</button>
    <div>
    <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> UPGRADE {{what}}</button>
    <p>click: {{mod.click}}</p>
      <p>per sec: {{mod.per}}</p>
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
  </div>
  </div>
    `
}).mount('#boards');

const cpuApp = Vue.createApp({

    data() {
        return {
            what: "Cpu",
            cost: {
                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0
            },
            mod: {
                click: 0,
                per: 0
            },

            count: 0,
            curUpgrade: 0,
            ishide: true,

        }

    },
    methods: {
        updateStat() {
            this.cost.comp = 20 + this.curUpgrade * 50;
            this.cost.board = 5 + this.curUpgrade * 25
            this.cost.chip = 1 + this.curUpgrade * 10
            this.cost.cpu = Math.round(1 + this.curUpgrade * 1.5)
            this.mod.click = Math.round(1 + this.curUpgrade * 1.1);
            this.mod.per = Math.round(this.curUpgrade * 0.02);
        },
        applyStat() {

            clickModifier.cpu = this.mod.click;
            perSec.cpu = this.mod.per;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            console.log('hi')
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            this.count += clickModifier.cpu + 1;
        }
    },

    template: `
    <div v-if="!ishide">
    <h3>{{what}}<br>{{count}}</h3>
    <button @click='addComp' class="btn btn-light">Do Click</button>
    <div>
    <button @click="DoBuy" class="btn btn-light me-md-2"> <img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> UPGRADE {{what}}</button>
      <p>click: {{mod.click}}</p>
      <p>per sec: {{mod.per}}</p>
      <div>Board: {{cost.board}}</div>
      <div>Cpu: {{cost.cpu}}</div>
      <div>Resisters: {{cost.comp}}</div>
      <div> Chips: {{cost.chip}}</div>
  </div>
  </div>
    `

}).mount('#cpus');

const printer = Vue.createApp({
    data() {
        return {
            curUpgrade: 0,
        }
    }

})

const chips = Vue.createApp({
    data() {
        return {
            what: "Chip",
            cost: {
                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0
            },
            mod: {
                click: 0,
                per: 0
            },

            count: 0,
            curUpgrade: 0,
            ishide: true,

        }

    },
    methods: {
        updateStat() {
            this.cost.comp = Math.round(20 + this.curUpgrade * 35);
            this.cost.board = Math.round(5 + this.curUpgrade * 15)
             this.cost.chip = Math.round(1 + this.curUpgrade * 10)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu =Math.round( 1 + this.curUpgrade * 1.1)
            this.mod.click = Math.round(1 + this.curUpgrade * 0.01);
            this.mod.per = Math.round(this.curUpgrade * 0.001);
        },
        applyStat() {

            clickModifier.chip = this.mod.click;
            perSec.chip = this.mod.per;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            console.log('hi')
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            this.count += clickModifier.chip + 1;
        }
    },

    template: `
      <div v-if="!ishide">
      <h3>Chips</h3>
      <h3>{{count}}</h3>
      <button @click="addComp" class="btn btn-light me-md-2">DO CHIP</button>
    <button @click="DoBuy" class="btn btn-light "> <img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> UPGRADE {{what}}</button>
       <div>click: {{mod.click}}</div>
       <div>per sec: {{mod.per}}</div>
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       
      </div>
     
    `
}).mount('#chip');



const robot = Vue.createApp({

    data() {
        return {
            what: "Robot",
            cost: {
                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0
            },

            per: 0,


            count: 0,
            curUpgrade: 0,
            ishide: true,

        }

    },

    methods: {

        getMod() {
            return this.per * this.count;

        },
        updateStat() {
              this.cost.comp = 1.5 * (1.09) ^ this.count;
            if (!boardsApp.ishide || this.curUpgrade > 100)   this.cost.board = 1.2 * (1.09) ^ this.count;
            if (!chips.ishide || this.curUpgrade > 500)   this.cost.chip = 1.04 * (1.09) ^ this.count
            if (!cpuApp.ishide || this.curUpgrade > 750)   this.cost.cpu = 1.01 * (1.09) ^ this.count
            this.per = this.curUpgrade;
        },
        applyStat() {
            perSec.comp = this.mod.per;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            this.applyStat()
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            this.count += 1;
        }
    },
    template:
        `
  <div v-if="!ishide">
<button @click="DoBuy" class="btn btn-light">
  Robots 
</button>
  </div>
  <div v-if="!ishide">
<button @click="DoBuy" class="btn btn-light me-md-2"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> UPGRADE {{what}}</button>
   <p>click: {{getMod()}}</p>
      <p>per sec: {{getMod()}}</p>
       <div>Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
  </div>
`

}).mount('#robot');

compApp.start();
boardsApp.start();
chips.start();
robot.start();

setInterval(() => {
    boardsApp.count += perSec.board
    chips.count += perSec.chip;
    compApp.count += perSec.comp + robot.getMod();
    cpuApp.count += perSec.cpu;

}, 1000)