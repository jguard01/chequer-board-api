import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { PostEntity } from '../post.entity';

export class PostListDto extends AbstractDto {
    @ApiPropertyOptional()
    @IsString()
    postId: number;

    @ApiPropertyOptional()
    @IsString()
    title: string;

    @ApiPropertyOptional()
    @IsString()
    createdBy: string;

    @ApiPropertyOptional()
    views: number;

    constructor(post: PostEntity) {
        super(post);
        this.postId = post.postId;
        this.title = post.title;
        this.createdBy = post.createdBy;
        this.views = post.views;
        this.createdAt = post.createdAt;
    }
}
