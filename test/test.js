process.env.NODE_ENV = "test"

let mongoose = require('mongoose')
let Post = require('../models/Post')

const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../app')
const should = chai.should()

chai.use(chaiHttp)

describe('Posts', () => {
    beforeEach((done) => {
        Post.deleteMany({}, (err) => {
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
    describe('/POST posts', async () => {
        let testCases = [
            {
                'name':'valid',
                'payload':{
                    'title': 'hello world',
                    'description':'some text', 
                },
                'expectedStatus':201
            },
            {
                'name':'invalid (missing title)',
                'payload':{
                    'description':'some text', 
                },
                'expectedStatus': 400
            },
            {
                'name':'invalid (missing description)',
                'payload':{
                    'title':'here is some title' 
                },
                'expectedStatus': 400
            }
        ]

        for (test in testCases){
             it(`it should post with ${testCases[test].name} payload`, (done)=>{
                chai.request(app)
                .post("/posts/create")
                .send(testCases[test].payload)
                .end((err, res) => {
                    res.should.have.status(testCases[test].expectedStatus)
                })
                done()
            })
        }
    })
})

