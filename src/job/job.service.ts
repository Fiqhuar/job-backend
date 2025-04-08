import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  findAll(limit = 10, offset = 0): Promise<Job[]> {
    return this.jobRepository.find({
      skip: offset,
      take: limit,
      select: ['id', 'title', 'company', 'location', 'job_type', 'min_salary', 'max_salary', 'application_deadline', 'description'], // only what’s needed
    });
  }

  findOne(id: number): Promise<Job | null> {
    return this.jobRepository.findOneBy({ id });
  }

  create(job: Partial<Job>): Promise<Job> {
    const newJob = this.jobRepository.create(job);
    return this.jobRepository.save(newJob);
  }

  async remove(id: number): Promise<void> {
    await this.jobRepository.delete(id);
  }
}
