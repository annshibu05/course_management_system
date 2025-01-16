export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty';
  profilePicture?: string;
  usn?: string;
  phoneNumber?: string;
  completedCourses?: number;
}

export interface Course {
  id: string;
  name: string;
  platform: string;
  duration: string;
  link: string;
  fee: number;
  status: 'in_progress' | 'completed';
  certificateLink?: string;
  certificateFile?: string;
}