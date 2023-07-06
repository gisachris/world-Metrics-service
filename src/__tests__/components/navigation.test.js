import { MemoryRouter } from "react-router";
import { render,screen } from "@testing-library/react";
import Navigation from "../../components/navigation";

describe("Navigation Display snapshot Testing", ()=> {
    test("testing navigation with Snapshot", ()=> {
        const tree = render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        )
        expect(tree).toMatchSnapshot();
    })

    test("testing if components displayed correctly", ()=> {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        )

        expect(screen.getByText('World Metrics')).toBeInTheDocument();
    })
})