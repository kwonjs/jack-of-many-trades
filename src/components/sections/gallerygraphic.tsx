import React from "react";
import SpadeIcon from "../customIcons/spadeclick";

type GraphicProps = {
  src: string;
  alt: string;
  storyUrl?: string;
  desc?: string;
};

export class GalleryGraphic extends React.Component<GraphicProps> {
  render() {
    return (
      <>
        <div className="galleryGraphic" tabIndex={0}>
          <div className="galleryGraphicUrl">
            <a href={this.props.storyUrl}>
              <SpadeIcon size=".5rem" />
            </a>
          </div>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </>
    );
  }
}
