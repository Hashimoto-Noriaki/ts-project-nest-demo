import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
  //TSのフィールドをGraphQLのスキーマのフィールドに変換
  @Field(() => Int) //GraphQLの場合、先頭が大文字
  id: number;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  //Userを作成後
  //   @Field(() => User)
  //   author: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt?: Date | null;
}
