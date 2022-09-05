import { describe, expect, it } from "vitest";
import {
  calculateAverageWeightedGrade,
  calculateWeightedGrade,
  Grade,
} from "./calculateWeightedGrade";

describe("weightedGradeCalculator", () => {
  describe("should return the weighted grade", () => {
    it("SZENARIO 1", () => {
      const course = {
        ECTS: 5,
        grade: Grade["VERY_GOOD"],
      };
      const actual = calculateWeightedGrade(course);
      const expected = 10;

      expect(actual).toBe(expected);
    });

    it("SZENARIO 2", () => {
      const course = {
        ECTS: 4,
        grade: Grade.AVERAGE,
      };
      const actual = calculateWeightedGrade(course);
      const expected = 12;

      expect(actual).toBe(expected);
    });

    it("SZENARIO 3", () => {
      const course = {
        ECTS: 2.5,
        grade: Grade.FAILURE,
      };
      const actual = calculateWeightedGrade(course);
      const expected = 12.5;

      expect(actual).toBe(expected);
    });

    it("SZENARIO 4", () => {
      const course = {
        ECTS: -3,
        grade: Grade.EXCELLENT,
      };
      const actual = calculateWeightedGrade(course);
      const expected = 0;

      expect(actual).toBe(expected);
    });

    it("SZENARIO 5", () => {
      const course = {
        ECTS: 4,
      };
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
          grade: Grade.EXCELLENT,
        },
        {
          ECTS: 4,
          grade: Grade.AVERAGE,
        },
        {
          ECTS: 2,
          grade: Grade.BELOW_AVERAGE,
        },
      ];

      const actual = calculateAverageWeightedGrade(courses);
      const expected = 2.272727272727273;

      expect(actual).toBe(expected);
    });
  });
});
