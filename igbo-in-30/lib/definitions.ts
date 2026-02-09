import { studyOptions } from '@/lib/data/menu-links-data';

export type Website = {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export type Embedding = {
  name: string;
  embedText: string;
}

export type studyTopic = typeof studyOptions[number];

export type Habit = {
  date: string,
  topic: studyTopic,
  text?: string;
  updatedAt: number;
}

export type HabitMap = Record<string, Habit>;
