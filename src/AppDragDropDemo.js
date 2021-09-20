import React, { Component } from "react";
import "./App.css";

class AppDragDropDemo extends Component {
	state = {
		task: [
			{ name: "Angular", category: "wip", bgcolor: "yellow" },
			{ name: "React", category: "wip", bgcolor: "pink" },
			{ name: "Vue", category: "complete", bgcolor: "skyblue" },
		],
	};

	render() {
		return <div className="container-drag">Drag and Drop Demo</div>;
	}
}

export default AppDragDropDemo;
