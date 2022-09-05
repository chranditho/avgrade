export interface Course {
  name?: string;
  ECTS: number;
  grade?: Grade;
}

export enum Grade {
  "EXCELLENT" = 1,
  "VERY_GOOD" = 2,
  "AVERAGE" = 3,
  "BELOW_AVERAGE" = 4,
  "FAILURE" = 5,
}

export const calculateWeightedGrade = (course: Course) =>
  course.ECTS <= 0 || course.grade === undefined
    ? 0
    : course.ECTS * course.grade;

export const calculateAverageWeightedGrade = (courses: Course[]) => {
  const totalWeightedGrade = courses.reduce(
    (sum, course) => sum + calculateWeightedGrade(course),
    0
  );
  const totalECTS = courses.reduce((sum, course) => sum + course.ECTS, 0);

  return totalECTS === 0 ? 0 : totalWeightedGrade / totalECTS;
};
