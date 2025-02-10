# Valentine's Day Invitation App

This interactive **Valentine's Day invitation app** allows users to send a cute invitation, track the time until Valentine's Day, and see fun animations. Built with **Next.js** (React framework), **Tailwind CSS**, and **Framer Motion** for animations, it offers a countdown to Valentine's Day, with an exciting pink overlay animation as the event approaches.

## Features

- **Interactive Countdown**: Displays the time remaining until Valentine's Day, updating every second.
- **Storm Animation**: When there is less than one day remaining, the page transitions into a **pink flickering overlay** to create a romantic atmosphere.
- **Responsive Design**: Fully responsive, adapting to mobile and desktop layouts.
- **Sweet Invitation**: A charming layout featuring a mock phone, personalized text, and a "Yes/No" response section.
- **Customizable**: Easy to update the target date, colors, and animations.

## Demo

You can see a live demo of the application here: [Demo URL](https://your-demo-link.com).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/valentines-day-invitation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd valentines-day-invitation
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Technologies Used

- **Next.js**: React framework for building static and server-rendered web applications.
- **Tailwind CSS**: Utility-first CSS framework for creating custom designs quickly.
- **Framer Motion**: A popular React library for animations.
- **React**: JavaScript library for building user interfaces.

## How It Works

1. **Countdown Timer**: The app shows a countdown that updates every second. Once the remaining time reaches **less than one minute**, the **storm animation** kicks in, adding a dramatic pink overlay to the page.
   
2. **Responsive Layout**: The layout is designed with Tailwind CSS to automatically switch from a **two-column layout** on desktop to a **single-column layout** on mobile devices.

3. **Animation**: Using **Framer Motion**, the storm effect flickers the pink gradient overlay as the event approaches, creating a fun and interactive user experience.

## Customization

To change the target date for your event, update the `TARGET_DATE` constant in `CountdownTimer.tsx` to your desired target date:

```js
const TARGET_DATE = new Date("February 14, 2026 00:00:00").getTime();

You can also customize the colors, animations, and layout styles by adjusting the Tailwind CSS classes or the Framer Motion animations in the components.

Contributing
	1.	Fork the repository
	2.	Create a new branch (git checkout -b feature-name)
	3.	Make your changes
	4.	Commit your changes (git commit -am 'Add new feature')
	5.	Push to the branch (git push origin feature-name)
	6.	Create a new pull request

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
	•	Next.js for the framework.
	•	Tailwind CSS for the amazing utility-first CSS framework.
	•	Framer Motion for creating beautiful animations.

