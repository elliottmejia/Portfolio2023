import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./dklogo.jpg"
								alt="dolls kill"
								className="work-image"
							/>
							<div className="work-title">Dolls Kill</div>
							<div className="work-subtitle">
								Front End Developer (contract)
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./laurenmoshi.jpg"
								alt="laurenmoshi"
								className="work-image"
							/>
							<div className="work-title">Lauren Moshi, LLC</div>
							<div className="work-subtitle">
								Ecommerce Coordinator / Developer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
						<div className="work">
							<img
								src="./biohazard.jpg"
								alt="Biohazard Inc"
								className="work-image"
							/>
							<div className="work-title">Biohazard, Inc.</div>
							<div className="work-subtitle">
								Ecommerce Coordinator
							</div>
							<div className="work-duration">2021</div>
						</div>
						<div className="work">
							<img
								src="./corkgenius.png"
								alt="Cork Genius"
								className="work-image"
							/>
							<div className="work-title">Cork Genius</div>
							<div className="work-subtitle">
								CRM and Project Administrator
							</div>
							<div className="work-duration">2017 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
