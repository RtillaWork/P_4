import React, { Component } from 'react';
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
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
              <div className='col'>
                <a
                  className='social-media-link'
                  href='https://github.com/nauranand'>
                  <i className='fab fa-github' />
                </a>
              </div>
              <div className='col'>
                <a
                  className='social-media-link'
                  href='https://twitter.com/unereplicante91'>
                  <i className='fab fa-twitter' />
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

// <footer className='mt-auto text-muted border-top'>
//   <div className='container-fluid'>
//     <div className=' d-flex flex-column flex-md-row justify-content-between mb-5'>
//       <div className='flex-grow-1'>
//         Contact:
//         <div className=''>
//           <a className='social-media-icon' href='#!'>
//             <i className='fab fa-linkedin-in' />
//           </a>
//           <a className='social-media-icon' href='#!'>
//             <i className='fab fa-github' />
//           </a>
//           <a className='social-media-icon' href='#!'>
//             <i className='fab fa-twitter' />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>;
