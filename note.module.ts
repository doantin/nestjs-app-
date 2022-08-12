import { NoteController } from './note.controller';
import { Module } from '@nestjs/common';
import { NoteService } from './note.service';

@Module({
    controllers:[NoteController],
    providers:[NoteService]
})
export class NoteModule {}
