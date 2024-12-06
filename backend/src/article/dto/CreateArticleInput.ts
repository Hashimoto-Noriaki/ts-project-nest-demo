import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsOptional,
  IsArray,
} from 'class-validator';

@InputType()
export class CreateArticleInput {
  @Field() // GraphQLで使用可能なフィールドとして定義
  @IsNotEmpty()
  @IsString()
  title: string; // 必須

  @Field()
  @IsNotEmpty()
  @IsUrl()
  url: string; // 必須でURL形式

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string; // オプション

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // 配列内の要素が文字列であることを保証
  tags?: string[]; // オプションの文字列配列
}
