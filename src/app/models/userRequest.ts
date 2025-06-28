export class UserRequest {
  id: number;
  name: string;
  lastName: string;
  cpf: string;
  phone: string;
  email: string;

  constructor(id: number, name: string, lastName: string, cpf: string, phone: string, email: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
  }

}
