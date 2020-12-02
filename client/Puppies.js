import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux'
import {addPuppies} from './store'

class Puppies extends React.Component {
  async componentDidMount() {
    const {data} = await axios.get('/puppies');
    this.props.addPuppies(data);
  }

  render() {
    const {puppies} = this.props
    return <div>
      {puppies.map(
            (pup) => {
              return <div key={pup.id}>
                <div className='column'>
                  <div className='center'>
                    <h1>{pup.name}</h1>
                    <img src={pup.imageSrc}></img>
                  </div>
                  <div className='center'>
                    My favorite food is: {pup.favoriteFood}
                  </div>
                  <div className='center'>
                    My favorite toy is: <img src={pup.favoriteToy}></img>
                  </div>
                  </div>
                </div>
              }
            )
          }
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    puppies: state.puppies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPuppies: (puppies) => dispatch(addPuppies(puppies))
  }
}

export const ConnectedPuppies = connect(mapStateToProps, mapDispatchToProps) (Puppies)