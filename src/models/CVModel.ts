export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface CVRecord {
  name: string;
  title: string;
  greeting: string;
  imageUrl: string;
  text1: string;
  text2: string;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}
