import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './models/article.model';
import { CreateArticleInput } from './dto/CreateArticleInput';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  // getArticles Query を定義（記事一覧取得）
  @Query(() => [Article], { nullable: 'items' })
  getArticles(): Article[] {
    return this.articleService.getArticles();
  }

  // createArticle Mutation を定義
  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
  ): Article {
    const { title, url, description, tags } = createArticleInput; // 入力データを分解
    return this.articleService.createArticle(title, url, description, tags); // 各引数に渡す
  }
}
