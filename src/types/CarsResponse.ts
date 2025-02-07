import { Car } from "./Car"

export type CarsResponse = {
  Count: number
  Message: string
  Results: Car[]
  SearchCriteria: string
}