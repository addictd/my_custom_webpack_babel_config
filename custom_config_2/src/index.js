import React from 'react';
import ReactDom from 'react-dom';

import Button from './components/Button';

class App extends React.Component{
    render(){
        return (
            <div>
                <p>hello</p>
                <Button />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)