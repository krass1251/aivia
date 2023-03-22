<template>
  <div class="game-container">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          @input="initializeGame"
          label="Width"
          single-line
          type="number"
          :min="0"
          :max="100"
          v-model.number="width"/>
      </v-col>
      <v-col cols="12" md="6">
        <v-spacer></v-spacer>
        <v-text-field
          @input="initializeGame"
          label="Height"
          single-line
          type="number"
          :min="0"
          :max="100"
          v-model.number="height"/>
      </v-col>
    </v-row>

    <div class="game-area">
      <div v-for="i in height" :key="`row-${i}`" class="game-row">
        <div
          v-for="j in width"
          :key="`col-${j}`"
          class="cell"
          :class="{ 'cell--active': cells?.[i-1]?.[j-1] }"
          @mouseenter="changeCellState(i-1, j-1)">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';

const width = ref(10);
const height = ref(10);
const cells = ref([]);

function changeCellState(x, y) {
  cells.value[x][y] = !cells.value[x][y];
}

function initializeGame() {
  cells.value = Array.from({length: height.value}, () => new Array(width.value).fill(false));
}

watch([width, height], initializeGame, {immediate: true});

</script>

<style scoped>
.game-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.game-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 35px;
  background-color: #3f3f3f;
  border-radius: 5px;
  overflow: scroll;
}

.game-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
}

.cell {
  flex: 0 0 35px;
  height: 35px;
  border: 2px solid #ffffff;
  background-color: #d3d3d3;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cell--active {
  background-color: #03a9f4;
}
</style>
