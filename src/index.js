import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './AppData/EndPoint/EndPoint'
// --------
import MainComp from './AppData/00-Main.jsx'


const IndexComp = () => {

  return (
    <ApolloProvider client={client} >
     <MainComp />
    </ApolloProvider>
  )
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))

