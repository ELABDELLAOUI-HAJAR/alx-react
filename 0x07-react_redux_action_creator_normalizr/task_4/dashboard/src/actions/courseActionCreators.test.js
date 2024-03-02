import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";


describe("Tests for course actions", () => {
    it("Verify that calling selectCourse action return the correct data", () => {
        const expectedOutput = { type: SELECT_COURSE, index: 1 };

        expect(selectCourse(1)).toEqual(expectedOutput);
    });

    it("Verify that calling unSelectCourse action return the correct data", () => {
        const expectedOutput = { type: UNSELECT_COURSE, index: 1 };

        expect(unSelectCourse(1)).toEqual(expectedOutput);
    });
});
