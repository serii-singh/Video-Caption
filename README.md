
### LINK TO Documentation : (""https://docs.google.com/document/d/1YA5GwgRe6EL_VgEeVr5_yjfwrnqvrIaZdxO_qHanyjY/edit?usp=sharing")

# Project Overview

A simple web app to add captions to a video. This web app lets users input a video URL, add captions with timestamps, and display them on the video. Users can play/pause the video, ensuring seamless captioning and video interaction, providing an easy-to-use captioning solution for hosted content.


# Additional Information

This is the structure and few key functionality of the projects and there are potential improvements ad bug fixation need with refactoring code nad making a different data page or service file for proper Api handling(if required  backend and databases fro users info and data saving etc) .

# Tech Stack :

## Frontend 

React: For building the user interface.
Tailwind CSS : For utility-first styling and responsive design.
React Router: For client-side routing and navigation.

Few dependenices and other libraries could be used like React Hook Form , yup , zod etc for For form handling and validation.

# Requirements
● Allow the user to enter a URL to a hosted video
● Provide the user a text box to enter their captions
● Provide the user a mechanism to provide timestamps for when the captions should be
displayed
● Display the video with captions on it. Let the user pause/play it

# Key Features 

 Enter Video URL:
 Action: The user enters a valid URL (.mp4) into the input field.
 Output: The video is displayed using the <video> & iframe tag depending on the type of hosted url, and playback controls are enabled.

 Upload from device 
 Action : The  user uploads (.mp4) into from the device .
 Output : The video is displayed , and playback controls are enabled.

 Enter Captions with Timestamps:
 Action: The user enters captions along with corresponding timestamps in the format s.
 Output: The captions are stored in a list, with timestamps parsed to seconds.

 Sync Captions with Video:
 Action: As the video plays, JS tracks the current time , comparing it with stored timestamps.
 Output: The correct caption is displayed at the right time, superimposed on the video.

 Pause/Play:
 Action: The user clicks the play/pause button to control the video playback.
 Output: Video playback is paused or resumed.

## Additional Features /  Potential Extensions

 Upload from device(implemented)
 The  user uploads (.mp4) into from the device .

 Download functionality 
 Able to download the video once captioons added .(Potential Extensions)

 Light/Dark mode (implemented)

 Text Reading time in seconds (Potential Extensions)

 Registration and Login(Potential Extensions)

 PROFILE : Created when the useris registered and given an id . On login the user will et access to profile and Email name can predefined and id can be used as unique key . Photos and bio are editable fields and secondary email is a future plan . Responsive and reusable components
(Potential Extensions)

# Strategy 

## Approch 
ABOUT THE PRODUCT AND JOURNEY 


User Journey and Decisions
1. Landing Page

Decision:
Account Creation or Direct Access: The user is presented with the option to create an account or access the app without signing up. For now, the app allows users to skip account creation and proceed directly to the next page.

User Flow:
Clear call-to-action (CTA) buttons for account creation or direct navigation to video selection.

2. Selection Page
Decision:
Video Selection Method: Users decide whether to upload a video from their device or input a URL to a hosted video. Both options are made available for flexibility.
User Flow:
Upload Video: If the user chooses to upload, they are prompted to select a video file (in .mp4 format) from their device.
Enter URL: If the user opts for the URL, they input the URL to the hosted video.

Trade-Off Decision:
Upload from Device vs. URL Input:
Uploading a video from the device might offer higher control over the content but could cause delays due to larger file sizes and potential browser compatibility issues.
Inputting a URL could be more convenient, but it introduces the challenge of ensuring proper URL validation and CORS handling.

3. Caption Editing Page
Decision:
Input Captions with Timestamps: The user is prompted to enter captions for the video, along with corresponding timestamps for when each caption should appear.

Real-Time Caption Sync: As the video plays, captions are displayed in sync with the timestamps. Users can adjust captions using a timeline feature.

Video Player Controls: The video player includes controls such as play/pause, forward/backward, and a timestamp display. Users interact with these to ensure that captions match the video’s timeline.
Trade-Off Decision:

