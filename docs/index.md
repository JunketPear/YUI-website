---
layout: home

hero:
  name: YUI动漫社
  text: 西北农林科技大学
  tagline: 以热爱为名，共赴二次元之约
  image:
    src: http://pic.nwafu.xyz/images/0000000000000000000000003b8a09ad0000000000000000000000003b8a09ad/1760937426486-bi77cilb-img_mgyoodto_fne3bt.png
    alt: YUI动漫社Logo
  actions:
    - theme: brand
      text: 查看社团活动
      link: /markdown-examples
    - theme: alt
      text: 加入我们
      link: /api-examples

features:
  - icon: 🎭
    title: 宅舞表演
    details: 精彩绝伦的宅舞演出，让你感受二次元的魅力与活力。
  - icon: 🎵
    title: 动漫音乐
    details: 经典动漫歌曲演唱与演奏，带你重温那些年追过的番剧。
  - icon: 📸
    title: 摄影展示
    details: 社团活动精彩瞬间记录，留住每一个美好回忆。
  - icon: 👥
    title: 社交聚会
    details: 定期举办社团聚会，结识更多志同道合的朋友。
  - icon: 🎨
    title: 创意手工
    details: 动漫周边制作与交换，发挥你的创意与想象力。
  - icon: 🎤
    title: 声优表演
    details: 经典角色配音表演，体验成为声优的乐趣。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ff7bac, #a26bf7);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ff7bac 50%, #a26bf7 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

.VPHomeFeatures .item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.VPHomeFeatures .item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(162, 107, 247, 0.2);
}

.dark .VPHomeFeatures .item:hover {
  box-shadow: 0 12px 24px rgba(162, 107, 247, 0.4);
}
</style>