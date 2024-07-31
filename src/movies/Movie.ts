import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Movie {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  description: string;
}
