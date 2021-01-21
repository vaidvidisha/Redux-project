import React, { Component } from 'react';
import { Button} from 'react-bootstrap';

class Posts extends Component {

    componentDidMount() {
        this.props.loadPosts();
      }

    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>All Posts</h1>
                    <p>See all the posts available here</p>
                </div>

                <div className="container">
                    <div className="row">
                        {this.props.posts?this.props.posts.map(x => {
                            return(
                                <div className="col-sm-4">
                                    <div class="card mt-2">
                                        <h3 class="m-1">{x.title}</h3>
                                        <p class="m-1">{x.body}</p>
                                        <Button href="/comments">Post Detail</Button>
                                    </div>
                                </div>
                                );
                            }):''}
                    </div>
                </div>
            </div>
        );
    }
}
export default Posts;