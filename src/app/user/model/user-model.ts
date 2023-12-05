export class UserModel {
    constructor(
        public id: number,
        public employeenum: number,
        public password: string,
        public firstname: string,
        public lastname: string,
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