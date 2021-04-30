import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = e => { 
    onAdoptPet(this.props.pet.id)
  }

  render() {
    const { pet, isAdopted } = this.props
    const { name, type, gender, age, weight } = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' :'♂' }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!this.props.pet.isAdopted && <button className="ui primary button" onClick={this.props.handleAdoptPet} >Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
