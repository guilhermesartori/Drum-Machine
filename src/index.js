import React from "react";
import ReactDOM from "react-dom";

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumMachine extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
  }
  changeDisplay(val) {
    document.getElementById("display").innerHTML = val;
  }
  playSound(event) {
    let audio = document.getElementById(event.key.toUpperCase());
    if (audio !== null) {
      audio.currentTime = 0;
      audio.play();
      document.getElementById("display").innerHTML = audio.getAttribute(
        "audioname"
      );
    }
  }
  render() {
    return (
      <div id="drum-machine">
        <div>
          <DrumPad pad="Q" changeDisplay={this.changeDisplay} />
          <DrumPad pad="W" changeDisplay={this.changeDisplay} />
          <DrumPad pad="E" changeDisplay={this.changeDisplay} />
          <DrumPad pad="A" changeDisplay={this.changeDisplay} />
          <DrumPad pad="S" changeDisplay={this.changeDisplay} />
          <DrumPad pad="D" changeDisplay={this.changeDisplay} />
          <DrumPad pad="Z" changeDisplay={this.changeDisplay} />
          <DrumPad pad="X" changeDisplay={this.changeDisplay} />
          <DrumPad pad="C" changeDisplay={this.changeDisplay} />
          <h1 id="display">Sound</h1>
        </div>
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }
  UNSAFE_componentWillMount() {
    switch (this.props.pad) {
      case "Q":
        this.audioSrc = soundBank[0];
        return;
      case "W":
        this.audioSrc = soundBank[1];
        return;
      case "E":
        this.audioSrc = soundBank[2];
        return;
      case "A":
        this.audioSrc = soundBank[3];
        return;
      case "S":
        this.audioSrc = soundBank[4];
        return;
      case "D":
        this.audioSrc = soundBank[5];
        return;
      case "Z":
        this.audioSrc = soundBank[6];
        return;
      case "X":
        this.audioSrc = soundBank[7];
        return;
      default:
        // C
        this.audioSrc = soundBank[8];
        return;
    }
  }
  playSound(e) {
    document.getElementById(this.props.pad).play();
    this.props.changeDisplay(this.audioSrc.id);
  }
  render() {
    return (
      <div className="drum-pad" id={this.audioSrc.id} onClick={this.playSound}>
        <h2>{this.props.pad}</h2>
        <audio
          id={this.props.pad}
          className="clip"
          src={this.audioSrc.url}
          audioname={this.audioSrc.id}
        />
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
