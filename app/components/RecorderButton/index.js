import React from 'react'
import {connect} from 'cerebral-view-react'
import styles from './style.css'

export default connect({
    recorder: 'recorder'
  }, {
    clicked: 'recorder'
  },
  function RecorderButton({recorder, clicked}) {
    let action
    if (recorder.isPlaing) {
      action = {name: 'paused', label: 'Pause playback'}
    } else if (recorder.isPaused) {
      action = {name: 'resumed', label: 'Play'}
    } else if (recorder.isRecording) {
      action = {name: 'stopped', label: 'Stop recording'}
    } else if (recorder.hasRecorded) {
      action = {name: 'played', label: 'Play'}
    } else {
      action = {name: 'recorded', label: 'Record'}
    }
    return (
      <button className={styles.recorder} onClick={() => clicked[action.name]()}>
        {action.label}
      </button>
    )
  }
)
