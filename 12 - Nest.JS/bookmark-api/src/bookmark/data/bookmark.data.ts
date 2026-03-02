import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from '../schema/bookmark.schema'; 

@Injectable()
export class BookmarkRepository {
  constructor(@InjectModel(Bookmark.name) private readonly bookmarkModel: Model<Bookmark>) {}

  async getAll() {
    return await this.bookmarkModel.find().exec();
  }

  async getById(id: string) {
    const bookmark = await this.bookmarkModel.findById(id).exec();
    if (!bookmark) throw new Error(`Bookmark not found`);
    return bookmark;
  }

  async createBookmark(data:any){
    const newBookmark = new this.bookmarkModel(data);
    return await newBookmark.save();
  }

  async updateBookmark(id: string, data: any) {
    const updated = await this.bookmarkModel.findByIdAndUpdate(id, data, { new: true }).exec();
    
    if (!updated) throw new Error(`Bookmark not found`);
    return updated;
  }

  async deleteBookmark(id: string) {
    const result = await this.bookmarkModel.findByIdAndDelete(id).exec();
    if (!result) throw new Error(`Bookmark not found`);
    return { message: 'Deleted successfully' };
  }
}