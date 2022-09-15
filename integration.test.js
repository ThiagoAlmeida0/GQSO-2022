const request = require("supertest");
const app = require("./servidor");


describe("Teste meu servidor", () => {
    
    it("deve retonar a rota principal ", async () => {

        const response = await request(app)
            .get("/")
        expect(response.body).toEqual({ message: "Bem vindo a API calculadora" })

    })
    
    it("deve retonar a soma corretamente ", async () => {

        const response = await request(app)
            .get("/som/1/2")
        expect(response.body).toEqual({ resultado: "O valor da soma é: 3" })

    })
    it("deve retonar a subtração corretamente ", async () => {

        const response = await request(app)
            .get("/sub/10/2")
        expect(response.body).toEqual({ resultado: "O valor da subtração é:8" })

    })
    it("deve retonar a divisão corretamente ", async () => {

        const response = await request(app)
            .get("/div/20/5")
        expect(response.body).toEqual({ resultado: "O valor da divisão é:4" })

    })
})