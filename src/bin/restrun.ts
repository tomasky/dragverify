import * as tsRouter from 'ts-router';
import * as Koa from 'koa';
import * as mem from '../lib/oauth2';
let oauthServer = require('oauth2-server');
const app = new Koa();
const oamodel = new mem.InMemoryCache();
const router = new tsRouter. Router();


class User{
name :string
password :string

constructor(name:string,password:string) {
   this.name = name
   this.password = password
}
}
@tsRouter.Path('/:version')
class TestController extends tsRouter.Controller {
    @tsRouter.PathParam('v1') private v1:string;
    private v2:string;
    constructor() {
        super();
        this.v1 = this.v1 + this.v1;
    }

    @tsRouter.Path('/grant')
    @tsRouter.POST
    @tsRouter.Consume(tsRouter.MediaType.JSON)
    @tsRouter.Produce(tsRouter.MediaType.JSON)
    async grant(@tsRouter.Body body:Object):Promise<tsRouter.Response> {
        return tsRouter.Response.status(200).body({body}).build();
    }

    @tsRouter.Path('/:v1/:v2')
    @tsRouter.GET
    @tsRouter.Produce(tsRouter.MediaType.JSON)
    async index(@tsRouter.Params params:Object):Promise<tsRouter.Response> {
        let v1 = this.v1;
        let v2 = this.v2;
        return tsRouter.Response.status(200).body({v1, v2, params}).build();
    }

    @tsRouter.Before
    
    
    async before(@tsRouter.PathParam('version') v2:string,@tsRouter.AppContext context:tsRouter.Context) {
        this.v2 = v2;
    }

    
}
 
router.use(TestController);
let oauth = oauthServer({
  model: oamodel,
  grants: ['password'],
  debug: true
});



app.use(router.routes());

/*
app.use(oauth.authorise())
app.use( async (ctx, next) => {
   this.body = "hello"
  await next();
});
*/
app.listen(3000);
 
console.log('started at http://localhost:3000');
