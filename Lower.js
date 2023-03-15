class Lower extends React.Component {
    constructor(props) {
      super(props);
    }



    render() {
      return (
        <div className="time">
          <audio id="beep" className="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
          <div className="display">
            <div id="timer-label">{this.props.current}</div>
            <div id="time-left">{this.props.displayMin}:{this.props.displaySec}</div>
          </div>
          <div className="buttons">
            <div id="start_stop" onClick={this.props.playPause}>Play/Pause</div>
            <div id="reset" onClick={this.props.reset}>Reset</div>
          </div>
        </div>
      );
    }
  };
