import React from 'react'

const Color = (props) => {
    const text = props.text.toString().split('');
    return (
      <div>
        {
          text.map((s,i) => {
            let color;
            if (i < props.userInput.length) {
              color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
            }
            return <span key={i} style={{backgroundColor: color}}>{s}</span>
          })
        }
      </div>
    )
}

export default Color;
