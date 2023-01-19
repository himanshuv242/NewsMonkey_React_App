import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Michelle Fox",
            "title": "Stocks making the biggest moves midday: Norwegian Cruise Line, Allstate, Roblox and more - CNBC",
            "description": "These are the stocks posting the largest moves midday.",
            "url": "https://www.cnbc.com/2023/01/19/stocks-making-the-biggest-moves-midday-norwegian-cruise-line-allstate-roblox-and-more-.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107044749-1649679626866-gettyimages-1239909108-AA_11042022_684346.jpeg?v=1674151822&w=1920&h=1080",
            "publishedAt": "2023-01-19T18:10:22Z",
            "content": "Check out the companies making the biggest moves midday:\r\nNorwegian Cruise Line Shares sunk more than 6% after the cruise ship operator reported in a filing with the Securities and Exchange Commissio… [+3530 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Holly Ellyatt, Amanda Macias",
            "title": "Ukraine war live updates: Wagner mercenaries claim capture of village outside Bakhmut; Russia suspects U.S. citizen of espionage - CNBC",
            "description": "Zelenskyy said a helicopter crash that killed his colleagues was a consequence of the war. Russia says it has initiated a criminal case against a U.S. citizen.",
            "url": "https://www.cnbc.com/2023/01/19/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107180827-1674115488690-gettyimages-1246344394-AA_19012023_1029871.jpeg?v=1674116512&w=1920&h=1080",
            "publishedAt": "2023-01-19T18:04:00Z",
            "content": "A combination of factors could have contributed to a helicopter crash in Brovary, on the outskirts of Kyiv, on Wednesday in which the country's interior minister and 13 other people, including a chil… [+985 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Allies bolster Ukraine with more weapons pledges; but no sign of U.S., German tank agreement - Reuters",
            "description": "Western allies pledged billions of dollars in new weapons for Ukraine on Thursday, but the question of whether they would also send German-made tanks remained unanswered, with Berlin yet to signal whether it would lift a veto.",
            "url": "https://www.reuters.com/world/europe/berlin-sets-condition-us-exports-german-tanks-ukraine-source-2023-01-18/",
            "urlToImage": "https://www.reuters.com/resizer/CmN-VJvR8wdPCuCyfNO-fpefAmM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MOQ5ME3EVJIWNDGDTHTHU7OWHE.jpg",
            "publishedAt": "2023-01-19T17:50:00Z",
            "content": "KYIV/BERLIN, Jan 19 (Reuters) - Western allies pledged billions of dollars in new weapons for Ukraine on Thursday, but the question of whether they would also send German-made tanks remained unanswer… [+5809 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Daniel Politi",
            "title": "Peru's Andes 'descended' on capital to demand leader resign - The Associated Press - en Español",
            "description": "LIMA, Peru (AP) — People poured into Peru's coastal capital, many from remote Andean regions, for a protest Thursday against President Dina Boluarte and in support of her predecessor, whose ouster last month launched deadly unrest and cast the nation into pol…",
            "url": "https://apnews.com/article/politics-protests-and-demonstrations-peru-government-caribbean-dina-boluarte-abc5c843f4ef886efff634fce2576abe",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/23060280c3064b73a681b0367b7ba006/3000.webp",
            "publishedAt": "2023-01-19T17:46:36Z",
            "content": "LIMA, Peru (AP) People poured into Perus coastal capital, many from remote Andean regions, for a protest Thursday against President Dina Boluarte and in support of her predecessor, whose ouster last … [+6489 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Tami Luhby, Kaanita Iyer",
            "title": "Debt ceiling: Here's what you should know as threat of default looms - CNN",
            "description": "The clock is now ticking on the nation's debt ceiling drama.",
            "url": "https://www.cnn.com/2023/01/18/politics/debt-ceiling-deadline-congress/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230117141839-us-capitol-building-dc-file-restricted-011523.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-19T17:22:00Z",
            "content": "The clock is now ticking on the nations debt ceiling drama.\r\nThe US hit its borrowing cap Thursday, triggering the Treasury Department to start taking extraordinary measures to prevent a default. \r\nW… [+4643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Alec Baldwin to be charged with involuntary manslaughter over Rust shooting - BBC",
            "description": "A crew member will also be charged with involuntary manslaughter over the death of Halyna Hutchins.",
            "url": "https://www.bbc.com/news/world-us-canada-64337761",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/014F/production/_128353300_gettyimages-1245427091.jpg",
            "publishedAt": "2023-01-19T17:21:41Z",
            "content": "Actor Alec Baldwin will be charged with involuntary manslaughter over the shooting of cinematographer Halyna Hutchins, who was killed on a film set when he fired a prop gun.\r\nMr Baldwin had been rehe… [+3867 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Mike Fleming Jr",
            "title": "Disney Moving On ‘Tron: Ares’; Joachim Rønning In Talks To Helm Jared Leto In Sci-Fi Sequel: The Dish - Deadline",
            "description": "EXCLUSIVE: A new installment of Tron is coming back online. The Dish hears that Disney is in early negotiations to set Joachim Rønning to direct Jared Leto in Tron: Ares. The film is crewing up, ey…",
            "url": "https://deadline.com/2023/01/tron-ares-joachim-ronning-helm-jared-leto-disney-sci-fi-sequel-1235227464/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/01/Tron.jpg?w=1024",
            "publishedAt": "2023-01-19T17:10:00Z",
            "content": "EXCLUSIVE: A new installment of Tron is coming back online. The Dish hears that Disney is in early negotiations to set Joachim Rønning to direct Jared Leto inTron: Ares. The film is crewing up, eyein… [+2187 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "PSG vs. Riyadh All-Star XI live stream: How to watch Lionel Messi vs. Cristiano Ronaldo online, TV channel - CBS Sports",
            "description": "These two old foes face off in Saudi Arabia for possibly the final time",
            "url": "https://www.cbssports.com/soccer/news/psg-vs-riyadh-all-star-xi-live-stream-how-to-watch-lionel-messi-vs-cristiano-ronaldo-online-tv-channel/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/18/fdb454f4-665e-4cd6-b758-ec8ff6cfd35c/thumbnail/1200x675/24bbb04fae1fcd4749ff62c950c50b13/untitled-design-10.png",
            "publishedAt": "2023-01-19T17:07:00Z",
            "content": "Lionel Messi and Cristiano Ronaldo will meet again Thursday when Paris Saint-Germain take on an all-star team composed of Al Nassr and Al Hilal players in Saudi Arabia. With the Argentine world champ… [+3484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "PFT’s NFL divisional round picks - NBC Sports",
            "description": "We started the super wild-card round in not-so-super fashion, going 4-2 each. This week, there are four games to be played, and picking the winners gets no easier.The divisional round picks appear below. As you’ll see, MDS has picked two of the underdogs to c…",
            "url": "https://profootballtalk.nbcsports.com/2023/01/19/pfts-nfl-divisional-round-picks/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/01/USATSI_13850872-e1674147920889.jpg",
            "publishedAt": "2023-01-19T17:06:00Z",
            "content": "We started the super wild-card round in not-so-super fashion, going 4-2 each. This week, there are four games to be played, and picking the winners gets no easier.\r\nThe divisional round picks appear … [+3751 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Peter Bradshaw",
            "title": "Shotgun Wedding review – Jennifer Lopez hits the spot in goofy romcom - The Guardian",
            "description": "In this likable spin on the genre, Lopez’s wedding to a sensitive baseball player runs aground when a boatful of armed men arrive",
            "url": "https://www.theguardian.com/film/2023/jan/19/shotgun-wedding-review-jennifer-lopez-romcom",
            "urlToImage": "https://i.guim.co.uk/img/media/5297dbdc75c95a3863ae4f1d1bffe10db2448207/0_188_3000_1801/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=27a61eab637528e6482158eddf388c0c",
            "publishedAt": "2023-01-19T17:00:00Z",
            "content": "Against the odds, the expectations and the run of play, here is a romcom starring Jennifer Lopez and its well, its pretty good: enjoyably goofy and sparkily written. Lopez plays Darcy, a woman who ag… [+1651 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Sylvie Corbet",
            "title": "Macron vows to proceed with pension reform, despite protests - The Associated Press",
            "description": "PARIS (AP) — Hundreds of thousands protested on the streets of Paris and other French cities Thursday amid nationwide strikes against plans to raise the retirement age, but President Emmanuel Macron insisted he would press ahead with the proposed pension refo…",
            "url": "https://apnews.com/article/france-retirement-age-limit-protests-866eb86aea5cf0d39894b96d2888c26f",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/dd5f5d2a583643c0b5ed364a2f8a26e5/3000.webp",
            "publishedAt": "2023-01-19T16:52:30Z",
            "content": "PARIS (AP) Hundreds of thousands protested on the streets of Paris and other French cities Thursday amid nationwide strikes against plans to raise the retirement age, but President Emmanuel Macron in… [+6656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Jenna Laine",
            "title": "Buccaneers fire offensive coordinator Byron Leftwich - ESPN",
            "description": "The Bucs fired OC Byron Leftwich as part of an overhaul that has nine coaches leaving after a season in which the offensive output fell dramatically.",
            "url": "https://www.espn.com/nfl/story/_/id/35481127/source-buccaneers-fire-offensive-coordinator-byron-leftwich",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0113%2Fr1117232_1296x729_16%2D9.jpg",
            "publishedAt": "2023-01-19T16:36:08Z",
            "content": "TAMPA, Fla. -- The Tampa Bay Buccaneers have fired offensive coordinator Byron Leftwich as part of an overhaul that includes eight other coaches leaving the staff, it was announced Thursday.\r\nThe dec… [+3774 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Adela Suliman",
            "title": "Jacinda Ardern's resignation spotlights sexism during New Zealand PM's tenure - The Washington Post",
            "description": "New Zealand’s prime minister, who took office at 37, was called a “babe” and referred to as “the lady with the big teeth” during her time in office.",
            "url": "https://www.washingtonpost.com/world/2023/01/19/jacinda-ardern-resign-sexism-battles/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FRZTLNWIRMI6PAZBJAP5MPYXJU.jpg&w=1440",
            "publishedAt": "2023-01-19T16:31:12Z",
            "content": "Comment on this story\r\nAs one of just a handful of female world leaders, Jacinda Ardern was dogged by sexist and ageist remarks from reporters, online commentators and fellow politicians during her t… [+5258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Nelson Wang",
            "title": "New FTX Head Says Crypto Exchange Could Be Revived: Wall Street Journal - CoinDesk",
            "description": "John J. Ray III made the comment in his first interview since taking over FTX in November.",
            "url": "https://www.coindesk.com/business/2023/01/19/new-ftx-head-says-crypto-exchange-could-be-revived-wall-st-journal/",
            "urlToImage": "https://www.coindesk.com/resizer/kJrFR8mzAfHkQKAlHr89A5BR7s0=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/MWOWNFKMSFFJFI25PXJVEROEXQ.jpg",
            "publishedAt": "2023-01-19T16:03:00Z",
            "content": "The new head of FTX is exploring the possibility of restarting the bankrupt crypto exchange, according to an interview he gave to the Wall Street Journal, his first since taking over at FTX in Novemb… [+1718 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Zoe Han",
            "title": "Households earning $100,000 or more are cutting back more aggressively on spending. What’s going on? - MarketWatch",
            "description": "More U.S. adults said their monthly expenses exceeded their monthly income in December, according to a report released this week",
            "url": "https://www.marketwatch.com/story/households-earning-100-000-or-more-are-cutting-back-more-aggressively-on-spending-whats-going-on-11674143695",
            "urlToImage": "https://images.mktw.net/im-429293/social",
            "publishedAt": "2023-01-19T15:54:00Z",
            "content": "We want to hear from readers who have stories to share about the effects of increasing costs and a changing economy. If youd like to share your experience, write to readerstories@marketwatch.com. Ple… [+3800 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Victoria Bisset",
            "title": "British actor Julian Sands identified as hiker missing in California - The Washington Post",
            "description": "Julian Sands, who starred in “A Room With a View,” was reported missing since Friday after going hiking in California, where conditions have been dangerous.",
            "url": "https://www.washingtonpost.com/nation/2023/01/19/julian-sands-missing-hiker-california/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/67WGMFNXLWHD3IXYGQE6KUGW4M.jpg&w=1440",
            "publishedAt": "2023-01-19T15:46:00Z",
            "content": "Comment on this story\r\nThe British actor Julian Sands, known for his roles in films including A Room With a View, is missing after going hiking in Californias San Gabriel Mountains last week, authori… [+1487 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Ty Pendlebury",
            "title": "Apple HomePod Speaker Gets Sound Upgrade for $299: A Hands-On - CNET",
            "description": "The new full-size speaker with Siri smarts can also sense a room's temperature and listen for smoke alarms.",
            "url": "https://www.cnet.com/tech/home-entertainment/apple-homepod-speaker-gets-sound-upgrade-siri-smarts-for-299/",
            "urlToImage": "https://www.cnet.com/a/img/resize/db49df9a4a891aa205002ed1b15af8876e7a34fc/hub/2023/01/18/7e0b3b80-c5df-475d-b9c2-3eb153148c9e/apple-homepod-hero-230118-big-jpg-large.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2023-01-19T15:05:55Z",
            "content": "Apple unveiled its second-gen HomePod on Wednesday, nearly two years after it discontinued the first HomePod. CNET was on hand at the company's event in New York City to hear the new speaker in perso… [+5980 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Tom Warren, Sean Hollister",
            "title": "Testing Nvidia's GeForce Now RTX 4080, the most advanced cloud gaming platform yet - The Verge",
            "description": "Nvidia has upgraded its highest-end GeForce Now servers to RTX 4080-class GPUs, allowing them to play 1080p games at 240Hz for unprecedented low latency from the cloud or 4K and 120Hz for better quality.",
            "url": "https://www.theverge.com/23561989/nvidia-geforce-now-rtx-4080-price-reflex-hands-on-cloud-gaming",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/LHq-pvMrj1IWPJ_MEyELnkI-j5A=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24371088/GeForce_NOW_Ultimate_membership_7ffab558_afea_484c_a200_d5672d18ced4_prv.jpg",
            "publishedAt": "2023-01-19T14:00:00Z",
            "content": "For $20 a month, Nvidia will rent you an RTX 4080 gaming PC in the cloud. It feels phenomenal in some games, but theres still work to be done. \r\nByTom Warren and Sean Hollister\r\nJan 19, 2023, 2:00 PM… [+9051 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Caitlin McFall, Liz Friden",
            "title": "Russia's Medvedev warns of nuclear fallout if Russia defeated by NATO arms in Ukraine - Fox News",
            "description": "Ally of Russian President Vladimir Putin and Deputy Chairman of Russia's Security Council Dmitry Medvedev warned NATO allies Thursday that a defeat for Russia in Ukraine could mean nuclear war.",
            "url": "https://www.foxnews.com/world/russia-medvedev-warns-nuclear-fallout-russia-defeated-nato-arms-ukraine",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/GettyImages-1246344059.jpg",
            "publishedAt": "2023-01-19T13:00:00Z",
            "content": "Ardent ally of Russian President Vladimir Putin and Deputy chairman of Russias Security Council Dmitry Medvedev on Thursday warned NATO allies that a defeat for Russia in Ukraine could provoke a nucl… [+3075 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Idaho murders: Stained pillow and glove seized from Idaho suspect's home - BBC",
            "description": "The police are yet to find a murder weapon or a motive for the murders of four university students.",
            "url": "https://www.bbc.com/news/world-us-canada-64325420",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3498/production/_128346431_6ff728240efa5bd924c6e1d8f433ec2fbea33b40592_573_4549_25594549x2559.jpg",
            "publishedAt": "2023-01-19T12:59:07Z",
            "content": "A reddish-brown stained pillowcase and hair strands are among the items seized by the police from Idaho murder suspect Bryan Kohberger's apartment, according to an unsealed search warrant. \r\nMr Kohbe… [+1725 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor from news component")

        this.state = {
            articles: this.articles,
            loading: false
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" imageUrl="https://image.cnbcfm.com/api/v1/image/107044749-1649679626866-gettyimages-1239909108-AA_11042022_684346.jpeg?v=1674151822&w=1920&h=1080" newsUrl="TODO"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News