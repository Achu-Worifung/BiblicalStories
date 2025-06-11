
export interface storyInterface {
    title:string;
    reference:string;
    content:string;
    image:string;
    fit:string;
    position:string;
    metadata: 
    {
        author:string;
        category:string[];
        testament:string;
        theme:string[];
        characters:string[];
        book:string;
        genre:string[];
    }
}

export interface actions 
{
    testamentFilter: (testament: string[]) => void;
    themeFilter: (theme: string[]) => void;
    characterFilter: (character: string[]) => void;
    bookFilter: (book: string[]) => void;
    genreFilter: (genre: string[]) => void;
}