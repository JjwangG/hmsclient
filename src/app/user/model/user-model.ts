export class UserModel {
    constructor(
        public id: number,
        public employeeNumber: number,
        public loginPassword: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public role: Role
    ) {}
}

export class Role {
    constructor(
      public role: string,
      public id: number
    ){}
  }