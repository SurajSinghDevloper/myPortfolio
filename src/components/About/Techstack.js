import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiPostgresql,
	DiMongodb,
	DiGit,
	DiJava,
	DiNodejs

} from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSpringboot />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
		</Row>
	);
}

export default Techstack;