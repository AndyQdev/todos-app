import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
    todos : [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter : Filters.All,
};


const getTodos = (filter = Filters.All) =>{
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done); //crea un nuevo array, con la condicion que se le coloque
            case Filters.Pending:
                return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`Option ${ filter } is not valid`)
    }
};

const initStore = () =>{
    console.log(state)
    console.log('InitStore ♥');
};

const loadStore = ()=>{
    throw new Error('Not implement')
};

const addTodo = ( description )=>{
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
};

const toggleTodo = ( todoId )=>{
    state.todos = state.todos.map(todo => {
        if (todo.id ===todoId){
            todo.done = !todo.done; //necesitamos que el estado de done cambie cada que pase por aqui
        };
        return todo;
    }) ; //Recorre el antiguo array y crea un nuevo array con las modificaciones que le hagamos
};

const deleteTodo = ( todoid )=>{
    state.todos = state.todos.filter( todo => todo.id !== todoid )
};

const deleteCompleted = ()=>{
    state.todos = state.todos.filter( todo => todo.done )
};
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All)=>{
    state.filter = newFilter;
};

const getCurrentFilter= ()=>{
    return state.filter;
};

export default {
    addTodo,
    initStore,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter, 
    getCurrentFilter,
    loadStore,
    getTodos
}
