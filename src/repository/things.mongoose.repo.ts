import { Thing } from '../entities/thing.js';
import { Repo } from './repo.interface.js';
import { ThingModel } from './things.mongoose.models.js';

export class ThingsMongooseRepo implements Repo<Thing> {
  async query(): Promise<Thing[]> {
    const data = await ThingModel.find();
    return data;
  }

  async queryId(id: string): Promise<Thing> {
    const data = await ThingModel.findById(id);
    if (!data) throw new Error('Id not found');
    return data;
  }

  async create(info: Partial<Thing>): Promise<Thing> {
    const data = await ThingModel.create(info);
    return data;
  }

  async update(info: Partial<Thing>): Promise<Thing> {
    const data = await ThingModel.findByIdAndUpdate(info.id, info);
    if (!data) throw new Error('Id not found');
    return data;
  }

  async destroy(_id: string): Promise<void> {}
}
