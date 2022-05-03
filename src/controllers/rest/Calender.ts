import { Get } from "@tsed/schema";
import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";

interface Calendar {
  id: string;
  name: string;
}

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