Real-Time Sync vs. Performance: Implementing real-time caption synchronization might impact app performance, especially with large video files. This could lead to a trade-off between ensuring the most accurate caption timing and maintaining smooth performance.

4. Caption Preview & Testing Page
Decision:
Previewing Captions: After entering captions and timestamps, users can preview how the captions will appear during the video’s playback.
Error Handling: Users can adjust captions if the synchronization is off, and any error messages related to invalid timestamps (like overlapping or out-of-range timestamps) are shown.
Testing for Accuracy: Users can test the synchronization and make adjustments to ensure the captions are shown at the right time.

Trade-Off Decision:
Test Synchronization vs. Editing Complexity: Allowing users to test captions while editing can improve accuracy but may increase complexity. Ensuring that the video and captions are aligned requires careful attention to timestamp details.

5. Final Video View
Decision:
Viewing the Completed Video with Captions: Once the captions are synced and final adjustments are made, users can view the complete video with the captions displayed.
Options to Save or Export: After watching the complete video, users have the option to download the video with the added captions, or save the captions in .srt or .vtt formats.

Trade-Off Decision:
Exporting vs. Streaming: Deciding between providing a downloadable version of the video with captions or allowing users to share the video via URL. While downloading ensures offline access, sharing via a link would be simpler and more convenient for users.

6. Save, Export, or Share Page (Potential Feature)
Decision:
Save Captions or Video: Users can choose to download the caption file or the video with the captions embedded. This provides flexibility for users depending on whether they want to keep the file locally or share it.
Social Media or Email Share: As a potential future extension, users may have the option to share the completed video on social media or via email directly from the app.
Trade-Off Decision:

File Size and Compression vs. Quality: The decision on whether to offer high-quality downloads for videos or compressed formats. Higher quality ensures better viewing but results in larger file sizes, which might cause slow downloads.

7. Final Page
Decision:
New Video or Exit: Once the user completes the process, they are given the option to either start editing a new video or exit the app.
Flow Improvement: An optional “Back to Homepage” button can guide users to a fresh start or allow them to upload a new video if desired.

Trade-Off Decision:
User Engagement vs. Simple Exit: Allowing users to continue editing a new video encourages more usage, while providing a clear exit ensures a seamless conclusion to the task.


### Goals:
Make it easy for users to add captions to videos.
Ensure the interface is simple and user-friendly.
Provide video control functionalities like play/pause and caption synchronization.
 
### Technical Decisions

### Choice of Technologies:

React: Helps build a dynamic and scalable UI, ensuring that the app responds quickly to changes in state (like video playback or timestamp input).
Tailwind CSS: Simplifies styling and ensures that the app is mobile-friendly and responsive, which is key for user experience.
React Router: Allows for easy navigation between different parts of the app without reloading the page, providing a smooth experience.
React Hook Form, Yup, Zod: Enables efficient and type-safe form handling with validation, which is essential for managing captions and timestamps.

Using React for building the user interface, Tailwind CSS for styling, React Router for routing, and React Hook Form, Yup, or Zod for form handling and validation is a modern, highly efficient stack for developing the video captioning app as it fulfiles all the needs . This stack ensures high performance, scalability, maintainability, and a great developer experience.


### Entity-Relationship Diagram (ERD)
While the app is mainly frontend-based, it may require some basic data modeling if we save the captions and timestamps. Here’s a simple ERD for the data structure:


+---------------------+       +----------------------+
|       Video         |       |       Caption        |
+---------------------+       +----------------------+
| video_id (PK)       |<----->| caption_id (PK)      |
| video_url           |       | video_id (FK)        |
| video_title         |       | caption_text         |
| video_duration      |       | start_timestamp      |
+---------------------+       | end_timestamp        |
                              +----------------------+
Entities:
Video: Represents the video file, with an ID (video_id) to associate with captions.

Attributes:
video_id: Unique identifier for each video.
video_url: URL of the hosted video.
video_title: Optional, to store the title of the video.
video_duration: Duration of the video (in seconds), useful for validating timestamps.
Caption: Represents each individual caption with associated timestamps for when it appears.

