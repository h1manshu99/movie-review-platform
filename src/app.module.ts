import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/authModule';
import { MoviesModule } from './movies/movie.module';
import { ReviewsModule } from './reviews/review.module';
import { User } from './auth/User';
import { Movie } from './movies/Movie';
import { Review } from './reviews/Review';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/movie-review-platform',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [User, Movie, Review],
      synchronize: true,
    }),
    AuthModule,
    MoviesModule,
    ReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
