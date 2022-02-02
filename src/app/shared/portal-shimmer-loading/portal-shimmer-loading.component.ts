import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="p-6 shimmer-loading">
      <div
        class="comment animate"
        height=""
        *ngFor="let load of loadings"
      ></div>
    </div>
  `,
  styleUrls: ['./portal-shimmer-loading.component.scss'],
})
export class PortalShimmerLoadingComponent implements OnInit {
  public constructor() {}
  @HostBinding('class') public shimmer = 'w-full';

  @Input() public set loadingsCount(val: number) {
    this.pushLoading(val);
  }

  public readonly loadings: number[] = [];

  @Input() public readonly height: string;

  public ngOnInit(): void {
    if (this.loadings?.length <= 0) this.pushLoading(10);
  }

  private pushLoading(count: number): void {
    for (let i = 0; i < count; i++) {
      this.loadings.push(i);
    }
  }
}
