# Controller

- API URL, HTTP method 등이 정해짐

## URI

- /src/controller 폴더 안에
  - 처음 시작하는 URI 폴더 구조를 만든다
  - Server.ts에서 mount 시킨다

## @Controller

- 컨트롤러 데코레이터
- 라우팅 메커니즘에서 경로를 생성하는 데 사용할 컨트롤러의 경로를 지정합니다.

## @Get

- HTTP method
  - @All, @Get, @Post, @Put, @Delete, @Head, @Patch, @Options

## Configuration

```ts
import { Configuration } from "@tsed/di";

@Configuration({
  mount: {
    "/rest/v0": "./controllers/v0/**/*.ts",
    "/rest/v1": "./controllers/v1/**/*.ts",
  },
})
export class Server {}
```

- 여러개의 버전을 다르게 만들 수도 있음

```ts
@Controller("/calendars")
export class CalendarCtrl {
  @Get("/:id")
  async get(@PathParams("id") id: string): Promise<Calendar> {
    return {
      id,
      name: "test",
    };
  }

  @Get()
  findAll() {
    // This endpoint will never get called
    // because the "/calendars" request is going
    // to be captured by the "/calendars/:id" route handler
  }
}
```

- /:id 같이 동적으로 받는 url이 있는 경우 그 아래쪽에 있는 url들은 무시된다
- GET /calendars 을 통해 calendars list를 전달하는 API를 만들고 싶다면
  /:id 보다 앞에 위치해야한다

## Input parameters

- @PathParams : Express.request.params
  - /:id 같이 경로를 통해 전달하는 parameter
- @QueryParams : Express.request.query
  - /?id=10 같이 url의 query string을 통해 전달하는 parameter
- @BodyParams : Express.request.body
- Raw가 붙으면 변환 및 검증 없이 가져온다는 뜻

## Axios response

- Axios response를 Express.js response로 변환 가능

## Request

### Decorators

- later
  - https://tsed.io/docs/controllers.html#request

### Input parameters

- 데코레이터를 이용해서 Express request object안에 있는 데이터를 가져올 수 있다

@ BodyParams

- Express.request.body

@ RawBodyParams

- Express.request.rawBody

@ PathParams

- Express.request.params

@ RawPathParams

- Express.request.params without transformation and validation

@ QueryParams

- Express.request.query

@ RawQueryParams

- Express.request.query without transformation and validation

## Response

### Status

- @Returns와 @Status 데코레이터를 통해 HTTP 응답 상태코드를 변경할 수 있다

### Redirect

- redirect url은 host의 root를 기준으로 보낼 수 있음

### Generics
