import { Injectable } from '@nestjs/common';
import { UserModel } from './models/user.model';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserInput } from './dto/CreateUserInput';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserModel> {
    const { name, email, password } = createUserInput;
    const hashedPassword = await bcrypt.hash(password, 10); // パスワードをハッシュ化

    // ハッシュ化されたパスワードを使って新しいユーザーをデータベースに作成
    const createdUser = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // 不要なフィールドを除き、UserModel に合わせてデータを返す
    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };
  }

  async getUser(email: string): Promise<UserModel> {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
