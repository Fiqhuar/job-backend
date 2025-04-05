import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 import { JobModule } from './job/job.module';
import { Job } from './job/job.entity';

@Module({
  imports:
  // [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     // host: 'localhost',
  //     host:'db.cshngruuazdnipljntky.supabase.co',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'root',
  //     database: 'jobdb',
  //     entities: [Job],  // Register only the entity
  //     synchronize: false,  // <-- This is important (don't let NestJS alter the schema)
  //   }),
  //   JobModule,
  // ],
  [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST || 'localhost',
    //   port: parseInt(process.env.DB_PORT || '5432', 10),
    //   username: process.env.DB_USER || 'postgres',
    //   password: process.env.DB_PASS || 'root',
    //   database: process.env.DB_NAME || 'jobdb',
    //   entities: [Job],
    //   synchronize: false,
    //   ssl: true,
    // }),


    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST || 'localhost',
    //   port: parseInt(process.env.DB_PORT || '5432', 10),
    //   username: process.env.DB_USER || 'postgres',
    //   password: process.env.DB_PASS || 'root',
    //   database: process.env.DB_NAME || 'jobdb',
    //   entities: [Job],
    //   synchronize: false,
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // }),
  
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT|| '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Job],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    
    


    JobModule,
  ],
})
export class AppModule {}
