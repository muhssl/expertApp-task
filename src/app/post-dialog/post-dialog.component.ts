import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss'],
})
export class PostDialogComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PostDialogComponent>,
    private userService: UserService
  ) { }

  public users$ = this.userService.users$

  public postForm = this.fb.group({
    userId: [null, Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required]
  })

  public ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submitPostForm(): void {
    this.userService.submitPost(this.postForm.value).subscribe((value) => {
      console.log('value', value);
      this.dialogRef.close(value);
    });
  }

}
