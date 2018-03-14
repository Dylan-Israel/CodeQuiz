import { PipeTransform, Pipe } from '@angular/core';

import { TopicDifficulty } from '../models';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {

    public transform(value: TopicDifficulty): string[] {
        return Object.keys(value);
    }
}