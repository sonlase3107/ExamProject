import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef, ViewRef } from '@angular/core';
import { Video } from 'src/app/models/video.models';
import { VideoService } from 'src/app/services/video.services';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-trending-bar',
  templateUrl: './trending-bar.component.html',
  styleUrls: ['./trending-bar.component.scss']
})
export class TrendingBarComponent implements OnInit {

  //In this component i choose the way that process the logic by javascript instead of angular ViewChild(dynamic loading)

  @ViewChild('barslide', { read: ElementRef }) bar!: ElementRef
  videos: Video[] = []
  indexSlide: number = 0
  amountItem: number = 5
  classNameCardLayout: string = 'card-layout'
  classNameCardImg: string = 'card-img'

  constructor(private videoService: VideoService, private render: Renderer2) {
    this.videos = this.videoService.getVideos(this.indexSlide, this.amountItem + 1)
  }


  ngOnInit(): void {
    console.log(this.videos);
  }
  /** Funtion to catch event of change state in slide (next or back) */
  changeStateSlide(value: number): void {
    if (value == 1) {
      if (this.indexSlide == 0) {
        return
      }
      this.indexSlide--
      this.amountItem--
      this.backToSlide(this.indexSlide)
    }
    if (value == 2) {
      this.indexSlide++
      this.amountItem++
      this.nextToSlide(this.amountItem)
    }
  }
  //function process event if user click next list gif img
  nextToSlide(idxSlide: number): void {
    const gifVideo = this.videoService.getVideo(idxSlide)
    const cardElLayout = this.createCardImg(gifVideo);
    this.render.appendChild(this.bar.nativeElement, cardElLayout)
    this.render.removeChild(this.bar.nativeElement, document.getElementsByClassName('card-layout')[0])
  }
  //opposite
  backToSlide(idxSlide: number): void {
    const gifVideo = this.videoService.getVideo(idxSlide)
    const cardElLayout = this.createCardImg(gifVideo);
    const listCard = document.getElementsByClassName('card-layout')
    this.render.insertBefore(this.bar.nativeElement, cardElLayout, listCard[0])

    this.render.removeChild(this.bar.nativeElement, listCard[listCard.length - 1])
  }
  // create card by javascript code then append it to DOM
  createCardImg(videoModel: Video) {
    const cardElLayout: HTMLDivElement = this.render.createElement('div')
    cardElLayout.setAttribute('class', this.classNameCardLayout)
    cardElLayout.addEventListener('click', this.goToGifDetail.bind(this, videoModel.id))
    const cartImg: HTMLDivElement = this.render.createElement('div')
    cartImg.setAttribute('class', this.classNameCardImg)
    const img: HTMLImageElement = this.render.createElement('img')
    img.setAttribute('src', videoModel.imgSrc)
    cardElLayout.appendChild(cartImg.getRootNode())
    cartImg.appendChild(img.getRootNode())
    return cardElLayout
  }

  goToGifDetail(text: string) {
    // ... process go to detail of img

  }
}
