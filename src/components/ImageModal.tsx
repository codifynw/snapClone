import React, { Component } from 'react'
import '../styles/ImageModal.css'
import { ImgOverlayType } from '../types'

type imgOverlayProps = {
  setImgOverlayToFalse: () => void
  imgOptions: ImgOverlayType
}

class ImgOverlay extends Component<imgOverlayProps> {
  state = {
    timeLeft: 0,
  }

  durationTimeout
  countdownInterval

  componentDidMount() {
    this.setState({ timeLeft: this.props.imgOptions.duration })

    this.countdownInterval = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 })
    }, 1000)

    this.durationTimeout = setTimeout(() => {
      this.clearIntervals()
      this.props.setImgOverlayToFalse()
    }, this.props.imgOptions.duration * 1000)
  }

  clearIntervals = () => {
    clearInterval(this.durationTimeout)
    clearInterval(this.countdownInterval)
  }

  handleClick = () => {
    this.clearIntervals()
    this.props.setImgOverlayToFalse()
  }

  render() {
    return (
      <div
        id="image-overlay"
        className="go-to-the-next-line"
        onClick={() => this.handleClick()}
        style={{ backgroundImage: `url(${this.props.imgOptions.imgUrl})` }}
      >
        <div id="countdown">{this.state.timeLeft}</div>
      </div>
    )
  }
}

export default ImgOverlay
