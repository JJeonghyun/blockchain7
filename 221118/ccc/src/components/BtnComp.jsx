import React from "react";

class BtnComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="num-pad"
        onClick={() => {
          this.props.onClick(+this.props.item);
        }}
      >
        {this.props.item}
      </div>
    );
  }
}
export default BtnComp;
