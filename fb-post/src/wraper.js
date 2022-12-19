import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Post from './components/post.component';

export default class Wraper extends Component {
  
  state={
    posts:[
        {
            id:1, 
            title:"মনোযোগের সহিত কাজ করছি, Don't Distrub Me!!!",
            date:"15 Dec 2022 | 10:05 PM",
            txt:"একবার এক পর্যটক মেক্সিকোয় গেলেন; জেলেদের মাছের খুব প্রশংসা করলেন। তারপর বললেন,“আচ্ছা, মাছ ধরতে আপনাদের কত সময় লাগে?”“বেশিক্ষণ না” জেলেদের এক কথার উত্তর।“তাহলে আপনারা আরও বেশি সময় দিয়ে আরও বেশি মাছ ধরেন না কেন?” লোকটা",
            pic:"sahadat.png",
            like:true,
            dislike: false
        },
        {
            id:3, 
            title:"ফাতিমা বিনতে শাহাদাৎ (আফিয়া)",
            date:"30 Oct 2020 | 05:04 AM",
            txt:"এই যুবক আমাদের পিতাকে হত্যা করেছে। আমরা এর বিচার চাই। দোষী যুবককে টেনে-হিঁচড়ে খলীফার দরবারে নিয়ে এসেছেন দুই ব্যক্তি। তারা তাদের পিতার হত্যার বিচার চান। খলীফা হযরত উমর (রা) সেই যুবককে জিজ্ঞেস করলেন যে তার বিপক্ষে করা অভিযোগ সত্য  কিনা। অভিযোগ স্বীকার করল যুবক। দোষী যুবক সেই ঘটনার বর্ণনা দিলঃ",
            pic:'afia.png',
            like:false,
            dislike: true
          },
          {
            id:2, 
            title:"Afroza Khatun",
            date:"01 Jan 2023 | 09:56 PM",
            txt:`ইসলাম একাধিক বিয়ের অনুমতি দেয়। একাধিক বিয়েতে উৎসাহ দেয় না। কোরানের যেই আয়াতকে আমরা ২-৩-৪ বিয়ের পক্ষে দলীল হিসেবে ব্যবহার করি, সে আয়াতে স্ত্রী গ্রহণের সর্বোচ্চ সীমা ৪ পর্যন্ত নির্দিষ্ট করা হয়েছে। আর এই আয়াত এমন এক সময় অবতীর্ণ হয় যখন একেকজনের ৮-১০জন করে স্ত্রী থাকতো। এমনকি শতাধিক‌ও ছিল। স্ত্রী গ্রহণের ক্ষেত্রে কোনো নির্দিষ্ট সীমা বা নিয়ম ছিল না। ইসলাম এই ব্যাপারটাকে একটা শৃঙ্খলার মধ্যে আনে, কিছু নিয়ম শর্ত বেঁধে দেয়। কিন্তু আমরা সেই আয়াতকে এমনভাবে ব্যাখ্যা করি যেন ইসলাম ২-৩-৪ বিয়েতে উৎসাহিত `,
            pic:"IMG_20220624_184819.jpg",
            like:false,
            dislike: false
        },
    ]
  }

  handleLike = (id) => {
    // console.log(`click like btn => ${id}`);
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id===id);
    if(post.dislike === true){
      post.dislike = false;
      post.like    = true;
    }else{
      post.like = !post.like;
    }
    this.setState({ posts });
  }

  handleDislike = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id===id);
    if(post.like===true){
      post.like = false;
      post.dislike = true;
    }else{
      post.dislike = !post.dislike;
    }
    // post.like===false ? post.dislike=!post.dislike : alert('You are already like this!');
    this.setState({posts});
  }

  handleRemove = (id) => {
    const posts = [...this.state.posts];
    const updatePost = posts.filter( post => post.id !== id )
    this.setState({posts:updatePost })
  }

  likeCount = () => {
    let count = 0;
    this.state.posts.map( post => post.like === true ? count++ : '')
    return count;
  }

  dislikeCount = () => {
    let counter = 0;
    this.state.posts.forEach( post => {
      if(post.dislike === true) counter++
    } )
    return counter;
  }

  render() {
    return (
        <React.Fragment>
            <Navbar like={this.likeCount} dislike={this.dislikeCount}/>
            <div className='m-auto mt-3' style={{ maxWidth:'700px', }}>
            {
                this.state.posts.map( (post, key) => (
                    <Post 
                      key={key} 
                      info={post} 
                      handleLike={this.handleLike}
                      handleDislike={this.handleDislike}
                      handleRemove={this.handleRemove}
                    />
                ) )
            }
            </div>
        </React.Fragment>
    )
  }
}
