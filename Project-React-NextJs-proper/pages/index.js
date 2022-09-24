
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS =[
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Schloss_Sch%C3%B6nbrunn_Wien_2014.jpg/1280px-Schloss_Sch%C3%B6nbrunn_Wien_2014.jpg',
    address: 'Some address 2, 12345 Some City',
    description: 'This is a third meetup!'
  },
];

const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
};

export default HomePage;
