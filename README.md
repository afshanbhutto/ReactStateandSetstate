# React state and setState

* State is a JavaScript object that stores a component’s dynamic data and determines the component’s behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.
* State is similar to props but unlike props, it is private to a component and is controlled solely by the said component. 

```javascript
class Greeting extends React.Component {  
   constructor(props) {
   super(props);
     // Define your state object here
     this.state = {
       name: "Jane Doe",
       buttonText: "Click ME!"
     }
   }  
   Buttonchange = () => {
      this.setState({
      
       buttonText: "you have Clicked ME!"
      })
   }
   render(){
     return (
     <div>
      <h1>Hello { this.state.name }</h1>
      <button onClick={this.Buttonchange}>{this.state.buttonText}</button>
     </div>
     ) ;
   }
}
```

* State is initiated using this.state, however, all subsequent changes to state are made using this.setState. Using this.setState ensures that the components affected by the change in state are re-rendered in the browser.

![]{src/components/images/screenshot.PNG}

