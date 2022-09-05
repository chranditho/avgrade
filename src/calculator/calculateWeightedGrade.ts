export interface Course {
  name?: string;
  ECTS: number;
  grade?: number;
}

export const calculateWeightedGrade = (course: Course) => {
  return course.grade === undefined ? 0 : course.ECTS * course.grade;
};

export const calculateAverageWeightedGrade = (courses: Course[]) => {
  const totalWeightedGrade = courses.reduce(
    (sum, course) => sum + calculateWeightedGrade(course),
    0
  );
  const totalECTS = courses.reduce((sum, course) => sum + course.ECTS, 0);

  return totalECTS === 0 ? 0 : totalWeightedGrade / totalECTS;
};
