import React from "react"
import Layout from "../components/layout"

export default () =>
    <Layout>
		<div className="header-intro theme-bg-primary text-white py-5">
	    	<div className="container">
		    	<h2 className="page-heading mb-3">Projects</h2>
		    	<div className="page-heading-tagline">In-depth Case Studies to show you what I can offer and how I work</div>
		    </div>{/*//container*/}
    	</div>{/*//header-intro*/}
		<section className="section pt-5">
        	<div className="container">
				<div className="text-center">
		        	<ul id="filters" className="filters mb-5 mx-auto pl-0">
	            		<li className="type active" data-filter="*">All</li>
	            		<li className="type" data-filter=".angular">Angular</li>
	            		<li className="type" data-filter=".react">React</li>
	            		<li className="type" data-filter=".python-django">Python/Django</li>
	            		<li className="type" data-filter=".ruby-rails">Ruby/Rails</li>
	            		<li className="type" data-filter=".php">PHP</li>
	          		</ul>{/*//filters*/}
	        	</div>
				<div className="project-cards row mb-5 isotope">
					<div className="isotope-item col-12 col-lg-4 angular python-django">
					    <div className="card rounded-0 border-0 shadow-sm mb-5">
							<div className="card-img-container position-relative">
							    <img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
							    <div className="card-img-overlay overlay-logo text-center">
								    <div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
							    </div>
							    <a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
									<h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>
                			<div className="card-body pb-0">
								<h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>
                			<div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				    	</div>{/*//card*/}
		        	</div>{/*//isotope-item*/}
					<div className="isotope-item col-12 col-lg-4 ruby-rails">
						<div className="card rounded-0 border-0 shadow-sm mb-5">
                			<div className="card-img-container position-relative">
								<img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
								<div className="card-img-overlay overlay-logo text-center">
									<div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
								</div>
								<a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
									<h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>
                			<div className="card-body pb-0">
							    <h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>
						    <div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				    	</div>{/*//card*/}
					</div>{/*//isotope-item*/}            
            		<div className="isotope-item col-12 col-lg-4 react python-django">
					    <div className="card rounded-0 border-0 shadow-sm mb-5">
                			<div className="card-img-container position-relative">
							    <img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
							    <div className="card-img-overlay overlay-logo text-center">
								    <div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
							    </div>
							    <a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								    <h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>
                			<div className="card-body pb-0">
							    <h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>
                			<div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				      	</div>{/*//card*/}
		        	</div>{/*//isotope-item*/}            
            		<div className="isotope-item col-12 col-lg-4 react php">
					    <div className="card rounded-0 border-0 shadow-sm mb-5">
                			<div className="card-img-container position-relative">
							    <img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
							    <div className="card-img-overlay overlay-logo text-center">
								    <div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
							    </div>
							    <a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								    <h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>
                			<div className="card-body pb-0">
							    <h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>
                			<div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				    	</div>{/*//card*/}
		        	</div>{/*//isotope-item*/}            
            		<div className="isotope-item col-12 col-lg-4 ruby-rails">
					    <div className="card rounded-0 border-0 shadow-sm mb-5">
                			<div className="card-img-container position-relative">
							    <img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
							    <div className="card-img-overlay overlay-logo text-center">
								    <div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
							    </div>
							    <a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								    <h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>                
						    <div className="card-body pb-0">
							    <h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>                
						    <div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				      	</div>{/*//card*/}
		        	</div>{/*//isotope-item*/}
            		<div className="isotope-item col-12 col-lg-4 angular php">
					    <div className="card rounded-0 border-0 shadow-sm mb-5">
                			<div className="card-img-container position-relative">
							    <img className="card-img-top rounded-0" src="/images/projects/project-1-thumb.jpg" alt="" />
							    <div className="card-img-overlay overlay-logo text-center">
								    <div className="project-logo"><img alt="" className="img-fluid w-50" src="/images/logos/logo-1-inverse.svg" /></div>
							    </div>
							    <a className="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								    <h5 className="card-title font-weight-bold">Client: Google</h5>
							    	<p className="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							    </a>
						    </div>
                			<div className="card-body pb-0">
							    <h4 className="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
						    </div>
						    <div className="card-footer border-0 text-center bg-white pb-4">
							    <ul className="list-inline mb-0 mx-auto">
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
						        	<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
							    </ul>
					    	</div>
				      	</div>{/*//card*/}
		        	</div>{/*//isotope-item*/}			    
	        	</div>{/*//row*/}
        	</div>{/*//container*/}
      	</section>{/*//section*/}
    </Layout>