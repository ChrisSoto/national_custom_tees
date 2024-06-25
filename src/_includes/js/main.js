// FAQS

const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq-answer");

faqQuestions.forEach((question, index) => {
  question.addEventListener("click", () => {
    updateFaq(index);
  });
});

function updateFaq(index) {
  faqQuestions.forEach((question, aIndex) => {
    if (aIndex === index) {
      question.classList.remove("faq-question-inactive");
      question.classList.add("faq-question-active");
    } else {
      question.classList.remove("faq-question-active");
      question.classList.add("faq-question-inactive");
    }
  });

  faqAnswers.forEach((answer, aIndex) => {
    if (aIndex === index) {
      answer.classList.remove("faq-answer-hidden");
      answer.classList.add("faq-answer-active");
    } else {
      answer.classList.remove("faq-answer-active");
      answer.classList.add("faq-answer-hidden");
    }
  });
}

// Reviews

const reviews = document.querySelectorAll(".review");

// set the first three reviews as active and wait for next and previous buttons to be clicked to show more reviews
reviews.forEach((review, index) => {
  if (index < 3) {
    review.classList.remove("hidden");
  }
});