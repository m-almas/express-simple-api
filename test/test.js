process.env.NODE_ENV = "test"

let mongoose = require('mongoose')
let Post = require('../models/Post')

const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../app')
const should = chai.should()

chai.use(chaiHttp)

describe('Posts', () => {
    beforeEach((done)=>{
        Post.deleteMany({}, (err)=>{
            done()
        })
    })
    describe('/GET Post', () => {
        it('should get all posts', (done) => {
            chai.request(app)
                .get('/posts')
                .send({})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('posts')
                    res.body.posts.should.be.a('array')
                    res.body.posts.length.should.be.eql(0)
                    done()
                })
        }
        )
    })
})

