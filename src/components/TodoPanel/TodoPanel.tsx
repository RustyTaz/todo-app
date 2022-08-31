import React from "react";
import { Button } from "../Button/Button";
import styles from "./TodoPanel.module.css";

const DEFAULT_TODO = {
	name: "",
	description: "",
};


interface TodoPanelProps {
    addTodo: ({ name, description }: Omit<Todo, 'id' |  'checked'>) => void;
}


export const TodoPanel: React.FC<TodoPanelProps> = ({addTodo}) => {
	const [todo, setTodo] = React.useState(DEFAULT_TODO);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setTodo({ ...todo, [name]: value });
	};

	const onClick = () =>{
		addTodo({name:todo.name, description:todo.description})
		setTodo(DEFAULT_TODO)
	}

	return (
		<div className={styles.todo_panel_container}>
			<div className={styles.fields_container}>
				<div className={styles.field_container}>
					<label htmlFor="name">
						<div>name</div>
						<input
							type="text"
							id="name"
							value={todo.name}
							name="name"
							onChange={onChange}
						/>
					</label>
				</div>
				<div className={styles.field_container}>
					<label htmlFor="description">
						<div>description</div>
						<input
							type="text"
							id="description"
							value={todo.description}
							name="description"
							onChange={onChange}
						/>
					</label>
				</div>
                </div>
				<div className={styles.button_container}>
					<Button color={"blue"} onClick={onClick }>ADD</Button>
				</div>
			
		</div>
	);
};