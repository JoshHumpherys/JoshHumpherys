import React, { Component } from 'react'

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <a href="javascript:alert('TODO fill in href value')" target="blank">
          <img src={this.props.src} width={this.props.width} height={this.props.height} />
        </a>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Skill;