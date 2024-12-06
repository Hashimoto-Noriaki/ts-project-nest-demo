import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateArticleInput {
  @IsNotEmpty()
  @IsString()
  title: string; // 必須

  @IsNotEmpty()
  @IsUrl()
  url: string; // 必須でURL形式

  @IsOptional()
  @IsString()
  description?: string; // オプション

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // 配列内の要素が文字列であることを保証
  tags?: string[]; // オプションの文字列配列
}
