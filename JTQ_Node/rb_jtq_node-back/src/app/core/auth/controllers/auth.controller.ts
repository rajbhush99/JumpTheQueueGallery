import { BadRequestException, Body, Controller, Get, NotFoundException, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {  Visitor } from '../../user/model/entities/visitor.entity';
import { AuthService } from '../services/auth.service';
import { LoginDTO } from '../model/login.dto';
import { GetUser } from '../decorators/get-user.decorator';
import { LoginResponse } from '../../user/model/dto/login-response.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() login: LoginDTO): Promise<LoginResponse> {
    try{
    const result = await this.authService.login(login);
    const response: LoginResponse = new LoginResponse();
    response.id= result.id;
    response.username = result.username;
    return response;
    } catch(e){
      throw new NotFoundException(e.message);
    }
  }

  @Post('register')
  async register(@Body() user: Visitor): Promise<Visitor> {
    try {
      const registered = await this.authService.register(user);
      return registered;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('currentuser')
  @UseGuards(AuthGuard())
  currentUser(@GetUser() user: Visitor): Visitor {
    return user;
  }
}
