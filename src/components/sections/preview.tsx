import React from "react";
import SpadeClick from "../customIcons/spadeclick";

type PreviewProps = {
  projectHed: string;
  award: boolean;
  awardText?: string[]; 
  numImgs: string;
  imgAlts: string[]; 
  slug: string;
  desc: string;
  url: string; 
  gifAlt: string;
}

export class Preview extends React.Component<PreviewProps> {
  render() {
                                 
    return (
      <>
      {/* create a previewWrapper for each work example */}
      <div className="previewWrapper">
        {/* award badge, if it won an award */}
        {this.props.award && 
          this.props.awardText?.map((txt: string, i: number) => (
            <>
              <div className={`awardContainer container-${i}`}>
                <div className="award">👑</div>
              </div>
              <div className={`awardText text-${i}`}>{txt}</div>
            </>
          ))
        }
        <h4 className="previewHed">{this.props.projectHed}</h4>
        {/* screenshots + short description of what i did */}
        <div className="previewImgDescContainer">
          <div className={`previewImgContainer ${this.props.numImgs}`}>
            {this.props.imgAlts.slice(0,-1).map((alt: string, i: number) => (
                <img
                  className="previewImg"
                  src={`src/work/${this.props.slug}-mobile-screenshot-${i+1}.png`}
                  alt={`${alt}[${i}]`}
                  tabIndex={0}
                />))}
            {this.props.imgAlts.slice(-1).map((alt: string, i: number) => (
              <img
                src={`src/work/${this.props.slug}-mobile-screenshot-${this.props.imgAlts.length}.png`}
                alt={`${alt}[${i}]`}
                tabIndex={0}
              />))}
          </div>
          <div className="previewDesc">
            <p>{this.props.desc}
            </p>
            <div className="previewUrl">
              <a href={this.props.url}>
                experience the story <SpadeClick size="1em" />
              </a>
            </div>
          </div>
        </div>
        {/* where the mobile preview/desktop preview GIF goes */}
        <div className="previewGifContainer">
          <img
          className="previewGif"
          src={`src/work/${this.props.slug}-mobile-preview.gif`}
          alt={this.props.gifAlt}
        />
        </div>
      </div>
    </>
    )
  }
}