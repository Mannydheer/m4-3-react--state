import React from 'react';
import data from '../data';
import styled from 'styled-components';

const mouseEnter = (title) => {
  window.alert(title);
}
  // const [changeIndex, setchangeIndex] = React.useState(false);
  // const indexColor = changeIndex ? 'blue': 'lightyellow';
  // const [hover, setHover] = React.useState(false);
  // const color = hover ? "red" :  "black"; //double check
const Filter = ({
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
  dataEntered,
  matchedBooks,
  theHandler,
  searchInput,
   
}) => {

  const [hover, setHover] = React.useState(false);
  const backgroundColor = hover ? "blue" :  "white";
console.log(hover, 'hover is here')
  // const [hover, setHover] = React.useState('lightblue');
  // const backgroundColor = hover ? "lightblue" :  "white";
   //double check
// onMouseEnter = {() => setHover('white')} style={{ backgroundColor }} 
  
  return (

    matchedBooks.map((book, index) => {



      let title = book.title;
      let firstIndex = title.toLowerCase().indexOf(searchInput.toLowerCase());
      let endIndex = firstIndex + searchInput.length;
      let splitTitle = title.split('');
      let boldPart = splitTitle.slice(firstIndex, endIndex);
      let firsthalfSplit = splitTitle.slice(0, firstIndex)
      let secondhalfSplit = splitTitle.slice(endIndex, splitTitle.length)
      // onKeyDown = {() => 
      return ( <ListDiv>
      <ul>
          <li
          onClick = {() => theHandler(book.title)} 
          style = {(selectedSuggestionIndex === index) ? {'backgroundColor': 'lightblue'} : {'backgroundColor': 'white'}}
          onMouseEnter = { () => {setSelectedSuggestionIndex(index)}}
          >
          
            <strong>{firsthalfSplit}</strong>
            <span>{boldPart}</span> 
            <strong> {secondhalfSplit} </strong> 
            <div> {data.categories[book.categoryId].name}</div>
        </li>
      </ul> 
        </ListDiv>
      )
    })

  )

}

export default Filter;


const ListDiv = styled.div `
// background-color: lightyellow;
width: 80%;
border-radius: 25px;
transition: 0.5s ease all;
&:hover {
//     border-radius: 25px;
//     background-color: orange;
//     cursor: pointer;
}
ul li {
    padding: 10px;
    margin: 0;

}
`