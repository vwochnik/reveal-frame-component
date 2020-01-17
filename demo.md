---
layout: default
title: Reveal Frame Component Demo
---
## SoundCloud

<div class="demo-container" style="width:100%">
	<reveal-frame width="100%" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/44739720&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
    <div class="play-button"></div>
	  <p>By clicking, data will be sent to SoundCloud.</p>
	</reveal-frame>
</div>

```
<reveal-frame width="100%" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/44739720&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
  <div class="play-button"></div>
  <p>By clicking, data will be sent to SoundCloud.</p>
</reveal-frame>
```

## YouTube

<div class="demo-container" style="width:560px">
    <reveal-frame width="560" height="315" src="https://www.youtube.com/embed/4YxTa1AUqps" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
      <div class="play-button"></div>
      <p>By clicking, data will be sent to YouTube.</p>
    </reveal-frame>
</div>

```
<reveal-frame width="560" height="315" src="https://www.youtube.com/embed/4YxTa1AUqps" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
  <div class="play-button"></div>
  <p>By clicking, data will be sent to YouTube.</p>
</reveal-frame>
```

## Vimeo

<div class="demo-container" style="width:640px">
	<reveal-frame src="https://player.vimeo.com/video/55904250?title=0&byline=0&portrait=0" width="640" height="360" allow="autoplay; fullscreen">
    <div class="play-button"></div>
    <p>By clicking, data will be sent to Vimeo.</p>
	</reveal-frame>
</div>

```
<reveal-frame src="https://player.vimeo.com/video/55904250?title=0&byline=0&portrait=0" width="640" height="360" allow="autoplay; fullscreen">
  <div class="play-button"></div>
  <p>By clicking, data will be sent to Vimeo.</p>
</reveal-frame>
```
