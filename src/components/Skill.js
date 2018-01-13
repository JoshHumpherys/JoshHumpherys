import React, { Component } from 'react'

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <a target="blank"> {/* TODO use href to link to the skill's webpage if it exists */}
          <img src={this.props.src} width={this.props.width} height={this.props.height} />
        </a>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Skill;