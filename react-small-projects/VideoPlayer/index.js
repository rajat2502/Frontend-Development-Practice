const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
		this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }
  
  chooseVideo(newVideo) {
    this.setState({
			src: VIDEOS[newVideo]
    })
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  	this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text)
  }
  
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}

class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);