import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { Post } from '../shared/post.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) { }
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  public users$ = this.userService.users$;
  size = 10;
  totalSize = 0;
  public displayedColumns: string[] = ['img', 'userName', 'title', 'body', 'operation'];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.userService.postsWithAdd$.subscribe(data => {
      console.log('result', data);
      this.dataSource.data = data;
      this.totalSize = data.length;
      this.dataSource.paginator = this.paginator;

    })
  }


  public addPost(): void {
    const dialog =
      this.dialog.open(PostDialogComponent, {
        width: '500px',
      });
    dialog.afterClosed().subscribe((result: any) => {
      console.log('result', result);
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
        this.totalSize += 1;
      }
    })
  }

}
