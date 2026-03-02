import { Injectable } from '@nestjs/common';
import {BookmarkRepository} from '../data/bookmark.data';

@Injectable()
export class BookmarkService {
  constructor(private readonly bookmarkRepository:BookmarkRepository) {}

  async getAll() {
    return this.bookmarkRepository.getAll()
  }

  async getById(id: string) {
    try{
        return this.bookmarkRepository.getById(id);
    }catch(error){
        
    }
    
  }

  async createBookmark(data:any){
    try{
        return this.bookmarkRepository.createBookmark(data);
    }catch(error){

    }
  }

  async updateBookmark(id: string, data: any) {
    try{
        return this.bookmarkRepository.updateBookmark(id,data);
    }catch(error){

    }
  }

  async deleteBookmark(id: string) {
    try{
        return this.bookmarkRepository.deleteBookmark(id);
    }catch(error){

    }
  }
}