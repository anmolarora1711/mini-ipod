import React, { Component } from 'react';
import images from '../assets/images/images';

class MyMusic extends Component{
  constructor(){
    super();
    this.state = {
      isMounted: true
    }
  }

  componentDidMount(){
    let self = this;
    self.props.audio.play();

    self.props.audio.addEventListener('timeupdate',function(){
      if(self.state.isMounted){
        let pos = self.props.audio.currentTime/self.props.audio.duration;
        self.updateTime();
        let fill = document.getElementById('fill');
        if(fill !== null){
          fill.style.width = pos*100 + "%";
        }
      }
    });
  }

  updateTime = () => {
    this.setState({
      audio: this.props.audio
    });
  }

  componentWillUnmount(){
    this.state.isMounted = false;
  }

  showTime = (time) => {
    let min = 0;
    let sec = 0;
    if(Math.floor(time) >= 60){
      min = Math.floor(Math.floor(time) / 60);
      sec = Math.floor(time) % 60;
      if(sec < 10){
        if(min >= 10){
          return `${min}:0${sec}`;
        }
        return `0${min}:0${sec}`;
      }
      if(min < 10){
        return `0${min}:${sec}`;
      }
      return `${min}:${sec}`;
    }
    sec = Math.floor(time);
    if(sec < 10){
      return `00:0${sec}`;
    }
    return `00:${sec}`;
  }

  render(){
    let audio = this.props.audio;
    return (
      <div style={styles.myMusic}>
        <div style={styles.titlebar}>
          <p style={styles.titlebarParagraph}>iPod</p>
          <img style={styles.battery} src={images.battery} alt='battery image' />
        </div>

        <div style={styles.info}>
          <img style={styles.image} src={images.song1} alt='song image' />
          <div style={styles.subInfo}>
            <h4 style={styles.songHeading}>
              12 Saal
            </h4>
            <p style={styles.songParagraph}>
              Bilal Saeed
            </p>
            <p>
              T-Series
            </p>
          </div>
        </div>

        <div style={styles.statusbar}>
          <p style={styles.currTime}>{audio !== null ? this.showTime(audio.currentTime) : '00:00'}</p>
          <div style={styles.seekbar}>
            <div style={styles.fill} id='fill'></div>
          </div>
          <p style={styles.dur}>{audio !== null ? this.showTime(audio.duration) : '00:00'}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  myMusic: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    height: '85%',
    width: '45%',
    alignSelf: 'center',
  },
  songHeading: {
    marginBottom: '0.5rem',
  },
  songParagraph: {
    marginBottom: '0'
  },
  info: {
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  statusbar: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  subInfo: {
    alignSelf: 'center'
  },
  seekbar: {
    width: '70%',
    height: '20%',
    border: '1px solid grey',
    cursor: 'pointer',
    alignSelf: 'center',
    display: 'flex'
  },
  fill: {
    height: '100%',
    backgroundColor: 'royalblue'
  },
  currTime: {
    margin: '0',
    alignSelf: 'center'
  },
  dur: {
    margin: '0',
    alignSelf: 'center'
  },
  titlebar: {
    height: '10%',
    widht: '100%',
    borderRadius: '12px 0 0 0',
    backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
    borderBottom: '1px solid #6c757d',
    padding: '1px 5px 10px 8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  battery: {
    width: '20px',
    height: '20px',
  }
}

export default MyMusic;