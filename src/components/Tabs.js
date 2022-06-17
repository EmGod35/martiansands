import React, { useState } from "react";
import "../pages/pages.css"
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import pourpaint from '../assets/PourPaint.png';
import primordium from '../assets/Primordium.png';
import dreamart from '../assets/DreamArt.png';
// import PourPainting from "./PourPainting";

// export const pourphotos = [pourpaint, pourpaint];
// const pourphotos = [{pourpaint}, {pourpaint}, {pourpaint}];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const pourphotos = [
            {id: 'one', image: pourpaint, title:"img1", label: "image 1"},
            {id: 'two', image: primordium, title:"img2b", label: "image 2"}
            // {image: pourpaint, title:"img3", label: "image 3"},
            // {image: pourpaint, title:"img4", label: "image 4"},
            // {image: pourpaint, title:"img5", label: "image 5"},
            // {image: pourpaint, title:"img6", label: "image 6"},
            // {image: pourpaint, title:"img7", label: "image 7"},
            // {image: pourpaint, title:"img8", label: "image 8"}
    ];

    const primordiumgal = [
        {image: primordium, title:"img2a", label: "image 1"},
        {image: primordium, title:"img2b", label: "image 2"},
        {image: primordium, title:"img2c", label: "image 3"},
        {image: primordium, title:"img2d", label: "image 4"},
        {image: primordium, title:"img2e", label: "image 5"},
        {image: primordium, title:"img2f", label: "image 6"},
        {image: primordium, title:"img2g", label: "image 7"},
        {image: primordium, title:"img2h", label: "image 9"},
        {image: primordium, title:"img2i", label: "image 9"},
        {image: primordium, title:"img2j", label: "image 9"},
        {image: primordium, title:"img2k", label: "image 9"}
    ];

    const dreamartgal = [
        {image: dreamart, title:"img3a", label: "image 9"},
        {image: dreamart, title:"img3b", label: "image 9"},
        {image: dreamart, title:"img3c", label: "image 9"},
        {image: dreamart, title:"img3d", label: "image 9"},
        {image: dreamart, title:"img3e", label: "image 9"},
        {image: dreamart, title:"img3f", label: "image 9"}
    ];



    return (
        <div>
            <div className="wrapper">
                <TabNavItem title="PourPainting" id="tab1" src={pourpaint} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Primordium Sproutlings" id="tab2" src={primordium} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Dream Art" id="tab3" src={dreamart} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div>
                <TabContent id="tab1" activeTab={activeTab} arr={pourphotos}>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab} arr={primordiumgal}>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab} arr={dreamartgal}>
                </TabContent>

            </div>
        </div>
    );
};

export default Tabs;