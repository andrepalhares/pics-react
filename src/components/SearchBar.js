import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  /*
  onInputChange(event) {
    console.log(event.target.value) //contem o texto que o usuario digitou
  }

  oninputClick() {
    console.log('Input was clicked');
  }*/

  onFormSubmit(event) {
    event.preventDefault(); //impede o navegador de recarregar automaticamente

    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" /*onClick={this.oninputClick}
            onChange={this.onInputChange}*/
            value={this.state.term}
            onChange={
              (event) => this.setState(
                { term: event.target.value }
              )
            }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
