import React from 'react';

import styled from 'styled-components';
import Filter from './Filter';


const Typeahead = (props) => {
let books = props.books
const [value, setValue] = React.useState('');
const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);
const [searchInput, setSearch] = React.useState('');

    let matchedBooks = books.filter(book => {
        if(searchInput.length >= 2 && book.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return book;
        }
    
    })
    console.log(selectedSuggestionIndex)    // .slice(0,5)

return (
<MainDiv>
    {/* enter needs to dynamically change. */}
    <input type='text' value={searchInput} onKeyDown={(ev) => {

        switch (ev.key) {
            case 'Enter': {
                props.handleSelect(ev.target.value)
                return;
            }
            case 'ArrowUp': {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1)
                // 
            }
            case 'ArrowDown': {
                // 
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1)

            }
        }
        // {if (ev.key === 'Enter') {
        //    props.handleSelect(searchInput)
        // }}
    }} onChange={(ev) => {
        setSearch(ev.target.value)
    }}></input>
    <Btn type='text' type='submit' onClick={() => {
        setSearch('')
    }}>Clear</Btn>
    <StyledList>
    <Filter selectedSuggestionIndex={selectedSuggestionIndex} searchInput={searchInput} dataEntered={searchInput} matchedBooks={matchedBooks} theHandler={props.handleSelect}/>
    
    </StyledList>

    
</MainDiv>
)
}


export default Typeahead;
const MainDiv = styled.div`
margin: auto;
width: 20vw;
`
const StyledList = styled.div`
ul {
    padding: 0px;
    list-style-type: none;

}
box-shadow: -1px 9px 24px 0px rgba(0, 0, 0, 0.75);
padding: 10px;
background-color: lightyellow;


`

const Btn = styled.button`
border-radius: 25px;
background-color: blue;
color: white;
font-size: 20px;
height: 30px;
width: 70px;10
`