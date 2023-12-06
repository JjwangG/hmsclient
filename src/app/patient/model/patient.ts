export class Patient {
    constructor(
        public id: number,
        public insuranceNumber: number,
        public firstName: string,
        public lastName: string,
        public address: string,
        public dob: Date, 
        public gender: string,
        public maritalStatus: string,
        public externalDoctor: string,
        public nokFName: string,
        public nokLName: string,
        public nokRelation: string,
        public nokAddress: string,
        public nokPhoneNumber: string,
        public email: string,
    ) {}
}
