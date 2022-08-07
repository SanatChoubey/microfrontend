import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import {mount} from 'remote/remote'
const App = () => {
    const history = useHistory();
    useEffect(() => {
       console.log(mount) 
       mount(homeRef.current, (path) => {
        history.push(path)
       })
    },[])
    const homeRef = useRef(null)
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        home Pagess
       <div ref={homeRef}></div>
    </div>
    )
}
export default App;
