import { Injectable } from '@angular/core';
import {Problem} from "../models/problem.model";
import {PROBLEMS} from "../mock-problems";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
    return <Problem>PROBLEMS.find((problem) => problem.id === id);
  }

}
