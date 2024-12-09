import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './models/article.model';
import { CreateArticleInput } from './dto/CreateArticleInput';
import { UpdateArticleInput } from './dto/UpdateArticleInput';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  // getArticles Query を定義（記事一覧取得）
  @Query(() => [Article], { nullable: 'items' })
  async getArticles(): Promise<Article[]> {
    // 非同期メソッドに変更しPromise型を使用
    return this.articleService.getArticles();
  }

  // createArticle Mutation を定義
  @Mutation(() => Article)
  async createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput, // 入力データ
  ): Promise<Article> {
    // 非同期メソッドに変更しPromise型を使用
    return this.articleService.createArticle(createArticleInput); // CreateArticleInput型のオブジェクトを渡す
  }

  @Mutation(() => Article)
  async updateArticle(
    @Args('id', { type: () => Int }) id: number, // id を個別に受け取る
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput, // 残りのデータを受け取る
  ): Promise<Article> {
    return this.articleService.updateArticle(id, updateArticleInput); // id と updateArticleInput をサービスに渡す
  }
}
