import React from "react";

// import { Container } from './styles';
import useTranslation from "../../i18n/translator"

function Projects() {
  	return (
		<div className="row text-center d-flex flex-wrap align-items-stretch justify-content-center">

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-accessibility"></i>
					</span>
					<h3>{ useTranslation("projects.projeto01.name") }</h3>
					<p>
						{ useTranslation("projects.projeto01.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-droplet"></i>
					</span>
					<h3>{ useTranslation("projects.projeto02.name") }</h3>
					<p>
						{ useTranslation("projects.projeto02.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-cool"></i>
					</span>
					<h3>{ useTranslation("projects.projeto03.name") }</h3>
					<p>
						{ useTranslation("projects.projeto03.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-book"></i>
					</span>
					<h3>{ useTranslation("projects.projeto04.name") }</h3>
					<p>
						{ useTranslation("projects.projeto04.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-bubbles2"></i>
					</span>
					<h3>{ useTranslation("projects.projeto05.name") }</h3>
					<p>
						{ useTranslation("projects.projeto05.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-books"></i>
					</span>
					<h3>{ useTranslation("projects.projeto06.name") }</h3>
					<p>
						{ useTranslation("projects.projeto06.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-palette"></i>
					</span>
					<h3>{ useTranslation("projects.projeto07.name") }</h3>
					<p>
						{ useTranslation("projects.projeto07.description") }
					</p>
				</div>
			</div>

			<div className="col-md-4 col-sm-4 d-flex align-items-stretch">
				<div className="services animate-box">
					<span>
						<i className="icon-profile"></i>
					</span>
					<h3>{ useTranslation("projects.projeto08.name") }</h3>
					<p>
						{ useTranslation("projects.projeto08.description") }
					</p>
				</div>
			</div>
		</div>
  	);
}

export default Projects;
