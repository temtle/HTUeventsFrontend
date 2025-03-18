# Project Update: Settings and Dark Mode Enhancements

## New Functionality
1. **Added Settings Tab**: Introduced a new "Settings" tab in the bottom navigation bar.
2. **Profile Screen Moved**: The Profile screen is now accessible through the Settings tab instead of being a separate tab.
3. **Preferences Screen Added**: A new Preferences screen is available within Settings.
4. **Dark Mode Toggle**: Implemented a functional dark mode switch inside Preferences.
5. **Enable Notifications Switch**: Added a toggle for enabling notifications (currently non-functional, serves as a template for future use).

---

## Notable Code Changes
### **New Components**
- **`SettingScreen.js`**: Main screen for the settings section.
- **`PreferenceScreen.js`**: Contains user preferences like dark mode and notifications.
- **`ThemeContext.js`**: Manages dark mode state and provides a theme context across the app.

### **Modifications in `App.js`**
- **Introduced `SettingStack`**: Organizes Settings-related screens into a structured, scalable stack navigation.
- **Added Theme Support**: Implemented `lightTheme` and `darkTheme` for dark mode.
- **Enhanced Navigation Options**: Updated `Tab.Navigator` and `Stack.Navigator` to support theme changes.
- **Wrapped App in `AppWithTheme`**: Ensures consistent dark mode application across all screens.

### **Dark Mode Styling Updates**
- Added dark mode-compatible styles to:
  - `ProfileScreen.js`
  - `HomeScreen.js`
  - `EventCard.js`
  - `DetailsScreen.js`

### **Other Updates**
- Updated relevant imports in:
  - `App.js`
  - `ProfileScreen.js`
  - `HomeScreen.js`
  - `EventCard.js`
  - `DetailsScreen.js`