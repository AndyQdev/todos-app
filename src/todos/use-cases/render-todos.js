import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Array} todos 
 */
export const renderTodos = ( elementId, todos=[] )=> {
    if (!element)
        element = document.querySelector(elementId);
    
    if (!element) throw new Error(`Element ${elementId} not faund`)

    element.innerHtml = '';
    if (todos.length<=5)
        todos.forEach(todo=>{
            element.append(createTodoHTML(todo));
        })
    else element.append(createTodoHTML(todos[todos.length-1]));
    
};

export const renderTodos2 = (elementId, todos) => {    
    //if (!element)
        element = document.querySelector(`#${elementId}`);
        console.log(element);
    if (!element) throw new Error(`Element ${elementId} not faund`)
    
};