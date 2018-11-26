import React from "react"
import Layout from "../components/layout"

export default () =>

    <Layout>
   
      <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
          <div className="container position-relative">
              <h2 className="page-heading mb-3">Resume</h2>
              <a className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto" href="#"><i className="fas fa-download mr-2"></i>Download PDF Version</a>
          </div>{/*//container*/}
      </div>{/*//header-intro*/}
      
      <article className="resume-wrapper text-center position-relative">
          <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
              <header className="resume-header pt-4 pt-md-0">
  
            <div className="media flex-column flex-md-row">
                      <img className="mr-3 img-fluid picture mx-auto" src="/images/profile.jpg" alt="" />
                      <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
  
                          <div className="primary-info">
                              <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Sean Lee</h1>
                              <div className="title mb-3">Full Stack Developer</div>
                              <ul className="list-unstyled">
                                  <li className="mb-2"><a href="mailto:iamleexiang@gmail.com"><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>iamleexiang@gmail.com</a></li>
                                  <li><a href="tel:+86-139-1106-6746"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+86 139 1106 6746</a></li>
                              </ul>
                          </div>{/*//primary-info*/}
  
                          <div className="secondary-info ml-md-auto mt-2">
                              <ul className="resume-social list-unstyled">
                            <li className="mb-3"><a href="//github.com/ilovepku"><span className="fa-container text-center mr-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/ilovepku</a></li>
                    <li className="mb-3"><a href="//freecodecamp.org/ilovepku"><span className="fa-container text-center mr-2"><i className="fab fa-free-code-camp fa-fw"></i></span>freecodecamp.org/ilovepku</a></li>
                            <li><a href="//sean-lee.glitch.me"><span className="fa-container text-center mr-2"><i className="fas fa-globe"></i></span>sean-lee.glitch.me</a></li>
                              </ul>
                          </div>{/*//secondary-info*/}
                          
                      </div>{/*//media-body*/}
                  </div>{/*//media*/}
              </header>
  
              <div className="resume-body p-5">
                  <section className="resume-section summary-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                      <div className="resume-section-content">
                          <p className="mb-0">Summarise your career here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.</p>
                      </div>
                  </section>{/*//summary-section*/}
                  
            <div className="row">
              
                      <div className="col-lg-9">
                          <section className="resume-section experience-section mb-5">
                              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                              <div className="resume-section-content">
                                  <div className="resume-timeline position-relative">
                      
                                      <article className="resume-timeline-item position-relative pb-5">									    
                                          <div className="resume-timeline-item-header mb-2">
                                              <div className="d-flex flex-column flex-md-row">
                                                  <h3 className="resume-position-title font-weight-bold mb-1">Lead Developer</h3>
                                                  <div className="resume-company-name ml-auto">Startup Hub</div>
                                              </div>{/*//row*/}
                                              <div className="resume-position-time">2018 - Present</div>
                                          </div>{/*//resume-timeline-item-header*/}
                                          <div className="resume-timeline-item-desc">
                                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                              <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                              <ul>
                                                  <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                                  <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                                  <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                                  <li>Maecenas tempus tellus eget.</li>
                                              </ul>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                              <ul className="list-inline">
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Python</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">jQuery</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Webpack</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">PostgresSQL</span></li>
                                              </ul>
                                          </div>{/*//resume-timeline-item-desc*/}
                                      </article>{/*//resume-timeline-item*/}
                                      
                                      <article className="resume-timeline-item position-relative pb-5">									    
                                          <div className="resume-timeline-item-header mb-2">
                                              <div className="d-flex flex-column flex-md-row">
                                                <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
                                                <div className="resume-company-name ml-auto">Google</div>
                                              </div>{/*//row*/}
                                              <div className="resume-position-time">2014 - 2018</div>
                                          </div>{/*//resume-timeline-item-header*/}
                                          <div className="resume-timeline-item-desc">
                                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                                              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                              <ul className="list-inline">
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Redux</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Webpack</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MySQL</span></li>
                                              </ul>
                                          </div>{/*//resume-timeline-item-desc*/}
                                      </article>{/*//resume-timeline-item*/}
                                      
                                      <article className="resume-timeline-item position-relative pb-5">									    
                                          <div className="resume-timeline-item-header mb-2">
                                              <div className="d-flex flex-column flex-md-row">
                                                <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
                                                <div className="resume-company-name ml-auto">To-do Lists</div>
                                              </div>{/*//row*/}
                                              <div className="resume-position-time">2012 - 2014</div>
                                          </div>{/*//resume-timeline-item-header*/}
                                          <div className="resume-timeline-item-desc">
                                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                              <ul className="list-inline">
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">JavaScript</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Node.js</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Require.js</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                              </ul>
                                          </div>{/*//resume-timeline-item-desc*/}
                                      </article>{/*//resume-timeline-item*/}
                                      
                                      <article className="resume-timeline-item position-relative">									    
                                          <div className="resume-timeline-item-header mb-2">
                                              <div className="d-flex flex-column flex-md-row">
                                                <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted">(Intern)</small></h3>
                                                <div className="resume-company-name ml-auto">Amazon</div>
                                              </div>{/*//row*/}
                                              <div className="resume-position-time">2011 - 2012</div>
                                          </div>{/*//resume-timeline-item-header*/}
                                          <div className="resume-timeline-item-desc">
                                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
                                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                              <ul className="list-inline">
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Ruby on Rails</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">jQuery</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/LESS</span></li>
                                                  <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
                                              </ul>
                                          </div>{/*//resume-timeline-item-desc*/}
                                      </article>{/*//resume-timeline-item*/}								    
                                      
                                  </div>{/*//resume-timeline*/}
                              </div>
                          </section>{/*//experience-section*/}              
                      </div>
              
                      <div className="col-lg-3">
                
                          <section className="resume-section skills-section mb-5">
                              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                              <div className="resume-section-content">
                                  
                                  <div className="resume-skill-item">
                                      <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                                      <ul className="list-unstyled mb-4">
                                          <li className="mb-2">
                                            <div className="resume-skill-name">Angular</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">React</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "94%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">JavaScript</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "96%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>								        
                                          <li className="mb-2">
                                            <div className="resume-skill-name">Node.js</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "96%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                      </ul>
                                  </div>
                                  
                                  <div className="resume-skill-item">
                                    <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                                      <ul className="list-unstyled">
                                          <li className="mb-2">
                                            <div className="resume-skill-name">Python/Django</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">Ruby/Rails</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">PHP</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "86%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                          <li className="mb-2">
                                            <div className="resume-skill-name">WordPress/Shopify</div>
                                              <div className="progress resume-progress">
                                                    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "82%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                          </li>
                                      </ul>
                                  </div>
                                  
                                  <div className="resume-skill-item">
                                    <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Sketch</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Balsamiq</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
                                        <li className="list-inline-item"><span className="badge badge-light">Shopify</span></li>
                                    </ul>
                                  </div>{/*//resume-skill-item*/}
  
                              </div>{/*resume-section-content*/}
                          </section>{/*//skills-section*/}
  
                          <section className="resume-section education-section mb-5">
                              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                              <div className="resume-section-content">
                                  <ul className="list-unstyled">
                                      <li className="mb-2">
                                        <div className="resume-degree font-weight-bold">Graduate Coursework in English Literature</div>
                                        <div className="resume-degree-org">Peking University</div>
                                        <div className="resume-degree-time">2011 - 2014</div>
                                      </li>
                                      <li>
                                        <div className="resume-degree font-weight-bold">BA in English Literature</div>
                                        <div className="resume-degree-org">Peking University</div>
                                        <div className="resume-degree-time">2007 - 2011</div>
                                      </li>
                                  </ul>
                              </div>
                          </section>{/*//education-section*/}
                
                          <section className="resume-section language-section mb-5">
                              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                              <div className="resume-section-content">
                                  <ul className="list-unstyled resume-lang-list">
                                      <li className="mb-2"><span className="resume-lang-name font-weight-bold">Chinese</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                                      <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Full Professional)</small></li>
                                      <li><span className="resume-lang-name font-weight-bold">German</span> <small className="text-muted font-weight-normal">(Limited Working)</small></li>
                                  </ul>
                              </div>
                          </section>{/*//language-section*/}
                
                          <section className="resume-section interests-section mb-5">
                              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                              <div className="resume-section-content">
                                  <ul className="list-unstyled">
                      <li className="mb-1">Technology</li>
                      <li className="mb-1">History</li>
                      <li className="mb-1">Movie & Television</li>
                      <li className="mb-1">Gaming</li>
                      <li className="mb-1">Music</li>                    
                                      <li className="mb-1">Piano</li>
                                      <li className="mb-1">Guitar & Ukulele</li>								    
                                  </ul>
                              </div>
                          </section>{/*//interests-section*/}
                          
                      </div>
              
                  </div>{/*//row*/}
            
              </div>{/*//resume-body*/}		    
              
          </div>
      </article>

    </Layout>