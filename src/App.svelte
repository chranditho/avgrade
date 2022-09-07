<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import type { Course } from "./calculator/calculateWeightedGrade";
  import { calculateAverageWeightedGrade } from "./calculator/calculateWeightedGrade";
  import { weightedGrade } from "./store.js";
  import { Button } from "@brainandbones/skeleton";
  import Logo from "./lib/Logo.svelte";

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

<section class="flex flex-col justify-center gap-y-12 pt-48">
  <Navbar />
  <div class="flex gap-4 justify-center">
    <div>
      <p>ECTS</p>
      <input type="number" bind:value={ECTS} class="appearance-none text-primary-500 dark:text-accent-300 dark:bg-neutral-800 rounded" />
    </div>
    <div>
      <p>Grade</p>
      <input type="number" min="1" max="5" bind:value={grade} class="appearance-none text-primary-500 dark:text-accent-300 dark:bg-neutral-800 rounded" />
    </div>
  </div>
  <Button
    variant="filled-primary"
    on:click={setGrade}
    width="w-32 self-center"
  >
    <svelte:fragment slot="lead">
      <Logo />
    </svelte:fragment>
    Calculate
  </Button>
  <div class="flex gap-x-4 justify-center">
    <p>Gewichtete Note:</p>
    <div id="weightedGrade">{$weightedGrade}</div>
  </div>
</section>
