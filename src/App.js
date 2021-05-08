import React from 'react';
import Clock from './clock';
import Start from './Start';
import Particles from 'react-particles-js';
import './App.css';


const particlesEffect = {
   "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
  }

class App extends React.Component {
 
 setdate;
  constructor(){
    super();
    this.interval=undefined;
    this.state={
       
      inputdate : "",
      inputempty:"",
      comedown:"",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdowndate : new Date().getTime()
    }
  }
  
  getInput=(event)=>{
   console.log(event)
   this.setState({inputdate : event.target.value});
   
  //let d=event.target.value; 
  }
 timer = () => {
      this.setState ({countdowndate:new Date(this.state.inputdate).getTime()});
      let utc_ist_difference = 19800000;
      let x =setInterval(()=>{
      let now = new Date().getTime();
      const distance= this.state.countdowndate-now-utc_ist_difference;
      console.log(distance)
      
      let days = Math.floor(distance / (24*60*60*1000));
      let hours = Math.floor((distance % (24*60*60*1000)) / (60*60*1000));
      let minutes = Math.floor((distance % (60*60*1000)) / (60*1000));
      let seconds = Math.floor((distance % (60*1000)) / (1000));
      console.log(days ,hours ,minutes ,seconds);
      this.setState({comedown:days+":"+hours+":"+minutes+":"+seconds})

       if(distance < 0){
          clearInterval(x);
          this.setState({comedown:"00:00:00:00"});
          this.setState({inputempty:"Please enter Upcoming Date"})
        }
       
       },1000);
  }
onSubmit=(event)=>{
   //  this.setdate=this.state.inputdate
    //  console.log(this.setdate);
     let getdate=event.target.parentNode.children[0].value;
    if(getdate.length!=0)
    {
     this.setState({inputempty:""})
     this.setState({setdate:this.state.inputdate})
     this.setState({comedown:this.timer()})

    // this.setState({inputdate:this.state.inputdate})
    // this.timer(count);
    }
    else{
//    //console.log("hi");
     this.setState({inputempty:"Please enter end date"})
    }
  

}
  render(){
  return(
     <div className="tc ma5 ">
       <Particles params={particlesEffect} className="particles"/>
      <label><b>COUNT DOWN TIMER</b></label>
      <h2> Timer Ends On {this.state.inputdate}</h2>
      {/*<input className="pa2" disabled placeholder="TIMER ENDS ON" value={this.state.inputdate} readOnly />
      <br/>*/}
      <Clock comedown={this.state.comedown} />
      <Start getInput={this.getInput}  starttimer={this.onSubmit} />
      <h4>{this.state.inputempty}</h4>
    </div>
  )
}
}

export default App;