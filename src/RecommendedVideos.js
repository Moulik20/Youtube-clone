import React from 'react';
import VideoCard from "./VideoCard";
import './RecommendedVideos.css';
 

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
           <h2>Recommended</h2> 
           <div className="recommendedvideos__video">
           <a className="video__link" href="https://www.youtube.com/watch?v=VTJ0Ucxcw_U&t=9s">
           <VideoCard 
               title="HP Elite Folio Snapdragon Powered Convertible Unboxing"
               views="1M views"
               timestamp="2 days ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E3ITSM4WEAMApeF?format=jpg&name=small"
                
           />
           </a>
             <a className="video__link" href="https://www.youtube.com/watch?v=ZS-LwWzlKdc"><VideoCard
               title="When Smartphones Copy Each Other!"
               views="1.3M views"
               timestamp="5 days ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Marques Brownlee"
               image="https://pbs.twimg.com/media/E26M1v5WEAEVwC9?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=vkLcZPz2sKI"> <VideoCard
               title="HUGE Apple Unboxing Extravaganza 2021"
               views="1M views"
               timestamp="1 week ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E2fNbPYWYAgs5uX?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=Df_hrHHcQ_g"><VideoCard
               title="Fastest Soapbox Car Wins"
               views="10M views"
               timestamp="1 week ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/E2v4Lq7XMAUKEA1?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=n2RNcPRtAiY"><VideoCard
               title="Talking Tech and AI with Google CEO Sundar Pichai!"
               views="2.3M views"
               timestamp="2 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Marques Brownlee"
               image="https://pbs.twimg.com/media/E18DmIVXMAMDsQi?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=I4AgeDIrHGY"><VideoCard
               title="Bucket List: South Africa"
               views="14M views"
               timestamp="3 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/E1nvq6MWEAUiU5M?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=7Eck-bCIPPg"> <VideoCard
               title="You've Never Seen a Laptop Do THIS..."
               views="1.4M views"
               timestamp="2 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E17G-iAXoAoSUzE?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=PAgQHcKMOIk"><VideoCard
               title="World's Weirdest Item | OT 26"
               views="13M views"
               timestamp="1 month ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/EzXi1PRVUAEWnDN?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=VTJ0Ucxcw_U&t=9s"><VideoCard
               title="HP Elite Folio Snapdragon Powered Convertible Unboxing"
               views="1M views"
               timestamp="2 days ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E3ITSM4WEAMApeF?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=ZS-LwWzlKdc"><VideoCard
               title="When Smartphones Copy Each Other!"
               views="1.3M views"
               timestamp="5 days ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Marques Brownlee"
               image="https://pbs.twimg.com/media/E26M1v5WEAEVwC9?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=vkLcZPz2sKI"><VideoCard
               title="HUGE Apple Unboxing Extravaganza 2021"
               views="1M views"
               timestamp="1 week ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E2fNbPYWYAgs5uX?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=Df_hrHHcQ_g"> <VideoCard
               title="Fastest Soapbox Car Wins"
               views="10M views"
               timestamp="1 week ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/E2v4Lq7XMAUKEA1?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=n2RNcPRtAiY"> <VideoCard
               title="Talking Tech and AI with Google CEO Sundar Pichai!"
               views="2.3M views"
               timestamp="2 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Marques Brownlee"
               image="https://pbs.twimg.com/media/E18DmIVXMAMDsQi?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=I4AgeDIrHGY"> <VideoCard
               title="Bucket List: South Africa"
               views="14M views"
               timestamp="3 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/E1nvq6MWEAUiU5M?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=7Eck-bCIPPg"><VideoCard
               title="You've Never Seen a Laptop Do THIS..."
               views="1.4M views"
               timestamp="2 weeks ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj"
               channel="Unbox Therapy"
               image="https://pbs.twimg.com/media/E17G-iAXoAoSUzE?format=jpg&name=small"
           /></a>
          <a className="video__link" href="https://www.youtube.com/watch?v=PAgQHcKMOIk"><VideoCard
               title="World's Weirdest Item | OT 26"
               views="13M views"
               timestamp="1 month ago"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwni8alaul0s34_VP1Vgo9zQvdvXPacigPR_40AgdpA=s176-c-k-c0x00ffffff-no-rj"
               channel="Dude Perfect"
               image="https://pbs.twimg.com/media/EzXi1PRVUAEWnDN?format=jpg&name=small"
           /></a>
           </div>
        </div>
    )
}

export default RecommendedVideos
