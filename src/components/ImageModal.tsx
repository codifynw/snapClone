import React from "react";
import { ImgOverlay } from "../types";
import '../styles/ImageModal.css'

type ModalListProps = {
    clearOverlay: () => void;
    args: ImgOverlay;
};

export default class ImageModal extends React.Component<ModalListProps> {
    state = {
        timeLeft: 0,
    }

    countdownInterval;
    countdownTimeout;

    componentDidMount() {
        this.setState({timeLeft: this.props.args.duration})

        this.countdownInterval = setInterval(() => {
            this.setState({timeLeft: this.state.timeLeft - 1})
        }, 1000)

        this.countdownTimeout = setTimeout(() => {
                this.clearModal()
            }, this.props.args.duration * 1000
        );
    }
  
    clearModal = () => {
        clearTimeout(this.countdownTimeout)
        clearInterval(this.countdownInterval)
        this.props.clearOverlay()
    }

    // handleShowDialog = () => {
    //   this.setState({ isOpen: !this.state.isOpen });
    //   console.log('clicked');
    // };
  
    render() {
      return (
        <div 
            id="imageContainer"
            onClick={() => this.clearModal()}
            style= {{backgroundImage: `url(${this.props.args.imgUrl})`}}
        >
            <div>{this.state.timeLeft}</div>
        </div>
      );
    }
  }

// THIS WORKS BUT IS NOT DYNAMIC
// export default class ImageModal extends React.Component {
//     state = { isOpen: false };
  
//     handleShowDialog = () => {
//       this.setState({ isOpen: !this.state.isOpen });
//       console.log('clicked');
//     };
  
//     render() {
//       return (
//         <div>
//           <img
//             className="small"
//             src="https://picsum.photos/200/300"
//             onClick={this.handleShowDialog}
//             alt="no image"
//           />
//           {this.state.isOpen && (
//             <dialog
//               className="dialog"
//               style={{ position: 'absolute', top: '0px' }}
//               open
//               onClick={this.handleShowDialog}
//             >
//               <img
//                 className="image"
//                 src="https://picsum.photos/200/300"
//                 onClick={this.handleShowDialog}
//                 alt="no image"
//               />
//             </dialog>
//           )}
//         </div>
//       );
//     }
//   }