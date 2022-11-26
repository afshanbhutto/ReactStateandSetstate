# React state and setState

* State is a JavaScript object that stores a component’s dynamic data and determines the component’s behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.
* State is similar to props but unlike props, it is private to a component and is controlled solely by the said component. 

` class Greeting extends React.Component {  constructor(props) {
   super(props);
     // Define your state object here
     this.state = {
       name: ‘Jane Doe’
     }
   }   render(){
     return <h1>Hello { this.state.name }</h1>;
   }
}`
