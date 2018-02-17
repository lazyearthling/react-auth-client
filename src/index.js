import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component{
  render(){
    return(
      <div>
        React Starter
      </div>
    );
  }
}

ReactDOM.render(<Main />,document.querySelector('.container'));
