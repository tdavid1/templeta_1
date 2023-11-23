import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('urlap')
  geturlap( 
    @Query('email') email: string,
    @Query('jelszo')  jelszo: string,
    @Query('jelszo2')  jelszo2: string,
  ): object {
    let pattern = /[a-zA-Z1-9]/;
    let pattern2 = /[a-z@.]/;
    const errors: any = {};
    if (email === '') {
      errors.email = 'A email mezőt is töltsd ki!';
    }
    else if ((new RegExp(pattern2)).test(email)) {
      errors.email2 = 'Az emailnek tartalmaznia kell @ és .-ot';
    }
    if (jelszo === '') {
      errors.jelszo = 'A jelszo mezőt is töltsd ki!';
    }
    else if ((new RegExp(pattern)).test(jelszo)) {
      errors.jelszo3 = 'A jelszonak tartalmaznia kell kis és nagy betüt és számot';
    }
    if (jelszo2 === '') {
      errors.jelszo2 = 'A Jelszo ismetles mezőt is töltsd ki!';
    }
    else if (jelszo2 !== jelszo) {
      errors.jelszo4 = 'A jelszok nem egyeznek meg';
    }
    //return { nev: nev, eletkor: eletkor, errors: errors };
    return { email, jelszo, jelszo2, errors, negyedik: 12 };
  }
}
