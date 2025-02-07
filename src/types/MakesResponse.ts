import { Make } from "./Make"

export type MakesResponse = {
  Count: number
  Message: string
  Results: Make[]
  SearchCriteria: string
}