Attributes:
caption_id: Unique identifier for each caption.
video_id: Foreign key linking to the Video entity, indicating which video this caption belongs to.
caption_text: The caption text to be displayed.
start_timestamp: Timestamp (in seconds) when the caption starts.
end_timestamp: Timestamp (in seconds) when the caption ends (optional, could be null).
Relationships:
A Video can have multiple Captions (one-to-many relationship).
Each Caption is associated with exactly one Video.

### Edge Cases

1. Video URL Handling
Invalid Video URL: User enters an invalid or broken video URL.
Solution: Validate URL format and display an error if invalid.

Unsupported Video Format: Video URL points to an unsupported format (e.g., .flv, .avi).
Solution: Check for supported formats (e.g., .mp4, .webm, .ogg) and display an error if unsupported.

External Video URL Issues (CORS): Cross-Origin Resource Sharing (CORS) issues prevent video from loading.
Solution: Ensure the video provider allows cross-origin requests or display a CORS-related error message.(not implemented)

2. Captions and Timestamps
Invalid or Malformed Timestamp: User enters an incorrectly formatted timestamp (e.g., 60:00 instead of 01:00:00).
Solution: Validate timestamps and show an error message if invalid.

Overlapping Timestamps: Captions with overlapping timestamps (e.g., two captions start at the same time).
Solution: Detect overlapping timestamps and prompt the user to adjust them.For now the second updated caption within the same timestamp will be displayed .
like 2s-3s - "hi"
     2s-3s - "hello" - hello will be shown

Timestamps Beyond Video Duration: A caption's timestamp exceeds the video’s total duration.
Solution: Validate timestamps against video duration and show an error if out of bounds.
(not implemented but taken into account , major potential extension)


Captions Not Showing or Disappearing Too Soon: Captions may not display correctly or disappear prematurely.
Solution: Ensure proper synchronization of captions with video playback, allowing reasonable time for display.


3. User Interaction and Experience

Paused Video and Caption Synchronization: User pauses the video and enters captions while paused.
Solution: Ensure captions synchronize correctly when the video is resumed.

Fast Video Seeking: User seeks to a different part of the video, causing captions to become unsynchronized.
Solution: Handle seeking by updating captions based on the current video time after the seek event.

Captions Overlap Video Controls: Captions may cover UI elements like play/pause buttons or other controls.
Solution: Ensure captions are positioned at the bottom and styled properly to avoid overlapping controls.

4. Form Handling
Missing Captions or Timestamps: User submits the form without entering captions or timestamps.
Solution: Validate form to ensure captions and timestamps are provided before submission.

Large or Long Captions: Captions may be too long or short for the designated display time.
Solution: Limit the caption length and display a warning if they exceed the maximum allowed time.

5. Performance Issues
Large Videos or Multiple Videos: Large video files slow down the app or cause performance issues.
Solution: Implement lazy loading or streaming for videos to reduce loading times.
Browser Compatibility Issues: Videos may not display properly across different browsers.

Solution: Detect supported video formats and display a fallback message for unsupported browsers.

6. Saving/Exporting Captions
Empty Captions File: User tries to export captions but the file is empty.
Solution: Validate that there are captions before allowing export and notify the user if the file is empty.

Corrupted Captions Export: Errors in exporting captions in formats like .srt or .vtt.
Solution: Ensure correct formatting and handle export errors, providing user feedback if something goes wrong.

7. Accessibility and Usability
Inadequate Contrast for Captions: Captions may be hard to read against video backgrounds.
Solution: Ensure captions have high contrast and provide options to adjust caption appearance (e.g., size, color).

Video timing - The length of the video with some validations is important as it cn increase the server charge and load in some cases .



### UI/UX Design

The Landing Page  :  The landing page consists of two section in left and right with  simple Ui having a video (dummy) on one side and user Auth on the other side , currently there wil be option to go directly to the next page . 

