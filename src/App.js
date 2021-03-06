import React, { Fragment } from 'react';
import NameEntry from './components/NameEntry';
import './styles/App.css';
import './styles/mobile.css';


const App = () => {
    return (
        <Fragment>
            <div className="appBackground">
                <div className="appContainer">
                    <p className="appHeaderFooter">
                        Table.. Tennis... Tournament!
                    </p>
                    <NameEntry />
                    <p className="appHeaderFooter">
                        {/* T...T...T */}
                    </p>
                </div>
            </div>
        </Fragment>
    )
};


export default App;