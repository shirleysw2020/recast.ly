import VideoList from "./VideoList.js"
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from "./VideoPlayer.js"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      videos : exampleVideoData,
      video: exampleVideoData[0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    this.setState({
      video: video
    })
  }

    render(){
      console.log(this);
      return (<div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList handleClick={this.handleClick} videos={this.state.videos}/></h5></div>
          </div>
        </div>
      </div>)
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
