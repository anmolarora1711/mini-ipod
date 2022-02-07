import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import images from '../assets/images/images';

class Music extends Component{
  render(){
    return(
      <div style={styles.music} id='music'>
        <div style={styles.menu} id='menu'>
          <div style={styles.titlebar}>
            <p style={styles.titlebarParagraph}>iPod</p>
            <img style={styles.battery} src={images.battery} alt='battery image'></img>
          </div>
          <ListGroup style={{borderRadius: '0'}}>
            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='MyMusic'?'active':''}>
              My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>
            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Artists'?'active':''}>
              Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
            </ListGroup.Item>
          </ListGroup>
        </div>
          <div style={styles.imageContainer} id='image-container'></div>
      </div>
    );
  }
}

const styles = {
  music : {
      height : '100%',
      width : '100%',
      display : 'flex',
      flexDirecton : 'row'
  },
  menu : {
      height : '100%',
      width : '50%',
      boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
      zIndex : '1'
  },
  imageContainer : {
      height : '100%',
      width : '50%',
      backgroundImage : 'url("https://www.teahub.io/photos/full/10-109567_anime-iphone-wallpapers-anime-scenery-wallpaper-iphone.jpg")',
      backgroundSize : 'cover',
      backgroundPosition : 'center',
      borderRadius : '0 12px 12px 0'
  },
  titlebar : {
      height:'10%',
      width:'100%',
      borderRadius:'12px 0 0 0',
      backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
      borderBottom: '1px solid #6c757d',
      padding : '1px 5px 10px 8px',
      display:'flex',
      flexDirecton : 'row',
      justifyContent : 'space-between'

  },
  titlebarParagraph: {
    fontWeight: 'bold'
  },
  battery : {
      width : '20px',
      height: '20px',
  }
}

export default Music;