import React from 'react';
import Sidebar from "./Sidebar";
import App from '../App';
​
function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar/>
                <div>
                    <Nav/>
                <App/>
            </div>
        </div>
        </div>
    );
}
​
export default Layout;