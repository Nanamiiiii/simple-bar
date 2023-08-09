export const timeStyles = /* css */ `
.time {
  position: relative;
  background-color: #1B262C;
  color: #a9b1d6;
  overflow: hidden;
  z-index: 0;
}
.simple-bar--widgets-background-color-as-foreground .time {
  color: #1B262C;
  background-color: transparent;
}
.time__filler {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  background-color: rgba(255, 255, 255, 0.15);
  transform-origin: left;
  pointer-events: none;
  touch-action: none;
  z-index: -1;
}
`;
