import React from 'react';
import data from '../data';
import styled from 'styled-components';



const Filter = ({selectedSuggestionIndex, dataEntered, matchedBooks, theHandler, searchInput}) => {


  // let splicedTitle = letterCount.splice(0, letterCount);
  // console.log(splicedTitle);
const [changeIndex, setchangeIndex] = React.useState(false);
const indexColor = changeIndex ? 'blue': 'lightyellow';
// const [hover, setHover] = React.useState(false);
// const color = hover ? "red" :  "black"; //double check
{/* <li onClick={() => setHover(!hover)} onClick={() => theHandler(book.title) } style={{indexColor}}> */}


    return (

      matchedBooks.map((book,index) => {

        if(selectedSuggestionIndex === index) {
          setchangeIndex(true) 
        }

        let title = book.title;
        let firstIndex = title.toLowerCase().indexOf(searchInput.toLowerCase());
        let endIndex = firstIndex + searchInput.length;
        let splitTitle = title.split('');
        let boldPart = splitTitle.slice(firstIndex,endIndex);
        let firsthalfSplit = splitTitle.slice(0,firstIndex)
        let secondhalfSplit = splitTitle.slice(endIndex,splitTitle.length)

          return (
            <ListDiv>
              <ul >
                  <li onClick={() => theHandler(book.title) } style={{indexColor}}>
                    <strong>{firsthalfSplit}</strong>
                    <span>{boldPart}</span>
                    <strong>{secondhalfSplit}</strong>
                    <div>{data.categories[book.categoryId].name}</div>
              
                  </li>

              </ul>
              </ListDiv>
          )
      })

    )

}

export default Filter;


const ListDiv = styled.div`
background-color: lightyellow;
width: 80%;
border-radius: 25px;
transition: 0.5s ease all;
&:hover {
    border-radius: 25px;
    background-color: orange;
    cursor: pointer;
}
ul li {
    padding: 10px;
    margin: 0;

}
`
