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

export type studyTopic = {
  name: string;
}

export type NavLink = {
  name: string;
  href: string;
  icon: string;
};

export type Habit = {
  date: string,
  topic: studyTopic,
  text?: string;
  updatedAt: number;
}

export type HabitMap = Record<string, Habit>;
