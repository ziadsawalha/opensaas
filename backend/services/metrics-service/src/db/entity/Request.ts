import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity({ name: 'requests' })
@ObjectType()
export class Request extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => ID)
  @Column('varchar', { length: 256 })
  tenantId!: string;

  @Field(() => String)
  @Column('text', { nullable: false })
  url!: string;

  @Field(() => Number)
  @Column('smallint', { nullable: false })
  statusCode!: number;

  @Field(() => String)
  @Column('text', { nullable: false })
  userAgent!: string;

  @Field(() => String)
  @Column('varchar', { length: 32 })
  ip!: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
