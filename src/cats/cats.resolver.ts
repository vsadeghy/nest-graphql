import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatInput } from "./cat.input";
import { CatsService } from "./cats.service";
import { CatType } from "./create-cat.dto";

@Resolver()
export class CatsResolver {
    constructor(private readonly catsService: CatsService) {}

    @Query(() => String)
    async hello() {
        return "hello world";
    }

    @Query(() => [CatType])
    async cats() {
        return this.catsService.findAll();
    }

    @Mutation(() => CatType)
    async createCat(@Args("input") input: CatInput) {
        return this.catsService.create(input);
    }
}
