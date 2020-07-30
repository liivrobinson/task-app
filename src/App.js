import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.tasks = [
      {
        id: 1,
        content: 'Clean room'
      },
      {
        id: 2,
        content: 'Do washing'
      },
      {
        id: 3,
        content: 'Make cake'
      },
    ]
  }

  render(){
    return (
      <div className="wrap">
        <header>
            My to do list
        </header>
        <main>
            <div className="main-container">

                {
                  this.tasks.map((task)=>{

                    return (
                      <div className="task-group">
                          <input type="checkbox" id="task" name="task"/>
                          <label for="task">{task.content}</label>
                          <button><i className="fas fa-times"></i></button>
                      </div>
                    )
                  })
                }
       
                <div className="new-task-group">
                    <form>
                        <button type="submit"><i className="fas fa-plus"></i></button>
                        <div className="form-group">
                            <input type="text" placeholder="Add new task"/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
    )
  }
}

export default App;
