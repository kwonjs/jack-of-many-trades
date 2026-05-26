import React from "react";

type CardProps = {
  role?: string;
  desc?: string;
}

export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="cardContainer">
        <div className="card" tabIndex={0}>
          <span className="front">
            <p className="cardRole">{this.props.role}</p>
            <p className="flipInstruct">Hover to flip card</p>
          </span>
          <span className="back">
            <ul>
              <li>{this.props.desc}</li>
            </ul>
          </span>
        </div>
      </div>
    )
  }
}