import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A4",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1213",
      fine_amount: 150,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A5",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1234",
      fine_amount: 130,
      brand: "car_brand_2",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand_2",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
