import React, { Component } from 'react';
import images from '../assets/images/images';

class Games extends Component{
  render(){
    return(
      <div style={styles.games}>
        <div style={styles.titlebar}>
          <p style={styles.titlebarParagraph}>iPod</p>
          <img style={styles.battery} src={images.battery} alt='battery image'></img>
        </div>
        <div style={styles.imageContainer}>
          <img style={styles.image} src={images.games} />
        </div>
      </div>
    );
  }
}

const styles = {
  games : {
      width : '100%',
      height : '100%',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      flexWrap : 'wrap'
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
  imageContainer: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image : {
      width:'100%',
      height:'100%',
      alignSelf : 'center'
  },
  battery :{
      width : '20px',
      height: '20px',
  }
}

export default Games;