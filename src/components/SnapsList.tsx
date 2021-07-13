import React from 'react'

import fetchData from '../services/fetchData'
import '../styles/SnapsList.css'
import { Snap } from '../types'

let users

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void
  setImgOverlay: (setImgOverlay) => void
  snaps: Snap[]
}

class SnapsList extends React.PureComponent<SnapListProps> {
  componentDidMount() {
    const { onLoad } = this.props

    fetchData()
      .then((x) => {
        const usersObj = x.users.reduce((agg, curr) => {
          return {
            ...agg,
            [curr.id]: curr,
          }
        }, {})
        users = usersObj
        return x.snaps
      })
      .then(onLoad)
      .catch(console.error)
  }

  render() {
    const { snaps } = this.props

    let handleClick = (snap: Snap) => {
      this.props.setImgOverlay(snap)
    }

    return (
      <div className="snaps-container">
        {snaps.length && Object.keys(users).length ? (
          snaps.map((snap: Snap, index) => {
            return (
              <div key={snap.id} onClick={() => handleClick(snap)} className="snap">
                From: {users[snap.from].name}
                Duration: {snap.duration}
              </div>
            )
          })
        ) : (
          <p>Loading snaps...</p>
        )}
      </div>
    )
  }
}

export default SnapsList
