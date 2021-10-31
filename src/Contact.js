import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1 className='display-1'>Contact:</h1>

        <div className='row'>
          <div className='col-8 offset-2 col-6-md  offset-6-md'>
            <form name='contact' method='POST'>
              <input type='hidden' name='form-name' value='contact' />

              <div className='mb-3'>
                <label for='formNameInput' className='form-label'>
                  Your name:
                </label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  id='formNameInput'
                  placeholder='Your Name'
                />
              </div>

              <div className='mb-3'>
                <label for='formEmailInput' className='form-label'>
                  Your email:{' '}
                </label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='formEmailInput'
                  placeholder='youremail@example.com'
                />
              </div>
              <div className='mb-3'>
                <label for='formMessageInput' className='form-label'>
                  Message:{' '}
                </label>
                <textarea
                  name='message'
                  className='form-control'
                  id='formMessageInput'
                  rows='5'
                />
              </div>

              <p>
                <button className='btn btn-primary btn-lg' type='submit'>
                  Send
                </button>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}

// <div className=' d-flex flex-column flex-md-row justify-content-between mb-5'>
//   <div className='flex-grow-1'>
//     <div className='row'>
//       Linkedin:
//       <div className='col'>
//         <a className='' href='#!'>
//           <i className='fab fa-linkedin-in' />
//         </a>
//       </div>
//       Github:
//       <div className='col'>
//         <a className='' href='#!'>
//           <i className='fab fa-github' />
//         </a>
//       </div>
//       Twitter:
//       <div className='col'>
//         <a className='' href='#!'>
//           <i className='fab fa-twitter' />
//         </a>
//       </div>
//     </div>
//   </div>
// </div>;
