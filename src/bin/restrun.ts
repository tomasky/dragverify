 
import * as tsRouter from 'ts-router';
import * as Koa from 'koa';
import * as oauthserver from "oauth2-server";
 
const app = new Koa();
const router = new tsRouter. Router();


class User{
name :string
password :string

constructor(name:string,password:string) {
   this.name = name
   this.password = password
}
}
@tsRouter.Path('/test')
class TestController extends tsRouter.Controller {
    @tsRouter.PathParam('v1') private v1:string;
    private v2:string;
    constructor() {
        super();
        this.v1 = this.v1 + this.v1;
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
    async before(@tsRouter.PathParam('v2') v2:string) {
        this.v2 = v2;
    }
}
 
router.use(TestController);
let oauth = oauthserver({
  model: {},
  grants: ['password'],
  debug: true
});
app.use(router.routes());
app.listen(3000);
 
console.log('started at http://localhost:3000');
