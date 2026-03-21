import { 
    IsString, 
    IsNotEmpty, 
    IsOptional, 
    IsNumber, 
    IsArray, 
    IsUrl, 
    Min, 
    Max, 
    MinLength, 
    MaxLength, 
    ArrayMinSize, 
    Matches
} from "class-validator";

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Title is too short' })
    @MaxLength(100, { message: 'Title is too long' })
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, { message: 'Description must be at least 10 characters long' })
    @MaxLength(1000, { message: 'Description is too long' })
    description: string;

    @IsNotEmpty()
    @IsUrl({}, { message: 'Poster must be a valid URL' }) 
    @MaxLength(500, { message: 'Poster URL is too long' })
    posterUrl: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1888, { message: 'Movies didn’t exist before 1888' }) 
    @Max(2030, { message: 'Year is too far in the future' })
    year: number;

    @IsArray()
    @ArrayMinSize(1, { message: 'Please provide at least one genre' })
    @IsString({ each: true })
    @Matches(/^[a-zA-Z\s\-]+$/, { 
        each: true, 
        message: 'Each genre must contain only letters, spaces or hyphens' 
    })
    genres: string[];

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @Matches(/^[a-zA-Z\s\.\-]+$/, { 
        message: 'Director name can only contain letters, spaces, dots or hyphens' 
    })
    director: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: 'Rating cannot be less than 0' })
    @Max(10, { message: 'Rating cannot be more than 10' })
    rating: number;

    @IsString()
    @IsOptional()
    @IsUrl({}, { message: 'Video must be a valid URL (e.g. YouTube link)' })
    video?: string;
}