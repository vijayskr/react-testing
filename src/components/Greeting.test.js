import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';

//Defining TEST SUITE
describe('Greeting Component', () =>{
    //Add more test cases like below to group them
    // this can be for a feature, component, group of scenarios etc.,
    test('renders good to see you if the button was not clicked', () => {
        render(<Greeting />);
        const goodtoseeElement = screen.getByText(/good to see you/i, {exact: false});
        expect(goodtoseeElement).toBeInTheDocument();
    });

    test('renders changed if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const changedElement = screen.getByText(/changed/i, {exact: false});
        expect(changedElement).toBeInTheDocument();
    });

    test('does not render good to see you if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outPutElement = screen.queryByText(/good to see you/i, {exact: false});
        expect(outPutElement).toBeNull();
    });
});

//My First React test case which finds an element in the document
test('renders Hello World as a text', () => {
    //3 A's Rule
    /* 
    Arrange
    Act
    Assert */

    //Arrange
    render(<Greeting />);

    //Act
    // ... for now nothing

    //Assert
    const helloWorldElement = screen.getByText(/hello world/i, {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
});