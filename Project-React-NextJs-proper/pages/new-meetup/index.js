import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetUpHandler = (enteredMeetupData) => {
    return enteredMeetupData
  };

  return (
    <NewMeetupForm onAddMeetup={addMeetUpHandler} />
  );
};

export default NewMeetupPage;