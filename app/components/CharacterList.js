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
            <Character />
          </NavLink>

        </div>
      </div>
    )
  }
}