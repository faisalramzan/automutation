import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request,Response } from "express";
import {UserRepository} from '../../repository/user.repository.service'
@Injectable()
export class TaskListMiddleware implements NestMiddleware {
    constructor (private readonly userRepository: UserRepository ){}
       async use (req:Request ,res: Response, next: Function){
         const {
             body:{eventCreator} 
            } = req;
            const eventCreatorInfo = await this.userRepository.findOrCreate(
                eventCreator,
              );
              
               req.body.taskList.eventCreator = eventCreatorInfo['_id'];

            next();
        }
     
    }
