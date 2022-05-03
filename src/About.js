import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <>
                <section id='about'>
                    <div className='container mb-5'>
                        <h1 className=' display-3 mb-0'>
                            RtillaWork
                            <span className='text-dark'>E.</span>
                        </h1>
                        <div className='subheading text-info mb-3'>
                            Edmonton, Alberta, Canada · (780) 087-8078 ·
                            <a
                                href='mailto:nnasnn@gmail.com'
                                className='subheading text-info'>
                                email: nnasnn at gmail.com
                            </a>
                        </div>
                        <hr className='m-1'/>
                        <p className='lead mb-2'>
                            I am passionate about technology, particularily information
                            security and IoT. I am currently enrolled at OpenClassrooms with
                            the aim to learn to develop secure and performant webapps full
                            stack, using best practices and proven methodologies.
                        </p>
                        <p>
                            I am looking for an intern, apprentice or entry level position
                            where I can collaborate with a team to assist in maintaining or
                            bringing a project to life.
                        </p>
                    </div>
                    <hr className='m-2'/>
                </section>

                <section id='skills'>
                    <div className='container mb-5'>
                        <h2 className='mb-3 display-4'>Skills</h2>
                        <hr className='m-1'/>

                        <div className='subheading mb-3'>
                            <em>Programming Languages & Tools:</em>
                        </div>
                        <ul className='list-inline dev-icons'>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-html5'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='html5'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-css3-alt'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='css3'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-js-square'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Javascript / Ecmascript'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-wordpress'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Wordpress'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-sass'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Sass'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-react'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='ReactJS'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-node-js'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='NodeJS'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fas fa-gem'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Ruby / Ruby on Rails'
                                />
                            </li>

                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-php'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='PHP'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-npm'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='npm'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-github'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='git / Github'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-linux'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Linux / Debian Linux'
                                />
                            </li>
                            <li className='list-inline-item'>
                                <i
                                    className='fab fa-redhat'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Redhat Linux'
                                />
                            </li>
                        </ul>
                        <div className='subheading mb-3'>
                            <em>Workflow:</em>
                        </div>
                        <ul className=''>
                            <li className='text-start'>Mobile-First, Responsive Design</li>
                            <li className='text-start'>Chrome and React Dev Tools</li>
                            <li className='text-start'>
                                Familiarity with Test Driven Development
                            </li>
                            <li className='text-start'>
                                Familiarity with Cloud deployement (GCP, Azure, AWS, Digital
                                Ocean)
                            </li>
                            <li className='text-start'>
                                Familiarity with OWASP and pentesting tools / Kali Linux
                            </li>
                            <li className='text-start'>
                                Familiarity with virtualization and container solutions
                            </li>
                        </ul>
                    </div>
                    <hr className='m-2'/>
                </section>

                <section id='experience'>
                    <div className='container mb-5'>
                        <h2 className='mb-3 display-4'>Experience</h2>
                        <hr className='m-1'/>

                        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
                            <div className='flex-grow-1'>
                                <h3 className='text-start mb-0'>Telecom network technician</h3>
                                <div className='text-start subheading mb-3'>
                                    <em>Tel inc.</em>
                                </div>
                                <p className='text-start'>
                                    Tier 3, support field technicians and engineers by updating
                                    and programming telecom switches, troubleshooting telecom
                                    network routing issues and enabling new installations.
                                </p>
                            </div>
                            <div className='flex-shrink-0'>
                <span className='text-dark'>
                  <em>August 2009 - June 2019</em>
                </span>
                            </div>
                        </div>
                        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
                            <div className='flex-grow-1'>
                                <h3 className='text-start mb-0'>
                                    Microwave tower/backhaul surveyor
                                </h3>
                                <div className='text-start subheading mb-3'>
                                    <em>Tek Systems</em>
                                </div>
                                <p className='text-start'>
                                    Assist the engineering team in identifying, mesuring and
                                    documenting suitable sites to deploy microwave antennas for
                                    backhaul uplinks.
                                </p>
                            </div>
                            <div className='flex-shrink-0'>
                <span className='text-dark'>
                  <em>April 2009 - August 2009</em>
                </span>
                            </div>
                        </div>
                        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
                            <div className='flex-grow-1'>
                                <h3 className='text-start mb-0'>Computer repair tech</h3>
                                <div className='text-start subheading mb-3'>
                                    <em>Staples inc.</em>
                                </div>
                                <p className='text-start'>
                                    Repair, upgrate and advise about computer repair, both
                                    hardware and software. Computer services: anti-virus, OS
                                    updates, data backup and recovery.
                                </p>
                            </div>
                            <div className='flex-shrink-0'>
                <span className='text-dark'>
                  <em>December 2007 - April 2009</em>
                </span>
                            </div>
                        </div>
                    </div>
                    <hr className='m-2'/>
                </section>

                <section id='education'>
                    <div className='container mb-5'>
                        <h2 className='mb-3 display-4'>Education</h2>
                        <hr className='m-1'/>

                        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
                            <div className='flex-grow-1'>
                                <h3 className='text-start mb-0'>OpenClassrooms</h3>
                                <div className='text-start subheading mb-3'>
                                    {' '}
                                    <em>Diploma (in progress), Full Stack Developper</em>
                                </div>
                                <div className='text-start subheading'/>
                                <p className='text-start'>9 hands on projects (in progress)</p>
                            </div>
                            <div className='flex-shrink-0'>
                <span className='text-dark'>
                  <em>December 2018 - present</em>
                </span>
                            </div>
                        </div>
                        <div className='d-flex flex-column flex-md-row justify-content-between'>
                            <div className='flex-grow-1'>
                                <h3 className='text-start mb-0'>
                                    Northern Alberta Institute of Technology
                                </h3>
                                <div className='text-start subheading mb-3'>
                                    <em>Telecommunications/Electronics Engineering Technology</em>
                                </div>
                                <p className='text-start'>GPA: 3.6</p>
                            </div>
                            <div className='flex-shrink-0'>
                <span className='text-dark'>
                  <em>September 2007 - April 2009</em>
                </span>
                            </div>
                        </div>
                    </div>
                    <hr className='m-2'/>
                </section>

                <section id='interests'>
                    <div className='container mb-5'>
                        <h2 className='mb-3 display-4'>Interests</h2>
                        <hr className='m-1'/>

                        <p className='text-start'>
                            In my spare time, I enjoy learning photography.
                        </p>
                        <p className='text-start mb-3'>
                            I also enjoy tinkering with Raspberry Pies and Arduinos, IoT
                            projects and reading about advances in AI and Quantum Computing
                        </p>
                    </div>
                    <hr className='m-2'/>
                </section>
            </>
        );
    }
}

//  <section>
//       <h1>About me</h1>
//       <p className='lead'>
//         I am passionate about IoT and Cloud computing, and all the potential
//         they hold.
//       </p>
//       <p className='lead'>
//         I am also interested in information security. particularily
//         Application Security
//       </p>
//     </section>
