import React from "react";

export default class ImageModal extends React.Component {
    constructor(props) {
        console.log('PROPS: ', props);
        super(props);
        this.state = {
            isOpen: false
        };
      }
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('clicked');
    };
  
    render() {
      return (
        <div>
            {this.state.isOpen ? <h1>SHOW ME</h1> : ''}
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