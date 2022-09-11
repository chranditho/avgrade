<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import { calculateAverageWeightedGrade } from "./calculator/calculateWeightedGrade";
  import { weightedGrade, courses } from "./store.js";
  import { Button } from "@brainandbones/skeleton";
  import Logo from "./lib/Logo.svelte";
  import AddButton from "./lib/AddButton.svelte";

  let ECTS = 0;
  let grade = 0;

  const setGrade = () => {
    const result = calculateAverageWeightedGrade($courses);
    weightedGrade.set(result);
  };
  const addCourse = () => {
    courses.update((courses) => [
      ...courses,
      {
        ECTS,
        grade,
      },
    ]);
    console.log(courses);
  };

</script>

<section class="flex flex-col justify-center gap-y-12 pt-48">
  <Navbar />
  {#each $courses as course}
  <section class="flex gap-4 justify-center">
    <div>
      <label class="block text-sm font-bold mb-2" for="grade">
        ECTS
      </label>
      <input id="ECTS" type="number" bind:value={course.ECTS}
             class="appearance-none text-primary-500 dark:text-accent-300 dark:bg-neutral-800 rounded w-72" />
    </div>
    <div>
      <label class="block text-sm font-bold mb-2" for="grade">
        Grade
      </label>
      <input id="grade" type="number" min="1" max="5" bind:value={course.grade}
             class="appearance-none text-primary-500 dark:text-accent-300 dark:bg-neutral-800 rounded w-72" />
    </div>
  </section>
  {/each}
  <Button
    variant="filled-white"
    on:click={addCourse}
    width="w-32 self-center"
  >
    <svelte:fragment slot="lead">
      <AddButton />
    </svelte:fragment>
    Add Course
  </Button>
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
  <div class="flex gap-x-4 justify-center font-bold">
    <p>Gewichtete Note:</p>
    <div id="weightedGrade">{$weightedGrade}</div>
  </div>
</section>
