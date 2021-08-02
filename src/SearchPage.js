import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                  <TuneOutlinedIcon/>
                  <h2>FILTER</h2>
            </div>
            <hr/> 
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Unbox Therapy"
                verified
                subs="18M subscribers"
                noofVideos="1929 videos"
                desc="Where products get naked. Here you will find a variety of videos showcasing the coolest products on the planet. From the newest ..."
            />
            <hr/>
            <a className="videoRow__link" href="https://www.youtube.com/watch?v=eDBtBHvXiZs">
              <VideoRow
           views="284K views"
           subs="18M subscribers"
           desc="Chance to win an iPhone 12 and Insta360 ONE X2. Sponsored by Insta360 1. Subscribe to Insta360 on YouTube ..."
           timestamp="14 hours ago"
           channel="Unbox Therapy"
           title="The Insta360 ONE X2 Sees EVERYTHING…"
           image="https://pbs.twimg.com/media/E3YWp5UWEAIuLy2?format=jpg&name=small"

           />
           </a>
            <a className="videoRow__link" href="https://www.youtube.com/watch?v=VTJ0Ucxcw_U">
            <VideoRow
           views="1M views"
           subs="18M subscribers"
           desc="Unboxing the new HP Elite Folio 2-in-1. Check out the Elite Folio at the HP Store: https://bit.ly/3iq28ki Sponsored by HP. FOLLOW ..."
           timestamp="3 days ago"
           channel="Unbox Therapy"
           title="HP Elite Folio Snapdragon Powered Convertible Unboxing"
           image="https://pbs.twimg.com/media/E3ITSM4WEAMApeF?format=jpg&name=small"
             />
             </a>
             <a className="videoRow__link" href="https://www.youtube.com/watch?v=vkLcZPz2sKI">
              <VideoRow
           views="1M views"
           subs="18M subscribers"
           desc="Unboxing everything new from Apple. iMac 24, iPad Pro 12.9, Apple TV and the purple iPhone 12. ZEN Link: https://bit.ly/2QT9cL1."
           timestamp="1 week ago"
           channel="Unbox Therapy"
           title="HUGE Apple Unboxing Extravaganza 2021"
           image="https://pbs.twimg.com/media/E2fNbPYWYAgs5uX?format=jpg&name=small"

           />
           </a>
           <a className="videoRow__link" href="https://www.youtube.com/watch?v=UheNgtAQSC4">
              <VideoRow
           views="1.2M views"
           subs="18M subscribers"
           desc="Coolify is a small wearable air conditioner that fits around your neck. Sponsored by TORRAS. Links below. Amazon US: ..."
           timestamp="1 week ago"
           channel="Unbox Therapy"
           title="This New Tech is Instant Cool..."
           image="data:image/jpeg;base64,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"

           />
           </a>
           <a className="videoRow__link" href="https://www.youtube.com/watch?v=7Eck-bCIPPg">
              <VideoRow
           views="1.4M views"
           subs="18M subscribers"
           desc="This video features an unboxing of the new ASUS ROG Zephyrus M16 and ASUS ROG Zephyrus S17 RTX 3070 and RTX 3080 ..."
           timestamp="2 weeks ago"
           channel="Unbox Therapy"
           title="You've Never Seen a Laptop Do THIS..."
           image="https://pbs.twimg.com/media/E17G-iAXoAoSUzE?format=jpg&name=small"

           />
           </a>
           
           <a className="videoRow__link" href="https://www.youtube.com/watch?v=7iqB74PJAdI">
              <VideoRow
           views="1.3M views"
           subs="18M subscribers"
           desc="*phone stand not included with purchase of device FOLLOW ME IN THESE PLACES FOR UPDATES Twitter ..."
           timestamp="3 weeks ago"
           channel="Unbox Therapy"
           title="This New Smartphone Packs a MONSTER Display..."
           image="https://pbs.twimg.com/media/E1MHlUCXIAE1XDM?format=jpg&name=small"

           />
           </a>
           <a className="videoRow__link" href="https://www.youtube.com/watch?v=cZmdlt45aa0">
              <VideoRow
           views="1.1M views"
           subs="18M subscribers"
           desc="Apple AirTags have take the world by storm. In this video I test the viability of drilling a DIY AirTag hole for key ring use."
           timestamp="1 month ago"
           channel="Unbox Therapy"
           title="Drilling Through Apple AirTags..."
           image="https://pbs.twimg.com/media/E036sXSXIAAWpOH?format=jpg&name=small"

           />
           </a>
          </div>
    )
}

export default SearchPage
