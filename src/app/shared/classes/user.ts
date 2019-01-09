export class User {
  private _username: string;

  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
}
