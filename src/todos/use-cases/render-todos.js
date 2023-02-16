import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Array} todos 
 */
export const renderTodos = ( elementId, todos )=> {
    if (!element)
        element = document.querySelector('.todo-list');
    
    if (!element) throw new Error(`Element ${elementId} not faund`)

    element.innerHtml = '';
    
    todos.forEach(todo=>{
        element.append(createTodoHTML(todo));
    })
    
};