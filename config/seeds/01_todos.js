exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todo').del()
      .then(function () {
        // Inserts seed entries
        return knex('todo').insert([
          {
            id: 1,
            title: 'Fazer compras',
            description: '',
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            id: 2,
            title: 'Estudar JavaScript',
            description: '',
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            id: 3,
            title: 'Ir à academia',
            description: '',
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            updated_at: '2023-07-10T05:02:45.695Z'
          }
        ]);
      });
  };
  