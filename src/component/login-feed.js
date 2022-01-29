import React from "react";
import Post from "./post";


let e = React.createElement;

export default class LoginFeed extends React.Component {
    render() {
        return e('div',
            {class: 'container'},
            e(Post, {}, null),
          
        );
    }
}