# Cpnt262-a5 -

#  JSON Server with Heroku and MongoDB Atlas

by Lynn Chen  Nov,13,2020



## Links

- Heroku URL: https://cpnt262a5.herokuapp.com/api/v0/products shows "all the products",
              https://cpnt262a5.herokuapp.com/api/v0/products/1 shows "Id1 product",
              https://cpnt262a5.herokuapp.com shows "404: File Not Found".

- GH repo: https://github.com/yanlinchen1985/cpnt262-a5

  


## Attributions

Thanks a lot for my groupmate [**Patrick Bello**](https://github.com/mayorbcode) who helps me a lot to do code review and fix my big problem with using MongoDB Atlas!!

Some code come from Tony's sample code in class [SAIT WBDV](https://sait-wbdv.github.io/)  https://github.com/sait-wbdv/in-class

and [Michael Mardel](https://github.com/aggressiveperfector) (server.js / JSON endpoint )



## Comments

I met a big problem in using MongoDB Atlas. All the things show well in my terminal but I can not find any result shown in my collection on MongoDB Atlas. Then Patrick reviewed my code and fixed the problem of my "Json endpoint" in server.js and import.js. We also found that the database name in the copy code for the "Connect to Cluster" is not necessary , as Tony said "it can be anything you named".

I spent more time on dealing with my Heroku!!! My localhost works well but it showed that App Error after deploying the App. I was sure that I have linked it to my database by setting Config Vars by copy MONGODB_URL from .env. Thanks a lot for Patrick to review my code again, we changed the code "main": "import.js" to "main": "server.js" in package.json, but it did not fix this problem. I remembered that Tony also met this situation, and I checked the logs on Heroku, but it did not help.Is it becasue I change the port too many times? I changed 3000 back to 8080, but it could not help! Then I decided to install Heroku terminal to double-check the log, it said kind of "access the database from an IP that is not whitelisted". So I sat the IP address in Network access like "0.0.0.0/0",but it still couldn't work!!! I tried almost all the ways but it could not work,which really made me crazy! So!I deleted the old app, then created a new one(I also find that Heroku only allows us to set 5 app for free.) and it worked,like both "https://cpnt262a5.herokuapp.com/api/v0/products" and "https://cpnt262a5.herokuapp.com/api/v0/products/1" can work, https://cpnt262a5.herokuapp.com shows "404: File Not Found". So does it mean that I did a mistake when I set the old app? 

Even though I still can not know MongoDB Atlas and Heroku very well, I learned and reviewed more about them through doing this assignment. 

Thank you for teaching!

