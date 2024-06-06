import { formatDate } from '@angular/common';
export class Doctors {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  specialization: string;
  mobile: string;
  department: string;
  degree: string;
  constructor(doctors: Doctors) {
    {
      this.id = doctors.id || this.getRandomID();
      this.img = doctors.img || 'assets/images/user/user1.jpg';
      this.name = doctors.name || '';
      this.email = doctors.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.specialization = doctors.specialization || '';
      this.mobile = doctors.mobile || '';
      this.department = doctors.department || '';
      this.degree = doctors.degree || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
