# Raiyan Ahmed — Editable E-Portfolio

## Start
Open `index.html` in Chrome, Firefox, or Edge. Your real portrait is already included. Project screenshots are included, as is your verified education and certificate from your resume.

## Change anything without coding
1. Open `editor.html` (or click "Edit Portfolio" on the website).
2. Edit your personal details, **HSC/SSC education details**, skills, coursework, certifications, profile text, project title, project role, project write-up, resume summary, or achievements.
3. Upload a replacement portrait or any of five project screenshots.
4. Click **Save Preview**. Return to `index.html` and refresh. The preview is stored in your browser.
5. Click **Download Updated Data**. Your browser downloads `portfolio-data.js`.
6. **Replace** the old `portfolio-data.js` in this website folder with the newly downloaded version. This step is essential: browser preview alone does not update the published website.
7. Reopen the website to verify everything. Upload this folder to GitHub Pages when ready.

## Introduction video — already included
Your uploaded introduction video is included at `assets/introduction.mp4` and is displayed on the homepage under Introduction. No further upload is necessary. You can replace it via `editor.html` later. The video is approximately 2 minutes 29 seconds long.

## Replace introduction video
1. In the editor, select your video and preview it.
2. Download/copy the video as `introduction.mp4` and place the video inside the `assets` folder. Use an MP4 video for best compatibility.
3. The editor's Video Path should read `assets/introduction.mp4`.
4. Download updated `portfolio-data.js` and replace the existing one.
5. Reload `index.html`: your intro video will appear in the video section.

Note: The video is not embedded into the JS export because videos can be large. For other files, project gallery images are embedded in the updated data file for convenient editing.

## Files
- index.html — homepage with photo, academic details, projects, certifications, video and contact
- project.html — Hospital Management System details with five screenshots
- resume.html — printable resume with education, skills, projects and certificate
- editor.html — visual control panel for editable portfolio information and uploads
- portfolio-data.js — persistent editable data file
- portfolio-render.js — data display on web pages
- assets/raiyan-profile.jpg — original profile photo
- assets/project — uploaded project screenshots
- styles.css — theme and responsive styling

## Publish on GitHub Pages
1. Create a **public** GitHub repository, for example `raiyan-portfolio`.
2. Upload the **contents** of the extracted folder, with `index.html` at the repository root.
3. Open GitHub repo Settings → Pages → Deploy from a branch; choose `main`, root, Save.
4. Use the link GitHub Pages provides.

Never publish private contact/address details you do not wish to disclose. The portfolio uses public email and links from your supplied details.

## Content attribution
Academic and project information is based on the user's uploaded CV, given text, and screenshots. Exact personal contributions should be reviewed and adjusted by the user. Project screenshots document visible interfaces but do not establish full end-to-end validation.

## Education editing
Open `editor.html` and scroll to **Education — university, HSC & SSC**. The 2023 HSC and 2021 SSC entries are already shown on the homepage and resume. Edit and export `portfolio-data.js` to publish changes.

### Video display fix
The homepage contains the embedded introduction player directly; the obsolete coming-soon placeholder has been removed. Ensure `assets/introduction.mp4` is uploaded alongside `index.html` to GitHub Pages. If the old placeholder remains visible online, re-upload all updated files and hard-refresh (Ctrl+Shift+R).
