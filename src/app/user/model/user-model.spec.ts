import { Role, UserModel } from './user-model';

describe('UserModel', () => {
  it('should create an instance', () => {
    expect(new UserModel(1,1,'','','','',new Role('',1))).toBeTruthy();
  });
});
