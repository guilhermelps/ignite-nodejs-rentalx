import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDto): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
