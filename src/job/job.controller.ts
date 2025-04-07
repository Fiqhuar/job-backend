// src/job/job.controller.ts
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.entity';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  // POST /jobs – create a new job
  @Post()
  async create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobService.create(jobData);
  }

  // GET /jobs – retrieve all jobs
  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  // GET /jobs/:id – retrieve a job by id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job | null> {
    return this.jobService.findOne(Number(id));
  }

    // DELETE /job/:id – delete a job by id
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      await this.jobService.remove(Number(id));
    }
}
