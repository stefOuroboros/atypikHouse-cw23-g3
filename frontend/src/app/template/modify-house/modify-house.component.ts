import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-house',
  templateUrl: './modify-house.component.html',
  styleUrls: ['./modify-house.component.css']
})
export class ModifyHouseComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModifyHouseComponent>,
  ) {
    console.log(this.data);
  console.log('coucous');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
