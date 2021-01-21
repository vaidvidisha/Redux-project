import React, { Component } from 'react';

class Comments extends Component {
    
    componentDidMount() {
        this.props.loadAllComments();
      }
    render() {
        return (
            <div>
                <div class="jumbotron text-center">
                    <h1>All Comments</h1>
                    <p>See all the Comments available here</p>
                </div>

                <div class="container">
                    <div class="row"> 
                    {this.props.comments?this.props.comments.map(x => {
                            return(
                                <div class="col-sm-12 mt-4" style={{backgroundColor:"rgba(0,0,0,.01)"}}>
                                    <h3>{x.name}</h3>
                                    <p>{x.email}</p>
                                    <p>{x.body}</p>

                                </div>
                            );
                    }):''}
                    </div>
                </div>
            </div>
        );
    }
}
export default Comments;