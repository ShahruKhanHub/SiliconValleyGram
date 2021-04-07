## What is silicongram? 
Social networking - but more silicony 

# The User Journey is the Destination 
Consists of several pages:
- signup
- login 
- timeline
- dashboard

# Setup - Pied Piper Style:
- npm i or use yarn and you are set to take off 
- Note: call the seedDatabase only once in lib/firebase to prevent repeated data  

# Stack of Tech 
- JavaScript 
- React Hooks 
- React Context
- CSS - but from the tail (tailwind) 
- A database that's on fire (Firebase)  

# Some tradeoffs and design choices that might keep you up at night 
- For choice of database, intially wanted to model IG clone off of what the company uses (two backend database systems: PostgreSQL and Cassandra). However, since the goal of this project was to get set up quickly, firebase was a better bet. When evaluating what database to use, it's important to take account of the scope of the product(s), scalability and flexibility to see whether a relational or other non-relational database is a better choice. 

- Ordinarily would save users in CDN like an AWS S3 rather than storing it on a disk for better scalability 
- Use webpack for complex instances like server side rendering or optimizations around bundling in a production environment vs CRA
- Since TailwindCSS is a mobile utility-first framework to speed up the design process, it was great for responsive design, without the need to have media queries, since there are preexisting set values for each device width. 
- Commonly used fragments for grouping list of children and for accessibility reasons (more efficient in screen readers)  
   - inserted alt text on images and aria-labels on text for a similar reason 
- Integration of react memo to prevent unnecessary rerenders and optimize performance 
- For this exercise used PropTypes to typecheck application and catch potential bugs - for larger more complex applications, TypeScript or Flow are better  

# Preview

![Preview](igs-preview.png?raw=true)
