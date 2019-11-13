import { Component } from '@angular/core';
import { GeneralService } from '../app/general.service'
import { Quest } from '../app/classes/quest'
import { Epic } from './classes/epic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  quests:Array<Quest>
  epics:Array<Epic>
  description:''
  service: GeneralService
  currentEpic:Epic
  offset:Number = 0;
  constructor(){
    this.service = new GeneralService();

    this.epics = this.service.getEpics(this.offset);
    this.service.getQuests();

  }

  add(){
    if(this.description){
      let quest = {
        startDate:new Date(),
        description:this.description,
        completed:false
      }
      this.description = '';
      this.quests.push(quest)

      this.service.updateQuests(this.quests, this.currentEpic.id)
    }
  }

  delete(ev){
    this.quests = ev;
    this.service.updateQuests(this.quests,this.currentEpic.id)
  }

  epicClick(epic){
    this.quests = this.service.getQuests(epic.id);
    this.currentEpic = epic;
  }

  changeOffset(num){
    this.offset += num;
  }

}

