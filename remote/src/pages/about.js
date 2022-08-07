import React from 'react';
import {useHistory} from 'react-router-dom';
const AboutPage = (props) => {
    const history = useHistory()
    return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        about Page
        <button onClick={() => {
            console.log(props)
            history.push('/')
        }}>Click me</button>
    </div>
}
export default AboutPage;