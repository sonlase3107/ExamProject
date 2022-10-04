import { Injectable } from '@angular/core';
import { Video } from '../models/video.models';

@Injectable({
    providedIn: 'root',
})
export class VideoService {

    constructor() { }
    data: Video[] = [
        {
            id: '1',
            imgSrc: 'https://media3.giphy.com/media/xEsdRSsp9cR0s/100w.webp?cid=ecf05e47pyw9w2aa0dy9fwlwszwojhcjdlvji5hzjntzsnxa&rid=100w.webp&ct=g',
            tag: ['human', 'cry', 'women'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '2',
            imgSrc: 'https://media4.giphy.com/media/hjj6RxcWPp11FasWdi/100w.webp?cid=ecf05e47zlut1ku07w90xvtwqbb41uoaadbymmcn6oyqpkx1&rid=100w.webp&ct=g',
            tag: ['carton'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '3',
            imgSrc: 'https://media4.giphy.com/media/xUjSOWCndCdECCyOEY/100w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=100w.webp&ct=g',
            tag: ['carton', 'tree'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '4',
            imgSrc: 'https://media0.giphy.com/media/l2QZX9mMfuht3TVx6/200w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=200w.webp&ct=g',
            tag: ['human', 'children'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '5',
            imgSrc: 'https://media1.giphy.com/media/ehJYbjQDYVITTnrSvj/100w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=100w.webp&ct=g',
            tag: ['human', 'man'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '6',
            imgSrc: 'https://media0.giphy.com/media/c76IJLufpNwSULPk77/100w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=100w.webp&ct=g',
            tag: ['carton', 'cute'],
            imgAuthSource: 'https://media2.giphy.com/avatars/warnerbrosde/iL0YFIHzBvuh/36h.gif'
        },
        {
            id: '7',
            imgSrc: 'https://media3.giphy.com/media/eeZqv5nkI5BS1JrFme/200w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=200w.webp&ct=g',
            tag: ['human', 'man'],
            imgAuthSource: 'https://media2.giphy.com/avatars/warnerbrosde/iL0YFIHzBvuh/36h.gif'
        },
        {
            id: '8',
            imgSrc: 'https://media2.giphy.com/media/0puLdLnf9yJ9tcwfc0/200w.webp?cid=ecf05e476p5wev3f94qknisv083glsh0sa0u7ivsjyozmlil&rid=200w.webp&ct=g',
            tag: ['storm', 'weather'],
            imgAuthSource: 'https://media2.giphy.com/avatars/warnerbrosde/iL0YFIHzBvuh/36h.gif'
        },
        {
            id: '9',
            imgSrc: 'https://media3.giphy.com/media/SSEBgnhDTHfCqRSwoh/100w.webp?cid=ecf05e47gd7e4fsjyyzpr22mma4n72u2tt9yhrylkeiv4vdc&rid=100w.webp&ct=g',
            tag: ['carton'],
            imgAuthSource: 'https://media2.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH/36h.png'
        },
        {
            id: '10',
            imgSrc: 'https://media4.giphy.com/media/sJWNLTclcvVmw/100w.webp?cid=ecf05e47gd7e4fsjyyzpr22mma4n72u2tt9yhrylkeiv4vdc&rid=100w.webp&ct=g',
            tag: ['animal', 'cute'],
            imgAuthSource: 'https://media3.giphy.com/avatars/SWAG/H8PhWSc9dNG7/36h.gif'
        },

    ]
    getVideo(idx: number): Video {
        return this.data[idx]
    }
    getVideos(idx: number, amount: number): Video[] {
        return this.data.slice(idx, idx + amount)
    }
    searchVideo(tagSearch: string): Video[] {
        let videoFilter: Video[] = []
        if (tagSearch === '') {
            return videoFilter = this.data
        }
        videoFilter = this.data.filter(elVideo => elVideo.tag.includes(tagSearch))
        return videoFilter
    }
}