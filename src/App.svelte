<script lang="ts">
  import { calculateAverageWeightedGrade } from "./calculator/calculateWeightedGrade";
  import { courses, weightedGrade } from "./store.js";
  import { GradientHeading } from "@brainandbones/skeleton";
  import formatter from "./util/formatter.js";
  import AddIcon from "./lib/AddIcon.svelte";
  import RemoveIcon from "./lib/RemoveIcon.svelte";

  const setGrade = (): void => {
    const result = calculateAverageWeightedGrade($courses);
    weightedGrade.set(result);
  };
  const addCourse = (): void => {
    let ECTS = 0, grade = 0;
    courses.update((courses) => [
      ...courses,
      {
        ECTS,
        grade
      }
    ]);
  };
  const removeCourse = (index: number): void => {
    courses.update((courses) => {
      courses.splice(index, 1);
      return courses;
    });
  };
</script>

<section class="flex flex-col justify-center gap-y-12 pt-48">
  <GradientHeading
    tag="h1"
    aria-level="1"
    direction="bg-gradient-to-r" from="from-primary-500" to="to-accent-500"
    class="text-5xl font-bold text-center mb-2"
  >
    avGrade
  </GradientHeading>
  {#each $courses as course}
    <article class="flex gap-4 justify-center">
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
    </article>
  {/each}
  <article class="flex gap-4 justify-center">
    <button
      class="btn-icon btn-filled-secondary"
      on:click={addCourse}
    >
      <AddIcon />
      Add Course
    </button>
    <button
      class="btn-icon btn-filled-secondary"
      on:click={removeCourse}
    >
      <RemoveIcon />
      Remove Course
    </button>
  </article>
  <button
    class="btn btn-filled-primary"
    on:click={setGrade}
  >
    <span>Calculate</span>
  </button>
  <article class="flex gap-x-4 justify-center font-bold">
    <p>Gewichtete Note:</p>
    <div id="weightedGrade">{formatter.format($weightedGrade)}</div>
  </article>
</section>
