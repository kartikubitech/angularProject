import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canmatchGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('isLogin')==null){
    return true;
  }
  else{
    if(localStorage.getItem('isLogin')=='true'){
    inject(Router).navigate(['/user'])
    return false;
  }
  else{
    return true
  }
}
};
