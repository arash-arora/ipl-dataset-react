## IPL Dashboard which gives you an insight of matches played by participating teams

# Frameworks used
- Next.js : React-based Server Side Framework 

# DBs used
- MongoDB : NOSQL database (document-based)

# Libraries used 
- mongodb : for mongodb
- recharts : for charts
- tailwindcss : for styling (also autoprefixer, postcss as other libraries)
- react-icons : to insert icons

# Bonus Points 
- I have used Next.js, which is a react-based server side framework
- It is mobile responsive
- The code is optimized thus we can easily pass the props to create other charts
- I've used version control system to manage the code (GitHub)
- The web app is hosted on vercel
- Offline usable unto certain extent

# Features 
## Charts 
- To create the charts, I've requested the data from the mongodb atlas. Applied some logics to build appropriate charts
### Charts currently built:
- Bar charts: to showcase how many times a player won the man of the match title
- Pie charts: to showcase the total matches won by each team

## Tables of the IPL data
 - Fetched the data from database
 - Applied some logic
 - Create a table for showcasing the data like
   - Team wise stats
   - Matches won by each team
   
## Mobile Responsive
 - Used tailwindcss framework of css to apply styles
 - To optimise the code, I've created different components to be able to reuse them easily
 
### As the man of the match title was entitled to over 200 people, so I've manages to showcase just top 5 players with an option to view more.
