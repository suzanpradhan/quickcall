export class User {
  public id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(props: {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    this.id = props.id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.password = props.password;
  }
}
