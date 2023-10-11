import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; // Coluna primária gerada automaticamente

  @Column()
  username: string;

  @Column()
  password: string;
}
