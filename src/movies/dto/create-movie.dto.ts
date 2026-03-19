import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from "class-validator";

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
    genres: string[];

    @IsNotEmpty()
    @IsString()
    director: string;

    @IsNumber()
    @IsNotEmpty()
    rating:number;

    @IsString()
    @IsOptional()
    video:string;
}
