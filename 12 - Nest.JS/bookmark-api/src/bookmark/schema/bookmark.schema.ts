import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Bookmark extends Document {
  @Prop
  ({ required: true }) url: string;

  @Prop
  ({ required: true }) title: string;

  @Prop()
  description?: string;

  @Prop
  ([String]) tags?: string[];

  @Prop
  ({ default: Date.now }) createdAt: Date;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);