export interface ArticlesTypes {
    _id: string;
    title: string;
    bodyText: string[];
    time: string;
    writer: string;
    originalPost?: string;
}[]