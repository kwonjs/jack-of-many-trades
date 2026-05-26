import React from "react";
import SpadeIcon from "../customIcons/spadeclick";

export class AboutSection extends React.Component {
  render() {
    return (
      <>
        <div className="aboutWrapper">
          <h2 className="aboutHeader">about me</h2>
          <div className="aboutDesc">
            <p className="aboutDescCurrentRole">
              I currently design and develop (and occasionally report,
              illustrate and even{" "}
              <a href="https://www.instagram.com/reels/CzW4IS1S1sT/">
                appear on camera <SpadeIcon />
              </a>
              ) at the San Francisco Chronicle.
            </p>
            <p>
              Previously, I created static and interactive graphics at the
              Seattle Times, and conducted investigative data research, analysis
              and reporting for the San Francisco Public Press.
            </p>
            <br />
            <p className="resumeLink">
              See more of my career journey{" "}
              <a href="https://drive.google.com/file/d/1Zd7hBOMo8L6dNZg4lb5SUQVIXpgJ6zur/view?usp=drive_link">
                in resume form <SpadeIcon />
              </a>{" "}
              or on{" "}
              <a href="https://linkedin.com/in/kwonjs">
                LinkedIn <SpadeIcon />
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
