export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  availability: string;
  image: string;
  bio: string;
  education: string;
  languages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string; // Used to map to Lucide icons
}

export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string;
  branches: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  serviceReceived: string;
  rating: number;
  review: string;
  city: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface KenyaCity {
  name: string;
  county: string;
  branchName: string;
  address: string;
  phone: string;
  email: string;
  isMainClinic: boolean;
}
