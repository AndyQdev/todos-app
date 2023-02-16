import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const ElmenentIDs = {
    todoList : 'todo-list'
}

/**
 * 
 * @param {String} elementid 
 */
export const App =(elementid) =>{
    
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        console.log(ElmenentIDs.todoList)
        renderTodos( ElmenentIDs.todoList, todos )
        
    };

    //cuando la funcion App() se llama
    (()=>{
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementid).append(app);   
    displayTodos();
    })();
 
};


