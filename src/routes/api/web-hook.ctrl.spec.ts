import 'mocha';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import app from '../../app';

chai.should();
chai.use(chaiHttp);

describe('/POST commands', () => {
  it('it should return an array', (done) => {
    chai.request(app.express)
      .post('/api/v1/web-hooks')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.details.should.be.a('array');
        done();
      });
  });
});
