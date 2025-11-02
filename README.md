# Betano Demo - Sports Betting Platform

A demo React application inspired by Betano's sports betting platform, integrated with Optimizely Feature Experimentation to showcase feature flags and event tracking.

## Features

- **Sports Betting Homepage**: Modern, responsive design with sports grid, live matches, and promotions
- **Quick Deposit CTA**: Floating button with A/B testing variations
- **Optimizely Integration**: Feature flags and event tracking
- **Deposit Flow**: Fake deposit page for tracking conversions
- **Netlify Ready**: Configured for easy deployment

## Optimizely Feature Flags

### Quick Deposit Button Variations

The "Quick Deposit" button has three variations controlled by the `quick_deposit_button_variation` feature flag:

1. **Control** (`control`): Non-prominent design with Cross icon (✕)
2. **Variation 1** (`green_arrow`): Prominent green gradient with arrow icon (➜)
3. **Variation 2** (`orange_arrow`): Prominent orange gradient with arrow icon (➜)

## Optimizely Events

Two custom events are tracked:

1. **`quick_deposit_clicked`**: Fired when user clicks the Quick Deposit button
2. **`deposit_completed`**: Fired when user completes a deposit (includes amount and payment method)

## Optimizely Configuration

- **SDK Key**: `PyeuxTPfaBgAB4g3etHPC`
- **Project ID**: `6178080964739072`
- **Token**: `2:pzagrkVVbMz-661W_tB0XXqAEsEFDMFnpinn5DOmrFel8B0Ua2MY`

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Netlify account (for deployment)

### Local Development

1. **Clone/Navigate to the project**:
   ```bash
   cd betano-demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize and deploy**:
   ```bash
   netlify init
   ```
   Follow the prompts to create a new site or link to existing one.

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Netlify Web Interface

1. **Push to Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `build`
     - **Node version**: `18`
   - Click "Deploy site"

### Option 3: Drag & Drop

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `build/` folder

## Setting Up Optimizely Experiment

### 1. Create Feature Flag in Optimizely

1. Log in to [Optimizely](https://app.optimizely.com)
2. Navigate to your project (ID: 6178080964739072)
3. Go to **Flags** → **Create Flag**
4. **Flag Details**:
   - **Key**: `quick_deposit_button_variation`
   - **Name**: "Quick Deposit Button Variation"
   - **Description**: "A/B test for Quick Deposit button design"

5. **Create Variations**:
   - **Control**: `control` (default)
   - **Variation 1**: `green_arrow`
   - **Variation 2**: `orange_arrow`

### 2. Create Events in Optimizely

1. Go to **Events** → **Create Event**
2. **Event 1**:
   - **Key**: `quick_deposit_clicked`
   - **Name**: "Quick Deposit Clicked"
   - **Description**: "User clicked the Quick Deposit button"

3. **Event 2**:
   - **Key**: `deposit_completed`
   - **Name**: "Deposit Completed"
   - **Description**: "User completed a deposit transaction"

### 3. Create Experiment

1. Go to **Experiments** → **Create Experiment**
2. **Experiment Details**:
   - **Name**: "Quick Deposit Button A/B Test"
   - **Flag**: Select `quick_deposit_button_variation`
   - **Variations**:
     - Control (33%)
     - Green Arrow (33%)
     - Orange Arrow (34%)

3. **Metrics**:
   - **Primary**: `deposit_completed` (Conversion rate)
   - **Secondary**: `quick_deposit_clicked` (Click-through rate)

4. **Start the experiment**

## Project Structure

```
betano-demo/
├── public/
├── src/
│   ├── components/
│   │   ├── HomePage.tsx          # Main landing page
│   │   ├── HomePage.css
│   │   ├── QuickDepositButton.tsx # Feature flag component
│   │   ├── QuickDepositButton.css
│   │   ├── DepositPage.tsx       # Deposit flow
│   │   └── DepositPage.css
│   ├── App.tsx                   # Optimizely provider setup
│   ├── App.css
│   └── index.tsx
├── netlify.toml                  # Netlify configuration
├── package.json
└── README.md
```

## Technology Stack

- **React 18** with TypeScript
- **Optimizely React SDK** (@optimizely/react-sdk)
- **CSS3** for styling
- **Netlify** for hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo application for demonstration purposes only. Not affiliated with Betano.

## Disclaimer

**18+ Only. For demonstration purposes only. Please gamble responsibly.**

This application simulates a sports betting platform but does not process real transactions or accept real money.
