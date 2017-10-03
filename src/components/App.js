import React, { Component } from "react"
import "../styles/App.css"
import BookDetail from "../containers/BookDetail"
import BookList from "../containers/BookList"

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BookList />
          <BookDetail />
        </div>
      </div>
    )
  }
}

export default App
