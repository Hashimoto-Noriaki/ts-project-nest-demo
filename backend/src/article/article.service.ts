import { Injectable } from '@nestjs/common';
import { Article } from './models/article.model';

@Injectable()
export class ArticleService {
  articles: Article[] = [];

  // 新しい記事を作成するメソッド
  createArticle(
    title: string,
    url: string,
    description?: string,
    tags?: string[],
  ): Article {
    const newArticle = new Article();

    // 新しい記事のIDを自動的に付与
    newArticle.id = this.articles.length + 1;
    newArticle.title = title;
    newArticle.url = url;
    newArticle.description = description || '';
    newArticle.tags = tags || [];
    newArticle.createdAt = new Date();
    newArticle.updatedAt = new Date();
    newArticle.deletedAt = null;

    // 作成した記事をarticles配列に追加
    this.articles.push(newArticle);

    return newArticle;
  }

  // 記事一覧を取得するメソッド
  getArticles(): Article[] {
    return this.articles;
  }
}
