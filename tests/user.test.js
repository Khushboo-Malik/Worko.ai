const request = require('supertest');
const app = require('../src/app'); // Ensure your Express app is exported from this file
const User = require('../src/models/user');

describe('User API', () => {
  let server;

  beforeAll(() => {
    server = app.listen(5001);
  });

  afterAll(async () => {
    server.close();
  });

  afterEach(async () => {
    await User.deleteMany();
  });
});

  describe('GET /api/worko/user', () => {
    it('should list users', async () => {
      const res = await request(server).get('/api/worko/user');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('GET /api/worko/user/:userId', () => {
    it('should get user details', async () => {
        const user = new User({
          email: 'test@example.com',
          name: 'Test User',
          age: 25,
          city: 'Test City',
          zipCode: '12345'
        });
        await user.save();
        const res = await request(server).get(`/api/worko/user/${user._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', user._id.toString()); // Convert ObjectId to string
        expect(res.body).toHaveProperty('email', 'test@example.com');
      });
    });
      
  describe('POST /api/worko/user', () => {
    it('should create a new user', async () => {
        const res = await request(server)
          .post('/api/worko/user')
          .send({
            email: 'test@example.com',
            name: 'Test User',
            age: 25,
            city: 'Test City',
            zipCode: '12345'
          });
        expect(res.statusCode).toEqual(201); // Ensure the correct status code
        expect(res.body).toHaveProperty('_id');
        expect(res.body).toHaveProperty('email', 'test@example.com');
      });
    });
      
  describe('PUT /api/worko/user/:userId', () => {
    it('should update user details', async () => {
        const user = new User({
          email: 'test@example.com',
          name: 'Test User',
          age: 25,
          city: 'Test City',
          zipCode: '12345'
        });
        await user.save();
        const res = await request(server)
          .put(`/api/worko/user/${user._id}`)
          .send({
            name: 'Updated User',
            age: 30, // Ensure this is a number in your MongoDB schema
            city: 'Updated City',
          });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Updated User');
        expect(res.body).toHaveProperty('age', 30); // Ensure numeric value
        expect(res.body).toHaveProperty('city', 'Updated City');
      });
      
  describe('PATCH /api/worko/user/:userId', () => {
    it('should partially update user details', async () => {
      const user = new User({
        email: 'test@example.com',
        name: 'Test User',
        age: 25,
        city: 'Test City',
        zipCode: '12345'
      });
      await user.save();
      const res = await request(server)
        .patch(`/api/worko/user/${user._id}`)
        .send({
          city: 'Updated City'
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('city', 'Updated City');
    });
  });

  describe('DELETE /api/worko/user/:userId', () => {
    it('should soft delete the user', async () => {
      const user = new User({
        email: 'test@example.com',
        name: 'Test User',
        age: 25,
        city: 'Test City',
        zipCode: '12345'
      });
      await user.save();
      const res = await request(server).delete(`/api/worko/user/${user._id}`);
      expect(res.statusCode).toEqual(200);
      const deletedUser = await User.findById(user._id);
      expect(deletedUser.isDeleted).toBe(true);
    });
  });
});