The selection page where the user will get an option to either upload a video from device or access the video trough URL . the video should be hosted and in mp4 format .

The main page where the components like captioneditor , videoplayer etc will be used .

After the caption is added user will get the button to view the complete video with caption by going to the next page .

Download button will be additional button with night mode as a functionality .



## UI FLOW : 

Home Page  --> Account creation / Directly go to next page( for now)
  |
  V
Selection Page -->  Upload from device or Enter Video URL options
   |
    V
Enter Video URL -> "Start Editing" (for now)
  |
  V
Caption Editing Page
  |--> Enter Caption Text
  |--> Set Timestamp (Start/End Time)
  |--> Video Player (Preview with Captions)
  |--> Caption Timeline (Adjust Captions)
  |--> Error Validation (Invalid Captions)
  |
  V
Caption Preview & Testing Page
  |--> Test Synchronization of Captions with Video
  |--> Adjust Captions if Necessary
  |
  V
Once done editing , view video with captions

Save, Export, or Share Page (potential features)
  |--> Save as .srt/.vtt File
  |--> Share Options (Social Media, Email, etc.)
  |--> Back to Homepage (New Video)


1)  Landing Page (Home)

This is where users first land on the app. They should be able to quickly understand the app's purpose and start interacting with the main feature: adding captions to a video 

Key Elements:

Video (dummy video playing)
CTA Button (for user auth or account creation)
Directly take to next page for now

Selection Page

Key elemets 

Upload options (either select from device or share link)

Video Caption Editing Page
This is the main interface where users will interact with the video and the captions. It’s where the majority of the work will happen.

Video Player: Plays the video with the ability to pause, play, and seek to different timestamps. Also includes a progress bar.
Caption Input Area: A text box where users can enter the text for the caption.
Timestamp Controls: Mechanism (e.g., a slider, input box, or buttons) to specify when the caption should start and end in the video.
Current Timestamp Display: A live display of the current timestamp in the video.
Add/Remove Caption Buttons: Buttons to add or delete captions.
Caption Timeline: A timeline displaying the positions of all captions relative to the video’s progress. This allows users to drag and adjust captions.
Preview Area: A small preview area where captions can be viewed in real time on the video.


Editing Captions:
 
At least a word should be written to start editing and view the edited video word may contain letter and numerbers , for now only a character witjout any word is not allowed


Caption Preview & Testing Page

After entering captions and setting their timing, the user can preview how the captions will appear during playback to ensure synchronization.

### Trade offs

