import {describe, expect, it} from "vitest";
import {calculateAverageWeightedGrade, calculateWeightedGrade} from "./calculateWeightedGrade";


describe("weightedGradeCalculator", () => {
    describe("should return the weighted grade", () => {
        it("SZENARIO 1", () => {
            const course = {
                ECTS: 5,
                grade: 2,
            }
            const actual = calculateWeightedGrade(course);
            const expected = 10;

            expect(actual).toBe(expected);
        });

        it("SZENARIO 2", () => {
            const course = {
                ECTS: 4,
                grade: 3,
            }
            const actual = calculateWeightedGrade(course);
            const expected = 12;

            expect(actual).toBe(expected);
        });

        it("SZENARIO 3", () => {
            const course = {
                ECTS: 2.5,
                grade: 5,
            }
            const actual = calculateWeightedGrade(course);
            const expected = 12.5;

            expect(actual).toBe(expected);
        });

        it("SZENARIO 4", () => {
            const course = {
                ECTS: 1,
                grade: 3,
            }
            const actual = calculateWeightedGrade(course);
            const expected = 3;

            expect(actual).toBe(expected);
        });

        it("SZENARIO 5", () => {
            const course = {
                ECTS: 4,
            }
            const actual = calculateWeightedGrade(course);
            const expected = 0;

            expect(actual).toBe(expected);
        });
    });

    describe("CalculateAverageWeightedGrade", () => {
        it("should return the average weighted grade", () => {
            const courses = [
                {
                    ECTS: 5,
                    grade: 2,
                },
                {
                    ECTS: 4,
                    grade: 2,
                },
                {
                    ECTS: 2,
                    grade: 2,
                }
            ];

            const actual = calculateAverageWeightedGrade(courses);

            expect(actual).toBe(2);
        });
    });
});
