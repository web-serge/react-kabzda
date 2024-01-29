import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {Title} from './components/Title';
import {Rating} from './components/Rating';

function App() {

    return (
        <div className="App">
            <Title title={'Learn react'} />
            <Rating num={1}/>
            <Rating num={2}/>
            <Rating num={3}/>
            <Rating num={4}/>
            <Rating num={5}/>
            <Accordion title={'Accordion'} collapsed={false}/>
            <Accordion title={'Accordion 2'} collapsed={true}/>
        </div>
    );
}

export default App;