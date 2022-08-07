import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import { MemoryRouter as Router, useHistory,} from 'react-router-dom';
const mount = (element, cbs) => {
    const root  = createRoot(element);
    
    root.render(
        <Router>
            <App cb={(path) => {cbs(path)}} />
        </Router>
       
    );
}
if(process.env.NODE_ENV === 'development'){
    if(document.getElementById("my-remote")){
        mount(document.getElementById("my-remote"), () =>{})
    }
    
}
export {mount}

