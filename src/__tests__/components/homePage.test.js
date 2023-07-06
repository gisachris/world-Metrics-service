import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import HomePage from "../../components/homepage";

describe("homepage Display snapshot Testing", ()=> {
    test("testing homepage with Snapshot", ()=> {
        const tree = render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )
        expect(tree).toMatchSnapshot();
    })
})