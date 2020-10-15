import React, { Component, Fragment } from "react"

class SearchContact extends Component{

    search=(event)=>{
event.preventDefault();
this.props.searchNews(event.target.value);
    }
    render(){
        return(
        <Fragment>
        <input class="form-control mr-sm-2" onChange={this.search.bind(this)} type="search" placeholder="Search"></input>
        </Fragment>
        )
    }
}
export default SearchContact;