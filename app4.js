
        function showInput() {
            var inputContainer = document.getElementById("inputContainer");
            inputContainer.style.display = "block";
        }

        function saveReview() {
            var reviewInput = document.getElementById("inputReview").value;
            if (reviewInput.trim() === "") {
                alert("Vui lòng nhập đánh giá trước khi lưu.");
                return;
            }

            var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
            reviews.push(reviewInput);
            localStorage.setItem("reviews", JSON.stringify(reviews));

            displayReviews();
        }

        function displayReviews() {
            var feedbacksContainer = document.getElementById("feedbacks");
            feedbacksContainer.innerHTML = "";

            var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

            reviews.forEach(function (review) {
                var feedbackCard = document.createElement("div");
                feedbackCard.classList.add("feedback-card");

                var content = document.createElement("div");
                content.classList.add("rang");
                content.innerHTML = "<p>" + review + "</p>";

                feedbackCard.appendChild(content);
                feedbacksContainer.appendChild(feedbackCard);
            });
        }

        window.onload = function () {
            displayReviews();
        };
    