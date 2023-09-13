const assert = require('assert');
const request = require('supertest');
const express = require('express');
const knex = require('knex');
const config = require('../../config/knexfile');
const db = knex(config.test);

const app = express();
const ApiRouter = require('./');
const routes = new ApiRouter(config.test)

app.use(express.json());
app.use(routes.getRouter());

describe('Todo Routes', function() {
  this.timeout(5000); 

  let server;

  before((done) => {
    server = app.listen(done);
  });
  
  after((done) => {
    server.close(done);
  });
  
  beforeEach(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepStrictEqual(res.body,  
        [
          {
            completed: 0,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 1,
            title: 'Fazer compras',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            completed: 0,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 2,
            title: 'Estudar JavaScript',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            completed: 0,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 3,
            title: 'Ir à academia',
            updated_at: '2023-07-10T05:02:45.695Z'
          }
        ]);
        done();
      });
  });
  
  it('should get a todo by id', (done) => {
    request(app)
      .get('/todos/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepStrictEqual(res.body, {
          completed: 0,
          created_at: '2023-07-10T05:02:45.695Z',
          description: '',
          id: 1,
          title: 'Fazer compras',
          updated_at: '2023-07-10T05:02:45.695Z'
        });  
        done();
      });
  });

  it('should update a todo', (done) => {
    const todoData = {
      title: "Atualizar tarefa",
      description: "Descrição atualizada",
      completed: 0,
      created_at: "2023-07-10T15:02:02.163Z",
      updated_at: "2023-07-10T15:02:02.163Z"
    };
  
    request(app)
      .put('/todos/1')
      .send(todoData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepStrictEqual(res.body, {
          id: 1,
          ...todoData
        });  
        done();
      });
  });
    
  it('should create a new todo', (done) => {
    const todoData = {
      id: 4,
      title: "Implementar os testes de integração!ss",
      description: "",
      completed: 0,
      created_at: "2023-07-10T15:02:02.163Z",
      updated_at: "2023-07-10T15:02:02.163Z"
  };
  
  request(app)
    .post('/todos')
    .send(todoData)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      assert.deepStrictEqual(res.body, todoData);
      done();
    });
  });

  it('should delete a todo', (done) => {
    request(app)
      .del('/todos/4')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepStrictEqual(res.body, {
          id: 1,
          title: 'Fazer compras',
          description: '',
          completed: 0,
          created_at: '2023-07-10T05:02:45.695Z',
          updated_at: '2023-07-10T05:02:45.695Z'
        });  
        done();
      });
  });
});
