import React from 'react';


//this component is the container for the toggle button features
const Toolbar =(props)=>{
    return(
        <div>
            <header className='toolbar'>
                <nav className='toolbar-nav'>
                    <div className='toolbar-toggle-button'></div>
                    <div className='toolbar-logo'>
                        <a href='/'>Refresh</a>
                    </div>
                    <div className='spacer-element' />
                    <div className='toolbar_nav-items'>
                        <ul>
                            <li><a href='/'></a></li>
                            <li><a href='/'></a></li>
                            <li><a href='/'></a></li>
                            <li><a href='/'></a></li>
                            <li><a href='/'></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Toolbar;