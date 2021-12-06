## What is SiliconGram? 
The coolest thing since sliced bread. Social networking - but better  :white_check_mark:

# The User Journey is the Destination 
Consists of several pages:
- signup
- login 
- timeline
- dashboard
- stateful profile page


# Setup - Pied Piper Style:
- npm i or use yarn - then set to take off :rocket:
- can sign up as a new user or use mock user on sign in 
  - UN: PatrickMahomes@gmail.com 
  - PW: MVPMVP 
- Note: call the seedDatabase only once in lib/firebase to prevent repeated data  

# Stack of Tech 
- JavaScript :memo:
- React Hooks :art:
- React Context :recycle:
- CSS - but from the tail (tailwind) :tada:
- A database that's on fire (Firebase) :fire: 
- Validation/Authentication via Firebase :bulb:


# Some tradeoffs and design choices that *might* keep you up at night 
- For choice of database, intially wanted to model IG clone off of what the company uses (two backend database systems: PostgreSQL and Cassandra). However, since the goal of this project was to get set up quickly, firebase was a better bet. When evaluating what database to use, it's important to take account of the scope of the product(s), scalability and flexibility to see whether a relational or other non-relational database is a better choice. Though PostgreSQL is more scalable for bigger, more complex data, Firebase is the better tool for this job since it has authentication baked in with the data store necessary for Silicongram IG

- Ordinarily would save users in CDN like an AWS S3 rather than storing it on a disk for better scalability 
- Use webpack for complex instances like server side rendering or optimizations around bundling in a production environment vs CRA
- Since TailwindCSS is a mobile utility-first framework to speed up the design process, it was great for responsive design, without the need to have media queries, since there are preexisting set values for each device width. 
- Commonly used fragments for grouping list of children and for accessibility reasons (more efficient in screen readers)  
   - inserted alt text on images and aria-labels on text for a similar reason 
- Integration of react memo to prevent unnecessary rerenders and optimize performance 
- For this exercise used PropTypes to typecheck application and catch potential bugs - for larger more complex applications, TypeScript or Flow are better  

# Stretch them features  
- Create mechanism for user generated content 
- Streamline posting feature so user comments are clearer, accessible and interactive 
- Integrate testing library to catch bugs as codebase scales 
- Save users in a more scalable environment 
- Create mechanism for users to share images or change their profile image 

# Preview

![Preview](igs-preview.png?raw=true)
