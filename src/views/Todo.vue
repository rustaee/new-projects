<template>
  <div class="todo">
    <h1>todos</h1>
    <form @submit.prevent="addTodo()">
      <input
        type="text"
        placeholder="Enter your Todo"
        autocomplete="off"
        v-model="todoInput"
      />

      <ul class="todos">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          @click="toggleCompleted(index)"
          @contextmenu.prevent="deleteTask(index)"
        >
          <span :class="{ completed: todo.completed }">
            {{ todo.task }}
          </span>
        </li>
      </ul>
    </form>
    <small
      >Left click to toggle completed. <br />
      Right click to delete todo</small
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoInput: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.todoInput.trim()) {
        let newTodo = {
          task: this.todoInput,
          completed: false
        };
        this.todos.push(newTodo);
        this.updateLocalStorage();
        this.todoInput = "";
      }
    },
    toggleCompleted(idx) {
      this.todos[idx].completed = !this.todos[idx].completed;
      this.updateLocalStorage();
    },
    deleteTask(idx) {
      this.todos.splice(idx, 1);
      this.updateLocalStorage();
    },
    readTodos() {
      if (JSON.parse(localStorage.getItem("todos")))
        this.todos = JSON.parse(localStorage.getItem("todos"));
    },
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  mounted() {
    this.readTodos();
  }
};
</script>
<style lang="scss" scoped>
.todo {
  width: 100vw;
  min-height: 100vh;
  font-family: $font-poppins;
  @extend %flex-column;
  background: #f1faee;

  h1 {
    color: #e63946;
    font-size: 10rem;
    opacity: 0.5;
  }

  form {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 400px;

    input {
      border: none;
      color: #1d3557;
      font-size: 2rem;
      padding: 1rem 2rem;
      display: block;
      width: 100%;

      &::placeholder {
        color: #94d2d4;
      }

      &:focus {
        outline: auto;
        outline-color: rgba(230, 57, 70, 0.4);
      }
    }
  }

  .todos {
    background-color: #fff;

    li {
      border-top: 1px solid #f1faee;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;

      .completed {
        color: #a8dadc;
        text-decoration: line-through;
      }
    }
  }

  small {
    color: #457b9d;
    margin-top: 3rem;
  }
}
</style>
