import React from 'react';
import data from '../data';
import styled from 'styled-components';



const Filter = ({dataEntered, matchedBooks, theHandler, searchInput}) => {


  // let splicedTitle = letterCount.splice(0, letterCount);
  // console.log(splicedTitle);

const [hover, setHover] = React.useState(false);
const color = hover ? "red" :  "black" //double check
    return (

      matchedBooks.map(book => {
        // let firstHalf = book.title.splice(0, letterCount);
        let title = book.title;
        let firstIndex = title.toLowerCase().indexOf(searchInput.toLowerCase());
        let endIndex = firstIndex + searchInput.length;

        // console.log(firstIndex)
        let splitTitle = title.split('');
        let boldPart = splitTitle.slice(firstIndex,endIndex);

        // console.log(data.categories[book.categoryId].name)

        let firsthalfSplit = splitTitle.slice(0,firstIndex)
        // console.log(firsthalfSplit)
        let secondhalfSplit = splitTitle.slice(endIndex,splitTitle.length)

          return (
            <ListDiv>
              <ul >
                  <li onClick={() => setHover(!hover)} onClick={() => theHandler(book.title) } style={{color}}>
                    {
                      
                    
                    }
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
