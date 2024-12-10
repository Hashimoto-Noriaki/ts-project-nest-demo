import { Resolver, Mutation, Args, Query, Int, Context } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article as ArticleModel } from './models/article.model';
import { CreateArticleInput } from './dto/CreateArticleInput';
import { UpdateArticleInput } from './dto/UpdateArticleInput';

@Resolver(() => ArticleModel)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  // getArticles Query を定義（記事一覧取得）
  @Query(() => [ArticleModel], { nullable: 'items' })
  async getArticles(
    @Context('user') user: { id: number },
  ): Promise<ArticleModel[]> {
    const userId = user.id; // Context から userId を取得
    return this.articleService.getArticles(userId);
  }

  // createArticle Mutation を定義
  @Mutation(() => ArticleModel)
  async createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput, // 入力データ
    @Context('user') user: { id: number }, // Context から userId を取得
  ): Promise<ArticleModel> {
    const userId = user.id;
    return this.articleService.createArticle(createArticleInput, userId);
  }

  @Mutation(() => ArticleModel)
  async updateArticle(
    @Args('id', { type: () => Int }) id: number, // id を個別に受け取る
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput, // 残りのデータを受け取る
  ): Promise<ArticleModel> {
    return this.articleService.updateArticle(id, updateArticleInput); // id と updateArticleInput をサービスに渡す
  }

  @Mutation(() => ArticleModel)
  async deleteArticle(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ArticleModel> {
    return await this.articleService.deleteArticle(id);
  }
}
