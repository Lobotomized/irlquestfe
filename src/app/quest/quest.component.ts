import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quest} from '../classes/quest'

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.less']
})
export class QuestComponent implements OnInit {
  @Input() quest: Quest;
  @Input() quests: Array<Quest>;
  @Output() delete = new EventEmitter<Array<Quest>>();

  
  constructor() { }

  ngOnInit() {
  }

  completeTask(){
    this.quest.completed = !this.quest.completed

    if(this.quest.completed){
      this.quest.endDate = new Date();
    }
    else{
      this.quest.endDate = null
    }
  }

  remove(){
    this.quests = this.quests.filter((quest) => {
      return quest !== this.quest
    })

    this.delete.emit(this.quests)
  }

}
