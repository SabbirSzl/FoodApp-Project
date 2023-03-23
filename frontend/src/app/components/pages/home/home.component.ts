import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
foods:Food[] =[];
  constructor(private foodService:FoodService){
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {

  }

}
