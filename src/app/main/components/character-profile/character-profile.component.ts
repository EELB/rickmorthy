import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CharacterService } from '../../character.service';
import { Result } from '../../model';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
})
export class CharacterProfileComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private service = inject(CharacterService);
  character! : Result | null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('CharacterProfileComponent: ', id);

    this.route.paramMap.pipe(switchMap((params) => this.service.searchById(Number(params.get('id'))))
    ).subscribe(resul => this.character = resul);



  }
}
