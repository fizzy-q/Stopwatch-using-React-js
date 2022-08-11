import React from 'react';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch__display'}>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;






// import React from 'react';

// function display(props) {
//   return (
//     <div>
//         <span>{(props.time.h >=0 )? props.time.h : "0" + props.time.h}</span> &nbsp; &nbsp;
//         <span>{(props.time.m >=0 )? props.time.m : "0" + props.time.m}</span> &nbsp; &nbsp;
//         <span>{(props.time.s >=0 )? props.time.s : "0" + props.time.s}</span> &nbsp; &nbsp;
//         <span>{(props.time.ms >=0 )? props.time.ms : "0" + props.time.ms}</span> &nbsp; &nbsp;
//     </div>
//   );
// }

// export default display;
