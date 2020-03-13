import React from 'react';

import styled from 'styled-components';
import Filter from './Filter';


const Typeahead = (props) => {
let books = props.books
let handler = props.handleSelect;
const [value, setValue] = React.useState('');
const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);
const [searchInput, setSearch] = React.useState('');
//

//

    let matchedBooks = books.filter(book => {
        if(searchInput.length >= 2 && book.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return book;
        }
    
    })

return (
<MainDiv>
    {/* enter needs to dynamically change. */}
    <input type='text' value={searchInput} onKeyDown={(ev) => {

        switch (ev.key) {
            case 'Enter': {
                // let event = ev.key;
                // console.log(event, 'HIIHIHIH')

                // props.handleSelect(ev.target.value)
                props.handleSelect(matchedBooks[selectedSuggestionIndex].title)
                return;
            }
            case 'ArrowUp': {
                if(selectedSuggestionIndex > 0) {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1)
                }
                // 
                break;
            }
            case 'ArrowDown': {
                if(selectedSuggestionIndex < matchedBooks.length - 1)
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1)
                break;

            }
        }

    }} onChange={(ev) => {
        setSearch(ev.target.value)
    }}></input>
    <Btn type='text' type='submit' onClick={() => {
        setSearch('')
    }}>Clear</Btn>
    <StyledList>
    <Filter theHandler={props.handleSelect} 
    setSelectedSuggestionIndex={setSelectedSuggestionIndex}
    selectedSuggestionIndex={selectedSuggestionIndex} searchInput={searchInput} dataEntered={searchInput} 
    matchedBooks={matchedBooks}/>
    
    </StyledList>

    
</MainDiv>
)
}
  // const [hover, setHover] = React.useState('lightblue');
  // const backgroundColor = hover ? "lightblue" :  "white";
   //double check
// onMouseEnter = {() => setHover('white')} style={{ backgroundColor }} 


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

