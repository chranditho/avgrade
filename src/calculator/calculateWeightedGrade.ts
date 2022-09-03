export interface Course {
    name?: string;
    ECTS: number;
    grade?: number;
}

export const calculateWeightedGrade = (course: Course) => {
    if (course.grade === undefined) {
        return 0;
    }
    return course.ECTS * course.grade;
}

export const calculateAverageWeightedGrade = (courses: Course[]) => {
    const totalWeightedGrade = courses.reduce((sum, course) => sum + calculateWeightedGrade(course), 0);
    const totalECTS = courses.reduce((sum, course) => sum + course.ECTS, 0);
    return totalWeightedGrade / totalECTS;
}
