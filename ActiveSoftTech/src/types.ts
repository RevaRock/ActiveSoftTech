import React from 'react';

export type Page = 'home' | 'about' | 'courses' | 'contact';

export interface Course {
  title: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  description: string;
}
