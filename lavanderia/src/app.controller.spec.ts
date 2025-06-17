import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET / debe devolver el HTML', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/);
  });

  afterAll(async () => {
    await app.close();
  });
});