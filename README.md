# DevTinder -> DevConnections

- Created a Vite + React application
- Remove unncessary code and create a Hello world app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar components to App.js
- Create a NavBar.jsx seperate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route =/ Body > RouteChildren
- Create an Outlet in your Body component
- Create a footer

- Install axios
- CORS - Install cors in backend -> add middleware to with configurations: origin , credentials:true
- Whenever You'r making an axios call so pass axios => {withcredentials: true}

- Install Redux toolkit -  
- Install react-redux + @reduxjs/toolkit => configurations => Provider  => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refractor our code to add constant file + create a component folder
- You should not be able access other routes without login
- If token is not present, redirect user to login page 
- Logout features
- Get the feed and add the feed in the store
- Build the user card on feed
- Build the user profile and edit profile section
- show Toast Message on save of profile
- Build the feed UI 
- New Page - See all my connections
- New Page - See all my connection Requests
- Features - Accept /Reject Connection Request
- Send/Ignore the user card from the feed



*****************
Deployment
- Sign UP on AWS
- Launch instance
- chmod 400 <secretKey.pem>
- ssh -i "DevConnections-secret.pem" ubuntu@ec2-13-49-240-45.eu-north-1.compute.amazonaws.com
- Install Node version 
- Git clone 'https.gitHub-repo'
***** FrontEnd*****
- npm install -> dependencies install
- npm run build
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- Copy code from dist(build files) to /var/www/html (nginx server)
- sudo scp -r dist/* /var/www/html/
- Enable port 80
- Now frontEnd deployed(working)

************BackEnd*******
- allowed ec2 instance public IP on mongodb server
- installed pm2 -g
- pm2 start npm -- start
- pm2 logs
- pm2 flush <name>, pm2 stop <name>, pm2 delete<name>, pm2 list
- config nginx - /etc/nginx/sites-available/default
- restart nginx - sudo systemctl restart nginx
- Modify the BaseURL in frontEnd project to "/api"

    nginx config : 

    server_name 13.49.240.45;

    location /api/ {
        proxy_pass http://localhost:7777/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }




