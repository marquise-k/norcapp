import React, { Component } from 'react';

class Sidebarextends React.Component {
    render () {
        return (
            <div>
                <a
                    href = '/dashboard'
                    className='button-menu'>
                        Dashboard
                    </a>

                    <a
                    href = '/calendar'
                    className='button-menu'>
                        Calendar
                    </a>

                    <a
                    href = '/Dashboard'
                    className='button-menu'>
                        Directory
                    </a>
            </div>
        )
    }
}

