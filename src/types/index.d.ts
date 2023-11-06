import type { ChangeEvent, FormEvent } from 'react';

export type Theme = {
  primary_a: string;
  primary_b: string;
  primary_c: string;
  foreground: string;
  background: string;
  white: string;
  black: string;
  error: string;
  font: string;
};

export type ColorScheme = {
  mode: 'auto' | 'manual';
  scheme: 'dark' | 'light';
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type Modal = {
  title: string;
  status: boolean;
  message: string;
  closeOnDelay?: boolean;
  actionButtonMessage?: string;
  handleFunction?: (data?: unknown) => void | Promise<void>;
};

export type Preferences = {
  author: { name: string; picture: string };
  theme: ColorScheme;
};

export type Project = {
  id: string;
  name: string;
  deleted: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Task = {
  id: string;
  boardId: string;
  title: string;
  description: string;
  content: string;
  completed: string;
  color: string;
  author: { name: string; picture: string };
  priority: 'none' | 'low' | 'medium' | 'high';
  tags: Array<{ id: string; content: string }>;
  createdAt: Date;
  updatedAt: Date;
};

export type Query = {
  search: string;
  sort: string;
  status: string;
  priority: string;
};

export type Option = { value: string; label: string };

export type Settings = {
  theme: { scheme: 'light' | 'dark'; automatic: boolean };
};

export type InputEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type SubmitEvent = FormEvent<HTMLFormElement>;
