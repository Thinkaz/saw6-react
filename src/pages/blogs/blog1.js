import React from 'react';

import { Footer } from '../../components/footer.js';
import { Blogb } from '../../components/blogb.js';
import '../../components/css/style.css';


export const Blog1 = () => {
  const txt = [
    'Welcome to the s&amp;rp blog!',
    <br />,
    <br />,
    'We will be posting regular development updates here, along with other random things we think are cool enough to show all of you! Our goal here is to provide a fantastic RP gamemode for s&amp;box, and leave behind all that garbage from DarkRP based gamemodes.',
    <br />,
    <br />,
    'Feel free to join our discord',
    <br />,
    <br />,
    "We are also looking for a modeler to help us out with things, if you think you're up to the task, join the discord and message myself or Zeo."
  ];
  return (
    <div>
      <Blogb
        title="Hello!"
        author="Saw_6"
        avatar="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8a/8a1886d9f6ff13ec736adad933584aa7d9d04c6d_medium.jpg"
        date="May 03, 2021"
        img="https://getwallpapers.com/wallpaper/full/8/3/8/878774-raptor-jesus-wallpaper-1920x1080-full-hd.jpg"
        txt={txt}
      />
      <Footer />
    </div>
  );

}