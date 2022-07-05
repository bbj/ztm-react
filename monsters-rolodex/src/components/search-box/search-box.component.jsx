import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type='search' // add a delete button to the input field
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;