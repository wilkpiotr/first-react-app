import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ShowUSer from './components/ShowUser';
// import Bold  from './components/Bold'
// import Italic  from './components/Italic'
// import LabelInput  from './components/LabelInput'
// import Badge  from './components/Badge'
// import ShowUser  from './components/ShowUser'
// import ShowUserTwo  from './components/ShowUserTwo'
// import Denied  from './components/Denied'
// import Amount  from './components/Amount'
// import Difference  from './components/Difference'
// import Average  from './components/Average'
// import Max  from './components/Max'
// import ShowContent  from './components/ShowContent'
// import ShowContent2  from './components/ShowContent2'
// import Box  from './components/Box'
// import Important  from './components/Important'
// import Repeat  from './components/Repeat'
// import UserTable  from './components/UserTable'
// import Products  from './components/Products'
// import MoviesTable  from './components/MoviesTable'
// import Button  from './components/Button'
// import Collapse  from './components/Collapse'
// import Counter  from './components/Counter'
import EditableLabel  from './components/EditableLabel'
// import ValidInput  from './components/ValidInput'
// import MultiCheckbox  from './components/MultiCheckbox'
// import LimitedTextarea  from './components/LimitedTextarea'
// import OverLimit from './components/OverLimit'
// import List from './components/List'
// import AddList from './components/AddList'

const checkboxes = [
  {name: 'check1',
label: 'label one'},
  {name: 'check2',
label: 'label two'},
  {name: 'check3',
label: 'label three'},
  {name: 'check4',
label: 'label four'},
  {name: 'check5',
label: 'label five'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* <AddList/> */}
        {/* <List elements={["one", "two", "four", "five"]} ordered={false}/> */}
        {/* <OverLimit limit value={3}/> */}
        {/* <ValidInput label="Your name"/> */}
        {/* <MultiCheckbox checks={checkboxes} /> */}
        {/* <LimitedTextarea limit={10} /> */}

        {/* <Collapse title="Avengers" desc="Big fight"/> */}
        {/* <Counter/> */}
  
        <EditableLabel/>
        
        {/* <LabelInput label="opis"> */}
          {/* <Italic>
            <Bold text="hello"/>
          </Italic> */}
        {/* </LabelInput> */}
        
        {/* <Badge label="Message" value={9}/> */}
        {/* <ShowUserTwo name="Tom" lastname="Cruise" gender="man"/> */}
        {/* <Denied denied={false} secret="Tom likes oranges"/> */}
        {/* <Amount value={56.8262}/> */}
        {/* <Difference value={7} substractedValue={7}/> */}
        {/* <Repeat count={5}> */}
          {/* <Average numbers={[1,3,4,5,6,5]}/> */}
        {/* </Repeat> */}
        {/* <Important> */}
          {/* <Box> */}
            {/* <ShowContent2 show={false}><span>Here I am</span></ShowContent2> */}
          {/* </Box> */}
        {/* </Important> */}
        {/* <UserTable elements={[
            {name: 'Tom',lastname: 'Cruise',gender: 'unknow',},
            {name: 'Kim',lastname: 'Basinger',gender: 'woman',},
            {name: 'Alfred',lastname: 'Hitchcock',gender: 'man',},
          ]}/> */}
        {/* <Products products={[
            {name: 'Tom',price: 5},
            {name: 'Kim',price: 7},
            {name: 'Alfred',price: 10},
          ]}/> */}
          {/* <MoviesTable sortBy="productionYear" sortOrder="desc"elements={[
            {title: 'Logan', productionYear: 2017, boxOffice: "18000000"},
            {title: 'Hulk', productionYear: 2018, boxOffice: "25000000"},
            {title: 'Green Book', productionYear: 2018, boxOffice: "25000000"},
            {title: 'Avengers', productionYear: 2018, boxOffice: "25000000"},
            {title: 'Dr. Strange', productionYear: 2016, boxOffice: "9000000"}]}/> */}
            {/* <Button/> */}
      </div>
      

    );
  }
}

export default App;
