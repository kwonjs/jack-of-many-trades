import React from "react";
import SpadeIcon from "../customIcons/spadeclick";

export class NavSection extends React.Component {
  render() {
    return (
      <>
        <h2 className="navHeader" id="navSection">site navigation</h2>
        <p className="navDisclaimer">
          if you see{" "}
          <span className="navDisclaimerLink">
            this spade icon <SpadeIcon />
          </span>
          , that's a link you can click, tap or tab + enter! you can navigate
          this site with the tab button, too~
        </p>
        <nav className="navMenu">
          jump to these links:{" "}
          <a href="#designSubsection">
            design work <SpadeIcon size="1em" />
          </a>{" "}
          <span className="navIcons">♠</span>{" "}
          <a href="#datavizSubsection">
            data viz work + dashboards + tools <SpadeIcon size="1em" />
          </a>{" "}
          <span className="navIcons">♦</span>{" "}
          <a href="#otherSubsection">
            other work (reporting, illustration, etc.) <SpadeIcon size="1em" />
          </a>{" "}
          <span className="navIcons">♣</span>{" "}
          <a href="#gallerySubsection">
            art + graphics gallery <SpadeIcon size="1em" />
          </a>
        </nav>
      </>
    )
  }
}