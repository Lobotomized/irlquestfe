import { Injectable } from '@angular/core';
import { Quest } from './classes/quest'
import { Epic } from './classes/epic';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  epics: Array<Epic> = [
    {
      id:1,
      name:"Epic 2",
      quests:[{
        completed:false,
        startDate: new Date(1019,11,2),
        description:"HMM"
      }]
    },
    {
    id:5,
    name:"Epic 1 ",
    quests:[{
      completed:true,
      startDate: new Date(1012,11,6),
      endDate: new Date(2013,11,11),
      description:'lorem ipsun'
    },
    {
      completed:true,
      startDate: new Date(1012,11,6),
      endDate: new Date(2013,11,11),
      description:'lorem ipsun'
    },
    {
      completed:false,
      startDate: new Date(1012,11,6),
      description:'lorem ipsun'
    }]
  }]

 
  constructor() { }

  getQuests(epicId?){
    let id;
    if(!epicId){
      //Vzima nai-noviq
      id = 5;
    }
    else{
      //Vzima po epic id
      id=epicId
    }
    let epic = this.epics.find((epic) => {
      return id === epic.id 
    })
    return epic.quests;
  }
  
  getEpics(offset?){
    return this.epics
  }

  updateQuests(quests,epicId){
    

  }
}
