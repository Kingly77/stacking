<template>
  <div class="container glass">
        <button @click="doUnlock" id="doUnlock" class="btn btn-dark">
          {{listoupgrade[curUpgrade].name}}
        </button>
        <div class="mt-1">Transistor: {{getCost().comp}}</div>
        <div>Board: {{getCost().board}}</div>
        <div> Chips: {{getCost().chip}}</div>
        <div>Cpu: {{getCost().cpu}}</div>
  </div>
</template>

<script>
export default {
  name: "unlocky",
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
          doBuy: () => { this.isLocked.robot = false;
            console.log(this.isLocked.robot)}
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
          doBuy: () => { this.isLocked.chip = false }
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
          doBuy: () => { this.isLocked.assembler = false }
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
          doBuy: () => { this.isLocked.boards = false }
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
          doBuy: () => { this.isLocked.printer= false; }
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
          doBuy: () => { this.isLocked.cpu = false }
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
          doBuy: () => { this.isLocked.fabricator = false }
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

      this.curUpgrade++;

    },
    getCost() {
      return this.listoupgrade[this.curUpgrade].cost;
    },

  },

}
</script>

<style scoped>

</style>