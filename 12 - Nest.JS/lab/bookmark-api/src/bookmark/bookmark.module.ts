import { Module } from '@nestjs/common';
import { bookmarkController } from './controllers/bookmark.controller';
import { Bookmark, BookmarkSchema } from './schema/bookmark.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkRepository } from './data/bookmark.data';
import { BookmarkService } from './services/bookmark.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bookmark.name, schema: BookmarkSchema }])
  ],
  controllers: [bookmarkController],
  providers: [BookmarkRepository,BookmarkService],
  exports: [BookmarkService],
})
export class bookmarkModule {}
