import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Posts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/comments">Comments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/authors">Authors</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;