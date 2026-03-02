import { IsString, IsUrl, IsOptional, IsArray } from 'class-validator';

export class CreateBookmarkDto {
  @IsUrl()
  url: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}