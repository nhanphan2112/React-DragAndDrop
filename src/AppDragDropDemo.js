import React, { Component } from "react";
import "./App.css";

class AppDragDropDemo extends Component {
	state = {
		tasks: [
			{ name: "Angular", category: "wip", bgcolor: "yellow" },
			{ name: "React", category: "wip", bgcolor: "pink" },
			{ name: "Vue", category: "complete", bgcolor: "skyblue" },
		],
	};

	render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach((t) =>{
        tasks[t.category].push(
          <div key={t.name}
               draggable
               className="draggable"
               style={{backgroundColor: t.bgcolor}}
          >
            {t.name}
          </div>
        );
    });


		return (
    <div className="container-drag">
      <h2 className="header">Drag and Drop Demo</h2>

      <div className="wip">
        <span className="task-header">WIP</span>
        {tasks.wip}
      </div>

      <div className="droppable">
        <span className="task-header">Complete</span>
        {tasks.complete}
      </div>
    </div>
    );
	}
}

export default AppDragDropDemo;
