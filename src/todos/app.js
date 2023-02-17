import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const ElmenentIDs = {
    todoList : '.todo-list',
    NewTodoInput: '#new-todo-input'
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
 
    //Referencias Html
    const newDescriptionInput = document.querySelector( ElmenentIDs.NewTodoInput ),
          todoListUL= document.querySelector( ElmenentIDs.todoList );

    //listeners
    newDescriptionInput.addEventListener('keyup', (event) =>{
        if (event.keyCode !== 13) return; //cualquier tecla que se precione saldra, solo si es 13 continuara
        
        if (event.target.value.trim().length === 0) return; //trim elimina los espacios iniciales y finales

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    })

    todoListUL.addEventListener('click', (event)=>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
        
    }) 

    todoListUL.addEventListener('click', (event)=>{
       
        const IsdestroyElement = event.target.classname ==='destroy';
        const element = event.target.closest('[data-id]');
       if (!element || !IsdestroyElement) return;
       
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
        
    }) 
};


