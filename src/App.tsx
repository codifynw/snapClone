import React, { Component } from 'react'

import SnapsList from './components/SnapsList'
import ImgOverlay from './components/ImageModal'
import './styles/App.css'
import { ImgOverlayType, Snap } from './types'

type AppState = {
  snaps: Snap[]
  imgOverlay: ImgOverlayType | boolean
}

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      snaps: [],
      imgOverlay: false,
    }
  }

  onLoadSnaps = (snaps) => this.setState(() => ({ snaps }))

  setImgOverlay = (snap: Snap) => {
    console.log('we got the snap: ', snap)
    this.setState({
      imgOverlay: {
        duration: snap.duration,
        imgUrl: snap.imgUrl,
      },
    })
  }

  setImgOverlayToFalse = () => {
    this.setState({
      imgOverlay: false,
    })
  }

  render() {
    const { snaps } = this.state

    return (
      <div>
        {typeof this.state.imgOverlay === 'object' ? (
          <ImgOverlay
            imgOptions={this.state.imgOverlay}
            setImgOverlayToFalse={this.setImgOverlayToFalse}
          />
        ) : (
          ''
        )}
        <SnapsList snaps={snaps} setImgOverlay={this.setImgOverlay} onLoad={this.onLoadSnaps} />
      </div>
    )
  }
}

export default App
