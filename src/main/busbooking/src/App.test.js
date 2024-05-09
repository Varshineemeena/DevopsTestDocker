import {render,screen, waitFor}from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./common/NavBar";
jest.mock("react-router-dom");

test("checking title",async()=>{
    render(<NavBar />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("titletab")
        expect(linkElement).toBeInTheDocument();
    })
})

test("checking title",async()=>{
    render(<NavBar />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("bookingtab")
        expect(linkElement).toBeInTheDocument();
    })
})

test("checking title",async()=>{
    render(<NavBar />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("usertab")
        expect(linkElement).toBeInTheDocument();
    })
})
test("checking title",async()=>{
    render(<NavBar />);
    await waitFor(()=>{
        const linkElement = screen.getByTestId("bustab")
        expect(linkElement).toBeInTheDocument();
    })
})





