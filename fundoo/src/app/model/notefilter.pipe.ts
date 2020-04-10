import { PipeTransform, Pipe } from '@angular/core';
import { Note } from './note.model';

@Pipe({
    name: 'notefilter'
})
export class FilterData implements PipeTransform {
    transform(notes:Note[], searchTerm: string) {
        if(!notes || !searchTerm) {
            return notes;
        }
        return notes.filter( notes =>  
            notes.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}