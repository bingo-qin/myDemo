import React from 'react';
import ReactDOM from 'react-dom';
// import App from './pages/demo1'
// import App from './pages/lifecomponent'
// import App from './pages/jsdemo';
import App from './pages/HeightOderComponent';
const Index = () => {
    return (
        <div>
            <App/>
        </div>
    );

}
ReactDOM.render(<Index/>,document.getElementById('root'));