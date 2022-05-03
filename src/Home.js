import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <section>
                <h1 className='display-1'>Welcome to My portfolio site!</h1>
                <p className='lead text-secondary'>
                    I am a full stack apprentice developper, a photography lover and a
                    classical music avid listener
                </p>

                <div className=' my-5 lead'>
                    <NavLink
                        className='btn btn-lg btn-secondary fw-bold border-white '
                        to='/about'>
                        Résumé
                    </NavLink>
                </div>
            </section>
        );
    }
}
