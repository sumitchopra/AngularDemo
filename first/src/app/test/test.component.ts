
import { Component } from '@angular/core';

@Component({
selector: 'test-app',
//template: `<p>this is my test App Component. your name = {{name}}</p>`
templateUrl:'./test.component.html'
})


export class TestComponent {
    name:string = 'Sumit';
    isAdd:boolean = false;
    ifcondition:boolean = true;
    isBold:boolean = true;
    isItalic:boolean =true;
    fontSize: number = 30;
    addstyles(){
        let styles ={
            'font-weight' : this.isBold ? 'bold':'normal',
            'font-style' : this.isItalic ? 'italic' : 'normal',
            'font-size.px' : this.fontSize
        };
        return styles;
    }
    adduser(){
        console.log("user Added")
    }
    applist: any[] = [
        {
            "id" : "1",
            "name" : "sumit"
        },
        {
            "id" : "2",
            "name" : "Amit"
        }
    ] 
    onClick() : void {
        console.log('Button Clicked');
    }

}