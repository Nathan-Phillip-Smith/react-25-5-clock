class Upper extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
          <div className="titles">
              <h1 className="title">25+5 Clock</h1>
              <div className="subTitles">
                <div className="break">
                  <div id="break-label">Break Length</div>
                  <div className="break-adjustment">
                    <div id="break-decrement" onClick={this.props.breakDecrement}>&#8595;</div>
                    <div id="break-length">{this.props.breakLength}</div>
                    <div id="break-increment" onClick={this.props.breakIncrement}>&#8593;</div>
                  </div>
                </div>
                <div className="session">
                  <div id="session-label">Session Length</div>
                  <div className="session-adjustment">
                    <div id="session-decrement" onClick={this.props.sessionDecrement}>&#8595;</div>
                    <div id="session-length">{this.props.sessionLength}</div>
                    <div id="session-increment" onClick={this.props.sessionIncrement}>&#8593;</div>
                  </div>
                </div>
              </div>
          </div>
        );
      }
    };