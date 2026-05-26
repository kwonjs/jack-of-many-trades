import React from "react";
import { Preview } from "./preview";
import { PreviewSwap } from "./previewswap"
import SpadeClick from "../customIcons/spadeclick";

export class WorkSection extends React.Component {
  render() {
    return (
      <div className="workWrapper">
        <h2 className="workHeader">what i love doing</h2>
        <div className="workDesc">
          <h3 id="designSubsection" className="workSubhed">
            As a <i>designer</i> in a newsroom, I treat stories as{" "}
            mobile-first <i>products</i>, each with its own <i>brand</i> and{" "}
            <i>storytelling</i>.
          </h3>

          <PreviewSwap projectHed="How AI perceives the Bay Area" award={true} awardText={["SND Award of Excellence"]} numImgs="five" imgAlts={["TKTK", "TKTK", "TKTK", "TKTK", "TKTK"]} slug="aibayarea" desc="data collection, data analysis, art direction + design (Figma), code (React)" url="https://www.sfchronicle.com/projects/2024/ai-bay-area/" gifAlt="TKTK" /> 

          <Preview projectHed="How one family fought 100 years to free the Klamath River" award={false} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="klamath" desc="art direction + design (Figma), a bit of code (React)" url="https://www.sfchronicle.com/projects/2025/california-klamath-river/" gifAlt="TKTK" /> 

          <PreviewSwap projectHed="How San Francisco’s Black population changed, block by block over 50 years" award={false} numImgs="five" imgAlts={["TKTK", "TKTK", "TKTK", "TKTK", "TKTK"]} slug="blackpop" desc="art direction + design (Figma), code (React)" url="https://www.sfchronicle.com/projects/2026/sf-black-population/" gifAlt="TKTK" /> 
          
          <h3 id="datavizSubsection" className="workSubhed">
            As both a <i>developer</i> and <i>data journalist</i>, I'm thorough and not afraid to go after hard-to-get-data, analyze it and create accessible <i>data visualizations</i>, useful data pipelines and <i>tools</i> allowing others to better understand that data. 
          </h3>

          <Preview projectHed="California is embracing psychiatric hospitals again. Behind locked doors, a profit-driven system is destroying lives" award={true} awardText={["2026 Pulitzer Finalist", "2026 E.W. Scripps Howard Award"]} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="psychholds" desc="design (Figma), graphics (ai2html/Adobe Illustrator), code (React + D3.js)" url="https://www.sfchronicle.com/projects/2025/california-psychiatric-hospitals-crisis/" gifAlt="TKTK" /> 

          <PreviewSwap projectHed="Tracking COVID wastewater levels in the Bay Area" award={false} numImgs="six" imgAlts={["TKTK", "TKTK", "TKTK", "TKTK", "TKTK", "TKTK"]} slug="covidwastewater" desc="design (Figma), data processing + data analysis + data engineering/pipeline (Python, JavaScript, cronjob), code (React + D3.js), mapping (MapBox/MapLibre)" url="https://www.sfchronicle.com/projects/2023/covid-bay-area-wastewater/" gifAlt="TKTK" /> 

          <Preview projectHed="This is the secret system that covers up police misconduct — and ensures problem officers can get hired again" award={true} awardText={["2025 Selden Ring Award", "2024 George Polk Award", "2025 Goldsmith Prize", "IRE 2024 Award", "2025 E.W. Scripps Howard Award"]} numImgs="five" imgAlts={["TKTK", "TKTK", "TKTK", "TKTK", "TKTK"]} slug="cra1" desc="art direction + design (Figma), code (React + D3.js)" url="https://www.sfchronicle.com/projects/2024/police-clean-record-agreements/" gifAlt="TKTK" /> 

          <PreviewSwap projectHed="Police are using secret deals to hand pensions to troubled officers. Millions of taxpayer dollars support the system" award={false} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="cra2" desc="design (Figma), code (React + D3.js)" url="https://www.sfchronicle.com/projects/2024/police-clean-record-agreements-pensions/" gifAlt="TKTK" /> 

          <Preview projectHed="S.F. feces complaints rise again despite city spending millions on public toilets" award={false} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="sftoilets" desc="data scraping and collection (Playwright, Web Archive), data analysis (Python, Google Sheets), graphics (Datawrapper), code (React + MapBox/MapLibre)" url="https://www.sfchronicle.com/projects/2024/public-toilets-sf/" gifAlt="TKTK" /> 

          <h3 id="otherSubsection" className="workSubhed">
            Whether I pitch and <i>report</i> an entire story from start to finish or spearhead ideation, design and creation of a story's visual elements, I act as a <i>project manager</i> and a liaison among several stakeholders, including subject matter experts, editors and fellow reporters and developers. 
          </h3>

          <Preview projectHed="This S.F. neighborhood now has the most Airbnbs — and it’s not the Mission" award={false} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="airbnbsf" desc="reporting, research, data analysis (Google Sheets, Python), graphics (Datawrapper)" url="https://www.sfchronicle.com/sf/article/airbnb-rent-listing-san-francisco-21953417.php" gifAlt="TKTK" /> 

          <PreviewSwap projectHed="Here’s why the Bay Area is so important for birds — and where to find them" award={false} numImgs="three" imgAlts={["TKTK", "TKTK", "TKTK"]} slug="birdmigration" desc="code (React + MapBox/MapLibre), illustrations (Procreate + Adobe Illustrator/ai2html)" url="https://www.sfchronicle.com/projects/2024/sf-bird-migration" gifAlt="TKTK" /> 

        </div>
      </div>
    );
  }
}
