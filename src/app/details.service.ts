import { Injectable } from '@angular/core';
import { MessageItem, MessageType} from './message';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private messages: MessageItem[] = [  
    {  
      type: 'Clawesome',
      data: {  
        url:"/assets/cat.jpeg",
        content: 'Cat ipsum dolor sit amet, meow for can opener to feed me',
      } 
    },  
    {  
      type: 'Clawesome',
      data: {  
        url: '/assets/cat2.webp',  
        content: 'Cat ipsum dolor sit amet, find dog bed and sleep all day',
      }
    },  
    {  
      type: 'Clawesome',
      data: {  
        url:'/assets/cat3.webp',
        content: 'Cat ipsum dolor sit amet, too cute for human to get mad'
      }
    },  
    {  
      type: 'Pawesome',
      data: {  
        url:'/assets/dog.webp',
        content: {  
          name: 'Sammy',  
          about: 'Snuggly cloud borker'  
        }  
       }
    },  
    {  
      type: 'Pawesome',
      data: {  
        url:'/assets/dog2.jpeg',
        content: {  
          name: 'Pittunia',  
          about: 'Maximum adorable shooberino'  
        }  
      } 
    },  
    {  
      type: 'Pawesome',
        data: {  
          url:'/assets/dog3.jpeg',
          content: {  
            name: 'Bay',  
            about: 'Long snoot for pats'  
          }  
        } 
    },  
    {  
      type: 'Smiley',
      data: {  
        url:'/assets/smily.jpeg',
      }  
    },  
    {  
      type: 'Smiley',
      data: {  
        url:'/assets/smily2.jpg',
      }  
   }  
  ];

  private departmentMapping: Map<number, MessageType[]> = new Map<number, MessageType[]>();  
  
  constructor() {  
    this.departmentMapping.set(1, ['Smiley']);  
    this.departmentMapping.set(2, ['Pawesome', 'Clawesome']);  
  }
  public getMessages(department: number): MessageItem[] {  
    const messageTypes = this.departmentMapping.get(department) ?? [];  
    return this.messages.filter(m => messageTypes.includes(m.type));  
  }
}

