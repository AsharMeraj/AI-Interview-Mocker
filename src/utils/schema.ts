import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export type mockInterviewQuestionType = {
    answer: string,
    question: string
}




export type MockInterviewType = {
    id: number,
    jsonMockResp: string,
    jobPosition: string
    jobDescription: string,
    jobExperience: string,
    createdBy: string,
    createdAt: string | null,
    mockId: string,

}
export const MockInterview = pgTable("mockInterview", {
    id: serial("id").primaryKey(),
    jsonMockResp: text("jsonMockResp").notNull(),
    jobPosition: varchar("jobPosition").notNull(),
    jobDescription: varchar("jobDescription").notNull(),
    jobExperience: varchar("jobExperience").notNull(),
    createdBy: varchar("createdBy").notNull(),
    createdAt: varchar("createdAt"),
    mockId: varchar("mockId").notNull(),

})



export type UserAnswerType = {
    id: number,
    mockIdRef: string,
    question: string | null,
    correctAns: string | null,
    userAns: string | null,
    feedback: string | null,
    rating: string | null,
    userEmail: string | null,
    createdAt: string | null
}
export const UserAnswer = pgTable("userAnswer", {
    id: serial("id").primaryKey(),
    mockIdRef: varchar("mockId").notNull(),
    question: varchar("question").notNull(),
    correctAns: text("correctAns"),
    userAns: text("userAns"),
    feedback: text("feedback"),
    rating: varchar("rating"),
    userEmail: varchar("userEmail"),
    createdAt: varchar("createdAt"),

})