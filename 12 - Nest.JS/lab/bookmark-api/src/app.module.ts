import { Module } from '@nestjs/common';
import {bookmarkModule } from './bookmark/bookmark.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bookmark-api'),
    bookmarkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
