const { getAllResources }=require("./resourcesModels");
 const { glossaryRouter}=require("./glossaryModels")

test('should get all Resources', () =>{
    const actual =getAllResources('topic');
    expect(actual).toBe('topic');
});

test("Has the structure { Weeks6: any number, title: any string }", function () {
    //ARRANGE
    const actual = {
      topic: 'react',
      tags: 'react, full stack, front end, javascript, JSX',
     }
      //ASSERT
      const expected = {
        topic:expect.any("String"),
        title: expect.any("String") 
  
      }
  
      expect(actual).toStrictEqual(expected);
  
    
  });

describe("GET requests to /glossaryRouter ", () => {
    test("GET /glossaryRouter successfully returns an object of defined shape", async () => {
       await request(glossaryRouter)
          .get("/glossaryRouter ")
          .expect(function (res) {
             let actual = res.body;
             let expected = { success: true,};
             let expectedPayload = {
                topic: expect.any(String),
                Tags: expect.any(String),
             };
    
             expect(actual).toStrictEqual(expected);
    
             actual.payload.forEach((glossaryRouter ) => {
                expect(glossaryRouter ).toStrictEqual(expectedPayload);
             });
          });
    });
});

