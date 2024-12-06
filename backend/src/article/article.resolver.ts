import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './models/article.model';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  // createArticle Mutation を定義
  @Mutation(() => Article)
  createArticle(
    @Args('title') title: string,
    @Args('url') url: string,
    @Args('description', { nullable: true }) description?: string,
    @Args('tags', { type: () => [String], nullable: true }) tags?: string[],
  ): Article {
    return this.articleService.createArticle(title, url, description, tags);
  }

  // getArticles Query を定義（記事一覧取得）
  @Query(() => [Article])
  getArticles(): Article[] {
    return this.articleService.getArticles();
  }
}
