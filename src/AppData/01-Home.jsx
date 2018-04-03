import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class SingersComp extends Component {

  render() {
    // console.log(this.props.data)
    const { loading, allSingers } = this.props.data
    console.log("All Singers: ", allSingers)

    return(
      <div>
        <h2>All Games in DataBase..</h2>
        <p>Here is the list of all the games in the database, make shure all info is correct.</p>

        <div>

          {!loading && allSingers.map( (singer) => { return(
                <div key={singer.id}>
                <div>
                    <img src={singer.picture} alt="MP"/>
                </div>
                <div>
                    <div><strong>Name: </strong>{singer.name}</div>
                    <div><strong>Country: </strong>{singer.genre}</div>
                </div>
                </div>
            ) } )}

        </div>

      </div>
    )
  }
}

const QUERY = gql`query {
                            allSingers{
                            id
                            name
                            country
                            picture
                            }
                        } `

export default graphql(QUERY)(SingersComp)

// ?raw=true
