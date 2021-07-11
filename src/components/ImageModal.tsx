import React from "react";
import { ImgOverlay } from "../types";
import '../styles/ImageModal.css'

type ModalListProps = {
    setShowOverlay: (boolValue: boolean) => void;
    args: ImgOverlay;
};
  
export default class ImageModal extends React.Component<ModalListProps> {
    componentDidMount() {
        debugger
        setTimeout(() => {
            console.log('after timeout')
                this.props.setShowOverlay(false)
                // NEED TO CLEAR IMAGE HERE OR ADD
                // LOADING IMAGE
            }, this.props.args.duration * 1000
        );
    }
  
    // handleShowDialog = () => {
    //   this.setState({ isOpen: !this.state.isOpen });
    //   console.log('clicked');
    // };
  
    render() {
      return (
        <div id="imageContainer">
            <img src={this.props.args.imgUrl}></img>
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