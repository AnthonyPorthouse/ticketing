import * as argon2 from "argon2";

export class Password {
  static async toHash(password: string) {
    return await argon2.hash(password);
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    return await argon2.verify(storedPassword, suppliedPassword);
  }
}
