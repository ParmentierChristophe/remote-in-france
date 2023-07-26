import {Company} from "./company.entity";

describe("Company entity", () => {
  it("should create a company ", () => {
    const company = Company.create({
      id: 1,
      name: "name",
      description: "description",
      isRemote: true,
      isEnglish: true,
      isHybrid: true,
      isHiring: true
    });
    expect(company).toBeDefined();
    expect(company.id).toBe(1);
    expect(company.name).toBe("name");
    expect(company.description).toBe("description");
    expect(company.isRemote).toBe(true);
    expect(company.isEnglish).toBe(true);
    expect(company.isHybrid).toBe(true);
    expect(company.isHiring).toBe(true);
  })
})