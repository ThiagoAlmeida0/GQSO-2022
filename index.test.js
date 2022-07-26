const request = require("supertest");
const app = require("./servidor")

describe("Teste meu servidor", () => {
    it("deve retoranar a rota principal", async () =>{

       const res = await request(app).get("/")
       expect(res.statusCode).toEqual(200)
       expect(res.body).toHaveProperty("message")

    })

    it("deve retonar uma soma valida", async () =>{
        const res = await request(app).get("/som/5/2")
        const expectedResultado = 7
        const expectedMessage = "O valor da soma é: " + expectedResultado
        expect(res.body.resultado).toEqual(expectedMessage)
    } )
    it("deve retonar uma subtração valida", async () =>{
        const res = await request(app).get("/sub/5/2")
        const expectedResultado = 3
        const expectedMessage = "O valor da subtração é:" + expectedResultado
        expect(res.body.resultado).toEqual(expectedMessage)
    } )
})
