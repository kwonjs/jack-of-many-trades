import React from "react";
import { Card } from "./card";

export class CardSection extends React.Component {
  render() {
    return (
      <div className="cardWrapper">
        <Card
          role="Product and brand designer"
          desc="Loves bridging the designer-engineer gap — skilled at ideating on Figma"
        />
        <Card
          role="Developer"
          desc="Loves bridging the designer-engineer gap. Works primarily in React and TypeScript, getting the hang of Svelte."
        />
        <Card
          role="Data journalist, analyst and researcher"
          desc="Avid lover of searching for and scraping data from hard-to-get places. Experienced at working with unstructured and large structured data using Python and occasionally R and SQL."
        />
      </div>
    );
  }
}
