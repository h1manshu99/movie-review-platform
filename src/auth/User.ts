const { Entity, Column, ObjectIdColumn } = require("typeorm");

@Entity()
export class User {
  @ObjectIdColumn()
  id;

  @Column()
  username;

  @Column()
  email;

  @Column()
  password;
}
