# fortune-cookie-react-native
demo react native app
built simple pages from figma design

## How to run project
### npm install
- iOS
cd ios/
pod install
###npx react-native run-ios --simulator="iPhone 11"
 you can change simulator whatever you want.
- Android
### npx react-native run-android

## Features What I did
### Showing fortune items from mock-up json data
 - 0, 5, 10, ... items have full device width
 - other items have half of device width
 - all fortune items have random background colors
### Showing fortune item detail page as modal dialog with fade animation
### Clicking `+`floating button allows you navigate to inputting page.
 - When keyboard is shown, `done` button will be appeared, vice-versa when keyboard is hidden, `done` button wll be disappeared.
Integrated snapshot testing for 3 components using jest library

