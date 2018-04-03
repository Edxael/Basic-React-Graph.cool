import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createSinger(
                    country: String!,
                    name: String!,
                    picture: String
                )
  {
    createSinger( country: $country, name: $name, picture: $picture ) {
      country
      name
      picture
    }
  }
`

class AddSinger extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: "", country:"", picture:"" }
  }

  exe1 = ()=>{
    console.log("Add Singer executed")
    console.log(this.state)

    this.props.mutate({
            variables: {  county: this.state.country,
                          picture: `${this.state.picture}?raw=true`,  
                          name: this.state.name }
    })

    this.setState({ name: "", county:"", picture:"" })

  }


  render(){
    return(
      <div>

        <h2>Add Singer</h2>
        <p>To add a singer to the DataBase put the information requested then click button <strong>Add Singer</strong></p>

        <div>
          <form>
            <div> <label>Name:  </label> <input type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
            <div> <label>Country:  </label> <input type="text" placeholder="Country..." value={this.state.country} onChange={ (event) => { this.setState({ country: event.target.value }) } } /></div>
            
            <div> <label>Picture:  </label> <input type="text" placeholder="picture..." value={this.state.picture} onChange={ (event) => { this.setState({ picture: event.target.value }) } } /></div>
          </form>

          <br/>

          <button onClick={()=>{this.exe1()}} >Add Singer</button>
        </div>

      </div>
    )
  }
}

export default graphql(MUTATION)(AddSinger)