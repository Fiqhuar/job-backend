import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 import { JobModule } from './job/job.module';
import { Job } from './job/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      host:'db.cshngruuazdnipljntky.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'jobdb',
      entities: [Job],  // Register only the entity
      synchronize: false,  // <-- This is important (don't let NestJS alter the schema)
    }),
    JobModule,
  ],
})
export class AppModule {}
