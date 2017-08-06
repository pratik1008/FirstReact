import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

export default class Index extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        axios.get('http://localhost:18080/messenger/webapi/hello', '').then(function(response) {
            console.log(response);
        }).catch(function (error){
            console.log(error);
        });
        return (
        <div>
            <h1> Hey you </h1>
        </div>
        );
    }

}
render(<Index/>, document.getElementById("index"));
