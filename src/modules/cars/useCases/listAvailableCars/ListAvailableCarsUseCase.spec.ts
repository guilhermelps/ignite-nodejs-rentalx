import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A5",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1234",
      fine_amount: 130,
      brand: "car_brand_2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brand_2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A6",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1236",
      fine_amount: 130,
      brand: "car_brand_2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Audi A6",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A6",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1236",
      fine_amount: 130,
      brand: "car_brand_2",
      category_id: "category_id_6",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id_6",
    });

    expect(cars).toEqual([car]);
  });
});
