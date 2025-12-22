import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
private _showSidebar=signal(true);
private _showToggle=signal(true);


constructor(){

}

get showSidebar()
{
  console.log(this._showSidebar());
  
  return this._showSidebar();
}
set showSidebar(value:boolean){
  this._showSidebar.set(value)
}
get showToggle(){
return this._showToggle()
}
set showToggle(value:boolean){
  this._showToggle.set(value)
}
 public toggleSidebar() {
  // console.log(this._showSidebar());
  
    this._showSidebar.set(!this._showSidebar());
    console.log( this._showSidebar.set(!this._showSidebar()))
    

  }
}
