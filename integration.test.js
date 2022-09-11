const request = require("supertest");
const app = require("./servidor");


describe("Teste meu servidor", () => {

    it("deve retonar a soma corretamente ", async () => {

        const response = await request(app)
            .get("/som/1/2")
        expect(response.body).toEqual({ resultado: "O valor da soma é: 3" })

    })
})