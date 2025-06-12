# TCA Interact SharePoint Web Part

A modern SharePoint Framework (SPFx) web part that replicates the TCA Interact design with a responsive 3-column layout featuring Our Mission, Core Values, Resource Links, Project Spotlight, Shout Outs, Events, and Social Media links.

## 🚀 Features

- **Responsive Design**: 3-column layout that adapts to different screen sizes
- **Dynamic Content**: Pulls data from SharePoint lists (ProjectSpotlight, ShoutOuts, Events)
- **External Links**: Resource links open in new tabs
- **Social Media Integration**: Links to LinkedIn, Facebook, and Instagram
- **Modern UI**: Clean design with yellow pill-style buttons and consistent styling

## 📋 Prerequisites

- Node.js version 16.13.0 to 18.17.1 (SPFx requirement)
- SharePoint Online tenant
- Global installation of SharePoint generator

```bash
npm install -g yo @microsoft/generator-sharepoint
```

## 🛠️ Installation & Setup

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create SharePoint Lists** (Optional - defaults will be used if lists don't exist):

   ### ProjectSpotlight List
   - **Title** (Single line of text)
   - **Image** (URL or Image field)
   - **Description** (Multiple lines of text)

   ### ShoutOuts List
   - **Name** (Single line of text)
   - **Title** (Single line of text) 
   - **Nominator** (Single line of text)
   - **Text** (Multiple lines of text)

   ### Events List
   - **Title** (Single line of text)
   - **Date** (Single line of text)
   - **Location** (Single line of text)

## 🏃‍♂️ Development

### Serve locally:
```bash
npm run serve
```

### Build for production:
```bash
npm run build
```

### Bundle for deployment:
```bash
npm run ship
```

This will:
1. Clean the project
2. Bundle with --ship flag
3. Package the solution

## 📦 Deployment

1. **Build the package**:
   ```bash
   npm run ship
   ```

2. **Upload to App Catalog**:
   - Navigate to your SharePoint Admin Center
   - Go to App Catalog
   - Upload the `.sppkg` file from `sharepoint/solution/` folder

3. **Add to Site**:
   - Go to your SharePoint site
   - Edit a page
   - Add the "TCA Interact" web part

## 🎨 Customization

### Updating Resource Links
Edit `src/webparts/tcaInteract/components/ResourceLinks.tsx` and modify the `resourceLinks` array.

### Changing Core Values
Edit `src/webparts/tcaInteract/components/CoreValues.tsx` and update the `coreValues` array.

### Updating Social Media Links
Edit `src/webparts/tcaInteract/components/SocialMediaLinks.tsx` and modify the `socialLinks` array.

### Styling Changes
All styles are in `src/webparts/tcaInteract/components/TcaInteract.module.scss`.

## 🔧 Architecture

### Component Structure
```
src/webparts/tcaInteract/components/
├── TcaInteract.tsx          # Main component
├── TcaInteract.module.scss  # Styles
├── Header.tsx               # Welcome header
├── Mission.tsx              # Our Mission section
├── CoreValues.tsx           # Core Values with icons
├── ResourceLinks.tsx        # Yellow pill buttons
├── ProjectSpotlight.tsx     # Dynamic project data
├── ShoutOut.tsx             # Employee recognition
├── Events.tsx               # Upcoming events
└── SocialMediaLinks.tsx     # Social media icons
```

### Data Flow
1. Main component initializes PnPjs with SharePoint context
2. Attempts to load data from SharePoint lists
3. Falls back to default data if lists don't exist
4. Passes data to child components via props

## 🧪 Testing

### Local Testing
1. Run `npm run serve`
2. Open workbench URL provided
3. Add the web part to test functionality

### SharePoint Testing
1. Deploy to test environment
2. Create sample data in SharePoint lists
3. Verify all links open in new tabs
4. Test responsive behavior

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- SharePoint Online
- Microsoft Teams (as a tab)

## 📝 License

© 2024 TCA Architects. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, contact the TCA IT team.

---

**Note**: This web part is designed specifically for TCA Architects' SharePoint environment and may require customization for other organizations. 