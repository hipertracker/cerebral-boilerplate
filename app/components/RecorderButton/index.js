import React from 'react'
import {connect} from 'cerebral-view-react'

// source: http://www.cerebraljs.com/documentation/cerebral-module-recorder

export default connect({
  recorder: 'recorder'
}, props => {
  const style = {
    border: '1px solid black',
    borderRadius: '2px',
    height: '25px',
    backgroundColor: '#EAEAEA',
    padding: '5px',
    lineHeight: '15px',
    boxSizing: 'border-box'
  }
  const signals = props.signals

  if (props.recorder.isPlaying) {
    return React.createElement('button', {
      style,
      onClick: () => {
        signals.recorder.paused({}, {
          isRecorded: true
        })
      }
    }, 'Pause playback')
  }
  if (props.recorder.isPaused) {
    return React.createElement('button', {
      style,
      onClick: () => {
        signals.recorder.resumed()
      }
    }, 'Play')
  }
  if (props.recorder.isRecording) {
    return React.createElement('button', {
      style,
      onClick: () => {
        signals.recorder.stopped()
      }
    }, 'Stop recording')
  }
  if (props.recorder.hasRecorded) {
    return React.createElement('button', {
      style,
      onClick: () => {
        signals.recorder.played()
      }
    }, 'Play')
  }
  return React.createElement('button', {
    style,
    onClick: () => {
      signals.recorder.recorded()
    }
  }, 'Record')
})
