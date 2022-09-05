<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import type {Course} from "./calculator/calculateWeightedGrade";
    import {calculateAverageWeightedGrade} from "./calculator/calculateWeightedGrade";

    const math: Course = {ECTS: 5, grade: 3};
    const english: Course = {ECTS: 5, grade: 1};
    const spanish: Course = {ECTS: 1, grade: 4};
    const courses: Course[] = [math, english, spanish];

    const weightedGrade = calculateAverageWeightedGrade(courses);
</script>

<div class="flex flex-col justify-center gap-y-12">
    <Navbar/>
    <div class="flex gap-x-4 justify-center">
        <p>Gewichtete Note:</p>
        <div id="weightedGrade">{weightedGrade}</div>
    </div>
</div>
