import sum from "../../mocks/sum";

test("check if sum works",()=> {
const answer = sum(2,3);
expect(answer).toEqual(5);
})