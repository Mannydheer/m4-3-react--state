import React from 'react';
import Typeahead from './Typeahead'
import styled from 'styled-components';



function App(props) {
    // TODO!
    let bookData = props.data;
    return (
        <AppDiv>
            <Typeahead books = {bookData} handleSelect={(suggestion) => {
                window.alert(suggestion)
            }}></Typeahead>
        </AppDiv>
    )
}

export default App;

const AppDiv = styled.div `
height: 100%
`
