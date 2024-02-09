import create from "zustand";

const useZustand = create((set) => ({
  // COUNTER APP
  count: 1,
  increment: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, count: todo.count + 1 } : todo
      ),
    })),
  decrement: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id && todo.count > 1
          ? { ...todo, count: todo.count - 1 }
          : todo
      ),
    })),
  // TODO APP
  todo: "",
  todos: [],
  setTodo: (newTodo) => set({ todo: newTodo }),
  addTodo: (product) =>
    set((state) => {
      // Check if the product with the same ID is already in the todos list
      if (state.todos.some((todo) => todo.id === product.id)) {
        console.log("Product already added to the cart:", product);
        return state; // Return the unchanged state
      }

      // If the product is not already in the cart, add it
      console.log("Product added to cart:", product);
      const newTodo = {
        id: product.id,
        text: product.title,
        price: product.price,
        img: product.images[0],
        count: 1,
      };
      newTodo.totalPrice = newTodo.price * newTodo.count;
      return {
        todos: [...state.todos, newTodo],
      };
    }),

  // DEL BUTTON

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useZustand;
