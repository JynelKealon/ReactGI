import React from 'react'
import './App.css';
import BasicInfo from './components/basicinfo';

// Very Easy

  // class App extends React.Component {
  //   render(){
  //   return (
  //     <div className="App">
  //      <p>Jynel</p>
  //      <p>777</p>
  //      <p>10-15-1999</p>
  //      <p>Software Engineer</p>
  //     </div>
  //   );
  // }

  

// Easy

  // class App extends React.Component {
  //   constructor(props){
  
  //   super(props);
  //   this.state = {
  //   person: {}
  //    };
 //    }
  //   render(){
  //   return (
  //     <div className="App">
  //      <p>Jynel</p>
  //      <p>777</p>
  //      <p>10-15-1999</p>
  //      <p>Software Engineer</p>
  //     </div>
  //   );
  // }

// Medium + Hard

 class App extends React.Component {
   constructor(props){
  
   super(props);
   this.state = {
   people: [
    {
    name: 'Jynel', 
    num: '777',
    dob: '10-15-1999',
    job: 'Software Engineer'
   },
   {
    name: 'Julian', 
    num: '123',
    dob: '09-16-1996',
    job: 'Data analyst'
   },
   {
    name: 'Jake', 
    num: '278',
    dob: '04-18-1978',
    job: 'Mailman'
   },
   {
    name: 'James', 
    num: '354',
    dob: '10-22-1995',
    job: 'Intern'
   },
   {
    name: 'Jaden', 
    num: '956',
    dob: '10-15-1999',
    job: 'CEO'
   },
  ]
    };
   }
   render() {
    const {people} = this.state
    return (
     <>
     {people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
     </>
   );
  }
 }




export default App;