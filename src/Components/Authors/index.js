import React, { Component } from 'react';

class Authors extends Component {

    componentDidMount() {
        this.props.loadAuthors();
    }

    render() {
        return (
            <div>
                <div class="jumbotron text-center">
                    <h1>All Authors</h1>
                    <p>See all the Authors available here</p>
                </div>

                <div class="container">
                    <div class="row">
                        {this.props.authors ? this.props.authors.map(x => {
                            return (
                                <div class="col-sm-12">
                                    <div class="card mt-2">
                                        <h3>{x.name}</h3>
                                        <p>{x.email}</p>
                                        <p>{x.website}</p>
                                        <p>{x.company.name}</p>
                                    </div>
                                </div>
                            );
                        }) : ''}
                    </div>
                </div>
            </div>
        );
    }
}
export default Authors;