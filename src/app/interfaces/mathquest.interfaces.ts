export interface IMathQuestion {
    Question:string;
    Id: string;
}

export interface IAnswerResult {
    Description:string;
    Question:string;
    YourAnswer:string;
    CorrectAnswer:string;
    Result:boolean;
}
