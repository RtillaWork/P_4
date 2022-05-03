import React, {Component} from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <footer className='mt-auto text-muted border-top py-2'>
                <div className='container-fluid'>
                    <div className='flex-grow-1'>
                        <div className='row'>
                            <div className='col'>
                                <a
                                    className='social-media-link'
                                    href='https://www.linkedin.com/in/naurae/'>
                                    <i className='fab fa-linkedin-in'/>
                                </a>
                            </div>
                            <div className='col'>
                                <a
                                    className='social-media-link'
                                    href='https://github.com/nauranand'>
                                    <i className='fab fa-github'/>
                                </a>
                            </div>
                            <div className='col'>
                                <a
                                    className='social-media-link'
                                    href='https://twitter.com/unereplicante91'>
                                    <i className='fab fa-twitter'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

