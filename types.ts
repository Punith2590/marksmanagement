
export type Role = 'superadmin' | 'admin' | 'faculty';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  departmentId?: string; // Only for admin and faculty
}

export interface Department {
  id: string;
  name: string;
}

export interface PO {
  id: string;
  description: string;
}

export interface PSO {
  id: string;
  description: string;
}

export interface CO {
  id: string;
  description: string;
  kLevel: string; // e.g., K1, K2, K3
}

export interface Course {
  id: string;
  name: string;
  code: string;
  semester: number;
  cos: CO[];
  assignedFacultyId?: string;
}

export interface ArticulationMatrix {
  [courseId: string]: {
    [coId: string]: {
      [poId: string]: number; // 0 for no mapping, 1, 2, 3 for correlation
    };
  };
}

export interface Student {
  id: string;
  name: string;
  usn: string;
}

export interface AttainmentData {
    name: string;
    target: number;
    attained: number;
}