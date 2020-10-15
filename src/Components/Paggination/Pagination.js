import React, { Component, Fragment } from "react"

class PaginationContact extends Component{

    setValue=(value)=>{
        
        this.props.PaginationList(value.altKey);
    }
   
    render(){
        return(
            <Fragment>
            <div className="container">
            <nav aria-label="Page navigation example">
   <ul className="pagination">
 
     <li className="page-item">
       <a className="page-link" href="#" onClick={this.setValue.bind(true)} aria-label="Previous">
         <span aria-hidden="true">&laquo;</span>
       </a>
     </li>
    
     <li className="page-item">
       <a className="page-link"  onClick={this.setValue.bind(false)}  href="#"aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
       </a>
     </li>
   </ul>
   </nav></div>
   </Fragment>
        )
    }
}
export default PaginationContact;