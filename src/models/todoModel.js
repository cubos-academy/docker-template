class Todo {
    constructor(id, title, description, completed, created_at, updated_at) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  
  module.exports = Todo;
  