import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term:""};

    //most of the time when use callback on this, you need to bind the context like this
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();

    //fetch data
    this.props.fetchWeather(this.state.term);
    //clear search_bar
    this.setState({term:''});

  }

  render(){
    return(
      <form onSubmit= {this.onFormSubmit} className="input-group">
        <input
          placeholder= "Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>

    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

// we don't care about the state so we pass null for the first argument
export default connect(null,mapDispatchToProps )(SearchBar);
