import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className='main'>
          <li>Home</li>
          <li>Character</li>
          <li>Journal</li>
        </ul>
      </div>
    )
  }
}