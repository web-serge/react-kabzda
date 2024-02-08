import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {Title} from './components/Title';
import {Rating} from './components/Rating';
import {OnOff} from './components/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion';

function App() {

    return (
        <div className="App">
            <Title title={'Learn react'} />
            <Rating num={1}/>
            <Accordion title={'Accordion'} shrink={true}/>
            <Accordion title={'Accordion 2'} shrink={false}/>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion  title={'Uncontrolled Accordion'}/>
        </div>
    );
}

export default App;