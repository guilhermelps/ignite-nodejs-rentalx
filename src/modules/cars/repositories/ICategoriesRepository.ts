import { Category } from "../model/Category";

interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDto): void;
}

export { ICategoriesRepository, ICreateCategoryDto };
