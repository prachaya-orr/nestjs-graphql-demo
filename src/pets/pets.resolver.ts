
import { Resolver,Query } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(of=>Pet)
export class PetsResolver {
    constructor(private readonly petsService:PetsService){}

    @Query(returns => [Pet] )
    pets():Promise<Pet[]>{
        return this.petsService.findAll()
    }

}