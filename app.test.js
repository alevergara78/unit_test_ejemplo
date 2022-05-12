const request = require("supertest");

const app = require("./app");

describe("Test a un recurso API", () => {
    test("GET /", (done) => {
      request(app)
        .get("/")

        //evaluaciones, si se cumplen pasa el test
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
          res.body.data.length = 1;
          res.body.data[0].once = "sopaipillas";
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    // More things come here
  });