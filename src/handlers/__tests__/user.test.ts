import * as user from '../user'

describe('user handler', () => {
   it('should create a new user', async() => {
    const req = {body: {username:'john', password:'12345' }}
    const res = {json({token}){
        console.log(token)
        expect(token).toBeTruthy()
    }}
    await user.createNewUser(req, res, () => {})
   })
})

// describe("user handler", () => {
//     it("should do a thing", async () => {
//       // .,...
  
//       expect("something").toBe("something");
//     });
// });