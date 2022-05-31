import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback 3",
      rating: 7,
    },
    {
      id: 4,
      text: "This is feedback 4",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;

    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (
      window.confirm("Are you sure you want to delete this feedback?")
    ) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
