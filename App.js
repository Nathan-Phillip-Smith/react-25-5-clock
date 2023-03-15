class App extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
          breakLength: 5,
          sessionLength: 25,
          displayMin: 25,
          displaySec: '00',
          current: "Session",
          position: false,
          Interval: '',
          count: 0
        }
        this.reset = this.reset.bind(this);
        this.breakDecrement = this.breakDecrement.bind(this);
        this.breakIncrement = this.breakIncrement.bind(this);
        this.sessionDecrement = this.sessionDecrement.bind(this);
        this.sessionIncrement = this.sessionIncrement.bind(this);
        this.playPause = this.playPause.bind(this);
        this.runClock = this.runClock.bind(this);
      }

    // reset clock function

      reset() {
        let audio = document.querySelector('#beep')
          audio.pause()
          audio.load()
        this.setState({
          position: false
        })
        clearInterval(this.state.Interval)
        this.setState({
          breakLength: 5,
          sessionLength: 25,
          displayMin: 25,
          displaySec: '00',
          current: "Session",
          position: false,
          count: 0
        })
      }

      // reset clock function end

      // increment and decrement functions 

      breakDecrement() {
        if (this.state.breakLength > 1 && this.state.position === false && this.state.current === 'Session') {
          let length = Number(this.state.breakLength) - 1

          
          
          this.setState({
            breakLength: length
          })


        } else if (this.state.breakLength > 1 && this.state.position === false && this.state.current === 'Break') {
          let length =  Number(this.state.breakLength) - 1
          if (length < 10) {
            let newLength = `0${length}`
            this.setState({
              breakLength: length,
              displayMin: newLength,
              displaySec: '00'
            })
          } else {
            this.setState({
              breakLength: length,
              displayMin: length,
              displaySec: '00'
            })
          }


      }
    }
      breakIncrement() {
        if (Number(this.state.breakLength) < 60 && this.state.position === false && this.state.current === 'Session') {
          let length = Number(this.state.breakLength) + 1
          this.setState({
            breakLength: length
          })
        } else if (Number(this.state.breakLength) < 60 && this.state.position === false && this.state.current === 'Break') {
          let length =  Number(this.state.breakLength) + 1
          if (length < 10) {
            let newLength = `0${length}`
            this.setState({
              breakLength: length,
              displayMin: newLength,
              displaySec: '00'
            })
          } else {
            this.setState({
              breakLength: length,
              displayMin: length,
              displaySec: '00'
            })
          }

        }
      }
      sessionDecrement() {
        if (this.state.sessionLength > 1 && this.state.position === false && this.state.current === 'Session') {
          let length =  Number(this.state.sessionLength) - 1
          if (length < 10) {
            let newLength = `0${length}`
            this.setState({
              sessionLength: length,
              displayMin: newLength,
              displaySec: '00'
            })
          } else {
            this.setState({
              sessionLength: length,
              displayMin: length,
              displaySec: '00'
            })
          }

        } else if (this.state.sessionLength > 1 && this.state.position === false && this.state.current === 'Break') {
          let length = Number(this.state.sessionLength) - 1

          
          
          this.setState({
            sessionLength: length
          })


        }
      }
      sessionIncrement() {
        if (this.state.sessionLength < 60 && this.state.position === false && this.state.current === 'Session') {
          let length =  Number(this.state.sessionLength) + 1
          if (length < 10) {
            let newLength = `0${length}`
            this.setState({
              sessionLength: length,
              displayMin: newLength,
              displaySec: '00'
            })
          } else {
            this.setState({
              sessionLength: length,
              displayMin: length,
              displaySec: '00'
            })
          }
        } else if (this.state.sessionLength < 60 && this.state.position === false && this.state.current === 'Break') {
          let length = Number(this.state.sessionLength) + 1
          this.setState({
            sessionLength: length
          })
        }
      }

      // increment and decrement functions end

      // play and pause functions
      
      playPause() {
        if(this.state.position === false) {
          this.setState({
            position: true
          })
          clearInterval(this.state.Interval)
         this.setState({
          Interval: setInterval(this.runClock, 1000)
        });
        } else {
          this.setState({
            position: false
          })
          clearInterval(this.state.Interval)
        }

      }
      runClock() {
     
        if(this.state.displaySec === '00' && this.state.displayMin === '00' && this.state.current === "Session") {
          let audio = document.querySelector('#beep')
          audio.play()
          let length = `0${this.state.breakLength}`
          this.setState({
            displayMin: length,
            displaySec: '00',
            current: "Break",
            count: 0
          })

        } else if (this.state.displaySec === '00' && this.state.displayMin === '00' && this.state.current === "Break"){
          let audio = document.querySelector('#beep')
          audio.play()
          let length = `0${this.state.sessionLength}`
          this.setState({
            displayMin: length,
            displaySec: '00',
            current: "Session",
            count: 0
          })

        }else {
          if (this.state.displaySec === '00' || this.state.displaySec === 0) {
            let minutes =  this.state.displayMin - 1
            let seconds =  59
            if (minutes < 10) {
              let newMinutes = `0${minutes}`
              this.setState({
                displayMin: newMinutes,
                displaySec: seconds
              })
            } else {
              this.setState({
                displayMin: minutes,
                displaySec: seconds
              })
            }
            
        } else {
            let seconds = this.state.displaySec - 1
            if (seconds < 10) {
              let newSeconds = `0${seconds}`
              this.setState({
                displaySec: newSeconds
              })
            } else {
              this.setState({
                displaySec: seconds
              })
            }
            
        }
        }
      
      }

      // play and pause functions end
    
      render() {
        return (
          <div className="clock">
            <Upper 
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            breakDecrement={this.breakDecrement}
            breakIncrement={this.breakIncrement}
            sessionDecrement={this.sessionDecrement}
            sessionIncrement={this.sessionIncrement}
            />
            <Lower
            reset={this.reset}
            playPause={this.playPause}
            displayMin={this.state.displayMin}
            displaySec={this.state.displaySec}
            current={this.state.current}
            />
          </div>
        );
      }
      
    }
    
    
    