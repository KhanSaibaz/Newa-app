import './App.css';
import News from './News';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEW_API
  state={
    progress:0
  }
  
  setprogress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar/>  
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // shadow={true}
        transitionTime={600}
      />
        <Routes>
          <Route  exact path='/'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="general"  pagesize={9}   category="general"/>}></Route>
          <Route  exact path='/business'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="business" pagesize={9}   category="business"/>}></Route>
          <Route  exact path='/entertainment'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="entertainment"  pagesize={9}   category="entertainment"/>}></Route>
          <Route  exact path='/general'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="general" pagesize={9}   category="general"/>}></Route>
          <Route  exact path='/health'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="health" pagesize={9}   category="health"/>}></Route>
          <Route  exact path='/science' element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="science"  pagesize={9}   category="science"/>}></Route>
          <Route  exact path='/sports'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="sports" pagesize={9}   category="sports"/>}></Route>
          <Route  exact path='/technology'  element={<News  setprogress={this.setprogress} apiKey={this.apiKey} key="technology" pagesize={9}   category="technology"/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
