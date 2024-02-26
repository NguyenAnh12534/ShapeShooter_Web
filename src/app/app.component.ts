import { Component, ElementRef, OnInit, ViewChild, Directive, Input } from '@angular/core';
import Shape from './shape';

@Directive({selector: 'canvas'})
class ChildDirective {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-game';
  ngOnInit(): void {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

window.addEventListener("resize", (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


  let shape: Shape = new Shape(10, 10, 100, 100);
  if(ctx)
    shape.draw(ctx);  
}
}
