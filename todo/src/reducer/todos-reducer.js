export default function todosReducer(todos, action){
  switch (action.type) {
    case 'add':{
      const {todo} = action;
      return [...todos, todo];
    }
    case 'delete':{
      const {deleteKey} = action;
      return todos.filter((todo)=> todo.id !== deleteKey);
    }
    case 'update': {
      const {updateKey, updateTodo} = action;
      return todos.map((t)=> t.id === updateKey? updateTodo:t);
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
