import React from "react";
import { GalleryGraphic } from "./gallerygraphic";
// import { AI2HTMLEmbed } from "./ai2htmlembed";
// import ebikesclasses from "../../work/ebikes/ebikesclasses.html?raw";
// import vanderveer from "../../work/vanderveer/vanderveer-milestones-forportfolio.html?raw";

export class GallerySection extends React.Component {
  render() {
    return (
      <>
        <div className="galleryWrapper">
          <h2 id="gallerySubsection" className="galleryHeader">
            more graphics & illos
          </h2>

          <div className="galleryGrid">
            <GalleryGraphic
              src="src/work/rejectedlicenses.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/california/article/rejected-license-plates-dmv-18589821.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/ebikes-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/bayarea/article/e-bike-crash-injury-21331489.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/leogeosatellite-mobile-forportfolio.png"
              alt="TKTK"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/birdmigration-farallonislands-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/bayarea/article/e-bike-crash-injury-21331489.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/birdmigration-rodeolagoon-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/birdmigration-coyotehills-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/vanderveer-milestones-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/koreancomfortfood-tteokmanduguk.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/koreancomfortfood-soondaeguk.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/koreancomfortfood-galbitang.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/koreancomfortfood-kimbap.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/batteryfire-step1-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/batteryfire-step2-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="src/work/batteryfire-step3-mobile.png"
              alt="TKTK"
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
          </div>
        </div>
      </>
    );
  }
}
