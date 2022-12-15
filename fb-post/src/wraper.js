import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Post from './components/post.component';

export default class Wraper extends Component {
  
  state={
    postData:[
        {
            id:1, 
            name:"Md Sahadat Hossen",
            date:"15 Dec 2022",
            txt:"একবার এক পর্যটক মেক্সিকোয় গেলেন; জেলেদের মাছের খুব প্রশংসা করলেন। তারপর বললেন,“আচ্ছা, মাছ ধরতে আপনাদের কত সময় লাগে?”“বেশিক্ষণ না” জেলেদের এক কথার উত্তর।“তাহলে আপনারা আরও বেশি সময় দিয়ে আরও বেশি মাছ ধরেন না কেন?” লোকটা",
            pic:"sahadat.png",
            like:true
        },
        {
            id:1, 
            name:"Afroza Khatun",
            date:"01 Jan 2023",
            txt:"এই যুবক আমাদের পিতাকে হত্যা করেছে। আমরা এর বিচার চাই। দোষী যুবককে টেনে-হিঁচড়ে খলীফার দরবারে নিয়ে এসেছেন দুই ব্যক্তি। তারা তাদের পিতার হত্যার বিচার চান। খলীফা হযরত উমর (রা) সেই যুবককে জিজ্ঞেস করলেন যে তার বিপক্ষে করা অভিযোগ সত্য  কিনা। অভিযোগ স্বীকার করল যুবক। দোষী যুবক সেই ঘটনার বর্ণনা দিলঃ",
            pic:"IMG_20220624_184819.jpg",
            like:false
        },
    ]
  }

  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='m-auto mt-3' style={{ maxWidth:'700px', }}>
            {
                this.state.postData.map( (post, key) => (
                    <Post key={key} info={post}/>
                ) )
            }
            </div>
        </React.Fragment>
    )
  }
}
