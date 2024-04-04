import { Injectable } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    return createCatDto
  }

  findAll() {
    return `This action returns all cats`
  }

  findOne(id: number) {
    return {
      id,
      name: 'test',
      category: 'white',
    }
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  remove(id: number) {
    return `This action removes a #${id} cat`
  }
}
