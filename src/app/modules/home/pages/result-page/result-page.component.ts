import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video.models';
import { VideoService } from 'src/app/services/video.services';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {


  constructor(private route: ActivatedRoute, private vdeoService: VideoService,
  ) { }
  // @ViewChild('dynamic', { read: ViewContainerRef })
  // private viewRef!: ViewContainerRef;
  // this variable contain the data of video will display on the screen
  listVideoResult: Video[] = []
  ngOnInit(): void {
    this.fetchData()
  }

  // fetching data from API (assuming there is an API) by getting text search from param and call API searching to BE
  fetchData() {
    this.route.queryParamMap.subscribe(params => {
      this.listVideoResult = this.vdeoService.searchVideo(params.get('stringSearch') || '')
    })
  }

  // showDynamicComponent(): void {
  //   this.viewRef.clear();
  //   this.viewRef.createComponent(CardComponent);
  // }

  // removeDynamicComponent(): void {
  //   this.viewRef.clear();
  // }
  // add() {
  //   this.showDynamicComponent()
  // }
}
