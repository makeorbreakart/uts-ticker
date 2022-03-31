import React from "react";
import Ticker from "react-ticker";
import './ticker.css';
import './button.css';
// import { useTextWidth } from '@imagemarker/use-text-width';
import headlinesText from './headlines';
import {
    Link
  } from "react-router-dom";



function NewsTicker() {
    // const fullTextWidth = useTextWidth({text: headlinesText, font: '3em monospace'});
    const fullTextWidth = 19551.3515625;
    // this is async it seems - will be easiest to calculate value of this once when final text file is ready
    // then include as hardcoded var as shown aove

    // this calculation gets offset as a per-character scaled number
    // const charCount = headlinesText.length;
    // const charWidth = fullTextWidth / charCount;

    const _speed = 8;

    // will need to set this as literal time when ticker goes live
    // currently is set to have started 30 seconds ago
    // const startTime = Date.now();
const startTime = 1648283129044;

    // const timeStamp = Date.now();
    const _offset = Math.random() * fullTextWidth * -1;

    console.log("FullTextWidth: " + fullTextWidth);
    console.log("NOW TIME: " + startTime);
    
    console.log(_offset);
    return (
        <div>
        <Ticker speed={_speed} offset={_offset}>
            {() => (
                <>
                    <div className="mainTicker">
                        {headlinesText}
                    </div>
                </>
            )}
        </Ticker>
        {/* INSERT MROUTING PATH FOR LINK TO INFO BELOW - href */}
        <div className="linkButton"><Link to="/about">About</Link></div>
        </div>
    );
}

export default NewsTicker