class ToDo {
    constructor(name) {
        this.name = name;
    }

}
  
class Day { 
    constructor (date) {
        this.date= date; 
        this.todo= [];   
        }
    
  }

class Menu {
    constructor () {
        this.days = [] ; 
          this.selectedDay = null ;
    }

  start () {  
   let selection = this.showMainMenuOptions (); 
   while( selection != 0) {
    switch (selection ) {
        case '1':
            this.showToDoList();
            break; 
        case '2':
            this.createDay();
            break;
        case '3':
            this.viewDay();
            break;
        case '4':
            this.deleteDay();
            break;
        case '5':
          this.displayDays();
        default:
            selection = 0 ;
    }
    selection = this.showMainMenuOptions ();
   }

   alert('See you later!');
  }

   showMainMenuOptions() {
    return prompt(`
    ToDo List for the week
    -----------------------
     0)exit
     1)show days
     2)create day
     3)delete day
     4)display all days 
    `);
   }

   showDayMenuOptions(dayInfo) {
     return prompt (`
       0)back
       1)create ToDo
       2)delete ToDo
       --------------------------
      ${dayInfo}
     `);
   }

   showToDoList () {
    alert (`
    Weekday ToDo List:
    Monday:   Laundry
    Tuesday:  Wash car
    Wednesday: Pick up nephew
    Thursday:  Cut the yard 
    Friday:   Grocery shopping
    `)
   }

   displayDays (){
    let dayString = '';
    for (let i = 0; i < this.days.lengths ; i++) { 
     dayString += 1 + ') ' + this.days[i].name + '\n';
    } 
    alert(dayString);
}

  createDay () {
    let name = prompt ('Enter the day you would like to complete');
    this.days.push(new Day(name));
    this.selectedDay = this.days[this.days.length-1];
  }

  viewDay(){
    let index = prompt('Enter the date of the chore you wish to view:');
    if( index > -1 && index <this.days.length) {
       this.selectedDay = this.days[index];
       let description = 'Day Name:'+ this.selectedDay.name + '\n';

       for(let i = 0; i <this.selectedDay.names.length; i++) {
        description += i + ') ' + this.selectedDay.names[i].date + '\n';
       }

       let selection = this.showDayMenuOptions(description);
       switch (selection) {
        case '1':
            this.createToDo();
            break;
        case '2':
            this.deleteToDo();

       }
    }
  }

  deleteDay(){
    let index = prompt ('Enter the index of the chore you wish to delete:');
    if(index > -1 && index < this.days.length){
      this.days.splice(index,1);
    }
   }

  createToDo (){
    let name = prompt ('Enter date to new chore:');
    this.selectedDay.names.push(new ToDo(name));
  }

  deleteToDo (){
    let index = prompt ('Enter the index of the list you wish to delete:');
    if( index > -1 && index < this.selectedDay.todos.length){
        this.selectedDay.todos.splice(index, 1);
    }
  }
}  

let menu = new Menu();
menu.start();