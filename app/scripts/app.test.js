import { generateUserList } from './helpers/userHelper';

describe('App', () => {
   test('When users is not null should be 40 length', () => {
      var usersT = generateUserList();

       expect(usersT.length).toBe(40);
   });
});
