import {Get, Post, Patch, Delete, Controller, Body, Param } from '@nestjs/common';
import { BookmarkService } from '../services/bookmark.service';
import { CreateBookmarkDto } from '../dto/CreateBookmark'; 
import { UpdateBookmarkDto } from '../dto/UpdateBookmark';

@Controller("bookmarks")
export class bookmarkController {
    constructor(private readonly bookmarkService: BookmarkService) {}
    @Get()
    async getAllBookmarks() {
        return await this.bookmarkService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.bookmarkService.getById(id)
    }

    @Post()
    async create(@Body() body : CreateBookmarkDto) {
        return await this.bookmarkService.createBookmark(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body:UpdateBookmarkDto) {
        return await this.bookmarkService.updateBookmark(id, body);
    }


    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.bookmarkService.deleteBookmark(id);
    }

}