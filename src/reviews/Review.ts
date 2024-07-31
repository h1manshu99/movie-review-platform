import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Review {
  @ObjectIdColumn()
  id: string;

  @Column()
  movieId: string;

  @Column()
  userId: string;

  @Column()
  reviewText: string;
}
