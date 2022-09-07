<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import type { Course } from "./calculator/calculateWeightedGrade";
  import { calculateAverageWeightedGrade } from "./calculator/calculateWeightedGrade";
  import { weightedGrade } from "./store.js";

  let ECTS = 0;
  let grade = 0;

  const setGrade = () => {
    let course: Course = {
      ECTS,
      grade
    };
    const result = calculateAverageWeightedGrade([course]);
    weightedGrade.set(result);
  };

</script>

<div class="flex flex-col justify-center gap-y-12">
  <Navbar />
  <div class="flex gap-4 justify-center">
    <div>
      <p>ECTS</p>
      <input type="number" bind:value={ECTS} class="text-primary-500 rounded" />
    </div>
    <div>
      <p>Grade</p>
      <input type="number" min="1" max="5" bind:value={grade} class="text-accent-500 rounded" />
    </div>
  </div>
  <button on:click={setGrade}>Set</button>
  <div class="flex gap-x-4 justify-center">
    <p>Gewichtete Note:</p>
    <div id="weightedGrade">{$weightedGrade}</div>
  </div>
</div>
