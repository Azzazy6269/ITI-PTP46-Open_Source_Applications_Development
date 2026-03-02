import { IsString, IsUrl, IsOptional, IsArray } from 'class-validator';

export class UpdateBookmarkDto {
  @IsOptional()
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}