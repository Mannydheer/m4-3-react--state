import React from 'react';
import data from '../data';
import styled from 'styled-components';



const Filter = ({dataEntered, matchedBooks, theHandler, searchInput}) => {

const [hover, setHover] = React.useState(false);
const color = hover ? "red" :  "black" //double check

    return (
      matchedBooks.map(book => {
          return (
            <ListDiv>
              <ul >
                  <li onClick={() => setHover(!hover)} onClick={() => theHandler(book.title) } style={{color}}>{book.title}
                  </li>

              </ul>
              </ListDiv>
          )
      })

    )

}

export default Filter;


const ListDiv = styled.div`
// background-color: white;
// width: 80%;
// &:hover {
//     background-color: yellow;
//     cursor: pointer;
// }
// ul li {
//     padding: 10px;
//     margin: 0;

}
`
