import {unlocky} from './comps/unlocky'

const full= Vue.createApp(
{

    data(){
    return{
        isLocked:
        {
            comp:false,
            chip:true,
            board:true,
            cpu:true,
            robot:true,
            fabricator:true,
            assembler:true,
            printer:true,

        }

    }
},

});


full.component('compapp',{
    components: {unlocky},
    props:['what', 'locked'],
    data(){
        return{
            count:0,
            curUpgrade:0,

            cost:{
                comp:0,
                cpu:0,
                chip:0,
                board:0
            }
        }
    },
    methods:{
        updateStat() {
            this.cost.comp = (20 + this.curUpgrade) * 2;
            if (!boardsApp.ishide || this.curUpgrade > 50) this.cost.board = Math.round((5 + this.curUpgrade) * 1.5)
            if (!chips.ishide || this.curUpgrade > 200) this.cost.chip = Math.round((1 + this.curUpgrade) * 1.09)
            if (!cpuApp.ishide || this.curUpgrade > 500) this.cost.cpu = Math.round((1 + this.curUpgrade) * 1.001)
            this.mod.click = Math.round(1 + (this.curUpgrade * 0.9));
            this.mod.per = Math.round(this.curUpgrade * 0.05);

        },
        add()
        {
            this.count++
        },
        addOther(x)
        {
            this.count+=x;
        },
        getClickMod(){},
        getPerSec(){}


    },
    template:`
      
      <div class="container glass" v-if=!isLocked[what]>
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

full.mount('#full');

