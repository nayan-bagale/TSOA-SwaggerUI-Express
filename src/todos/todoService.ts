import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
    public get(todoId:string): Todo {
        return {
            id: todoId,
            title: "Sample Title",
            description: "Sample Description",
            done: false
        }
    }
    public create(todoCreationParams: TodoCreationParams): Todo {
        return {
            id: '1',
            title: "Sample Title",
            description: "Sample Description",
            done: false
        }
    }
}