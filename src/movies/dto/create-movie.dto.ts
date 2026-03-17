import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray, isString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsString()
    posterUrl: string;

    @IsNumber()
    @IsNotEmpty()
    year:number;

    @IsNotEmpty()
    @IsString({ each: true})
    @IsArray()
    genre: string[];

    @IsNotEmpty()
    @IsString()
    director: string;

}
