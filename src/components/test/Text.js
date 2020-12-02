import React from 'react'

const Text = (props) => {

  const text = props.text.split('');
  const userInput = props.userInput.split('');

    return(
      <div> {
        text.map((s, i) => {
          let color;
          if(i < props.userInput.length) {
            color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4'
          }
          return <span key={i} style={{backgroundColor: color}}>{s}</span>
        })
      }
      </div>
    );
}

export default Text;
