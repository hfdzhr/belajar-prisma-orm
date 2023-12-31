import supertest from 'supertest';
import { web } from '../src/application/web.js';
import { prismaClient } from '../src/application/database.js';

describe('POST /api/users', function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: 'hafid',
      },
    });
  });

  it('should can register new user', async () => {
    const result = supertest(web).post('/api/users').send({
      username: 'hafid',
      password: 'rahasia',
      name: 'Hafid Al Azhar',
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe('hafid');
    expect(result.body.data.name).toBe('Hafid Al Azhar');
    expect(result.body.data.password).toBeUndefined();
  });
});
