import * as React from 'react';

const myObject = [
  {
    title: 'React',
    url: 'https://reactsjs.org/',
    number: 1,
    author: 'Michael Leppe'
  },
  {
    title: 'Angular',
    url: 'https://angularjs.org/',
    number: 2,
    author:'Maicol Jackson'
  },
  {
    title: 'Vue',
    url: 'https://vuejs.org/',
    number: 3,
    author:'Extra chromosome enjoyer'
  }
]



function List() {
  return (
    <ul>
      {myObject.map(function (item) {
        return (
          <li key={item.number}>
            <span>
              <a href={item.url}>Title(with url): {item.title}</a>
            </span>
            <br></br>
            <span>
              Author: {item.author}
            </span>
            <br></br>
            <span>
              Key: {item.number}
            </span>
            
          </li>
        )
      })}
    </ul>
  )
}





function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <List />
    </div>
  )
}

export default App
