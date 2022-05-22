import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/study")
export class StudyController {
  @Get("/list")
  getStudyList() {
    // FIXME : it should return using service
    return [
      {
        id: 1,
        name: "스터디1",
        description: "스터디1입니다.",
        startDate: "2020-01-01",
        endDate: "2020-01-31",
        maxMember: 10,
        currentMember: 5,
        isActive: true,
        isPublic: true,
        isClosed: false,
        isDeleted: false,
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        id: 2,
        name: "스터디2",
        description: "스터디2입니다.",
        startDate: "2020-01-01",
        endDate: "2020-01-31",
        maxMember: 10,
        currentMember: 5,
        isActive: true,
        isPublic: true,
        isClosed: false,
        isDeleted: false,
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
    ];
  }

  @Get("/")
  getStudy() {
    return "hello";
  }
}
