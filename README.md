I have created a video stream service where you can upload videos and clips directly from the s3 bucket.

I use AWS services like (AWS S3, CLOUDFRONT and also REACT for the front-end of the app) 

First I started by creating a bucket in AWS S3 so i can use it to store the videos that i will be uploading.

Now we create a CloudFront and configure access to the S3 bucket.

Followed it up by creating a access control setting for CloudFront, (Origin Access).

This was needed for CloudFront distribution to use when creating.

Create the distribution and while that take time to deploy, update the S3 bucket policy by copying 

the pop up and pasting it into the permision bucket policy json and paste, save to update it.

I uploaded a video into the bucket then I copy the domain name url in CloudFront pasted it into the 

url bar add a / then copy the S3 bucket key url and paste it after the /, search and your video that

you placed in the S3 bucket should pop up. 

Now we build the front-end with React to serve content to consumers.

Since I build the Website from scratch I open the terminal from my VS code software and use the Cmd

npx create-react-app-video-streaming-service
cd video-streaming-service

I added a header to my App.js file in src for the title of the website saying
<h2>Welcome to My Awsome Video Streaming Site</h2>

Added text alignment for the site in my App.css file

also i added the width and height format of the video and implementing controls to the videos like fullscreen, volume button, download, playbackspeed, picture in picture and a play button to pause whenever.