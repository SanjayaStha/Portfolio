import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjaya Shrestha</span>
            &nbsp;from <span className="purple"> Kathmandu, Nepal.</span>
            <br />I am a Software Engineer, Its been 5+ years that I started to count from [O];
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
                Playing Chess: &nbsp; 
                <Button
                  variant="primary"
                  href="https://lichess.org/@/SanjayaBirBi"
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                  size="sm"
                  margin="10"
                >
               Licess.org
                </Button>

            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SbbS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
