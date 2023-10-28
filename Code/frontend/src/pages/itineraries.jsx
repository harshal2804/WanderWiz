import React, { Component } from 'react'
import Itinerary from '../components/Itinerary';
export class Itineraries extends Component {
    articles = [
        {
            "source": {
            "id": "wired",
            "name": "Wired"
            },
            "author": "Boone Ashworth",
            "title": "Apple Will Finally Pay for Throttling iPhones With ‘Batterygate’ Settlement",
            "description": "Plus: Amazon Music gets pricier, a bunch of people still want to ban TikTok in the US, and it’s only getting hotter on planet Earth.",
            "url": "https://www.wired.com/story/apple-batterygate-settlement-payments-finally-coming/",
            "urlToImage": "https://media.wired.com/photos/64dfcd35c65d33e5f22478fa/191:100/w_1280,c_limit/iPhone-Batterygate-Lawsuit-Payout-Gear-489943606.jpg",
            "publishedAt": "2023-08-19T13:00:00Z",
            "content": "If you had battery-related performance issues on an older iPhoneand you got in on a class-action lawsuit against Apple six years agoyou could soon receive some payback for your trouble.\r\nAccording to… [+3590 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Guardian"
            },
            "author": "Reuters",
            "title": "Blocking feature to be removed from former Twitter platform X, says Musk",
            "description": "Loss of protective feature may bring it into conflict with safety guidelines on App Store and Google PlaySocial media company X, formerly known as Twitter, will remove a protective feature that lets users block other accounts, Elon Musk has said in another co…",
            "url": "https://www.theguardian.com/technology/2023/aug/19/blocking-feature-to-be-removed-from-former-twitter-platform-x-says-musk",
            "urlToImage": "https://i.guim.co.uk/img/media/2f1caa8d5a6dae4f00110b6246d05ad2029e3f21/938_0_4562_2738/master/4562.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=909ac32104e8adb0816ac27dacecd13a",
            "publishedAt": "2023-08-19T05:44:08Z",
            "content": "Social media company X, formerly known as Twitter, will remove a protective feature that lets users block other accounts, Elon Musk has said in another controversial move for the company he bought la… [+1704 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Guardian"
            },
            "author": "Samuel Gibbs Consumer technology editor",
            "title": "The basic, better and best mobile phone options for kids",
            "description": "The lowdown on handsets, networks and parental controls, if your child is ready for a first mobile or an upgrade is requiredIf you have decided it is time for your child to have their first mobile phone, or they are due an upgrade, the choice can be bewilderi…",
            "url": "https://www.theguardian.com/money/2023/aug/19/the-basic-better-and-best-mobile-phone-options-for-kids",
            "urlToImage": "https://i.guim.co.uk/img/media/b4e4ff3b847221a3202c4b4b1ecc86d420e0836c/367_45_5236_3142/master/5236.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=85a310a43461972cca6e01c105887a6e",
            "publishedAt": "2023-08-19T10:00:15Z",
            "content": "If you have decided it is time for your child to have their first mobile phone, or they are due an upgrade, the choice can be bewildering.\r\nThere are various things to consider, from the handset and … [+7075 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Guardian"
            },
            "author": "Erin Cobby",
            "title": "‘You’re an athlete in both’: how music and women’s football share close ties in London",
            "description": "With scores of artists playing for local teams across the capital, it’s no wonder these squads double as nurturing creative hubsBy the early 2000s, MCs such as Akala, Kano, Tinchy Stryder and Terminator were showing the UK that both football and music were vi…",
            "url": "https://www.theguardian.com/music/2023/aug/19/youre-an-athlete-in-both-how-music-and-womens-football-share-close-ties-in-london",
            "urlToImage": "https://i.guim.co.uk/img/media/6e192a37573f7c405403c761c2bd3c49cde712ed/0_4_3725_2235/master/3725.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c21eae03a9829ec2ff85cd7878727625",
            "publishedAt": "2023-08-19T10:10:44Z",
            "content": "By the early 2000s, MCs such as Akala, Kano, Tinchy Stryder and Terminator were showing the UK that both football and music were viable careers no matter what barriers you faced. Lyrics were littered… [+5871 chars]"
            }
        ]

    constructor(){
        super();
        console.log("hello I am a constructor")
        this.state = {
            articles:this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3154f34c51b645649dc4287152f3bdee&page=1pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
    }

    handlePrevclick= async() =>{
      console.log("previous");  
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3154f34c51b645649dc4287152f3bdee&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }
    handleNextclick= async() =>{
      console.log("Next");
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
      else
      {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3154f34c51b645649dc4287152f3bdee&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
      }
    }

  render() {
    return (
      <div className="container my-3">
        <h2>NewMonkey - Top Headlines</h2>
            <div className="row">
                {this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                    <Itinerary title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })
            }
            <div className="container d-flex justify-content-between my-3">
            <button disable={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handlePrevclick}> &larr;Previous</button>
            <button disable={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-primary" onClick={this.handleNextclick}>Next &rarr;</button>
            </div>
            </div>

      </div>
    )
  }
}

export default Itineraries
