import {describe, expect, it} from "vitest";
import calculateWeightedGrade from "./calculateWeightedGrade";

describe("weightedGradeCalculator", () => {

    it("should calculate the weighted grade SZENARIO 1", () => {
        const course = {
            ECTS: 5,
            grade: 2,
        }
        const actual = calculateWeightedGrade(course);
        const expected = 10;

        expect(actual).toBe(expected);
    });

    it("should calculate the weighted grade SZENARIO 2", () => {
        const course = {
            ECTS: 4,
            grade: 3,
        }
        const actual = calculateWeightedGrade(course);
        const expected = 12;

        expect(actual).toBe(expected);
    });

    it("should calculate the weighted grade SZENARIO 3", () => {
        const course = {
            ECTS: 2.5,
            grade: 5,
        }
        const actual = calculateWeightedGrade(course);
        const expected = 12.5;

        expect(actual).toBe(expected);
    });

    it("should calculate the weighted grade SZENARIO 4", () => {
        const course = {
            ECTS: 1,
            grade: 3,
        }
        const actual = calculateWeightedGrade(course);
        const expected = 3;

        expect(actual).toBe(expected);
    });

    it("should calculate the weighted grade SZENARIO 5", () => {
        const course = {
            ECTS: 4,
        }
        const actual = calculateWeightedGrade(course);
        const expected = 0;

        expect(actual).toBe(expected);
    });
});
