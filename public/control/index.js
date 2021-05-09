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
                    usage: "Allows to make boards automatically faster",
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
                    lvl: 5,
                    cost: {
                        board: 30000,
                        comp: 100000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Assembler",
                    usage: "Allows to make Chips",
                    doBuy: () => { assembler.ishide = false }
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
                },
                {
                    lvl: 5,
                    cost: {
                        board: 30000,
                        comp: 100000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Fabricator",
                    usage: "Allows to make Cpus automaticly",
                    doBuy: () => { fabricator.ishide = false }
                },



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
            isDis: false,

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

        checkClickable(){


        },

        addComp() {
            this.checkClickable()
            this.count += clickModifier.comp + 1;
        },
        addOther(val)
        {
            this.checkClickable();
            this.count += val;
        }
    },

    template: `
    <div>
     <div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
       click: {{mod.click}}
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >Do Click</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{mod.per}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
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
            isDis:true,

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
            if(compApp.count < this.count + clickModifier.board + 1 ) return;
            this.count += clickModifier.board + 1;
        }
        ,
        addOther(val)
        {
            if(compApp.count < this.count + val ) return;
            this.count += val;
        }
    },

    template: `
    <div v-if="!ishide">
    <div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
       click: {{mod.click}}
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >Do Click</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{mod.per}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
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
            if(chips.count < this.count + clickModifier.cpu + 1 ) return
            this.count += clickModifier.cpu + 1;
        },
        addOther(val)
        {
            if(chips.count < this.count + val ) return;
            this.count += val
        }

    },

    template: `
    <div v-if="!ishide">
   <div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
       click: {{mod.click}}
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >Do Click</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{mod.per}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
  </div>
    `

}).mount('#cpus');

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
            if(boardsApp.count <  this.count + clickModifier.chip + 1) return
            this.count += clickModifier.chip + 1;
        },
        addOther(val){
            if(boardsApp.count <  this.count + val) return
                this.count += val;
        }
    },

    template: `
      <div v-if="!ishide">
      <div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
       click: {{mod.click}}
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >Do Click</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{mod.per}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
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
            this.cost.comp =  Math.round(1.5 * (1.09) ^ this.count);
            if (!boardsApp.ishide || this.curUpgrade > 100) this.cost.board =  Math.round(  1.2 * (1.09) ^ this.count);
            if (!chips.ishide || this.curUpgrade > 500) this.cost.chip =   Math.round( 1.04 * (1.09) ^ this.count)
            if (!cpuApp.ishide || this.curUpgrade > 750)  this.cost.cpu = Math.round( 1.01 * (1.09) ^ this.count)
            this.per = this.curUpgrade;
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            console.log("robot start");
            this.updateStat();
        },

        addComp() {
            if (compApp.count <  this.getcost()) return
            compApp.count -= this.getcost();
            this.count += 1;

        },
        getcost(){
            return 1.5 * (1.09) ^ this.count
        }

    },
    template:
        `
  <div v-if="!ishide">
<div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >({{getcost()}})</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{getMod()}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
  </div>
`

}).mount('#robot');


const printer = Vue.createApp({

    data() {
        return {
            what: "Printer",
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
            this.cost.comp =Math.round( 1.5 * (1.09) ^ (this.count*2));
            this.cost.board = Math.round( 1.2 * (2) ^ this.count);
            if (!chips.ishide || this.curUpgrade > 500)   Math.round( this.cost.chip = 1.04 * (1.09) ^ this.count)
            if (!cpuApp.ishide || this.curUpgrade > 750)  Math.round(  this.cost.cpu = 1.01 * (1.09) ^ this.count)
            this.per = Math.round(this.curUpgrade*1.3);
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;

            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
           if (boardsApp.count <  this.getcost()) return
            boardsApp.count -= this.getcost();
            this.count += 1;

        },
        getcost(){
            return 1.5 * (1.09) ^ this.count
        }


    },
    template:
        `
  <div v-if="!ishide">
<div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >({{getcost()}})</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{getMod()}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
  </div>
`

}).mount('#printer');


const assembler = Vue.createApp({

    data() {
        return {
            what: "Assembler",
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
            this.cost.comp = Math.round( 1.5 * (1.09) ^ (1.1^(this.count*0.25)));
            this.cost.board =Math.round(  1.2 * (2) ^ (1.01^(this.count*0.25)));
             this.cost.chip =Math.round(  1.04 * (1.09) ^ (1.001^(this.count*0.25)))
            if (!cpuApp.ishide || this.curUpgrade > 750)   this.cost.cpu = Math.round( 1.01 * (1.09) ^ this.count)
            this.per = Math.round( this.curUpgrade*1.3);
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;

            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            if (chips.count <  this.getcost()) return
            chips.count -= this.getcost();
            this.count += 1;

        },
        getcost(){
            return 1.5 * (1.09) ^ this.count
        }
    },
    template:
        `
  <div v-if="!ishide">
<div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >({{getcost()}})</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{getMod()}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
  </div>
`

}).mount('#assembler');



const fabricator = Vue.createApp({

    data() {
        return {
            what: "Fabricator",
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
            this.cost.comp = Math.round( 1.5 * (1.09) ^ (1.1^(this.count*0.25)));
            this.cost.board =Math.round(  1.2 * (2) ^ (1.01^(this.count*0.25)));
            this.cost.chip = Math.round( 1.04 * (1.09) ^ (1.001^(this.count*0.25)))
            if (!cpuApp.ishide || this.curUpgrade > 750)   this.cost.cpu = Math.round( 1.01 * (1.09) ^ this.count)
            this.per = Math.round( this.curUpgrade*1.3);
        },

        DoBuy() {
            if (!DoCost(this.cost)) return;
            this.curUpgrade++;
            this.updateStat();

        },

        start() {
            this.updateStat();
        },

        addComp() {
            if (cpuApp.count <  this.getcost()) return
            cpuApp.count -= this.getcost();
            this.count += 1;

        },
        getcost(){
            return 1.5 * (1.09) ^ this.count
        }
    },
    template:
        `
  <div v-if="!ishide">
<div class="container">
     <h3>{{what}}: <span class=""> {{count}}</span></h3>
    <div class="row">
    <div class="col-3">
    <div class="row">
      <button  @click='addComp' class="btn btn-light" >({{getcost()}})</button> 
      </div>
      <div class="row">
      <button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button>
     </div>
     </div>
     <div class="col">
     per sec:{{getMod()}}
       <div >Board: {{cost.board}}</div>
       <div>Cpu: {{cost.cpu}}</div>
       <div>Resisters: {{cost.comp}}</div>
       <div> Chips: {{cost.chip}}</div>
       </div>
     </div>
    </div>
  </div>
`

}).mount('#fabricator');


function debug()
{
    compApp.ishide =false;
    boardsApp.ishide =false;
    chips.ishide =false;
    cpuApp.ishide =false;
    robot.ishide =false;
    printer.ishide =false;
    assembler.ishide =false;
    fabricator.ishide =false;
}

function start()
{

    compApp.start();
    boardsApp.start();
    chips.start();
    cpuApp.start();
    robot.start();
    printer.start();
    assembler.start();
    fabricator.start();
}
start();
setInterval(() => {
    boardsApp.addOther(perSec.board + printer.getMod());
    chips.addOther( perSec.chip + assembler.getMod());
    compApp.addOther(perSec.comp + robot.getMod());
    cpuApp.addOther(perSec.cpu + fabricator.getMod());

}, 1000)