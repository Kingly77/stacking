const full = Vue.createApp(
    {

        data() {
            return {
                isLocked:
                {
                    comp: false,
                    chip: false,
                    board: true,
                    cpu: true,
                    robot: true,
                    fabricator: true,
                    assembler: true,
                    printer: true,


                },
                clickModifier:
                {
                    comp: 1,
                    board: 1,
                    chip: 1,
                    cpu: 1
                },
                perSec:
                {
                    comp: 0,
                    board: 0,
                    chip: 0,
                    cpu: 0

                }
            }

        },
        methods: {
            DoCost(cost) {

                if (!(chips.count >= cost.chip && boardsApp.count >= cost.board && compApp.count >= cost.comp && cpuApp.count >= cost.cpu)) {
                    return false;
                }

                chips.chips -= cost.chip;
                boardsApp.count -= cost.board;
                compApp.count -= cost.comp;
                cpuApp.count -= cost.cpu
                return true;


            }
        }
    });


full.component('unlocky', {

    data() {
        return {
            curUpgrade: 0,
            listoupgrade: [

                {
                    cost: {
                        board: 0,
                        comp: 100,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Robots",
                    usage: "Allows to make boards",
                    doBuy: () => { this.robot = false; }
                },

                {
                    cost: {
                        board: 0,
                        comp: 1000,
                        chip: 0,
                        cpu: 0,
                    },
                    name: "Unlock Chip",
                    usage: "Allows to make Chips",
                    doBuy: () => { this.chip = false }
                },
                {
                    cost: {
                        board: 0,
                        comp: 10000,
                        chip: 100,
                        cpu: 0,
                    },
                    name: "Unlock Assembler",
                    usage: "Allows to make Chips",
                    doBuy: () => { this.assembler = false }
                },

                {
                    cost: {
                        board: 0,
                        comp: 10000,
                        chip: 1000,
                        cpu: 0,
                    },
                    name: "Unlock Boards",
                    usage: "Allows to make boards",
                    doBuy: () => { this.boards = false }
                },
                {
                    cost: {
                        board: 500,
                        comp: 100000,
                        chip: 1000,
                        cpu: 0,
                    },
                    name: "Unlock Printing",
                    usage: "Allows to make boards automatically faster",
                    doBuy: () => { this.printer = false; }
                },
                {
                    cost: {
                        board: 100000,
                        comp: 100000,
                        chip: 30000,
                        cpu: 0,
                    },
                    name: "Unlock CPUS",
                    usage: "Allows to make Cpus",
                    doBuy: () => { cpuApp.ishide = false }
                },
                {
                    cost: {
                        board: 30000,
                        comp: 1000000,
                        chip: 10000,
                        cpu: 100,
                    },
                    name: "Unlock Fabricator",
                    usage: "Allows to make Cpus automaticly",
                    doBuy: () => { this.fabricator = false }
                },
                {
                    cost: {
                        board: 1000000,
                        comp: 1000000,
                        chip: 10000000,
                        cpu: 1000000,
                    },
                    name: "WIN",
                    usage: "Allows to make Cpus automaticly",
                    doBuy: () => {
                        perSec.comp += 10000
                        perSec.board += 10000
                        perSec.chip += 10000
                        perSec.cpu += 10000
                        this.curUpgrade--;
                    }
                },

            ],
        }
    },
    methods: {
        doUnlock() {
            if (!DoCost(this.listoupgrade[this.curUpgrade].cost)) return
            this.listoupgrade[this.curUpgrade].doBuy();
            this.curUpgrade++;

        },
        getCost() {
            return this.listoupgrade[this.curUpgrade].cost;
        },

    },

    template:
        `
        <div class="container glass">
        <tr>
          <td >
            <button @click="doUnlock" id="doUnlock" class="btn btn-dark">
              {{listoupgrade[curUpgrade].name}}
            </button>
            <div class="mt-1">Transistor: {{getCost().comp}}</div>
  <div>Board: {{getCost().board}}</div>
  <div> Chips: {{getCost().chip}}</div>
  <div>Cpu: {{getCost().cpu}}</div>
          </td>
          </tr>
          </div>
        `

});


full.component('compapp', {

    props: ['what', 'locked'],
    data() {
        return {
            what: "Transistor",
            count: 0,
            curUpgrade: 0,
            ishide: false,

            cost: {
                comp: 0,
                cpu: 0,
                chip: 0,
                board: 0
            },
            mod: {
                click: 0,
                per: 0
            }
        }
    },
    methods: {
        updateStat() {
            this.cost.comp = (20 + this.curUpgrade) * 2;
            if (!boardsApp.ishide || this.curUpgrade > 50) this.cost.board = Math.round((5 + this.curUpgrade) * 1.5)
            if (!chips.ishide || this.curUpgrade > 200) this.cost.chip = Math.round((1 + this.curUpgrade) * 1.09)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = Math.round((1 + this.curUpgrade) * 1.001)
            this.mod.click = Math.round(1 + (this.curUpgrade * 0.9));
            this.mod.per = Math.round(this.curUpgrade * 0.05);

        },
        applyStat() {
            clickModifier.comp = this.mod.click;
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
            this.applyStat();
        },
        add() {
            this.count++
        },
        addOther(x) {
            this.count += x;
        },
        getClickMod() { return perSec.comp},
        getPerSec() { return clickModifier.comp }


    },
    template: `
      
      <div class="container glass" v-if="!locked">
      <div class="row text-center"><h3>{{what}}: <span class=""> {{count}}</span></h3></div>
      <div class="row">
        <div class="col">click: {{this.getClickMod()}}</div>
        <div class="col">per sec:{{this.getPerSec()}}</div>
      </div>
      <div class="row mt-1">
        <div class="col-4">
          <div class="row"><button  @click='add' class="btn btn-dark" >Do Click</button> </div>
          <div class="row"><button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button></div>
        </div>
        <div class="col-2"></div>
        <div class="col">
          <div>Transistors: {{cost.comp}}</div>
          <div >Board: {{cost.board}}</div>
          <div> Chips: {{cost.chip}}</div>
          <div>Cpu: {{cost.cpu}}</div>
        </div>
      </div>
      </div>
        
    `
});

full.component('cpuApp', {

    props: ['what', 'locked'],
    data() {
        return {
            count: 0,
            curUpgrade: 0,

            cost: {
                comp: 0,
                cpu: 0,
                chip: 0,
                board: 0
            }
        }
    },
    methods: {
        updateStat() {
            this.cost.comp = (20 + this.curUpgrade) * 500;
            this.cost.board = (5 + this.curUpgrade)
            this.cost.chip = (1 + this.curUpgrade) * 5;
            this.cost.cpu = Math.round((1 + this.curUpgrade) * 1.5)
            this.mod.click = Math.round(1 + (this.curUpgrade * 1.1));
            this.mod.per = Math.round(this.curUpgrade * 0.09);
        },
        add() {
            this.count++
        },
        addOther(x) {
            this.count += x;
        },
        getClickMod() { },
        getPerSec() { }


    },
    template: `
    <div v-if="!ishide">
    <div class="container glass">
    <div class="row text-center"><h3>{{what}}: <span class=""> {{count}}</span></h3></div>
    <div class="row">
        <div class="col">click: {{this.getClickMod()}}</div>
        <div class="col">per sec:{{this.getPerSec()}}</div>
    </div>
    <div class="row mt-1">
        <div class="col-4">
            <div class="row"><button  @click='addComp' class="btn btn-dark" >Do Click</button> </div>
            <div class="row"><button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button></div>
        </div>
<div class="col-2"></div>
        <div class="col">
    <div>Transistors: {{cost.comp}}</div>
            <div >Board: {{cost.board}}</div>
            <div> Chips: {{cost.chip}}</div>
     <div>Cpu: {{cost.cpu}}</div>
            
            
        </div>
    </div>
</div>


  </div>
    `
});

full.component('chipsApp', {

    props: ['what', 'locked'],
    data() {
        return {
            count: 0,
            curUpgrade: 0,

            cost: {
                comp: 0,
                cpu: 0,
                chip: 0,
                board: 0
            }
        }
    },
    methods: {
        updateStat() {
            this.cost.comp = Math.round((20 + this.curUpgrade) * 15);
            if (!boardsApp.ishide || this.curUpgrade > 100) this.cost.board = Math.round((5 + this.curUpgrade) * 15)
            this.cost.chip = Math.round((1 + this.curUpgrade) * 10)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = Math.round((1 + this.curUpgrade) * 1.1)
            this.mod.click = Math.round(1 + (this.curUpgrade * 0.01));
            this.mod.per = Math.round(this.curUpgrade * 0.095);
        },
        add() {
            this.count++
        },
        addOther(x) {
            this.count += x;
        },
        getClickMod() { },
        getPerSec() { }


    },
    template: `
    <div v-if="!ishide">
    <div class="container glass">
    <div class="row text-center"><h3>{{what}}: <span class=""> {{count}}</span></h3></div>
    <div class="row">
        <div class="col">click: {{this.getClickMod()}}</div>
        <div class="col">per sec:{{this.getPerSec()}}</div>
    </div>
    <div class="row mt-1">
        <div class="col-4">
            <div class="row"><button  @click='addComp' class="btn btn-dark" >Do Click</button> </div>
            <div class="row"><button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button></div>
        </div>
<div class="col-2"></div>
        <div class="col">
    <div>Transistors: {{cost.comp}}</div>
            <div >Board: {{cost.board}}</div>
            <div> Chips: {{cost.chip}}</div>
     <div>Cpu: {{cost.cpu}}</div>
            
            
        </div>
    </div>
</div>
    </div>
   
  `
});


full.component('boardsApp', {

    props: ['what', 'locked'],
    data() {
        return {
            count: 0,
            curUpgrade: 0,

            cost: {
                comp: 0,
                cpu: 0,
                chip: 0,
                board: 0
            }
        }
    },
    methods: {
        updateStat() {
            this.cost.comp = (20 + this.curUpgrade) * 45;
            this.cost.board = (5 + this.curUpgrade) * 5;
            this.cost.chip = Math.round((1 + this.curUpgrade) * 2.5)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = Math.round((1 + this.curUpgrade) * 1.1)
            this.mod.click = Math.round(1 + (this.curUpgrade * 1.1));
            this.mod.per = Math.round(this.curUpgrade * .07);
        },
        add() {
            this.count++
        },
        addOther(x) {
            this.count += x;
        },
        getClickMod() { },
        getPerSec() { }


    },
    template: `
    <div v-if="!ishide">
    <div class="container glass">
    <div class="row text-center"><h3>{{what}}: <span class=""> {{count}}</span></h3></div>
    <div class="row">
      <div class="col">click: {{this.getClickMod()}}</div>
      <div class="col">per sec:{{this.getPerSec()}}</div>
    </div>
    <div class="row mt-1">
        <div class="col-4">
            <div class="row"><button  @click='addComp' class="btn btn-dark" >Do Click</button> </div>
            <div class="row"><button @click="DoBuy" class="btn btn-light"><img src="./image/upgrade.jpg" alt="Upgrade arrow" class="upgrade"> </button></div>
        </div>
<div class="col-2"></div>
        <div class="col">
    <div>Transistors: {{cost.comp}}</div>
            <div >Board: {{cost.board}}</div>
            <div> Chips: {{cost.chip}}</div>
     <div>Cpu: {{cost.cpu}}</div>
        </div>
    </div>
</div>
  </div>
    `
});


full.component('robotApp', {
    props: ['what', 'locked'],
    data() {
        return {
            count: 0,
            curUpgrade: 0,
            per: 0,

            cost: {

                comp: 0,
                board: 0,
                chip: 0,
                cpu: 0

            }
        }

    },
    methods: {
        updateStat() {
            this.cost.comp = Math.round(1.5 * (1.09) ** this.curUpgrade);
            if (!boardsApp.ishide || this.curUpgrade > 100) this.cost.board = Math.round(1.2 * (1.09) ** this.curUpgrade);
            if (!chips.ishide || this.curUpgrade > 500) this.cost.chip = Math.round(1.04 * (1.09) ** this.curUpgrade)
            if (!cpuApp.ishide || this.curUpgrade > 750) this.cost.cpu = Math.round(1.01 * (1.09) ** this.curUpgrade)
            this.per = Math.round((this.curUpgrade + 1) * 0.2);
        },

    }

})





full.mount('#full');