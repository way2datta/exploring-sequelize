process.env.NODE_ENV = "test";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import api from "../app";
const models = require("./../models");
import seed from "./seed";

chai.use(chaiHttp);

const app = api(models);

describe("API Routes", () => {
  // start with a fresh DB
  beforeEach(done => {
    models.sequelize
      .sync({
        force: true
        //match: /_test$/,
        //  logging: false
      })
      .then(() => {
        return seed(models);
      })
      .then(() => {
        done();
      });
  });

  describe("GET /v1/users", () => {
    it("should get a list of users", done => {
      chai
        .request(app)
        .get("/api/users")
        .end((err, res) => {
          // console.log(res.body);
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a("array");
          done();
        });
    });
  });
});
