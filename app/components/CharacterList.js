import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Character from './Character'

export default class CharacterList extends Component {
  render() {
    return (
      <div>
        Character List
        <div id='char-list'>
          <NavLink to='/characters/character'>
            <Character>Character</Character>
          </NavLink>
          <NavLink to='/characters/character'>
            <Character>Character2</Character>
          </NavLink>
          <NavLink to='/characters/character'>
            <Character>Character3</Character>
          </NavLink>
        </div>
      </div>
    )
  }
}