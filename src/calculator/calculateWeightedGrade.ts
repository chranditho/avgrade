export interface Course {
    name?: string;
    ECTS: number;
    grade?: number;
}

const calculateWeightedGrade = (course: Course) => {
    if (course.grade === undefined) {
        return 0;
    }
    return course.ECTS * course.grade;
}

export default calculateWeightedGrade;
