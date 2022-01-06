import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColumnService } from '@modules/task/services/column.service';
import { NewTaskService } from '@modules/task/services/new-task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @Input() data:Array<any> = [];
  @Input() name:string = '';
  @Input() id:string = '';
  
  constructor(private newTaskSerivce:NewTaskService,
    private columnService:ColumnService) { }

  ngOnInit(): void {
    this.columnService.reloadColumn$
    .subscribe((response) => {
      if(response && response?.data?._id === this.id){
        const {data} = response;
        this.data = data.list
        console.log('--->',response)
      }
    })
  }

  addTask():void{
    this.newTaskSerivce.setShow(true,this.id)
  }

}
