import { writable } from "svelte/store";
import type { Course } from "./calculator/calculateWeightedGrade";

export const weightedGrade = writable(0);

const initCourse: Course = { ECTS: 0, grade: 0 };
export const courses = writable([initCourse]);
