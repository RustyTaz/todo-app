import React from "react";
import logo from "./logo.svg";
import { Header } from "./components/Header/Header";
import { TodoPanel } from "./components/TodoPanel/TodoPanel";
import "./App.css";
import { TodoComment } from "typescript";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoProvider } from "./utils";


function App() {
	return (
		<TodoProvider>
			<div className="app_container">
				<div className="container">
					<Header  />
					<TodoPanel mode="add" />
					<TodoList/>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
