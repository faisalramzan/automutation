import { Controller, Post, Body, Get, HttpCode } from '@nestjs/common';
import { ProjectService } from './project.service';
import {CreateProjectDto} from './dto/create-project.dto'
import { ApiTags } from '@nestjs/swagger';
import { UpdateProjectDTO } from './dto/update-project.dto';
import { CompleteProjectDTO } from './dto/complete-project.dto';
import { ReopenProjectDTO } from './dto/reopen-project.dto';
import { DeleteProjectDTO } from './dto/delete-project.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post('/create')
  @HttpCode(200)
  async projectCreate(@Body() createProjectDto: CreateProjectDto): Promise<any> {
   return await this.projectService.create(createProjectDto);
  }
  @Get('/projects')
  @HttpCode(200)
  async findAll(): Promise<any>{
     return await this.projectService.findAll();  }
  @Post('/complete')
  @HttpCode(200)
  async complete(@Body() completeProjectDTO: CompleteProjectDTO):Promise<any>{
    return await this.projectService.complete(completeProjectDTO);
  }
  @Post('/delete')
  @HttpCode(200)
  async delete(@Body()  deleteProjectDTO: DeleteProjectDTO):Promise<any>{
    return await this.projectService.delete(deleteProjectDTO);
  }
   @Post('/reopen')
   @HttpCode(200)
  async reopen(@Body() reopenProjectDTO: ReopenProjectDTO):Promise<any>{
    return await this.projectService.reopen(reopenProjectDTO);
  } 
  @Post('/update')
  @HttpCode(200)
    async update(@Body() updateProjectDTO: UpdateProjectDTO):Promise<any> {
     return await this.projectService.update(updateProjectDTO);
  }
}
