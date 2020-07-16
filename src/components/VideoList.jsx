// import VideoListEntry from "./VideoListEntry.jsx"
// contains all of the videoListEntries
var VideoList = () => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
  </div>
);

// class VideoList extends React.Component {
//   // pass in exampleVideoData data as props, named it videos in App.js
//   constructor(props) {
//     super(props)
//   }

//   // dynamically render one VideoListEntry component for each video object in exampleVideoData
//   render() {
//     return (
//       <div>
//         <h5>
//           {/* grabbing out every video object from the data array */}
//           {this.props.videos.map(video =>
//             <VideoListEntry videoEl={video} />
//             // <div><VideoList videos={exampleVideoData}/></div>
//           )}
//         </h5>
//       </div>
//     )
//   //   return (
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> {this.props.videos[0].snippet.title}view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>)
//   }
// };

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
