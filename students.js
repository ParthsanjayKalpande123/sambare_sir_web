<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

  
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // IMPORTANT: Replace 'YOUR_YOUTUBE_API_KEY' with your actual YouTube Data API Key
            // You can get one from Google Cloud Console: https://console.cloud.google.com/apis/credentials
            const YOUTUBE_API_KEY = 'AIzaSyA0w_VYJbmcr-NIxb4stjRhhDksPonB7Ac'; 

            const videoIds = [
                "eZchmVlsa7s", // Rick Astley - Never Gonna Give You Up (Placeholder)
                "bkSWJJZNgf8", // Example: A random tech video (replace with your actual video IDs)
                "kLwJ0k1QJ0Q", // Example: Another random video
                "abc123XYZ" // Example: Another random video
            ];

            // Function to fetch video details from YouTube Data API
            async function fetchVideoDetails(videoId) {
                const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    if (data.items && data.items.length > 0) {
                        const snippet = data.items[0].snippet;
                        return {
                            title: snippet.title,
                            youtubeId: videoId
                        };
                    } else {
                        console.warn(`No video details found for ID: ${videoId}`);
                        return {
                            title: "Video Title Not Found",
                            description: "Could not retrieve video description.",
                            youtubeId: videoId
                        };
                    }
                } catch (error) {
                    console.error(`Error fetching video details for ID ${videoId}:`, error);
                    return {
                        title: "Error Loading Video",
                        description: "Failed to load video details. Please check your API key or network connection.",
                        youtubeId: videoId
                    };
                }
            }

            // Function to render video cards
            async function renderVideoCards() {
                const videoLecturesListDiv = document.getElementById('video-lectures-list');
                videoLecturesListDiv.innerHTML = ''; // Clear existing content

                for (const videoId of videoIds) {
                    const video = await fetchVideoDetails(videoId);
                    const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`; // High quality thumbnail
                    const youtubeVideoUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

                    const videoCardHtml = `
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card content-card fade-in-card">
                                <div class="video-thumbnail-container">
                                    <a href="${youtubeVideoUrl}" target="_blank" rel="noopener noreferrer">
                                        <img src="${thumbnailUrl}" alt="Video Thumbnail: ${video.title}" onerror="this.src='https://placehold.co/480x270/e0e0e0/555555?text=Video+Unavailable'">
                                        <i class="fas fa-play-circle play-icon"></i>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="video-title">${video.title}</h3>
                                    <p class="video-description">${video.description}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    videoLecturesListDiv.insertAdjacentHTML('beforeend', videoCardHtml);
                }

                // Re-apply fade-in animation after new cards are loaded
                const fadeInCards = document.querySelectorAll('.fade-in-card');
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.2
                };
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                fadeInCards.forEach(card => {
                    observer.observe(card);
                });
            }

            // Call the function to render video cards on page load
            renderVideoCards();


            const assignments = [
                {
                    id: 1,
                    title: "Assignment 1: Algorithm Analysis",
                    dueDate: "2025-07-25",
                    description: "Analyze the time complexity of given algorithms and propose optimizations. Submit your detailed report in PDF format.",
                    status: "Open"
                },
                {
                    id: 2,
                    title: "Assignment 2: Graph Traversal",
                    dueDate: "2025-08-08",
                    description: "Implement BFS and DFS algorithms for a given graph structure. Provide your code and a brief explanation.",
                    status: "Open"
                },
                {
                    id: 3,
                    title: "Project Proposal: Final Project",
                    dueDate: "2025-08-22",
                    description: "Submit a detailed proposal for your final course project, outlining your chosen topic, methodology, and expected outcomes.",
                    status: "Open"
                },
                {
                    id: 4,
                    title: "Quiz 1: Data Structures Basics",
                    dueDate: "2025-07-18",
                    description: "A short quiz covering fundamental data structures like arrays, linked lists, and trees.",
                    status: "Closed" // Example of a closed assignment
                }
            ];

            const assignmentsListDiv = document.getElementById('assignments-list');
            assignments.forEach(assignment => {
                const assignmentCardHtml = `
                    <div class="col-12 col-md-6 col-lg-4 d-flex">
                        <div class="card content-card assignment-card fade-in-card">
                            <div class="card-body">
                                <h3 class="assignment-title">${assignment.title}</h3>
                                <p class="assignment-details">
                                    <i class="far fa-calendar-alt me-2"></i> Due: ${assignment.dueDate}
                                </p>
                                <p class="assignment-details">
                                    <i class="fas fa-info-circle me-2"></i> Status: <span class="assignment-status ${assignment.status.toLowerCase()}">${assignment.status}</span>
                                </p>
                                <p class="assignment-details">${assignment.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                assignmentsListDiv.insertAdjacentHTML('beforeend', assignmentCardHtml);
            });

            // Assignment Upload Form Submission (Now handled by PHP backend)
            const uploadForm = document.getElementById('assignment-upload-form');
            const uploadStatus = document.getElementById('upload-status');

            uploadForm.addEventListener('submit', async function(event) {
                event.preventDefault(); // Prevent default form submission

                const formData = new FormData(uploadForm); // Get form data including the file
                
                uploadStatus.textContent = 'Submitting assignment...';
                uploadStatus.style.display = 'block';
                uploadStatus.classList.remove('text-success', 'text-danger');
                uploadStatus.classList.add('text-info'); // Use info color for loading

                try {
                    const response = await fetch(uploadForm.action, {
                        method: 'POST',
                        body: formData
                    });

                    const result = await response.json(); // Assuming PHP returns JSON

                    if (response.ok) {
                        uploadStatus.textContent = result.message || 'Assignment submitted successfully!';
                        uploadStatus.classList.remove('text-info', 'text-danger');
                        uploadStatus.classList.add('text-success');
                        uploadForm.reset(); // Clear form on success
                    } else {
                        uploadStatus.textContent = result.message || 'Error submitting assignment. Please try again.';
                        uploadStatus.classList.remove('text-info', 'text-success');
                        uploadStatus.classList.add('text-danger');
                    }
                } catch (error) {
                    console.error('Network error during assignment submission:', error);
                    uploadStatus.textContent = 'Network error. Could not connect to the server.';
                    uploadStatus.classList.remove('text-info', 'text-success');
                    uploadStatus.classList.add('text-danger');
                }

                // Hide status message after a few seconds
                setTimeout(() => {
                    uploadStatus.style.display = 'none';
                }, 7000);
            });

            // JavaScript for fade-in animation on scroll (for assignments and initial load)
            const allFadeInCards = document.querySelectorAll('.fade-in-card'); // Select all cards for observation

            const overallObserverOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const overallObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, overallObserverOptions);

            allFadeInCards.forEach(card => {
                overallObserver.observe(card);
            });
        });
  