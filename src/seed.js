/**
 * @Purpose : seed file populates firebase database with array of users and links to images
 * @Function : once called, we are passing firebase object that populates database (note only want to run once to prevent duplicate data)   
 * * */ 
 
// NOTE: current userID is connected with Patrick Mahomes; if you are not using the same user id replace with your Firebase auth user id (can be taken from Firebase) 
  // this is necessary to link an account with firestore: this connect ultimately allows one user to follow another user
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'IJoUSnJ4ccdiPgdikFb5Qhyzftj2',
      username: 'Patrick',
      fullName: 'Patrick Mahomes',
      emailAddress: 'PatrickMahomes@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'Rich',
      fullName: 'Richard Hendricks',
      emailAddress: 'RichardHendricks@yahoo.com',
      following: [],
      followers: ['IJoUSnJ4ccdiPgdikFb5Qhyzftj2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'Dinesh',
      fullName: 'Dinesh',
      emailAddress: 'Dinesh@yahoo.com',
      following: [],
      followers: ['IJoUSnJ4ccdiPgdikFb5Qhyzftj2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'Erlich',
      fullName: 'Erlich Bachman',
      emailAddress: 'Erlich@yahoo.com',
      following: [],
      followers: ['IJoUSnJ4ccdiPgdikFb5Qhyzftj2'],
      dateCreated: Date.now()
    }
  ];
  // iterates user array to add users to collection of users (in this case creating four documents) 
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // inserting photos (object) to collection: have five photos
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/rich/${i}.jpg`,
        caption: `It's pretty cool right?`,
        likes: [],
        comments: [
          {
            displayName: 'Dinesh',
            comment: `Love this place! Don't tell Erlich you went here`
          },
          {
            displayName: 'Erlich',
            comment: 'What the heck? I thought you were working! Bring me with you next time'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
