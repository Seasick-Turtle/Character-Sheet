import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portrait: props.portrait,
      name: props.name
    };
  }

  render() {
    return (
      <div>
        Portrait:
        <img className='portrait'
             src={this.state.portrait}
             alt={'Portrait for ' + this.state.name}
        />
      </div>
    )
  }
}

Character.propTypes = {
  portrait: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Character.defaultProps = {
  portrait: '',
  name: 'Anonymous'
};