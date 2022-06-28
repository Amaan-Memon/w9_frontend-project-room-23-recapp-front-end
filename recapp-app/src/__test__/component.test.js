import React from "react";
import {render, fireEvent} from "@testing-library/react";
import NavBar from "../Components/NavBar/NavBar";
import searchbar from "../Components/SearchBar/SearchBar";

// describe('Screen 1', () => {
//   it('navigates on button press', () => {
//     const push = jest.fn();
//     const { getByText } = render(<NavBar navigation={{ push }} />);
//     fireEvent.press(getByText('Go to Screen 2'));
//     expect(push).toHaveBeenCalledWith('Screen2');
//   });
// });



// it("renders without errors", ()=>{
//     const div = document.createElement("div");
//     ReactDOM.render(<button></button>, div)
// })

it ("renders correctlt", () =>{
    const {queryByTestId, queryByPlaceholderText}=render(<searchBar></searchBar>)
    expect(queryByTestId("searchbar--button")).toBeTruthy()
    expect(queryByPlaceholderText('searchbar')).toBeTruthy()
})

decribe("setUserValue",() =>{
    it("it updates on change", ()=>{
        const {queryByPlaceholderText} = render(<searchBar/>)
        const searchInput = queryByPlaceholderText('search');
        fireEvent.change(searchInput,{target: {value: "test"}})

        expect(searchInput.value).tobe("test")

    })

},

describe('seach button', ()=> {
    decribe("with empty query", ()=> {
        it("does not trigger requestSearch function", ()=>{
            const earBar =jest.fn();

            const {queryBtestId} = render(<SearchBar earBar={earBar}/>)

            fireEvent.click(queryByTestId('search--button'))


            expect("Search resources").not.toHaveBeenCalled()



        })
    })


    describe('with data inside query', ()=> {
        it("triggers requestSearch funtion", ()=>{

            const earBar =jest.fn();

            const {queryBtestId, queryAllByPlaceholderText} = render(<SearchBar earBar={earBar}/>)
            const searchInput = queryByPlaceholderText('search');


            fireEvent.change(searchInput, {target: {value: "test"}})


            fireEvent.click(queryByTestId('search--button'))


            expect("Search resources").toHaveBeenCalled();
        })
    
    })
    
    

})