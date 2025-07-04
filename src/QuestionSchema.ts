export interface QuestionSchema {
    question:string
    options:string[]
    correctOption: number
    points:number
}
export interface QuestionData {
    questions : QuestionSchema[]
}