1. Performance vs. Feature Set
a. Lazy Loading vs. Instant Video Playback
Trade-Off: Implementing lazy loading or streaming for large video files can improve performance, but it may introduce a slight delay in video playback, especially for large files or slower network connections.
Decision: If  prioritize fast loading and responsiveness, it might choose to load videos in chunks . However, if app aims for instant video playback without buffering delays, avoid lazy loading but risk slower initial load times, especially for large files.
b. Client-Side Rendering vs. Server-Side Rendering
Trade-Off: Client-side rendering (CSR) offers a faster, more dynamic experience but might suffer from slower initial load times, especially with complex JavaScript and large video files. On the other hand, server-side rendering (SSR) improves the time to first contentful paint but requires more processing on the server, potentially increasing server load.
Decision: If SEO and initial page load speed are important, SSR may be preferred. For a highly interactive app, CSR (React) is likely the better choice, but it comes with the cost of longer initial loading times.
2. Flexibility vs. Simplicity in UI/UX Design
a. Customizable Caption Styles vs. Simple Default Styles
Trade-Off: Offering the ability to customize caption styles (font size, color, background opacity) adds flexibility for users but also complicates the UI and development. Users with specific needs (e.g., visual impairments) may appreciate this customization, but it introduces additional complexity in both frontend and backend logic.
Decision: If choose to keep the app simple, default styling may suffice. If accessibility and user experience are top priorities, offering customization options could create a better experience, though it adds complexity.
b. Full-Screen Video vs. In-Page Video Player
Trade-Off: A full-screen video player provides an immersive experience but reduces the amount of available screen space for interacting with captions or UI elements. On the other hand, keeping the video in a fixed size within the page may limit the user experience but allows for better control over the layout of the captions and UI.
Decision: If you prioritize user immersion, full-screen may be the best approach. However, if UI control and ease of interaction are more important, an in-page player may work better.
3. Scalability vs. Simplicity in Form Handling
a. Simple Form Validation vs. Complex Form Handling
Trade-Off: Implementing advanced form handling features (like timestamp validation, complex user input scenarios, dynamic form fields) ensures better control and accuracy of the captions but adds complexity to the app. For example, using a library like React Hook Form along with Yup or Zod for validation allows more precise control over forms but increases the complexity of the codebase.
Decision: For a simpler app with fewer features, basic validation (e.g., only ensuring that fields are not empty) may be sufficient. But for more robust and error-free functionality, advanced form handling and validation techniques are recommended, though they come with additional development overhead.
b. Real-Time Caption Synchronization vs. Background Caption Syncing
Trade-Off: Real-time caption synchronization (displaying captions immediately as the video plays) requires more frequent checks of the video’s current time, potentially leading to performance overhead, especially for large videos. Background syncing would reduce this load by updating captions periodically, but it may cause slight delays in showing captions.
Decision: For better performance, background syncing may be preferred. However, for the most accurate captioning experience, real-time synchronization is typically preferred, at the cost of potential performance issues.
4. Custom Video Player vs. Browser’s Default Video Player
a. Custom Video Player vs. Built-In HTML5 Player
Trade-Off: A custom video player gives complete control over UI/UX elements, such as integrating the captions directly into the video player, adding custom controls, or customizing the player’s appearance. However, building a custom video player can be time-consuming and may require handling edge cases (e.g., video buffering, resolution changes, etc.).
Decision: If need more control over user interactions and the ability to deeply integrate captions, a custom player might be necessary. If simplicity, stability, and low overhead are more important, the HTML5 video player might be sufficient.
5. Video Hosting and Integration
a. Local Video Hosting vs. External Video Hosting Services
Trade-Off: Hosting videos locally allows for full control over video files and their delivery but increases server load and potentially impacts performance due to large file sizes. External services like YouTube, Vimeo, or AWS Media Services handle video hosting and delivery more efficiently but may come with additional costs and limit the customization of the video player or access to analytics.
Decision: If control over the video content and customization is important,  choose local hosting. If scalability, cost-effectiveness, and performance are more important, external hosting services might be the better option.
6. Handling Large Video Files
a. Preprocessing Video for Captions vs. Real-Time Processing
Trade-Off: Preprocessing the video to extract timestamps or synchronize captions with the video can provide a better user experience by reducing the load during playback. However, this requires more server-side computation and may increase initial setup time. Real-time processing (e.g., adding captions as the video plays) may be simpler but could result in a slower or less efficient user experience.
Decision: For better user experience, preprocessing might be a good option if  control over video file uploads. For simplicity and lower upfront costs, real-time processing could be more effective, especially if you’re dealing with user-provided content.
7. Accessibility vs. General User Interface
a. High Accessibility Features vs. General User Experience
Trade-Off: Ensuring the web app is fully accessible (e.g., keyboard navigation, screen reader support, customizable captions) provides a better experience for users with disabilities but can introduce extra complexity into the design and development of the UI.
Decision: If inclusivity and accessibility are key, incorporating advanced accessibility features will make the app better for a broader audience but at the cost of additional development and testing. If your target audience does not have significant accessibility needs, a simpler approach may suffice.
8. Backend vs. Frontend Validation
a. Frontend Validation vs. Backend Validation
Trade-Off: Frontend validation (e.g., using React Hook Form and Yup) helps to provide instant feedback to the user and can prevent many simple errors before submission. However, it is not secure, as it can be bypassed. 
Decision: For critical features (like timestamp validation, captions export), backend validation is essential to prevent errors and ensure security. For user convenience, frontend validation should also be implemented to give users immediate feedback.








# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!





## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)



