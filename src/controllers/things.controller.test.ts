import { Response, Request, NextFunction } from 'express';

import { ThingsFileRepo } from '../repository/things.file.repo';
import { ThingsController } from './things.controller';

describe('Given ThingsController', () => {
  const repo: ThingsFileRepo = {
    create: jest.fn(),
    query: jest.fn(),
    queryId: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };

  const req = {
    body: {},
    params: { id: '' },
  } as unknown as Request;
  const resp = {
    json: jest.fn(),
  } as unknown as Response;
  const next = jest.fn();

  const controller = new ThingsController(repo);

  describe('getAll', () => {
    test('Then it should ... if there ara NOT errors', async () => {
      await controller.getAll(req, resp, next);
      expect(repo.query).toHaveBeenCalled();
      expect(resp.json).toHaveBeenCalled();
    });

    test('Then it should ... if there are errors', async () => {
      (repo.query as jest.Mock).mockRejectedValue(new Error());
      await controller.getAll(req, resp, next);
      expect(repo.query).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
