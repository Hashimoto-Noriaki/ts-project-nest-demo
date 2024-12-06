import { Injectable } from '@nestjs/common';
import { Article as ArticleModel } from './models/article.model';
import { Article } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateArticleInput } from './dto/CreateArticleInput';

@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}

  // 記事一覧を取得するメソッド
  async getArticles(): Promise<ArticleModel[]> {
    const articles = await this.prismaService.article.findMany();
    return articles.map((article) => this.mapToArticleModel(article));
  }

  async createArticle(
    createArticleInput: CreateArticleInput,
  ): Promise<ArticleModel> {
    const { title, url, description, tags } = createArticleInput;
    const createdArticle = await this.prismaService.article.create({
      data: {
        title,
        url,
        description,
        tags,
      },
    });
    return this.mapToArticleModel(createdArticle);
  }

  // Prisma の Article を GraphQL の ArticleModel に変換するヘルパーメソッド
  private mapToArticleModel(article: Article): ArticleModel {
    return {
      id: article.id,
      title: article.title,
      url: article.url,
      description: article.description,
      tags: article.tags,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      deletedAt: article.deletedAt || null,
    };
  }
}
