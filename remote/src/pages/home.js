import React from 'react';
import {useHistory} from 'react-router-dom';
const HomePage = () => {
    const history = useHistory()
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        home Page
        <button onClick={() => {
            history.push('/about')
        }}>Click me</button>
    </div>
}
export default HomePage;
