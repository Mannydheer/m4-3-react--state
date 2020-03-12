import React from 'react';

import styled from 'styled-components';
import Filter from './Filter';


const Typeahead = (props) => {
let books = props.books
const [searchInput, setSearch] = React.useState('');

    let matchedBooks = books.filter(book => {
        if(searchInput.length >= 2 && book.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return book;
        }
    
    })
    // .slice(0,5)


return (
<MainDiv>
    {/* enter needs to dynamically change. */}
    <input type='text' value={searchInput} onKeyDown={(ev) => {
        {if (ev.key === 'Enter') {
           props.handleSelect(searchInput)
        }}
    }} onChange={(ev) => {
        setSearch(ev.target.value)
    }}></input>
    <Btn type='text' type='submit' onClick={() => {
        setSearch('')
    }}>Clear</Btn>
    <StyledList>
    <Filter searchInput={searchInput} dataEntered={searchInput} matchedBooks={matchedBooks} theHandler={props.handleSelect}/>
    
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

`

const Btn = styled.button`
border-radius: 25px;
background-color: blue;
color: white;
font-size: 20px;
height: 30px;
width: 70px;10
`