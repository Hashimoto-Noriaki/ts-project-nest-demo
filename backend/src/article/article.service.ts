import { Injectable } from '@nestjs/common';
import { Article as ArticleModel } from './models/article.model';
import { Article } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateArticleInput } from './dto/CreateArticleInput';
import { UpdateArticleInput } from './dto/UpdateArticleInput';

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

  // 記事を更新するメソッド
  async updateArticle(
    id: number, // Int型として受け取る
    updateArticleInput: UpdateArticleInput,
  ): Promise<ArticleModel> {
    const { title, url, description, tags } = updateArticleInput;
    const updatedArticle = await this.prismaService.article.update({
      where: { id }, // idを整数で使用
      data: {
        title,
        url,
        description,
        tags,
      },
    });
    return this.mapToArticleModel(updatedArticle);
  }

  // deleteArticle()メソッド
  async deleteArticle(id: number): Promise<ArticleModel> {
    // 指定された ID の記事を削除し、削除された記事情報を取得
    const deletedArticle = await this.prismaService.article.delete({
      where: { id },
    });

    // 削除したタスク情報を ArticlekModel 型で返す
    return this.mapToArticleModel(deletedArticle);
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
