// job/job.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column({ name: 'job_type' })
  jobType: string;

  @Column({ name: 'min_salary' })
  minSalary: number;

  @Column({ name: 'max_salary' })
  maxSalary: number;

  @Column({ name: 'application_deadline', type: 'date', nullable: true })
  applicationDeadline: Date;

  @Column()
  description: string;
}
