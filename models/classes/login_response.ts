export class loginResponse {
  status_code: number;
  message: string;

  constructor(status_code: number, message: string) {
    (this.status_code = status_code), (this.message = message);
  }
}
