import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        return "hello";
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)