$(document).ready(function () {
    // Smooth Scrolling
    $(".nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
function toggleReadMore() {
    var hiddenText = document.querySelector(".hidden-text");
    var btn = document.querySelector(".btn-custom");

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        hiddenText.style.display = "none";
        btn.innerText = "Read More";
    }
}
$(document).ready(function() {
    // Hover effect for cards
    $(".offer-card").hover(function() {
        $(this).css('transform', 'scale(1.05)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    // Trigger modals
    $("#learning-module").click(function() { $("#infoModal").modal("show"); });
    $("#media-library").click(function() { $("#mediaLibraryModal").modal("show"); });
});
$(document).ready(function() {
    $('.news-card, .offer-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        }, function() {
            $(this).css('transform', 'scale(1)');
        }
    );
});
$(document).ready(function(){
$("#learning-module").click(function(){
    $("#infoModal").modal("show");
});
});
$(document).ready(function(){
$("#resources-data").click(function(){
    $("#dataModal").modal("show");
});
});
$(document).ready(function(){
$("#resources-data").click(function(){
    $("#medialibrary").modal("show");
});
});

 // Trigger Modal for Webinars
 $(document).ready(function(){
    $("#webinars-card").click(function(){
        $("#webinarModal").modal("show");
    });
});
 // Trigger Modal for Training & Support
 $(document).ready(function(){
    $("#training-support").click(function(){
        $("#trainingSupportModal").modal("show");
    });
});
$(document).ready(function() {
    // Filtering with topic buttons
    $(".filter-btn").click(function() {
        var category = $(this).attr("data-category");
        filterVideos(category);
    });

    // Filtering with dropdown
    $("#filter").on("change", function() {
        var category = $(this).val();
        filterVideos(category);
    });

    // Function to filter videos
    function filterVideos(category) {
        if (category === "all") {
            $(".video-box").show();
        } else {
            $(".video-box").hide();
            $('.video-box[data-category="' + category + '"]').show();
        }
    }
      // Load More Functionality (Dummy Example)
      $(".btn-load").click(function() {
        alert("Load more videos...");
    });
});
$(document).ready(function(){
    $("#media-library").click(function(){
        $("#mediaLibraryModal").modal("show");
    });
});
 // Sample News Data (Can be replaced with API fetch later)
 const newsData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlx5zlHs_OKf947yNNPVjpBKD_1f5SlDYkw&s",
        title: "New Deaf Awareness Course",
        shortDesc: "Explore our latest course designed to raise awareness and inclusion.",
        fullDesc: `
            This course educates people about deaf culture and sign language, fostering inclusion and accessibility. 
            It aims to help individuals communicate better with the deaf community and promote inclusivity in education and workplaces.
        `
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOSIbL8GceXYrM17x1puORxoIkPQiaywfg&s",
        title: "Empowering Students",
        shortDesc: "See how we support deaf students in their educational journey.",
        fullDesc: `
            Through specialized programs, we provide resources and mentorship to help students excel academically and in their careers. 
            This includes scholarships, mentorship programs, and access to quality learning materials.
        `
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0-NxCBJzG2RPKebwbZAE1VEruovdhZ2m5A&s",
        title: "Inclusive Programs",
        shortDesc: "Discover new programs designed for accessibility and engagement.",
        fullDesc: `
            We are launching inclusive programs that use Indian Sign Language (ISL) to ensure better communication for the deaf community. 
            These programs focus on accessibility, education, and job training opportunities.
        `
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4xLpxCEpupCp_K06XAB5mGF9RmB0cxVcnQ&s",
        title: "ISLRTC Expands",
        shortDesc: "ISLRTC is expanding its programs to reach more people nationwide.",
        fullDesc: `
            With new partnerships and funding, ISLRTC is increasing the number of training centers and developing new courses to promote ISL. 
            More deaf students will now have access to quality education and career opportunities.
        `
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHY_j1TQLTVM6Szj1n-xHJ4S_1NdUEPivAQ&s",
        title: "New Sign Language Dictionary",
        shortDesc: "ISLRTC launches a new digital sign language dictionary for learners.",
        fullDesc: `
            The digital dictionary will feature thousands of ISL signs with video explanations to help students and teachers. 
            This initiative aims to make ISL learning more accessible across India.
        `
    }
];

// Function to Load News Data
function loadNews() {
    const container = document.getElementById("news-container");
    container.innerHTML = ""; // Clear existing content

    newsData.forEach((news, index) => {
        const newsHTML = `
            <div class="col-md-4 mb-3">
                <div class="news-card">
                    <img src="${news.img}" alt="News ${index + 1}">
                    <h4>${news.title}</h4>
                    <p>${news.shortDesc}</p>
                    <div class="read-more-content">
                        <p>${news.fullDesc}</p>
                    </div>
                    <button class="read-more-btn">Read Article</button>
                </div>
            </div>
        `;
        container.innerHTML += newsHTML;
    });

    // Attach event listeners for "Read More" buttons
    document.querySelectorAll(".read-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.previousElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.innerText = "Read Less";
            } else {
                content.style.display = "none";
                this.innerText = "Read Article";
            }
        });
    });
}

// Load News on Page Load
document.addEventListener("DOMContentLoaded", loadNews);
