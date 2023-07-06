import { MemoryRouter } from "react-router";
import { render,screen } from "@testing-library/react";
import Continents from "../../components/continents";

describe("continents Display snapshot Testing", ()=> {
    test("testing continents with Snapshot", ()=> {
        const tree = render(
            <MemoryRouter>
                <Continents />
            </MemoryRouter>
        )
        expect(tree).toMatchSnapshot();
    })
})