# ⚡ SPARK Community - The Ultimate Coding Hub

Welcome to **SPARK Community**, a platform dedicated to fostering a **coding culture** in college! We aim to **connect students, host contests, share resources, and provide mentorship** to help learners excel in **Data Structures, Algorithms, and Competitive Programming**.

🌟 **Website URL:** [SPARK](https://sparkmbm.vercel.app/)  
📌 **Join Us:** [WhatsApp](https://chat.whatsapp.com/BqAr6ziE7Vl0Aa1cwUwsk4) | [Telegram](https://t.me/spark_mbm) | [LinkedIn](https://www.linkedin.com/company/spark-mbm/) | [Instagram](https://www.instagram.com/spark.mbm)

---

## 🔥 Features

✅ **Homepage** – Showcasing upcoming contests, resources, and announcements  
✅ **Event Management** – Register for upcoming coding contests and view past events  
✅ **Gallery** – Highlights contest winners & community activities  
✅ **Resource Hub** – Access **DSA, CP, and Interview Prep** materials  
✅ **Join Now Page** – One-click access to **WhatsApp, Telegram, Linkedin and Instagram**  
✅ **Contact Form with EmailJS** – Directly message the SPARK team  
✅ **Google Sheets Integration** – Registration data stored automatically  
✅ **Fully Responsive UI** – Optimized for **mobile, tablet, and desktop**

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **State Management:** React Hooks
- **Styling & UI:** Tailwind CSS
- **Data Handling:** Google Sheets API
- **Backend:** Next.js API Routes (serverless)
- **Email Integration:** EmailJS
- **Hosting & Deployment:** Vercel

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone http://github.com/Pradyumn-Chaudhary/SPARK-MBM
cd SPARK-MBM
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Set Up Google Sheets & Apps Script**

## 🔹 Step 1: Create a Google Sheet

1. Open **[Google Sheets](https://docs.google.com/spreadsheets/u/0/)** and create a **new sheet**.
2. Rename the first row as headers:

   ```
   Full Name | Branch | Contact | Email | Difficulty | Timestamp
   ```

3. Copy your **Google Sheet ID** from the URL:

   ```
   https://docs.google.com/spreadsheets/d/GOOGLE_SHEET_ID/edit
   ```

- **Your `GOOGLE_SHEET_ID` is the part after `/d/` and before `/edit`**.

---

## 🔹 Step 2: Create a Google Apps Script

1. In **Google Sheets**, click **Extensions → Apps Script**.
2. Delete any existing code and **paste the script below**:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.openById(
       "YOUR_GOOGLE_SHEET_ID"
     ).getActiveSheet();

     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.fullName,
       data.branch,
       data.contact,
       data.email,
       data.difficulty,
       new Date().toLocaleString(), // Timestamp
     ]);

     return ContentService.createTextOutput(
       JSON.stringify({ status: "Success" })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Replace `"YOUR_GOOGLE_SHEET_ID"` with your actual Google Sheet ID.
4. Click **Deploy → New Deployment**, then follow these steps:

   - Select **Web App**.
   - **Who has access?** → Select _"Anyone"_.
   - Click **Deploy**, then **Authorize Access**.

5. Copy the **Web App URL**, which looks like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

### **4️⃣ Set Up Environment Variables**

Create a .env.local file and add:

```bash
NEXT_PUBLIC_PUBLIC_KEY=your-emailjs-public-key
NEXT_PUBLIC_SERVICE_ID=your-emailjs-service-id
NEXT_PUBLIC_TEMPLATE_ID=your-emailjs-template-id
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your-google-script-url
```

### **5️⃣ Run the Development Server**

```bash
npm run dev
```

Open http://localhost:3000 to view the site locally.

## 🤝 Contributing

We **welcome contributions!** If you'd like to improve the project, follow these steps:

1. **Fork the repository** by clicking the "Fork" button at the top right of this page.
2. **Clone your forked repo** to your local machine:

   ```bash
   git clone https://github.com/your-username/SPARK-MBM.git
   cd SPARK-MBM
   ```

3. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```

4. Make your changes and commit them:

   ```bash
   git commit -m "Added new feature"
   ```

5. Push your branch to GitHub:

   ```bash
   git push origin feature-name
   ```

6. Create a Pull Request (PR):

- Open GitHub and navigate to the original repository.
- Click on "Compare & pull request".
- Add a meaningful title and description for your changes.
- Click "Create pull request".

### 📌 Follow the coding style and use clear commit messages to help maintainers review your PR efficiently.

## 📝 License

This project is open-source under the MIT License.

## **📝 Author**

[Pradyumn Chaudhary](https://github.com/Pradyumn-Chaudhary)
